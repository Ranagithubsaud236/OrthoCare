import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'How long does a hip replacement last?',
    a: 'With modern implants and good surgical technique, around nine in ten hip replacements are still working well 20 years after surgery. Keeping a healthy weight and staying active helps your new hip last longer.',
  },
  {
    q: 'When can I walk after a hip replacement?',
    a: 'Most patients stand and take their first steps with a physiotherapist within a few hours of surgery or the next morning, using a walker or crutches for support.',
  },
  {
    q: 'Is hip replacement surgery covered by insurance?',
    a: 'Many health insurance and corporate panels cover joint replacement. Dr. Malik works with leading Pakistani insurers including EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please confirm your cover with your provider before admission.',
  },
];

export default function TotalHipReplacement() {
  return (
    <TreatmentLayout
      slug="total-hip-replacement"
      description="Total hip replacement by Dr. Khalid Rehman Malik in Lahore & Layyah: what the operation involves, who it helps, recovery timeline, risks and long-term results."
      faqs={FAQS}
    >
      <IntroCard title={<>Understanding <Hl>Total Hip Replacement</Hl>: A Patient&apos;s Guide</>}>
        <p>
          For people living with persistent hip pain from arthritis, a total hip replacement can be life-changing. It is one of
          the most successful operations in modern medicine, relieving pain and giving patients back the freedom to walk, work
          and enjoy everyday life. If you are weighing up hip surgery, this guide explains what to expect at every stage.
        </p>
      </IntroCard>

      <Divider />

      <MediaSplit contain image="totalHipImplant" alt="Total hip replacement implant fitted in the pelvis and thigh bone" title={<>What is a <Hl>Total Hip</Hl> Replacement?</>}>
        <p>
          The hip is a ball-and-socket joint. The socket (<strong>acetabulum</strong>) sits in the pelvis and the ball is the
          head of the thigh bone (<strong>femur</strong>). In a total hip replacement, both worn surfaces are removed and
          <strong> replaced with smooth, durable artificial components</strong>.
        </p>
        <p>
          The operation is most often performed for <strong>osteoarthritis</strong>, but it is also used for rheumatoid
          arthritis, avascular necrosis and hips damaged by injury. Most patients enjoy complete or near-complete pain relief, a
          <strong> better range of movement</strong> and renewed independence.
        </p>
      </MediaSplit>

      <InfoCards
        columns={2}
        items={[
          {
            title: 'What Does the Surgery Aim to Achieve?',
            body: 'The main goals are to take away arthritic pain and restore mobility. For most people the operation removes the grinding pain of a worn hip, making it possible to walk comfortably, sleep through the night and return to normal routines.',
          },
          {
            title: 'What Happens During the Procedure?',
            body: 'The damaged bone and cartilage are carefully removed and replaced with implants made of metal, ceramic and medical-grade plastic. A new ball is fixed to the top of the thigh bone and a new socket is placed in the pelvis, recreating a smooth, stable joint.',
          },
          {
            title: 'Who Is Suitable for Hip Replacement?',
            body: 'It is usually recommended when hip pain, stiffness and limited movement continue despite painkillers, physiotherapy, injections and lifestyle changes – especially when pain disturbs sleep or makes daily tasks difficult.',
          },
          {
            title: 'How Long Does the Operation Take?',
            body: 'The surgery itself takes around one to two hours, followed by a hospital stay of typically two to three days. Most patients return to everyday activities within about six weeks, while full recovery can take up to a year.',
          },
        ]}
      />

      <FullBleedSplit
        image="kneePhysio"
        alt="Physiotherapist guiding a patient through rehabilitation exercises"
        tone="white"
        title={<>How Long Is <Hl>Recovery from Hip Replacement</Hl>?</>}
      >
        <p>
          Recovery is gradual, and we encourage you to get moving early. Patients are usually helped out of bed within
          <strong> a few hours</strong> of surgery, and many go home the day after the operation once walking safely.
        </p>
        <p>
          You will use a walker or crutches at first. Most people manage around the house without them <strong>within one to
          two weeks</strong>, and by six weeks the majority are walking confidently, driving again and largely pain-free.
        </p>
        <p>
          Some stiffness and soreness around the scar is normal in the early weeks. Improvement is quickest in the
          <strong> first three months</strong>, and most patients reach their best result between six and twelve months.
        </p>
      </FullBleedSplit>

      <FullBleedSplit
        image="theatre"
        alt="Modern orthopaedic operating theatre"
        reverse
        tone="cream"
        title={<>What Are the <Hl>Risks of Hip Replacement</Hl>?</>}
      >
        <p>Every operation carries some risk. Complications after hip replacement are uncommon, but you should be aware of:</p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Rare, but an infected joint can need further treatment or surgery.' },
            { label: 'Dislocation', text: 'The new ball can slip out of the socket, mainly in the first few months.' },
            { label: 'Blood clots', text: 'Deep vein thrombosis is reduced with blood thinners and early walking.' },
            { label: 'Nerve or blood vessel injury', text: 'Damage to nearby structures is very uncommon.' },
            { label: 'Leg length difference', text: 'One leg may feel slightly longer or shorter than the other.' },
            { label: 'Persistent discomfort', text: 'A small number of patients notice occasional ache or stiffness.' },
          ]}
        />
      </FullBleedSplit>

      <ImageCards
        items={[
          {
            image: 'walkField',
            title: 'Long-Term Outlook',
            body: 'For patients with severe hip arthritis, a hip replacement can transform quality of life by easing pain and restoring mobility. With good rehabilitation, around 90% of hip replacements continue to function well for up to 20 years.',
          },
          {
            image: 'consultSmile',
            title: 'Is It the Right Choice for You?',
            body: 'Hip replacement is a major decision, but for people held back by severe pain the benefits usually outweigh the risks. A consultation with Dr. Malik will establish whether surgery is the right option for your hip and your lifestyle.',
          },
        ]}
      />
    </TreatmentLayout>
  );
}
