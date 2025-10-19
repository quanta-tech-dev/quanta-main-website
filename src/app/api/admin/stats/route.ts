import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        // Get blog statistics
        const totalBlogs = await prisma.blog.count();
        const publishedBlogs = await prisma.blog.count({
            where: { published: true }
        });
        const totalBlogViews = await prisma.blog.aggregate({
            _sum: { views: true }
        });
        const totalBlogLikes = await prisma.blog.aggregate({
            _sum: { likes: true }
        });

        // Get message statistics
        const totalMessages = await prisma.contactMessage.count();
        const newMessages = await prisma.contactMessage.count({
            where: { status: 'new' }
        });
        const todayMessages = await prisma.contactMessage.count({
            where: {
                createdAt: {
                    gte: new Date(new Date().setHours(0, 0, 0, 0))
                }
            }
        });

        // Get recent activity (latest 5 messages and blogs)
        const recentMessages = await prisma.contactMessage.findMany({
            orderBy: { createdAt: 'desc' },
            take: 3,
            select: {
                id: true,
                name: true,
                subject: true,
                createdAt: true,
                status: true
            }
        });

        const recentBlogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            take: 3,
            select: {
                id: true,
                title: true,
                published: true,
                createdAt: true,
                views: true
            }
        });

        await prisma.$disconnect();

        return NextResponse.json({
            blogStats: {
                total: totalBlogs,
                published: publishedBlogs,
                totalViews: totalBlogViews._sum.views || 0,
                totalLikes: totalBlogLikes._sum.likes || 0
            },
            messageStats: {
                total: totalMessages,
                new: newMessages,
                today: todayMessages
            },
            recentActivity: {
                messages: recentMessages,
                blogs: recentBlogs
            }
        });

    } catch (error) {
        console.error('Error fetching admin stats:', error);
        await prisma.$disconnect();

        return NextResponse.json(
            { error: 'Failed to fetch statistics' },
            { status: 500 }
        );
    }
}