export function GalleryVideoSection() {
  return (
    <section className="w-full bg-surface-container-low py-12 sm:py-16">
      <div className="site-container">
        <div className="mx-auto flex max-w-4xl flex-col gap-5">
          <div className="max-w-2xl">
            <span className="font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary">
              Video Tour
            </span>
            <h2 className="mt-2 font-headline-lg text-2xl text-on-surface sm:text-3xl">
              Experience the Hotel
            </h2>
            <p className="mt-2 font-body-md text-sm leading-relaxed text-on-surface-variant sm:text-base">
              A closer look at our rooms, celebration spaces, and hospitality.
            </p>
          </div>

          <video
            className="aspect-video w-full rounded-2xl bg-noir-charcoal object-cover shadow-xl"
            controls
            playsInline
            preload="metadata"
            poster="/images/celestal-ss-grand-hero.webp"
            aria-label="Video tour of Celestal SS Grand Hotel"
          >
            <source src="/videos/hotel-tour.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
          <p className="text-xs text-on-surface-variant">
            Add the video as <code className="rounded bg-surface-container px-1.5 py-0.5">public/videos/hotel-tour.mp4</code> to display it here.
          </p>
        </div>
      </div>
    </section>
  );
}
