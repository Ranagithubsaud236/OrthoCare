import { Link } from 'react-router-dom';
import Logo from '../common/Logo';
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from '../common/Icons';
import { SITE, DOCTOR, LOCATIONS, whatsappLink } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';

const SITE_MAP = [
  { label: 'Home', to: '/' },
  { label: 'About Dr. Malik', to: '/about' },
  { label: 'Treatments', to: '/treatments' },
  { label: 'Practice Locations', to: '/practice-locations' },
  { label: 'Insurance Information', to: '/insurance' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact Us', to: '/contact' },
];

function FooterHeading({ children }) {
  return (
    <h2 className="text-sm font-semibold text-primary-700">
      {children}
      <span aria-hidden="true" className="mt-2 block h-0.5 w-6 rounded-full bg-accent-500" />
    </h2>
  );
}

const linkCls = 'text-[13px] text-body transition-all duration-200 hover:pl-1 hover:text-accent-600';

export default function Footer() {
  return (
    <footer className="bg-cream">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-[13px] leading-6">
            {DOCTOR.name} – {DOCTOR.role}. {DOCTOR.postNominals}. Specialist in hip &amp; knee replacement and
            arthroscopic sports surgery with over {DOCTOR.experienceYears} years of experience in Pakistan and abroad.
          </p>
        </div>

        <nav aria-label="Site map">
          <FooterHeading>Site Map</FooterHeading>
          <ul className="mt-4 space-y-2">
            {SITE_MAP.map((l) => (
              <li key={l.to}><Link to={l.to} className={linkCls}>{l.label}</Link></li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Treatments">
          <FooterHeading>Treatments</FooterHeading>
          <ul className="mt-4 space-y-2">
            {TREATMENTS.map((t) => (
              <li key={t.slug}><Link to={`/treatments/${t.slug}`} className={linkCls}>{t.title}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <FooterHeading>Contact Info</FooterHeading>
          <ul className="mt-4 space-y-3 text-[13px]">
            <li>
              <a href={SITE.phoneHref} className="flex items-center gap-3 hover:text-accent-600">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-500 text-white"><PhoneIcon className="h-3.5 w-3.5" /></span>
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-accent-600">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-500 text-white"><WhatsAppIcon className="h-3.5 w-3.5" /></span>
                WhatsApp
              </a>
            </li>
            {LOCATIONS.map((loc) => (
              <li key={loc.id} className="flex items-start gap-3">
                <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-primary-600 text-white"><MapPinIcon className="h-3.5 w-3.5" /></span>
                <span>{loc.name}, {loc.city}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-400 via-accent-500 to-primary-600 py-3">
        <p className="container-x text-center text-xs font-medium text-white">
          © {new Date().getFullYear()} {SITE.brand} – {DOCTOR.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
