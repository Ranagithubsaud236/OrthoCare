import SectionTitle, { Hl } from '../common/SectionTitle';
import Reveal, { Stagger, StaggerItem } from '../common/Reveal';
import { BookingCard } from '../common/BookButton';
import LocationMapCard from '../common/LocationMapCard';
import { PhoneIcon, WhatsAppIcon, ClockIcon } from '../common/Icons';
import { SITE, LOCATIONS, whatsappLink } from '../../data/site';

export function ContactChannels() {
  const channels = [
    { icon: PhoneIcon, label: 'Call Assistant', value: SITE.phone, href: SITE.phoneHref },
    { icon: WhatsAppIcon, label: 'Book on WhatsApp', value: SITE.phone, href: whatsappLink(), external: true },
  ];
  return (
    <Stagger className="mx-auto mt-10 flex max-w-xl flex-wrap justify-center gap-6">
      {channels.map(({ icon: Icon, label, value, href, external }) => (
        <StaggerItem key={label}>
          <a
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="group flex w-56 flex-col items-center rounded-xl border border-ink/10 bg-white px-6 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-primary-50 text-primary-600 transition-colors duration-300 group-hover:bg-accent-500 group-hover:text-white">
              <Icon className="h-6 w-6" />
            </span>
            <span className="mt-3 text-xs font-semibold uppercase tracking-wider text-ink">{label}</span>
            <span className="mt-1 text-sm font-medium text-accent-600">{value}</span>
          </a>
        </StaggerItem>
      ))}
    </Stagger>
  );
}

export function LocationsList() {
  return (
    <div className="rounded-xl bg-cream p-6 sm:p-8">
      <h3 className="text-center text-xl font-semibold text-accent-500">Practice Locations</h3>
      <ul className="mt-6 divide-y divide-accent-300">
        {LOCATIONS.map((loc) => (
          <li key={loc.id} className="py-4 text-center first:pt-0 last:pb-0">
            <p className="font-semibold text-ink">{loc.name}</p>
            <p className="text-sm">{loc.city}</p>
            {loc.schedule.map((s) => (
              <p key={s.days} className="mt-1 flex items-center justify-center gap-1.5 text-sm">
                <ClockIcon className="h-3.5 w-3.5 text-accent-500" /> {s.days}, {s.time}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle>Contact <Hl>Us</Hl></SectionTitle>
        <ContactChannels />

        <div className="mx-auto mt-14 grid max-w-6xl items-start gap-8 lg:grid-cols-2">
          <Reveal from="left"><BookingCard /></Reveal>
          <Reveal from="right"><LocationsList /></Reveal>
        </div>
      </div>

      <div className="container-x mt-20">
        <SectionTitle>Find Our <Hl>Clinics</Hl></SectionTitle>
        <Stagger className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {LOCATIONS.map((loc) => (
            <StaggerItem key={loc.id}><LocationMapCard location={loc} /></StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
