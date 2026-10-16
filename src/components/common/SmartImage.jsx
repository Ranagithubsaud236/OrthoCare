import { useState } from 'react';
import { img } from '../../data/images';

/** Lazy image that resolves keys from data/images.js and falls back to a branded tile on error. */
export default function SmartImage({ src, alt, width = 1200, className = '', eager = false, ...rest }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 ${className}`}
      >
        <svg viewBox="0 0 48 48" className="h-12 w-12 opacity-40" aria-hidden="true">
          <path d="M15 9l9 13M23 28l-4 12" stroke="#1f6b70" strokeWidth="5" strokeLinecap="round" />
          <circle cx="30" cy="20" r="4.5" fill="#f07c22" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={img(src, width)}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchPriority={eager ? 'high' : undefined}
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
      {...rest}
    />
  );
}
