import { useState } from 'react';
import { DOCTOR_PHOTO } from '../../data/images';
import { DOCTOR } from '../../data/site';

/** Portrait of the doctor; shows a branded placeholder until /public/images/dr-khalid-rehman-malik.jpg exists. */
export default function DoctorPhoto({ className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={`${DOCTOR.name}, ${DOCTOR.title}`}
        className={`relative flex flex-col items-center justify-end overflow-hidden bg-gradient-to-b from-primary-100 to-primary-300 ${className}`}
      >
        <svg viewBox="0 0 200 220" className="w-3/4 text-primary-600/70" aria-hidden="true">
          <circle cx="100" cy="70" r="42" fill="currentColor" />
          <path d="M20 220c0-55 36-90 80-90s80 35 80 90z" fill="currentColor" />
          <path d="M80 140c0 30 10 45 20 45s20-15 20-45" stroke="#fff" strokeWidth="5" fill="none" />
          <circle cx="100" cy="190" r="7" fill="#f07c22" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={DOCTOR_PHOTO}
      alt={`${DOCTOR.name}, ${DOCTOR.title}`}
      onError={() => setFailed(true)}
      className={`object-cover object-top ${className}`}
    />
  );
}
