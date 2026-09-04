/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  experimental: {
    // Keep static generation within predictable memory bounds for the large
    // content and PMS research datasets used across 170+ generated pages.
    cpus: 1,
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "sohowealth.in" }],
        destination: "https://www.sohowealth.in/:path*",
        permanent: true,
      },
      {
        source: "/nri-real-estate-hyderabad",
        destination: "/nri-real-estate-in-hyderabad",
        permanent: true,
      },
      {
        source: "/wealth-management-for-doctors",
        destination: "/financial-planning-for-doctors",
        permanent: true,
      },
      {
        source: "/wealth-management-for-doctors-hyderabad",
        destination: "/financial-planning-for-doctors",
        permanent: true,
      },
      {
        source: "/offshore-investing",
        destination: "/global-investing",
        permanent: true,
      },
      {
        source: "/fire-calculator",
        destination: "/insights/fire-planning-for-it-professionals-hyderabad",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      ...["/api/:path*", "/app/:path*", "/auth/:path*", "/sign-in"].map((source) => ({
        source,
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      })),
      {
        source: "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)\\.(js|css)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
