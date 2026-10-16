import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'Does the robot perform the operation?',
    a: 'No. Dr. Malik performs the operation himself throughout. The robotic arm is a precision tool that follows a plan he has made from your CT scan, helping him prepare the bone and position the implants with a very high degree of accuracy.',
  },
  {
    q: 'Is recovery different after a robotic hip replacement?',
    a: 'Recovery follows a similar path to a conventional hip replacement. Most patients walk with support within a day of surgery, go home after a short hospital stay and return to everyday activities within around six weeks, supported by physiotherapy.',
  },
  {
    q: 'Why do I need a CT scan before robotic hip surgery?',
    a: 'The CT scan is used to build a three-dimensional model of your hip. This allows the implant size, angle and position to be planned in detail before the operation, so the surgery can be tailored to your anatomy.',
  },
  {
    q: 'Is robotic hip replacement covered by insurance?',
    a: 'Cover depends on your policy. Dr. Malik works with leading Pakistani insurers including EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please check the details of your cover with your provider before admission.',
  },
];

export default function RoboticTotalHipReplacement() {
  return (
    <TreatmentLayout
      slug="robotic-total-hip-replacement"
      description="Robotic total hip replacement in Lahore & Layyah with Dr. Khalid Rehman Malik: CT-based 3D planning, precise implant placement, benefits, risks and recovery."
      faqs={FAQS}
    >
      <IntroCard title={<><Hl>Introduction</Hl></>}>
        <p>
          Hip pain can slowly take over daily life – making walking, climbing stairs, sleeping and even putting on shoes a
          struggle. When arthritis has worn the joint beyond the help of simpler treatments, hip replacement offers lasting
          relief. Robotic-assisted technology adds a new level of precision, helping Dr. Malik plan and carry out your
          operation with exceptional accuracy so the new joint fits your body as closely as possible.
        </p>
      </IntroCard>

      <MediaSplit contain image="hipArthritisDiagram" alt="Diagram comparing a normal hip joint with an arthritic hip" title={<>What is <Hl>Arthritis</Hl>?</>}>
        <p>
          Arthritis describes inflammation and damage within a joint. The most common form is <strong>osteoarthritis</strong>,
          in which the smooth cartilage that covers the ends of the bones gradually thins and wears away.
        </p>
        <p>
          As the cartilage is lost, the bones begin to rub against each other, causing <strong>pain, stiffness and
          swelling</strong>. Over time the joint may develop bony spurs and lose its normal shape, making movement
          increasingly difficult. Osteoarthritis usually develops with age, but previous injury, childhood hip conditions and
          inflammatory diseases such as rheumatoid arthritis can also damage the hip.
        </p>
      </MediaSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'Anatomy of the Hip Joint',
            body: 'The hip is a ball-and-socket joint. The ball is the rounded head of the thigh bone (femur), which fits into a cup-shaped socket in the pelvis (acetabulum). Both surfaces are lined with slippery cartilage, allowing the joint to move smoothly while carrying the weight of the body.',
          },
          {
            title: 'Symptoms of Hip Arthritis',
            body: (
              <ul className="space-y-1">
                <li>Pain in the groin, thigh, buttock or knee</li>
                <li>Stiffness, especially in the morning or after rest</li>
                <li>Reduced range of movement</li>
                <li>A limp or difficulty walking longer distances</li>
                <li>Grinding or catching inside the joint</li>
                <li>Pain at night that disturbs sleep</li>
              </ul>
            ),
          },
        ]}
      />

      <FullBleedSplit
        image="consultScreen"
        alt="Surgeon discussing treatment options with a patient"
        tone="white"
        title={<>When is <Hl>Hip Replacement Surgery</Hl> Recommended?</>}
      >
        <p>
          Hip replacement is usually considered when arthritis pain and stiffness continue despite painkillers,
          physiotherapy, weight management, walking aids or injections.
        </p>
        <p>
          It may be the right time if pain <strong>disturbs your sleep</strong>, limits how far you can walk, or makes
          everyday tasks such as dressing, bathing and using stairs difficult. X-rays showing advanced joint damage help to
          confirm the decision.
        </p>
        <p>
          There is no strict age limit. What matters most is how much the hip affects your quality of life and your
          general health – something Dr. Malik will assess carefully with you.
        </p>
      </FullBleedSplit>

      <MediaSplit
        contain
        image="robotSystem"
        alt="Robotic-arm system used for robotic-assisted hip replacement"
        reverse
        title={<>What is <Hl>Robotic-Assisted</Hl> Hip Replacement?</>}
      >
        <p>
          Robotic-assisted hip replacement is an advanced form of total hip replacement. It uses a detailed
          <strong> CT-based plan</strong> and a surgeon-controlled robotic arm to help prepare the bone and place the
          implants exactly where they have been planned.
        </p>
        <p>
          The robot does not operate on its own. Dr. Malik remains in control at every step, while the system provides
          <strong> real-time guidance</strong> and keeps instruments within precise boundaries. The result is a highly
          accurate, individualised operation.
        </p>
      </MediaSplit>

      <ImageCards
        title={<>How Does the <Hl>Procedure Work</Hl>?</>}
        items={[
          {
            image: 'laptopDoctor',
            title: 'Preoperative Planning',
            body: 'A CT scan of your hip is taken before surgery and converted into a three-dimensional model. Using this model, Dr. Malik plans the ideal implant size, angle and position for your anatomy, aiming to restore natural leg length and joint mechanics.',
          },
          {
            image: 'surgeonFocus',
            title: 'Surgical Procedure',
            body: 'In theatre, the robotic arm guides the preparation of the socket and the placement of the cup according to the plan. The system gives real-time feedback on position and alignment, allowing fine adjustments to be made before the final implants are fixed.',
          },
        ]}
      />

      <FullBleedSplit
        image="walkField"
        alt="Patient enjoying an active walk after hip surgery"
        reverse
        tone="cream"
        title={<>Benefits of <Hl>Robotic-Assisted</Hl> Hip Replacement</>}
      >
        <p>Combining careful planning with robotic guidance offers several potential advantages:</p>
        <FeatureList
          items={[
            { label: 'Enhanced precision', text: 'Bone preparation and implant placement follow the plan to within very fine margins.' },
            { label: 'Personalised surgery', text: 'Each operation is planned around your own anatomy rather than average measurements.' },
            { label: 'Leg length and stability', text: 'Accurate positioning helps to balance leg length and reduce the risk of dislocation.' },
            { label: 'Improved implant longevity', text: 'Well-aligned components share load evenly, which may help the new hip last longer.' },
          ]}
        />
      </FullBleedSplit>

      <FullBleedSplit
        image="theatre"
        alt="Modern orthopaedic operating theatre"
        tone="white"
        title={<>Risks of <Hl>Robotic Total Hip Replacement</Hl></>}
      >
        <p>Robotic surgery is very safe, but like any hip replacement it carries some risks:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Uncommon, but may require antibiotics or further surgery.' },
            { label: 'Blood clots', text: 'Reduced with blood-thinning medication and early mobilisation.' },
            { label: 'Dislocation', text: 'Possible in the early months while the tissues heal.' },
            { label: 'Nerve or blood vessel injury', text: 'Rare damage to structures around the hip.' },
            { label: 'Leg length difference', text: 'Minimised by planning, but a small difference can occur.' },
            { label: 'Implant wear or loosening', text: 'Over many years, components may wear and need revision.' },
          ]}
        />
      </FullBleedSplit>

      <MediaSplit
        image="consultSmile"
        alt="Dr. Malik consulting with a patient"
        reverse
        title={<>Is Robotic-Assisted Hip Replacement <Hl>Right for You</Hl>?</>}
      >
        <p>
          Robotic-assisted surgery is suitable for many people who need a hip replacement, including those with complex
          anatomy or previous hip problems. Whether it is the best option depends on your symptoms, scans, general health
          and goals.
        </p>
        <p>
          With more than 25 years of experience in hip and knee replacement in Pakistan and abroad, Dr. Khalid Rehman Malik
          will review your case in detail and explain all of your options. Consultations are available at Horizon Hospital
          and Bajwa Hospital in Lahore, and Qadir Ali Hospital in Layyah.
        </p>
      </MediaSplit>
    </TreatmentLayout>
  );
}
