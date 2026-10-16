import Reveal from './Reveal';

/** Orange highlight span for two-tone headings: <SectionTitle>About <Hl>Dr. Malik</Hl></SectionTitle> */
export const Hl = ({ children }) => <span className="text-accent-500">{children}</span>;

const SIZES = {
  sm: 'text-lg sm:text-xl',
  md: 'text-2xl sm:text-3xl',
  lg: 'text-3xl sm:text-4xl',
};

export default function SectionTitle({ children, as: Tag = 'h2', align = 'center', size = 'md', eyebrow, className = '' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left';
  return (
    <Reveal className={`${alignCls} ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">{eyebrow}</p>
      )}
      <Tag className={`font-semibold leading-snug text-ink ${SIZES[size]}`}>{children}</Tag>
      <span
        aria-hidden="true"
        className={`mt-3 block h-1 w-14 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 ${align === 'center' ? 'mx-auto' : ''}`}
      />
    </Reveal>
  );
}

/** Thin dark rule used between sections on the reference design. */
export function Divider() {
  return <div className="container-x"><hr className="border-ink/15" /></div>;
}
