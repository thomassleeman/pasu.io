"use server";
//Clerk
import { auth } from "@clerk/nextjs/server";
//Database
import { db } from "@/app/db";
import { courses, users } from "@/app/db/schema";
import { eq, and } from "drizzle-orm";

//sanity
import { client } from "@/sanity/client";

/* ----------------------------------------------------------------------------------------- */
/* COURSE PAGE QUERIES */
/* ----------------------------------------------------------------------------------------- */

export async function getCourseData(slug: string, origin: string) {
  console.log("Fetching data from Sanity.io... Request from: ", origin);
  const query = `*[_type == "course" && slug.current == "${slug}"][0]{
      title,
      "slug": slug.current,
      headerImage,
      content[]{
        ...,
        markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
      },
      "resources": resources[]->{
  "title": title,
  "headerImage": coalesce(headerImage, ""),
  "slug": slug.current,
  "type": _type,
}
  }`;
  const article = await client.fetch(query);

  return article;
}

/* ----------------------------------------------------------------------------------------- */

export async function getCoursesData() {
  const query = `*[_type == "course"][0...10]{
      title,
      "slug": slug.current,
      headerImage,
      summary[]{
        ...,
      },
  }`;
  const articles = await client.fetch(query);

  return articles;
}

/* ----------------------------------------------------------------------------------------- */

export async function getNamedCoursesData(slugs: string[]) {
  const query = `*[_type == "course" && slug.current in $slugs][0...10]{
      title,
      "slug": slug.current,
      headerImage,
      summary[]{
        ...,
      },
  }`;
  const articles = await client.fetch(query, { slugs });

  return articles;
}

/* ----------------------------------------------------------------------------------------- */

export async function getCompletedModules(courseSlug: string) {
  // Get the authenticated user from Clerk
  const { userId: clerkId } = await auth();
  if (!clerkId) {
    return;
  }

  // Find the user in the database
  const user = await db.query.users.findFirst({
    where: eq(users.clerkId, clerkId),
  });

  if (!user) {
    return;
  }

  // Find the course record for this user and course slug
  const courseRecord = await db.query.courses.findFirst({
    where: and(
      eq(courses.userId, user.id),
      eq(courses.courseSlug, courseSlug)
    ),
  });

  if (!courseRecord) {
    return;
  }

  // Return the resourcesCompleted object (Record<string, boolean>)
  return courseRecord.resourcesCompleted;
}
