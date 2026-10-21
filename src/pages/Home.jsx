import Seo from '../components/common/Seo';
import HeroSlider from '../components/home/HeroSlider';
import AboutPreview from '../components/home/AboutPreview';
import TreatmentsGrid from '../components/home/TreatmentsGrid';
import InsuranceMarquee from '../components/home/InsuranceMarquee';
import GoogleReviews from '../components/home/GoogleReviews';
import GalleryPreview from '../components/home/GalleryPreview';
import ContactSection from '../components/home/ContactSection';
import { Divider } from '../components/common/SectionTitle';
import { SITE, DOCTOR, LOCATIONS, QUALIFICATIONS } from '../data/site';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    '@id': `${SITE.url}/#physician`,
    name: DOCTOR.name,
    url: SITE.url,
    telephone: SITE.phone,
    medicalSpecialty: ['Orthopedic', 'SportsMedicine'],
    description: SITE.description,
    hasCredential: QUALIFICATIONS.map((q) => ({ '@type': 'EducationalOccupationalCredential', name: q.title })),
    alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Nishtar Medical College, Multan' }],
    areaServed: ['Lahore', 'Shahdara', 'Layyah', 'Punjab, Pakistan'],
    hospitalAffiliation: LOCATIONS.map((l) => ({
      '@type': 'Hospital',
      name: `${l.name}, ${l.city}`,
      address: { '@type': 'PostalAddress', addressLocality: l.city, addressRegion: l.region, addressCountry: 'PK' },
    })),
  },
  { '@context': 'https://schema.org', '@type': 'WebSite', name: SITE.brand, url: SITE.url },
];

export default function Home() {
  return (
    <>
      <Seo path="/" image="surgeonsOperating" jsonLd={jsonLd} />
      <HeroSlider />
      <AboutPreview />
      <TreatmentsGrid
        intro="From joint-preserving injections and keyhole surgery to robotic-assisted and complex revision joint replacement – care planned around your goals."
      />
      <GoogleReviews />
      <GalleryPreview />
      <InsuranceMarquee />
      <Divider />
      <ContactSection />
    </>
  );
}
