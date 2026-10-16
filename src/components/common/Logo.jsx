import { Link } from 'react-router-dom';

export function LogoMark({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="21" fill="#fff" stroke="#1f6b70" strokeWidth="2.5" />
      <path d="M15 9l9 13" stroke="#1f6b70" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M23 28l-4 12" stroke="#1f6b70" strokeWidth="5.5" strokeLinecap="round" />
      <path d="M13.5 26c5 3 12.5 3 19.5-1" stroke="#f07c22" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="20" r="4.5" fill="#f07c22" />
    </svg>
  );
}

export default function Logo({ className = '', light = false }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`} aria-label="OrthoCare – Dr. Khalid Rehman Malik, home">
      <LogoMark className="h-9 w-9 flex-none sm:h-11 sm:w-11" />
      <span className="leading-none">
        <span className={`block text-lg font-bold tracking-wide sm:text-xl ${light ? 'text-white' : 'text-primary-600'}`}>
          ORTHO<span className="text-accent-500">CARE</span>
        </span>
        <span className={`mt-1 block text-[9.5px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.14em] ${light ? 'text-primary-100' : 'text-ink/70'}`}>
          Dr. Khalid Rehman Malik
        </span>
      </span>
    </Link>
  );
}
