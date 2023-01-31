/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['137.184.232.116', 'static.wixstatic.com'],
        unoptimized: true,
    },

};

module.exports = nextConfig;
