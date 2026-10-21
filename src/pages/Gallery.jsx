import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import BookingBand from '../components/common/BookingBand';
import VideoTile from '../components/common/VideoTile';
import { ChevronLeft, ChevronRight, CloseIcon } from '../components/common/Icons';
import { GALLERY_PHOTOS, GALLERY_VIDEOS, GALLERY_CATEGORIES } from '../data/gallery';

const TABS = [{ id: 'all', label: 'All' }, { id: 'videos', label: `Videos (${GALLERY_VIDEOS.length})` }, ...GALLERY_CATEGORIES];

function Lightbox({ photos, index, onClose, onMove }) {
  const photo = photos[index];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose, onMove]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary-950/95 p-3 sm:p-10"
      onClick={onClose}
    >
      <img
        key={photo.src}
        src={photo.src}
        alt={photo.alt}
        className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button type="button" onClick={onClose} aria-label="Close" className="absolute right-3 top-3 rounded-full bg-white/15 p-2.5 text-white hover:bg-accent-500">
        <CloseIcon className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onMove(-1); }}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-accent-500 sm:left-4"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onMove(1); }}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/15 p-3 text-white hover:bg-accent-500 sm:right-4"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <p className="absolute inset-x-0 bottom-3 text-center text-xs text-white/70">{index + 1} / {photos.length}</p>
    </motion.div>
  );
}

export default function Gallery() {
  const [tab, setTab] = useState('all');
  const [open, setOpen] = useState(null);

  const photos = tab === 'all' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.category === tab);
  const showVideos = tab === 'all' || tab === 'videos';
  const showPhotos = tab !== 'videos';
  const move = useCallback((d) => setOpen((i) => (i + d + photos.length) % photos.length), [photos.length]);
  const close = useCallback(() => setOpen(null), []);

  return (
    <>
      <Seo
        title="Gallery – Surgery, X-rays & Videos"
        description="Real photos and videos from Dr. Khalid Rehman Malik's operating theatre: hip and knee replacement, arthroscopy and post-operative X-rays."
        path="/gallery"
        image="theatreTeam"
      />
      <PageHero title="Gallery" image="theatreTeam" breadcrumb={[{ label: 'Gallery' }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <SectionTitle>Inside the <Hl>Operating Theatre</Hl></SectionTitle>
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7">
              Real moments from Dr. Malik&apos;s surgical work – arthroscopy, hip and knee replacement, and the X-rays that show the
              results.
            </p>
          </Reveal>

          <div role="tablist" aria-label="Gallery filter" className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`flex-none rounded-full px-5 py-2 text-sm font-semibold transition ${
                  tab === t.id ? 'bg-accent-500 text-white shadow-md shadow-accent-500/25' : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {showVideos && (
            <>
              {tab === 'all' && <h3 className="mt-10 text-lg font-semibold">Videos</h3>}
              <div className="mt-5 gap-5 sm:columns-2 lg:columns-3">
                {GALLERY_VIDEOS.map((v) => (
                  <div key={v.src} className="mb-5 break-inside-avoid"><VideoTile video={v} /></div>
                ))}
              </div>
            </>
          )}

          {showPhotos && (
            <>
              {tab === 'all' && <h3 className="mt-12 text-lg font-semibold">Photos</h3>}
              <ul className="mt-5 columns-2 gap-3 sm:columns-3 sm:gap-4 lg:columns-4">
                {photos.map((p, i) => (
                  <li key={p.src} className="mb-3 break-inside-avoid sm:mb-4">
                    <button
                      type="button"
                      onClick={() => setOpen(i)}
                      className="group block w-full overflow-hidden rounded-lg bg-primary-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500"
                      aria-label={`Open photo: ${p.alt}`}
                    >
                      <img
                        src={p.thumb}
                        alt={p.alt}
                        width={p.w}
                        height={p.h}
                        loading="lazy"
                        decoding="async"
                        className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <AnimatePresence>
        {open !== null && photos[open] && <Lightbox photos={photos} index={open} onClose={close} onMove={move} />}
      </AnimatePresence>

      <BookingBand />
    </>
  );
}
