// Builds public/sitemap.xml from the site data so new treatments/posts are always included.
import { writeFileSync } from 'node:fs';
import { SITE } from '../src/data/site.js';
import { TREATMENTS } from '../src/data/treatments.js';
import { DIAGNOSES } from '../src/data/diagnoses.js';
import { POSTS } from '../src/data/blog.js';

const today = new Date().toISOString().slice(0, 10);
const pages = [
  { path: '/', priority: '1.0' },
  { path: '/about', priority: '0.9' },
  { path: '/diagnosis', priority: '0.9' },
  ...DIAGNOSES.map((d) => ({ path: `/diagnosis/${d.id}`, priority: '0.8' })),
  ...TREATMENTS.map((t) => ({ path: `/treatments/${t.slug}`, priority: '0.8' })),
  { path: '/practice-locations', priority: '0.8' },
  { path: '/insurance', priority: '0.6' },
  { path: '/gallery', priority: '0.6' },
  { path: '/contact', priority: '0.8' },
  { path: '/blog', priority: '0.6' },
  ...POSTS.map((p) => ({ path: `/blog/${p.slug}`, priority: '0.5', lastmod: p.date })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url><loc>${SITE.url}${p.path === '/' ? '/' : p.path}</loc><lastmod>${p.lastmod ?? today}</lastmod><priority>${p.priority}</priority></url>`)
  .join('\n')}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml: ${pages.length} URLs`);
