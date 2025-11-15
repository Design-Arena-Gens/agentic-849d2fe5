import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: "LuxeAura Salon",
  description:
    "Elevate your style with LuxeAura Salon – bespoke hair, beauty, and spa experiences tailored to you.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
