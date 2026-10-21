/** Click-to-play video with poster; nothing downloads until the visitor presses play. */
export default function VideoTile({ video }) {
  return (
    <figure className="overflow-hidden rounded-xl border border-ink/10 bg-primary-950 shadow-sm">
      <video
        src={video.src}
        poster={video.poster}
        controls
        playsInline
        preload="none"
        className={`w-full bg-black object-contain ${video.h > video.w ? 'aspect-[9/16] max-h-[560px]' : 'aspect-video'}`}
      />
    </figure>
  );
}
