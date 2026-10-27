import SectionTitle, { Hl } from '../common/SectionTitle';
import DiagnosisCard from '../common/DiagnosisCard';
import Reveal, { Stagger, StaggerItem } from '../common/Reveal';
import { DIAGNOSES } from '../../data/diagnoses';

/** Centred, wrapping grid of diagnoses so an incomplete last row sits in the middle. */
export default function TreatmentsGrid({ title = <>What We <Hl>Treat</Hl></>, intro, bg = 'bg-[#f8f9f9]' }) {
  return (
    <section className={`py-16 sm:py-24 ${bg}`}>
      <div className="container-x">
        <SectionTitle eyebrow="Diagnosis">{title}</SectionTitle>
        {intro && (
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7">{intro}</p>
          </Reveal>
        )}
        <Stagger className="mt-12 flex flex-wrap justify-center gap-6" stagger={0.07}>
          {DIAGNOSES.map((d) => (
            <StaggerItem key={d.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <DiagnosisCard diagnosis={d} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
