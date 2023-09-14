/** @type {import('next').NextConfig} */

const nextConfig = {
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/ra-components-store-func/"
      : undefined,
  output: "export",
};

module.exports = nextConfig;
