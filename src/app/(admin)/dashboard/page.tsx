import React from 'react';

const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <div className="border-b pb-4 mb-6">
                        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
                        <p className="text-gray-600 mt-2">Welcome to the admin control panel</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-r from-[#098FD7] to-[#027bbd] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Total Users</h3>
                            <p className="text-3xl font-bold">1,234</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#027bbd] to-[#098FD7] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Active Sessions</h3>
                            <p className="text-3xl font-bold">89</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-[#40d4f7] to-[#098FD7] p-6 rounded-lg text-white">
                            <h3 className="text-xl font-semibold mb-2">Messages</h3>
                            <p className="text-3xl font-bold">45</p>
                        </div>
                    </div>
                    
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                        <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-gray-600">Dashboard is ready for customization...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;