"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { toppers as Toppers } from "@/lib/site";

type Topper = (typeof Toppers)[number];

/**
 * Trust-building topper rail.
 *  - Continuously auto-scrolls (JS, seamless loop via a duplicated track).
 *  - Pauses on hover / while dragging.
 *  - Prev / Next arrows let visitors drive it themselves.
 *  - Native touch-swipe on mobile; `data-lenis-prevent` keeps Lenis off it.
 *  - Freezes under prefers-reduced-motion.
 */
export function TopperMarquee({ items }: { items: readonly Topper[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const SPEED = 0.45; // px per frame
    const step = () => {
      if (!paused.current && el.scrollWidth > el.clientWidth) {
        el.scrollLeft += SPEED;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudge = (dir: 1 | -1) => {
    ref.current?.scrollBy({ left: dir * 600, behavior: "smooth" });
  };

  const loop = [...items, ...items];

  return (
    <div className="group/marquee relative">
      <div
        ref={ref}
        data-lenis-prevent
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onPointerDown={() => (paused.current = true)}
        onPointerUp={() => (paused.current = false)}
        className="marquee no-scrollbar flex gap-5 overflow-x-auto overscroll-x-contain px-1 py-2"
      >
        {loop.map((t, i) => (
          <TopperChip key={`${t.name}-${i}`} topper={t} hidden={i >= items.length} />
        ))}
      </div>

      {/* manual controls */}
      <button
        type="button"
        aria-label="Previous toppers"
        onClick={() => nudge(-1)}
        className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy shadow-lift backdrop-blur transition-all hover:-translate-y-1/2 hover:scale-105 hover:border-brand-teal/40 hover:text-brand-teal sm:flex"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        aria-label="Next toppers"
        onClick={() => nudge(1)}
        className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy shadow-lift backdrop-blur transition-all hover:-translate-y-1/2 hover:scale-105 hover:border-brand-teal/40 hover:text-brand-teal sm:flex"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

function TopperChip({ topper, hidden }: { topper: Topper; hidden: boolean }) {
  return (
    <div
      aria-hidden={hidden}
      className="group flex w-[176px] shrink-0 flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 pb-5 pt-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-lift"
    >
      <div className="relative h-[88px] w-[88px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-teal via-brand-teal-light to-brand-cyan p-[2.5px]">
          <div className="h-full w-full overflow-hidden rounded-full bg-white p-[2px]">
            <Image
              src={topper.photo}
              alt={topper.name}
              width={176}
              height={176}
              className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
      <p className="mt-4 font-display text-2xl font-bold text-brand-teal">{topper.score}</p>
      <p className="mt-1 text-sm font-semibold leading-tight text-slate-800">{topper.name}</p>
      <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-400">CBSE Class 10</p>
    </div>
  );
}
