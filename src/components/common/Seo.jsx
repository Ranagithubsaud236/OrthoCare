import { SITE } from '../../data/site';
import { img } from '../../data/images';

/**
 * Per-page SEO. React 19 hoists <title>, <meta> and <link> into <head> automatically.
 * Pass `jsonLd` (object or array) for structured data.
 */
export default function Seo({ title, description = SITE.description, path = '/', image = 'theatre', type = 'website', jsonLd, noindex = false }) {
  const url = `${SITE.url}${path === '/' ? '' : path}`;
  const fullTitle = title ? `${title} | ${SITE.brand} – Dr. Khalid Rehman Malik` : SITE.defaultTitle;
  const ogImage = img(image, 1200);

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:site_name" content={SITE.brand} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </>
  );
}
