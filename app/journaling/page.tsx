import Link from "next/link";
import Image from "next/image";
import journaling from "./resources/journaling.jpg";
import { getJournalsData } from "./getJournalsData";
import { urlForImage } from "@/sanity/lib/image";
import { journalOutlineFromSanity } from "@/types/journal";

// import ExerciseCard from "@/components/ui/nav/_components/resourcesNav/ExerciseCard";
import defaultImage from "@articles/defaultImage.jpeg";

export const revalidate = 1; // revalidate the data cache at most every hour

export default async function JournalingForInsightPage() {
  const journals = await getJournalsData();

  return (
    <div className="py-8 sm:py-12">
      {/* Hero section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-12 sm:gap-12 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-16 xl:px-20">
            <Image
              alt="Person writing in journal"
              src={journaling}
              className="h-64 w-full flex-none rounded-2xl object-cover shadow-xl outline outline-offset-4 outline-emerald-600/30 sm:h-80 lg:aspect-square lg:h-auto lg:max-w-md"
            />
            <div className="w-full flex-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Journaling for Insight
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                <span className="font-semibold text-emerald-700">
                  Guided journaling is fundamental to the Pasu approach to
                  therapy.
                </span>
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Research consistently shows that journaling reduces stress,
                improves emotional regulation, enhances self-awareness,
                alleviates symptoms of anxiety and depression, fosters
                mindfulness, and strengthens problem-solving skills.
              </p>
              <p className="text-base font-medium text-gray-900">
                Use the exercises below to benefit from this cornerstone of
                therapeutic work.
              </p>
            </div>
          </div>

          <div className="mx-auto mb-12 max-w-7xl px-6 py-12 sm:px-8 xl:px-20">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
              Journaling Exercises
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {journals.map((journal: journalOutlineFromSanity) => (
                <JournalCard key={journal.slug} journal={journal} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const JournalCard = ({ journal }: { journal: journalOutlineFromSanity }) => {
  const { name, slug, headerImage } = journal;
  const headerImageUrl = headerImage ? urlForImage(headerImage) : null;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1">
      <Link href={`/journaling/${slug}`} className="flex flex-col h-full">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={400}
            src={headerImageUrl || defaultImage}
            alt={`${name} journal`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white drop-shadow-lg">
              {name}
            </h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="text-sm text-emerald-700 font-medium group-hover:text-emerald-800">
            Start journaling →
          </div>
        </div>
      </Link>
    </article>
  );
};
