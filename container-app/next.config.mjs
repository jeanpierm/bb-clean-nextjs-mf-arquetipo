/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "container",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          geo: `geo@http://localhost:3001/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./footer": "./src/sections/shared/Footer.tsx",
          "./nav": "./src/sections/shared/Nav.tsx",
        },
      })
    );
    return config;
  },
};

export default nextConfig;
