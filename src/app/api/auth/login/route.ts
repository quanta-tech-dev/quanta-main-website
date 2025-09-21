import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

// Force dynamic rendering for this route
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // Get admin from database
    const admin = await prisma.adminSettings.findFirst({
      where: {
        email: username
      }
    });

    if (!admin) {
      return NextResponse.json(
        { success: false, message: 'İstifadəçi tapılmadı' },
        { status: 401 }
      );
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Şifrə yanlışdır' },
        { status: 401 }
      );
    }

    // Login successful
    const response = NextResponse.json(
      { success: true, message: 'Giriş uğurla tamamlandı' },
      { status: 200 }
    );

    // Set cookie for authentication
    response.cookies.set('admin-auth', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 24 hours
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Server xətası' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}