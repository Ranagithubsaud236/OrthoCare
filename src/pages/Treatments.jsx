import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import TreatmentsGrid from '../components/home/TreatmentsGrid';
import BookingBand from '../components/common/BookingBand';
import { Hl } from '../components/common/SectionTitle';
import { SITE } from '../data/site';
import { DIAGNOSES } from '../data/diagnoses';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: DIAGNOSES.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    url: `${SITE.url}/diagnosis/${d.id}`,
  })),
};

export default function Treatments() {
  return (
    <>
      <Seo
        title="Diagnosis & Treatments"
        description="Osteoarthritis of the knee and hip, joint injections, fracture management, paediatric orthopaedics and tumour surgery by Dr. Khalid Rehman Malik in Lahore & Layyah."
        path="/diagnosis"
        image="theatre"
        jsonLd={jsonLd}
      />
      <PageHero title="Diagnosis" breadcrumb={[{ label: 'Diagnosis' }]} />
      <TreatmentsGrid
        title={<>Conditions We <Hl>Treat</Hl></>}
        bg="bg-white"
        intro="Every patient is different. Dr. Malik always starts with the least invasive option likely to work, and recommends surgery only when it offers you a clear benefit."
      />
      <BookingBand />
    </>
  );
}
