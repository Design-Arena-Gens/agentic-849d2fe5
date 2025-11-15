"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { galleryItems } from "@/lib/data";

const categories = ["All", "Color", "Cut", "Styling", "Makeup", "Facial", "Barber"];

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="gallery" className="bg-rose-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">
              portfolio
            </p>
            <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
              A glimpse into our creative lens
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                  activeCategory === category
                    ? "border-brand bg-brand text-white shadow-soft"
                    : "border-slate-200 bg-white text-slate-600 hover:border-brand hover:text-brand"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <figure
              key={item.title}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_35px_80px_-60px_rgba(35,31,32,0.4)]"
            >
              <div className="relative h-72">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 text-white">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
                    {item.category}
                  </p>
                  <p className="text-lg font-display">{item.title}</p>
                </div>
                <span className="rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
                  View lookbook
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
