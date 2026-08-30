import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
};

export function BeforeAfterSlider({ before, after, beforeAlt, afterAlt }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      e.preventDefault();
      setFromClientX(e.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [setFromClientX]);

  const startDrag = (clientX: number) => {
    draggingRef.current = true;
    setFromClientX(clientX);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-4/3 w-full touch-none select-none overflow-hidden bg-charcoal sm:aspect-16/10"
      onPointerDown={(e) => startDrag(e.clientX)}
    >
      {/* AFTER (base layer) */}
      <img
        src={after}
        alt={afterAlt ?? "After roofing work"}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* BEFORE (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={before}
          alt={beforeAlt ?? "Before roofing work"}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 bg-charcoal-deep/85 px-3 py-1.5 font-display text-[0.7rem] uppercase tracking-[0.25em] text-on-dark">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 bg-metal px-3 py-1.5 font-display text-[0.7rem] uppercase tracking-[0.25em] text-accent-foreground">
        After
      </span>

      {/* Divider */}
      <div
        className="pointer-events-none absolute inset-y-0 w-px bg-on-dark shadow-[0_0_12px_rgba(0,0,0,0.55)]"
        style={{ left: `${position}%` }}
      />

      {/* Handle */}
      <button
        type="button"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        role="slider"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={(e) => {
          e.stopPropagation();
          startDrag(e.clientX);
        }}
        className="absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-on-dark bg-charcoal-deep/85 text-on-dark shadow-[0_6px_24px_rgba(0,0,0,0.5)] backdrop-blur-[1px] transition-colors hover:bg-metal hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-metal-bright"
        style={{ left: `${position}%` }}
      >
        <ChevronLeft className="h-5 w-5" strokeWidth={2.5} />
        <ChevronRight className="-ml-1 h-5 w-5" strokeWidth={2.5} />
      </button>

      <span className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-charcoal-deep/80 px-3 py-1.5 font-display text-[0.65rem] uppercase tracking-[0.25em] text-on-dark-muted">
        Drag to Compare ↔
      </span>
    </div>
  );
}
