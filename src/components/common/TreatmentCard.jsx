import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';
import Button from './Button';

export default function TreatmentCard({ treatment, showSummary = true }) {
  const href = `/treatments/${treatment.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-xl hover:shadow-primary-900/10">
      <Link to={href} className="block overflow-hidden rounded-md" tabIndex={-1} aria-hidden="true">
        <SmartImage
          src={treatment.image}
          alt={treatment.title}
          width={600}
          className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-4">
        <h3 className="text-[15px] font-semibold text-ink">
          <Link to={href} className="transition-colors hover:text-accent-500">{treatment.title}</Link>
        </h3>
        {showSummary && <p className="mt-2 flex-1 text-sm leading-6 text-body">{treatment.short}</p>}
        <div className="mt-4 pb-1">
          <Button to={href} variant="outline" size="sm" aria-label={`Learn more about ${treatment.title}`}>
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
}
