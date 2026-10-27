// Real photos from Dr. Malik's practice (see data/gallery.js). Keys keep their original names so every
// page that uses them picks up the real photo; swap any entry for another file in /public/images.
const real = (name) => `/images/gallery/photos/${name}.jpg`;

export const IMAGES = {
  // Operating theatre & surgery
  theatre: real('img_7879'),
  theatreBright: real('img_7888'),
  surgeonsOperating: real('img_7884'),
  surgeonPortrait: real('2025_03_01_13_04_img_8040'),
  surgeonsCircle: real('2025_03_03_15_43_img_8052'),
  surgeonFocus: real('2025_03_01_13_04_img_8041'),
  surgeonGloves: real('img_7885'),

  // Hospital & clinic
  reception: real('img_7889'),
  ward: real('img_7881'),
  hospitalBuilding: real('img_7874'),

  // Imaging & consultation
  xrayHand: real('img_6503'),
  xrayReview: real('img_5280'),
  xrayReview2: real('img_6501'),
  consultElderly: real('2025_03_01_13_05_img_8043'),
  consultSmile: real('img_7886'),
  consultBed: real('img_7880'),
  consultScreen: real('2025_03_01_13_05_img_8042'),
  consultScreen2: real('2025_03_01_13_03_img_8039'),
  bloodPressure: real('img_7875'),
  laptopDoctor: real('img_5504'),
  stethoscope: real('img_6505'),

  // Rehab, injections & non-surgical care
  kneePhysio: real('img_7876'),
  wristBrace: real('img_7877'),
  injection: real('img_7878'),
  vials: real('img_6270'),
  pills: real('img_6271'),
  handsCare: real('img_7873'),

  // Active life after treatment
  stairs: real('img_5504'),
  exercise: real('img_5505'),
  yoga: real('img_6261'),
  walkField: '/images/gallery/videos/img_5487.jpg', // patient walking after surgery (video still)
  groupExercise: real('20180817_113012'),
  gym: real('20180817_113018'),

  // Treatment illustrations (implants, diagrams, X-rays) – local files in /public/images/treatments
  cardTotalHip: '/images/treatments/card-total-hip.jpg',
  cardTotalKnee: '/images/treatments/card-total-knee.jpg',
  cardPartialKnee: '/images/treatments/card-partial-knee.jpg',
  cardArthroscopy: '/images/treatments/card-arthroscopy.jpg',
  cardNonSurgical: '/images/treatments/card-non-surgical.jpg',
  totalHipImplant: '/images/treatments/total-hip.jpg',
  totalKneeDiagram: '/images/treatments/total-knee.svg',
  partialKneeDiagram: '/images/treatments/partial-knee.jpg',
  arthrosamidPack: '/images/treatments/arthrosamid.jpg',
  hipArthritisDiagram: '/images/treatments/hip-arthritis.svg',
  roboticKneeImplant: '/images/treatments/robotic-knee.jpg',
  arthroscopySurgery: '/images/treatments/knee-arthroscopy.jpg',
};

/** Resolve an image key (or a direct URL/path) to a sized src. */
export function img(keyOrUrl, width = 1200) {
  const src = IMAGES[keyOrUrl] ?? keyOrUrl;
  if (!src) return '';
  // Small slots (cards, tiles) get the 640px thumbnail instead of the full photo.
  return width <= 800 && src.startsWith('/images/gallery/photos/') ? src.replace('/photos/', '/thumbs/') : src;
}

// Real photograph of the doctor (home page and About profile).
export const DOCTOR_PHOTO = '/images/dr-khalid-rehman-malik.jpg';
