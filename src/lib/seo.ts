const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
export const siteUrl = configuredSiteUrl?.replace(/\/+$/, "");

export const archiveStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      ...(siteUrl ? { url: siteUrl } : {}),
      name: "GSP Historical Archive",
      alternateName: "Groupe Scolaire des Parents Historical Archive",
      publisher: {
        "@type": "Organization",
        name: "Groupe Scolaire des Parents",
        ...(siteUrl ? { url: siteUrl } : {}),
        logo: {
          "@type": "ImageObject",
          url: siteUrl ? `${siteUrl}/logo.png` : "/logo.png",
        },
      },
    },
  ],
};

export const archiveLogoUrl = siteUrl ? `${siteUrl}/logo.png` : undefined;
