'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import "./contactSection.css"

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20, 'Phone number is too long'),
  companyName: z.string().min(2, 'Company name must be at least 2 characters').max(100, 'Company name is too long'),
  websiteURL: z.string().url('Please enter a valid URL').optional().or(z.literal('')),
  subject: z.string().max(200, 'Subject is too long').optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(2000, 'Message is too long'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({ type: 'success', message: result.message });
                setShowSuccessModal(true);
                reset(); // Clear the form

                // Auto hide success modal after 5 seconds
                setTimeout(() => {
                    setShowSuccessModal(false);
                    setSubmitStatus(null);
                }, 5000);
            } else {
                setSubmitStatus({ type: 'error', message: result.message || 'Something went wrong' });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 backdrop-blur-sm"
                        onClick={() => {
                            setShowSuccessModal(false);
                            setSubmitStatus(null);
                        }}
                    ></div>

                    {/* Modal */}
                    <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full mx-auto transform animate-[modalSlideIn_0.3s_ease-out] overflow-hidden">
                        {/* Success Animation Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100"></div>

                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setShowSuccessModal(false);
                                setSubmitStatus(null);
                            }}
                            className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-white/50"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        {/* Content */}
                        <div className="relative z-10 p-8 text-center">
                            {/* Success Icon with Animation */}
                            <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg animate-[bounce_1s_ease-in-out]">
                                <svg className="w-10 h-10 text-white animate-[checkMark_0.5s_ease-in-out_0.3s_both]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>

                            {/* Success Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Message Sent Successfully! 🎉
                            </h3>

                            {/* Success Message */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {submitStatus?.message || 'Your message has been sent successfully! We will get back to you soon.'}
                            </p>

                            {/* Action Button */}
                            <button
                                onClick={() => {
                                    setShowSuccessModal(false);
                                    setSubmitStatus(null);
                                }}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Awesome!
                            </button>

                            {/* Decorative Elements */}
                            <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-green-200 opacity-50 animate-pulse"></div>
                            <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-emerald-200 opacity-30 animate-pulse delay-1000"></div>
                            <div className="absolute top-1/2 right-8 w-4 h-4 rounded-full bg-green-300 opacity-40 animate-pulse delay-500"></div>
                        </div>
                    </div>
                </div>
            )}

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
                        {/* Status Message */}
                        {submitStatus && (
                            <div className={`mb-6 p-4 rounded-lg ${
                                submitStatus.type === 'success'
                                    ? 'bg-green-50 border border-green-200 text-green-800'
                                    : 'bg-red-50 border border-red-200 text-red-800'
                            }`}>
                                <div className="flex items-center">
                                    {submitStatus.type === 'success' ? (
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                    )}
                                    {submitStatus.message}
                                </div>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
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
                                            {...register('name')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.name ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="Your full name"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.name && (
                                            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                                        )}
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
                                            {...register('email')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.email ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="your.email@company.com"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.email && (
                                            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                                        )}
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
                                            {...register('phone')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.phone ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="+1 (555) 123-4567"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.phone && (
                                            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                                        )}
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
                                            {...register('companyName')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.companyName ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="Your company name"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.companyName && (
                                            <p className="text-red-600 text-sm mt-1">{errors.companyName.message}</p>
                                        )}
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
                                            {...register('websiteURL')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.websiteURL ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="https://yourcompany.com"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.websiteURL && (
                                            <p className="text-red-600 text-sm mt-1">{errors.websiteURL.message}</p>
                                        )}
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
                                            {...register('subject')}
                                            className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 ${errors.subject ? 'border-red-300' : 'border-gray-300'}`}
                                            placeholder="Subject (optional)"
                                            style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                        />
                                        {errors.subject && (
                                            <p className="text-red-600 text-sm mt-1">{errors.subject.message}</p>
                                        )}
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
                                        {...register('message')}
                                        rows={5}
                                        className={`w-full px-4 py-3 bg-gray-50 border rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 resize-none ${errors.message ? 'border-red-300' : 'border-gray-300'}`}
                                        placeholder="Tell us about your project, challenges, and how we can help you..."
                                        style={{ '--tw-ring-color': 'var(--main-color)' } as React.CSSProperties}
                                    ></textarea>
                                    {errors.message && (
                                        <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-6">
                                <div className="relative group">
                                    <div className="absolute inset-0 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(to right, var(--main-color), var(--secondary-color))` }}></div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="relative inline-flex items-center gap-4 text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                        style={{ background: `linear-gradient(to right, var(--main-color), var(--secondary-color))` }}
                                    >
                                        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
        </>
    );
};

export default ContactSection;