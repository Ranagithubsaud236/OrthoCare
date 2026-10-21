import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { ChevronLeft, ChevronRight } from '../common/Icons';
import { img } from '../../data/images';

const SLIDES = [
  {
    image: 'surgeonsOperating',
    eyebrow: 'Consultant Hip & Knee Surgeon',
    title: 'Reclaim Your Life: Expert Care for Hip & Knee Pain',
    text: 'Advanced joint replacement and keyhole surgery by Dr. Khalid Rehman Malik.',
    cta: { label: 'Learn More', to: '/about' },
  },
  {
    image: 'theatre',
    eyebrow: 'Robotic-Assisted Surgery',
    title: 'Precision Joint Replacement, Planned Around You',
    text: 'CT-based 3D planning and robotic accuracy for hips and knees that feel natural.',
    cta: { label: 'Explore Treatments', to: '/treatments' },
  },
  {
    image: 'kneePhysio',
    eyebrow: 'Arthroscopy & Sports Surgery',
    title: 'Keyhole Surgery to Get You Back in the Game',
    text: 'Meniscus repair, cartilage treatment and ligament reconstruction for active lives.',
    cta: { label: 'Sports Surgery', to: '/treatments/knee-arthroscopy' },
  },
  {
    image: 'walkField',
    eyebrow: 'Lahore · Shahdara · Layyah',
    title: 'Move Freely Again, Close to Home',
    text: 'Consultations at Horizon Hospital, Bajwa Hospital and Qadir Ali Hospital.',
    cta: { label: 'Clinic Locations', to: '/practice-locations' },
  },
  {
    image: 'consultElderly',
    eyebrow: 'Non-Surgical Options',
    title: 'Lasting Relief – Not Always Through Surgery',
    text: 'Expert advice, physiotherapy and joint injections tailored to your condition.',
    cta: { label: 'Non-Surgical Care', to: '/treatments/non-surgical-treatment' },
  },
];

const INTERVAL = 6500;

export default function HeroSlider() {
  const [[index], setState] = useState([0, 1]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next, dir) => {
    setState(([current]) => {
      const target = typeof next === 'function' ? next(current) : next;
      return [(target + SLIDES.length) % SLIDES.length, dir ?? (target > current ? 1 : -1)];
    });
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => go((i) => i + 1, 1), INTERVAL);
    return () => clearInterval(id);
  }, [paused, go, index]);

  const slide = SLIDES[index];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative h-[78vh] min-h-[480px] max-h-[760px] overflow-hidden bg-primary-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${SLIDES.length}`}
        >
          <motion.img
            src={img(slide.image, 1920)}
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ scale: 1.18 }}
            animate={{ scale: 1 }}
            transition={{ duration: INTERVAL / 1000 + 1.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/85 via-primary-900/55 to-primary-900/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />

          {/* Decorative brand shapes */}
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-1/4 hidden h-80 w-80 animate-float rounded-full border-[18px] border-accent-500/30 lg:block" />
          <div aria-hidden="true" className="dot-grid pointer-events-none absolute bottom-16 left-6 h-28 w-28 opacity-50" />

          {/* Copy lives inside its slide so text, image and dots can never fall out of sync. */}
          <div className="container-x relative flex h-full items-center">
            <motion.div
              className="max-w-2xl"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } } }}
            >
              {[
                <p key="e" className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-300 backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent-400" /> {slide.eyebrow}
                </p>,
                <h1 key="t" className="text-3xl font-bold leading-tight text-white sm:text-5xl">{slide.title}</h1>,
                <p key="p" className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{slide.text}</p>,
                <div key="c" className="mt-8">
                  <Button to={slide.cta.to} size="lg">{slide.cta.label}</Button>
                </div>,
              ].map((node) => (
                <motion.div
                  key={node.key}
                  variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } }}
                >
                  {node}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={() => go((i) => i - 1, -1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-accent-500 md:block"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go((i) => i + 1, 1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-3 text-white backdrop-blur transition hover:bg-accent-500 md:block"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => go(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className="relative h-2.5 overflow-hidden rounded-full bg-white/40 transition-all duration-500"
            style={{ width: i === index ? 36 : 10 }}
          >
            {i === index && !paused && (
              <motion.span
                key={index}
                className="absolute inset-y-0 left-0 bg-accent-500"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: INTERVAL / 1000, ease: 'linear' }}
              />
            )}
            {i === index && paused && <span className="absolute inset-0 bg-accent-500" />}
          </button>
        ))}
      </div>
    </section>
  );
}
