import { MetadataRoute } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://quanta.az'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
  ]

  try {
    // Dynamic blog pages
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: {
        slug: true,
        updatedAt: true,
      },
    })

    const blogPages = blogs.map((blog) => ({
      url: `${baseUrl}/resources/blogs/${blog.slug}`,
      lastModified: blog.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    await prisma.$disconnect()

    return [...staticPages, ...blogPages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    await prisma.$disconnect()

    // Return static pages only if database error
    return staticPages
  }
}