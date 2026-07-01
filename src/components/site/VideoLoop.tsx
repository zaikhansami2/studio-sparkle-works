// Full-width autoplay video loop. Drop your MP4 at /public/hero-loop.mp4.
export function VideoLoop() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative aspect-video w-full">
        <video
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/hero-loop-poster.jpg"
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* subtle top/bottom fade to blend with the page */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>
    </section>
  );
}
