import SectionTitle, { Hl } from '../common/SectionTitle';
import TreatmentCard from '../common/TreatmentCard';
import Reveal, { Stagger, StaggerItem } from '../common/Reveal';
import { TREATMENTS } from '../../data/treatments';

/** Centred, wrapping grid so an incomplete last row sits in the middle (as on the reference design). */
export default function TreatmentsGrid({ title = <>Our <Hl>Treatments</Hl></>, intro, bg = 'bg-[#f8f9f9]' }) {
  return (
    <section className={`py-16 sm:py-24 ${bg}`}>
      <div className="container-x">
        <SectionTitle eyebrow="Specialist hip & knee care">{title}</SectionTitle>
        {intro && (
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7">{intro}</p>
          </Reveal>
        )}
        <Stagger className="mt-12 flex flex-wrap justify-center gap-6" stagger={0.07}>
          {TREATMENTS.map((t) => (
            <StaggerItem key={t.slug} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
              <TreatmentCard treatment={t} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
