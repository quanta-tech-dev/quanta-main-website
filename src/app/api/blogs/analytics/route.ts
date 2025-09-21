import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET - Get blog analytics data for admin dashboard
export async function GET() {
  try {
    // Get all blogs with their analytics
    const blogs = await prisma.blog.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        featured: true,
        published: true,
        views: true,
        likes: true,
        createdAt: true,
        _count: {
          select: {
            blogViews: true,
            blogLikes: true,
          },
        },
      },
      orderBy: [
        { views: 'desc' },
        { likes: 'desc' },
      ],
    });

    // Get overall statistics
    const totalStats = await prisma.blog.aggregate({
      _sum: {
        views: true,
        likes: true,
      },
      _count: {
        id: true,
      },
    });

    // Get recent activity (last 7 days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const recentViews = await prisma.blogView.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    });

    const recentLikes = await prisma.blogLike.count({
      where: {
        createdAt: {
          gte: sevenDaysAgo,
        },
      },
    });

    // Get top performing blogs
    const topViewedBlogs = blogs.slice(0, 10);
    const topLikedBlogs = [...blogs].sort((a, b) => b.likes - a.likes).slice(0, 10);

    // Get unique visitor count (approximate)
    const uniqueViewers = await prisma.blogView.groupBy({
      by: ['ipAddress'],
      _count: {
        ipAddress: true,
      },
    });

    const analytics = {
      overview: {
        totalBlogs: totalStats._count.id,
        totalViews: totalStats._sum.views || 0,
        totalLikes: totalStats._sum.likes || 0,
        uniqueViewers: uniqueViewers.length,
        recentViews: recentViews,
        recentLikes: recentLikes,
      },
      topPerforming: {
        mostViewed: topViewedBlogs,
        mostLiked: topLikedBlogs,
      },
      allBlogs: blogs,
    };

    return NextResponse.json({
      success: true,
      data: analytics,
    });

  } catch (error) {
    console.error('Error fetching blog analytics:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}