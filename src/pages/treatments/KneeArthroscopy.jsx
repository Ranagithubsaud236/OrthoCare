import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, FullBleedSplit, ImageCards, FeatureList, TextSection, Section } from '../../components/treatment/Blocks';
import SectionTitle, { Hl, Divider } from '../../components/common/SectionTitle';
import Reveal from '../../components/common/Reveal';

const FAQS = [
  {
    q: 'How long does knee arthroscopy take?',
    a: 'Most arthroscopic procedures take between 30 minutes and an hour, depending on what needs to be repaired. Ligament reconstruction usually takes longer. Most patients go home the same day.',
  },
  {
    q: 'How long is recovery after knee arthroscopy?',
    a: 'After a simple procedure such as a partial meniscectomy, many people are back to light activities within a few weeks. Meniscal repair, cartilage procedures and ACL reconstruction need a longer, structured rehabilitation programme, often several months before returning to sport.',
  },
  {
    q: 'Can arthroscopy help knee arthritis?',
    a: 'Arthroscopy is generally not helpful for established knee arthritis. It works best for specific mechanical problems such as meniscal tears, loose bodies, cartilage defects and ligament injuries.',
  },
  {
    q: 'Does Dr. Malik perform ACL reconstruction himself?',
    a: 'Yes. Dr. Khalid Rehman Malik holds a Fellowship in Arthroscopy and Sports Surgery and personally performs arthroscopic ACL and other ligament reconstructions.',
  },
];

const INDICATIONS = [
  ['Meniscal tear', 'Meniscal repair or partial meniscectomy'],
  ['Osteochondral defect', 'Microfracture or chondroplasty'],
  ['Loose bodies', 'Arthroscopic removal'],
  ['ACL rupture', 'Arthroscopic ACL reconstruction'],
  ['Recurrent kneecap dislocation', 'MPFL reconstruction'],
];

export default function KneeArthroscopy() {
  return (
    <TreatmentLayout
      slug="knee-arthroscopy"
      description="Knee arthroscopy and sports surgery in Lahore & Layyah with Dr. Khalid Rehman Malik: keyhole repair of meniscus, cartilage and ACL ligament injuries."
      faqs={FAQS}
    >
      <MediaSplit image="arthroscopySurgery" alt="Surgeon performing keyhole arthroscopic knee surgery" title={<>Knee <Hl>Arthroscopy</Hl></>}>
        <p>
          Knee arthroscopy is a form of <strong>keyhole surgery</strong> that allows the surgeon to look inside the knee and
          treat problems through a few small incisions, rather than one large cut. A slim camera called an{' '}
          <strong>arthroscope</strong> is inserted into the joint, and fine instruments are passed through separate small
          openings to carry out the repair.
        </p>
        <p>
          Because the incisions are so small, patients usually experience <strong>less pain, less scarring and a quicker
          recovery</strong> than with traditional open surgery.
        </p>
      </MediaSplit>

      <Divider />

      <FullBleedSplit
        image="xrayReview2"
        alt="Surgeon reviewing knee imaging"
        reverse
        tone="cream"
        title={<>What Is <Hl>Knee Arthroscopy</Hl> Used For?</>}
      >
        <p>Arthroscopy can be used both to diagnose and to treat a range of knee problems, including:</p>
        <FeatureList
          items={[
            { label: 'Meniscal tears', text: 'Damage to the C-shaped cartilage cushions that cause pain, catching or locking.' },
            { label: 'Cartilage & osteochondral lesions', text: 'Areas of damaged joint surface, often following injury.' },
            { label: 'Loose bodies', text: 'Fragments of bone or cartilage floating in the joint that can cause the knee to lock.' },
            { label: 'Ligament injuries', text: 'Including tears of the anterior cruciate ligament (ACL).' },
          ]}
        />
        <p className="mt-4">
          Please note that arthroscopy is <strong>generally not helpful for established arthritis</strong>. For worn knees,
          other treatments are usually more effective.
        </p>
      </FullBleedSplit>

      <IntroCard title={<>Who Might Benefit from <Hl>Knee Arthroscopy</Hl>?</>}>
        <p>
          Arthroscopy may be recommended if you have knee pain, swelling, locking, catching or giving way that has not settled
          with rest, physiotherapy and other simple measures – particularly after a twisting or sporting injury. A careful
          examination and an MRI scan help Dr. Malik decide whether keyhole surgery is likely to help you.
        </p>
      </IntroCard>

      <Divider />

      <ImageCards
        columns={3}
        title={<>Types of <Hl>Arthroscopic Procedures</Hl> Offered</>}
        items={[
          {
            image: 'consultScreen',
            title: 'Diagnostic Arthroscopy',
            body: 'A look inside the knee to confirm the cause of symptoms when scans and examination leave questions unanswered.',
          },
          {
            image: 'surgeonFocus',
            title: 'Meniscal Repair & Partial Meniscectomy',
            body: 'Stitching a torn meniscus where possible to preserve it, or carefully trimming away a torn section that cannot heal.',
          },
          {
            image: 'xrayReview',
            title: 'Chondroplasty',
            body: 'Smoothing rough or unstable cartilage to reduce pain, catching and further wear of the joint surface.',
          },
          {
            image: 'surgeonGloves',
            title: 'Microfracture',
            body: 'Creating tiny holes in the bone beneath a cartilage defect to encourage new repair tissue to form.',
          },
          {
            image: 'surgeonsOperating',
            title: 'ACL / Ligament Reconstruction',
            body: 'Replacing a torn ligament with a graft to restore stability, so the knee can cope with sport and twisting movements.',
          },
        ]}
      />

      <FullBleedSplit
        image="theatre"
        alt="Operating theatre prepared for arthroscopic surgery"
        tone="orange"
        title="The Knee Arthroscopy Procedure"
      >
        <p>
          The operation is carried out under <strong>general or spinal anaesthetic</strong>. Two or three small incisions are
          made around the knee, and the arthroscope sends a magnified image of the inside of the joint to a{' '}
          <strong>monitor in theatre</strong>.
        </p>
        <p>
          Using this view, Dr. Malik examines the joint thoroughly and carries out the necessary repair with specialised
          instruments. The incisions are then closed with stitches or adhesive strips and covered with a dressing.
        </p>
        <p>
          <strong>Most patients go home the same day</strong>, once they have recovered from the anaesthetic and are walking
          safely.
        </p>
      </FullBleedSplit>

      <InfoCards
        columns={4}
        title={<>Recovery After <Hl>Knee Arthroscopy</Hl></>}
        items={[
          {
            title: 'Mobility',
            body: 'Most people walk on the day of surgery, sometimes with crutches for a short time. Some repairs need a brace or limited weight-bearing at first.',
          },
          {
            title: 'Physiotherapy',
            body: 'A tailored exercise programme restores movement and strength, and is essential after meniscal repair or ligament reconstruction.',
          },
          {
            title: 'Pain Management',
            body: 'Discomfort is usually modest and controlled with simple painkillers, ice, elevation and rest in the first few days.',
          },
          {
            title: 'Return to Activity/Sport',
            body: 'Light activities often resume within weeks. Return to sport depends on the procedure and may take several months after reconstruction.',
          },
        ]}
      />

      <Section>
        <div className="container-x">
          <SectionTitle>Common Indications for <Hl>Arthroscopic Procedures</Hl></SectionTitle>
          <Reveal className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-accent-300 bg-white shadow-sm">
            <table className="w-full text-left text-[15px]">
              <thead className="bg-accent-50">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">Condition</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">Arthroscopic Treatment</th>
                </tr>
              </thead>
              <tbody>
                {INDICATIONS.map(([condition, treatment]) => (
                  <tr key={condition} className="border-t border-accent-100">
                    <td className="px-5 py-4 font-medium text-ink">{condition}</td>
                    <td className="px-5 py-4 text-body">{treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Section>

      <Divider />

      <MediaSplit image="gym" alt="Athlete training during sports rehabilitation" reverse title={<>Ligament Reconstruction for <Hl>Sports Injuries</Hl></>}>
        <p>
          Dr. Khalid Rehman Malik completed a <strong>Fellowship in Arthroscopy and Sports Surgery</strong> at King Fahad Armed
          Forces Hospital, Jeddah, and personally performs arthroscopic ligament reconstruction – from isolated{' '}
          <strong>ACL reconstruction</strong> to more complex <strong>multi-ligament</strong> knee injuries.
        </p>
        <p>
          Surgery is only the first step. Each patient follows a structured <strong>return-to-sport rehabilitation</strong>{' '}
          programme, progressing from regaining movement and strength to agility and sport-specific training, so the knee is
          ready before you return to play.
        </p>
      </MediaSplit>

      <TextSection title={<>Getting Back to an <Hl>Active Life</Hl></>} bg="cream">
        <p>
          Whether you have a painful meniscal tear, a cartilage injury or an unstable knee after an ACL rupture, keyhole surgery
          can often restore comfort and confidence with a faster recovery than open surgery. If your knee is holding you back,
          book a consultation with Dr. Malik to find out whether arthroscopy is the right option for you.
        </p>
      </TextSection>
    </TreatmentLayout>
  );
}
