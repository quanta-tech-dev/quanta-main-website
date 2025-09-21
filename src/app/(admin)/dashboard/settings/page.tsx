'use client';
import React, { useState, useEffect } from 'react';

interface AdminData {
  id?: string;
  name: string;
  email: string;
  title: string;
  bio: string;
  phone: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const AdminSettingsPage: React.FC = () => {
  const [adminData, setAdminData] = useState<AdminData>({
    name: '',
    email: '',
    title: '',
    bio: '',
    phone: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Load admin data on component mount
  useEffect(() => {
    loadAdminData();
  }, []);

  const loadAdminData = async () => {
    try {
      const response = await fetch('/api/admin/settings');
      if (response.ok) {
        const data = await response.json();
        setAdminData(prev => ({
          ...prev,
          id: data.id,
          name: data.name || '',
          email: data.email || '',
          title: data.title || '',
          bio: data.bio || '',
          phone: data.phone || ''
        }));
      }
    } catch (error) {
      console.error('Error loading admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdminData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage(null);

    // Password validation
    if (adminData.newPassword && adminData.newPassword !== adminData.confirmPassword) {
      setMessage({ type: 'error', text: 'Yeni şifrələr uyğun gəlmir' });
      setSaving(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(adminData),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Məlumatlar uğurla yeniləndi' });
        // Clear password fields
        setAdminData(prev => ({
          ...prev,
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        }));
      } else {
        const error = await response.json();
        setMessage({ type: 'error', text: error.message || 'Xəta baş verdi' });
      }
    } catch {
      setMessage({ type: 'error', text: 'Xəta baş verdi' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Tənzimləmələri</h1>
        <p className="text-gray-600">Şəxsi məlumatlarınızı və hesab ayarlarınızı idarə edin</p>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.type === 'success'
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-red-50 border border-red-200 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Personal Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Şəxsi Məlumatlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Ad və Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={adminData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Login Name
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={adminData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Vəzifə
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={adminData.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={adminData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Qısa məlumat
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={3}
                value={adminData.bio}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
                placeholder="Özünüz haqqında qısa məlumat..."
              />
            </div>
          </div>
        </div>

        {/* Password Change */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Şifrə Dəyişikliyi</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Hazırki Şifrə
              </label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={adminData.currentPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Yeni Şifrə
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={adminData.newPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Şifrə Təkrarı
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={adminData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#098FD7] focus:border-transparent"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Şifrə dəyişmək istəmirsinizsə, bu sahələri boş buraxın
          </p>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={saving}
            className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
              saving
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#098FD7] to-[#027bbd] hover:from-[#027bbd] hover:to-[#098FD7]'
            }`}
          >
            {saving ? 'Yadda saxlanır...' : 'Dəyişiklikləri Yadda Saxla'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminSettingsPage;