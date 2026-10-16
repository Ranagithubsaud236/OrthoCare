import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'Is robotic knee replacement performed by a robot?',
    a: 'No. Dr. Malik carries out the operation himself. The robotic arm is a tool that he controls, helping him follow a precise plan made from your scan and protect the surrounding soft tissues.',
  },
  {
    q: 'How soon can I walk after a robotic knee replacement?',
    a: 'Most patients stand and walk with a frame or crutches on the day of surgery or the following morning. Many manage everyday activities within six weeks, with continued improvement over the following months.',
  },
  {
    q: 'How long does a knee replacement last?',
    a: 'Modern knee replacements are very durable, and the large majority continue to work well for 15 to 20 years or more. Accurate alignment, a healthy weight and staying active all help the joint last.',
  },
  {
    q: 'Can I use my health insurance for robotic knee surgery?',
    a: 'Many policies cover joint replacement. Dr. Malik works with EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please confirm your cover with your insurer before admission.',
  },
];

export default function RoboticTotalKneeReplacement() {
  return (
    <TreatmentLayout
      slug="robotic-total-knee-replacement"
      description="Robotic total knee replacement in Lahore & Layyah by Dr. Khalid Rehman Malik: 3D planning, precise alignment, soft-tissue protection, recovery and risks."
      faqs={FAQS}
    >
      <MediaSplit contain image="roboticKneeImplant" alt="Arthritic knee shown alongside a total knee replacement implant" title={<>What is a <Hl>Total Knee Replacement</Hl>?</>}>
        <p>
          A total knee replacement resurfaces a knee that has been damaged by arthritis or injury. The worn ends of the thigh
          bone (<strong>femur</strong>) and shin bone (<strong>tibia</strong>) are removed and covered with smooth metal
          components, with a medical-grade plastic insert between them. The back of the kneecap may also be resurfaced.
        </p>
        <p>
          The operation is most often performed for <strong>osteoarthritis</strong>, but it also helps people with
          rheumatoid arthritis and knees damaged by previous injury. Its purpose is to ease pain and restore comfortable,
          reliable movement.
        </p>
      </MediaSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'What Are the Goals of Surgery?',
            body: 'The main aims are to relieve pain, correct deformity such as bow legs or knock knees, and restore a stable, well-aligned knee. Most patients find they can walk further, sleep better and return to the activities they enjoy.',
          },
          {
            title: 'Who Is Considered for Surgery?',
            body: 'Knee replacement is usually recommended when severe pain and stiffness continue despite painkillers, physiotherapy, weight management and injections – particularly when the knee limits walking, disturbs sleep or makes everyday tasks difficult.',
          },
        ]}
      />

      <FullBleedSplit
        image="theatreBright"
        alt="Bright operating theatre prepared for robotic surgery"
        tone="white"
        title={<>Understanding <Hl>Robotic-Assisted</Hl> Knee Replacement Surgery</>}
      >
        <p>
          Robotic-assisted knee replacement combines the skill of an experienced surgeon with advanced
          <strong> 3D planning and robotic guidance</strong>. Before surgery, a detailed model of your knee is created so the
          operation can be planned around your individual anatomy.
        </p>
        <p>
          During the procedure, Dr. Malik controls the robotic arm, which helps him make bone cuts exactly as planned and
          stay within safe boundaries. The system also measures how the ligaments behave as the knee bends and
          straightens, helping to achieve a <strong>balanced, natural-feeling joint</strong>.
        </p>
      </FullBleedSplit>

      <ImageCards
        title={<>How Does the <Hl>Procedure Work</Hl>?</>}
        items={[
          {
            image: 'consultScreen2',
            title: 'Preoperative Planning',
            body: 'Imaging of your knee is used to build a three-dimensional model. From this, Dr. Malik selects the best implant size and plans its position and alignment, taking into account the shape of your bones and the balance of your ligaments.',
          },
          {
            image: 'surgeonGloves',
            title: 'Surgical Procedure',
            body: 'In theatre, the robotic arm helps remove only the damaged bone and cartilage, following the plan with great accuracy. Real-time feedback allows fine adjustments to be made before the implants are fixed and the wound is closed.',
          },
        ]}
      />

      <FullBleedSplit
        image="stairs"
        alt="Person confidently climbing stairs after knee surgery"
        reverse
        tone="cream"
        title={<>Benefits of <Hl>Robotic-Assisted</Hl> Knee Replacement</>}
      >
        <p>Robotic technology offers a number of potential advantages over conventional techniques:</p>
        <FeatureList
          items={[
            { label: 'Enhanced precision', text: 'Bone cuts and implant positioning closely follow the surgical plan.' },
            { label: 'Personalised surgery', text: 'Each operation is tailored to the shape and alignment of your own knee.' },
            { label: 'Soft-tissue protection', text: 'Defined boundaries help protect the ligaments and tissues around the joint.' },
            { label: 'Faster recovery', text: 'Less tissue disturbance may mean less early pain and quicker rehabilitation.' },
            { label: 'Improved implant longevity', text: 'Accurate alignment spreads load evenly, which may help the knee last longer.' },
            { label: 'Lower risk of malposition', text: 'Real-time feedback reduces the chance of implants being placed out of alignment.' },
          ]}
        />
      </FullBleedSplit>

      <FullBleedSplit
        image="ward"
        alt="Hospital ward where patients recover after surgery"
        tone="white"
        title={<>Risks of <Hl>Robotic-Assisted</Hl> Knee Replacement</>}
      >
        <p>Complications are uncommon, but every knee replacement carries some risk, including:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Rare, but may need antibiotics or further surgery to treat.' },
            { label: 'Blood clots', text: 'Deep vein thrombosis (DVT) or, rarely, a pulmonary embolism (PE); reduced with blood thinners and early walking.' },
            { label: 'Implant issues', text: 'Over time, components can wear, loosen or become unstable.' },
            { label: 'Nerve or blood vessel damage', text: 'Injury to structures around the knee is very uncommon.' },
            { label: 'Post-surgery pain', text: 'Some patients have ongoing stiffness or discomfort despite a well-placed implant.' },
          ]}
        />
      </FullBleedSplit>

      <IntroCard title={<>Is Robotic-Assisted Knee Replacement <Hl>Right for You</Hl>?</>}>
        <p>
          Robotic-assisted knee replacement can benefit many people with advanced knee arthritis, but the right choice depends
          on your symptoms, scans, general health and expectations. Dr. Khalid Rehman Malik, who has over 25 years of
          experience in joint replacement, will assess your knee carefully and talk you through every option – surgical and
          non-surgical. Appointments are available at Horizon Hospital and Bajwa Hospital in Lahore, and Qadir Ali Hospital in
          Layyah.
        </p>
      </IntroCard>
    </TreatmentLayout>
  );
}
