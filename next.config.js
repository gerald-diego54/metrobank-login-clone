/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'onlinebanking.metrobank.com.ph',
                port: '',
                pathname: '/688f0d66e0749a7e3acea59bd0d5de54.png',
            },
        ],
    },
};

module.exports = nextConfig;
