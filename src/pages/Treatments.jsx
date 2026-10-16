import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import TreatmentsGrid from '../components/home/TreatmentsGrid';
import BookingBand from '../components/common/BookingBand';
import { Hl } from '../components/common/SectionTitle';
import { SITE } from '../data/site';
import { TREATMENTS } from '../data/treatments';

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: TREATMENTS.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.title,
    url: `${SITE.url}/treatments/${t.slug}`,
  })),
};

export default function Treatments() {
  return (
    <>
      <Seo
        title="Hip & Knee Treatments"
        description="Hip and knee replacement, robotic joint surgery, revision surgery, knee arthroscopy, Arthrosamid and non-surgical care by Dr. Khalid Rehman Malik in Lahore & Layyah."
        path="/treatments"
        image="theatre"
        jsonLd={jsonLd}
      />
      <PageHero title="Treatments" breadcrumb={[{ label: 'Treatments' }]} />
      <TreatmentsGrid
        title={<>Specialist <Hl>Hip &amp; Knee</Hl> Treatments</>}
        bg="bg-white"
        intro="Every patient is different. Dr. Malik always starts with the least invasive option likely to work, and recommends surgery only when it offers you a clear benefit."
      />
      <BookingBand />
    </>
  );
}
