import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CheckCircle2,
  Hammer,
  Home,
  Mail,
  MapPin,
  Phone,
  Shield,
  Wrench,
  PaintRoller,
  Clock,
  Layers,
} from "lucide-react";

import heroRoof from "@/assets/hero-roof.jpg";
import aboutImg from "@/assets/about.jpg";
import { Header } from "@/components/site/Header";
import { MobileBar } from "@/components/site/MobileBar";
import { Gallery } from "@/components/site/Gallery";
import { Videos } from "@/components/site/Videos";
import { ContactForm } from "@/components/site/ContactForm";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { beforeAfterProjects, PHONE_DISPLAY, PHONE_HREF } from "@/components/site/data";

const TITLE = "Truss Metal Roofing PTY LTD | Professional Metal Roofing Perth";
const DESCRIPTION =
  "Perth metal roofing specialists. Metal roof installation, replacement, repairs and restoration for residential and commercial properties across Perth, WA. Free quotes — call +61 435 732 207.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "RoofingContractor",
          name: "Truss Metal Roofing PTY LTD",
          telephone: "+61435732207",
          areaServed: "Perth, Western Australia",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Perth",
            addressRegion: "WA",
            addressCountry: "AU",
          },
        }),
      },
    ],
  }),
  component: Index,
});

const SERVICES = [
  {
    icon: Layers,
    title: "Metal Roof Installation",
    text: "New Colorbond and Zincalume roofing installed to Australian Standards, with correct falls, fixings and flashings from day one.",
  },
  {
    icon: Hammer,
    title: "Roof Replacement",
    text: "Full strip and re-roof of tired tile or iron roofs — sarking, battens, sheeting, capping and guttering handled end to end.",
  },
  {
    icon: Wrench,
    title: "Roof Repairs",
    text: "Leak detection, storm damage, corroded valleys, loose sheets and failed flashings sorted quickly and properly.",
  },
  {
    icon: PaintRoller,
    title: "Roof Restoration",
    text: "Clean, re-fix, prime and recoat to add years of life and pull a weathered roof back to a factory-fresh finish.",
  },
  {
    icon: Home,
    title: "Residential Roofing",
    text: "From single-storey suburban homes to two-storey custom builds and heritage cottages across the metro area.",
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    text: "Warehouses, factories, strata and retail — staged works, safe access and schedules that keep your doors open.",
  },
];

const WHY = [
  {
    icon: MapPin,
    title: "Perth Local Experts",
    text: "We know WA conditions — coastal salt, summer heat and winter storms — and we spec roofs that hold up to all three.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Workmanship",
    text: "Straight lines, tidy capping, correct fixings. Every job is finished the way we'd finish our own roof.",
  },
  {
    icon: Clock,
    title: "Reliable Service",
    text: "We turn up when we say we will, quote clearly, and keep you updated from first call to final clean-up.",
  },
  {
    icon: Shield,
    title: "Complete Roofing Solutions",
    text: "Roofing, gutters, downpipes, fascia and flashings — one team, one point of contact, one accountable result.",
  },
];

const SUBURBS = [
  "Perth CBD",
  "Joondalup",
  "Wanneroo",
  "Stirling",
  "Scarborough",
  "Morley",
  "Bayswater",
  "Midland",
  "Subiaco",
  "Fremantle",
  "Canning Vale",
  "Armadale",
  "Rockingham",
  "Mandurah",
  "Ellenbrook",
  "Malaga",
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section id="home" className="relative isolate">
          <img
            src={heroRoof}
            alt="New charcoal Colorbond metal roof on a modern Perth home"
            width={1920}
            height={1088}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal-deep via-charcoal-deep/85 to-charcoal-deep/30" />
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40">
            <div className="max-w-2xl">
              <p className="eyebrow">Perth · Western Australia</p>
              <h1 className="mt-5 font-display text-4xl leading-[1.05] text-on-dark sm:text-5xl lg:text-6xl">
                Perth's Trusted Metal Roofing Specialists
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-on-dark-muted sm:text-lg">
                Installation, replacement, repairs and restoration for residential and commercial
                properties across Perth and surrounding areas. Done once. Done properly.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-metal px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-metal-bright"
                >
                  <Phone className="h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center border border-white/30 px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-on-dark transition-colors hover:bg-white/10"
                >
                  Get a Free Quote
                </a>
              </div>
              <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px border-t border-white/15 pt-8">
                {[
                  ["15+", "Years on Perth roofs"],
                  ["1,200+", "Roofs completed"],
                  ["100%", "Licensed & insured"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <dt className="font-display text-2xl text-metal-bright sm:text-3xl">{value}</dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-on-dark-muted">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <img
                src={aboutImg}
                alt="The Truss Metal Roofing team in Perth"
                loading="lazy"
                width={1200}
                height={1000}
                className="w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-2 hidden bg-charcoal px-8 py-6 sm:block">
                <p className="font-display text-3xl text-metal-bright">Perth Owned</p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-on-dark-muted">
                  &amp; Operated
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow">About Us</p>
              <h2 className="rule-accent mt-5 text-3xl leading-tight sm:text-4xl">
                A Perth roofing crew you can actually get on the phone
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Truss Metal Roofing PTY LTD is a Perth-based metal roofing company working across
                  the metro area and surrounding suburbs. We're tradesmen first — the business grew
                  out of years spent on Perth roofs, not out of a marketing plan.
                </p>
                <p>
                  We cover every aspect of residential and commercial roofing: new installs, full
                  replacements, repairs, restorations, guttering and flashings. Whether it's a
                  single leak above a bedroom or 2,000m² of warehouse sheeting, the same standard of
                  work applies.
                </p>
                <p>
                  You'll deal with the people doing the job. We quote honestly, explain what your
                  roof actually needs, and leave the site clean when we're done.
                </p>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Fully licensed & insured",
                  "Colorbond & Zincalume specialists",
                  "Free on-site inspections",
                  "Workmanship guaranteed",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="steel-plate py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow">What We Do</p>
              <h2 className="rule-accent mt-5 text-3xl text-on-dark sm:text-4xl">
                Complete metal roofing services
              </h2>
              <p className="mt-4 text-on-dark-muted">
                Residential and commercial roofing across Perth and surrounding areas.
              </p>
            </div>
            <div className="mt-14 grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map((service) => (
                <article
                  key={service.title}
                  className="group bg-charcoal p-8 transition-colors hover:bg-charcoal-deep"
                >
                  <service.icon className="h-7 w-7 text-metal" strokeWidth={1.5} />
                  <h3 className="mt-6 text-lg text-on-dark">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-on-dark-muted">{service.text}</p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block font-display text-[0.72rem] uppercase tracking-[0.2em] text-metal-bright"
                  >
                    Enquire →
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="rule-accent mt-5 text-3xl leading-tight sm:text-4xl">
                Built on straight answers and straight lines
              </h2>
              <a
                href={PHONE_HREF}
                className="mt-8 inline-flex items-center gap-2 border border-foreground px-7 py-4 font-display text-sm uppercase tracking-[0.18em] transition-colors hover:bg-charcoal hover:text-on-dark"
              >
                <Phone className="h-4 w-4" />
                Speak to a Roofer
              </a>
            </div>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {WHY.map((item) => (
                <div key={item.title} className="bg-background p-7">
                  <item.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                  <h3 className="mt-5 text-base">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        <section id="before-after" className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Before &amp; After</p>
              <h2 className="rule-accent mt-5 text-3xl sm:text-4xl">Real Perth transformations</h2>
              <p className="mt-4 text-muted-foreground">
                Drag the handle across each photo to reveal the roof before we started and after we
                finished.
              </p>
            </div>

            <div className="mt-14 space-y-14">
              {beforeAfterProjects.map((project, i) => (
                <article
                  key={project.id}
                  className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14"
                >
                  <BeforeAfterSlider
                    before={project.before}
                    after={project.after}
                    beforeAlt={`${project.title} — roof before work`}
                    afterAlt={`${project.title} — roof after work`}
                  />
                  <div className={i % 2 === 1 ? "lg:order-first" : undefined}>
                    <span className="font-display text-5xl text-border">
                      0{i + 1}
                    </span>
                    <h3 className="mt-3 text-xl">{project.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {project.detail}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-block font-display text-[0.72rem] uppercase tracking-[0.2em] text-accent"
                    >
                      Get a quote like this →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* OUR RECENT WORK */}
        <section id="work" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Our Recent Work</p>
            <h2 className="rule-accent mt-5 text-3xl sm:text-4xl">Recent roofs around Perth</h2>
            <p className="mt-4 text-muted-foreground">
              Click any project to view it full size.
            </p>
          </div>
          <div className="mt-12">
            <Gallery />
          </div>
        </section>

        {/* VIDEOS */}
        <section id="videos" className="steel-plate py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <p className="eyebrow">Videos</p>
              <h2 className="rule-accent mt-5 text-3xl text-on-dark sm:text-4xl">
                See our work in action
              </h2>
              <p className="mt-4 text-on-dark-muted">
                Straight from the job site — follow along on Facebook.
              </p>
            </div>
            <div className="mt-12">
              <Videos />
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Service Area</p>
              <h2 className="rule-accent mt-5 text-3xl sm:text-4xl">Perth &amp; surrounding areas</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                We service the full Perth metropolitan area — north to Two Rocks, south to Mandurah,
                and east through the Hills. Not sure if we reach you? Give us a call and ask.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-px self-start bg-border sm:grid-cols-3 lg:grid-cols-4">
              {SUBURBS.map((suburb) => (
                <li
                  key={suburb}
                  className="bg-background px-4 py-4 text-sm text-muted-foreground"
                >
                  {suburb}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-charcoal-deep py-16 lg:py-20">
          <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-3xl leading-tight text-on-dark sm:text-4xl">
                Get your free roofing quote today
              </h2>
              <p className="mt-3 max-w-xl text-on-dark-muted">
                Free on-site inspection, honest advice and a clear fixed price — anywhere in Perth.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-metal px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-accent-foreground transition-colors hover:bg-metal-bright"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-white/30 px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-on-dark transition-colors hover:bg-white/10"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="rule-accent mt-5 text-3xl sm:text-4xl">Request a free quote</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Send through a few details and we'll get back to you with next steps. Prefer to
                talk? Call us directly — we answer the phone.
              </p>
              <div className="mt-10 space-y-6">
                <a href={PHONE_HREF} className="flex items-start gap-4 group">
                  <Phone className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span>
                    <span className="block font-display text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </span>
                    <span className="mt-1 block font-display text-xl group-hover:text-accent">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span>
                    <span className="block font-display text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Location
                    </span>
                    <span className="mt-1 block text-sm">
                      Perth, Western Australia — servicing Perth &amp; surrounds
                    </span>
                  </span>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-accent" strokeWidth={1.5} />
                  <span>
                    <span className="block font-display text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
                      Hours
                    </span>
                    <span className="mt-1 block text-sm">
                      Mon–Sat, 7:00am – 5:00pm · Emergency repairs available
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="steel-plate border-t border-white/10 pb-24 pt-16 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center border-2 border-metal font-display text-lg text-metal">
                  T
                </span>
                <span className="font-display text-base uppercase tracking-[0.12em] text-on-dark">
                  Truss Metal Roofing
                  <span className="block text-[0.65rem] tracking-[0.3em] text-on-dark-muted">
                    PTY LTD
                  </span>
                </span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
                Perth-based metal roofing specialists covering all aspects of residential and
                commercial roofing across Perth and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="text-sm text-on-dark">Services</h3>
              <ul className="mt-4 space-y-2 text-sm text-on-dark-muted">
                {SERVICES.map((s) => (
                  <li key={s.title}>
                    <a href="#services" className="hover:text-metal-bright">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm text-on-dark">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm text-on-dark-muted">
                <li>
                  <a href={PHONE_HREF} className="hover:text-metal-bright">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li>Perth, WA, Australia</li>
                <li>Mon–Sat, 7:00am – 5:00pm</li>
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block bg-metal px-6 py-3 font-display text-[0.72rem] uppercase tracking-[0.18em] text-accent-foreground"
              >
                Get a Free Quote
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-on-dark-muted sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Truss Metal Roofing PTY LTD. All rights reserved.</p>
            <p>Licensed &amp; insured roofing contractor · Perth, Western Australia</p>
          </div>
        </div>
      </footer>

      <MobileBar />
    </div>
  );
}
