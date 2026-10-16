# OrthoCare – Dr. Khalid Rehman Malik

Website for Dr. Khalid Rehman Malik, Consultant Orthopaedic Surgeon (hip & knee replacement, robotic joint surgery, arthroscopic sports surgery) – Lahore & Layyah.

Built with React 19, Vite, Tailwind CSS v4 and Framer Motion.

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/ (also regenerates public/sitemap.xml)
npm run preview  # serve the production build
```

## Editing content

- `src/data/site.js` – doctor details, phone, clinic locations & timings, insurers, navigation
- `src/data/treatments.js` – treatment list (cards, menus, footer, sitemap)
- `src/data/blog.js` – blog posts
- `src/data/images.js` – all images in one place
- `src/pages/treatments/` – one component per treatment page

## Deployment

Static single-page app. Rewrites for client-side routing are included for Vercel (`vercel.json`) and Netlify (`public/_redirects`).
Build command `npm run build`, output directory `dist`.
