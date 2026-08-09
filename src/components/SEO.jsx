import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, path = "" }) => {
  // Site base configuration aligned with index.html
  const siteName = "Ghs Julian | Full Stack & MERN Stack Web Developer";
  const baseUrl = "https://ghsresume.netlify.app";

  // Build clean title without double-nesting titles
  const metaTitle = title ? `${title} | Ghs Julian` : siteName;

  // Align defaults with the optimized index.html
  const defaultDescription =
    "Ghs Julian is a Full Stack & MERN Stack Web Developer based in Kamalganj, Moulvibazar, Sylhet, Bangladesh, with 150+ projects delivered in React, Node.js, Express, MongoDB and PHP.";

  const defaultKeywords =
    "Ghs Julian, who is Ghs Julian, Full Stack Web Developer Bangladesh, MERN Stack Developer Sylhet, Web Developer Moulvibazar, Kamalganj Web Developer, React Developer Bangladesh, Node.js Developer, Hire MERN Stack Developer, Freelance Web Developer Bangladesh";

  const defaultImage = `${baseUrl}/og-image.jpg`;

  // Calculate strict canonical URL for each route
  const formattedPath = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  const canonicalUrl = `${baseUrl}${formattedPath}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Canonical Link - Crucial for Google Crawling & Indexing */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={metaTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
