/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "https://advancedcaresurgerycenter.com",
    ],
  },
};

module.exports = nextConfig;
