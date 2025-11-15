"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Elevated beauty rituals
          </span>
          <h1 className="font-display text-4xl leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Where artistry meets
            <span className="text-brand"> bespoke self-care</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 sm:text-lg">
            Discover a sanctuary for modern beauty. LuxeAura Salon blends couture styling,
            advanced skincare, and holistic therapies curated for your signature glow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#booking"
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
            >
              Reserve an Experience
            </a>
            <a
              href="#services"
              className="rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand"
            >
              Explore the Menu
            </a>
          </div>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Guests served</dt>
              <dd className="text-2xl font-semibold text-slate-900">12k+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">In-house artists</dt>
              <dd className="text-2xl font-semibold text-slate-900">18</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-slate-400">Awards earned</dt>
              <dd className="text-2xl font-semibold text-slate-900">24</dd>
            </div>
          </dl>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex-1"
        >
          <div className="relative h-[460px] overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-dark via-brand to-rose-200 shadow-[0_60px_120px_-60px_rgba(197,65,104,0.7)]">
            <Image
              src="/images/hero-portrait.svg"
              alt="Modern salon experience"
              fill
              sizes="(max-width: 1024px) 100vw, 540px"
              priority
              className="object-cover"
            />
            <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 p-5 backdrop-blur">
              <p className="text-sm font-semibold text-slate-800">Complimentary rituals</p>
              <p className="text-xs text-slate-500">Organic teas • Aromatic scalp massage • Styling tutorial</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-rose-200/60 blur-3xl" />
    </section>
  );
}
