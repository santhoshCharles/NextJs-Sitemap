const siteUrl = "https://www.cap-sul.com";

module.exports ={
    siteUrl, 
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {userAgent: "*", disallow: "/secret"},
            {userAgent: "*", allow: "/"}
        ],
        additionalSitemaps: [
            `${siteUrl}/sitemap.xml`,
            `${siteUrl}/server-sitemap.xml`
        ],
    },
    exclude: ["/secret"],
    sitemapBaseFileName: "cap-sul",
    sitemapSize: 2,
    changefreq: 'daily',
    alternateRefs: [
        {
          href: 'https://es.cap-sul.com',
          hreflang: 'es',
        },
        {
          href: 'https://fr.cap-sul.com',
          hreflang: 'fr',
        },
      ],
}