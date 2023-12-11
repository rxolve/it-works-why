/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [];
  },
  async rewrites() {
    return [
      {
        source: "/api/chat",
        destination: "https://api.openai.com/v1/engines/davinci/completions",
      },
    ];
  },
};

module.exports = nextConfig;
