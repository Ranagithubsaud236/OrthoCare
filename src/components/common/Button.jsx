import { Link } from 'react-router-dom';
import { ArrowTip } from './Icons';

const VARIANTS = {
  solid: 'bg-accent-500 text-white shadow-md shadow-accent-500/25 hover:bg-accent-600 hover:shadow-lg',
  outline: 'border border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white',
  teal: 'bg-primary-600 text-white shadow-md shadow-primary-600/25 hover:bg-primary-700',
  white: 'bg-white text-primary-700 hover:bg-accent-50',
};

const SIZES = {
  sm: 'px-4 py-1.5 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

/** Pill button with the reference design's small arrow tip. Renders <Link>, <a> or <button>. */
export default function Button({ to, href, variant = 'solid', size = 'md', arrow = true, className = '', children, ...rest }) {
  const cls = `group inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && <ArrowTip className="h-2.5 w-2.5 transition-transform duration-300 group-hover:translate-x-1" />}
    </>
  );

  if (to) return <Link to={to} className={cls} {...rest}>{content}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{content}</a>;
  return <button className={cls} {...rest}>{content}</button>;
}
