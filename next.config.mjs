/** @type {import('next').NextConfig} */
const nextConfig = {
   
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "bitcoinmagazine.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/(.*)',
                has: [{ type: 'host', value: 'decryptarea.com' }],
                destination: 'https://decryptarea.com/:path*',
                permanent: true,
            },
            // You can add more redirects here if necessary
        ];
    },
};

export default nextConfig;
