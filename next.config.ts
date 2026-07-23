import type { NextConfig } from "next";

// GitHub Pages(정적 사이트) 배포 설정.
// 저장소 이름이 바뀌면 basePath도 함께 바꿔야 한다.
const repo = "cebu-dashboard";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
