import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal, { Stagger, StaggerItem } from '../common/Reveal';
import SectionTitle from '../common/SectionTitle';
import SmartImage from '../common/SmartImage';
import { ChevronDown } from '../common/Icons';

const BG = {
  white: 'bg-white',
  cream: 'bg-cream',
  gray: 'bg-[#f8f9f9]',
  peach: 'bg-peach',
};

/** Plain vertical section wrapper. */
export function Section({ children, bg = 'white', className = '', id }) {
  return (
    <section id={id} className={`overflow-x-clip py-14 sm:py-20 ${BG[bg]} ${className}`}>
      {children}
    </section>
  );
}

/** Centred, orange-bordered card with a two-tone heading – the intro box on every treatment page. */
export function IntroCard({ title, children, bg = 'white' }) {
  return (
    <Section bg={bg}>
      <div className="container-x">
        <Reveal from="zoom" className="mx-auto max-w-3xl rounded-xl border-2 border-accent-300 bg-white px-6 py-8 text-center shadow-sm transition-all duration-300 sm:px-10 hover:border-accent-500 hover:bg-accent-500 hover:shadow-lg hover:shadow-accent-500/25 [&_*]:transition-colors [&_*]:duration-300 hover:[&_*]:!text-white hover:[&_.bg-accent-500]:!bg-white hover:[&_.bg-accent-50]:!bg-white/15 hover:[&_.border-accent-300]:!border-white/50">
          <h2 className="text-xl font-semibold leading-snug text-ink sm:text-2xl">{title}</h2>
          <div className="prose-body mt-4">{children}</div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Framed image on one side, heading + copy on the other (e.g. "What is a Total Hip Replacement?"). */
export function MediaSplit({ image, alt, title, children, reverse = false, bg = 'white', contain = false }) {
  return (
    <Section bg={bg}>
      <div className="container-x grid items-center gap-10 md:grid-cols-2 lg:gap-16">
        <Reveal from={reverse ? 'right' : 'left'} className={`relative mx-auto w-full max-w-md ${reverse ? 'md:order-2' : ''}`}>
          <div aria-hidden="true" className={`absolute -top-4 h-full w-full rounded-xl bg-accent-100 ${reverse ? '-right-4' : '-left-4'}`} />
          <div aria-hidden="true" className={`dot-grid absolute -bottom-6 h-24 w-24 ${reverse ? '-left-6' : '-right-6'}`} />
          <div className="group relative overflow-hidden rounded-xl border border-ink/10 bg-white p-2 shadow-lg">
            <SmartImage
              src={image}
              alt={alt}
              width={800}
              className={`h-64 w-full rounded-lg transition-transform duration-700 group-hover:scale-105 sm:h-80 ${contain ? 'bg-white object-contain p-2' : 'object-cover'}`}
            />
          </div>
        </Reveal>
        <Reveal from={reverse ? 'left' : 'right'} delay={0.1}>
          <SectionTitle align="left">{title}</SectionTitle>
          <div className="prose-body mt-6">{children}</div>
        </Reveal>
      </div>
    </Section>
  );
}

const TONES = {
  white: 'bg-white',
  cream: 'bg-cream',
  orange: 'bg-gradient-to-br from-accent-500 to-accent-600 text-white [&_h2]:text-white [&_p]:text-white/90 [&_li]:text-white/95 [&_strong]:!text-white',
  teal: 'bg-gradient-to-br from-primary-600 to-primary-800 text-white [&_h2]:text-white [&_p]:text-white/90 [&_li]:text-white/95 [&_strong]:!text-white',
};

/** Edge-to-edge split: half photo (zooms gently into place), half copy panel. */
export function FullBleedSplit({ image, alt, title, children, reverse = false, tone = 'cream' }) {
  return (
    <section className="grid lg:grid-cols-2">
      <div className={`relative min-h-[300px] overflow-hidden sm:min-h-[380px] ${reverse ? 'lg:order-2' : ''}`}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.2 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SmartImage src={image} alt={alt} width={1200} className="h-full w-full object-cover" />
        </motion.div>
      </div>
      <div className={`flex items-center px-4 py-14 sm:px-10 lg:px-16 ${TONES[tone]}`}>
        <Reveal from={reverse ? 'left' : 'right'} className="w-full max-w-xl">
          <SectionTitle align="left">{title}</SectionTitle>
          <div className="prose-body mt-6">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

const COLS = {
  1: 'max-w-xl',
  2: 'sm:grid-cols-2 max-w-4xl',
  3: 'sm:grid-cols-2 lg:grid-cols-3 max-w-6xl',
  4: 'sm:grid-cols-2 lg:grid-cols-4 max-w-7xl',
};

/** Grid of orange-bordered text cards. items: [{ title, body }] — body may be JSX. */
export function InfoCards({ title, intro, items, columns = 3, bg = 'gray' }) {
  return (
    <Section bg={bg}>
      <div className="container-x">
        {title && <SectionTitle>{title}</SectionTitle>}
        {intro && <Reveal><p className="mx-auto mt-5 max-w-3xl text-center text-[15px] leading-7">{intro}</p></Reveal>}
        <Stagger className={`mx-auto grid gap-6 ${title || intro ? 'mt-10' : ''} ${COLS[columns]}`}>
          {items.map((item) => (
            <StaggerItem
              key={item.title}
              className="group rounded-xl border border-accent-300 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-500 hover:shadow-lg"
            >
              <span aria-hidden="true" className="mx-auto mb-4 block h-1 w-8 rounded-full bg-accent-400 transition-all duration-300 group-hover:w-14" />
              <h3 className="font-semibold text-ink">{item.title}</h3>
              <div className="mt-3 text-sm leading-6 text-body [&_li]:mt-1 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:text-left [&_ul]:marker:text-accent-500">{item.body}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/** Grid of cards with a photo on top. items: [{ image, title, body }] */
export function ImageCards({ title, intro, items, columns = 2, bg = 'gray' }) {
  return (
    <Section bg={bg}>
      <div className="container-x">
        {title && <SectionTitle>{title}</SectionTitle>}
        {intro && <Reveal><p className="mx-auto mt-5 max-w-3xl text-center text-[15px] leading-7">{intro}</p></Reveal>}
        <Stagger className={`mx-auto grid gap-6 ${title || intro ? 'mt-10' : ''} ${COLS[columns]}`}>
          {items.map((item) => (
            <StaggerItem
              key={item.title}
              className="group overflow-hidden rounded-xl border border-ink/10 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded-lg">
                <SmartImage src={item.image} alt={item.title} width={700} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="px-2 pb-3 pt-4">
                <h3 className="font-semibold text-ink">{item.title}</h3>
                <div className="mt-2 text-sm leading-6 text-body">{item.body}</div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}

/** Bulleted list with an orange label per item. items: [{ label, text }] or strings. */
export function FeatureList({ items, className = '' }) {
  return (
    <ul className={`mt-4 space-y-3 ${className}`}>
      {items.map((item) => {
        const { label, text } = typeof item === 'string' ? { text: item } : item;
        return (
          <li key={label ?? text} className="flex gap-3 text-[15px] leading-6">
            <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-accent-500" />
            <span>
              {label && <strong className="block font-semibold !text-accent-600">{label}</strong>}
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

/** Centred text section (heading + rich copy) for long-form content. */
export function TextSection({ title, children, bg = 'white' }) {
  return (
    <Section bg={bg}>
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl">
          {title && <SectionTitle align="left">{title}</SectionTitle>}
          <div className="prose-body mt-6">{children}</div>
        </Reveal>
      </div>
    </Section>
  );
}

/** Accessible accordion of FAQs. items: [{ q, a }] (a is plain text so it can feed FAQPage schema). */
export function FaqList({ items, title = 'Frequently Asked Questions' }) {
  const [open, setOpen] = useState(0);
  return (
    <Section bg="cream">
      <div className="container-x">
        <SectionTitle>{title}</SectionTitle>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.05} className="overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm">
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-ink transition-colors hover:text-accent-600"
                  >
                    {item.q}
                    <ChevronDown className={`h-5 w-5 flex-none text-accent-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-[15px] leading-7">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
