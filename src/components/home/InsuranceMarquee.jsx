import SectionTitle, { Hl } from '../common/SectionTitle';
import Reveal from '../common/Reveal';
import { ShieldIcon } from '../common/Icons';
import { INSURERS } from '../../data/site';

export function InsurerTile({ insurer }) {
  return (
    <div className="flex h-20 w-44 flex-none items-center justify-center gap-2 rounded-xl border border-ink/10 bg-white px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg">
      {insurer.logo ? (
        <img src={insurer.logo} alt={insurer.full} className="max-h-12 w-auto object-contain" loading="lazy" />
      ) : (
        <>
          <ShieldIcon className="h-6 w-6 flex-none" style={{ color: insurer.color }} />
          <span className="leading-tight">
            <span className="block text-lg font-bold" style={{ color: insurer.color }}>{insurer.name}</span>
            <span className="block text-[10px] font-medium uppercase tracking-wider text-body">Insurance</span>
          </span>
        </>
      )}
    </div>
  );
}

export default function InsuranceMarquee() {
  const names = INSURERS.map((i) => i.name);
  const list = `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`;

  return (
    <section className="overflow-hidden bg-white py-16 sm:py-20">
      <div className="container-x">
        <SectionTitle>Insurance <Hl>Information</Hl></SectionTitle>
        <Reveal>
          <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7">
            Dr. Malik is a recognised provider for leading health insurers in Pakistan, including {list}. Please confirm your
            cover and any pre-authorisation with your insurer before your appointment.
          </p>
        </Reveal>
      </div>

      <div className="group relative mt-10 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-marquee gap-6 py-3 group-hover:[animation-play-state:paused]">
          {[...INSURERS, ...INSURERS, ...INSURERS, ...INSURERS].map((insurer, i) => (
            <div key={`${insurer.name}-${i}`} aria-hidden={i >= INSURERS.length}>
              <InsurerTile insurer={insurer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
