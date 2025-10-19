'use client';

import React, { useEffect, useState } from 'react';

interface BlogStats {
    total: number;
    published: number;
    totalViews: number;
    totalLikes: number;
}

interface MessageStats {
    total: number;
    new: number;
    today: number;
}

interface RecentMessage {
    id: string;
    name: string;
    subject: string | null;
    createdAt: string;
    status: string;
}

interface RecentBlog {
    id: string;
    title: string;
    published: boolean;
    createdAt: string;
    views: number;
}

interface AdminStats {
    blogStats: BlogStats;
    messageStats: MessageStats;
    recentActivity: {
        messages: RecentMessage[];
        blogs: RecentBlog[];
    };
}

const DashboardPage = () => {
    const [stats, setStats] = useState<AdminStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            const response = await fetch('/api/admin/stats');
            if (response.ok) {
                const data = await response.json();
                setStats(data);
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
        } finally {
            setLoading(false);
        }
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-200 rounded w-64 mb-6"></div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[...Array(3)].map((_, i) => (
                                    <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="border-b pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-[#098FD7] to-[#027bbd] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Total Blogs</h3>
                            <p className="text-3xl font-bold">{stats?.blogStats.total || 0}</p>
                            <p className="text-sm opacity-80 mt-1">
                                {stats?.blogStats.published || 0} published
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#027bbd] to-[#098FD7] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Blog Views</h3>
                            <p className="text-3xl font-bold">{stats?.blogStats.totalViews || 0}</p>
                            <p className="text-sm opacity-80 mt-1">
                                {stats?.blogStats.totalLikes || 0} likes
                            </p>
                        </div>

                        <div className="bg-gradient-to-r from-[#40d4f7] to-[#098FD7] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Messages</h3>
                            <p className="text-3xl font-bold">{stats?.messageStats.total || 0}</p>
                            <p className="text-sm opacity-80 mt-1">
                                {stats?.messageStats.new || 0} new • {stats?.messageStats.today || 0} today
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Messages</h2>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                {stats?.recentActivity.messages.length ?
                                    stats.recentActivity.messages.map((message) => (
                                        <div key={message.id} className="bg-white p-3 rounded border-l-4 border-[#098FD7]">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-medium text-gray-900">{message.name}</p>
                                                    <p className="text-sm text-gray-600">{message.subject || 'No subject'}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-xs px-2 py-1 rounded ${
                                                        message.status === 'new' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                                    }`}>
                                                        {message.status}
                                                    </span>
                                                    <p className="text-xs text-gray-500 mt-1">{formatDate(message.createdAt)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )) :
                                    <p className="text-gray-600">No recent messages</p>
                                }
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Blogs</h2>
                            <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                                {stats?.recentActivity.blogs.length ?
                                    stats.recentActivity.blogs.map((blog) => (
                                        <div key={blog.id} className="bg-white p-3 rounded border-l-4 border-[#098FD7]">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <p className="font-medium text-gray-900">{blog.title}</p>
                                                    <p className="text-sm text-gray-600">{blog.views} views</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className={`text-xs px-2 py-1 rounded ${
                                                        blog.published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                                                    }`}>
                                                        {blog.published ? 'published' : 'draft'}
                                                    </span>
                                                    <p className="text-xs text-gray-500 mt-1">{formatDate(blog.createdAt)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )) :
                                    <p className="text-gray-600">No recent blogs</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;