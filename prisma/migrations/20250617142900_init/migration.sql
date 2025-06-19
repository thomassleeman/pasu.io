-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BurnoutAssessment" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "assessmentKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryScores" JSONB NOT NULL,

    CONSTRAINT "BurnoutAssessment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "exerciseSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "completedPrompts" INTEGER NOT NULL DEFAULT 0,
    "completionPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Exercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExerciseInput" (
    "id" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "inputKey" TEXT NOT NULL,
    "encryptedData" TEXT NOT NULL,
    "iv" TEXT NOT NULL,

    CONSTRAINT "ExerciseInput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "courseSlug" TEXT NOT NULL,
    "courseName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseModule" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "moduleSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseModule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseModuleInput" (
    "id" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "inputId" TEXT NOT NULL,
    "encryptedData" TEXT NOT NULL,
    "iv" TEXT NOT NULL,

    CONSTRAINT "CourseModuleInput_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CourseResourceStatus" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "resourceName" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "CourseResourceStatus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RecommendedArticle" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "articleSlug" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecommendedArticle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StressRating" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StressRating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "journalName" TEXT NOT NULL,
    "dateKey" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JournalEntryInput" (
    "id" TEXT NOT NULL,
    "journalEntryId" TEXT NOT NULL,
    "inputKey" TEXT NOT NULL,
    "encryptedData" TEXT NOT NULL,
    "iv" TEXT NOT NULL,

    CONSTRAINT "JournalEntryInput_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_clerkId_key" ON "User"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_clerkId_idx" ON "User"("clerkId");

-- CreateIndex
CREATE INDEX "BurnoutAssessment_userId_idx" ON "BurnoutAssessment"("userId");

-- CreateIndex
CREATE INDEX "BurnoutAssessment_createdAt_idx" ON "BurnoutAssessment"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "BurnoutAssessment_userId_assessmentKey_key" ON "BurnoutAssessment"("userId", "assessmentKey");

-- CreateIndex
CREATE INDEX "Exercise_userId_idx" ON "Exercise"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_userId_exerciseSlug_key" ON "Exercise"("userId", "exerciseSlug");

-- CreateIndex
CREATE INDEX "ExerciseInput_exerciseId_idx" ON "ExerciseInput"("exerciseId");

-- CreateIndex
CREATE UNIQUE INDEX "ExerciseInput_exerciseId_inputKey_key" ON "ExerciseInput"("exerciseId", "inputKey");

-- CreateIndex
CREATE INDEX "Course_userId_idx" ON "Course"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Course_userId_courseSlug_key" ON "Course"("userId", "courseSlug");

-- CreateIndex
CREATE INDEX "CourseModule_courseId_idx" ON "CourseModule"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseModule_courseId_moduleSlug_key" ON "CourseModule"("courseId", "moduleSlug");

-- CreateIndex
CREATE INDEX "CourseModuleInput_moduleId_idx" ON "CourseModuleInput"("moduleId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseModuleInput_moduleId_inputId_key" ON "CourseModuleInput"("moduleId", "inputId");

-- CreateIndex
CREATE INDEX "CourseResourceStatus_courseId_idx" ON "CourseResourceStatus"("courseId");

-- CreateIndex
CREATE UNIQUE INDEX "CourseResourceStatus_courseId_resourceName_key" ON "CourseResourceStatus"("courseId", "resourceName");

-- CreateIndex
CREATE INDEX "RecommendedArticle_userId_idx" ON "RecommendedArticle"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "RecommendedArticle_userId_articleSlug_key" ON "RecommendedArticle"("userId", "articleSlug");

-- CreateIndex
CREATE INDEX "StressRating_userId_idx" ON "StressRating"("userId");

-- CreateIndex
CREATE INDEX "StressRating_createdAt_idx" ON "StressRating"("createdAt");

-- CreateIndex
CREATE INDEX "JournalEntry_userId_idx" ON "JournalEntry"("userId");

-- CreateIndex
CREATE INDEX "JournalEntry_journalName_idx" ON "JournalEntry"("journalName");

-- CreateIndex
CREATE INDEX "JournalEntry_dateKey_idx" ON "JournalEntry"("dateKey");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntry_userId_journalName_dateKey_key" ON "JournalEntry"("userId", "journalName", "dateKey");

-- CreateIndex
CREATE INDEX "JournalEntryInput_journalEntryId_idx" ON "JournalEntryInput"("journalEntryId");

-- CreateIndex
CREATE UNIQUE INDEX "JournalEntryInput_journalEntryId_inputKey_key" ON "JournalEntryInput"("journalEntryId", "inputKey");

-- AddForeignKey
ALTER TABLE "BurnoutAssessment" ADD CONSTRAINT "BurnoutAssessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Exercise" ADD CONSTRAINT "Exercise_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExerciseInput" ADD CONSTRAINT "ExerciseInput_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseModule" ADD CONSTRAINT "CourseModule_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseModuleInput" ADD CONSTRAINT "CourseModuleInput_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "CourseModule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseResourceStatus" ADD CONSTRAINT "CourseResourceStatus_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RecommendedArticle" ADD CONSTRAINT "RecommendedArticle_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StressRating" ADD CONSTRAINT "StressRating_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntryInput" ADD CONSTRAINT "JournalEntryInput_journalEntryId_fkey" FOREIGN KEY ("journalEntryId") REFERENCES "JournalEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
