import { Link } from 'react-router-dom';
import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import SmartImage from '../components/common/SmartImage';
import { Stagger, StaggerItem } from '../components/common/Reveal';
import { CalendarIcon, ClockIcon } from '../components/common/Icons';
import { POSTS, formatDate } from '../data/blog';
import { DOCTOR } from '../data/site';

export function PostCard({ post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <Link to={href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <SmartImage src={post.image} alt="" width={700} className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-600 text-[11px] font-bold text-white">KM</span>
          <div className="text-[11px] leading-4">
            <p className="font-medium text-ink">{DOCTOR.name}</p>
            <p className="flex items-center gap-2">
              <span className="flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> {formatDate(post.date)}</span>
              <span className="flex items-center gap-1"><ClockIcon className="h-3 w-3" /> {post.readTime} min read</span>
            </p>
          </div>
        </div>
        <h2 className="mt-4 text-base font-semibold leading-snug text-ink">
          <Link to={href} className="transition-colors hover:text-accent-500">{post.title}</Link>
        </h2>
        <p className="mt-2 flex-1 text-sm leading-6">{post.excerpt}</p>
        <Link to={href} className="mt-4 border-t border-ink/10 pt-3 text-sm font-semibold text-accent-600 hover:underline">
          Read article →
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  return (
    <>
      <Seo
        title="News & Blog"
        description="Patient guides from Dr. Khalid Rehman Malik on hip and knee replacement, recovery, robotic surgery, sports injuries and joint pain."
        path="/blog"
        image="laptopDoctor"
      />
      <PageHero title="News / Blog" image="laptopDoctor" breadcrumb={[{ label: 'Blog' }]} />
      <section className="bg-white py-16 sm:py-20">
        <Stagger className="container-x grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <StaggerItem key={p.slug}><PostCard post={p} /></StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
