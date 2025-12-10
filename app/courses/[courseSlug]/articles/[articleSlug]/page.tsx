import getFormattedDate from "@articles/getFormattedDate";
import { getArticleData } from "@articles/getArticlesData";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import defaultImage from "@articles/defaultImage.jpeg";
import StudyModal from "@/components/ui/modal/StudyModal";
import { CourseHeadNav, CourseFootNav } from "../../courseNavs";
import AudioPlayer from "@articles/_components/AudioPlayer";
import QuizModal from "../../../quiz/QuizModal";

import Share from "@/components/ui/Share";
import { Martel } from "next/font/google";
import brainLogo from "@/components/design/brainLogo.png";

//Sanity

import { PortableText } from "@portabletext/react";
import { urlForImage } from "@/sanity/lib/image";
import portableTextComponents from "@/sanity/schemas/portableText/portableTextComponents";

export const revalidate = 3600; // revalidate the data cache at most every hour

const martel = Martel({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default async function Article({
  params,
  searchParams,
}: {
  params: Promise<{ articleSlug: string }>;
  searchParams: Promise<Record<string, string> | null | undefined>;
}) {
  const { articleSlug } = await params;
  const articleData = await getArticleData(articleSlug);

  //Show Modal if searchParams has modal=true
  const resolvedSearchParams = await searchParams;
  const showModal = resolvedSearchParams?.modal;
  const study = resolvedSearchParams?.study;
  //Current url is passed to modal to enable the close button to link back to the article without the modal
  const currentUrl = `${
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_PROD_ORIGIN
      : process.env.NEXT_PUBLIC_DEV_ORIGIN
  }/articles/${articleSlug}`;

  if (!articleData) notFound();

  const {
    title,
    date,
    content,
    audio,
    headerImage,
    author,
    readingTime,
    quiz,
    classification,
  } = articleData;

  const headerImageUrl = headerImage ? urlForImage(headerImage) : null;
  const authorImageUrl = author?.image ? urlForImage(author.image) : null;

  return (
    <>
      <article
        className={`${martel.className} prose prose-slate mx-auto mt-12 dark:prose-invert md:prose-lg prose-img:rounded-xl`}
      >
        <div className="font-sans">
          <h1 className="mt-4 text-slate-800">{title}</h1>

          <div className="flex items-center justify-between">
            {audio && <AudioPlayer audio={audio} />}
          </div>
        </div>

        <div className="mb-12 aspect-square h-72 w-72">
          <Image
            src={headerImageUrl || defaultImage}
            alt={`header image for the article ${title}`}
            height={250}
            width={250}
            className="h-full w-full object-cover outline outline-offset-2 outline-emerald-700/50"
          />
        </div>
        <div className="px-6 first-letter:float-left first-letter:mr-2 first-letter:text-6xl first-letter:font-extrabold first-letter:text-green-900">
          <PortableText value={content} components={portableTextComponents} />
        </div>
        {showModal && study && (
          <StudyModal currentUrl={currentUrl} studyId={study} />
        )}
        {quiz && (
          <QuizModal
            quiz={quiz}
            articleSlug={articleSlug}
            courseSlug={classification.slug}
          />
        )}
      </article>
    </>
  );
}
