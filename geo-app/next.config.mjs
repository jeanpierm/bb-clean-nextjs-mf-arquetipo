/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      // config.experiments = { topLevelAwait: true };
      config.plugins.push(
        new NextFederationPlugin({
          name: "geo",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            container: `container@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          exposes: {
            "./searchProvince": "./src/sections/provinces/SearchProvince.tsx",
            "./myButton": "./src/sections/shared/MyButton.tsx",
          },
          extraOptions: {
            exposePages: true,
          },
          // shared: { react: { singleton: true }, "react-dom": { singleton: true } },
        })
      );
    }
    return config;
  }
};

export default nextConfig;
