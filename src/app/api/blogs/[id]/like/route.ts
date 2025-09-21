import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Helper function to get client IP address
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const clientIP = request.headers.get('x-client-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIP) {
    return realIP;
  }
  if (clientIP) {
    return clientIP;
  }

  // Fallback to a default IP for development
  return '127.0.0.1';
}

// POST - Toggle like for a blog
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ipAddress = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || undefined;

    // Check how many likes this IP has given to this blog
    const existingLikes = await prisma.blogLike.findMany({
      where: {
        blogId: id,
        ipAddress: ipAddress,
      },
    });

    // Check if user wants to like or unlike
    const body = await request.json();
    const { action } = body; // 'like' or 'unlike'

    if (action === 'like') {
      // Check if IP has reached the 20 like limit
      if (existingLikes.length >= 20) {
        return NextResponse.json({
          success: false,
          message: 'Maximum 20 likes per IP address reached',
          likesFromThisIP: existingLikes.length,
          maxLikes: 20
        });
      }

      // Add a new like (multiple likes allowed from same IP)
      await prisma.blogLike.create({
        data: {
          blogId: id,
          ipAddress: ipAddress,
          userAgent: userAgent,
        },
      });

      // Update the blog's like count
      const updatedBlog = await prisma.blog.update({
        where: { id: id },
        data: {
          likes: {
            increment: 1,
          },
        },
        select: {
          likes: true,
        },
      });

      return NextResponse.json({
        success: true,
        likes: updatedBlog.likes,
        likesFromThisIP: existingLikes.length + 1,
        action: 'liked'
      });

    } else if (action === 'unlike') {
      if (existingLikes.length === 0) {
        return NextResponse.json({
          success: false,
          message: 'No likes to remove',
          likesFromThisIP: 0
        });
      }

      // Remove the most recent like from this IP
      const mostRecentLike = existingLikes.sort((a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      )[0];

      await prisma.blogLike.delete({
        where: {
          id: mostRecentLike.id,
        },
      });

      // Update the blog's like count
      const updatedBlog = await prisma.blog.update({
        where: { id: id },
        data: {
          likes: {
            decrement: 1,
          },
        },
        select: {
          likes: true,
        },
      });

      return NextResponse.json({
        success: true,
        likes: updatedBlog.likes,
        likesFromThisIP: existingLikes.length - 1,
        action: 'unliked'
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Invalid action. Use "like" or "unlike"'
    }, { status: 400 });

  } catch (error) {
    console.error('Error handling blog like:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to handle like' },
      { status: 500 }
    );
  }
}

// GET - Get like status for current IP
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ipAddress = getClientIP(request);

    const likesFromThisIP = await prisma.blogLike.count({
      where: {
        blogId: id,
        ipAddress: ipAddress,
      },
    });

    const blog = await prisma.blog.findUnique({
      where: { id: id },
      select: {
        likes: true,
        views: true,
      },
    });

    if (!blog) {
      return NextResponse.json({
        success: false,
        message: 'Blog not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      totalLikes: blog.likes,
      totalViews: blog.views,
      likesFromThisIP: likesFromThisIP,
      canLike: likesFromThisIP < 20
    });

  } catch (error) {
    console.error('Error getting like status:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to get like status' },
      { status: 500 }
    );
  }
}