import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryProjects } from "./data";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryProjects.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryProjects.length) % galleryProjects.length,
      ),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, next, prev]);

  return (
    <>
      <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {galleryProjects.map((project, i) => (
          <button
            key={project.title}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-4/3 overflow-hidden bg-charcoal text-left"
          >
            <img
              src={project.src}
              alt={`${project.title} — metal roofing project in ${project.location}, Perth`}
              loading="lazy"
              width={1200}
              height={900}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/10 to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-5">
              <span className="block font-display text-sm uppercase tracking-[0.14em] text-on-dark">
                {project.title}
              </span>
              <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-metal-bright">
                {project.location}
              </span>
            </span>
          </button>
        ))}
      </div>

      {index !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-charcoal-deep/95 p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute right-5 top-5 border border-white/20 p-2.5 text-on-dark hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 border border-white/20 p-2.5 text-on-dark hover:bg-white/10 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 border border-white/20 p-2.5 text-on-dark hover:bg-white/10 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <figure className="max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryProjects[index].src}
              alt={galleryProjects[index].title}
              className="max-h-[76vh] w-full object-contain"
            />
            <figcaption className="mt-4 text-center font-display text-sm uppercase tracking-[0.2em] text-on-dark">
              {galleryProjects[index].title}
              <span className="ml-3 text-metal-bright">{galleryProjects[index].location}</span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
