import Seo from '../common/Seo';
import PageHero from '../common/PageHero';
import SectionTitle from '../common/SectionTitle';
import TreatmentCard from '../common/TreatmentCard';
import { Stagger, StaggerItem } from '../common/Reveal';
import BookingBand from '../common/BookingBand';
import { FaqList } from './Blocks';
import { TREATMENTS, getTreatment } from '../../data/treatments';
import { SITE, DOCTOR } from '../../data/site';

/**
 * Wraps every treatment page: SEO + structured data, hero banner, page content,
 * optional FAQs, booking call-to-action and related treatments.
 */
export default function TreatmentLayout({ slug, description, heroImage, faqs, children }) {
  const treatment = getTreatment(slug);
  const path = `/treatments/${slug}`;
  const url = `${SITE.url}${path}`;

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'MedicalWebPage',
      name: treatment.title,
      url,
      description,
      about: { '@type': 'MedicalProcedure', name: treatment.title, description: treatment.short },
      author: { '@type': 'Physician', name: DOCTOR.name, url: `${SITE.url}/about` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url },
        { '@type': 'ListItem', position: 2, name: 'Diagnosis', item: `${SITE.url}/diagnosis` },
        { '@type': 'ListItem', position: 3, name: treatment.title, item: url },
      ],
    },
  ];
  if (faqs?.length) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }

  const index = TREATMENTS.findIndex((t) => t.slug === slug);
  const related = [1, 2, 3].map((n) => TREATMENTS[(index + n) % TREATMENTS.length]);

  return (
    <>
      <Seo title={`${treatment.title} in Lahore & Layyah`} description={description} path={path} image={heroImage ?? treatment.image} jsonLd={jsonLd} />
      <PageHero
        title={treatment.title}
        image={heroImage}
        breadcrumb={[{ label: 'Diagnosis', to: '/diagnosis' }, { label: treatment.title }]}
      />

      <article>{children}</article>

      {faqs?.length > 0 && <FaqList items={faqs} />}

      <BookingBand heading={`Is ${treatment.title.replace('®', '')} right for you?`} />

      <section className="bg-white py-14 sm:py-20">
        <div className="container-x">
          <SectionTitle>Other <span className="text-accent-500">Treatments</span></SectionTitle>
          <Stagger className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => (
              <StaggerItem key={t.slug}><TreatmentCard treatment={t} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
