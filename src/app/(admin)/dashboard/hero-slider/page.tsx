'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  subtext?: string;
  order: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

const HeroSliderPage = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingSlide, setEditingSlide] = useState<HeroSlide | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    buttonText: '',
    buttonLink: '',
    subtext: '',
    active: true
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/hero-slides');
      const data = await response.json();

      if (data.success) {
        setSlides(data.data.sort((a: HeroSlide, b: HeroSlide) => a.order - b.order));
      }
    } catch (error) {
      console.error('Error fetching slides:', error);
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('image', file);

    const response = await fetch('/api/upload-image', {
      method: 'POST',
      headers: {
        'x-upload-type': 'slider',
      },
      body: formData,
    });

    const result = await response.json();
    if (result.success === 1) {
      return result.file.url;
    } else {
      throw new Error(result.message || 'Upload failed');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.image;

      // Upload new image if selected (required for new slides, optional for editing)
      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      } else if (!editingSlide) {
        throw new Error('Please select an image');
      }

      const method = editingSlide ? 'PUT' : 'POST';
      const url = editingSlide ? `/api/hero-slides/${editingSlide.id}` : '/api/hero-slides';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          image: imageUrl,
          order: editingSlide ? editingSlide.order : slides.length + 1
        }),
      });

      if (response.ok) {
        const result = await response.json();
        if (editingSlide) {
          setSlides(slides.map(slide =>
            slide.id === editingSlide.id ? result.data : slide
          ));
        } else {
          setSlides([...slides, result.data].sort((a, b) => a.order - b.order));
        }
        resetForm();
        setShowForm(false);
      } else {
        alert('Failed to save slide');
      }
    } catch (error) {
      console.error('Error saving slide:', error);
      alert('Error saving slide: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      setUploading(false);
    }
  };

  const deleteSlide = async (id: string) => {
    if (!confirm('Are you sure you want to delete this slide?')) return;

    try {
      const response = await fetch(`/api/hero-slides/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSlides(slides.filter(slide => slide.id !== id));
      } else {
        alert('Failed to delete slide');
      }
    } catch (error) {
      console.error('Error deleting slide:', error);
      alert('Error deleting slide');
    }
  };

  const toggleSlideStatus = async (id: string, active: boolean) => {
    try {
      const response = await fetch(`/api/hero-slides/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ active: !active }),
      });

      if (response.ok) {
        setSlides(slides.map(slide =>
          slide.id === id ? { ...slide, active: !active } : slide
        ));
      }
    } catch (error) {
      console.error('Error updating slide status:', error);
    }
  };

  const editSlide = (slide: HeroSlide) => {
    setEditingSlide(slide);
    setFormData({
      title: slide.title,
      description: slide.description,
      image: slide.image,
      buttonText: slide.buttonText,
      buttonLink: slide.buttonLink,
      subtext: slide.subtext || '',
      active: slide.active
    });
    setImagePreview(slide.image);
    setImageFile(null);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      buttonText: '',
      buttonLink: '',
      subtext: '',
      active: true
    });
    setEditingSlide(null);
    setImageFile(null);
    setImagePreview('');
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="p-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="border-b border-gray-200 p-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Hero Slider Management</h1>
                <p className="text-gray-600 mt-2">Manage your homepage hero slider content</p>
              </div>
              <button
                onClick={() => {
                  resetForm();
                  setShowForm(true);
                }}
                className="bg-gradient-to-r from-[#098FD7] to-[#027bbd] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Add New Slide
              </button>
            </div>
          </div>

          {/* Form Modal */}
          {showForm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingSlide ? 'Edit Slide' : 'Add New Slide'}
                  </h2>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>

                    {/* Image Preview */}
                    {(imagePreview || formData.image) && (
                      <div className="mb-3">
                        <div className="w-32 h-20 bg-gray-100 rounded-md border overflow-hidden">
                          <Image
                            src={imagePreview || formData.image}
                            alt="Preview"
                            width={128}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )}

                    {/* File Upload */}
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        required={!editingSlide && !formData.image}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                      />
                      <p className="text-xs text-gray-500 mt-1">Upload an image (max 5MB)</p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Button Text</label>
                    <input
                      type="text"
                      name="buttonText"
                      value={formData.buttonText}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Button Link</label>
                    <input
                      type="text"
                      name="buttonLink"
                      value={formData.buttonLink}
                      onChange={handleInputChange}
                      required
                      placeholder="/about-us or #contact"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                    />
                    <p className="text-xs text-gray-500 mt-1">Enter a path (e.g., /about-us) or anchor (#contact)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subtext (Optional)</label>
                    <input
                      type="text"
                      name="subtext"
                      value={formData.subtext}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#098FD7]"
                    />
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="active"
                      checked={formData.active}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <label className="text-sm font-medium text-gray-700">Active</label>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <button
                      type="submit"
                      disabled={uploading}
                      className="bg-gradient-to-r from-[#098FD7] to-[#027bbd] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {uploading && (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      )}
                      <span>{uploading ? 'Saving...' : (editingSlide ? 'Update Slide' : 'Create Slide')}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      disabled={uploading}
                      className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Slides List */}
          <div className="p-6">
            {slides.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gradient-to-r from-[#098FD7] to-[#027bbd] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No slides found</h3>
                <p className="text-gray-600 mb-4">Start by creating your first hero slide</p>
                <button
                  onClick={() => {
                    resetForm();
                    setShowForm(true);
                  }}
                  className="bg-gradient-to-r from-[#098FD7] to-[#027bbd] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Create Your First Slide
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`border rounded-lg p-6 transition-all ${
                      slide.active ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex space-x-4 flex-1">
                        {/* Slide Image */}
                        <div className="flex-shrink-0">
                          <div className="w-30 h-20 bg-gray-100 rounded-lg border overflow-hidden">
                            <Image
                              src={slide.image}
                              alt={slide.title}
                              width={120}
                              height={80}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        {/* Slide Content */}
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                              #{index + 1}
                            </span>
                            <h3 className="text-xl font-semibold text-gray-900">{slide.title}</h3>
                            <span
                              className={`text-xs px-2 py-1 rounded-full ${
                                slide.active
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-gray-100 text-gray-800'
                              }`}
                            >
                              {slide.active ? 'Active' : 'Inactive'}
                            </span>
                          </div>

                          <p className="text-gray-600 mb-3">{slide.description}</p>

                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span>Button: &ldquo;{slide.buttonText}&rdquo;</span>
                            <span>•</span>
                            <span>Link: {slide.buttonLink}</span>
                            {slide.subtext && (
                              <>
                                <span>•</span>
                                <span>Subtext: &ldquo;{slide.subtext}&rdquo;</span>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex space-x-2 ml-4">
                        <button
                          onClick={() => toggleSlideStatus(slide.id, slide.active)}
                          className={`p-2 rounded-md transition-colors ${
                            slide.active
                              ? 'text-yellow-600 hover:text-yellow-800 hover:bg-yellow-50'
                              : 'text-green-600 hover:text-green-800 hover:bg-green-50'
                          }`}
                          title={slide.active ? 'Deactivate Slide' : 'Activate Slide'}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => editSlide(slide)}
                          className="text-blue-600 hover:text-blue-800 p-2 rounded-md hover:bg-blue-50 transition-colors"
                          title="Edit Slide"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button
                          onClick={() => deleteSlide(slide.id)}
                          className="text-red-600 hover:text-red-800 p-2 rounded-md hover:bg-red-50 transition-colors"
                          title="Delete Slide"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderPage;