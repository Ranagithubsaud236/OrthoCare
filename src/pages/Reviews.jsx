import Seo from '../components/common/Seo';
import PageHero from '../components/common/PageHero';
import Reveal from '../components/common/Reveal';
import SectionTitle, { Hl } from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import BookingBand from '../components/common/BookingBand';
import GoogleReviews from '../components/home/GoogleReviews';
import { TikTokIcon, YouTubeIcon } from '../components/common/Icons';
import { SOCIAL } from '../data/site';
import { VIDEO_REVIEWS, YOUTUBE_UPLOADS_EMBED } from '../data/reviews';

const social = (id) => SOCIAL.find((s) => s.id === id).href;
const PLATFORM = {
  tiktok: { Icon: TikTokIcon, name: 'TikTok', color: 'text-[#111]' },
  youtube: { Icon: YouTubeIcon, name: 'YouTube', color: 'text-[#FF0000]' },
};

function VideoReview({ video }) {
  const { Icon, name, color } = PLATFORM[video.platform];
  const portrait = video.platform === 'tiktok';
  return (
    <figure className={`flex w-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm ${portrait ? 'mx-auto max-w-[325px]' : ''}`}>
      <div className={`relative w-full bg-black ${portrait ? 'aspect-[9/16]' : 'aspect-video'}`}>
        <iframe
          src={video.embed}
          title={video.title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-5 py-4">
        <span className="flex min-w-0 items-center gap-2 text-sm font-semibold text-ink">
          <Icon className={`h-5 w-5 flex-none ${color}`} />
          <span className="truncate">{video.title}</span>
        </span>
        <a href={video.href} target="_blank" rel="noopener noreferrer" className="flex-none text-xs font-semibold text-accent-600 hover:underline">
          Open on {name}
        </a>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <>
      <Seo
        title="Patient Reviews"
        description="Genuine Google reviews and patient video stories for Dr. Khalid Rehman Malik, Consultant Orthopaedic Surgeon in Lahore."
        path="/reviews"
        image="surgeonsOperating"
      />
      <PageHero title="Patient Reviews" breadcrumb={[{ label: 'Reviews' }]} />

      <GoogleReviews showVideoLink={false} />

      <section className="bg-white py-16 sm:py-24">
        <div className="container-x">
          <SectionTitle eyebrow="Patient Stories">Video <Hl>Reviews</Hl></SectionTitle>
          <Reveal>
            <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-8 sm:text-[17px]">
              Meet Dr. Malik and watch patients share their recovery, then follow him on TikTok and YouTube for more success
              stories and joint-health advice.
            </p>
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-5xl items-center gap-8 lg:grid-cols-[325px_1fr]">
            {VIDEO_REVIEWS.map((v) => <VideoReview key={v.href} video={v} />)}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <div className="container-x">
          <SectionTitle eyebrow="YouTube">Latest from <Hl>Dr. Khalid Rehman</Hl></SectionTitle>
          <Reveal className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-ink/10 bg-black shadow-lg">
            <div className="relative aspect-video">
              <iframe
                src={YOUTUBE_UPLOADS_EMBED}
                title="Latest videos from Dr. Khalid Rehman on YouTube"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={social('youtube')} target="_blank" rel="noopener noreferrer" arrow={false}>
              <YouTubeIcon className="h-5 w-5" /> Subscribe on YouTube
            </Button>
            <Button href={social('tiktok')} target="_blank" rel="noopener noreferrer" variant="outline" arrow={false}>
              <TikTokIcon className="h-4 w-4" /> Follow on TikTok
            </Button>
          </div>
        </div>
      </section>

      <BookingBand heading="Ready to start your own recovery story?" />
    </>
  );
}
