// module.exports = {
//   images: {
//     domains: [
//       "res.cloudinary.com",
//       "i.ibb.co",
//       "http",
//       "http://",
//       "localhost",
//       "investment-server-om2a.onrender.com",
//     ],
//   },
// };

/** @type {import('next').NextConfig} */
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
