"use client";

import { useState } from "react";
import LocationInput from "./LocationInput";

const FORMEASY_URL = process.env.NEXT_PUBLIC_FORMEASY_URL;

export default function JoinForm() {
  const [filled, setFilled] = useState({
    name: "",
    location: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!FORMEASY_URL) {
      setError(
        "Form endpoint is not configured. Set NEXT_PUBLIC_FORMEASY_URL and restart the dev server."
      );
      return;
    }

    setSubmitting(true);

    const payload = {
      formType: "exodus",
      name: filled.name.trim(),
      email: filled.email.trim(),
      location: filled.location.trim(),
      message: "Join Exodus",
    };

    try {
      const res = await fetch(FORMEASY_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data || data.status !== "OK") {
        throw new Error(data?.message || "Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Submission failed. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilled((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLocationChange = (location: string) => {
    setFilled((prev) => ({ ...prev, location }));
  };

  if (submitted) {
    return (
      <div className="p-5 bg-emerald-500/12 dark:bg-emerald-900/30 border border-emerald-500/40 rounded-xl text-center animate-fade-in-up">
        <p className="text-emerald-700 dark:text-emerald-200 font-medium">
          Thank you. Your interest in Exodus has been registered.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-foreground-secondary mb-1.5"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={filled.name}
          onChange={handleChange}
          placeholder="Ada Lovelace"
          className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/40 border border-border/60 focus:border-classic-blue/70 focus:ring-2 focus:ring-classic-blue/20 outline-none text-foreground transition-all duration-200 placeholder:text-foreground/50"
        />
      </div>
      <div>
        <label
          htmlFor="location"
          className="block text-sm font-semibold text-foreground-secondary mb-1.5"
        >
          Location
        </label>
        <LocationInput
          id="location"
          name="location"
          value={filled.location}
          onChange={handleLocationChange}
          placeholder="London, United Kingdom"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground-secondary mb-1.5"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={filled.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-xl bg-white/40 dark:bg-black/40 border border-border/60 focus:border-classic-blue/70 focus:ring-2 focus:ring-classic-blue/20 outline-none text-foreground transition-all duration-200 placeholder:text-foreground/50"
        />
      </div>

      {error ? (
        <p
          className="text-center text-sm text-red-600 dark:text-red-400"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={submitting}
        className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-gradient-to-r from-classic-blue via-classic-purple to-classic-pink hover:from-classic-purple hover:via-classic-pink hover:to-classic-blue text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60 disabled:pointer-events-none"
      >
        {submitting ? "Submitting…" : "Get notified"}
      </button>
    </form>
  );
}
