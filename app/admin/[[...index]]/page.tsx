"use client";

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

// import { NextStudio } from "next-sanity/studio";
// // import config from "../../../sanity.config";

// export default function StudioPage() {
//   return <NextStudio config={config} />;
// }

export default function AdminPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <p className="text-gray-600">Sanity Studio is currently disabled</p>
      </div>
    </div>
  );
}
