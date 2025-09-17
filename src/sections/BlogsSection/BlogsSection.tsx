'use client';
import React, { useState, useEffect } from 'react';
import "./BlogsSection.css"
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  coverImage?: string;
  featured: boolean;
  published: boolean;
  author: string;
  tags: string[];
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
}

export const BlogsSection = () => {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs?published=true');
                const data = await response.json();

                if (data.success) {
                    setBlogs(data.data.slice(0, 6));
                } else {
                    setError('Failed to fetch blogs');
                }
            } catch (err) {
                setError('Error loading blogs');
                console.error('Error fetching blogs:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getReadTime = (excerpt: string | undefined) => {
        const wordCount = excerpt?.split(' ').length || 100;
        return Math.max(1, Math.ceil(wordCount / 50));
    };

    if (loading) {
        return (
            <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
                <div className="custom-layout">
                    <div className="text-center">
                        <div className="inline-block w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-white/70">Loading amazing content...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (error || blogs.length === 0) {
        return (
            <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20">
                <div className="custom-layout text-center">
                    <p className="text-white/70">No blogs available at the moment.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 relative overflow-hidden">
            {/* Dynamic Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-40" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>

                {/* Animated background orbs */}
                <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
            </div>

            <div className="custom-layout relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8">
                        <div className="flex gap-1">
                            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100"></div>
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                        <span className="text-white font-medium">Trending Now</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-none">
                        LATEST
                        <span className="pl-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                            STORIES
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Discover insights that matter. Stories that inspire. Ideas that transform.
                    </p>
                </div>

                {/* Three Cards Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {blogs.slice(0, 3).map((blog) => (
                        <Link key={blog.id} href={`/resources/blogs/${blog.slug}`} className="group">
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col">
                                {/* Image */}
                                <div className="relative h-48 overflow-hidden">
                                    {blog.coverImage ? (
                                        <Image
                                            src={blog.coverImage}
                                            alt={blog.title}
                                            width={400}
                                            height={192}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* Tags */}
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {blog.featured && (
                                            <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                                                ⭐ FEATURED
                                            </span>
                                        )}
                                        <span className="bg-blue-500/80 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium">
                                            {blog.tags[0] || 'Article'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="space-y-4 flex-1">
                                        <div className="flex items-center gap-3 text-xs text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                                </svg>
                                                {formatDate(blog.createdAt)}
                                            </span>
                                            <span>•</span>
                                            <span>{getReadTime(blog.excerpt)} min read</span>
                                        </div>

                                        <h3 className="text-white font-bold text-xl group-hover:text-blue-300 transition-colors duration-300 line-clamp-2 leading-tight">
                                            {blog.title}
                                        </h3>

                                        {blog.excerpt && (
                                            <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
                                                {blog.excerpt}
                                            </p>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 mt-auto border-t border-white/10">
                                        <div className="flex items-center gap-3 text-xs text-slate-400">
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                                                </svg>
                                                {blog.views}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                                </svg>
                                                {blog.likes}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                                            <span className="text-xs font-medium">Read More</span>
                                            <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75"></div>
                        <Link
                            href="/resources/blogs"
                            className="relative inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 group"
                        >
                            <span>Explore All Stories</span>
                            <div className="flex items-center gap-2">
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                                <span className="text-2xl">✨</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};