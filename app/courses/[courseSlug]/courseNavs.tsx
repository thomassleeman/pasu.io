"use client";

import { useState, useEffect } from "react";
// Next.js imports
import Link from "next/link";
import { usePathname } from "next/navigation";
// Functions
import { getResourcePathType } from "../functions";
// Components
import Share from "@/components/ui/Share";
// Icons
import { BookOpenIcon, PencilIcon } from "@heroicons/react/24/outline";

// //icons
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  AcademicCapIcon,
  CheckCircleIcon,
} from "@heroicons/react/20/solid";
// Types
import { CourseSanity } from "@/types/sanity";
// Subscription function
// import subscribeToCompletedResources from "./subscribeToCompletedResources";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function CourseHeadNav({ course }: { course: CourseSanity }) {
  const pathname = usePathname();

  const { slug, title } = course;

  if (!course) {
    return null;
  }

  return (
    <div className="z-50 rounded-lg border-y border-gray-200 bg-transparent py-2">
      <Link href={`/courses/${slug}`}>
        <div className="mx-2 my-2 flex items-center space-x-6 text-slate-700 md:mx-0">
          <AcademicCapIcon className="h-6 w-6" />
          <h3 className="font-mono md:text-lg lg:text-xl">{title}</h3>
        </div>
      </Link>
    </div>
  );
}

export default CourseHeadNav;

function CourseFootNav({ course }: { course: CourseSanity }) {
  const pathname = usePathname();
  const pathSlug = pathname.split("/").pop();

  if (!course) {
    return null;
  }
  const { resources, slug } = course;

  if (!resources) {
    return null;
  }

  const tabIndex = () => {
    return resources.findIndex((resource) => resource.slug === pathSlug);
  };
  const prevTab = resources[tabIndex() - 1];

  // additional check for next tab to prevent it from appearing on the course head page
  let nextTab;
  nextTab = resources[tabIndex() + 1];

  if (tabIndex() < 0) {
    nextTab = null;
  }

  return (
    <div className="m-6 flex justify-between gap-x-6 text-sm font-bold md:mt-12 lg:mt-16">
      <div className="w-1/2">
        {prevTab && (
          <Link
            href={`/courses/${slug}/${getResourcePathType(prevTab.type)}/${
              prevTab.slug
            }`}
            className="flex items-center space-x-2 text-emerald-800 no-underline"
          >
            <ArrowLeftIcon className="h-5 w-5 text-green-800" />
            <span>{prevTab ? prevTab.title : null}</span>
          </Link>
        )}
      </div>
      <div className="flex w-1/2 justify-end">
        {nextTab && (
          <Link
            href={`/courses/${slug}/${getResourcePathType(nextTab.type)}/${
              nextTab.slug
            }`}
            className="flex items-center space-x-2 text-emerald-800 no-underline"
          >
            <span>{nextTab.title}</span>
            <ArrowRightIcon className="h-5 w-5 text-green-800" />
          </Link>
        )}
      </div>
    </div>
  );
}

export { CourseHeadNav, CourseFootNav };
