import { Link, useParams } from 'react-router-dom';
import Seo from '../components/common/Seo';
import SmartImage from '../components/common/SmartImage';
import Reveal, { Stagger, StaggerItem } from '../components/common/Reveal';
import BookingBand from '../components/common/BookingBand';
import { CalendarIcon, ClockIcon, ChevronLeft, WhatsAppIcon } from '../components/common/Icons';
import { POSTS, getPost, formatDate } from '../data/blog';
import { SITE, DOCTOR } from '../data/site';
import { PostCard } from './Blog';
import NotFound from './NotFound';

function Block({ block }) {
  if (block.h) return <h2 className="mt-8 text-xl font-semibold text-primary-700">{block.h}</h2>;
  if (block.list)
    return (
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-7 marker:text-accent-500">
        {block.list.map((li) => <li key={li}>{li}</li>)}
      </ul>
    );
  return <p className="mt-3 text-[15px] leading-7">{block.p}</p>;
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);
  if (!post) return <NotFound />;

  const path = `/blog/${post.slug}`;
  const recent = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareUrl = `${SITE.url}${path}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Physician', name: DOCTOR.name, url: `${SITE.url}/about` },
    publisher: { '@type': 'Organization', name: SITE.brand },
    mainEntityOfPage: shareUrl,
  };

  return (
    <>
      <Seo title={post.title} description={post.excerpt} path={path} image={post.image} type="article" jsonLd={jsonLd} />

      <section className="bg-[#f8f9f9] py-12 sm:py-16">
        <div className="container-x max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 hover:text-accent-600">
            <ChevronLeft className="h-4 w-4" /> All articles
          </Link>
          <Reveal as="article" className="mt-5 rounded-xl border border-ink/10 bg-white p-6 shadow-sm sm:p-10">
            <div className="flex items-center gap-3 text-xs">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-600 text-xs font-bold text-white">KM</span>
              <div>
                <p className="font-medium text-ink">{DOCTOR.name}</p>
                <p className="flex items-center gap-3">
                  <span className="flex items-center gap-1"><CalendarIcon className="h-3 w-3" /> <time dateTime={post.date}>{formatDate(post.date)}</time></span>
                  <span className="flex items-center gap-1"><ClockIcon className="h-3 w-3" /> {post.readTime} min read</span>
                </p>
              </div>
            </div>
            <h1 className="mt-5 text-2xl font-semibold leading-snug sm:text-3xl">{post.title}</h1>
            <div className="mt-6 overflow-hidden rounded-lg">
              <SmartImage src={post.image} alt={post.title} eager width={1200} className="h-64 w-full object-cover sm:h-80" />
            </div>
            <div className="mt-4">
              {post.body.map((b, i) => <Block key={i} block={b} />)}
            </div>
            <p className="mt-8 rounded-lg bg-primary-50 p-4 text-xs leading-5 text-primary-800">
              This article is general information and does not replace personal medical advice. Please consult Dr. Malik about your own condition.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5 text-sm">
              <span className="font-medium text-ink">Share:</span>
              <a href={`https://wa.me/?text=${encodeURIComponent(`${post.title} ${shareUrl}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" className="text-[#25D366] hover:scale-110">
                <WhatsAppIcon className="h-5 w-5" />
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#1877f2] hover:underline">Facebook</a>
            </div>
          </Reveal>

          <h2 className="mt-14 text-lg font-semibold">Recent Posts</h2>
          <Stagger className="mt-5 grid gap-5 sm:grid-cols-3">
            {recent.map((p) => <StaggerItem key={p.slug}><PostCard post={p} /></StaggerItem>)}
          </Stagger>
        </div>
      </section>
      <BookingBand />
    </>
  );
}
