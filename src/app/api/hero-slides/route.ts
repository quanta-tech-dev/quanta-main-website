import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  try {
    const slides = await prisma.heroSlide.findMany({
      orderBy: { order: 'asc' },
    });
    return NextResponse.json({ success: true, data: slides });
  } catch (error) {
    console.error('Error fetching slides:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch slides' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, image, buttonText, buttonLink, subtext, order, active = true } = body;

    if (!title || !description || !image || !buttonText || !buttonLink) {
      return NextResponse.json(
        { success: false, message: 'Title, description, image, buttonText, and buttonLink are required' },
        { status: 400 }
      );
    }

    // Get max order if order not provided
    const maxOrderSlide = await prisma.heroSlide.findFirst({
      orderBy: { order: 'desc' },
      select: { order: true }
    });

    const newSlide = await prisma.heroSlide.create({
      data: {
        title,
        description,
        image,
        buttonText,
        buttonLink,
        subtext: subtext || null,
        order: order || (maxOrderSlide?.order || 0) + 1,
        active,
      },
    });

    return NextResponse.json({ success: true, data: newSlide }, { status: 201 });
  } catch (error) {
    console.error('Error creating slide:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to create slide' },
      { status: 500 }
    );
  }
}