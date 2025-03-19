import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const CanonicalTag = ({ 
  baseUrl = 'https://bvswamiandco.site',
  path,
  title,
  description
}) => {
  const location = useLocation();

  const hostname = window?.location?.hostname || '';
  const isVercel = hostname.includes('.vercel.app');

  const canonicalPath = path || location.pathname;

  const canonicalUrl =
    canonicalPath === '/'
      ? baseUrl
      : `${baseUrl.replace(/\/$/, '')}${canonicalPath}`;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonicalUrl} />
      {isVercel && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default CanonicalTag;
