import { FacebookIcon, InstagramIcon, TikTokIcon, YouTubeIcon } from './Icons';
import { SITE, DOCTOR, SOCIAL } from '../../data/site';

// Brand-coloured icon on a light circle; hovering or focusing fills the circle with the brand colour.
const BRANDS = {
  facebook: {
    Icon: FacebookIcon,
    cls: 'text-[#1877F2] hover:bg-[#1877F2] focus-visible:bg-[#1877F2]',
  },
  instagram: {
    Icon: InstagramIcon,
    cls: 'text-[#E1306C] hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] focus-visible:bg-gradient-to-tr focus-visible:from-[#F58529] focus-visible:via-[#DD2A7B] focus-visible:to-[#8134AF]',
  },
  tiktok: {
    Icon: TikTokIcon,
    cls: 'text-[#111] hover:bg-[#111] focus-visible:bg-[#111]',
  },
  youtube: {
    Icon: YouTubeIcon,
    cls: 'text-[#FF0000] hover:bg-[#FF0000] focus-visible:bg-[#FF0000]',
  },
};

const SIZES = {
  sm: { btn: 'h-6 w-6', icon: 'h-3.5 w-3.5' },
  md: { btn: 'h-9 w-9', icon: 'h-4 w-4' },
  lg: { btn: 'h-11 w-11', icon: 'h-5 w-5' },
};

/** Icon links to the doctor's social accounts. */
export default function SocialLinks({ size = 'md', className = '' }) {
  const s = SIZES[size];
  return (
    <ul className={`flex items-center gap-2 ${className}`} aria-label={`${SITE.brand} on social media`}>
      {SOCIAL.map(({ id, label, href }) => {
        const { Icon, cls } = BRANDS[id];
        return (
          <li key={id}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${DOCTOR.name} on ${label}`}
              title={label}
              className={`grid place-items-center rounded-full bg-[#f1f3f6] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:text-white hover:shadow-md focus-visible:text-white focus-visible:outline-none ${s.btn} ${cls}`}
            >
              <Icon className={s.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
