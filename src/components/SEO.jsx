import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, url, image }) => {
  const defaultTitle = 'Mahakal Property Dealer — Buy, Sell & Invest with Trust';
  const defaultDescription = 'Mahakal Property Dealer offers premium real estate services. We help you find your dream home or commercial property with 100% approval guarantee and transparency.';
  const defaultUrl = 'https://mahakalpropertydealer.com/';
  const defaultImage = 'https://mahakalpropertydealer.com/og-image.jpg'; // Ensure this image exists in public folder
  const defaultKeywords = 'Mahakal Property Dealer, real estate, buy property, sell property, investment, home, apartment, commercial property, real estate agency, property dealer';

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={defaultKeywords} />

      {/* Open Graph tags for social media */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:site_name" content={name || 'Mahakal Property Dealer'} />
      <meta property="og:image" content={image || defaultImage} />

      {/* Twitter cards */}
      <meta name="twitter:creator" content="@mahakalproperty" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
    </Helmet>
  );
};

export default SEO;
