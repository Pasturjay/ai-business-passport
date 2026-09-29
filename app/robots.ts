import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/dashboard/settings/private"],
    },
    sitemap: "https://modus.ng/sitemap.xml",
  };
}
