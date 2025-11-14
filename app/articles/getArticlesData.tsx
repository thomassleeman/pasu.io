//sanity
import { client } from "@/sanity/client";

const contentCarouselProjection = `title,
"id":_id,
  "classification": classification->name,
  date,
  headerImage,
  "slug": slug.current,
  "summary": summary[0].children[0].text,  
  "author": author->name,
  audio`;

/* ----------------------------------------------------------------------------------------- */
/* Get all articles */
/* ----------------------------------------------------------------------------------------- */

export async function getSortedArticlesData(
  orderedBy: string,
  order: "asc" | "desc"
) {
  const query = `*[_type == "article"]| order(${orderedBy} ${order}){${contentCarouselProjection}}`;

  const articles = await client.fetch(query);

  return articles;
}

/* ----------------------------------------------------------------------------------------- */
/* CONTENT CAROUSEL QUERIES */
/* ----------------------------------------------------------------------------------------- */

export async function getSortedLimitedArticlesData(
  orderedBy: string,
  order: "asc" | "desc",
  limit: number
) {
  const query = `*[_type == "article" && classification->_type != "course" ]| order(${orderedBy} ${order})[0..${
    limit - 1
  }]{${contentCarouselProjection}}`;

  const articles = await client.fetch(query);

  return articles;
}

/* ----------------------------------------------------------------------------------------- */
//this excludes course documents.
export async function getArticlesByCategory() {
  const query = `*[_type == "article" && classification._ref in *[_type == "category"]._id]{${contentCarouselProjection}}`;

  const articles = await client.fetch(query);

  // function groupByCategory(items: any[], groupName: string) {
  //   const grouped = items.reduce((result, item) => {
  //     const groupKey = item[groupName];
  //     if (!result[groupKey]) {
  //       result[groupKey] = [];
  //     }
  //     result[groupKey].push(item);
  //     return result;
  //   }, {});

  //   return Object.keys(grouped).map((key) => grouped[key]);
  // }

  function groupByCategory(items: any[], groupName: string) {
    const grouped = items.reduce((result, item) => {
      const groupKey = item[groupName];
      if (!result[groupKey]) {
        result[groupKey] = [];
      }
      result[groupKey].push(item);
      return result;
    }, {});

    let groupedArticles = Object.keys(grouped).map((key) => grouped[key]);

    // Find the index of the array for "The Basics" classification
    const basicsIndex = groupedArticles.findIndex((group) =>
      group.some((article: Article) => article.classification === "The Basics")
    );

    // If found, move the "The Basics" group to the start
    if (basicsIndex > -1) {
      const [basicsGroup] = groupedArticles.splice(basicsIndex, 1);
      groupedArticles.unshift(basicsGroup);
    }

    return groupedArticles;
  }

  const groupedArticles = groupByCategory(articles, "classification");
  return groupedArticles;
}

/* ----------------------------------------------------------------------------------------- */
/* ARTICLE PAGE QUERIES */
/* ----------------------------------------------------------------------------------------- */

export async function getArticleData(slug: string) {
  const query = `*[_type == "article" && slug.current == "${slug}"][0]{
      title,
      headerImage,
      quiz,
      content[]{
        ...,
        markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug
      }
    }
      },
       audio,
      author->,
      date,
      readingTime,
      classification->{
    "slug": slug.current
  }
  }`;
  const article = await client.fetch(query);

  return article;
}

/* ----------------------------------------------------------------------------------------- */

interface Category {
  name: string;
}

export async function getRelatedArticles(
  category: Category,
  currentArticle: string
) {
  const query = `*[_type == "article" && category->name == "${category.name}" && slug.current != "${currentArticle}"]| order(date desc)[0..3]{
            title,
           date,
           "slug": slug.current,
          "category":category->{name}.name,  
           headerImage,
           "author": author->{name}.name,
            "summary": summary[0].children[0].text,
            audio,
          }`;

  const articles = await client.fetch(query);

  return articles;
}

/* ----------------------------------------------------------------------------------------- */

export async function getArticlesForGivenCategories(categories: string[]) {
  const query = `*[_type == "article" && category->name in [${categories
    .map((category: string) => `"${category}"`)
    .join(",")}]]| order(date desc){
            title,
           date,
           "slug": slug.current,
          "category":category->{name}.name,  
           headerImage,
           "author": author->{name}.name,
            "summary": summary[0].children[0].text,
            audio,
          }`;

  const articles = await client.fetch(query);

  return articles;
}

/* ----------------------------------------------------------------------------------------- */
