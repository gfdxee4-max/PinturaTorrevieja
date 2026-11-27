"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type ProjectVideoProps = {
  videoId: string;
  title: string;
  playLabel: string;
  poster: string;
  privacyEnhanced?: boolean;
};

export function ProjectVideo({ videoId, title, playLabel, poster, privacyEnhanced = false }: ProjectVideoProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-sm overflow-hidden rounded-[6px] border border-white/15 bg-black" data-project-video>
      {playing ? (
        <iframe
          src={privacyEnhanced ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0` : `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow={privacyEnhanced ? "encrypted-media; picture-in-picture; fullscreen" : "autoplay; encrypted-media; picture-in-picture; fullscreen"}
          loading={privacyEnhanced ? "lazy" : undefined}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          aria-label={`${playLabel}: ${title}`}
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white"
        >
          <Image src={poster} alt="" width={1086} height={1448} quality={95} loading="lazy" sizes="(min-width: 640px) 384px, calc(100vw - 2.5rem)" className="absolute inset-0 h-full w-full object-contain" />
          <span className="relative flex size-16 items-center justify-center rounded-full bg-redline text-white shadow-lg transition group-hover:bg-[#f00000]" aria-hidden="true">
            <Play className="ml-1 size-7" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
