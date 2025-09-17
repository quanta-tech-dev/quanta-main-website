'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { OutputData } from '@editorjs/editorjs';

interface Blog {
  id: string;
  title: string;
  content: OutputData;
  excerpt?: string;
  coverImage?: string;
  author: string;
  tags: string[];
  views: number;
  likes: number;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

const BlogPreviewPage = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        const result = await response.json();
        
        if (result.success) {
          setBlog(result.data);
        } else {
          alert('Blog not found');
          router.push('/dashboard/blogs');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        alert('Error loading blog');
        router.push('/dashboard/blogs');
      } finally {
        setIsLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId, router]);

  // Render EditorJS content as HTML
  const renderContent = (content: OutputData) => {
    if (!content.blocks) return '';
    
    return content.blocks.map((block, index) => {
      switch (block.type) {
        case 'header':
          const HeaderTag = `h${block.data.level}` as keyof React.JSX.IntrinsicElements;
          return (
            <HeaderTag
              key={index}
              className={`font-bold mb-4 ${
                block.data.level === 1 ? 'text-4xl' :
                block.data.level === 2 ? 'text-3xl' :
                block.data.level === 3 ? 'text-2xl' :
                block.data.level === 4 ? 'text-xl' :
                block.data.level === 5 ? 'text-lg' : 'text-base'
              }`}
            >
              {block.data.text}
            </HeaderTag>
          );
        
        case 'paragraph':
          return (
            <p key={index} className="mb-4 leading-relaxed">
              {block.data.text}
            </p>
          );
        
        case 'list':
          const ListTag = block.data.style === 'ordered' ? 'ol' : 'ul';
          return (
            <ListTag key={index} className={`mb-4 ml-6 ${
              block.data.style === 'ordered' ? 'list-decimal' : 'list-disc'
            }`}>
              {block.data.items.map((item: string, itemIndex: number) => (
                <li key={itemIndex} className="mb-1">
                  {item}
                </li>
              ))}
            </ListTag>
          );
        
        case 'image':
          return (
            <div key={index} className="mb-6">
              <Image
                src={block.data.file.url}
                alt={block.data.caption || 'Blog image'}
                width={800}
                height={400}
                className="max-w-full h-auto rounded-lg shadow-md"
              />
              {block.data.caption && (
                <p className="text-sm text-gray-600 text-center mt-2 italic">
                  {block.data.caption}
                </p>
              )}
            </div>
          );
        
        default:
          return null;
      }
    });
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Blog not found</h1>
          <button
            onClick={() => router.push('/dashboard/blogs')}
            className="mt-4 text-[#098FD7] hover:underline"
          >
            Back to blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Blog Preview</h1>
                <p className="text-gray-600 mt-1">Preview how your blog will look</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => router.push(`/dashboard/blogs/edit/${blog.id}`)}
                  className="text-blue-600 hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button
                  onClick={() => router.back()}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Blog Status */}
            <div className="flex items-center space-x-3">
              {blog.featured && (
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  blog.published
                    ? 'bg-green-100 text-green-800'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                {blog.published ? 'Published' : 'Draft'}
              </span>
              <span className="text-sm text-gray-500">
                Last updated: {new Date(blog.updatedAt).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            {/* Cover Image */}
            {blog.coverImage && (
              <div className="mb-6">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  width={800}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
            )}

            {/* Meta info */}
            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
              <span>By {blog.author}</span>
              <span>•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              <span>•</span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-blue-600 font-medium">{blog.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-red-600 font-medium">{blog.likes} likes</span>
                </div>
              </div>
              {blog.tags.length > 0 && (
                <>
                  <span>•</span>
                  <div className="flex space-x-1">
                    {blog.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Excerpt */}
            {blog.excerpt && (
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-lg text-gray-700 italic">
                  {blog.excerpt}
                </p>
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {renderContent(blog.content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewPage;