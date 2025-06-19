import { getWritingExercisesData } from "@exercises/writing-exercises/getWritingExercisesData";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { CheckBadgeIcon, BriefcaseIcon } from "@heroicons/react/24/outline";

type UserExercise = {
  id: string;
  exerciseSlug: string;
  completedPrompts: number;
  completionPercentage: number;
  createdAt: Date | string;
  updatedAt: Date | string;
};

type UserData = {
  exercises?: UserExercise[];
  // ... other user properties
};

type Action = {
  icon: React.ElementType;
  name: string;
  href: string;
  iconForeground: string;
  iconBackground: string;
  progress?: {
    percentage: number;
    isComplete: boolean;
  };
  imageUrl?: string | null;
  description?: any[];
};

function ExerciseCard({ exercise }: { exercise: Action }) {
  return (
    <Link
      href={exercise.href}
      className="group relative block h-72 w-full overflow-hidden rounded-lg bg-white shadow-sm outline-2 outline-offset-4 outline-emerald-600/50 transition-all hover:shadow-md hover:outline"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        {exercise.imageUrl ? (
          <Image
            src={exercise.imageUrl}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-500/50 p-4 backdrop-blur-sm">
        <h3 className="mb-2 text-lg font-medium text-white">{exercise.name}</h3>
        {exercise.progress && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-200">Progress</span>
              <span className="text-sm font-medium text-gray-200">
                {exercise.progress.percentage}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-600/50">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${exercise.progress.percentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {exercise.progress?.isComplete && (
        <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
          Complete
        </div>
      )}
    </Link>
  );
}

async function MyExercisesPanel({ user }: { user: UserData }) {
  // Early return if user has no exercises
  if (!user?.exercises || user.exercises.length === 0) {
    return (
      <>
        <div className="flex items-center gap-x-2 text-lg font-extralight text-gray-900">
          <h3>Exercises</h3>
          <CheckBadgeIcon className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-sm bg-gray-200 py-2">
          <p className="flex items-center gap-x-1 text-sm text-gray-500">
            No exercises in progress. Use the{" "}
            <span className="mx-1 flex items-center gap-x-1 font-mono text-gray-600">
              Resources{" "}
              <span className="inline-block">
                <BriefcaseIcon className="h-4 w-4" />
              </span>{" "}
            </span>
            menu to get started.
          </p>
        </div>
      </>
    );
  }

  // Filter exercises with progress > 0
  const exercisesWithProgress = user.exercises.filter(
    (exercise) => exercise.completionPercentage > 0
  );

  if (exercisesWithProgress.length === 0) {
    return (
      <>
        <div className="flex items-center gap-x-2 text-lg font-extralight text-gray-900">
          <h3>Exercises</h3>
          <CheckBadgeIcon className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-sm bg-gray-200 py-2">
          <p className="flex items-center gap-x-1 text-sm text-gray-500">
            No exercises with progress. Start an exercise to see it here.
          </p>
        </div>
      </>
    );
  }

  // Extract exercise slugs from exercises with progress
  const exerciseSlugs = exercisesWithProgress.map((ex) => ex.exerciseSlug);

  // Fetch exercise data from Sanity
  const sanityExercisesData = await getWritingExercisesData();

  // Create a map of user exercises for easier lookup
  const userExercisesMap = new Map(
    exercisesWithProgress.map((exercise) => [exercise.exerciseSlug, exercise])
  );

  // Filter Sanity data to only include exercises the user has progress on
  const relevantSanityExercises = sanityExercisesData.filter((exercise: any) =>
    userExercisesMap.has(exercise.slug)
  );

  // Create exercise actions with user progress info
  const exerciseActions: Action[] = relevantSanityExercises
    .map((sanityData: any) => {
      const userExercise = userExercisesMap.get(sanityData.slug);

      if (!userExercise) return null;

      const progress = {
        percentage: userExercise.completionPercentage,
        isComplete: userExercise.completionPercentage === 100,
      };

      const headerImageUrl = sanityData.headerImage
        ? urlForImage(sanityData.headerImage)
        : null;

      return {
        icon: CheckBadgeIcon,
        name: sanityData.title,
        href: `/exercises/writing-exercises/${sanityData.slug}`,
        iconForeground: "text-purple-700",
        iconBackground: "bg-purple-50",
        progress,
        imageUrl: headerImageUrl,
      } as Action;
    })
    .filter((exercise): exercise is Action => exercise !== null);

  return (
    <>
      <div className="flex items-center gap-x-2 text-lg font-extralight text-gray-900">
        <h3>Exercises</h3>
        <CheckBadgeIcon className="h-5 w-5 text-emerald-600" />
      </div>

      {exerciseActions.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {exerciseActions.map((exercise) => (
            <ExerciseCard
              key={`exercise-${exercise.name}`}
              exercise={exercise}
            />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center rounded-sm bg-gray-200 py-2">
          <p className="flex items-center gap-x-1 text-sm text-gray-500">
            No exercises found. Start an exercise to see it here.
          </p>
        </div>
      )}
    </>
  );
}

export default MyExercisesPanel;
