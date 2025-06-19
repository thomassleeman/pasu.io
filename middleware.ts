import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // publicRoutes: ["/", "/signin", "/signup"],
  // afterAuth(auth, req, evt) {
  //   const { userId } = auth;
  //   const { pathname } = req.nextUrl;
  //   // Handle post-authentication redirects
  //   if (userId) {
  //     // If user is signed in and accessing auth pages, redirect to home
  //     if (pathname === "/signin" || pathname === "/signup") {
  //       return NextResponse.redirect(new URL(`/home/${userId}`, req.url));
  //     }
  //     // If accessing generic /home, redirect to their specific page
  //     if (pathname === "/home") {
  //       return NextResponse.redirect(new URL(`/home/${userId}`, req.url));
  //     }
  //   }
  //   // If not signed in and accessing protected routes
  //   if (!userId && pathname.startsWith("/home/")) {
  //     return NextResponse.redirect(new URL("/signin", req.url));
  //   }
  // },
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
