import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, FullBleedSplit, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'How long does an Arthrosamid injection last?',
    a: 'Arthrosamid is designed to be long-lasting. Because the gel is not broken down by the body, many patients report sustained relief from a single injection, although results vary from person to person and depend on how advanced the arthritis is.',
  },
  {
    q: 'Is the Arthrosamid injection painful?',
    a: 'The knee is numbed with local anaesthetic before the injection, so most patients feel only pressure or mild discomfort. Some aching or swelling for a few days afterwards is common and usually settles with simple pain relief.',
  },
  {
    q: 'Can I still have a knee replacement after Arthrosamid?',
    a: 'Yes. Arthrosamid does not rule out surgery in the future. If your arthritis progresses and a knee replacement becomes the better option, Dr. Malik will discuss this with you.',
  },
  {
    q: 'How soon can I walk after the injection?',
    a: 'You walk out of clinic on the same day. Dr. Malik usually advises avoiding strenuous activity for the first few days, after which most people return gradually to their normal routine.',
  },
];

export default function ArthrosamidInjection() {
  return (
    <TreatmentLayout
      slug="arthrosamid-injection"
      description="Arthrosamid® injection for knee osteoarthritis with Dr. Khalid Rehman Malik in Lahore & Layyah: a single hydrogel injection offering long-lasting relief."
      faqs={FAQS}
    >
      <MediaSplit contain image="arthrosamidPack" alt="Arthrosamid hydrogel injection pack" title={<>What is <Hl>Arthrosamid®</Hl>?</>}>
        <p>
          Arthrosamid® is a <strong>non-biodegradable polyacrylamide hydrogel</strong> used to treat knee osteoarthritis. The
          gel is made of around <strong>2.5% polyacrylamide and 97.5% water</strong>, and it is given as a{' '}
          <strong>single injection</strong> directly into the knee joint.
        </p>
        <p>
          Unlike many injections that wear off within weeks or months, Arthrosamid® is intended to provide{' '}
          <strong>long-lasting relief</strong> from pain and stiffness. It can be a valuable option for people who are not yet
          ready for a knee replacement, are not suitable for surgery, or simply wish to delay it for as long as possible.
        </p>
      </MediaSplit>

      <Divider />

      <FullBleedSplit
        image="vials"
        alt="Sterile vials used for joint injections"
        reverse
        tone="cream"
        title={<>How Does <Hl>Arthrosamid®</Hl> Work?</>}
      >
        <p>
          Once injected, the hydrogel gradually <strong>integrates with the synovial lining</strong> – the soft tissue that
          lines the inside of the knee. Over time it forms a supportive, <strong>cushioning layer</strong> within the joint,
          helping to reduce pain and stiffness during everyday movement.
        </p>
        <FeatureList
          items={[
            { label: 'Cushions the joint', text: 'Adds a soft, elastic layer that helps absorb load inside the arthritic knee.' },
            { label: 'Sustained support', text: 'The gel is not broken down by the body, so its effect is designed to last.' },
            { label: 'Improves function', text: 'Less pain and stiffness can make walking, stairs and daily tasks easier.' },
            { label: 'Long-lasting, non-surgical option', text: 'A single treatment with no incision and no hospital stay.' },
          ]}
        />
      </FullBleedSplit>

      <IntroCard title={<>Who Might Benefit from <Hl>Arthrosamid®</Hl>?</>}>
        <p>Arthrosamid® may be worth considering if you:</p>
        <FeatureList
          className="mx-auto max-w-xl text-left"
          items={[
            'Have knee pain caused by osteoarthritis that limits your daily activities.',
            'Have found little or only short-lived relief from painkillers, physiotherapy or other injections.',
            'Are not ready for a knee replacement, or would prefer to delay surgery.',
            'Have medical conditions that make major surgery less suitable for you.',
          ]}
        />
        <p className="mt-6 rounded-lg border border-accent-300 bg-accent-50 px-4 py-3 font-medium text-ink">
          Suitability is confirmed only after a clinical assessment.
        </p>
      </IntroCard>

      <Divider />

      <FullBleedSplit
        image="consultScreen"
        alt="Doctor reviewing knee imaging with a patient"
        tone="white"
        title={<>What to Expect <Hl>in Clinic</Hl></>}
      >
        <FeatureList
          items={[
            {
              label: '1. Initial consultation & assessment',
              text: 'Dr. Malik takes a full history, examines your knee and reviews your X-rays or scans. He will talk you through all of your treatment options so you can make an informed choice.',
            },
            {
              label: '2. The injection procedure',
              text: 'The knee is numbed with local anaesthetic and a few millilitres of gel are injected under ultrasound guidance. A small dressing is applied and you go home the same day.',
            },
            {
              label: '3. Aftercare & recovery',
              text: 'You will receive advice on activity for the first few days, simple pain relief if needed and gentle exercises, followed by a review appointment to check your progress.',
            },
          ]}
        />
      </FullBleedSplit>

      <MediaSplit image="walkField" alt="Older couple walking comfortably outdoors" reverse title={<>Why Choose <Hl>Arthrosamid®</Hl>?</>}>
        <p>
          For many people with knee osteoarthritis, there is a gap between simple measures that are no longer enough and a knee
          replacement they are not ready for. Arthrosamid® helps fill that gap with a <strong>single, minimally invasive
          treatment</strong> that aims to provide lasting comfort.
        </p>
        <p>
          Dr. Khalid Rehman Malik offers Arthrosamid® as part of a full range of <strong>advanced knee arthritis options</strong>{' '}
          in his practice, alongside physiotherapy, other joint injections and knee replacement surgery. His aim is always to
          recommend the treatment that best suits your knee, your health and your goals.
        </p>
      </MediaSplit>
    </TreatmentLayout>
  );
}
