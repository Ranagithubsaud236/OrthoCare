import { Link, Navigate, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import BookingBand from '../components/common/BookingBand';
import DiagnosisCard from '../components/common/DiagnosisCard';
import Button from '../components/common/Button';
import { CheckIcon } from '../components/common/Icons';
import { DIAGNOSES, getDiagnosis } from '../data/diagnoses';

export default function DiagnosisDetail() {
  const { id } = useParams();
  const diagnosis = getDiagnosis(id);
  if (!diagnosis) return <Navigate to="/diagnosis" replace />;

  const others = DIAGNOSES.filter((d) => d.id !== id).slice(0, 3);

  return (
    <>
      <Seo
        title={`${diagnosis.title} Treatment in Lahore`}
        description={`${diagnosis.summary} Dr. Khalid Rehman Malik, Consultant Orthopaedic Surgeon, Lahore & Layyah.`}
        path={`/diagnosis/${id}`}
        image={diagnosis.image}
      />
      <PageHero title={diagnosis.title} breadcrumb={[{ label: 'Diagnosis', to: '/diagnosis' }, { label: diagnosis.title }]} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <SectionTitle eyebrow={diagnosis.subtitle ?? 'Treatment Options'}>
            {diagnosis.heading[0]} <Hl>{diagnosis.heading[1]}</Hl>
          </SectionTitle>
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 text-body sm:text-[17px]">{diagnosis.intro}</p>
          </Reveal>

          {/* Flex-wrap + justify-center keeps a single card, or an odd last card, in the middle. */}
          <Stagger className="mx-auto mt-12 flex max-w-5xl flex-wrap justify-center gap-6" stagger={0.07}>
            {diagnosis.options.map((o, i) => (
              <StaggerItem key={o.id} className="w-full sm:w-[calc(50%-12px)]">
                <article
                  id={o.id}
                  className="flex h-full scroll-mt-36 flex-col rounded-2xl border border-ink/10 bg-cream p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent-300 hover:shadow-lg sm:p-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-accent-500 text-base font-bold text-white shadow-md shadow-accent-500/30">
                      {diagnosis.options.length > 1 ? i + 1 : <CheckIcon className="h-5 w-5" />}
                    </span>
                    <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">{o.label}</h3>
                  </div>
                  <span aria-hidden="true" className="mt-5 block h-0.5 w-10 rounded-full bg-accent-500/60" />
                  <p className="mt-4 flex-1 text-[15px] leading-7 text-body">{o.text}</p>
                  {o.to && (
                    <div className="mt-6">
                      <Button to={o.to} variant="outline" size="sm">Learn More</Button>
                    </div>
                  )}
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <BookingBand heading={`Concerned about ${diagnosis.title.toLowerCase()}?`} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <SectionTitle>Other <Hl>Conditions</Hl></SectionTitle>
          <Stagger className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((d) => (
              <StaggerItem key={d.id}><DiagnosisCard diagnosis={d} /></StaggerItem>
            ))}
          </Stagger>
          <p className="mt-8 text-center">
            <Link to="/diagnosis" className="text-sm font-semibold text-accent-600 hover:underline">View all conditions</Link>
          </p>
        </div>
      </section>
    </>
  );
}
