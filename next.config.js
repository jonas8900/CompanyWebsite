/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['www.kununu.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-analytics.com va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: www.kununu.com *.google.com *.googleapis.com; font-src 'self'; connect-src 'self' *.vercel-analytics.com; frame-src 'self' https://www.google.com;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
