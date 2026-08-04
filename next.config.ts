import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_ACTIONS === "true";
const repositoryPath = "/gpost-strategy";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath: githubPages ? repositoryPath : "",
  assetPrefix: githubPages ? repositoryPath : "",
  trailingSlash: githubPages,
  images: { unoptimized: true },
};

export default nextConfig;
