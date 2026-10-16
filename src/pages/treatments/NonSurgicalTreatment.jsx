import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { InfoCards, FullBleedSplit, FeatureList, TextSection } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'Can hip or knee pain be treated without surgery?',
    a: 'Yes. Many people with hip or knee pain improve with a combination of activity modification, weight management, physiotherapy, pain relief and, where appropriate, joint injections. Surgery is usually considered only when these measures no longer control symptoms.',
  },
  {
    q: 'How long does a steroid injection last?',
    a: 'The effect of a corticosteroid injection varies. Some people get relief for a few weeks, others for several months. Because repeated steroid injections may affect the joint, Dr. Malik limits how often they are given.',
  },
  {
    q: 'Is PRP effective for knee arthritis?',
    a: 'Some patients report improvement after platelet-rich plasma (PRP) injections, but the scientific evidence is still evolving. Dr. Malik will discuss whether PRP is a reasonable option for your particular condition.',
  },
  {
    q: 'Do I need a referral to see Dr. Malik for non-surgical treatment?',
    a: 'No referral is needed. You can book a consultation directly at Horizon Hospital Lahore, Bajwa Hospital Shahdara or Qadir Ali Hospital Layyah by calling 0300-9404247.',
  },
];

export default function NonSurgicalTreatment() {
  return (
    <TreatmentLayout
      slug="non-surgical-treatment"
      heroImage="kneePhysio"
      description="Non-surgical treatment for hip and knee pain in Lahore & Layyah with Dr. Khalid Rehman Malik: expert advice, physiotherapy and image-guided joint injections."
      faqs={FAQS}
    >
      <TextSection title={<>1. Advice and <Hl>Guidance</Hl></>}>
        <p>
          Not every painful hip or knee needs an operation. Many patients improve considerably with the right advice and a clear
          plan. Dr. Malik will explain what is causing your symptoms and how you can take control of them.
        </p>
        <FeatureList
          items={[
            { label: 'Activity Modification', text: 'Adjusting how you move, work and exercise to protect the joint while staying active.' },
            { label: 'Pain Management', text: 'Safe, effective use of painkillers and anti-inflammatory medicines, matched to your health needs.' },
            { label: 'Understanding Your Diagnosis', text: 'A clear explanation of your condition, its likely course and every treatment option available.' },
            { label: 'Self-Management Techniques', text: 'Practical steps such as weight management, pacing, heat or ice, and supportive footwear.' },
          ]}
        />
      </TextSection>

      <Divider />

      <TextSection title={<>2. Assessment and Referral to <Hl>Physiotherapy</Hl></>}>
        <p>
          Physiotherapy is one of the most effective non-surgical treatments for hip and knee problems. Where it is likely to
          help, Dr. Malik will refer you to an experienced physiotherapist and stay involved in your care.
        </p>
        <FeatureList
          items={[
            { label: 'What Physiotherapy Involves', text: 'A detailed assessment of movement, strength and posture, followed by hands-on treatment and exercise.' },
            { label: 'Tailored Exercise Programmes', text: 'Exercises designed around your condition and goals to strengthen the muscles that support the joint.' },
            { label: 'Progress Monitoring', text: 'Regular reviews to measure improvement and adjust your programme as your symptoms change.' },
          ]}
        />
      </TextSection>

      <Divider />

      <TextSection title={<>3. Joint Injections for <Hl>Hip and Knee Pain</Hl></>}>
        <p>
          When pain persists despite advice and physiotherapy, an injection into the joint can reduce inflammation and ease
          symptoms. Injections can also make it easier to take part in exercise and rehabilitation, which helps the benefits
          last longer.
        </p>
      </TextSection>

      <InfoCards
        columns={3}
        title={<>Types of <Hl>Joint Injections</Hl> Offered</>}
        items={[
          {
            title: 'Corticosteroid',
            body: 'A powerful anti-inflammatory that can quickly settle a painful flare of arthritis. Relief may last weeks to months, and the number of injections is limited.',
          },
          {
            title: 'Hyaluronic Acid (Viscosupplementation)',
            body: 'A gel similar to the natural joint fluid that aims to improve lubrication and shock absorption, most often used in the knee.',
          },
          {
            title: 'PRP (Platelet-Rich Plasma)',
            body: 'Prepared from a sample of your own blood to concentrate healing factors. Some patients benefit, although the evidence is still evolving.',
          },
        ]}
      />

      <TextSection title={<>The <Hl>Injection Process</Hl></>}>
        <FeatureList
          items={[
            {
              label: 'In-clinic injections',
              text: 'Many knee injections can be given in clinic in a few minutes, using a sterile technique and local anaesthetic to keep you comfortable.',
            },
            {
              label: 'Image-guided injections',
              text: 'Deeper joints such as the hip are injected under ultrasound or X-ray guidance, so the medicine is placed precisely where it is needed.',
            },
          ]}
        />
      </TextSection>

      <Divider />

      <FullBleedSplit
        image="consultElderly"
        alt="Doctor discussing treatment options with an older patient"
        tone="cream"
        title={<>Why Choose <Hl>Non-Operative Treatment</Hl>?</>}
      >
        <FeatureList
          items={[
            { label: 'Pain relief without surgery', text: 'Avoid or delay an operation while still reducing pain and stiffness.' },
            { label: 'Improved quality of life', text: 'Stay active, sleep better and keep doing the things that matter to you.' },
            { label: 'Personalised, patient-centred care', text: 'A plan built around your diagnosis, lifestyle and goals, reviewed as your needs change.' },
          ]}
        />
        <p className="mt-4">
          For knee osteoarthritis, Dr. Malik also offers the Arthrosamid® hydrogel injection – a single, long-lasting treatment
          for patients who wish to delay knee replacement surgery.
        </p>
      </FullBleedSplit>
    </TreatmentLayout>
  );
}
