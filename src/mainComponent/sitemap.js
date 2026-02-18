const fs = require("fs");
const path = require("path");

const routes = [
  "/",
  "/about",
  "/services",
  "/portfolio",
  "/careers",
  "/contact",
  "/products/inventory-billing-software-erp",
  "/products/crm-web-mobile-app-crm",
  "/products/cms-sites",
  "/products/ecommerce-web-mobile-app",
  "/products/real-estate",
  "/services/cms-website",
  "/services/web-maintenance",
  "/services/website-design",
  "/services/website-development",
  "/services/mobile-apps",
  "/services/e-commerce",
  // add new routes here
  "/services/shopify-development",
  "/services/graphics-design",
  "/services/server-management",
  "/services/seo-service",
  // add new routes here
  "/training-and-courses",
  "/training-and-courses/front-end-development",
  "/training-and-courses/back-end-development",
  "/training-and-courses/full-stack-development",
  "/training-and-courses/mobile-app-development",
];

const baseUrl = "https://www.fableadtechnolabs.com";
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map((route) => `<url><loc>${baseUrl}${route}</loc></url>`).join("")}
</urlset>`;

const outputPath = path.join("public", "sitemap.xml");

fs.writeFileSync(outputPath, sitemapXml);

console.log(`Sitemap generated successfully at: ${outputPath}`);
