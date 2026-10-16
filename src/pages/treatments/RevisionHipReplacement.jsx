import TreatmentLayout from '../../components/treatment/TreatmentLayout';
import { IntroCard, MediaSplit, InfoCards, TextSection, FeatureList } from '../../components/treatment/Blocks';
import { Hl, Divider } from '../../components/common/SectionTitle';

const FAQS = [
  {
    q: 'How do I know if my hip replacement needs revising?',
    a: 'Warning signs include new or worsening pain, a hip that feels loose or gives way, repeated dislocation, swelling, or a change in leg length. X-rays, blood tests and sometimes a joint aspiration help to confirm whether revision is needed.',
  },
  {
    q: 'Is revision hip surgery more complex than the first operation?',
    a: 'Yes. Revision surgery usually takes longer because the old implant must be removed and any bone loss rebuilt, often using specialised implants or bone grafts. It is best carried out by a surgeon experienced in complex joint reconstruction.',
  },
  {
    q: 'How long is recovery after revision hip replacement?',
    a: 'Recovery is often slower than after a first hip replacement. Most patients walk with support soon after surgery, but it can take several months to regain strength and confidence, and some may need walking aids for longer.',
  },
  {
    q: 'Does insurance cover revision hip replacement?',
    a: 'Many policies cover revision surgery when it is medically necessary. Dr. Malik works with EFU, IGI, Adamjee, Jubilee, Alfalah, UBL and Askari. Please confirm your cover with your insurer before admission.',
  },
];

export default function RevisionHipReplacement() {
  return (
    <TreatmentLayout
      slug="revision-hip-replacement"
      description="Revision hip replacement in Lahore & Layyah with Dr. Khalid Rehman Malik: when a failed, loose or infected hip implant needs replacing, plus benefits and risks."
      faqs={FAQS}
    >
      <IntroCard title={<><Hl>Revision Total Hip Replacement</Hl>: What You Need to Know</>}>
        <p>
          Hip replacement is one of the most reliable operations in orthopaedic surgery, and most artificial hips last for many
          years. Occasionally, however, a hip replacement wears out, loosens, becomes infected or simply does not work as well as
          it should. In these situations a revision operation can restore comfort and function. This page explains what
          revision surgery involves and what you can expect.
        </p>
      </IntroCard>

      <Divider />

      <MediaSplit contain image="revisionHipXray" alt="X-rays of a revision hip replacement with a long-stem implant" title={<>What is <Hl>Revision Total Hip</Hl> Replacement?</>}>
        <p>
          Revision total hip replacement is an operation to <strong>remove some or all of a previous hip implant</strong> and
          replace it with new components. Depending on the problem, only one part – such as the socket or the plastic liner –
          may need changing, or the entire joint may need to be replaced.
        </p>
        <p>
          Because the bone around an old implant is often weakened, revision surgery can involve rebuilding lost bone with
          <strong> grafts, augments or specialised revision implants</strong>. It is more demanding than a first-time hip
          replacement and calls for careful planning and experience in complex joint reconstruction – an area in which
          Dr. Malik holds fellowship training.
        </p>
      </MediaSplit>

      <Divider />

      <TextSection title={<>When is <Hl>Revision Total Hip Replacement</Hl> Considered?</>}>
        <p>Revision may be recommended for a number of reasons, including:</p>
        <FeatureList
          items={[
            { label: 'Implant failure or loosening', text: 'Over time the implant can wear or lose its fixation to the bone, causing pain and instability.' },
            { label: 'Infection', text: 'An infection around the implant may need surgery to clear it, sometimes in two stages.' },
            { label: 'Persistent pain', text: 'Ongoing pain that has a clear mechanical cause and does not settle with other treatment.' },
            { label: 'Instability or recurrent dislocation', text: 'A hip that repeatedly dislocates or feels as though it will give way.' },
            { label: 'Bone loss', text: 'Thinning of the bone around the implant (osteolysis), which can weaken support for the joint.' },
          ]}
        />
        <p>
          Before recommending surgery, Dr. Malik carries out a thorough assessment. This usually includes a detailed history
          and examination, <strong>X-rays and often a CT scan</strong>, and blood tests to look for signs of infection. In some
          cases fluid is drawn from the joint (<strong>aspiration</strong>) for laboratory testing. Complex cases are planned
          with the wider team – including anaesthetists, physicians and microbiologists where needed – so that every aspect of
          your care is prepared in advance.
        </p>
      </TextSection>

      <InfoCards
        columns={3}
        title={<>Benefits of <Hl>Revision Total Hip</Hl> Replacement</>}
        items={[
          {
            title: 'Pain Relief',
            body: 'Correcting the underlying problem – whether loosening, wear or infection – can greatly reduce or remove the pain caused by a failing hip.',
          },
          {
            title: 'Improved Function',
            body: 'A stable, well-fixed implant makes everyday tasks such as walking, sitting, dressing and climbing stairs easier and more comfortable.',
          },
          {
            title: 'Enhanced Mobility',
            body: 'With rehabilitation, many patients regain confidence on their feet and return to a more active and independent lifestyle.',
          },
        ]}
      />

      <Divider />

      <TextSection title={<>Potential <Hl>Risks and Complications</Hl></>}>
        <p>
          Revision surgery carries a somewhat higher risk than a first hip replacement because the operation is longer and more
          complex. Possible complications include:
        </p>
        <FeatureList
          items={[
            { label: 'Infection', text: 'Prevented with antibiotics and strict theatre precautions, but may require further treatment.' },
            { label: 'Blood clots', text: 'Reduced with blood-thinning medication, compression and early walking.' },
            { label: 'Implant failure', text: 'The new components may, in time, loosen or wear.' },
            { label: 'Bone loss or fracture', text: 'Weakened bone can break during or after surgery and may need additional fixation.' },
            { label: 'Nerve or blood vessel damage', text: 'Uncommon, but the risk is higher in revision surgery.' },
            { label: 'Dislocation', text: 'More likely after revision; precautions and physiotherapy help to protect the hip.' },
            { label: 'Stiffness', text: 'Some patients notice reduced movement or ongoing tightness around the hip.' },
          ]}
        />
      </TextSection>

      <Divider />

      <TextSection title={<><Hl>Conclusion</Hl></>}>
        <p>
          A failing hip replacement can be painful and worrying, but revision surgery offers a real chance to restore comfort,
          stability and independence. Success depends on an accurate diagnosis, meticulous planning and an experienced surgical
          team.
        </p>
        <p>
          If you have pain or other concerns about an existing hip replacement, Dr. Khalid Rehman Malik can review your
          symptoms and scans and explain your options. Consultations are available at Horizon Hospital and Bajwa Hospital in
          Lahore, and Qadir Ali Hospital in Layyah. Call <strong>0300-9404247</strong> to arrange an appointment.
        </p>
      </TextSection>
    </TreatmentLayout>
  );
}
