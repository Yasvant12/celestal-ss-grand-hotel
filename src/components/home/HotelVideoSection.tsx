"use client";

import { useRef, useState } from "react";

export function HotelVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(9 / 16);
  const [playbackError, setPlaybackError] = useState("");

  const handleVideoLoadedMetadata = () => {
    const video = videoRef.current;
    if (video && video.videoWidth > 0 && video.videoHeight > 0) {
      setAspectRatio(video.videoWidth / video.videoHeight);
    }
  };

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) {
      setPlaybackError("The video player is unavailable. Please refresh and try again.");
      return;
    }

    setPlaybackError("");
    void video.play().catch(() => {
      setPlaybackError("Video playback could not start. Please try again.");
    });
  };

  return (
    <section className="w-full bg-surface-container-low py-space-3xl">
      <div className="site-container grid items-center gap-space-2xl md:grid-cols-2">
        <div
          className="relative mx-auto w-full max-w-xs overflow-hidden rounded-xl border border-outline-variant/50 bg-surface shadow-xl"
          style={{ aspectRatio }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            controls
            playsInline
            preload="metadata"
            poster="/images/hotel-walkthrough-poster.jpg"
            aria-label="Video tour of Celestial SS Grand Hotel"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            onLoadedMetadata={handleVideoLoadedMetadata}
          >
            <source src="/videos/celestial-ss-grand.mp4" type="video/mp4" />
            Your browser does not support the video element.
          </video>
          {!isPlaying && (
            <button
              type="button"
              onClick={handlePlay}
              aria-label="Play hotel walkthrough video"
              className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-primary/95 text-white shadow-xl transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="material-symbols-outlined text-[48px]" aria-hidden="true">
                play_arrow
              </span>
            </button>
          )}
        </div>

        <div className="flex flex-col items-start gap-space-md">
          <div className="inline-flex items-center gap-2 font-eyebrow-luxury text-eyebrow-luxury uppercase tracking-widest text-primary">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              videocam
            </span>
            Hotel walkthrough
          </div>
          <h2 className="font-headline-lg text-3xl leading-tight text-on-surface sm:text-4xl">
            Take a walkthrough of Celestial SS Grand
          </h2>
          <p className="max-w-xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Get a feel for Celestial SS Grand before you arrive. This walkthrough offers a glimpse of the hotel and its celebration spaces.
          </p>
          <p className="max-w-xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Planning a stay or a special celebration? Press play to explore at your own pace and start picturing your visit.
          </p>
          {playbackError && (
            <p className="font-body-md text-sm text-error" role="status">
              {playbackError}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
