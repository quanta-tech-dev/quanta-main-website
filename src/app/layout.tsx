import type {Metadata} from 'next';
import {Inter_Tight} from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // İstədiyin çəkilər
});

export const metadata: Metadata = {
    title: {
        default: 'Quanta Technology - Innovation & Technology Solutions',
        template: '%s | Quanta Technology'
    },
    description: 'Quanta Technology - Leading technology company in Azerbaijan. Web development, mobile applications, cloud solutions and digital transformation services.',
    keywords: ['Quanta', 'Technology', 'Azerbaijan', 'Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Transformation'],
    authors: [{name: 'Quanta Technology Team'}],
    creator: 'Quanta Technology',
    publisher: 'Quanta Technology',

    // Open Graph
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://quanta.az',
        siteName: 'Quanta Technology',
        title: 'Quanta Technology - Innovation & Technology Solutions',
        description: 'Leading technology company in Azerbaijan. Web development, mobile applications and digital solutions.',
        images: [
            {
                url: '/logo.png',
                width: 1200,
                height: 630,
                alt: 'Quanta Technology Logo',
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        title: 'Quanta Technology - Innovation & Technology Solutions',
        description: 'Leading technology company in Azerbaijan',
        images: ['/logo.png'],
    },

    // Icons and Manifest
    icons: {
        icon: [
            {url: '/logo.svg', type: 'image/svg+xml'},
            {url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png'},
            {url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png'},
        ],
        apple: [
            {url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png'},
        ],
    },

    manifest: '/manifest.json',

    // Additional SEO
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Verification
    verification: {
        google: 'your-google-verification-code', // Dəyişdirin
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="az">
        <head>
            {/* Additional meta tags for better SEO */}
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name="theme-color" content="#098FD7"/>
            <meta name="msapplication-TileColor" content="#098FD7"/>
            <meta name="apple-mobile-web-app-capable" content="yes"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
            <meta name="apple-mobile-web-app-title" content="Quanta Tech"/>
            <title>Quanta</title>
        </head>
        <body className={`${interTight.className} antialiased`}>
        {children}
        </body>
        </html>
    );
}
