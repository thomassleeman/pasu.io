import { loadEnvConfig } from "@next/env";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import {
  users,
  journalEntries,
  courses,
  exercises,
  stressRatings,
  burnoutAssessments,
  recommendedArticles,
} from "@db/schema";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

// Initialize database connection
const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql);

async function seedUserData() {
  try {
    console.log("🌱 Starting seed for database...");

    // 1. Create or find existing user
    console.log("Creating or finding user...");
    const clerkId = "user_2yuWkyPcUqigH29XMfH4MbO0zYD";
    const email = "sleemantom@gmail.com";

    // Check if user exists
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.clerkId, clerkId))
      .limit(1);

    let userId: string;
    if (existingUser.length > 0) {
      userId = existingUser[0].id;
      console.log(`Found existing user with ID: ${userId}`);

      // Optional: Clear existing data for this user
      console.log("Clearing existing data for fresh seed...");
      await db
        .delete(recommendedArticles)
        .where(eq(recommendedArticles.userId, userId));
      await db
        .delete(burnoutAssessments)
        .where(eq(burnoutAssessments.userId, userId));
      await db.delete(stressRatings).where(eq(stressRatings.userId, userId));
      await db.delete(exercises).where(eq(exercises.userId, userId));
      await db.delete(courses).where(eq(courses.userId, userId));
      await db.delete(journalEntries).where(eq(journalEntries.userId, userId));
    } else {
      const [user] = await db
        .insert(users)
        .values({
          clerkId,
          email,
        })
        .returning();
      userId = user.id;
      console.log(`Created new user with ID: ${userId}`);
    }

    // 2. Create Burnout Assessments
    console.log("Creating burnout assessments...");
    await db.insert(burnoutAssessments).values({
      userId,
      assessment1: {
        detachment: { encryptedData: "0", iv: "init_vector_1" },
        emotionalImpairment: { encryptedData: "4", iv: "init_vector_2" },
        exhaustion: { encryptedData: "4", iv: "init_vector_3" },
        cognitiveImpairment: { encryptedData: "2", iv: "init_vector_4" },
      },
      assessment2: {
        detachment: { encryptedData: "0", iv: "init_vector_5" },
        emotionalImpairment: { encryptedData: "6", iv: "init_vector_6" },
        exhaustion: { encryptedData: "4", iv: "init_vector_7" },
        cognitiveImpairment: { encryptedData: "0", iv: "init_vector_8" },
      },
      createdAt: new Date("2024-11-26T11:28:07.000Z"),
    });

    // 3. Create Courses
    console.log("Creating courses...");

    // Burnout Course
    await db.insert(courses).values({
      userId,
      courseSlug: "burnout-course",
      courseName: "Burnout Course",
      resourcesCompleted: {
        "5-working-on-yourself-vs-working-on-the-problem": false,
        "all-about-stress": false,
        "defining-burnout": true,
        "stress-vs-anxiety": false,
        "understanding-the-causes-of-burnout": false,
        "what-is-stress": true,
        "what-you-can-do-vs-what-you-can-accept": false,
        "workplace-stressors-beyond-workload": false,
        "your-guide-to-burnout-prevention": false,
        "your-job-and-how-it-fits-you": false,
      },
      createdAt: new Date("2024-11-26T11:28:07.000Z"),
      updatedAt: new Date("2024-11-26T11:28:07.000Z"),
    });

    // CBT Course
    await db.insert(courses).values({
      userId,
      courseSlug: "cbt-course",
      courseName: "CBT Course",
      resourcesCompleted: {
        "changing-behaviour": false,
        "changing-habits-a-step-by-step-guide": false,
        "evaluating-thoughts-and-uncovering-core-beliefs": false,
        "making-sense-of-experience": true,
        "noticing-the-cycle": true,
        "uncovering-core-beliefs": false,
        "understanding-the-connections": false,
        "understanding-your-thoughts-feelings-and-actions": true,
        "unraveling-core-beliefs": false,
        "working-with-thoughts": false,
      },
      createdAt: new Date("2024-10-30T15:35:27.000Z"),
      updatedAt: new Date("2024-10-30T15:35:27.000Z"),
    });

    // Stress to Strength Course
    await db.insert(courses).values({
      userId,
      courseSlug: "stress-to-strength-a-burnout-introduction-course",
      courseName: "Stress to Strength: A Burnout Introduction Course",
      resourcesCompleted: {
        "burnout-signs-in-you": false,
        "but-wait-theres-hope": false,
        "stress-and-your-job": false,
        "understanding-burnout-stress-causes-and-prevalence": false,
        "what-is-burnout-and-why-should-you-care": false,
      },
      createdAt: new Date("2023-08-04T15:09:15.000Z"),
      updatedAt: new Date("2023-08-04T15:09:15.000Z"),
    });

    // 4. Create Exercises
    console.log("Creating exercises...");

    await db.insert(exercises).values({
      userId,
      exerciseSlug: "is-this-job-right-for-me",
      completedPrompts: 2,
      completionPercentage: "15",
      encryptedUserInput: {
        inputs: [
          {
            inputKey: "ce11b0f63ed0-3c6f7a88ca10-0af92e25424f",
            encryptedData: "073b69150bf5d6836a3a2d9b67c0d168",
            iv: "89db1c9bcebeb31437525c46bf8e762e",
          },
          {
            inputKey: "ce11b0f63ed0-564b8e549d13-eef53cccdfbb",
            encryptedData: "57a6a94f8ed7323c0bae55da52d33ce6",
            iv: "801564f0c777c3400fdf7ffdc409d40a",
          },
        ],
      },
      createdAt: new Date("2025-02-22T10:21:49.000Z"),
      updatedAt: new Date("2025-02-22T10:21:49.000Z"),
    });

    await db.insert(exercises).values({
      userId,
      exerciseSlug: "meta-emotions-know-your-feelings-about-your-feelings",
      completedPrompts: 0,
      completionPercentage: "0",
      encryptedUserInput: {
        inputs: [
          {
            inputKey: "14d7fafeb8b5-aa2976b0bc5b-be1270513fd0",
            encryptedData: "bdb338f42878515501a441eee51e2c2c",
            iv: "d7843a6b55ad63750cfd9878536af88c",
          },
          {
            inputKey: "1d99a8fe14e5-495bd3ff25a1-0d65186ddd45",
            encryptedData: "7c157a8088ce474f8f732cdd39f71275",
            iv: "89230a7ea76c8622086a8b308f88da63",
          },
        ],
      },
      createdAt: new Date("2025-01-15T14:37:04.000Z"),
      updatedAt: new Date("2025-01-15T14:37:04.000Z"),
    });

    // 5. Create Journal Entries
    console.log("Creating journal entries...");

    const journalData = [
      {
        journalName: "journal",
        dateKey: "11-Nov-2024",
        createdAt: new Date("2024-11-11T15:03:00.000Z"),
        encryptedUserInput: {
          inputs: [
            {
              inputKey: "1",
              encryptedData: "308ece59526ce0530537d2bc11a56049",
              iv: "91392064436a691e2fc1d9832e0e26bf",
            },
            {
              inputKey: "2",
              encryptedData: "be485c2ff86c1303e60b96fe1e00d9f6",
              iv: "eb7eb1d09927fb0d48de9e817c97adc3",
            },
            {
              inputKey: "3",
              encryptedData: "47cceb2c94aaa14325b5b3e9030ddeed",
              iv: "472fe262bde6c2606a6bc630cc24a2a1",
            },
            {
              inputKey: "4",
              encryptedData: "e14783277856ab5d8102f3d89d17d1d7",
              iv: "9ccdf937c6bc341140a91170a0234090",
            },
          ],
        },
      },
      {
        journalName: "journal",
        dateKey: "19-Sep-2024",
        createdAt: new Date("2024-11-13T11:50:21.000Z"),
        encryptedUserInput: {
          inputs: [
            {
              inputKey: "1",
              encryptedData:
                "f53d03292049ce67cb4183d7dd15bb70a46e653a91bcd4105399ae1d422e0088baecbd299ffb5500279ec9e9f0735f19",
              iv: "b09ff82d93feb79cbe712738b7438456",
            },
            {
              inputKey: "2",
              encryptedData: "19a15bd8047a74fde8cb14b190540de9",
              iv: "cc2d67ea895423a3f5aeea42db7ff4ce",
            },
            {
              inputKey: "3",
              encryptedData: "a97961112a9b29638d447e353f236421",
              iv: "cd6f9e5e86be45c1d1eb291461d9122b",
            },
            {
              inputKey: "4",
              encryptedData: "508a6616a973b244cbd77d648b2c480b",
              iv: "aa8913dbc7b9053f2c98c6020264d58c",
            },
          ],
        },
      },
      {
        journalName: "journaling",
        dateKey: "22-Feb-2025",
        createdAt: new Date("2025-02-22T10:25:54.000Z"),
        encryptedUserInput: {
          inputs: [
            {
              inputKey: "103d57304045",
              encryptedData: "106424db55b1206076df747a851bd26c",
              iv: "fed51aea8cc51ef808b78055eca9eea6",
            },
            {
              inputKey: "14686bd0984e",
              encryptedData: "372a8c244c2938deabae410a8bb0c973",
              iv: "2e02f3ab2279d47586eb04cb7db6786a",
            },
            {
              inputKey: "698e7e69acda",
              encryptedData: "9a4a5995c205586abd85821589e3e5a3",
              iv: "ea9073b620d49dd509a02d9f9a5b5e17",
            },
            {
              inputKey: "9d3023accc4e",
              encryptedData: "03c6d759a58dc01e0acee3ee4e9dc8f3",
              iv: "5ef5e139127da0bf9105cd339ac7179f",
            },
          ],
        },
      },
    ];

    for (const entry of journalData) {
      await db.insert(journalEntries).values({
        userId,
        journalName: entry.journalName,
        dateKey: entry.dateKey,
        encryptedUserInput: entry.encryptedUserInput,
        createdAt: entry.createdAt,
        updatedAt: entry.createdAt,
      });
    }

    // 6. Create Stress Ratings
    console.log("Creating stress ratings...");

    const stressRatingsData = [
      { rating: 5, createdAt: new Date("2024-11-07T15:47:02.000Z") },
      { rating: 9, createdAt: new Date("2024-11-08T09:56:16.000Z") },
      { rating: 2, createdAt: new Date("2024-11-11T15:24:10.000Z") },
      { rating: 6, createdAt: new Date("2024-11-12T09:43:52.000Z") },
      { rating: 6, createdAt: new Date("2024-11-18T12:16:46.000Z") },
      { rating: 4, createdAt: new Date("2024-11-23T15:22:38.000Z") },
      { rating: 6, createdAt: new Date("2024-11-25T12:46:33.000Z") },
      { rating: 4, createdAt: new Date("2024-11-06T16:15:47.000Z") },
      { rating: 8, createdAt: new Date("2024-11-15T16:16:44.000Z") },
      { rating: 6, createdAt: new Date("2024-11-26T11:25:52.000Z") },
      { rating: 3, createdAt: new Date("2024-11-27T12:55:59.000Z") },
      { rating: 6, createdAt: new Date("2024-12-10T15:49:24.000Z") },
      { rating: 8, createdAt: new Date("2024-12-16T15:20:20.000Z") },
      { rating: 4, createdAt: new Date("2024-12-17T10:38:17.000Z") },
      { rating: 3, createdAt: new Date("2024-12-30T14:26:30.000Z") },
      { rating: 1, createdAt: new Date("2024-12-31T20:51:47.000Z") },
      { rating: 3, createdAt: new Date("2025-01-15T15:23:21.000Z") },
      { rating: 3, createdAt: new Date("2025-01-21T12:42:44.000Z") },
      { rating: 3, createdAt: new Date("2025-01-24T11:52:41.000Z") },
      { rating: 4, createdAt: new Date("2025-01-30T10:27:58.000Z") },
      { rating: 8, createdAt: new Date("2025-02-01T09:38:22.000Z") },
      { rating: 4, createdAt: new Date("2025-02-04T13:37:20.000Z") },
      { rating: 5, createdAt: new Date("2025-02-06T13:02:32.000Z") },
      { rating: 3, createdAt: new Date("2025-02-11T14:26:31.000Z") },
      { rating: 6, createdAt: new Date("2025-02-24T10:39:35.000Z") },
    ];

    for (const stressRating of stressRatingsData) {
      await db.insert(stressRatings).values({
        userId,
        rating: stressRating.rating,
        createdAt: stressRating.createdAt,
      });
    }

    // 7. Create Recommended Articles
    console.log("Creating recommended articles...");

    const articles = [
      "why-emotions-matter-even-at-work",
      "managing-reactions-and-problematic-anger",
    ];

    for (const articleSlug of articles) {
      await db.insert(recommendedArticles).values({
        userId,
        articleSlug,
        createdAt: new Date("2024-11-26T11:28:07.000Z"),
      });
    }

    console.log("✅ Seed completed successfully!");
    console.log(`📊 Created data for user: ${userId}`);
    console.log(`📈 Burnout assessments: 1 (with 2 assessments)`);
    console.log(`📚 Courses: 3`);
    console.log(`🏃‍♂️ Exercises: 2`);
    console.log(`📝 Journal entries: 3 (with encrypted inputs)`);
    console.log(`😰 Stress ratings: 25`);
    console.log(`📖 Recommended articles: 2`);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    throw error;
  }
}

// Run the seed function
seedUserData().catch((error) => {
  console.error(error);
  process.exit(1);
});
