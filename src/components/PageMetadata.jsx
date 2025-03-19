import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

/**
 * PageMetadata component for managing page-specific SEO metadata
 * 
 * @param {Object} props Component props
 * @param {string} props.title Page title
 * @param {string} props.description Meta description
 * @param {string} props.canonicalPath Optional custom canonical path (defaults to current path)
 * @param {string} props.baseUrl Base URL for canonical links (defaults to https://bvswamiandco.site)
 * @param {Object} props.additionalMeta Additional meta tags as key-value pairs
 */
const PageMetadata = ({
  title,
  description,
  canonicalPath,
  baseUrl = 'https://bvswamiandco.site',
  additionalMeta = {}
}) => {
  const location = useLocation();
  
  // Use provided canonical path or fallback to current path
  const path = canonicalPath || location.pathname;
  
  // Handle home page special case
  const canonicalUrl = path === '/' 
    ? baseUrl 
    : `${baseUrl}${path}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph tags */}
      <meta property="og:url" content={canonicalUrl} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      
      {/* Additional meta tags */}
      {Object.entries(additionalMeta).map(([name, content]) => (
        <meta key={name} name={name} content={content} />
      ))}
    </Helmet>
  );
};

export default PageMetadata;
