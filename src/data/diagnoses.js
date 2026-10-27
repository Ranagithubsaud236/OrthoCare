// "Diagnosis" menu and pages, structured from Dr. Malik's own treatment notes.
// The menu lists only the diagnoses; each diagnosis page shows its treatment options, and `to` links an
// option to its detailed treatment page. `heading` is the page heading as [plain, highlighted].
export const DIAGNOSES = [
  {
    id: 'osteoarthritis-knee',
    heading: ['Treatment Options for', 'Knee Osteoarthritis'],
    title: 'Osteoarthritis Knee',
    image: 'cardTotalKnee',
    summary: 'Step-by-step care for knee arthritis – from medicines and injections to keyhole surgery and half or total knee replacement.',
    intro:
      'Knee osteoarthritis is treated in stages. Dr. Malik starts with the least invasive option likely to work and recommends surgery only when it offers you a clear benefit.',
    options: [
      { id: 'conservative', label: 'Conservative Treatment', to: '/treatments/non-surgical-treatment', text: 'Medicines, physiotherapy, weight management and activity advice to control pain and keep the knee moving.' },
      { id: 'injections', label: 'Intra-Articular Injections', to: '/diagnosis/intra-articular-injections', text: 'Injections directly into the knee joint – steroid, gel or Arthrosamid® – to reduce pain and inflammation.' },
      { id: 'arthroscopy', label: 'Keyhole Surgery – Arthroscopy', to: '/treatments/knee-arthroscopy', text: 'Minimally invasive surgery through small incisions to treat meniscus, cartilage and ligament problems.' },
      { id: 'uka', label: 'Half Knee Replacement (UKA)', to: '/treatments/partial-knee-replacement', text: 'Unicompartmental knee arthroplasty: only the worn part of the knee is replaced, keeping healthy bone and ligaments.' },
      { id: 'tkr-robotic', label: 'Total Knee Replacement – Robotic', to: '/treatments/robotic-total-knee-replacement', text: 'Robotic-assisted total knee replacement, planned in 3D for precise implant positioning.' },
      { id: 'tkr-conventional', label: 'Total Knee Replacement – Conventional', to: '/treatments/total-knee-replacement', text: 'Conventional total knee replacement, resurfacing the damaged joint with durable implants.' },
    ],
  },
  {
    id: 'osteoarthritis-hip',
    heading: ['Treatment Options for', 'Hip Osteoarthritis'],
    title: 'Osteoarthritis Hip',
    image: 'cardTotalHip',
    summary: 'From medicines and injections to hip arthroscopy, hemiarthroplasty and cemented or non-cemented total hip replacement.',
    intro:
      'Hip arthritis care is matched to how advanced the joint damage is, your age and your activity level – always starting with the simplest effective option.',
    options: [
      { id: 'conservative', label: 'Conservative with Medications', to: '/treatments/non-surgical-treatment', text: 'Pain-relieving and anti-inflammatory medicines with physiotherapy and lifestyle advice.' },
      { id: 'injections', label: 'Intra-Articular Injections', to: '/diagnosis/intra-articular-injections', text: 'Injections into the hip joint to settle pain and inflammation.' },
      { id: 'arthroscopy', label: 'Arthroscopic Surgery', text: 'Keyhole surgery of the hip joint through small incisions, for selected problems inside the joint.' },
      { id: 'hemiarthroplasty', label: 'Hemiarthroplasty', text: 'Partial hip replacement in which only the ball of the hip joint is replaced.' },
      { id: 'thr', label: 'Total Hip Replacement – Cemented & Non-Cemented', to: '/treatments/total-hip-replacement', text: 'Both the ball and socket are replaced. Implants are fixed either with bone cement (cemented) or by bone growing onto the implant (non-cemented); the choice depends on your bone quality and age.' },
    ],
  },
  {
    id: 'intra-articular-injections',
    heading: ['Types of', 'Joint Injections'],
    title: 'Intra-Articular Injections',
    subtitle: 'Arthrosamid® Injections',
    image: 'arthrosamidPack',
    summary: 'Steroid, gel and Arthrosamid® injections given directly into the joint to relieve arthritis pain.',
    intro:
      'Intra-articular injections place medicine directly inside the joint. They can relieve pain and help you stay active, and may delay the need for surgery.',
    options: [
      { id: 'arthrosamid', label: 'Arthrosamid® Injection', to: '/treatments/arthrosamid-injection', text: 'A hydrogel injection that cushions the arthritic knee.' },
      { id: 'steroid', label: 'Steroid Injections', text: 'Corticosteroid injections that reduce inflammation and pain inside the joint.' },
      { id: 'gel', label: 'Viscosupplement (Gel) Injections', text: 'Gel injections that supplement the joint’s natural lubricating fluid to ease stiffness and pain.' },
    ],
  },
  {
    id: 'fracture-management',
    heading: ['How Fractures', 'Are Treated'],
    title: 'Fracture Management',
    image: 'xrayReview',
    summary: 'Fracture treatment planned according to the patient’s age and the type of fracture.',
    intro: 'Every fracture is managed according to the age of the patient and the type of fracture.',
    options: [
      { id: 'by-age-and-type', label: 'According to Age & Fracture Type', text: 'Dr. Malik assesses the fracture and your age, bone quality and lifestyle before recommending treatment – non-surgical (plaster or brace) or surgical fixation.' },
    ],
  },
  {
    id: 'paediatric-orthopaedics',
    heading: ['Treating Children’s', 'Bone & Joint Conditions'],
    title: 'Paediatric Orthopaedics',
    image: 'consultScreen',
    summary: 'Care for children’s bone and joint conditions, including DDH and club foot.',
    intro: 'Children’s bone and joint conditions need treatment planned around growth. Dr. Malik treats developmental dysplasia of the hip (DDH) and club foot.',
    options: [
      { id: 'ddh-unilateral', label: 'DDH – Unilateral', text: 'Developmental dysplasia affecting one hip: treated conservatively without surgery, or with surgery when needed.' },
      { id: 'ddh-bilateral', label: 'DDH – Bilateral', text: 'Developmental dysplasia affecting both hips: treated conservatively, or with surgery when needed.' },
      { id: 'club-foot-plaster', label: 'Club Foot – Plaster Correction', text: 'Gradual correction of the foot position with a series of plaster casts.' },
      { id: 'club-foot-surgery', label: 'Club Foot – Surgery', text: 'Surgical correction when plaster treatment alone is not enough.' },
    ],
  },
  {
    id: 'tumour-surgery',
    heading: ['Our Approach to', 'Tumour Surgery'],
    title: 'Tumour Surgery',
    image: 'surgeonsCircle',
    summary: 'Bone and soft-tissue tumour surgery planned according to the condition and stage of the tumour.',
    intro: 'Tumour surgery is planned according to the condition and stage of the tumour itself.',
    options: [
      { id: 'by-condition-and-stage', label: 'According to Condition & Stage', text: 'Each tumour is assessed individually, and the surgical plan is based on its condition and stage.' },
    ],
  },
];

export const getDiagnosis = (id) => DIAGNOSES.find((d) => d.id === id);

