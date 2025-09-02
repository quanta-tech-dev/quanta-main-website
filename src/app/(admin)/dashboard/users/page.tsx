import React from 'react';

const UsersPage = () => {
    return (
        <div className="p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="border-b pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Users Management</h1>
                        <p className="text-gray-600 mt-2">Manage system users and their permissions</p>
                    </div>
                    
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#098FD7] to-[#027bbd] rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Users Module</h3>
                        <p className="text-gray-600">User management functionality coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;