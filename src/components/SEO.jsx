import { useEffect } from 'react';

export function SEO({ title, description, path }) {
  useEffect(() => {
    // 1. Title Tag
    const siteName = 'AMAKLABS';
    const fallbackTitle = 'AMAKLABS — AI Automation Agency | Engineering Intelligence';
    const formattedTitle = title ? `${title} | ${siteName}` : fallbackTitle;
    document.title = formattedTitle;

    // Helper to select or create meta elements
    const setMetaTag = (attrName, attrVal, contentVal) => {
      if (!contentVal) return;
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    const fallbackDescription = 'AMAKLABS — We Engineer Intelligence. Custom AI workflows, robust web platforms, and mobile apps that scale operations without friction.';
    const formattedDescription = description || fallbackDescription;

    // 2. Meta Description
    setMetaTag('name', 'description', formattedDescription);

    // 3. Open Graph Tags
    setMetaTag('property', 'og:title', title ? `${title} | ${siteName}` : 'AMAKLABS');
    setMetaTag('property', 'og:description', formattedDescription);
    setMetaTag('property', 'og:url', `https://amaklabs.com${path || ''}`);
    setMetaTag('property', 'og:type', 'website');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title ? `${title} | ${siteName}` : 'AMAKLABS');
    setMetaTag('name', 'twitter:description', formattedDescription);

  }, [title, description, path]);

  return null;
}

export default SEO;
