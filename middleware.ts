import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Public routes accessible without logging in
const isPublicRoute = createRouteMatcher([
  "/",
  "/onboarding(.*)",
  "/services(.*)",
  "/professionals(.*)",
  "/invoice(.*)",
  "/passport/print(.*)",
  "/profile/print(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/p/(.*)",
  "/api/(.*)",
  "/robots.txt",
  "/sitemap.xml",
]);

export default clerkMiddleware(async (auth, request) => {
  const url = request.nextUrl;
  const host = request.headers.get("host") || "";
  const searchParams = url.searchParams;

  // Protect private routes with Clerk auth
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  // Create response
  const response = NextResponse.next();

  // Subdomain / Extension Detection & Header Tags
  let domainExtension = "modus.ng";

  if (host.startsWith("admin.") || host.includes("admin.modus.ng") || searchParams.get("domain") === "admin") {
    domainExtension = "admin.modus.ng";
    response.headers.set("X-Modus-Portal", "Admin-Operations");
  } else if (host.startsWith("partners.") || host.includes("partners.modus.ng") || searchParams.get("domain") === "partner") {
    domainExtension = "partners.modus.ng";
    response.headers.set("X-Modus-Portal", "Partner-Network");
  } else if (host.startsWith("app.") || host.includes("app.modus.ng") || searchParams.get("domain") === "app") {
    domainExtension = "app.modus.ng";
    response.headers.set("X-Modus-Portal", "Business-App");
  }

  // High-Security Headers
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=(), payment=(self)");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("X-Modus-Domain-Extension", domainExtension);

  return response;
});

export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|json|png|jpg|jpeg|webp|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
