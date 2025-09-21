import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// GET - Get single contact message
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const message = await prisma.contactMessage.findUnique({
      where: { id }
    });

    if (!message) {
      return NextResponse.json({
        success: false,
        message: 'Message not found'
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: message
    });

  } catch (error) {
    console.error('Error fetching contact message:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to fetch message'
    }, { status: 500 });
  }
}

// PUT - Update contact message status
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { status } = body;

    // Validate status
    const validStatuses = ['new', 'read', 'replied', 'archived'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid status'
      }, { status: 400 });
    }

    const updatedMessage = await prisma.contactMessage.update({
      where: { id },
      data: { status }
    });

    return NextResponse.json({
      success: true,
      data: updatedMessage
    });

  } catch (error) {
    console.error('Error updating contact message:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to update message'
    }, { status: 500 });
  }
}

// DELETE - Delete contact message
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.contactMessage.delete({
      where: { id }
    });

    return NextResponse.json({
      success: true,
      message: 'Message deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting contact message:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to delete message'
    }, { status: 500 });
  }
}