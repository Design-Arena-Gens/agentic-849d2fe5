import { beautyPackages } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="bg-gradient-to-b from-white to-rose-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="lg:w-2/5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              immersive journey
            </p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
              Elevated rituals that indulge every sense
            </h2>
            <p className="mt-6 text-sm text-slate-600">
              From the welcome aroma to the final styling tutorial, each detail is curated to
              leave you grounded, glowing, and empowered. Experience curated playlists, tea
              ceremonies, and luxe lounge spaces between services.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                <span>Complimentary digital lookbook to maintain your style at home</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                <span>Wellness-led add-ons including guided breathwork and scalp detox rituals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand" />
                <span>Private suites available for bridal parties and milestone celebrations</span>
              </li>
            </ul>
            <a
              href="#booking"
              className="mt-10 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Curate my visit
            </a>
          </div>
          <div className="grid flex-1 gap-6 sm:grid-cols-2">
            {beautyPackages.map((pkg) => (
              <article
                key={pkg.title}
                className="rounded-3xl border border-white/60 bg-white/90 p-8 shadow-[0_35px_80px_-50px_rgba(197,65,104,0.4)] backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-400">
                  curated package
                </p>
                <h3 className="mt-3 font-display text-2xl text-slate-900">{pkg.title}</h3>
                <p className="mt-2 text-lg font-semibold text-brand">{pkg.price}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {pkg.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-4 rounded-full bg-gradient-to-r from-brand to-rose-300" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
