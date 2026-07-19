"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, type KeyboardEvent, type PointerEvent } from "react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  initialPosition?: number;
  ariaLabel: string;
  beforeLabel: string;
  afterLabel: string;
  className?: string;
  aspectClassName?: string;
  beforeImageClassName?: string;
  afterImageClassName?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  imageQuality?: number;
  sizes?: string;
};

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, initialPosition = 50, ariaLabel, beforeLabel, afterLabel, className = "", aspectClassName = "aspect-[4/3] sm:aspect-video lg:aspect-[3.08/1]", beforeImageClassName = "object-cover", afterImageClassName = "object-cover", beforeObjectPosition, afterObjectPosition, imageQuality, sizes = "(min-width: 1800px) 1728px, (min-width: 768px) calc(100vw - 4rem), calc(100vw - 1.5rem)" }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(clamp(initialPosition));
  const [activePointer, setActivePointer] = useState<number | null>(null);

  function updateFromPointer(event: PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    setPosition(clamp(((event.clientX - bounds.left) / bounds.width) * 100));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.setPointerCapture(event.pointerId);
    setActivePointer(event.pointerId);
    updateFromPointer(event);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (activePointer !== event.pointerId) return;
    event.preventDefault();
    updateFromPointer(event);
  }

  function releasePointer(event: PointerEvent<HTMLDivElement>) {
    if (activePointer !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    setActivePointer(null);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = event.shiftKey ? 10 : 2;
    if (event.key === "ArrowLeft") setPosition((value) => clamp(value - step));
    else if (event.key === "ArrowRight") setPosition((value) => clamp(value + step));
    else if (event.key === "Home") setPosition(0);
    else if (event.key === "End") setPosition(100);
    else return;
    event.preventDefault();
  }

  return (
    <div
      role="slider"
      tabIndex={0}
      aria-label={ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releasePointer}
      onPointerCancel={releasePointer}
      className={`group relative isolate w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[8px] border border-white/25 bg-black outline-none transition focus-visible:border-redline focus-visible:shadow-[0_0_0_2px_rgba(214,0,0,0.35)] ${aspectClassName} ${className}`}
    >
      <Image src={afterImage} alt={afterAlt} fill draggable={false} loading="lazy" quality={imageQuality} sizes={sizes} style={{ objectPosition: afterObjectPosition }} className={`pointer-events-none ${afterImageClassName}`} />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeImage} alt={beforeAlt} fill draggable={false} loading="lazy" quality={imageQuality} sizes={sizes} style={{ objectPosition: beforeObjectPosition }} className={`pointer-events-none ${beforeImageClassName}`} />
      </div>

      <span className="pointer-events-none absolute left-4 top-4 max-w-[44%] border border-white/25 border-l-[3px] border-l-redline bg-black/75 px-3 py-2 text-center text-[0.55rem] font-semibold uppercase leading-4 tracking-[0.1em] text-white/88 backdrop-blur-sm sm:left-6 sm:top-6 sm:px-5 sm:text-xs sm:tracking-[0.12em]" aria-hidden="true">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 max-w-[44%] border border-white/25 border-r-[3px] border-r-redline bg-black/75 px-3 py-2 text-center text-[0.55rem] font-semibold uppercase leading-4 tracking-[0.1em] text-white/88 backdrop-blur-sm sm:right-6 sm:top-6 sm:px-5 sm:text-xs sm:tracking-[0.12em]" aria-hidden="true">
        {afterLabel}
      </span>

      <span className="pointer-events-none absolute inset-y-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.72)]" style={{ left: `${position}%` }} aria-hidden="true" />
      <span className="pointer-events-none absolute top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/90 bg-[#090909]/95 text-white shadow-[0_0_0_1px_rgba(214,0,0,0.45),0_0_24px_rgba(0,0,0,0.75)] transition duration-300 group-hover:border-redline group-hover:shadow-[0_0_24px_rgba(214,0,0,0.45)] group-focus-visible:border-redline sm:size-16" style={{ left: `clamp(1.75rem, ${position}%, calc(100% - 1.75rem))` }} aria-hidden="true">
        <ChevronLeft className="size-5" strokeWidth={1.5} />
        <ChevronRight className="-ml-1 size-5" strokeWidth={1.5} />
      </span>
    </div>
  );
}
