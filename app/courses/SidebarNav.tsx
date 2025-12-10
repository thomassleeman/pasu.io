"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PencilIcon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";

interface SidebarNavProps {
  sections: {
    slug: string;
    title: string;
    type?: "article" | "selfReflectionExercise";
    prompts?: { id: string; title: string }[];
  }[];
  courseSlug: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ sections, courseSlug }) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getResourcePath = (section: SidebarNavProps["sections"][0]) => {
    if (section.type === "article") {
      return `/courses/${courseSlug}/articles/${section.slug}`;
    } else if (section.type === "selfReflectionExercise") {
      return `/courses/${courseSlug}/self-reflections/${section.slug}`;
    }
    return `#${section.slug}`;
  };

  const NavContent = () => (
    <nav className="max-w-sm space-y-4 font-mono">
      {/* Back to Course Overview Link */}
      <Link
        href={`/courses/${courseSlug}`}
        onClick={() => setMobileMenuOpen(false)}
        className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:border-emerald-300"
      >
        <ArrowLeftIcon className="h-4 w-4 flex-shrink-0" />
        <span>Course Overview</span>
      </Link>

      <h2 className="text-sm font-semibold text-emerald-700">
        Course Sections
      </h2>
      <ul className="space-y-3">
        {sections.map((section) => (
          <li key={section.slug}>
            <Link
              href={getResourcePath(section)}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname.includes(section.slug)
                  ? "bg-emerald-50 font-medium text-emerald-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {section.type === "article" ? (
                <BookOpenIcon className="h-4 w-4 flex-shrink-0" />
              ) : section.type === "selfReflectionExercise" ? (
                <PencilIcon className="h-4 w-4 flex-shrink-0" />
              ) : (
                <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
              )}
              <span>{section.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-700 lg:hidden"
      >
        <Bars3Icon className="h-5 w-5" />
        <span>Sections</span>
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 font-mono lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          <aside className="fixed right-0 top-0 z-50 h-full w-80 overflow-y-auto border-l border-gray-200 bg-white p-6 shadow-xl lg:hidden">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Navigation</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <NavContent />
          </aside>
        </>
      )}

      {/* Desktop sidebar */}
      <aside className="sticky top-0 my-10 hidden overflow-y-auto border-l border-gray-200 p-4 lg:block">
        <NavContent />
      </aside>
    </>
  );
};

export default SidebarNav;
