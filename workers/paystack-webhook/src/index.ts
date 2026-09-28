import { captureWorkerException, ExecutionContext, WorkerEnv } from "../../common/sentry";

export interface Env extends WorkerEnv {
  PAYSTACK_SECRET_KEY: string;
  INNGEST_EVENT_KEY: string;
}

/**
 * Verify Paystack HMAC-SHA512 webhook signature using Web Crypto API.
 */
async function verifyPaystackSignature(
  rawBody: string,
  signature: string | null,
  secretKey: string
): Promise<boolean> {
  if (!signature || !secretKey) return false;

  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    enc.encode(secretKey),
    { name: "HMAC", hash: "SHA-512" },
    false,
    ["sign"]
  );

  const signed = await crypto.subtle.sign("HMAC", key, enc.encode(rawBody));
  const hashArray = Array.from(new Uint8Array(signed));
  const computedHash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

  return computedHash.toLowerCase() === signature.toLowerCase();
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    try {
      if (request.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
      }

      const signature = request.headers.get("x-paystack-signature");
      const rawBody = await request.text();

      // Enforce Sentry-instrumented payment validation path
      if (!env.PAYSTACK_SECRET_KEY) {
        throw new Error("Missing PAYSTACK_SECRET_KEY environment variable");
      }

      const isValid = await verifyPaystackSignature(rawBody, signature, env.PAYSTACK_SECRET_KEY);
      if (!isValid) {
        ctx.waitUntil(
          captureWorkerException(new Error("Invalid Paystack webhook signature rejected"), env, {
            service: "paystack-webhook",
            url: request.url,
          })
        );
        return new Response(JSON.stringify({ error: "Invalid signature" }), {
          status: 401,
          headers: { "Content-Type": "application/json" },
        });
      }

      const eventData = JSON.parse(rawBody);

      // In later segments, this publishes event to Inngest for asynchronous handling
      return new Response(
        JSON.stringify({
          status: "accepted",
          event: eventData.event,
          receivedAt: new Date().toISOString(),
        }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    } catch (error) {
      // Mandated by Principle #7: Every payment code path must have Sentry instrumentation
      ctx.waitUntil(
        captureWorkerException(error, env, {
          service: "paystack-webhook",
          url: request.url,
        })
      );

      return new Response(
        JSON.stringify({ error: "Internal Server Error in Paystack Webhook Receiver" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
