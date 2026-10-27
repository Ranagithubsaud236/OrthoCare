import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import BookingBand from '../components/common/BookingBand';
import BookButton from '../components/common/BookButton';
import { CheckIcon } from '../components/common/Icons';
import { InsurerTile } from '../components/home/InsuranceMarquee';
import { InfoCards } from '../components/treatment/Blocks';
import { INSURERS, SITE } from '../data/site';

const ASK_INSURER = [
  'Is an orthopaedic consultation covered under my plan?',
  'Is the planned procedure (e.g. hip or knee replacement, arthroscopy) covered, and up to what limit?',
  'Do I need pre-authorisation before admission or scans?',
  'Are X-rays, MRI and lab tests covered as outpatient or only during admission?',
  'Which hospital – Horizon, Bajwa or Qadir Ali – is on my panel?',
  'Are implants, physiotherapy and follow-up visits included?',
];

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
          <Stagger className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-3 sm:gap-5">
            {INSURERS.map((i) => (
              <StaggerItem key={i.name} className="w-[calc(50%-6px)] sm:w-44"><InsurerTile insurer={i} className="w-full" /></StaggerItem>
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

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid items-start gap-10 lg:grid-cols-2">
          <Reveal from="left">
            <SectionTitle align="left">Verify Your <Hl>Benefits</Hl></SectionTitle>
            <p className="mt-5 text-[15px] leading-7">
              Coverage differs between insurers and between individual policies, so the only reliable answer comes from your insurer or
              employer&apos;s HR department. Before your appointment, call the helpline on your insurance card and ask:
            </p>
            <ul className="mt-5 space-y-3">
              {ASK_INSURER.map((q) => (
                <li key={q} className="flex items-start gap-2.5 text-sm leading-6">
                  <CheckIcon className="mt-1 h-4 w-4 flex-none text-accent-500" /> {q}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal from="right" className="rounded-xl bg-cream p-6 text-center sm:p-8">
            <h3 className="text-xl font-semibold text-accent-500">Need help checking?</h3>
            <p className="mt-3 text-sm leading-6">
              Send a photo of your insurance card and your policy details to Dr. Malik&apos;s assistant on WhatsApp. We will tell you
              whether your insurer is on our panel and what documents you need for pre-authorisation.
            </p>
            <p className="mt-4 text-2xl font-bold text-ink">{SITE.phone}</p>
            <div className="mt-5">
              <BookButton
                label="Verify on WhatsApp"
                text="Assalam o Alaikum, I would like to check my insurance cover for treatment with Dr. Khalid Rehman Malik. My insurer is: "
              />
            </div>
            <p className="mt-4 text-[11px] text-body/80">
              The panel list above may change – please always confirm with your insurer before treatment.
            </p>
          </Reveal>
        </div>
      </section>

      <BookingBand heading="Questions about your cover?" text="Call or WhatsApp our team and we will help you understand what your policy includes before your appointment." />
    </>
  );
}
