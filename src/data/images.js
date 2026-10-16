// Stock imagery (Unsplash). Swap any entry for a local file in /public/images
// (e.g. '/images/horizon-hospital.jpg') and every page using it updates.
const unsplash = (id) => `https://images.unsplash.com/photo-${id}`;

export const IMAGES = {
  // Operating theatre & surgery
  theatre: unsplash('1516549655169-df83a0774514'),
  theatreBright: unsplash('1551076805-e1869033e561'),
  surgeonsOperating: unsplash('1551601651-2a8555f1a136'),
  surgeonPortrait: unsplash('1550831107-1553da8c8464'),
  surgeonsCircle: unsplash('1579684385127-1ef15d508118'),
  surgeonFocus: unsplash('1571772996211-2f02c9727629'),
  surgeonGloves: unsplash('1609188076864-c35269136b09'),

  // Hospital & clinic
  reception: unsplash('1519494026892-80bbd2d6fd0d'),
  ward: unsplash('1538108149393-fbbd81895907'),
  hospitalBuilding: unsplash('1586773860418-d37222d8fce3'),

  // Imaging & consultation
  xrayHand: unsplash('1530497610245-94d3c16cda28'),
  xrayReview: unsplash('1588776814546-1ffcf47267a5'),
  xrayReview2: unsplash('1581595219315-a187dd40c322'),
  consultElderly: unsplash('1576765608535-5f04d1e3f289'),
  consultSmile: unsplash('1631217868264-e5b90bb7e133'),
  consultBed: unsplash('1581056771107-24ca5f033842'),
  consultScreen: unsplash('1666214280557-f1b5022eb634'),
  consultScreen2: unsplash('1666214277657-e60f05c40b04'),
  bloodPressure: unsplash('1631815589968-fdb09a223b1e'),
  laptopDoctor: unsplash('1576091160550-2173dba999ef'),
  stethoscope: unsplash('1584982751601-97dcc096659c'),

  // Rehab, injections & non-surgical care
  kneePhysio: unsplash('1649751361457-01d3a696c7e6'),
  wristBrace: unsplash('1597764690523-15bea4c581c9'),
  injection: unsplash('1611694449252-02453c27856a'),
  vials: unsplash('1576671081837-49000212a370'),
  pills: unsplash('1607619056574-7b8d3ee536b2'),
  handsCare: unsplash('1584515933487-779824d29309'),

  // Active life after treatment
  stairs: unsplash('1476480862126-209bfaa8edc8'),
  exercise: unsplash('1571019613454-1cb2f99b2d8b'),
  yoga: unsplash('1544367567-0f2fcb009e0b'),
  walkField: unsplash('1543333995-a78aea2eee50'),
  groupExercise: unsplash('1518611012118-696072aa579a'),
  gym: unsplash('1558611848-73f7eb4001a1'),

  // Treatment illustrations (implants, diagrams, X-rays) – local files in /public/images/treatments
  cardTotalHip: '/images/treatments/card-total-hip.jpg',
  cardTotalKnee: '/images/treatments/card-total-knee.jpg',
  cardRobotic: '/images/treatments/card-robotic.jpg',
  cardPartialKnee: '/images/treatments/card-partial-knee.jpg',
  cardArthroscopy: '/images/treatments/card-arthroscopy.jpg',
  cardRevisionHip: '/images/treatments/card-revision-hip.jpg',
  cardRevisionKnee: '/images/treatments/card-revision-knee.jpg',
  cardNonSurgical: '/images/treatments/card-non-surgical.jpg',
  totalHipImplant: '/images/treatments/total-hip.jpg',
  totalKneeDiagram: '/images/treatments/total-knee.svg',
  partialKneeDiagram: '/images/treatments/partial-knee.jpg',
  arthrosamidPack: '/images/treatments/arthrosamid.jpg',
  hipArthritisDiagram: '/images/treatments/hip-arthritis.svg',
  robotSystem: '/images/treatments/robot-system.jpg',
  roboticKneeImplant: '/images/treatments/robotic-knee.jpg',
  roboticArm: '/images/treatments/robotic-partial-knee.jpg',
  arthroscopySurgery: '/images/treatments/knee-arthroscopy.jpg',
  revisionHipXray: '/images/treatments/revision-hip.jpg',
  revisionKneeImplant: '/images/treatments/revision-knee.jpg',
};

/** Resolve an image key (or a direct URL/path) to a sized src. */
export function img(keyOrUrl, width = 1200) {
  const src = IMAGES[keyOrUrl] ?? keyOrUrl;
  if (!src) return '';
  return src.startsWith('https://images.unsplash.com')
    ? `${src}?auto=format&fit=crop&w=${width}&q=75`
    : src;
}

// Real photograph of the doctor. Drop the file at this path; until then a branded placeholder is shown.
export const DOCTOR_PHOTO = '/images/dr-khalid-rehman-malik.jpg';
