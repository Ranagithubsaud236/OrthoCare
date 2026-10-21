import Button from './Button';
import { PhoneIcon, WhatsAppIcon } from './Icons';
import { SITE, whatsappLink } from '../../data/site';

/** "Book Appointment" CTA: every booking button opens WhatsApp chat with the assistant. */
export default function BookButton({ label = 'Book Appointment', text, showNumber = false, className = '', ...rest }) {
  return (
    <Button
      href={whatsappLink(text)}
      target="_blank"
      rel="noopener noreferrer"
      arrow={false}
      className={className}
      aria-label={`${label} on WhatsApp – ${SITE.phone}`}
      {...rest}
    >
      <WhatsAppIcon className="h-5 w-5 flex-none" />
      {showNumber ? (
        <span className="flex flex-col items-start leading-tight">
          <span>{label}</span>
          <span className="text-[11px] font-medium opacity-90">{SITE.phone}</span>
        </span>
      ) : (
        label
      )}
    </Button>
  );
}

/** Card that replaces the old enquiry form: assistant number with WhatsApp and call buttons. */
export function BookingCard() {
  return (
    <div className="rounded-xl border border-ink/15 bg-white p-6 text-center shadow-lg shadow-primary-900/5 sm:p-8">
      <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#25D366]/10 text-[#25D366]">
        <WhatsAppIcon className="h-8 w-8" />
      </span>
      <h3 className="mt-4 text-xl font-semibold text-accent-500">Book Appointment</h3>
      <p className="mt-2 text-sm leading-6">
        Message or call Dr. Malik&apos;s assistant to book your consultation at any of our clinics.
      </p>
      <a href={SITE.phoneHref} className="mt-4 block text-2xl font-bold tracking-wide text-ink hover:text-accent-600">
        {SITE.phone}
      </a>
      <p className="text-xs font-medium uppercase tracking-wider text-body/80">Assistant – Calls &amp; WhatsApp</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <BookButton label="Book on WhatsApp" />
        <Button href={SITE.phoneHref} variant="outline" arrow={false}>
          <PhoneIcon className="h-4 w-4" /> Call Assistant
        </Button>
      </div>
    </div>
  );
}
