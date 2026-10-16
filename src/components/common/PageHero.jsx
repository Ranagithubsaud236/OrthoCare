import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SmartImage from './SmartImage';
import { ChevronRight } from './Icons';

/**
 * Inner-page banner: a teal title box centred over either a peach band or a full-width photo.
 * `breadcrumb` is [{ label, to? }]; the last item is the current page.
 */
export default function PageHero({ title, image, breadcrumb = [] }) {
  return (
    <section className={`relative overflow-hidden ${image ? 'bg-primary-900' : 'bg-peach'}`}>
      {image ? (
        <>
          <SmartImage
            src={image}
            alt=""
            eager
            width={1800}
            className="absolute inset-0 h-full w-full animate-kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 via-primary-900/30 to-primary-950/60" />
        </>
      ) : (
        <>
          <div className="dot-grid absolute -left-10 top-6 h-40 w-40 opacity-40" aria-hidden="true" />
          <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-accent-200/40 blur-2xl" aria-hidden="true" />
        </>
      )}

      <div className="container-x relative flex flex-col items-center py-14 sm:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`w-full max-w-2xl rounded-lg px-6 py-5 text-center text-2xl font-bold text-white shadow-xl sm:px-12 sm:py-6 sm:text-4xl ${
            image ? 'bg-primary-600/85 backdrop-blur-sm' : 'bg-primary-600'
          }`}
        >
          {title}
        </motion.h1>

        {breadcrumb.length > 0 && (
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5"
          >
            <ol className={`flex flex-wrap items-center justify-center gap-1 text-xs font-medium ${image ? 'text-white/90' : 'text-ink/70'}`}>
              <li><Link to="/" className="hover:text-accent-500">Home</Link></li>
              {breadcrumb.map((b, i) => (
                <li key={b.label} className="flex items-center gap-1">
                  <ChevronRight className="h-3 w-3" />
                  {b.to && i < breadcrumb.length - 1 ? (
                    <Link to={b.to} className="hover:text-accent-500">{b.label}</Link>
                  ) : (
                    <span aria-current="page" className="text-accent-500">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>
        )}
      </div>
    </section>
  );
}
