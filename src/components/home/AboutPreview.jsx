import { useEffect, useRef, useState } from 'react';
import { useInView, animate } from 'framer-motion';
import Reveal from '../common/Reveal';
import SectionTitle, { Hl } from '../common/SectionTitle';
import Button from '../common/Button';
import DoctorPhoto from '../common/DoctorPhoto';
import { CheckIcon } from '../common/Icons';
import { DOCTOR, SPECIALISMS, LOCATIONS, INSURERS } from '../../data/site';
import { TREATMENTS } from '../../data/treatments';

function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(0, to, { duration: 2, ease: 'easeOut', onUpdate: (v) => setValue(Math.round(v)) });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{value}{suffix}</span>;
}

const STATS = [
  { value: DOCTOR.experienceYears, suffix: '+', label: 'Years of experience' },
  { value: LOCATIONS.length, suffix: '', label: 'Clinic locations' },
  { value: TREATMENTS.length, suffix: '', label: 'Specialist treatments' },
  { value: INSURERS.length, suffix: '', label: 'Insurance panels' },
];

export default function AboutPreview() {
  return (
    <section className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal from="left" className="relative mx-auto w-full max-w-sm">
          <span aria-hidden="true" className="absolute -left-5 top-0 h-2/5 w-2.5 rounded-full bg-accent-500" />
          <span aria-hidden="true" className="dot-grid absolute -left-8 top-1/2 h-1/3 w-6" />
          <span aria-hidden="true" className="absolute -right-5 -top-5 h-32 w-32 rounded-xl bg-primary-50" />
          <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl shadow-primary-900/15">
            <DoctorPhoto className="aspect-[4/5] w-full" />
          </div>
          <div className="absolute -bottom-5 left-6 right-6 rounded-lg bg-primary-600 px-5 py-3 text-center shadow-xl">
            <p className="text-sm font-semibold text-white">{DOCTOR.name}</p>
            <p className="text-[11px] text-primary-100">{DOCTOR.postNominals}</p>
          </div>
        </Reveal>

        <Reveal from="right" delay={0.1}>
          <SectionTitle align="left" eyebrow={DOCTOR.role}>
            About <Hl>Dr. Khalid Rehman Malik</Hl>
          </SectionTitle>
          <div className="prose-body mt-6">
            <p>
              <strong>{DOCTOR.name}</strong> is an <strong>Associate Professor and Consultant Orthopaedic Surgeon</strong> specialising
              in hip and knee arthroplasty (joint replacement) and arthroscopic keyhole sports surgery, with clinics across
              <strong> Lahore and Layyah</strong>.
            </p>
            <p>
              Over more than {DOCTOR.experienceYears} years in orthopaedics, in Pakistan and abroad – including service as Associate
              Consultant at the Armed Forces Hospital, Jeddah – he has become known for careful decision-making, technical precision
              and genuinely personal care. Every treatment plan is shaped around the patient&apos;s symptoms, anatomy, lifestyle and
              long-term goals.
            </p>
          </div>

          <p className="mt-6 text-sm font-semibold text-ink">Dr. Malik specialises in:</p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {SPECIALISMS.map((s) => (
              <li key={s} className="flex items-start gap-2 text-sm">
                <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent-500" /> {s}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to="/about">Learn More</Button>
          </div>
        </Reveal>
      </div>

      <div className="container-x mt-20">
        <Reveal className="grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-600 p-6 text-center shadow-xl sm:p-8 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 py-4">
              <p className="text-3xl font-bold text-white sm:text-4xl">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-accent-200">{s.label}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
