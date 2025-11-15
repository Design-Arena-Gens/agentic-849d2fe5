import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-200">
              whispered praise
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Revered by the style-obsessed and the wellness devoted
            </h2>
          </div>
          <p className="max-w-xl text-sm text-slate-300">
            Our community returns for the artful balance of editorial precision and soulful
            hospitality. Discover what guests share after their LuxeAura ritual.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <p className="text-sm text-slate-100">“{testimonial.quote}”</p>
              <footer className="mt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {testimonial.title}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
