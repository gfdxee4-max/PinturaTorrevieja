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
  className?: string;
};

function clamp(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt, initialPosition = 50, ariaLabel, className = "" }: BeforeAfterSliderProps) {
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
      className={`group relative isolate aspect-video w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[7px] border border-white/25 bg-black outline-none transition focus-visible:border-redline focus-visible:shadow-[0_0_0_2px_rgba(214,0,0,0.35)] ${className}`}
    >
      <Image src={afterImage} alt={afterAlt} fill draggable={false} loading="lazy" sizes="(min-width: 1536px) 1376px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)" className="pointer-events-none object-cover" />
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={beforeImage} alt={beforeAlt} fill draggable={false} loading="lazy" sizes="(min-width: 1536px) 1376px, (min-width: 768px) calc(100vw - 6rem), calc(100vw - 2.5rem)" className="pointer-events-none object-cover" />
      </div>

      <span className="pointer-events-none absolute inset-y-0 w-px bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]" style={{ left: `${position}%` }} aria-hidden="true" />
      <span className="pointer-events-none absolute top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/85 bg-[#090909]/95 text-white shadow-[0_0_0_1px_rgba(214,0,0,0.3)] transition duration-300 group-hover:border-redline group-hover:shadow-[0_0_22px_rgba(214,0,0,0.45)] group-focus-visible:border-redline sm:size-14" style={{ left: `clamp(1.5rem, ${position}%, calc(100% - 1.5rem))` }} aria-hidden="true">
        <ChevronLeft className="size-5" strokeWidth={1.5} />
        <ChevronRight className="-ml-1 size-5" strokeWidth={1.5} />
      </span>
    </div>
  );
}
