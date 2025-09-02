-- AlterTable
ALTER TABLE "public"."blogs" ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0;
