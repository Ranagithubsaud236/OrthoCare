import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'Does the robot perform the operation?',
    a: 'No. Dr. Malik performs the surgery throughout. The robotic arm is a precision tool that follows a plan he creates from your CT scan, and it keeps the cutting instrument within set boundaries to protect healthy tissue.',
  },
  {
    q: 'Why do I need a CT scan before robotic partial knee replacement?',
    a: 'The CT scan is used to build a 3D model of your knee. This allows the size, position and alignment of the implant to be planned precisely before surgery, so the operation can be tailored to your anatomy.',
  },
  {
    q: 'How long is recovery after robotic partial knee replacement?',
    a: 'Most patients walk with support on the day of surgery or the next day and go home within one to two days. Many return to normal daily activities within a few weeks, with continued improvement over the following months.',
  },
  {
    q: 'Is robotic knee surgery covered by insurance?',
    a: 'Cover depends on your policy. Dr. Malik works with insurers including EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please confirm with your provider whether robotic-assisted surgery is included before admission.',
  },
];

export default function RoboticPartialKneeReplacement() {
  return (
    <TreatmentLayout
      slug="robotic-partial-knee-replacement"
      description="Robotic partial knee replacement in Lahore & Layyah by Dr. Khalid Rehman Malik: CT-planned, robot-guided precision that protects healthy knee tissue."
      faqs={FAQS}
    >
      <MediaSplit
        image="roboticArm"
        alt="Surgeon guiding a robotic arm during partial knee replacement"
        title={<>What is <Hl>Robotic-Assisted</Hl> Partial Knee Replacement?</>}
      >
        <p>
          Robotic-assisted partial knee replacement combines the benefits of a partial replacement with the accuracy of modern
          technology. Before surgery, a <strong>CT scan</strong> of your knee is used to create a detailed
          <strong> 3D plan</strong>, allowing Dr. Malik to choose the ideal implant size, position and alignment for your
          anatomy.
        </p>
        <p>
          During the operation, Dr. Malik guides a <strong>robotic arm</strong> that follows this plan. Pre-set
          <strong> haptic boundaries</strong> stop the instrument from straying outside the area being treated, helping to
          protect healthy bone, cartilage and ligaments.
        </p>
      </MediaSplit>

      <Divider />

      <IntroCard title={<>Who is a <Hl>Candidate</Hl> for Robotic-Assisted Partial Knee Replacement?</>}>
        <p>
          This procedure suits people whose arthritis is <strong>limited to one compartment</strong> of the knee – the inner,
          outer or kneecap area – and whose pain persists despite medication, physiotherapy or injections. Candidates usually
          have healthy ligaments and a knee that still moves reasonably well. Dr. Malik will assess your knee, X-rays and CT
          scan to confirm whether a robotic partial replacement is the right choice.
        </p>
      </IntroCard>

      <Divider />

      <FullBleedSplit
        image="theatreBright"
        alt="Modern operating theatre equipped for robotic surgery"
        tone="cream"
        title={<>Main <Hl>Benefits</Hl></>}
      >
        <p>Robotic assistance adds an extra layer of accuracy to an already bone-preserving operation:</p>
        <FeatureList
          items={[
            { label: 'Preserves natural knee function', text: 'Only the damaged compartment is resurfaced, keeping healthy tissue and ligaments.' },
            { label: 'Enhanced precision', text: 'Implants are positioned to a detailed 3D plan tailored to your knee.' },
            { label: 'Minimally invasive', text: 'A smaller incision and less disturbance to the surrounding tissues.' },
            { label: 'Quicker recovery', text: 'Many patients go home within a day or two and return to routines sooner.' },
            { label: 'Reduced pain and better range of motion', text: 'Less tissue trauma often means a more comfortable recovery and natural movement.' },
          ]}
        />
      </FullBleedSplit>

      <ImageCards
        items={[
          {
            image: 'surgeonsOperating',
            title: 'The Surgical Procedure',
            body: 'Under a spinal or general anaesthetic, Dr. Malik confirms the 3D plan against your knee, then uses the robotic arm to remove only the worn surfaces before fitting the implants. Balance and movement are checked carefully before the small incision is closed.',
          },
          {
            image: 'yoga',
            title: 'Recovery and Rehabilitation',
            body: 'You will usually walk with support on the day of surgery or the next morning. Physiotherapy begins straight away to build strength and movement, and most patients return home within one to two days and resume everyday activities within a few weeks.',
          },
        ]}
      />

      <FullBleedSplit
        image="bloodPressure"
        alt="Patient having routine checks during hospital recovery"
        reverse
        tone="white"
        title={<>Potential <Hl>Risks and Complications</Hl></>}
      >
        <p>Robotic assistance improves accuracy, but the usual risks of joint surgery still apply:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Uncommon, but may need antibiotics or further surgery.' },
            { label: 'Blood clots', text: 'Reduced with early walking and preventive medication.' },
            { label: 'Implant issues', text: 'Components may wear or loosen over time and occasionally need revision.' },
            { label: 'Arthritis progression', text: 'Arthritis can develop in other parts of the knee, sometimes requiring a total replacement later.' },
            { label: 'Pin-site discomfort', text: 'Small tracking pins used by the robotic system can occasionally cause local soreness.' },
          ]}
        />
      </FullBleedSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'Long-Term Outlook',
            body: 'For suitable patients, robotic partial knee replacement offers lasting pain relief and a knee that feels natural. Accurate implant positioning supports good long-term function, and conversion to a total replacement remains possible if ever needed.',
          },
          {
            title: 'Is It Right for You?',
            body: 'If arthritis affects only one part of your knee and is limiting your life, this may be an excellent option. Book a consultation with Dr. Malik to discuss your scans, your goals and whether robotic surgery suits you.',
          },
        ]}
      />
    </TreatmentLayout>
  );
}
