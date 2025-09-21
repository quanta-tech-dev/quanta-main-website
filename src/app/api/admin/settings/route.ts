import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// GET - Fetch admin settings
export async function GET() {
  try {
    // Try to get existing admin settings
    let adminSettings = await prisma.adminSettings.findFirst();

    // If no admin settings exist, create default one
    if (!adminSettings) {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      adminSettings = await prisma.adminSettings.create({
        data: {
          name: 'Admin',
          email: 'admin@quanta.com',
          password: hashedPassword,
          title: 'Administrator',
        }
      });
    }

    // Return data without password
    const {  ...adminData } = adminSettings;
    return NextResponse.json(adminData);

  } catch (error) {
    console.error('Error fetching admin settings:', error);
    return NextResponse.json(
      { message: 'Məlumatları yükləyərkən xəta baş verdi' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT - Update admin settings
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      title,
      bio,
      phone,
      currentPassword,
      newPassword
    } = body;

    // Get current admin settings
    const adminSettings = await prisma.adminSettings.findFirst();

    if (!adminSettings) {
      return NextResponse.json(
        { message: 'Admin ayarları tapılmadı' },
        { status: 404 }
      );
    }

    // Prepare update data
    const updateData: {
      name: string;
      email: string;
      title: string;
      bio: string | null;
      phone: string | null;
      password?: string;
    } = {
      name: name || adminSettings.name,
      email: email || adminSettings.email,
      title: title || adminSettings.title,
      bio: bio || adminSettings.bio,
      phone: phone || adminSettings.phone,
    };

    // Handle password change
    if (newPassword && currentPassword) {
      // Verify current password
      const isCurrentPasswordValid = await bcrypt.compare(
        currentPassword,
        adminSettings.password
      );

      if (!isCurrentPasswordValid) {
        return NextResponse.json(
          { message: 'Hazırki şifrə yanlışdır' },
          { status: 400 }
        );
      }

      // Hash new password
      updateData.password = await bcrypt.hash(newPassword, 10);
    }

    // Update admin settings
    const updatedSettings = await prisma.adminSettings.update({
      where: { id: adminSettings.id },
      data: updateData
    });

    // Return updated data without password
    const { ...responseData } = updatedSettings;
    return NextResponse.json(responseData);

  } catch (error) {
    console.error('Error updating admin settings:', error);

    // Handle unique constraint errors (email already exists)
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { message: 'Bu email artıq istifadə olunur' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Məlumatları yeniləyərkən xəta baş verdi' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}