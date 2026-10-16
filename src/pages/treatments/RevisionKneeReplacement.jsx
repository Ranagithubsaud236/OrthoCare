import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, TextSection, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'What are the signs that a knee replacement may be failing?',
    a: 'Common signs include new or increasing pain, swelling, a knee that feels unstable or gives way, reduced movement, or warmth and redness that may suggest infection. These symptoms should always be assessed by an orthopaedic surgeon.',
  },
  {
    q: 'How is revision knee replacement different from the first operation?',
    a: 'Revision surgery involves removing the existing implant, dealing with any infection or bone loss, and fitting new components that are often designed specifically for revision. It is usually longer and more complex than a first knee replacement.',
  },
  {
    q: 'What is recovery like after revision knee surgery?',
    a: 'Most patients begin walking with support shortly after surgery. Recovery tends to take longer than after a first knee replacement, and a structured physiotherapy programme over several months is important for the best result.',
  },
  {
    q: 'Will my insurance cover revision knee replacement?',
    a: 'Revision surgery is often covered when medically necessary. Dr. Malik works with EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please check your policy with your insurer before admission.',
  },
];

export default function RevisionKneeReplacement() {
  return (
    <TreatmentLayout
      slug="revision-knee-replacement"
      description="Revision knee replacement in Lahore & Layyah by Dr. Khalid Rehman Malik: treating worn, loose, unstable or infected knee implants, with benefits and risks."
      faqs={FAQS}
    >
      <MediaSplit
        contain
        image="revisionKneeImplant"
        alt="Revision knee replacement implant with a long stem"
        title={<>Revision Total Knee Replacement: <Hl>What You Need to Know</Hl></>}
      >
        <p>
          Knee replacement relieves pain and restores mobility for the vast majority of patients, and most implants last for
          many years. Sometimes, though, a knee replacement wears out, loosens, becomes unstable or develops an infection.
        </p>
        <p>
          When this happens, a <strong>revision operation</strong> can correct the problem and give you a comfortable,
          working knee again. Understanding why revision is needed and what it involves will help you make an informed
          decision about your care.
        </p>
      </MediaSplit>

      <Divider />

      <IntroCard title={<>What is <Hl>Revision Total Knee Replacement</Hl>?</>}>
        <p>
          Revision total knee replacement is surgery to remove part or all of an existing knee implant and replace it with new
          components. Because the bone and ligaments around an old implant may be weakened, revision often uses specialised
          implants with stems, augments or added constraint to provide stability. It is a more complex operation than a first
          knee replacement and requires careful planning and experience in joint reconstruction.
        </p>
      </IntroCard>

      <Divider />

      <TextSection title={<>When is <Hl>Revision Total Knee Replacement</Hl> Considered?</>}>
        <p>Revision may be advised for several reasons, including:</p>
        <FeatureList
          items={[
            { label: 'Implant failure', text: 'Wear of the plastic insert or loosening of the components from the bone.' },
            { label: 'Infection', text: 'Infection around the implant, which may need surgery in one or two stages to clear.' },
            { label: 'Persistent pain', text: 'Ongoing pain with an identifiable cause that has not settled with other treatment.' },
            { label: 'Instability', text: 'A knee that feels loose, wobbly or gives way, often due to ligament imbalance or wear.' },
            { label: 'Bone loss', text: 'Loss of bone around the implant that weakens its support.' },
          ]}
        />
        <p>
          Every patient undergoes a careful assessment before revision is recommended. Dr. Malik will take a detailed history,
          examine the knee and arrange <strong>X-rays and, where needed, a CT scan</strong>. Blood tests and, in some cases,
          a sample of joint fluid (<strong>aspiration</strong>) help to rule out infection. This information is used to build a
          clear surgical plan tailored to your knee.
        </p>
      </TextSection>

      <InfoCards
        columns={3}
        title={<>Benefits of <Hl>Revision Total Knee</Hl> Replacement</>}
        items={[
          {
            title: 'Pain Relief',
            body: 'Treating the cause of the problem – whether loosening, wear, instability or infection – can significantly reduce pain.',
          },
          {
            title: 'Improved Function',
            body: 'A stable, well-aligned knee makes walking, standing up from a chair and using stairs easier and more comfortable.',
          },
          {
            title: 'Restored Mobility',
            body: 'With physiotherapy, many patients regain movement and confidence and return to a more active, independent life.',
          },
        ]}
      />

      <Divider />

      <TextSection title={<>Potential <Hl>Risks and Complications</Hl></>}>
        <p>
          As a longer and more complex procedure, revision knee surgery carries a somewhat higher risk than a first knee
          replacement. Possible complications include:
        </p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Minimised with antibiotics and strict sterile technique, but may need further treatment.' },
            { label: 'Blood clots', text: 'Reduced with blood-thinning medication and early mobilisation.' },
            { label: 'Implant failure', text: 'The new components may loosen or wear over time.' },
            { label: 'Bone fracture', text: 'Weakened bone can break during or after surgery.' },
            { label: 'Nerve or blood vessel damage', text: 'Uncommon, but slightly more likely than in first-time surgery.' },
            { label: 'Stiffness', text: 'Some patients have reduced bending or straightening of the knee.' },
            { label: 'Wound-healing problems', text: 'Scar tissue from earlier surgery can slow healing of the skin.' },
          ]}
        />
      </TextSection>

      <MediaSplit image="kneePhysio" alt="Patient doing knee rehabilitation with a physiotherapist" reverse title={<><Hl>Conclusion</Hl></>}>
        <p>
          A problem with a knee replacement can be distressing, but revision surgery offers a realistic path back to comfort and
          mobility. The best outcomes come from an accurate diagnosis, thorough planning and dedicated rehabilitation.
        </p>
        <p>
          Dr. Khalid Rehman Malik has more than 25 years of experience in hip and knee surgery and fellowship training in joint
          reconstruction. He sees patients at Horizon Hospital and Bajwa Hospital in Lahore, and Qadir Ali Hospital in Layyah.
          Call <strong>0300-9404247</strong> to book a consultation.
        </p>
      </MediaSplit>
    </TreatmentLayout>
  );
}
