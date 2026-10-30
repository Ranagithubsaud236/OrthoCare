import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import BookingBand from '../components/common/BookingBand';
import { PhoneIcon, WhatsAppIcon } from '../components/common/Icons';
import { SITE, DOCTOR, SECRETARY, whatsappLink } from '../data/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${SITE.url}/private-secretary`,
  mainEntity: {
    '@type': 'Person',
    name: SECRETARY.name,
    jobTitle: SECRETARY.role,
    telephone: SITE.phone,
    worksFor: { '@id': `${SITE.url}/#physician` },
  },
};

export default function PrivateSecretary() {
  return (
    <>
      <Seo
        title={`Private Secretary – ${SECRETARY.name}`}
        description={`Meet ${SECRETARY.name}, private secretary and patient coordinator to ${DOCTOR.name} since ${SECRETARY.since}. Help with appointments, pre-op and post-op queries.`}
        path="/private-secretary"
        image={SECRETARY.photo}
        jsonLd={jsonLd}
      />
      <PageHero title="Private Secretary" breadcrumb={[{ label: 'About', to: '/about' }, { label: 'Private Secretary' }]} />

      <section className="overflow-hidden bg-white py-16 sm:py-24">
        <div className="container-x grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal from="left" className="relative mx-auto w-full max-w-sm">
            <span aria-hidden="true" className="absolute -left-4 -top-4 h-full w-full rounded-xl bg-accent-100" />
            <span aria-hidden="true" className="dot-grid absolute -bottom-6 -right-6 h-24 w-24" />
            <div className="group relative overflow-hidden rounded-xl border border-ink/10 bg-white shadow-2xl">
              <img
                src={SECRETARY.photo}
                alt={`${SECRETARY.name}, ${SECRETARY.role} to ${DOCTOR.name}`}
                className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal from="right" delay={0.1}>
            <h2 className="text-3xl font-semibold text-ink sm:text-4xl">{SECRETARY.name}</h2>
            <p className="mt-3 text-lg font-medium text-accent-500">{SECRETARY.role}</p>
            <span aria-hidden="true" className="mt-4 block h-1 w-14 rounded-full bg-gradient-to-r from-accent-500 to-primary-500" />

            <div className="prose-body mt-6">
              <p>
                I am {SECRETARY.shortName}, private secretary to <strong>{DOCTOR.name}</strong> since <strong>{SECRETARY.since}</strong>,
                with <strong>{SECRETARY.experienceYears} years of experience</strong> as a front-desk professional and assistant – most of
                it in orthopaedic departments.
              </p>
              <p>
                I am here to guide you through your whole treatment journey: answering your first enquiry, booking your consultation,
                helping you prepare for surgery and staying in touch through your post-operative follow-ups. I am your link with Dr.
                Malik – I make sure your questions reach him and that his advice reaches you clearly, before and after your operation.
              </p>
              <p>
                I know that hospital visits and surgery can feel overwhelming. I am always happy to help with any concern, large or small,
                and I take pride in making sure every patient feels listened to and well looked after.
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-sm">
              <li>
                <a href={SITE.phoneHref} className="group inline-flex items-center gap-3 text-ink hover:text-accent-600">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent-500 text-white transition-transform group-hover:scale-110">
                    <PhoneIcon className="h-4 w-4" />
                  </span>
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Assalam o Alaikum ${SECRETARY.shortName}, I would like to book an appointment with ${DOCTOR.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 text-ink hover:text-accent-600"
                >
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white transition-transform group-hover:scale-110">
                    <WhatsAppIcon className="h-4 w-4" />
                  </span>
                  Message on WhatsApp
                </a>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <BookingBand />
    </>
  );
}
