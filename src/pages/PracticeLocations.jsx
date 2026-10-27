import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import SmartImage from '../components/common/SmartImage';
import Button from '../components/common/Button';
import BookButton from '../components/common/BookButton';
import BookingBand from '../components/common/BookingBand';
import { ClockIcon, MapPinIcon } from '../components/common/Icons';
import { SITE, DOCTOR, LOCATIONS, mapEmbedUrl, mapDirectionsUrl } from '../data/site';

const jsonLd = LOCATIONS.map((l) => ({
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: `${DOCTOR.name} – Orthopaedic Clinic at ${l.name}`,
  telephone: SITE.phone,
  medicalSpecialty: 'Orthopedic',
  address: { '@type': 'PostalAddress', addressLocality: l.city, addressRegion: l.region, addressCountry: 'PK' },
  hasMap: mapDirectionsUrl(l.mapQuery),
  employee: { '@id': `${SITE.url}/#physician` },
}));

export default function PracticeLocations() {
  return (
    <>
      <Seo
        title="Practice Locations & Clinic Times"
        description="Clinic times for Dr. Khalid Rehman Malik at Horizon Hospital Lahore, Bajwa Hospital Shahdara and Qadir Ali Hospital Layyah, with maps and directions."
        path="/practice-locations"
        image="reception"
        jsonLd={jsonLd}
      />
      <PageHero title="Practice Locations" image="ward" breadcrumb={[{ label: 'Practice Locations' }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle>Private <Hl>Practice</Hl> Locations</SectionTitle>
          <div className="mx-auto mt-12 max-w-5xl space-y-10">
            {LOCATIONS.map((loc, i) => (
              <Reveal key={loc.id} from={i % 2 ? 'right' : 'left'} className="rounded-xl border border-accent-300 bg-white p-5 shadow-sm sm:p-6">
                <article id={loc.id} className="scroll-mt-32">
                  <header className="flex flex-col items-center gap-1 text-center">
                    <h2 className="text-xl font-semibold text-accent-600">{loc.name}</h2>
                    <p className="flex items-center gap-1.5 text-sm text-ink"><MapPinIcon className="h-4 w-4 text-primary-500" /> {loc.city}, {loc.region}</p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary-600 underline underline-offset-4">Clinic times</p>
                    {loc.schedule.map((s) => (
                      <p key={s.days} className="text-sm">
                        <ClockIcon className="mr-1.5 inline h-4 w-4 -translate-y-px text-accent-500" />{s.days} · {s.time}
                      </p>
                    ))}
                  </header>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="group overflow-hidden rounded-lg">
                      <SmartImage src={loc.image} alt={`${loc.name}, ${loc.city}`} width={800} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="relative h-64 overflow-hidden rounded-lg bg-primary-50">
                      <iframe
                        title={`Map showing ${loc.name}, ${loc.city}`}
                        src={mapEmbedUrl(loc.mapQuery)}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <Button href={mapDirectionsUrl(loc.mapQuery)} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">Get Directions</Button>
                    <BookButton size="sm" label={`Book at ${loc.name}`} text={`Assalam o Alaikum, I would like to book an appointment with Dr. Khalid Rehman Malik at ${loc.name}, ${loc.city}.`} />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
