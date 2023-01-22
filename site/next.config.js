/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/general',
                permanent: true,
            },
        ]
    },
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
