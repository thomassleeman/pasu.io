"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { PortableTextBlock } from "@portabletext/types";

// Define types based on your Sanity schema
interface Prompt {
  _key?: string;
  prompt: PortableTextBlock[];
}

interface PromptCategory {
  _key?: string;
  name: string;
  prompts?: Prompt[];
}

interface SidebarNavProps {
  promptCategories: PromptCategory[];
  currentCategory?: string;
}

const SidebarNav: React.FC<SidebarNavProps> = ({
  promptCategories,
  currentCategory,
}) => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Create formatted data for the sidebar from prompt categories
  const sidebarSections = promptCategories.map((category) => ({
    id: category.name.toLowerCase().replace(/\s+/g, "-"),
    title: category.name,
    prompts: category.prompts?.map((prompt, index) => ({
      id: `prompt-${index}`,
      title: `Prompt ${index + 1}`,
    })),
  }));

  const NavContent = () => (
    <nav className="space-y-4 font-mono">
      <h2 className="text-sm font-semibold text-emerald-700">
        Journal Prompts
      </h2>
      <ul className="space-y-3">
        {sidebarSections.map((section) => (
          <li key={section.id}>
            <Link
              href={`#${section.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                currentCategory === section.id || pathname.includes(section.id)
                  ? "bg-emerald-50 font-medium text-emerald-800"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />
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
        <span>Prompts</span>
      </button>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
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

// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ChevronRightIcon,
//   ChevronDoubleRightIcon,
// } from "@heroicons/react/24/outline";

// interface SidebarNavProps {
//   sections: {
//     id: string;
//     title: string;
//     prompts?: { id: string; title: string }[];
//   }[];
// }

// const SidebarNav: React.FC<SidebarNavProps> = ({ sections }) => {
//   const pathname = usePathname();

//   return (
//     <aside className="sticky top-0 my-10 hidden overflow-y-auto border-l border-gray-200 p-4 dark:border-slate-800 lg:block">
//       <nav className="space-y-4">
//         <h2 className="text-sm font-semibold text-emerald-700">On This Page</h2>
//         <ul className="space-y-4">
//           {sections.map((section) => (
//             <li key={section.id} className="space-y-2">
//               <div className="flex items-center space-x-2 text-sm">
//                 <ChevronRightIcon className="h-5 w-5 text-emerald-800 dark:text-sky-300" />
//                 <Link
//                   href={`#${section.id}`}
//                   className={`text-gray-600 hover:underline dark:text-sky-300 ${
//                     pathname.includes(section.id) ? "text-emerald-800" : ""
//                   }`}
//                 >
//                   {section.title}
//                 </Link>
//               </div>
//               {/* {section.prompts && (
//                 <ul className="ml-6 space-y-1">
//                   {section.prompts.map((prompt) => (
//                     <li
//                       key={prompt.id}
//                       className="flex items-center space-x-2 text-sm"
//                     >
//                       <span className="text-sky-500 dark:text-sky-200">
//                         {prompt.title}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )} */}
//             </li>
//           ))}
//         </ul>
//       </nav>
//     </aside>
//   );
// };

// export default SidebarNav;
