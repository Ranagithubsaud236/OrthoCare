import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';
import Button from './Button';
import { CheckIcon } from './Icons';

/** Card for one diagnosis: image, summary and its treatment options. */
export default function DiagnosisCard({ diagnosis }) {
  const href = `/diagnosis/${diagnosis.id}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white p-3 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-accent-300 hover:shadow-xl hover:shadow-primary-900/10">
      <Link to={href} className="block overflow-hidden rounded-md" tabIndex={-1} aria-hidden="true">
        <SmartImage
          src={diagnosis.image}
          alt={diagnosis.title}
          width={600}
          className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </Link>
      <div className="flex flex-1 flex-col px-1 pt-4">
        <h3 className="text-[15px] font-semibold text-ink">
          <Link to={href} className="transition-colors hover:text-accent-500">{diagnosis.title}</Link>
        </h3>
        <p className="mt-2 text-sm leading-6 text-body">{diagnosis.summary}</p>
        <ul className="mt-3 flex-1 space-y-1.5">
          {diagnosis.options.map((o) => (
            <li key={o.id} className="flex items-start gap-2 text-[13px] leading-5">
              <CheckIcon className="mt-0.5 h-3.5 w-3.5 flex-none text-accent-500" /> {o.label}
            </li>
          ))}
        </ul>
        <div className="mt-4 pb-1">
          <Button to={href} variant="outline" size="sm" aria-label={`Learn more about ${diagnosis.title}`}>
            Learn More
          </Button>
        </div>
      </div>
    </article>
  );
}
