import { captureWorkerException, ExecutionContext, WorkerEnv } from "../../common/sentry";

export interface Env extends WorkerEnv {
  CONVEX_URL: string;
  PASSPORT_RESOLVER_SECRET: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    try {
      if (request.method !== "GET") {
        return new Response("Method Not Allowed", { status: 405 });
      }

      // Health check endpoint
      if (url.pathname === "/health") {
        return new Response(JSON.stringify({ status: "healthy", service: "passport-resolver" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }

      // Extract passportId from path /p/:id or /resolve/:id
      const match = url.pathname.match(/^\/(?:p|resolve)\/([a-zA-Z0-9_-]+)/);
      if (!match) {
        return new Response(JSON.stringify({ error: "Invalid passport path" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }

      const passportId = match[1];

      // Edge cache lookup or forward to Convex public query
      // (Full query resolution implemented with Convex HTTP action in later segment)
      return new Response(
        JSON.stringify({
          passportId,
          service: "passport-resolver",
          status: "pending_convex_sync",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=60, s-maxage=300",
          },
        }
      );
    } catch (error) {
      ctx.waitUntil(
        captureWorkerException(error, env, {
          service: "passport-resolver",
          url: request.url,
        })
      );

      return new Response(
        JSON.stringify({ error: "Internal Server Error in Passport Resolver" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
  },
};
