"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#team", label: "Artists" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faqs", label: "FAQs" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-lg shadow-rose-100/60 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="text-xl font-display font-semibold tracking-wide">
          LuxeAura
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-dark focus:text-brand-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Link
          href="#booking"
          className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark"
        >
          Book Now
        </Link>
      </div>
    </motion.header>
  );
}
