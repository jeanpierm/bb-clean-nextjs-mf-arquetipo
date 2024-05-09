/** @type {import('next').NextConfig} */
import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        name: "geo",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          container: `container@http://localhost:3000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/remoteEntry.js`,
        },
        exposes: {
          "./searchProvince": "./src/sections/provinces/SearchProvince.tsx",
          "./myButton": "./src/sections/shared/MyButton.tsx",
          "./customerForm": "./src/sections/customers/CustomerForm.tsx",
          "./geoStore": "./src/infraestructure/store.ts",
        },
        extraOptions: {
          exposePages: true,
        },
      })
    );
    return config;
  },
};

export default nextConfig;
