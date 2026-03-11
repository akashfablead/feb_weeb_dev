import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Twitter, Facebook, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import { Helmet } from "react-helmet-async";

function TopBar() {
  const currentUrl = window.location.href;
  const siteName = "Fablead Developers Technolab";
  const siteDescription =
    "Fablead Developers Technolab is the best IT company in Surat for Website Development, Website Designing, Ecommerce Solutions, SEO, and Digital Marketing Services.";

  return (
    <>
      <Helmet>
        {/* Canonical URL */}
        <link rel="canonical" href={currentUrl} />

        {/* Basic SEO */}
        <title>{siteName}</title>
        <meta name="title" content={siteName} />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content="Website Development, Website Designing, Ecommerce Solutions, SEO, Digital Marketing, IT Company Surat, Web Development Surat, Mobile Apps" />
        <meta name="author" content={siteName} />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content="%PUBLIC_URL%/favicon-192x192.webp" />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="%PUBLIC_URL%/favicon-192x192.webp" />

        {/* LinkedIn */}
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteDescription} />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": siteName,
            "url": "https://www.fableadtechnolabs.com",
            "logo": "https://www.fableadtechnolabs.com/logo.webp",
            "description": siteDescription,
            "foundingDate": "2017",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "Customer Service",
              "email": "info@fableadtechnolabs.com"
            },
            "sameAs": [
              "https://www.facebook.com/fableaddevelopers",
              "https://twitter.com/fablead_tech",
              "https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
            ],
            "priceRange": "$$",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ]
          })}
        </script>
      </Helmet>

      <Row>
        <Col lg={12}>
          <div className="top-bar d-flex justify-content-end">
            <Container>
              <a
                href="mailto:info@fableadtechnolabs.com"
                className="topbar-icons"
                rel="noopener"
                target="_blank"
              >
                <EnvelopeFill />
              </a>
              <a
                href="mailto:info@fableadtechnolabs.com"
                className="mt-2"
                rel="noopener"
                target="_blank"
              >
                <label className="email-text">
                  info@fableadtechnolabs.com
                </label>
              </a>
              <a
                href="https://twitter.com/fablead_tech"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Twitter />
              </a>
              <a
                href="https://www.facebook.com/fableaddevelopers"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Facebook />
              </a>
              <a
                href="https://in.linkedin.com/in/fablead-developers-technolab-0b8a07143"
                rel="noopener"
                target="_blank"
                className="topbar-icons2"
              >
                <Linkedin />
              </a>
            </Container>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default React.memo(TopBar);
