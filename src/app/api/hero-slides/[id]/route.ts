import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const existingSlide = await prisma.heroSlide.findUnique({
      where: { id }
    });

    if (!existingSlide) {
      return NextResponse.json(
        { success: false, message: 'Slide not found' },
        { status: 404 }
      );
    }

    const updatedSlide = await prisma.heroSlide.update({
      where: { id },
      data: {
        ...body,
        subtext: body.subtext || null,
      },
    });

    return NextResponse.json({ success: true, data: updatedSlide });
  } catch (error) {
    console.error('Error updating slide:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to update slide' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const existingSlide = await prisma.heroSlide.findUnique({
      where: { id }
    });

    if (!existingSlide) {
      return NextResponse.json(
        { success: false, message: 'Slide not found' },
        { status: 404 }
      );
    }

    await prisma.heroSlide.delete({
      where: { id }
    });

    return NextResponse.json({ success: true, message: 'Slide deleted successfully' });
  } catch (error) {
    console.error('Error deleting slide:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to delete slide' },
      { status: 500 }
    );
  }
}