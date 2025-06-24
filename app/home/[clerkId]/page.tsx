import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import WelcomePanel from "./_components/WelcomePanel";
import CurrentActivityPanels from "./_components/CurrentActivityPanels";
import Anouncements from "./_components/Announcements";
import Calendar from "./_components/Calendar";
import ContentCarousel from "@articles/_components/ContentCarousel";
import Visualisations from "./_components/Visualisations";
import { serialiseData } from "@/utils/serialiseData";
import {
  getSortedLimitedArticlesData,
  getRecommendedArticlesData,
} from "@articles/getArticlesData";
import { getUserWithRelations } from "@/lib/queries/getUserWithRelations";

interface PageProps {
  params: Promise<{
    clerkId: string;
  }>;
}

export default async function Home({ params }: PageProps) {
  const { clerkId } = await params;
  const { userId } = await auth();

  if (!userId) {
    redirect("/signin");
  }

  if (clerkId !== userId) {
    redirect(`/home/${userId}`);
  }

  const user = await getUserWithRelations(userId);

  if (!user) {
    notFound();
  }

  // console.log("user:", user);

  const latestArticles = await getSortedLimitedArticlesData("date", "desc", 10);

  return (
    <>
      <div>
        <main className="pb-8 sm:mt-8">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="sr-only">Dashboards</h1>
            <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
              <div className="grid grid-cols-1 gap-14 lg:col-span-2">
                <WelcomePanel user={user} />
                <CurrentActivityPanels user={user} />
                <Visualisations user={user} />
              </div>

              <div className="grid grid-cols-1 gap-14">
                <Anouncements user={user} />
                <Calendar user={serialiseData(user)} />
              </div>
            </div>
          </div>
          <div className="mx-1 mt-14 sm:mx-0">
            <ContentCarousel
              carouselTitle="Latest Articles"
              carouselTagline="Read the latest articles from our library."
              articles={latestArticles}
            />
          </div>
        </main>
      </div>
    </>
  );
}
