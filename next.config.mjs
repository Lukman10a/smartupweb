/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "smartuptech-prod.s3.amazonaws.com", protocol: "https" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://smartup-api.herokuapp.com/api/:path*", // Proxy to the API
      },
    ];
  },
};

export default nextConfig;
