import Link from "next/link";
import Image from "next/image";
import blueSkyMirror from "./resources/blue-sky-mirror.jpg";
import { getWritingExercisesData } from "@exercises/writing-exercises/getWritingExercisesData";
import { urlForImage } from "@/sanity/lib/image";

// import ExerciseCard from "@/components/ui/nav/_components/resourcesNav/ExerciseCard";
import defaultImage from "@articles/defaultImage.jpeg";

import { WritingExercise } from "@/types/sanity";

export const revalidate = 3600; // revalidate the data cache at most every hour

export default async function TherapeuticWritingPage() {
  const exercises = await getWritingExercisesData();

  return (
    <div className="py-8 sm:py-12">
      {/* Hero section */}
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-12 sm:gap-12 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center xl:gap-x-16 xl:px-20">
            <Image
              alt="Person holding a mirror reflecting blue sky"
              src={blueSkyMirror}
              className="h-64 w-full flex-none rounded-2xl object-cover shadow-xl outline outline-offset-4 outline-emerald-600/30 sm:h-80 lg:aspect-square lg:h-auto lg:max-w-md"
            />
            <div className="w-full flex-auto space-y-4">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                Therapeutic Writing
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                <span className="font-semibold text-emerald-700">
                  Welcome... this is your place for in-depth self-reflection and
                  growth.
                </span>
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                Therapeutic writing guides you through deeper emotional terrain
                with purpose and structure. By engaging with challenging
                experiences through structured reflection, you&apos;ll develop
                greater psychological flexibility and more effective coping
                mechanisms—essential tools for thriving in today&apos;s
                demanding work environments.
              </p>
              <p className="text-base font-medium text-gray-900">
                These exercises have been designed by our in-house
                psychologists to help you identify stress patterns, process
                complex workplace emotions, and build lasting resilience
                against burnout.
              </p>
            </div>
          </div>

          <div className="mx-auto mb-12 max-w-7xl px-6 py-12 sm:px-8 xl:px-20">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
              Therapeutic Writing Exercises
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {exercises.map((exercise: WritingExercise) => (
                <ExerciseCard key={exercise.title} exercise={exercise} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ExerciseCard = ({ exercise }: { exercise: WritingExercise }) => {
  const { title, slug, headerImage } = exercise;
  const headerImageUrl = headerImage ? urlForImage(headerImage) : null;
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-emerald-300 hover:-translate-y-1">
      <Link href={`/exercises/writing-exercises/${slug}`} className="flex flex-col h-full">
        <div className="relative aspect-square w-full overflow-hidden bg-gray-100">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={400}
            height={400}
            src={headerImageUrl || defaultImage}
            alt={`${title} exercise`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-lg font-semibold text-white drop-shadow-lg">
              {title}
            </h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between p-4">
          <div className="text-sm text-emerald-700 font-medium group-hover:text-emerald-800">
            Begin exercise →
          </div>
        </div>
      </Link>
    </article>
  );
};
