import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    // Enable standalone output for Docker
    output: 'standalone',

    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"],
        });
        return config;
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/portraits/**',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'plus.unsplash.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
                port: '',
                pathname: '/**',
            },
        ],
    },

    // Production optimizations
    poweredByHeader: false,
    generateEtags: false,
    compress: true,
};

export default nextConfig;
