-- Add encrypted_user_input column to courses table for storing self-reflection exercise data
ALTER TABLE "courses" ADD COLUMN "encrypted_user_input" json;
