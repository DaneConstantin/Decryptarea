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
};

export default nextConfig;
