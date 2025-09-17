'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { OutputData } from '@editorjs/editorjs';

const EditorJSComponent = dynamic(() => import('../../../components/editor/EditorJS'), {
  ssr: false,
  loading: () => <div className="min-h-[400px] bg-gray-50 rounded-lg animate-pulse flex items-center justify-center">Loading editor...</div>
});

interface Blog {
  id: string;
  title: string;
  content: OutputData;
  excerpt?: string;
  coverImage?: string;
  tags: string[];
  featured: boolean;
  published: boolean;
}

const EditBlogPage = () => {
  const router = useRouter();
  const params = useParams();
  const blogId = params.id as string;
  
  const [blog, setBlog] = useState<Blog | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    tags: '',
    coverImage: '',
    featured: false,
    published: false
  });
  const [editorData, setEditorData] = useState<OutputData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [coverImageUploading, setCoverImageUploading] = useState(false);

  // Fetch blog data
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        const result = await response.json();
        
        if (result.success) {
          const blogData = result.data;
          setBlog(blogData);
          setFormData({
            title: blogData.title,
            excerpt: blogData.excerpt || '',
            tags: blogData.tags.join(', '),
            coverImage: blogData.coverImage || '',
            featured: blogData.featured,
            published: blogData.published
          });
          setEditorData(blogData.content);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleEditorChange = (data: OutputData) => {
    setEditorData(data);
  };

  const handleCoverImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCoverImageUploading(true);

    const formDataUpload = new FormData();
    formDataUpload.append('image', file);

    try {
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formDataUpload,
      });

      const result = await response.json();
      
      if (result.success) {
        setFormData(prev => ({
          ...prev,
          coverImage: result.file.url
        }));
      } else {
        alert('Cover image upload failed');
      }
    } catch (error) {
      console.error('Cover image upload error:', error);
      alert('Cover image upload failed');
    } finally {
      setCoverImageUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent, asDraft = false) => {
    e.preventDefault();
    
    if (!formData.title.trim()) {
      alert('Please enter a blog title');
      return;
    }

    if (!editorData || !editorData.blocks || editorData.blocks.length === 0) {
      alert('Please add some content to your blog');
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        title: formData.title.trim(),
        content: editorData,
        excerpt: formData.excerpt.trim() || null,
        coverImage: formData.coverImage || null,
        tags: formData.tags ? formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [],
        featured: formData.featured,
        published: !asDraft && formData.published
      };

      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        router.push('/dashboard/blogs');
      } else {
        alert(result.message || 'Failed to update blog');
      }
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Error updating blog. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Edit Blog</h1>
                <p className="text-gray-600 mt-2">Update your blog post</p>
              </div>
              <button
                onClick={() => router.back()}
                className="text-gray-500 hover:text-gray-700 p-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={(e) => handleSubmit(e)} className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Blog Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#098FD7] focus:border-transparent transition duration-300"
                placeholder="Enter your blog title..."
              />
            </div>

            {/* Excerpt */}
            <div>
              <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt (Optional)
              </label>
              <textarea
                id="excerpt"
                name="excerpt"
                rows={3}
                value={formData.excerpt}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#098FD7] focus:border-transparent transition duration-300 resize-none"
                placeholder="Brief description of your blog post..."
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image (Optional)
              </label>
              <div className="space-y-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleCoverImageUpload}
                  disabled={coverImageUploading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#098FD7] focus:border-transparent transition duration-300 disabled:opacity-50"
                />
                {coverImageUploading && (
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#098FD7] mr-2"></div>
                    Uploading cover image...
                  </div>
                )}
                {formData.coverImage && (
                  <div className="relative">
                    <Image
                      src={formData.coverImage}
                      alt="Cover preview"
                      width={800}
                      height={192}
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, coverImage: '' }))}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2">
                Tags (Optional)
              </label>
              <input
                type="text"
                id="tags"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#098FD7] focus:border-transparent transition duration-300"
                placeholder="Enter tags separated by commas (e.g., technology, AI, programming)"
              />
            </div>

            {/* Content Editor */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content *
              </label>
              <EditorJSComponent
                data={editorData || undefined}
                onChange={handleEditorChange}
                placeholder="Start writing your blog content..."
              />
            </div>

            {/* Options */}
            <div className="flex space-x-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#098FD7] focus:ring-[#098FD7] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Featured Post</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-[#098FD7] focus:ring-[#098FD7] border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">Published</span>
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.back()}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              
              <button
                type="button"
                onClick={(e) => handleSubmit(e, true)}
                disabled={isSubmitting}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Saving...' : 'Save as Draft'}
              </button>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2 bg-gradient-to-r from-[#098FD7] to-[#027bbd] text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Updating...' : 'Update Blog'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditBlogPage;