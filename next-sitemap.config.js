/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sage.ai-pathfinder.eu',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false, // (optional)
    outputDir: 'public', // (optional)
    // ...other options
}
