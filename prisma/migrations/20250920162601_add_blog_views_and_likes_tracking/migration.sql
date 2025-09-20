-- CreateTable
CREATE TABLE "public"."blog_views" (
    "id" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_views_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."blog_likes" (
    "id" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,
    "ipAddress" TEXT NOT NULL,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "blog_likes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "blog_views_blogId_ipAddress_key" ON "public"."blog_views"("blogId", "ipAddress");

-- AddForeignKey
ALTER TABLE "public"."blog_views" ADD CONSTRAINT "blog_views_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."blog_likes" ADD CONSTRAINT "blog_likes_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "public"."blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
