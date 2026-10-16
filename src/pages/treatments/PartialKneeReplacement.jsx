import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'What is the difference between a partial and a total knee replacement?',
    a: 'A total knee replacement resurfaces the whole joint, whereas a partial knee replacement replaces only the one compartment worn by arthritis. Healthy cartilage, bone and ligaments are preserved, which often gives a more natural-feeling knee and a quicker recovery.',
  },
  {
    q: 'How quickly can I walk after a partial knee replacement?',
    a: 'Most patients walk with support on the day of surgery or the next morning. Many go home within one to two days and return to normal daily activities within a few weeks.',
  },
  {
    q: 'Can a partial knee replacement be converted to a total knee replacement later?',
    a: 'Yes. If arthritis later develops in other parts of the knee, a partial replacement can usually be converted to a total knee replacement. Because bone has been preserved, this is generally straightforward.',
  },
  {
    q: 'Is partial knee replacement covered by insurance?',
    a: 'Many health insurance policies and corporate panels cover knee replacement surgery. Dr. Malik works with insurers including EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please check your cover with your provider before admission.',
  },
];

export default function PartialKneeReplacement() {
  return (
    <TreatmentLayout
      slug="partial-knee-replacement"
      description="Partial knee replacement in Lahore & Layyah by Dr. Khalid Rehman Malik: who is suitable, the benefits of keeping healthy knee tissue, recovery and risks."
      faqs={FAQS}
    >
      <IntroCard title={<><Hl>Partial Knee Replacement</Hl>: A Comprehensive Guide for Patients</>}>
        <p>
          Not every arthritic knee needs a full replacement. When wear is limited to one part of the joint, a partial knee
          replacement can relieve pain while keeping the healthy parts of your knee intact. This guide explains how the
          procedure works, who it suits and what you can expect from surgery and recovery.
        </p>
      </IntroCard>

      <Divider />

      <MediaSplit contain image="partialKneeDiagram" alt="Diagram of a partial knee replacement showing femoral, bearing and tibial components" title={<>What is <Hl>Partial Knee</Hl> Replacement?</>}>
        <p>
          The knee has <strong>three compartments</strong>: the <strong>medial</strong> (inner) side, the
          <strong> lateral</strong> (outer) side and the <strong>patellofemoral</strong> compartment behind the kneecap.
          Arthritis often starts in just one of these, most commonly the inner side.
        </p>
        <p>
          A partial knee replacement – also called a <strong>unicompartmental knee replacement</strong> – resurfaces only the
          damaged compartment with metal and plastic components. The remaining cartilage, bone and the important cruciate
          ligaments are left untouched.
        </p>
      </MediaSplit>

      <Divider />

      <MediaSplit
        image="consultScreen"
        alt="Surgeon explaining treatment options to a patient"
        reverse
        title={<>Who is a <Hl>Candidate</Hl> for Partial Knee Replacement?</>}
      >
        <p>
          You may be suitable if arthritis is <strong>confined to one compartment</strong> of the knee and your pain has not
          settled with medication, physiotherapy, weight management or injections.
        </p>
        <p>
          Good candidates usually have <strong>intact, healthy ligaments</strong>, a knee that still bends and straightens
          reasonably well, and no significant deformity. Inflammatory conditions such as rheumatoid arthritis, which affect the
          whole joint, are generally better treated with a total replacement. Dr. Malik will use your examination and imaging
          to confirm which option suits you.
        </p>
      </MediaSplit>

      <FullBleedSplit
        image="stairs"
        alt="Active older adult climbing outdoor steps"
        tone="cream"
        title={<>Main <Hl>Benefits</Hl></>}
      >
        <p>Because less of the knee is replaced, partial replacement offers several advantages for the right patient:</p>
        <FeatureList
          items={[
            { label: 'Preserves your natural knee', text: 'Healthy cartilage, bone and ligaments are kept, so the knee often feels more like your own.' },
            { label: 'Quicker recovery', text: 'A smaller operation usually means a shorter hospital stay and a faster return to daily life.' },
            { label: 'Less pain', text: 'Less tissue disturbance generally means less discomfort after surgery.' },
            { label: 'Better range of motion', text: 'Many patients regain a more natural bend and smoother movement.' },
          ]}
        />
      </FullBleedSplit>

      <ImageCards
        items={[
          {
            image: 'surgeonGloves',
            title: 'The Surgical Procedure',
            body: 'Under a spinal or general anaesthetic, Dr. Malik makes a smaller incision than for a total replacement, removes the worn surfaces from the affected compartment and fixes precisely sized implants in place. The operation usually takes around an hour.',
          },
          {
            image: 'kneePhysio',
            title: 'Recovery and Rehabilitation',
            body: 'Walking with support begins on the day of surgery or the next morning, and most patients go home within one to two days. A guided physiotherapy programme restores strength and movement, with many people back to normal routines within a few weeks.',
          },
        ]}
      />

      <FullBleedSplit
        image="ward"
        alt="Clean, well-equipped hospital ward"
        reverse
        tone="white"
        title={<>Potential <Hl>Risks and Complications</Hl></>}
      >
        <p>Partial knee replacement is a safe procedure, but as with any operation there are some risks to consider:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Uncommon, but may require antibiotics or further surgery.' },
            { label: 'Blood clots', text: 'Minimised with early walking and preventive medication.' },
            { label: 'Implant issues', text: 'Components can wear or loosen over time and occasionally need revision.' },
            { label: 'Arthritis in other compartments', text: 'Arthritis may progress elsewhere in the knee, sometimes requiring conversion to a total replacement.' },
          ]}
        />
      </FullBleedSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'Long-Term Outlook',
            body: 'For carefully selected patients, partial knee replacement provides lasting pain relief and a natural-feeling knee. Many implants function well for 10 to 15 years or more, and conversion to a total replacement remains an option if needed.',
          },
          {
            title: 'Is It Right for You?',
            body: 'The key is whether your arthritis is limited to one part of the knee. A consultation with Dr. Malik, including a thorough examination and X-rays, will show whether a partial or total replacement will serve you best.',
          },
        ]}
      />
    </TreatmentLayout>
  );
}
