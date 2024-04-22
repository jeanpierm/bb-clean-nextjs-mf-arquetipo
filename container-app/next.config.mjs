/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "container",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            // geo: `geo@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
            geo: `geo@http://localhost:3001/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {
            "./footer": "./src/sections/shared/Footer.tsx",
            "./nav": "./src/sections/shared/Nav.tsx",
          },
          // shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        })
      );
    }
    return config;
  },
};

export default nextConfig;
