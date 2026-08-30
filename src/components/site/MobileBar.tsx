import { Phone, FileText } from "lucide-react";
import { PHONE_HREF } from "./data";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-white/10 lg:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 bg-charcoal-deep py-4 font-display text-sm uppercase tracking-[0.18em] text-on-dark"
      >
        <Phone className="h-4 w-4 text-metal" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-metal py-4 font-display text-sm uppercase tracking-[0.18em] text-accent-foreground"
      >
        <FileText className="h-4 w-4" />
        Get Quote
      </a>
    </div>
  );
}
