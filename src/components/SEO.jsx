import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title
    ? `${title} | Ghs Julian - Full Stack Developer`
    : "Ghs Julian | Full Stack Web Developer";
  const defaultDescription =
    "Portfolio of Ghs Julian, a Full Stack Web Developer specializing in the MERN stack, PHP, Python, and modern web application development.";
  const defaultKeywords =
    "Ghs Julian, Full Stack Developer, MERN Stack, React Developer, Web Developer Bangladesh, Node.js";
  const siteUrl = url || "https://ghsresume.netlify.app";

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Ghs Julian" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;
