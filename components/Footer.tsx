import Link from "next/link";

const quickLinks = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#team", label: "Artists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Booking" }
];

const hours = [
  "Tue – Fri: 9:00am – 7:00pm",
  "Saturday: 8:00am – 5:00pm",
  "Sunday: Private bookings",
  "Monday: Closed"
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="space-y-4">
            <p className="text-lg font-display">LuxeAura Salon</p>
            <p className="text-sm text-slate-300">
              128 Bloom Street, Studio District
              <br />
              Portland, OR 97205
            </p>
            <a href="tel:+15035551212" className="block text-sm text-rose-200">
              (503) 555-1212
            </a>
            <a href="mailto:hello@luxeaura.studio" className="block text-sm text-rose-200">
              hello@luxeaura.studio
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
              Quick links
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
              Studio hours
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {hours.map((hour) => (
                <li key={hour}>{hour}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
              Join the inner circle
            </p>
            <p className="mt-4 text-sm text-slate-300">
              Receive first access to limited drops, event invites, and seasonal rituals.
            </p>
            <form className="mt-6 flex overflow-hidden rounded-full bg-white/10">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-slate-400"
              />
              <button type="submit" className="bg-brand px-6 text-sm font-semibold text-white transition hover:bg-brand-dark">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} LuxeAura Salon. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-rose-100">
              Instagram
            </a>
            <a href="#" className="hover:text-rose-100">
              Pinterest
            </a>
            <a href="#" className="hover:text-rose-100">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
