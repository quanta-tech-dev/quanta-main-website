import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('image') as unknown as File;

    if (!file) {
      return NextResponse.json(
        { success: 0, message: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type
    if (!file.type.startsWith('image/')) {
      return NextResponse.json(
        { success: 0, message: 'Only image files are allowed' },
        { status: 400 }
      );
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { success: 0, message: 'File size must be less than 5MB' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create unique filename
    const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '')}`;

    // Determine upload directory based on usage
    const isSliderImage = request.headers.get('x-upload-type') === 'slider';
    const uploadSubDir = isSliderImage ? 'slider-images' : 'blog-images';
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', uploadSubDir);
    const filePath = path.join(uploadDir, fileName);

    // Create directory if it doesn't exist
    await mkdir(uploadDir, { recursive: true });

    // Write file
    await writeFile(filePath, buffer);

    // Return EditorJS compatible response
    return NextResponse.json({
      success: 1,
      file: {
        url: `/uploads/${uploadSubDir}/${fileName}`,
        name: fileName,
        size: file.size
      }
    });

  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { success: 0, message: 'Failed to upload file' },
      { status: 500 }
    );
  }
}