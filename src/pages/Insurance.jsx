import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import BookingBand from '../components/common/BookingBand';
import { InsurerTile } from '../components/home/InsuranceMarquee';
import { InfoCards } from '../components/treatment/Blocks';
import { INSURERS } from '../data/site';

export default function Insurance() {
  return (
    <>
      <Seo
        title="Insurance Information"
        description="Dr. Khalid Rehman Malik is a recognised provider for EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari insurance for hip and knee treatment in Lahore & Layyah."
        path="/insurance"
        image="laptopDoctor"
      />
      <PageHero title="Insurance Information" breadcrumb={[{ label: 'Insurance Information' }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle>Insurance <Hl>Panels</Hl></SectionTitle>
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[15px] leading-7">
              Dr. Malik is a recognised provider for Pakistan&apos;s leading health insurers. If you are covered through your employer or a
              personal policy, our team can help you with the paperwork for consultations, investigations and surgery.
            </p>
          </Reveal>
          <Stagger className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-5">
            {INSURERS.map((i) => (
              <StaggerItem key={i.name}><InsurerTile insurer={i} /></StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <InfoCards
        title={<>Using Your <Hl>Insurance</Hl></>}
        items={[
          { title: '1. Check Your Cover', body: 'Contact your insurer or HR department to confirm that orthopaedic consultations and the planned procedure are included in your policy.' },
          { title: '2. Get Pre-Authorisation', body: 'For surgery and some scans, insurers require approval in advance. We will provide the clinical details and cost estimate your insurer needs.' },
          { title: '3. Bring Your Documents', body: 'Please bring your insurance card, CNIC and any approval letter to your appointment and on the day of admission.' },
        ]}
      />

      <BookingBand heading="Questions about your cover?" text="Call or WhatsApp our team and we will help you understand what your policy includes before your appointment." />
    </>
  );
}
