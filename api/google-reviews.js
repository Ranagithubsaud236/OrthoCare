// Vercel serverless function: live Google rating + reviews via the Places API (New).
// Env vars (Vercel → Project → Settings → Environment Variables):
//   GOOGLE_PLACES_API_KEY  – API key with "Places API (New)" enabled (required)
//   GOOGLE_PLACE_ID        – optional; if unset the place is looked up by name once per cold start
const QUERY = 'Ortho Care by Professor Dr. Khalid Rehman Malik, Orthopedic surgeon, Lahore';
const FIELDS = 'id,displayName,rating,userRatingCount,googleMapsUri,reviews';

let cachedPlaceId = process.env.GOOGLE_PLACE_ID || null;

async function findPlaceId(key) {
  const res = await fetch('https://places.googleapis.com/v1/places:searchText', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': 'places.id' },
    body: JSON.stringify({ textQuery: QUERY, languageCode: 'en', regionCode: 'PK' }),
  });
  if (!res.ok) throw new Error(`searchText ${res.status}`);
  const data = await res.json();
  return data.places?.[0]?.id ?? null;
}

export default async function handler(req, res) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) {
    res.status(503).json({ error: 'GOOGLE_PLACES_API_KEY is not configured' });
    return;
  }

  try {
    cachedPlaceId ??= await findPlaceId(key);
    if (!cachedPlaceId) throw new Error('Place not found');

    const r = await fetch(`https://places.googleapis.com/v1/places/${cachedPlaceId}?languageCode=en`, {
      headers: { 'X-Goog-Api-Key': key, 'X-Goog-FieldMask': FIELDS },
    });
    if (!r.ok) throw new Error(`place details ${r.status}`);
    const p = await r.json();

    // Cache at the edge for 6 hours; serve stale while revalidating for a day.
    res.setHeader('Cache-Control', 's-maxage=21600, stale-while-revalidate=86400');
    res.status(200).json({
      name: p.displayName?.text,
      rating: p.rating ?? null,
      count: p.userRatingCount ?? 0,
      url: p.googleMapsUri,
      reviews: (p.reviews ?? []).map((rv) => ({
        author: rv.authorAttribution?.displayName,
        authorUrl: rv.authorAttribution?.uri,
        photo: rv.authorAttribution?.photoUri,
        rating: rv.rating,
        text: rv.originalText?.text ?? rv.text?.text ?? '',
        when: rv.relativePublishTimeDescription,
        reviewUrl: rv.googleMapsUri,
      })),
      fetchedAt: new Date().toISOString(),
    });
  } catch (err) {
    res.status(502).json({ error: String(err.message || err) });
  }
}
