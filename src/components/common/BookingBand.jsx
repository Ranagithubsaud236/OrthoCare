import Reveal from './Reveal';
import Button from './Button';
import BookButton from './BookButton';
import { PhoneIcon } from './Icons';
import { SITE } from '../../data/site';

/** Teal call-to-action band used at the end of content pages. */
export default function BookingBand({ heading = 'Ready to take the first step?', text }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 py-14 text-white">
      <div aria-hidden="true" className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent-500/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-primary-300/20 blur-3xl" />
      <div className="container-x relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
        <Reveal from="left" className="max-w-2xl">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">{heading}</h2>
          <p className="mt-3 text-[15px] leading-7 text-primary-50/90">
            {text ??
              'Book a consultation with Dr. Khalid Rehman Malik at Horizon Hospital Lahore, Bajwa Hospital Shahdara or Qadir Ali Hospital Layyah for an honest, personalised assessment.'}
          </p>
        </Reveal>
        <Reveal from="right" className="flex flex-wrap justify-center gap-3">
          <Button href={SITE.phoneHref} arrow={false} size="lg">
            <PhoneIcon className="h-4 w-4" /> {SITE.phone}
          </Button>
          <BookButton variant="white" size="lg" />
        </Reveal>
      </div>
    </section>
  );
}
