import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { WhatsAppIcon } from '../common/Icons';
import { whatsappLink } from '../../data/site';

/** Scrolls to the top on navigation, or to the #section in the URL once the (lazy) page has rendered it. */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return undefined;
    }
    let tries = 0;
    const id = setInterval(() => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el || ++tries > 40) {
        clearInterval(id);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
    return () => clearInterval(id);
  }, [pathname, hash]);
  return null;
}

function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-label="Loading">
      <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary-100 border-t-accent-500" />
    </div>
  );
}

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <a href="#main" className="sr-only z-50 rounded bg-accent-500 px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
            <Outlet />
          </motion.div>
        </Suspense>
      </main>
      <Footer />

      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 18 }}
        className="fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center sm:bottom-5 sm:right-5 sm:h-14 sm:w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-black/20 transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30" />
        <WhatsAppIcon className="relative h-6 w-6 sm:h-7 sm:w-7" />
      </motion.a>
    </>
  );
}
