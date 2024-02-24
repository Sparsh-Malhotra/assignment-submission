/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dqy38fnwh4fqs.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
