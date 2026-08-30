import ba1Before from "@/assets/ba1-before.jpg";
import ba1After from "@/assets/ba1-after.jpg";
import ba2Before from "@/assets/ba2-before.jpg";
import ba2After from "@/assets/ba2-after.jpg";
import ba3Before from "@/assets/ba3-before.jpg";
import ba3After from "@/assets/ba3-after.jpg";
import work1 from "@/assets/work1.jpg";
import work2 from "@/assets/work2.jpg";
import work3 from "@/assets/work3.jpg";
import work4 from "@/assets/work4.jpg";
import work5 from "@/assets/work5.jpg";
import work6 from "@/assets/work6.jpg";

export const PHONE_DISPLAY = "+61 435 732 207";
export const PHONE_HREF = "tel:+61435732207";

/**
 * Before & After projects.
 * To use real client photos: drop them in src/assets and swap the imports above,
 * or replace `before` / `after` with a direct URL string.
 */
export const beforeAfterProjects = [
  {
    id: "ba1",
    title: "Full Re-Roof — Bayswater",
    detail: "Rusted corrugated iron stripped and replaced with Colorbond Monument.",
    before: ba1Before,
    after: ba1After,
  },
  {
    id: "ba2",
    title: "Tile to Metal Conversion — Morley",
    detail: "Failing terracotta tiles removed, new metal roof, gutters and fascia.",
    before: ba2Before,
    after: ba2After,
  },
  {
    id: "ba3",
    title: "Commercial Re-Sheet — Malaga",
    detail: "1,800m² warehouse re-sheeted with zero disruption to trading hours.",
    before: ba3Before,
    after: ba3After,
  },
];

export const galleryProjects = [
  { src: work1, title: "Colorbond Install", location: "Scarborough" },
  { src: work2, title: "Ridge Capping & Flashing", location: "Subiaco" },
  { src: work3, title: "Commercial Re-Sheet", location: "Welshpool" },
  { src: work4, title: "Solar-Ready Re-Roof", location: "Joondalup" },
  { src: work5, title: "Heritage Restoration", location: "Mount Lawley" },
  { src: work6, title: "Two-Day Roof Replacement", location: "Canning Vale" },
];
