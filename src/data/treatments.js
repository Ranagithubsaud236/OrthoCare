// Detailed treatment pages (linked from the Diagnosis menu in data/diagnoses.js; also sitemap and related links).
// Each slug has its own page component in src/pages/treatments/.
export const TREATMENTS = [
  {
    slug: 'total-hip-replacement',
    title: 'Total Hip Replacement',
    short: 'Replacing a worn, arthritic hip with a smooth artificial joint to end pain and restore movement.',
    image: 'cardTotalHip',
  },
  {
    slug: 'total-knee-replacement',
    title: 'Total Knee Replacement',
    short: 'Resurfacing a damaged knee with durable implants for lasting relief from arthritis pain.',
    image: 'cardTotalKnee',
  },
  {
    slug: 'partial-knee-replacement',
    title: 'Partial Knee Replacement',
    short: 'Replacing only the worn part of the knee, keeping healthy bone and ligaments for a natural feel.',
    image: 'cardPartialKnee',
  },
  {
    slug: 'arthrosamid-injection',
    title: 'Arthrosamid® Injection',
    short: 'A single hydrogel injection that cushions an arthritic knee and can delay the need for surgery.',
    image: 'arthrosamidPack',
  },
  {
    slug: 'robotic-total-knee-replacement',
    title: 'Robotic Total Knee Replacement',
    short: 'A 3D-planned knee replacement executed with robotic precision and soft-tissue protection.',
    image: 'roboticKneeImplant',
  },
  {
    slug: 'knee-arthroscopy',
    title: 'Knee Arthroscopy & Sports Surgery',
    short: 'Keyhole surgery to diagnose and repair meniscus, cartilage and ligament injuries.',
    image: 'cardArthroscopy',
  },
  {
    slug: 'non-surgical-treatment',
    title: 'Non-Surgical Treatment',
    short: 'Expert advice, physiotherapy and joint injections to manage hip and knee pain without surgery.',
    image: 'cardNonSurgical',
  },
];

export const getTreatment = (slug) => TREATMENTS.find((t) => t.slug === slug);
