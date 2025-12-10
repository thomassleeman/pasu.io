"use client";

import { useState, useEffect, Fragment } from "react";
import { useRouter } from "next/navigation";
// Server actions
import { getCourseProgress, updateCourseProgress } from "@actions/userDataActions";
//components
import AuthNoticeModal from "@/app/_components/ui/modal/AuthNoticeModal";
// Headless UI imports
import { Dialog, Transition } from "@headlessui/react";
// Types
import { CourseResourceSanity } from "@/types/sanity";
import { getResourcePathType } from "../functions";

interface GetStartedButtonProps {
  courseSlug: string;
  resources: CourseResourceSanity[];
  title: string;
}

export default function GetStartedButton({
  courseSlug,
  resources,
  title,
}: GetStartedButtonProps) {
  const [isUpdating, setIsUpdating] = useState(false);
  const [hasProgress, setHasProgress] = useState(false);
  const [firstUncompletedResource, setFirstUncompletedResource] =
    useState<CourseResourceSanity | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [
    showContinueWhereYourLeftOffModal,
    setshowContinueWhereYourLeftOffModal,
  ] = useState(false);
  const [showAuthModal, setshowAuthModal] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get existing course progress from Drizzle
        const existingCourse = await getCourseProgress(courseSlug);

        const existingResourcesCompleted = existingCourse?.resourcesCompleted ?? {};

        // Determine if user has progress
        const completedResources = Object.values(
          existingResourcesCompleted
        ).filter((completed) => completed);

        if (completedResources.length > 0) {
          setHasProgress(true);
        }

        // Merge new resources with existing ones without overwriting completed statuses
        const resourcesCompleted: Record<string, boolean> = { ...existingResourcesCompleted };
        let hasNewResources = false;

        resources.forEach((resource) => {
          if (!(resource.slug in resourcesCompleted)) {
            resourcesCompleted[resource.slug] = false;
            hasNewResources = true;
          }
        });

        // Only update the database if there are new resources
        if (hasNewResources) {
          await updateCourseProgress({
            courseSlug,
            courseName: title,
            resourcesCompleted,
          });
        }

        // Determine the first uncompleted resource
        let firstUncompleted = null;
        for (let resource of resources) {
          if (!resourcesCompleted[resource.slug]) {
            firstUncompleted = resource;
            break;
          }
        }

        // If all resources are completed, set to last resource
        if (!firstUncompleted) {
          firstUncompleted = resources[resources.length - 1];
        }

        setFirstUncompletedResource(firstUncompleted);
      } catch (error) {
        console.error("Error:", (error as Error).message);
        // If we get an "Unauthorized" error, user is not authenticated
        if ((error as Error).message.includes('Unauthorized')) {
          setIsAuthenticated(false);
          setshowAuthModal(true);
        }
      }
    };

    fetchUserData();
  }, [courseSlug, resources, title]);

  useEffect(() => {
    if (hasProgress) {
      setshowContinueWhereYourLeftOffModal(true);
    }
  }, [hasProgress]);

  const handleClick = async () => {
    setIsUpdating(true);

    try {
      if (!isAuthenticated || !firstUncompletedResource) {
        console.log("Failed to retrieve user data. Please try again.");
        setshowAuthModal(true);
        return;
      }

      // Redirect to the first uncompleted resource
      const pathType = getResourcePathType(firstUncompletedResource.type);
      router.push(
        `/courses/${courseSlug}/${pathType}/${firstUncompletedResource.slug}`
      );
    } catch (error) {
      console.error("Error:", (error as Error).message);
      alert("Failed to proceed. Please try again.");
    } finally {
      setIsUpdating(false);
    }
  };

  if (showAuthModal) {
    return <AuthNoticeModal notice="accountRequired" />;
  }

  return (
    <>
      {hasProgress ? (
        <>
          {/* Modal using Headless UI Dialog */}
          <Transition
            appear
            show={showContinueWhereYourLeftOffModal}
            as={Fragment}
          >
            <Dialog
              as="div"
              className="relative z-10"
              onClose={() => setshowContinueWhereYourLeftOffModal(false)}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div className="flex justify-end">
                        <button
                          onClick={() =>
                            setshowContinueWhereYourLeftOffModal(false)
                          }
                          className="text-gray-600 hover:text-gray-800"
                        >
                          ✕
                        </button>
                      </div>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Continue where you left off
                      </Dialog.Title>
                      <div className="mt-4">
                        <button
                          onClick={handleClick}
                          disabled={isUpdating}
                          className="w-full rounded-md bg-emerald-800 px-4 py-2 text-xl text-white hover:bg-emerald-700"
                        >
                          {isUpdating ? "Continuing..." : "Continue"}
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>

          {/* When modal is closed, show the button */}
          {!showContinueWhereYourLeftOffModal && (
            <button
              onClick={handleClick}
              disabled={isUpdating}
              className="mt-32 w-full rounded-md bg-emerald-800 px-4 py-2 text-xl text-white hover:bg-emerald-700"
            >
              {isUpdating ? "Continuing..." : "Continue where you left off"}
            </button>
          )}
        </>
      ) : (
        /* When hasProgress is false */
        <button
          onClick={handleClick}
          disabled={isUpdating}
          className="mt-32 w-full rounded-md bg-emerald-800 px-4 py-2 text-xl text-white hover:bg-emerald-700"
        >
          {isUpdating ? "Starting..." : "Get Started"}
        </button>
      )}
    </>
  );
}
