/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://liaksej.github.io/ra-components-store-func/"
      : undefined,
};

module.exports = nextConfig;
