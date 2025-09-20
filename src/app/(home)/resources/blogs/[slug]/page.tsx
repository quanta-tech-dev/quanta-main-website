'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import FeaturedBlogsSidebar from "@/components/FeaturedBlogsSidebar";
import EditorJSRenderer from "@/components/EditorJSRenderer";
import { getRelativeTime, calculateReadingTime } from '@/lib/timeUtils';
import { OutputData } from '@editorjs/editorjs';

interface Blog {
  id: string;
  title: string;
  content: OutputData;
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
}

const BlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug as string;

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        // Find blog by slug
        const response = await fetch('/api/blogs?published=true');
        const data = await response.json();
        
        if (data.success) {
          const foundBlog = data.data.find((b: Blog) => b.slug === slug);
          if (foundBlog) {
            setBlog(foundBlog);
            // Increment view count
            incrementViews(foundBlog.id);
          } else {
            router.push('/resources/blogs');
          }
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        router.push('/resources/blogs');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlog();
    }
  }, [slug, router]);

  const incrementViews = async (blogId: string) => {
    try {
      // This would require a new API endpoint for incrementing views
      // For now, we'll skip this implementation
      console.log('Would increment views for blog:', blogId);
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  const handleLike = async () => {
    if (!blog) return;
    
    try {
      // This would require a new API endpoint for liking
      // For now, we'll just toggle the liked state
      setLiked(!liked);
      setBlog(prev => prev ? { ...prev, likes: liked ? prev.likes - 1 : prev.likes + 1 } : null);
    } catch (error) {
      console.error('Error liking blog:', error);
    }
  };

  if (loading) {
    return (
      <main className="mt-[1.8rem]">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
        </div>
      </main>
    );
  }

  if (!blog) {
    return (
      <main className="mt-[1.8rem]">
        <div className="text-center py-12">
          <h1 className="text-2xl font-bold text-gray-900">Blog not found</h1>
          <button
            onClick={() => router.push('/resources/blogs')}
            className="mt-4 text-[#098FD7] hover:underline"
          >
            Back to blogs
          </button>
        </div>
      </main>
    );
  }

  const breadCrumbsItems = [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/resources/blogs",
      label: "Blogs",
    },
    {
      href: `/resources/blogs/${blog.slug}`,
      label: blog.title,
    },
  ];

  return (
    <main className="mt-[1.8rem]">
      <BreadCrumbs items={breadCrumbsItems}/>
      
      <article className="py-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Blog Header */}
            <header className="mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>

              {blog.excerpt && (
                <p className="text-xl text-gray-600 mb-6">
                  {blog.excerpt}
                </p>
              )}

              {/* Tags */}
              {blog.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Cover Image */}
              {blog.coverImage && (
                <div className="mb-8">
                  <Image
                    src={blog.coverImage}
                    alt={blog.title}
                    width={800}
                    height={400}
                    className="rounded-lg object-cover w-full h-[400px] shadow-lg"
                  />
                </div>
              )}

              {/* Stats and Actions */}
              <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{blog.views} views</span>
                  </div>
                  
                  <button
                    onClick={handleLike}
                    className="flex items-center space-x-1 hover:text-red-500 transition-colors"
                  >
                    <svg className={`w-4 h-4 ${liked ? 'text-red-500 fill-current' : ''}`} fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span className={liked ? 'text-red-500' : ''}>{blog.likes} likes</span>
                  </button>
                </div>

                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-[#098FD7] transition-colors" title="Share">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </header>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              <EditorJSRenderer data={blog.content} />
            </div>
          </div>

          {/* Sidebar */}
          <FeaturedBlogsSidebar />
        </div>
      </article>
    </main>
  );
};

export default BlogPage;