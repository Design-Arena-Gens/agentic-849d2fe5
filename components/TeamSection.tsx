import Image from "next/image";
import { teamMembers } from "@/lib/data";

export default function TeamSection() {
  return (
    <section id="team" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
            visionaries
          </p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
            Artists who craft the LuxeAura signature
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Our collective of stylists, estheticians, and barbers share a passion for precision,
            education, and heartfelt connection. Meet the visionaries behind every luminous
            transformation.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="group flex flex-col rounded-3xl border border-slate-100 bg-slate-50/40 p-8 transition hover:border-brand hover:bg-white hover:shadow-soft"
            >
              <div className="relative mb-6 h-56 overflow-hidden rounded-3xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-display text-2xl text-slate-900">{member.name}</h3>
              <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {member.role}
              </p>
              <p className="mt-3 text-sm text-slate-600">{member.bio}</p>
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-brand">
                {member.specialty}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
