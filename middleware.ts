// ensure that the /api/webhooks(.*) route is set as public.
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhooks(.*)",
  "/articles",
  "/articles/(.*)",
]);

export default clerkMiddleware(async (auth, req, evt) => {
  const { pathname } = req.nextUrl;

  if (isPublicRoute(req)) {
    return;
  }

  const authResult = await auth.protect();

  const userId = authResult.userId;

  if (pathname === "/home") {
    return NextResponse.redirect(new URL(`/home/${userId}`, req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
