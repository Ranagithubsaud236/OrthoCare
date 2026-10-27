import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';
import { ChevronLeft, ChevronRight } from '../common/Icons';
import { DOCTOR } from '../../data/site';

const SLIDES = [
  {
    // Doctor introduction – split layout with his portrait.
    doctor: true,
    image: '/images/hero/dr-khalid-rehman-malik-portrait.jpg',
    eyebrow: DOCTOR.role,
    title: DOCTOR.name,
    cta: { label: 'About Dr. Malik', to: '/about' },
  },
  {
    image: '/images/hero/arthroscopy-surgeon.jpg',
    width: 1920,
    position: 'center 10%',
    eyebrow: 'Consultant Hip & Knee Surgeon',
    title: 'Reclaim Your Life: Expert Care for Hip & Knee Pain',
    text: 'Advanced joint replacement and keyhole surgery by Dr. Khalid Rehman Malik.',
    cta: { label: 'Explore Treatments', to: '/diagnosis' },
  },
  {
    image: '/images/hero/arthroscopy-monitor.jpg',
    width: 2400,
    position: 'center',
    eyebrow: 'Arthroscopy & Sports Surgery',
    title: 'Keyhole Surgery to Get You Back in the Game',
    text: 'Meniscus repair, cartilage treatment and ligament (ACL) reconstruction for active lives.',
    cta: { label: 'Sports Surgery', to: '/treatments/knee-arthroscopy' },
  },
  {
    image: '/images/hero/theatre-team.jpg',
    width: 1920,
    position: 'center 15%',
    eyebrow: 'Lahore · Shahdara · Layyah',
    title: 'Move Freely Again, Close to Home',
    text: 'Consultations at Horizon Hospital, Bajwa Hospital and Qadir Ali Hospital.',
    cta: { label: 'Clinic Locations', to: '/practice-locations' },
  },
];

const rise = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } } };

// Soft-edged portrait so the photo's own backdrop melts into the blurred hospital background.
const PORTRAIT_MASK = {
  maskImage: 'linear-gradient(to right, transparent, #000 16%, #000 84%, transparent), linear-gradient(to bottom, transparent, #000 12%)',
  maskComposite: 'intersect',
  WebkitMaskImage: 'linear-gradient(to right, transparent, #000 16%, #000 84%, transparent), linear-gradient(to bottom, transparent, #000 12%)',
  WebkitMaskComposite: 'source-in',
};

/** First slide: large portrait of the doctor over a blurred hospital backdrop, name and titles beside him. */
function DoctorSlide({ slide }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#eef2f5]">
      <img src="/images/hero/doctor-slide-bg.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
      <motion.img
        src={slide.image}
        alt={`${DOCTOR.name}, ${DOCTOR.title}`}
        fetchPriority="high"
        style={PORTRAIT_MASK}
        className="absolute bottom-0 left-1/2 h-[52%] w-auto max-w-none -translate-x-1/2 sm:h-[60%] lg:left-auto lg:right-[4%] lg:h-[97%] lg:translate-x-0 xl:right-[8%]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Light wash behind the text keeps it readable over the photo on every screen size. */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/0 via-45% to-transparent lg:bg-gradient-to-r lg:from-white/80 lg:via-white/30 lg:via-50% lg:to-transparent" />

      <div className="container-x relative flex h-full items-start pt-8 sm:pt-12 lg:items-center lg:pt-0">
        <motion.div className="mx-auto max-w-xl text-center lg:mx-0 lg:pl-12 lg:text-left" initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={rise} className="text-3xl font-medium leading-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            Prof. {slide.title}
          </motion.h1>
          <motion.div variants={rise} className="mt-3 space-y-0.5 text-[15px] font-semibold leading-snug text-accent-600 sm:mt-6 sm:text-xl">
            <p>{DOCTOR.role}</p>
            <p>{DOCTOR.formerRole}</p>
            <p className="text-primary-700">{DOCTOR.postNominals}</p>
          </motion.div>
          <motion.p variants={rise} className="mt-4 hidden max-w-lg text-base leading-7 text-accent-700/90 sm:block">
            Specialist in hip &amp; knee replacement and arthroscopic sports surgery, with over {DOCTOR.experienceYears} years of
            experience in Pakistan and abroad. {DOCTOR.credentialLine}.
          </motion.p>
          <motion.div variants={rise} className="mt-5 sm:mt-8">
            <Button to={slide.cta.to} size="lg">{slide.cta.label}</Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

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
      className="relative h-[78vh] min-h-[560px] max-h-[760px] overflow-hidden bg-primary-950"
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
          {slide.doctor ? (
            <DoctorSlide slide={slide} />
          ) : (
            <>
            <motion.img
              src={slide.image}
              srcSet={`${slide.image.replace('.jpg', '-mobile.jpg')} 1080w, ${slide.image} ${slide.width}w`}
              sizes="100vw"
              alt=""
              fetchPriority={index === 0 ? 'high' : 'auto'}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: slide.position }}
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
            </>
          )}
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={() => go((i) => i - 1, -1)}
        aria-label="Previous slide"
        className={`absolute left-3 top-1/2 hidden -translate-y-1/2 rounded-full p-3 backdrop-blur transition hover:bg-accent-500 hover:text-white md:block ${slide.doctor ? 'bg-primary-600/10 text-primary-700' : 'bg-white/15 text-white'}`}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => go((i) => i + 1, 1)}
        aria-label="Next slide"
        className={`absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-full p-3 backdrop-blur transition hover:bg-accent-500 hover:text-white md:block ${slide.doctor ? 'bg-primary-600/10 text-primary-700' : 'bg-white/15 text-white'}`}
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
            className={`relative h-2.5 overflow-hidden rounded-full transition-all duration-500 ${slide.doctor ? 'bg-primary-600/25' : 'bg-white/40'}`}
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
