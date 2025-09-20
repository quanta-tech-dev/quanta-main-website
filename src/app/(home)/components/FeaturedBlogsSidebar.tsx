import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getRelativeTime, calculateReadingTime } from '@/lib/timeUtils';

interface Blog {
  id: string;
  title: string;
  excerpt?: string;
  slug: string;
  coverImage?: string;
  featured: boolean;
  createdAt: string;
  content: { blocks?: Array<{ type: string; data?: { text?: string; items?: string[] } }> };
}

const FeaturedBlogsSidebar = () => {
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        const response = await fetch('/api/blogs?published=true');
        const data = await response.json();

        if (data.success) {
          // Filter featured blogs, sort by latest first, and limit to 4
          const featured = data.data
            .filter((blog: Blog) => blog.featured)
            .sort((a: Blog, b: Blog) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
            .slice(0, 4);
          setFeaturedBlogs(featured);
        }
      } catch (error) {
        console.error('Error fetching featured blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, []);

  return (
    <aside className="space-y-8 pl-6 border-l border-slate-100">
      <div>
        <h4 className="font-semibold text-lg mb-4">Featured Articles</h4>
        {loading ? (
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#098FD7]"></div>
            <span className="text-gray-500 text-sm">Loading...</span>
          </div>
        ) : featuredBlogs.length > 0 ? (
          <div className="space-y-4">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                href={`/resources/blogs/${blog.slug}`}
                className="block group"
              >
                <article className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  {blog.coverImage && (
                    <div className="mb-3">
                      <Image
                        src={blog.coverImage}
                        alt={blog.title}
                        width={300}
                        height={160}
                        className="rounded-md object-cover w-full h-32"
                      />
                    </div>
                  )}
                  <div className="text-xs text-gray-500 mb-2 flex items-center space-x-2">
                    <span>{getRelativeTime(blog.createdAt)}</span>
                    <span>•</span>
                    <span>{calculateReadingTime(blog.content)} min read</span>
                  </div>
                  <h5 className="font-medium text-sm leading-tight text-gray-900 group-hover:text-[#098FD7] transition-colors overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}>
                    {blog.title}
                  </h5>
                  {blog.excerpt && (
                    <p className="text-xs text-gray-600 mt-2 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical'
                    }}>
                      {blog.excerpt}
                    </p>
                  )}
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No featured articles available</p>
        )}
      </div>
    </aside>
  );
};

export default FeaturedBlogsSidebar;