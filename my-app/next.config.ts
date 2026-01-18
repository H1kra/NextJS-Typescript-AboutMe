import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async rewrites() {
        return [
            {
                source: '/users/:path*',
                destination: 'http://10.0.1.87:8080/v1/users/:path*',
            },
        ];
    },
};

export default nextConfig;