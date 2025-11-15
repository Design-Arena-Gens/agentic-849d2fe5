"use client";

import { FormEvent, useState } from "react";

const services = [
  "Signature Cut & Style",
  "Color Luxe Ritual",
  "Illuminating Glow Facial",
  "Serenity Aromatherapy Massage",
  "Bridal Glam Experience"
];

export default function BookingForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Object.fromEntries(formData.entries()))
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      const { confirmationCode } = await response.json();
      setStatus("success");
      setMessage(
        `Your reservation request has been received. Confirmation code: ${confirmationCode}. Our concierge will follow up within 24 hours.`
      );
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage("Something went wrong. Please try again or call our concierge team.");
    }
  };

  return (
    <section id="booking" className="bg-gradient-to-b from-rose-50 to-white py-24">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] border border-white bg-white p-10 shadow-[0_50px_120px_-80px_rgba(197,65,104,0.7)]">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">Book</p>
          <h2 className="mt-3 font-display text-3xl text-slate-900 sm:text-4xl">
            Reserve your bespoke salon ritual
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Share your desired services, preferred timings, and any upcoming celebrations. Our
            concierge will curate the perfect itinerary and contact you with availability.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Full name
            </label>
            <input
              id="name"
              name="name"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
              placeholder="Casey Laurent"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
              placeholder="(555) 123-4567"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="service" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Desired service
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="date" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Preferred date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
            />
          </div>
          <div className="sm:col-span-1">
            <label htmlFor="time" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Preferred time
            </label>
            <input
              id="time"
              name="time"
              type="time"
              required
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="notes" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Celebration details or preferences
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={4}
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm text-slate-700 shadow-inner focus:border-brand focus:outline-none"
              placeholder="Share inspiration, sensitivities, or event timelines..."
            />
          </div>
          <div className="sm:col-span-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-500">
              By submitting this request you agree to our 24-hour rescheduling policy. Our team
              will connect with you to confirm availability.
            </p>
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-dark disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {status === "loading" ? "Sending..." : "Submit request"}
            </button>
          </div>
        </form>
        {status !== "idle" && (
          <div
            className={`mt-6 rounded-2xl border px-5 py-4 text-sm ${
              status === "success"
                ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                : status === "error"
                ? "border-rose-300 bg-rose-50 text-rose-700"
                : "border-slate-200 bg-white text-slate-600"
            }`}
          >
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
