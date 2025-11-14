"use server";

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
