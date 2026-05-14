import { Helmet } from "react-helmet-async";

/**
 * StructuredData component for SEO Schema.org markup
 * @param {Object} props - Component props
 * @param {string} props.type - Type of schema (Organization, WebSite, LocalBusiness, etc.)
 * @param {Object} props.data - Schema data object
 */
export const StructuredData = ({ type = "Organization", data }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

/**
 * Organization schema for Fablead Developers Technolab
 */
export const organizationSchema = {
  "@type": "Organization",
  name: "Fablead Developers Technolab",
  url: "https://fableadtechnolabs.com",
  logo: "https://fableadtechnolabs.com/logo.webp",
  description:
    "Fablead Developers Technolab is the best IT company in Surat for Website Development, Website Designing, Ecommerce Solutions, SEO, and Digital Marketing Services.",
  foundingDate: "2017",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXXXXXXXXX",
    contactType: "Customer Service",
    email: "info@fableadtechnolabs.com",
  },
  sameAs: [
    "https://www.facebook.com/fableadtechnolabs",
    // "https://twitter.com/fableadtechnolabs",
    "https://www.instagram.com/fablead_technolab?igsh=MTZndnBocXp1NWxpNg==",
    "https://www.linkedin.com/company/fablead-developers-technolab",
    "https://www.instagram.com/fableadtechnolabs",
  ],
};

/**
 * LocalBusiness schema for better local SEO
 */
export const localBusinessSchema = {
  ...organizationSchema,
  "@type": "LocalBusiness",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

/**
 * WebSite schema for the main website
 */
export const webSiteSchema = {
  "@type": "WebSite",
  name: "Fablead Developers Technolab",
  alternateName: "Fablead Technolabs",
  url: "https://fableadtechnolabs.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://fableadtechnolabs.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

/**
 * Service schema template
 */
export const serviceSchema = (serviceName, description) => ({
  "@type": "Service",
  serviceType: serviceName,
  provider: {
    "@type": "Organization",
    name: "Fablead Developers Technolab",
    url: "https://fableadtechnolabs.com",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description: description,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
});

/**
 * Product schema template
 */
export const productSchema = (productName, description, url) => ({
  "@type": "SoftwareApplication",
  name: productName,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  description: description,
  url: url,
  offers: {
    "@type": "Offer",
    price: "Contact for Pricing",
    priceCurrency: "INR",
  },
});
