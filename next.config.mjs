/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ]
  },
  i18n: {
    locales: ["id", "en"], // Bahasa Indonesia dan Inggris
    defaultLocale: "id",   // Default: Bahasa Indonesia
    localeDetection: false
  },
  cacheMaxMemorySize: 104857600, // 100 MB dalam byte
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600, immutable", // Long caching for static assets
          }
        ],
      },
    ];
  },
  reactStrictMode: true,  // Enables strict mode for better debugging
  // swcMinify: true,  // Faster JavaScript minification
  compress: true,   // Enables compression (gzip and brotli)
  // optimizeFonts: true,  // Optimizes font loading for better performance
};

export default nextConfig;
