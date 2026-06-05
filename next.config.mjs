/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Marketing site is content-only: every page is statically generated and
  // served from the edge CDN. No server runtime, no auth, no database.
  poweredByHeader: false,
};

export default nextConfig;
