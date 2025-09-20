import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Fetch all blogs
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    
    const blogs = await prisma.blog.findMany({
      where: published ? { published: published === 'true' } : undefined,
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        coverImage: true,
        featured: true,
        published: true,
        author: true,
        tags: true,
        views: true,
        likes: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json({ success: true, data: blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
}

// POST - Create new blog
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, excerpt, coverImage, tags, featured = false, published = false } = body;

    if (!title || !content) {
      return NextResponse.json(
        { success: false, message: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');

    const blogData: Record<string, unknown> = {
      title,
      content,
      excerpt: excerpt || null,
      slug: `${slug}-${Date.now()}`,
      tags: tags || [],
      featured,
      published,
    };

    // Only add coverImage if it exists
    if (coverImage) {
      blogData.coverImage = coverImage;
    }

    const blog = await prisma.blog.create({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data: blogData as any
    });

    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    console.error('Error creating blog:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { success: false, message: 'Failed to create blog', error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}