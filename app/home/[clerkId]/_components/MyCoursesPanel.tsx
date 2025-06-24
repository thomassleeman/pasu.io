import { getNamedCoursesData } from "@courses/getCoursesData";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import { AcademicCapIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { type UserWithRelations } from "@/types/user";

type SanityImage = {
  asset: {
    _ref: string;
    _type: string;
  };
};

type CourseData = {
  title: string;
  slug: string;
  headerImage: SanityImage;
  summary: any[];
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

function CourseCard({ course }: { course: Action }) {
  return (
    <Link
      href={course.href}
      className="group relative block h-72 w-full overflow-hidden rounded-lg bg-white shadow-sm outline-2 outline-offset-4 outline-emerald-600/50 transition-all hover:shadow-md hover:outline"
    >
      {/* Image Container */}
      <div className="absolute inset-0">
        {course.imageUrl ? (
          <Image
            src={course.imageUrl}
            alt={course.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="h-full w-full bg-gray-100" />
        )}
      </div>

      {/* Content Container */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-500/50 p-4 backdrop-blur-sm">
        <h3 className="mb-2 text-lg font-medium text-white">{course.name}</h3>
        {course.progress && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-200">Progress</span>
              <span className="text-sm font-medium text-gray-200">
                {course.progress.percentage}%
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-600/50">
              <div
                className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                style={{ width: `${course.progress.percentage}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {course.progress?.isComplete && (
        <div className="absolute right-3 top-3 rounded-full bg-emerald-500 px-2 py-1 text-xs font-medium text-white shadow-sm">
          Complete
        </div>
      )}
    </Link>
  );
}

async function MyCoursesPanel({ user }: { user: UserWithRelations }) {
  console.log("courses:", user.courses);
  // Early return if user has no courses
  if (!user?.courses || user.courses.length === 0) {
    return (
      <>
        <div className="flex items-center gap-x-2 text-lg font-extralight text-gray-900">
          <h3>Courses</h3>
          <AcademicCapIcon className="h-5 w-5 text-emerald-600" />
        </div>
        <div className="flex w-full flex-col items-center justify-center rounded-sm bg-gray-200 py-2">
          <p className="flex items-center gap-x-1 text-sm text-gray-500">
            No courses in progress. Use the{" "}
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

  // Extract course slugs from the array
  const coursesSlugs = user.courses.map((course) => course.courseSlug);

  // Fetch course data from Sanity for these slugs
  const sanityCoursesData: CourseData[] = await getNamedCoursesData(
    coursesSlugs
  );

  // Create a map of user courses for easier lookup
  const userCoursesMap = new Map(
    user.courses.map((course) => [course.courseSlug, course])
  );

  // Combine Sanity data with user progress
  const courseActions = sanityCoursesData
    .map((sanityData) => {
      const userCourse = userCoursesMap.get(sanityData.slug);

      if (!userCourse) return null;

      // Calculate progress from resourcesCompleted object
      let progressInfo = undefined;
      if (userCourse.resourcesCompleted) {
        const resourceEntries = Object.entries(userCourse.resourcesCompleted);
        const totalResources = resourceEntries.length;

        if (totalResources > 0) {
          const completedResources = resourceEntries.filter(
            ([_, completed]) => completed
          ).length;
          const percentage = Math.round(
            (completedResources / totalResources) * 100
          );

          // Only include courses with progress > 0
          if (percentage === 0) return null;

          progressInfo = {
            percentage,
            isComplete: percentage === 100,
          };
        } else {
          // No resources tracked, don't show this course
          return null;
        }
      } else {
        // No resources tracked, don't show this course
        return null;
      }

      const headerImageUrl = sanityData.headerImage
        ? urlForImage(sanityData.headerImage)
        : null;

      return {
        icon: AcademicCapIcon,
        name: sanityData.title,
        href: `/courses/${sanityData.slug}`,
        iconForeground: "text-teal-700",
        iconBackground: "bg-teal-50",
        progress: progressInfo,
        imageUrl: headerImageUrl,
        description: sanityData.summary,
      } as Action;
    })
    .filter((course): course is Action => course !== null);

  return (
    <>
      <div className="flex items-center gap-x-2 text-lg font-extralight text-gray-900">
        <h3>Courses</h3>
        <AcademicCapIcon className="h-5 w-5 text-emerald-600" />
      </div>

      {courseActions.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {courseActions.map((course) => (
            <CourseCard key={`course-${course.name}`} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex w-full flex-col items-center justify-center rounded-sm bg-gray-200 py-2">
          <p className="flex items-center gap-x-1 text-sm text-gray-500">
            No courses in progress. Use the{" "}
            <span className="mx-1 flex items-center gap-x-1 font-mono text-gray-600">
              Resources{" "}
              <span className="inline-block">
                <BriefcaseIcon className="h-4 w-4" />
              </span>{" "}
            </span>
            menu to get started.
          </p>
        </div>
      )}
    </>
  );
}

export default MyCoursesPanel;
