'use client';

import React, { useState, useEffect } from 'react';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  companyName: string;
  websiteURL?: string;
  subject?: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  ipAddress?: string;
  userAgent?: string;
  createdAt: string;
  updatedAt: string;
}

interface PaginationData {
  total: number;
  page: number;
  limit: number;
  pages: number;
}

const MessagesPage = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState<PaginationData | null>(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchMessages = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      if (statusFilter) params.append('status', statusFilter);
      params.append('page', currentPage.toString());
      params.append('limit', '10');

      const response = await fetch(`/api/contact?${params.toString()}`);
      const result = await response.json();

      if (result.success) {
        setMessages(result.data.messages);
        setPagination(result.data.pagination);
      } else {
        setError(result.message);
      }
    } catch {
      setError('Failed to fetch messages');
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (messageId: string, status: string) => {
    try {
      const response = await fetch(`/api/contact/${messageId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      const result = await response.json();

      if (result.success) {
        setMessages(messages.map(msg =>
          msg.id === messageId ? { ...msg, status: status as never } : msg
        ));
        if (selectedMessage?.id === messageId) {
          setSelectedMessage({ ...selectedMessage, status: status as never });
        }
      } else {
        alert('Failed to update message status');
      }
    } catch {
      alert('Failed to update message status');
    }
  };

  const deleteMessage = async (messageId: string) => {
    if (!confirm('Are you sure you want to delete this message?')) return;

    try {
      const response = await fetch(`/api/contact/${messageId}`, {
        method: 'DELETE',
      });

      const result = await response.json();

      if (result.success) {
        setMessages(messages.filter(msg => msg.id !== messageId));
        setSelectedMessage(null);
      } else {
        alert('Failed to delete message');
      }
    } catch {
      alert('Failed to delete message');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'read':
        return 'bg-yellow-100 text-yellow-800';
      case 'replied':
        return 'bg-green-100 text-green-800';
      case 'archived':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [statusFilter, currentPage, fetchMessages]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Messages</h1>
          <p className="text-gray-600">Manage and respond to customer inquiries</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Status</option>
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="replied">Replied</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Messages List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Messages ({pagination?.total || 0})
                </h2>
              </div>

              <div className="divide-y divide-gray-200">
                {messages.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    No messages found
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-6 cursor-pointer hover:bg-gray-50 transition-colors ${
                        selectedMessage?.id === message.id ? 'bg-blue-50 border-r-4 border-blue-500' : ''
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-medium text-gray-900 truncate">
                              {message.name}
                            </h3>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                              {message.status}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 mb-1">{message.email}</p>
                          <p className="text-sm text-gray-600 mb-2">{message.companyName}</p>
                          <p className="text-sm text-gray-800 line-clamp-2">{message.message}</p>
                          <p className="text-xs text-gray-500 mt-2">
                            {formatDate(message.createdAt)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Pagination */}
              {pagination && pagination.pages > 1 && (
                <div className="p-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing {((currentPage - 1) * 10) + 1} to {Math.min(currentPage * 10, pagination.total)} of{' '}
                      {pagination.total} results
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === pagination.pages}
                        className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              {selectedMessage ? (
                <>
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-xl font-semibold text-gray-900">Message Details</h2>
                      <button
                        onClick={() => deleteMessage(selectedMessage.id)}
                        className="text-red-600 hover:text-red-800 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                        <select
                          value={selectedMessage.status}
                          onChange={(e) => updateMessageStatus(selectedMessage.id, e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                          <option value="archived">Archived</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Contact Information</h3>
                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-medium text-gray-700">Name:</span>
                          <p className="text-sm text-gray-900">{selectedMessage.name}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Email:</span>
                          <p className="text-sm text-gray-900">{selectedMessage.email}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Phone:</span>
                          <p className="text-sm text-gray-900">{selectedMessage.phone}</p>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-700">Company:</span>
                          <p className="text-sm text-gray-900">{selectedMessage.companyName}</p>
                        </div>
                        {selectedMessage.websiteURL && (
                          <div>
                            <span className="text-sm font-medium text-gray-700">Website:</span>
                            <p className="text-sm text-blue-600">
                              <a href={selectedMessage.websiteURL} target="_blank" rel="noopener noreferrer">
                                {selectedMessage.websiteURL}
                              </a>
                            </p>
                          </div>
                        )}
                        {selectedMessage.subject && (
                          <div>
                            <span className="text-sm font-medium text-gray-700">Subject:</span>
                            <p className="text-sm text-gray-900">{selectedMessage.subject}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Message</h3>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-sm text-gray-900 whitespace-pre-wrap">{selectedMessage.message}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Meta Information</h3>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p><span className="font-medium">Created:</span> {formatDate(selectedMessage.createdAt)}</p>
                        <p><span className="font-medium">Updated:</span> {formatDate(selectedMessage.updatedAt)}</p>
                        {selectedMessage.ipAddress && (
                          <p><span className="font-medium">IP Address:</span> {selectedMessage.ipAddress}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <p>Select a message to view details</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;