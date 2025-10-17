/** @type {import('next-sitemap').IConfig} */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://demoladevop.com";
const buildDate = new Date().toISOString();

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 1.0,
  exclude: ["/api/*"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  additionalPaths: async () => [
    {
      loc: "/",
      lastmod: buildDate,
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      loc: "/booking",
      lastmod: buildDate,
      changefreq: "monthly",
      priority: 0.9,
    },
  ],

  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
    additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },
};
