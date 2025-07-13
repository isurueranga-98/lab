/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        missingSuspenseWithCSRBailout: false,
        serverActions: {
            allowedOrigins: ['localhost:3000', '*.vercel.app']
        }
    },
    logging: {
        fetches: {
            fullUrl: true
        }
    }
};

export default nextConfig;
