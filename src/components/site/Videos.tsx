/**
 * Facebook video embeds.
 * Replace the `url` values below with the real Facebook video permalinks —
 * everything else stays the same.
 */
const FB_VIDEOS = [
  {
    title: "Full Colorbond Re-Roof — Start to Finish",
    url: "https://www.facebook.com/TrussMetalRoofing/videos/1234567890123456/",
  },
  {
    title: "Commercial Re-Sheet — Perth Industrial",
    url: "https://www.facebook.com/TrussMetalRoofing/videos/6543210987654321/",
  },
];

function embedSrc(url: string) {
  return `https://www.facebook.com/plugins/video.php?height=314&href=${encodeURIComponent(
    url,
  )}&show_text=false&width=560&t=0`;
}

export function Videos() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {FB_VIDEOS.map((video) => (
        <figure key={video.url}>
          <div className="relative aspect-video w-full overflow-hidden bg-charcoal-deep">
            <iframe
              src={embedSrc(video.url)}
              title={video.title}
              className="absolute inset-0 h-full w-full"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-4 font-display text-sm uppercase tracking-[0.16em] text-on-dark">
            {video.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
