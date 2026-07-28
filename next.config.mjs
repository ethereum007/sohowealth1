/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  async redirects() {
    return [
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
      {
        source: "/rsu-esops",
        destination: "/wealth-planning-for-it-professionals/rsu-guide",
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
