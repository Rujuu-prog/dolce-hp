/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeFonts: true,
  },
  compiler: {
    styledComponents: {
      displayName: process.env.NODE_ENV !== "production",
      ssr: true,
      fileName: true,
      // 以下は今後サポートされる予定のため、一旦false
      minify: false,
      transpileTemplateLiterals: false,
      pure: false,
    },
  },
};

module.exports = nextConfig;
