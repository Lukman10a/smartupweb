/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
