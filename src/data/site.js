export const SITE = {
  brand: 'OrthoCare',
  url: 'https://drkhalidrehman.com',
  defaultTitle:
    'OrthoCare | Dr. Khalid Rehman Malik – Hip & Knee Replacement Surgeon in Lahore & Layyah',
  description:
    'Dr. Khalid Rehman Malik, Associate Professor and Consultant Orthopaedic Surgeon specialising in hip and knee replacement, robotic joint surgery and keyhole (arthroscopic) sports surgery. Clinics in Lahore, Shahdara and Layyah.',
  // Assistant's number – used for calls and WhatsApp appointment booking.
  phone: '0300-9404247',
  phoneHref: 'tel:+923009404247',
  whatsapp: '923009404247',
  locale: 'en_PK',
};

// Doctor's official social media accounts.
export const SOCIAL = [
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/p/%F0%9D%90%83%F0%9D%90%AB-%F0%9D%90%8A%F0%9D%90%A1%F0%9D%90%9A%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%9D-%F0%9D%90%91%F0%9D%90%9E%F0%9D%90%A1%F0%9D%90%A6%F0%9D%90%9A%F0%9D%90%A7-%F0%9D%90%8C%F0%9D%90%9A%F0%9D%90%A5%F0%9D%90%A2%F0%9D%90%A4-61581476383142/',
  },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/dr.khalid_rehman_official/' },
  { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/@drkhalidrehmanofficial' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@DrKhalidRehmanOfficial' },
];

export const whatsappLink = (text = 'Assalam o Alaikum, I would like to book an appointment with Dr. Khalid Rehman Malik.') =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;

export const DOCTOR = {
  name: 'Dr. Khalid Rehman Malik',
  shortName: 'Dr. Malik',
  title: 'Consultant Orthopaedic Surgeon',
  role: 'Associate Professor / Consultant Orthopaedic Surgeon',
  speciality: 'Hip & Knee Arthroplasty · Arthroscopic & Sports Surgery',
  postNominals: 'MBBS, MCPS, FCPS (Ortho)',
  credentialLine: 'CMT (UK) · AO Fellow (Germany) · FICS (USA) · FACS',
  formerRole: 'Ex-Head of Department, Fatima Jinnah Medical University, Lahore',
  experienceYears: 25,
};

export const QUALIFICATIONS = [
  { title: 'MBBS', detail: 'Nishtar Medical College, Multan' },
  { title: 'MCPS', detail: 'College of Physicians & Surgeons Pakistan' },
  { title: 'FCPS (Orthopaedic Surgery)', detail: 'College of Physicians & Surgeons Pakistan' },
  { title: 'Fellowship in Arthroplasty & Joint Reconstruction', detail: 'King Fahad Armed Forces Hospital, Jeddah, KSA' },
  { title: 'Fellowship in Arthroscopy & Sports Surgery', detail: 'King Fahad Armed Forces Hospital, Jeddah, KSA' },
  { title: 'CMT', detail: 'United Kingdom' },
  { title: 'AO Fellow', detail: 'AO Foundation, Germany' },
  { title: 'FICS', detail: 'International College of Surgeons, USA' },
  { title: 'FACS', detail: 'Fellow, American College of Surgeons' },
];

export const SPECIALISMS = [
  'Total knee replacement – robotic and conventional',
  'Half knee replacement (UKA)',
  'Total hip replacement – cemented and non-cemented',
  'Hemiarthroplasty',
  'Arthroscopic (keyhole) surgery',
  'Joint injections – steroid, gel and Arthrosamid®',
  'Fracture management',
  'Paediatric orthopaedics – DDH and club foot',
  'Tumour surgery',
];

export const LOCATIONS = [
  {
    id: 'horizon-hospital',
    name: 'Horizon Hospital',
    city: 'Lahore',
    region: 'Punjab',
    schedule: [{ days: 'Monday – Friday', time: '5:00 pm – 8:00 pm' }],
    mapQuery: 'Horizon Hospital Lahore',
    image: 'hospitalBuilding',
  },
  {
    id: 'bajwa-hospital',
    name: 'Bajwa Hospital',
    city: 'Shahdara, Lahore',
    region: 'Punjab',
    schedule: [{ days: 'Monday, Wednesday & Thursday', time: '10:00 am – 1:00 pm' }],
    mapQuery: 'Bajwa Hospital Shahdara Lahore',
    image: 'reception',
  },
  {
    id: 'qadir-ali-hospital',
    name: 'Qadir Ali Hospital',
    city: 'Layyah',
    region: 'Punjab',
    schedule: [{ days: '1st & 3rd Sunday of every month', time: '9:00 am – 3:00 pm' }],
    mapQuery: 'Qadir Ali Hospital Layyah',
    image: 'ward',
  },
];

export const mapEmbedUrl = (q) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(q)}&z=15&ie=UTF8&iwloc=&output=embed`;
export const mapDirectionsUrl = (q) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

// Panel insurers. Add a `logo` path (e.g. '/images/insurance/efu.png') to show the real logo.
export const INSURERS = [
  { name: 'EFU', full: 'EFU Insurance', color: '#0b4ea2' },
  { name: 'IGI', full: 'IGI Insurance', color: '#c8102e' },
  { name: 'Adamjee', full: 'Adamjee Insurance', color: '#003f87' },
  { name: 'Jubilee', full: 'Jubilee Insurance', color: '#d2232a' },
  { name: 'Alfalah', full: 'Alfalah Insurance', color: '#b5121b' },
  { name: 'UBL', full: 'UBL Insurers', color: '#0057a8' },
  { name: 'Askari', full: 'Askari Insurance', color: '#00704a' },
];

// Dr. Malik's private secretary / patient coordinator (About page section + About dropdown).
export const SECRETARY = {
  name: 'Miss Shumaila Jhon Khokhar',
  shortName: 'Miss Shumaila',
  role: 'Private Secretary & Patient Coordinator',
  since: 2012,
  experienceYears: 15,
  photo: '/images/team/shumaila-jhon-khokhar.jpg',
};

export const NAV = [
  { label: 'Home', to: '/' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'About Dr. Malik', to: '/about' },
      { label: 'Private Secretary – Miss Shumaila', to: '/about#private-secretary' },
      { label: 'Practice Locations', to: '/practice-locations' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  { label: 'Diagnosis', to: '/diagnosis', children: 'diagnosis' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'Insurance', to: '/insurance' },
  { label: 'Blog', to: '/blog' },
];

// Google Business Profile – the live rating and reviews come from /api/google-reviews.
export const GOOGLE_PROFILE = {
  name: 'Ortho Care by Professor Dr. Khalid Rehman Malik',
  query: 'Ortho Care by Professor Dr. Khalid Rehman Malik, Orthopedic surgeon, Lahore',
};
export const googleProfileUrl = () =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_PROFILE.query)}`;
