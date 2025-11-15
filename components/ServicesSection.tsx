import { services } from "@/lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              Signature menu
            </p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
              Curated services for luminous self-expression
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-600">
            Each service begins with a mindful consultation to understand your rituals and
            beauty goals. We tailor every experience with product cocktails that honor hair
            integrity, skin vitality, and inner harmony.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-3xl border border-slate-200 bg-slate-50/40 p-8 transition hover:border-brand hover:bg-white hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-2xl text-slate-900">{service.name}</h3>
                <span className="rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                  {service.duration}
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-500">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-lg font-semibold text-brand">{service.price}</p>
                <button className="rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 transition hover:border-brand hover:text-brand">
                  Add to visit
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
