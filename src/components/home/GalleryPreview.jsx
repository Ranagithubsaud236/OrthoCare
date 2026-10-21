import { Link } from 'react-router-dom';
import SectionTitle, { Hl } from '../common/SectionTitle';
import { Stagger, StaggerItem } from '../common/Reveal';
import Button from '../common/Button';
import VideoTile from '../common/VideoTile';
import { GALLERY_PHOTOS, GALLERY_VIDEOS, GALLERY_FEATURED, GALLERY_FEATURED_VIDEOS } from '../../data/gallery';

const FEATURED = GALLERY_FEATURED.map((name) => GALLERY_PHOTOS.find((p) => p.name === name)).filter(Boolean);
const VIDEOS = GALLERY_VIDEOS.filter((v) => GALLERY_FEATURED_VIDEOS.some((n) => v.src.includes(n)));

export default function GalleryPreview() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Gallery">Real Surgery, <Hl>Real Results</Hl></SectionTitle>

        <Stagger className="mx-auto mt-10 grid max-w-6xl grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {FEATURED.map((p) => (
            <StaggerItem key={p.src}>
              <Link to="/gallery" className="group block overflow-hidden rounded-lg bg-primary-50">
                <img
                  src={p.thumb}
                  alt={p.alt}
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        {VIDEOS.length > 0 && (
          <div className="mx-auto mt-6 grid max-w-6xl gap-4 sm:grid-cols-2">
            {VIDEOS.map((v) => <VideoTile key={v.src} video={v} />)}
          </div>
        )}

        <div className="mt-10 text-center">
          <Button to="/gallery">View Full Gallery</Button>
        </div>
      </div>
    </section>
  );
}
