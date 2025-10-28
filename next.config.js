/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly disable static export for server-side features
  output: undefined,
  images: {
    unoptimized: true,
  },
  turbopack: {},
  webpack: (config, { isServer }) => {
    config.cache = false;
    
    // Handle undici package
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        undici: false,
        fetch: false,
        crypto: false,
        url: false,
        http: false,
        https: false,
        util: false,
        zlib: false,
        stream: false,
        'stream-browserify': false
      };
    }

    return config;
  },
};

module.exports = nextConfig;