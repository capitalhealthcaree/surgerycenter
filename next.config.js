/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "https://advancedcaresurgerycenter.com",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
