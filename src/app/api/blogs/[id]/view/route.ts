import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

// POST - Track a blog view
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const ipAddress = getClientIP(request);
    const userAgent = request.headers.get('user-agent') || undefined;

    // Check if this IP has already viewed this blog
    const existingView = await prisma.blogView.findUnique({
      where: {
        blogId_ipAddress: {
          blogId: id,
          ipAddress: ipAddress,
        },
      },
    });

    if (existingView) {
      // IP has already viewed this blog, don't count again
      return NextResponse.json({
        success: true,
        message: 'View already recorded for this IP',
        alreadyViewed: true
      });
    }

    // Create new view record
    await prisma.blogView.create({
      data: {
        blogId: id,
        ipAddress: ipAddress,
        userAgent: userAgent,
      },
    });

    // Update the blog's view count
    const updatedBlog = await prisma.blog.update({
      where: { id: id },
      data: {
        views: {
          increment: 1,
        },
      },
      select: {
        views: true,
      },
    });

    return NextResponse.json({
      success: true,
      views: updatedBlog.views,
      alreadyViewed: false
    });
  } catch (error) {
    console.error('Error tracking blog view:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to track view' },
      { status: 500 }
    );
  }
}