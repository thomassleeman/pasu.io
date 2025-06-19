import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();

async function seedUserData() {
  const userId = "cmc20nir300007f0v2qhrwxkc"; // Existing user ID

  try {
    console.log("🌱 Starting seed for sleemantom@gmail.com...");

    // 1. Create Burnout Assessments
    console.log("Creating burnout assessments...");

    const assessment1 = await prisma.burnoutAssessment.create({
      data: {
        userId,
        assessmentKey: "assessment1",
        createdAt: new Date("2024-11-26T11:28:07.000Z"),
        categoryScores: {
          cognitiveImpairment: 2,
          detachment: 0,
          emotionalImpairment: 4,
          exhaustion: 4,
        },
      },
    });

    const assessment2 = await prisma.burnoutAssessment.create({
      data: {
        userId,
        assessmentKey: "assessment2",
        createdAt: new Date("2024-11-26T11:28:07.000Z"),
        categoryScores: {
          cognitiveImpairment: 0,
          detachment: 0,
          emotionalImpairment: 6,
          exhaustion: 4,
        },
      },
    });

    // 2. Create Courses and Course Resource Status
    console.log("Creating courses...");

    // Burnout Course
    const burnoutCourse = await prisma.course.create({
      data: {
        userId,
        courseSlug: "burnout-course",
        courseName: "Burnout Course",
        createdAt: new Date("2024-11-26T11:28:07.000Z"),
        updatedAt: new Date("2024-11-26T11:28:07.000Z"),
      },
    });

    const burnoutCourseResources = [
      {
        name: "5-working-on-yourself-vs-working-on-the-problem",
        completed: false,
      },
      { name: "all-about-stress", completed: false },
      { name: "defining-burnout", completed: true },
      { name: "stress-vs-anxiety", completed: false },
      { name: "understanding-the-causes-of-burnout", completed: false },
      { name: "what-is-stress", completed: true },
      { name: "what-you-can-do-vs-what-you-can-accept", completed: false },
      { name: "workplace-stressors-beyond-workload", completed: false },
      { name: "your-guide-to-burnout-prevention", completed: false },
      { name: "your-job-and-how-it-fits-you", completed: false },
    ];

    for (const resource of burnoutCourseResources) {
      await prisma.courseResourceStatus.create({
        data: {
          courseId: burnoutCourse.id,
          resourceName: resource.name,
          completed: resource.completed,
          completedAt: resource.completed
            ? new Date("2024-11-26T11:28:07.000Z")
            : null,
        },
      });
    }

    // CBT Course
    const cbtCourse = await prisma.course.create({
      data: {
        userId,
        courseSlug: "cbt-course",
        courseName: "CBT Course",
        createdAt: new Date("2024-10-30T15:35:27.000Z"),
        updatedAt: new Date("2024-10-30T15:35:27.000Z"),
      },
    });

    const cbtCourseResources = [
      { name: "changing-behaviour", completed: false },
      { name: "changing-habits-a-step-by-step-guide", completed: false },
      {
        name: "evaluating-thoughts-and-uncovering-core-beliefs",
        completed: false,
      },
      { name: "making-sense-of-experience", completed: true },
      { name: "noticing-the-cycle", completed: true },
      { name: "uncovering-core-beliefs", completed: false },
      { name: "understanding-the-connections", completed: false },
      {
        name: "understanding-your-thoughts-feelings-and-actions",
        completed: true,
      },
      { name: "unraveling-core-beliefs", completed: false },
      { name: "working-with-thoughts", completed: false },
    ];

    for (const resource of cbtCourseResources) {
      await prisma.courseResourceStatus.create({
        data: {
          courseId: cbtCourse.id,
          resourceName: resource.name,
          completed: resource.completed,
          completedAt: resource.completed
            ? new Date("2024-10-30T15:35:27.000Z")
            : null,
        },
      });
    }

    // CBT Course Module with encrypted data
    const cbtModule = await prisma.courseModule.create({
      data: {
        courseId: cbtCourse.id,
        moduleSlug: "understanding-your-thoughts-feelings-and-actions",
        createdAt: new Date("2024-10-30T15:35:27.000Z"),
        updatedAt: new Date("2024-10-30T15:35:27.000Z"),
      },
    });

    const cbtModuleInputs = [
      {
        inputId: "08443c4b25f2",
        encryptedData:
          "5fc34586fbca47233b46d16df15d6b62812e3df3b3d9005d4212b27451105d6ecf3c3a91a97d4cf1c7b8cfda08d49acc",
        iv: "f2439b053d1773ba1c079fb9dd830113",
      },
      {
        inputId: "1b8a705a8c0f",
        encryptedData:
          "5c5775c1ede9aefa511eb709423dd5f2946ac61ffaa856130421fc4c7fac9185",
        iv: "7d37ffdf0b49d8c4fa6372d13468b29f",
      },
      {
        inputId: "356e22bb03dc",
        encryptedData: "c58da4dae445c2733fc2b5be475894c4",
        iv: "816b696d84b61e42e37aee11f2b11089",
      },
      {
        inputId: "ae02b3861936",
        encryptedData: "2a2a270956c313bf8e2e7b7e6b984666",
        iv: "e6bf4aba4afc31614d210b9c040e1481",
      },
    ];

    for (const input of cbtModuleInputs) {
      await prisma.courseModuleInput.create({
        data: {
          moduleId: cbtModule.id,
          inputId: input.inputId,
          encryptedData: input.encryptedData,
          iv: input.iv,
        },
      });
    }

    // Stress to Strength Course
    const stressStrengthCourse = await prisma.course.create({
      data: {
        userId,
        courseSlug: "stress-to-strength-a-burnout-introduction-course",
        courseName: "Stress to Strength: A Burnout Introduction Course",
        createdAt: new Date("2023-08-04T15:09:15.000Z"), // Adjusted for UTC
        updatedAt: new Date("2023-08-04T15:09:15.000Z"),
      },
    });

    const stressStrengthResources = [
      { name: "burnout-signs-in-you", completed: false },
      { name: "but-wait-theres-hope", completed: false },
      { name: "stress-and-your-job", completed: false },
      {
        name: "understanding-burnout-stress-causes-and-prevalence",
        completed: false,
      },
      { name: "what-is-burnout-and-why-should-you-care", completed: false },
    ];

    for (const resource of stressStrengthResources) {
      await prisma.courseResourceStatus.create({
        data: {
          courseId: stressStrengthCourse.id,
          resourceName: resource.name,
          completed: resource.completed,
          completedAt: null,
        },
      });
    }

    // 3. Create Exercises
    console.log("Creating exercises...");

    const jobExercise = await prisma.exercise.create({
      data: {
        userId,
        exerciseSlug: "is-this-job-right-for-me",
        createdAt: new Date("2025-02-22T10:21:49.000Z"),
        updatedAt: new Date("2025-02-22T10:21:49.000Z"),
        completedPrompts: 2,
        completionPercentage: 15,
      },
    });

    const jobExerciseInputs = [
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
    ];

    for (const input of jobExerciseInputs) {
      await prisma.exerciseInput.create({
        data: {
          exerciseId: jobExercise.id,
          inputKey: input.inputKey,
          encryptedData: input.encryptedData,
          iv: input.iv,
        },
      });
    }

    const metaEmotionsExercise = await prisma.exercise.create({
      data: {
        userId,
        exerciseSlug: "meta-emotions-know-your-feelings-about-your-feelings",
        createdAt: new Date("2025-01-15T14:37:04.000Z"),
        updatedAt: new Date("2025-01-15T14:37:04.000Z"),
        completedPrompts: 0,
        completionPercentage: 0,
      },
    });

    const metaEmotionsInputs = [
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
    ];

    for (const input of metaEmotionsInputs) {
      await prisma.exerciseInput.create({
        data: {
          exerciseId: metaEmotionsExercise.id,
          inputKey: input.inputKey,
          encryptedData: input.encryptedData,
          iv: input.iv,
        },
      });
    }

    // 4. Create Journal Entries
    console.log("Creating journal entries...");

    const journalEntries = [
      {
        journalName: "journal",
        dateKey: "11-Nov-2024",
        createdAt: new Date("2024-11-11T15:03:00.000Z"),
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
      {
        journalName: "journal",
        dateKey: "19-Sep-2024",
        createdAt: new Date("2024-11-13T11:50:21.000Z"),
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
      {
        journalName: "journaling",
        dateKey: "22-Feb-2025",
        createdAt: new Date("2025-02-22T10:25:54.000Z"),
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
      // Add more journal entries as needed
    ];

    for (const journalData of journalEntries) {
      const journalEntry = await prisma.journalEntry.create({
        data: {
          userId,
          journalName: journalData.journalName,
          dateKey: journalData.dateKey,
          createdAt: journalData.createdAt,
          updatedAt: journalData.createdAt,
        },
      });

      for (const input of journalData.inputs) {
        await prisma.journalEntryInput.create({
          data: {
            journalEntryId: journalEntry.id,
            inputKey: input.inputKey,
            encryptedData: input.encryptedData,
            iv: input.iv,
          },
        });
      }
    }

    // 5. Create Stress Ratings
    console.log("Creating stress ratings...");

    const stressRatings = [
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

    for (const stressRating of stressRatings) {
      await prisma.stressRating.create({
        data: {
          userId,
          rating: stressRating.rating,
          createdAt: stressRating.createdAt,
        },
      });
    }

    // 6. Create Recommended Articles
    console.log("Creating recommended articles...");

    const articles = [
      "why-emotions-matter-even-at-work",
      "managing-reactions-and-problematic-anger",
    ];

    for (const articleSlug of articles) {
      await prisma.recommendedArticle.create({
        data: {
          userId,
          articleSlug,
          createdAt: new Date("2024-11-26T11:28:07.000Z"),
        },
      });
    }

    console.log("✅ Seed completed successfully!");
    console.log(`📊 Created data for user: ${userId}`);
    console.log(`📈 Burnout assessments: 2`);
    console.log(`📚 Courses: 3`);
    console.log(`🏃‍♂️ Exercises: 2`);
    console.log(`📝 Journal entries: 3+ (with encrypted inputs)`);
    console.log(`😰 Stress ratings: 25`);
    console.log(`📖 Recommended articles: 2`);
  } catch (error) {
    console.error("❌ Error seeding data:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed function
seedUserData().catch((error) => {
  console.error(error);
  process.exit(1);
});
