import { useState } from "react";
import { toast } from "sonner";
import { PHONE_DISPLAY } from "./data";

const SERVICES = [
  "Metal Roof Installation",
  "Roof Replacement",
  "Roof Repairs",
  "Roof Restoration",
  "Residential Roofing",
  "Commercial Roofing",
  "Not sure — need advice",
];

const fieldClass =
  "w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

const labelClass =
  "mb-2 block font-display text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground";

export function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Thanks — your request has been received.", {
        description: `We'll be in touch shortly. Need it urgently? Call ${PHONE_DISPLAY}.`,
      });
    }, 600);
  };

  return (
    <form onSubmit={onSubmit} className="border border-border bg-background p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input id="name" name="name" required placeholder="John Smith" className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="0400 000 000"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@email.com.au"
            className={fieldClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="suburb">
            Suburb
          </label>
          <input id="suburb" name="suburb" required placeholder="Joondalup" className={fieldClass} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="service">
            Service Required
          </label>
          <select id="service" name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your roof — age, material, leaks, access, timeframe."
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full bg-charcoal px-6 py-4 font-display text-sm uppercase tracking-[0.2em] text-on-dark transition-colors hover:bg-metal hover:text-accent-foreground disabled:opacity-60"
      >
        {sending ? "Sending…" : "Request My Free Quote"}
      </button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No obligation. Most quotes returned within 24 hours.
      </p>
    </form>
  );
}
