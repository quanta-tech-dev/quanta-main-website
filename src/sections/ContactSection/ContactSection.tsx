import React from 'react';
import "./contactSection.css"

const ContactSection = () => {
    return (
        <section className="w-full bg-white py-16 relative overflow-hidden" id="get-free-consult">
            <div className="custom-layout relative z-10">
                {/* Top Gradient Header Section - 1/4 height */}
                <div className="relative rounded-t-3xl overflow-hidden h-80" style={{ backgroundColor: 'var(--intense-color)' }}>
                    {/* Dynamic Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 opacity-30" style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23098FD7' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>

                        {/* Animated background orbs */}
                        <div className="absolute top-5 left-10 w-24 h-24 rounded-full blur-2xl animate-pulse" style={{ backgroundColor: 'var(--main-color)', opacity: '0.1' }}></div>
                        <div className="absolute bottom-5 right-10 w-32 h-32 rounded-full blur-2xl animate-pulse delay-1000" style={{ backgroundColor: 'var(--secondary-color)', opacity: '0.1' }}></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-2xl animate-pulse delay-500" style={{ backgroundColor: 'var(--main-color)', opacity: '0.15' }}></div>
                    </div>

                    {/* Header Content */}
                    <div className="text-center relative z-10 pt-12 pb-8 px-8 h-full flex flex-col justify-center">
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3">
                                <div className="flex gap-1">
                                    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--main-color)' }}></div>
                                    <div className="w-2 h-2 rounded-full animate-bounce delay-100" style={{ backgroundColor: 'var(--secondary-color)' }}></div>
                                    <div className="w-2 h-2 rounded-full animate-bounce delay-200" style={{ backgroundColor: 'var(--main-color)' }}></div>
                                </div>
                                <span className="text-white font-medium">Let&apos;s Connect</span>
                            </div>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-none">
                            GET FREE
                            <span className="pl-4 bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, var(--main-color), var(--secondary-color))` }}>
                                CONSULTATION
                            </span>
                        </h2>
                    </div>
                </div>

                {/* White Form Section - 3/4 height */}
                <div className="bg-white rounded-b-3xl shadow-lg -mt-1">
                    <div className="max-w-4xl mx-auto px-8 py-16">

                        <form className="space-y-8">
                            {/* Form Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name Field */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            placeholder="Your full name"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>

                                {/* Email Field */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            placeholder="your.email@company.com"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>

                                {/* Phone Field */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            placeholder="+1 (555) 123-4567"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>

                                {/* Company Field */}
                                <div className="space-y-2">
                                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name *
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            required
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            placeholder="Your company name"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>

                                {/* Website Field */}
                                <div className="space-y-2">
                                    <label htmlFor="websiteURL" className="block text-sm font-medium text-gray-700 mb-2">
                                        Website URL
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="url"
                                            id="websiteURL"
                                            name="websiteURL"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            placeholder="https://yourcompany.com"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>

                                {/* Subject Field */}
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Field */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                    Message *
                                </label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none"
                                        placeholder="Tell us about your project, challenges, and how we can help you..."
                                        style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <div className="relative group">
                                    <div className="absolute inset-0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, var(--main-color), var(--secondary-color))` }}></div>
                                    <button
                                        type="submit"
                                        className="relative inline-flex items-center gap-4 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 group"
                                        style={{ background: `linear-gradient(to right, var(--main-color), var(--secondary-color))` }}
                                    >
                                        <span>Send Message</span>
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;