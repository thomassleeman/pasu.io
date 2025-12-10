import Link from "next/link";
import Image from "next/image";
import { getAllNonCourseArticles } from "./getArticlesData";
import { urlForImage } from "@/sanity/lib/image";
import getFormattedDate from "./getFormattedDate";
import defaultImage from "./defaultImage.jpeg";
import { Article } from "@/types/sanity";

export const revalidate = 3600; // revalidate the data cache at most every hour

export default async function ArticlesPage() {
  const articles: Article[] = await getAllNonCourseArticles();

  return (
    <div className="py-8 sm:py-12">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* Hero section */}
          <div className="mx-auto max-w-3xl px-6 py-12 text-center sm:p-8 xl:px-20">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Articles
            </h1>
            <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
              <span className="font-semibold text-emerald-700">
                Evidence-based insights for workplace wellbeing.
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Explore our collection of articles covering burnout prevention,
              stress management, emotional resilience, and strategies for
              thriving in demanding work environments.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="mx-auto mb-12 max-w-7xl px-6 py-12 sm:px-8 xl:px-20">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                All Articles
              </h2>
              <span className="text-sm text-gray-500">
                {articles.length}{" "}
                {articles.length === 1 ? "article" : "articles"}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {articles.map((article: Article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ArticleCard = ({ article }: { article: Article }) => {
  const { title, slug, headerImage, author, date, classification, summary } =
    article;
  const headerImageUrl = headerImage ? urlForImage(headerImage) : null;
  const formattedDate = date ? getFormattedDate(date) : "";

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg">
      <Link href={`/articles/${slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={300}
            src={headerImageUrl || defaultImage}
            alt={`${title}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0" />
          {classification && (
            <span className="absolute left-3 top-3 rounded-full bg-emerald-600/90 px-3 py-1 text-xs font-medium text-white">
              {classification}
            </span>
          )}
          {author && (
            <span className="absolute bottom-3 right-3 rounded-full bg-gray-900/70 px-3 py-1 text-xs text-white">
              {author}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div>
            <h3 className="line-clamp-2 font-serif text-lg font-semibold text-gray-900 group-hover:text-emerald-700">
              {title}
            </h3>
            {summary && (
              <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                {summary}
              </p>
            )}
          </div>
          <div className="mt-4 flex items-center justify-between">
            <time dateTime={date} className="text-xs text-gray-500">
              {formattedDate}
            </time>
            <span className="text-sm font-medium text-emerald-700 group-hover:text-emerald-800">
              Read →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};
