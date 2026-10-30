import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import SectionTitle, { Hl, Divider } from '../components/common/SectionTitle';
import DoctorPhoto from '../components/common/DoctorPhoto';
import SmartImage from '../components/common/SmartImage';
import ContactSection from '../components/home/ContactSection';
import TreatmentsGrid from '../components/home/TreatmentsGrid';
import { FullBleedSplit, MediaSplit, InfoCards } from '../components/treatment/Blocks';
import { AwardIcon, CheckIcon } from '../components/common/Icons';
import { SITE, DOCTOR, QUALIFICATIONS, SPECIALISMS, SECRETARY } from '../data/site';

// Clinical-environment photos. Replace with the doctor's own photos when available.
const GALLERY = ['theatre', 'surgeonsOperating', 'ward', 'xrayReview', 'consultScreen', 'surgeonFocus', 'kneePhysio', 'reception'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE.url}/about`,
  mainEntity: {
    '@type': 'Physician',
    '@id': `${SITE.url}/#physician`,
    name: DOCTOR.name,
    jobTitle: DOCTOR.role,
    telephone: SITE.phone,
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Nishtar Medical College, Multan' },
      { '@type': 'Hospital', name: 'Sheikh Zayed Hospital, Lahore' },
      { '@type': 'Hospital', name: 'King Fahad Armed Forces Hospital, Jeddah' },
    ],
    hasCredential: QUALIFICATIONS.map((q) => ({ '@type': 'EducationalOccupationalCredential', name: q.title })),
  },
};

export default function About() {
  return (
    <>
      <Seo
        title="About Dr. Khalid Rehman Malik"
        description="Meet Dr. Khalid Rehman Malik – Associate Professor & Consultant Orthopaedic Surgeon in Lahore & Layyah. 25+ years in hip & knee replacement and sports surgery."
        path="/about"
        image="surgeonsOperating"
        jsonLd={jsonLd}
      />
      <PageHero title="About Dr. Khalid Rehman Malik" image="theatre" breadcrumb={[{ label: 'About' }]} />

      {/* Profile */}
      <section className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal from="left" className="relative mx-auto w-full max-w-sm">
            <span aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-xl bg-accent-100" />
            <div className="relative overflow-hidden rounded-xl border border-ink/10 shadow-2xl">
              <DoctorPhoto className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
          <Reveal from="right" delay={0.1}>
            <SectionTitle as="h2" align="left" size="lg">
              {DOCTOR.name} – <Hl>Consultant Hip &amp; Knee Surgeon</Hl>
            </SectionTitle>
            <p className="mt-4 text-sm font-semibold text-primary-600">{DOCTOR.postNominals} · {DOCTOR.credentialLine}</p>
            <div className="prose-body mt-6">
              <p>
                {DOCTOR.name} is an <strong>Associate Professor and Consultant Orthopaedic Surgeon</strong> who specialises in hip
                and knee arthroplasty – joint replacement – together with arthroscopic (keyhole) sports surgery. He sees patients in
                <strong> Lahore and Layyah</strong>, and is a former Head of the Orthopaedic Department at Fatima Jinnah Medical
                University, Lahore.
              </p>
              <p>
                With more than {DOCTOR.experienceYears} years in orthopaedics in Pakistan and abroad, including service as
                <strong> Associate Consultant at the Armed Forces Hospital, Jeddah</strong>, he treats the full spectrum of hip and knee
                problems: arthritis, sports injuries, complex deformity and failed previous joint replacements.
              </p>
              <p>
                Dr. Malik believes the best results come from listening carefully, explaining every option clearly and tailoring
                treatment to each patient&apos;s lifestyle and expectations. Whether that means physiotherapy and an injection, keyhole
                ligament reconstruction or a robotic-assisted joint replacement, his focus is always the same – helping patients move
                freely, without pain, and get back to the life they enjoy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Private secretary */}
      <section id="private-secretary" className="scroll-mt-28 overflow-hidden bg-cream py-16 sm:py-24">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal from="left" delay={0.1} className="order-2 lg:order-1">
            <SectionTitle as="h2" align="left" size="lg" eyebrow="Meet the team">
              {SECRETARY.name} – <Hl>{SECRETARY.role}</Hl>
            </SectionTitle>
            <p className="mt-4 text-sm font-semibold text-primary-600">
              Working with {DOCTOR.name} since {SECRETARY.since} · {SECRETARY.experienceYears} years in orthopaedic patient care
            </p>
            <div className="prose-body mt-6">
              <p>
                <strong>{SECRETARY.name}</strong> has worked alongside {DOCTOR.name} since <strong>{SECRETARY.since}</strong>, guiding
                patients through every stage of their care. Whether you have a question before your operation or need advice during your
                recovery, she is the link between you and Dr. Malik – making sure your concerns reach him and his instructions reach you.
              </p>
              <p>
                She brings <strong>{SECRETARY.experienceYears} years of experience</strong> as a front-desk professional and assistant,
                most of it in orthopaedic departments. Her courteous communication and confident handling of every detail of her role
                are a big part of why our patients feel looked after from their first call to their final follow-up.
              </p>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                'Appointment booking & clinic schedules',
                'Pre-operative guidance & preparation',
                'Post-operative queries & follow-ups',
                'Liaison between patients & Dr. Malik',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckIcon className="mt-0.5 h-4 w-4 flex-none text-accent-500" /> {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right" className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
            <span aria-hidden="true" className="absolute -right-4 -top-4 h-full w-full rounded-xl bg-primary-100" />
            <div className="relative overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl">
              <img
                src={SECRETARY.photo}
                alt={`${SECRETARY.name}, ${SECRETARY.role} to ${DOCTOR.name}`}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 rounded-lg bg-primary-600 px-5 py-3 text-center shadow-xl">
              <p className="text-sm font-semibold text-white">{SECRETARY.name}</p>
              <p className="text-[11px] text-primary-100">{SECRETARY.role}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Divider />

      {/* Education & training */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Reveal from="zoom" className="mx-auto max-w-3xl rounded-xl border border-accent-300 bg-white px-6 py-10 text-center shadow-sm sm:px-12">
            <h2 className="text-2xl font-semibold text-ink">Education <Hl>&amp;</Hl> Training</h2>
            <div className="prose-body mt-6">
              <p>
                Dr. Malik graduated from <strong>Nishtar Medical College, Multan</strong>, and completed his specialist orthopaedic
                training at <strong>Sheikh Zayed Hospital, Lahore</strong>, earning his MCPS and FCPS in Orthopaedic Surgery from the
                College of Physicians &amp; Surgeons Pakistan.
              </p>
              <p>
                He went on to complete <strong>advanced fellowship training in joint replacement and sports surgery at King Fahad
                Armed Forces Hospital, Jeddah, Saudi Arabia</strong>, gaining extensive experience in primary and revision hip and knee
                replacement, joint reconstruction and arthroscopic ligament surgery.
              </p>
              <p>
                His international credentials include CMT (UK), AO Fellowship (Germany), Fellowship of the International College of
                Surgeons (FICS, USA) and Fellowship of the American College of Surgeons (FACS).
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Qualifications */}
      <FullBleedSplit image="xrayReview2" alt="Orthopaedic surgeon reviewing imaging" tone="orange" title="Qualifications">
        <ul className="space-y-3">
          {QUALIFICATIONS.map((q) => (
            <li key={q.title} className="flex gap-3 text-[15px] leading-6">
              <AwardIcon className="mt-0.5 h-5 w-5 flex-none text-white" />
              <span><strong className="font-semibold">{q.title}</strong> – {q.detail}</span>
            </li>
          ))}
        </ul>
      </FullBleedSplit>

      {/* Experience (in place of awards) */}
      <InfoCards
        title={<>International <Hl>Experience</Hl></>}
        bg="white"
        items={[
          { title: `${DOCTOR.experienceYears}+ Years in Orthopaedics`, body: 'A quarter of a century treating bone and joint conditions in Pakistan and abroad, from trauma to complex joint reconstruction.' },
          { title: 'Armed Forces Hospital, Jeddah', body: 'Served as Associate Consultant and completed fellowship training in arthroplasty and sports surgery at King Fahad Armed Forces Hospital, KSA.' },
          { title: 'Academic Leadership', body: 'Associate Professor and former Head of the Orthopaedic Department at Fatima Jinnah Medical University, Lahore.' },
        ]}
      />

      <Divider />

      {/* Gallery */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle>Gallery</SectionTitle>
          <Stagger className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4" stagger={0.06}>
            {GALLERY.map((key, i) => (
              <StaggerItem key={key} className={`group overflow-hidden rounded-lg ${i === 0 || i === 5 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                <SmartImage src={key} alt="Orthopaedic clinical environment" width={800} className="h-full min-h-40 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Divider />

      <TreatmentsGrid title={<>Surgical <Hl>Expertise</Hl></>} bg="bg-white" />

      <Divider />

      <MediaSplit image="consultScreen2" alt="Surgeon teaching with medical imaging" reverse title={<>Academic <Hl>Interests</Hl></>}>
        <p>
          Teaching the next generation of surgeons is central to Dr. Malik&apos;s work. As an <strong>Associate Professor</strong> and former
          Head of Department at Fatima Jinnah Medical University, Lahore, he has trained and mentored many undergraduate students and
          orthopaedic residents.
        </p>
        <p>His clinical and academic interests include:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5 marker:text-accent-500">
          {SPECIALISMS.slice(0, 6).map((s) => <li key={s}>{s}</li>)}
        </ul>
      </MediaSplit>

      <ContactSection />
    </>
  );
}
