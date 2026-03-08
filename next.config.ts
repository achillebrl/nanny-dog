import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nanny-dog-adomicile.fr",
      },
    ],
  },
};

export default nextConfig;
