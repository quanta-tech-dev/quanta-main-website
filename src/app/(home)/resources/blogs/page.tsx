'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";
import BlogSideBar from "@/components/BlogSideBar";
import { getRelativeTime, calculateReadingTime } from '@/lib/timeUtils';

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  coverImage?: string;
  featured: boolean;
  published: boolean;
  tags: string[];
  views: number;
  likes: number;
  createdAt: string;
  updatedAt: string;
  content: { blocks?: Array<{ type: string; data?: { text?: string; items?: string[] } }> };
}

const BlogsContent = () => {
    const searchParams = useSearchParams();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTag, setActiveTag] = useState('');

    const breadCrumbsItems = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/resources/blogs",
            label: "Blogs",
        },
    ];

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch('/api/blogs?published=true');
                const data = await response.json();
                
                if (data.success) {
                    setBlogs(data.data);
                    setFilteredBlogs(data.data);
                }
            } catch (error) {
                console.error('Error fetching blogs:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    // Initialize search and tag from URL parameters
    useEffect(() => {
        const urlSearch = searchParams.get('search');
        const urlTag = searchParams.get('tag');

        if (urlSearch) {
            setSearchQuery(urlSearch);
            setActiveTag(''); // Clear tag when searching
        }

        if (urlTag) {
            setActiveTag(urlTag);
            setSearchQuery(''); // Clear search when filtering by tag
        }
    }, [searchParams]);

    // Filter blogs based on search query and active tag
    useEffect(() => {
        let filtered = blogs;

        // Apply search filter
        if (searchQuery.trim()) {
            filtered = filtered.filter(blog =>
                blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
                blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // Apply tag filter
        if (activeTag.trim()) {
            filtered = filtered.filter(blog =>
                blog.tags.includes(activeTag)
            );
        }

        setFilteredBlogs(filtered);
    }, [searchQuery, activeTag, blogs]);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleTagFilter = (tag: string) => {
        setActiveTag(tag);
        // Clear search when filtering by tag
        if (tag) {
            setSearchQuery('');
        }
    };

    if (loading) {
        return (
            <main className="mt-[1.8rem]">
                <BreadCrumbs items={breadCrumbsItems}/>
                <section className="w-full flex justify-center items-center text-center mb-5">
                    <div className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[0.5rem] lg:gap-[1rem] xl:gap-[1.4rem]">
                        <h1 className="custom-page-title">Our Blog: Ideas, News, and Stories</h1>
                    </div>
                </section>
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
                </div>
            </main>
        );
    }

    return (
        <main className="mt-[1.8rem]">
            <BreadCrumbs items={breadCrumbsItems}/>
            <section className="w-full flex justify-center items-center text-center mb-5">
                <div
                    className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[0.5rem] lg:gap-[1rem] xl:gap-[1.4rem]">
                    <h1 className="custom-page-title">Our Blog: Ideas, News, and Stories</h1>
                </div>
            </section>
            <section className="py-12 px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="space-y-8 lg:col-span-3">
                        {filteredBlogs.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#098FD7] to-[#027bbd] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {searchQuery || activeTag ? 'No blogs found matching your criteria' : 'No blogs published yet'}
                                </h3>
                                <p className="text-gray-600">
                                    {searchQuery || activeTag ? 'Try different keywords or clear your filters' : 'Check back soon for new content!'}
                                </p>
                            </div>
                        ) : (
                            filteredBlogs.map((blog) => (
                                <div
                                    key={blog.id}
                                    className="flex flex-col md:flex-row gap-6 items-start"
                                >
                                    <div className="w-full md:w-1/3">
                                        {blog.coverImage ? (
                                            <Image
                                                src={blog.coverImage}
                                                alt={blog.title}
                                                width={600}
                                                height={300}
                                                className="rounded-lg object-cover h-[220px] w-full"
                                            />
                                        ) : (
                                            <div className="w-full h-[220px] bg-gray-200 rounded-lg flex items-center justify-center">
                                                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full md:w-2/3">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                                            <span>{getRelativeTime(blog.createdAt)}</span>
                                            <span>•</span>
                                            <span>{calculateReadingTime(blog.content)} min read</span>
                                            {blog.featured && (
                                                <>
                                                    <span>•</span>
                                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Featured</span>
                                                </>
                                            )}
                                        </div>
                                        <Link href={`/resources/blogs/${blog.slug}`}>
                                            <h3 className="mt-2 font-semibold text-lg md:text-xl text-[#098FD7] hover:text-[#027bbd] transition-colors">
                                                {blog.title}
                                            </h3>
                                        </Link>
                                        <p className="mt-2 text-gray-600">
                                            {blog.excerpt || blog.title}
                                        </p>
                                        
                                        {/* Tags */}
                                        {blog.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-2">
                                                {blog.tags.slice(0, 3).map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {/* Stats */}
                                        <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                <span>{blog.views} views</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-red-500">{blog.likes} likes</span>
                                            </div>
                                        </div>

                                        <Link href={`/resources/blogs/${blog.slug}`}
                                              prefetch={false}
                                              scroll={false}
                                              className="mt-4 inline-flex items-center px-5 py-2 rounded-lg text-sm font-medium transition bg-gradient-to-r from-[#098FD7] via-[#40d4f7] to-[#027bbd] bg-[length:300%_100%] hover:bg-[position:100%_0] text-white shadow-[0_4px_15px_0_rgba(9,143,215,0.75)]"
                                        >
                                            Read more →
                                        </Link>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Sidebar */}
                    <BlogSideBar
                        onSearch={handleSearch}
                        searchQuery={searchQuery}
                        onTagFilter={handleTagFilter}
                        activeTag={activeTag}
                    />
                </div>
            </section>

        </main>
    );
};

const Blogs = () => {
    return (
        <Suspense fallback={
            <main className="mt-[1.8rem]">
                <div className="flex justify-center items-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
                </div>
            </main>
        }>
            <BlogsContent />
        </Suspense>
    );
};

export default Blogs;
