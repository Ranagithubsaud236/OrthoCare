import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'How long does a knee replacement last?',
    a: 'Modern knee replacements are very durable. Most continue to work well for 15 to 20 years or longer, particularly when patients keep a healthy weight and stay active with low-impact exercise.',
  },
  {
    q: 'How long will I stay in hospital after a total knee replacement?',
    a: 'Most patients stay in hospital for two to four days. Physiotherapy starts on the day of surgery or the following morning, and you go home once you can walk safely with a frame or crutches and manage stairs.',
  },
  {
    q: 'When can I drive after knee replacement surgery?',
    a: 'Most people return to driving around six weeks after surgery, once they can bend the knee comfortably, brake firmly in an emergency and are no longer taking strong painkillers. Dr. Malik will advise you at your follow-up visit.',
  },
  {
    q: 'Is knee replacement covered by insurance?',
    a: 'Many health insurance policies and corporate panels cover joint replacement. Dr. Malik works with leading insurers including EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please confirm your cover with your provider before admission.',
  },
];

export default function TotalKneeReplacement() {
  return (
    <TreatmentLayout
      slug="total-knee-replacement"
      description="Total knee replacement in Lahore & Layyah with Dr. Khalid Rehman Malik: how the surgery works, who benefits, recovery milestones, risks and long-term results."
      faqs={FAQS}
    >
      <IntroCard title={<>Understanding <Hl>Total Knee Replacement</Hl>: What Every Patient Should Know</>}>
        <p>
          Knee arthritis can turn simple things – walking to the shops, climbing stairs, kneeling to pray – into a daily
          struggle. When pain no longer responds to medication, physiotherapy or injections, a total knee replacement can
          relieve that pain and help you move freely again. This guide explains how the operation works, what recovery looks
          like and how to decide whether it is right for you.
        </p>
      </IntroCard>

      <Divider />

      <MediaSplit contain image="totalKneeDiagram" alt="Diagram of an arthritic knee before and after total knee replacement" title={<>What is a <Hl>Total Knee</Hl> Replacement?</>}>
        <p>
          The knee is where three bones meet: the thigh bone (<strong>femur</strong>), the shin bone (<strong>tibia</strong>)
          and the kneecap (<strong>patella</strong>). Their ends are covered in smooth cartilage that lets the joint glide.
          Arthritis wears this cartilage away, leaving bone rubbing on bone.
        </p>
        <p>
          A total knee replacement is really a <strong>resurfacing operation</strong>. The damaged surfaces are trimmed away and
          capped with precisely shaped <strong>metal components</strong>, with a smooth <strong>medical-grade plastic</strong>{' '}
          spacer placed between them so the new joint bends and glides comfortably.
        </p>
      </MediaSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'What Are the Goals of Surgery?',
            body: 'The operation aims to relieve arthritic pain, correct deformity such as bow legs or knock knees, and restore enough movement for everyday life – walking, climbing stairs, sitting and standing with confidence.',
          },
          {
            title: 'Who Is Considered for Knee Replacement?',
            body: 'It is usually recommended for people with advanced arthritis whose pain, stiffness or instability persists despite painkillers, weight management, physiotherapy and injections, especially when it disturbs sleep or limits independence.',
          },
        ]}
      />

      <FullBleedSplit
        image="surgeonsOperating"
        alt="Orthopaedic surgical team performing knee replacement"
        tone="white"
        title={<>What Happens <Hl>During the Procedure</Hl>?</>}
      >
        <p>
          The operation is performed under a <strong>spinal or general anaesthetic</strong> and usually takes one to two hours.
          Dr. Malik makes an incision over the front of the knee and carefully removes the worn cartilage and a thin layer of
          bone from the femur and tibia.
        </p>
        <p>
          The metal implants are fitted to the prepared bone ends, and a plastic insert is placed between them. Where needed,
          the underside of the kneecap is also resurfaced. The ligaments are then <strong>balanced</strong> so the knee is
          stable through its full range of movement before the wound is closed.
        </p>
      </FullBleedSplit>

      <FullBleedSplit
        image="exercise"
        alt="Patient doing strengthening exercises during knee rehabilitation"
        reverse
        tone="cream"
        title={<>Recovery After <Hl>Knee Replacement</Hl></>}
      >
        <p>
          You will be encouraged to stand and walk with a physiotherapist <strong>within a day of surgery</strong>, using a
          walking frame or crutches. Early movement reduces stiffness and lowers the risk of blood clots.
        </p>
        <p>
          A daily <strong>physiotherapy programme</strong> is the key to a good result. Most patients move from a frame to
          crutches and then a stick over the first few weeks, and many are walking independently by around six weeks. Driving
          is usually possible at about <strong>six weeks</strong>, once you can bend the knee and brake safely.
        </p>
        <p>
          Swelling and some discomfort can persist for a few months. Most people return to normal daily activities within three
          months, while the knee continues to improve for up to a year.
        </p>
      </FullBleedSplit>

      <FullBleedSplit
        image="theatreBright"
        alt="Sterile orthopaedic operating theatre"
        tone="white"
        title={<>What Are the <Hl>Risks</Hl>?</>}
      >
        <p>Knee replacement is a safe, well-established operation, but like any surgery it carries some risks:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Uncommon, but a deep infection may need antibiotics or further surgery.' },
            { label: 'Blood clots', text: 'Reduced with blood-thinning medication, compression and early walking.' },
            { label: 'Stiffness', text: 'Some patients struggle to regain full bend; regular physiotherapy helps prevent this.' },
            { label: 'Implant wear or loosening', text: 'Over many years the components can wear or loosen and may need revision.' },
            { label: 'Nerve or blood vessel injury', text: 'Damage to nearby structures is rare.' },
            { label: 'Persistent pain', text: 'A minority of patients continue to have some aching despite a well-fitted implant.' },
          ]}
        />
      </FullBleedSplit>

      <ImageCards
        items={[
          {
            image: 'walkField',
            title: 'Long-Term Outlook',
            body: 'Most patients enjoy substantial pain relief and a far more active life after knee replacement. With sensible activity levels and regular follow-up, the large majority of implants last 15 to 20 years or more.',
          },
          {
            image: 'consultElderly',
            title: 'Is It Right for You?',
            body: 'If knee pain is limiting your life despite non-surgical treatment, a replacement may be the next step. Dr. Malik will examine your knee, review your X-rays and talk through every option before you decide.',
          },
        ]}
      />
    </TreatmentLayout>
  );
}
