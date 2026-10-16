import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';
import LocationMapCard from '../components/common/LocationMapCard';
import { ContactChannels, LocationsList } from '../components/home/ContactSection';
import { LOCATIONS } from '../data/site';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Book an Appointment"
        description="Book an appointment with Dr. Khalid Rehman Malik. Call or WhatsApp 0300-9404247 for clinics at Horizon Hospital Lahore, Bajwa Hospital Shahdara and Qadir Ali Hospital Layyah."
        path="/contact"
        image="reception"
      />
      <PageHero title="Contact Us" breadcrumb={[{ label: 'Contact Us' }]} />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle>Book an <Hl>Appointment</Hl></SectionTitle>
          <ContactChannels />
          <div className="mx-auto mt-14 grid max-w-6xl items-start gap-8 lg:grid-cols-2">
            <Reveal from="left"><ContactForm /></Reveal>
            <Reveal from="right"><LocationsList /></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f9f9] py-16 sm:py-20">
        <div className="container-x">
          <SectionTitle>Find Our <Hl>Clinics</Hl></SectionTitle>
          <Stagger className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((loc) => <StaggerItem key={loc.id}><LocationMapCard location={loc} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
    </>
  );
}
