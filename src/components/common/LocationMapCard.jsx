import { ClockIcon, MapPinIcon } from './Icons';
import Button from './Button';
import { mapEmbedUrl, mapDirectionsUrl } from '../../data/site';

/** A single hospital with its own embedded Google Map, clinic times and a directions link. */
export default function LocationMapCard({ location, mapHeight = 'h-64' }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-accent-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className={`relative ${mapHeight} overflow-hidden bg-primary-50`}>
        <iframe
          title={`Map showing ${location.name}, ${location.city}`}
          src={mapEmbedUrl(location.mapQuery)}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-accent-600">{location.name}</h3>
        <p className="mt-1 flex items-center gap-2 text-sm text-ink">
          <MapPinIcon className="h-4 w-4 text-primary-500" /> {location.city}
        </p>
        <div className="mt-3 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600">Clinic times</p>
          {location.schedule.map((s) => (
            <p key={s.days} className="flex items-start gap-2 text-sm">
              <ClockIcon className="mt-0.5 h-4 w-4 flex-none text-accent-500" />
              <span><strong className="font-medium text-ink">{s.days}</strong> · {s.time}</span>
            </p>
          ))}
        </div>
        <div className="mt-auto pt-5">
          <Button href={mapDirectionsUrl(location.mapQuery)} target="_blank" rel="noopener noreferrer" variant="outline" size="sm">
            Get Directions
          </Button>
        </div>
      </div>
    </article>
  );
}
