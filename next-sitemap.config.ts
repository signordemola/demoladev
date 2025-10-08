import type { IConfig } from "next-sitemap";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://demoladevop.com";
const buildDate = new Date().toISOString();

const config: IConfig = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 1.0,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },

  additionalPaths: async () => {
    return [
      {
        loc: "/",
        lastmod: buildDate,
        changefreq: "monthly",
        priority: 1.0,
      },
    ];
  },
};

export default config;
