import { useEffect, useState } from 'react';
import SectionTitle, { Hl } from '../common/SectionTitle';
import Reveal, { Stagger, StaggerItem } from '../common/Reveal';
import Button from '../common/Button';
import { GOOGLE_PROFILE, googleProfileUrl } from '../../data/site';
import { GOOGLE_SUMMARY, GOOGLE_REVIEWS } from '../../data/reviews';

function GoogleG({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.1C12.5 13.6 17.8 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.8c4.3-4 6.9-9.9 6.9-17.2z" />
      <path fill="#FBBC05" d="M10.6 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.9-6.1z" />
      <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.8c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.5-4.1-13.4-9.8l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
    </svg>
  );
}

function Stars({ value, className = 'h-4 w-4' }) {
  return (
    <span className="flex" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className={`${className} ${n <= Math.round(value) ? 'text-[#FBBC05]' : 'text-ink/15'}`} fill="currentColor" aria-hidden="true">
          <path d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 6-5.4-3-5.4 3 1.2-6L1.4 7.7l6-.7z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const long = review.text.length > 220;
  return (
    <article className="flex h-full flex-col rounded-xl border border-ink/10 bg-white p-6 shadow-sm">
      <header className="flex items-center gap-3">
        {review.photo ? (
          <img src={review.photo} alt="" referrerPolicy="no-referrer" loading="lazy" className="h-10 w-10 rounded-full object-cover" />
        ) : (
          <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-100 font-semibold text-primary-700">{review.author?.[0] ?? '?'}</span>
        )}
        <div className="min-w-0 flex-1">
          {review.authorUrl ? (
            <a href={review.authorUrl} target="_blank" rel="noopener noreferrer" className="block truncate text-sm font-semibold text-ink hover:text-accent-600">
              {review.author}
            </a>
          ) : (
            <p className="truncate text-sm font-semibold text-ink">{review.author}</p>
          )}
          <p className="text-xs text-body/80">{review.when}</p>
        </div>
        <GoogleG className="h-5 w-5 flex-none" />
      </header>
      <div className="mt-3"><Stars value={review.rating} /></div>
      <p className={`mt-3 text-sm leading-6 ${!expanded && long ? 'line-clamp-5' : ''}`}>{review.text}</p>
      {long && (
        <button type="button" onClick={() => setExpanded((e) => !e)} className="mt-2 self-start text-xs font-semibold text-accent-600 hover:underline">
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </article>
  );
}

/**
 * Live Google rating and reviews, fetched from /api/google-reviews (Places API).
 * Without an API key it shows genuine reviews copied from the Google profile (data/reviews.js),
 * labelled with the date they were taken.
 */
export default function GoogleReviews() {
  const [state, setState] = useState({ status: 'loading' });

  useEffect(() => {
    let alive = true;
    fetch('/api/google-reviews')
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data) => alive && setState({ status: 'ok', data }))
      .catch(() => alive && setState({ status: 'error' }));
    return () => {
      alive = false;
    };
  }, []);

  const live = state.status === 'ok' && state.data?.rating ? state.data : null;
  const summary = live ?? GOOGLE_SUMMARY;
  const reviews = live?.reviews?.length ? live.reviews : GOOGLE_REVIEWS;
  const profileUrl = live?.url ?? googleProfileUrl();

  return (
    <section id="reviews" className="scroll-mt-32 bg-cream py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Google Reviews">What Our <Hl>Patients Say</Hl></SectionTitle>

        <Reveal className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-3 rounded-2xl border border-ink/10 bg-white px-6 py-6 text-center shadow-sm sm:flex-row sm:text-left">
          <GoogleG className="h-12 w-12 flex-none" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">{live?.name ?? GOOGLE_PROFILE.name}</p>
            <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="text-2xl font-bold text-ink">{summary.rating.toFixed(1)}</span>
              <Stars value={summary.rating} className="h-5 w-5" />
              <span className="text-sm text-body">{summary.count} Google reviews</span>
            </div>
          </div>
        </Reveal>

        <Stagger className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <StaggerItem key={`${r.author}-${r.when}`}><ReviewCard review={r} /></StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 text-center">
          <Button href={profileUrl} target="_blank" rel="noopener noreferrer">
            See all {summary.count} reviews on Google
          </Button>
          <p className="mt-3 text-[11px] text-body/70">
            {live ? 'Live from Google.' : `Genuine reviews from our Google profile, as of ${GOOGLE_SUMMARY.asOf}.`}
          </p>
        </div>
      </div>
    </section>
  );
}
