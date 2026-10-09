import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const securityHeaders = [
  {key: "X-Content-Type-Options", value: "nosniff"},
  {key: "Referrer-Policy", value: "strict-origin-when-cross-origin"},
  {key: "X-Frame-Options", value: "DENY"},
  {key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()"},
  {key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains"}
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async headers() {
    return [
      {source: "/:path*", headers: securityHeaders},
      // Screenshots and the photo are content-addressed by path and rarely change.
      {source: "/projects/:path*", headers: [{key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400"}]}
    ];
  }
};

export default withNextIntl(nextConfig);
