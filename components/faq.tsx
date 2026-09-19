"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What platforms does Wazy support?",
    a: "Wazy is available on iOS and Android. Your data syncs through your account, so your documents and budgets follow you across devices.",
  },
  {
    q: "Is my data safe?",
    a: "Yes. Everything is encrypted in transit and at rest, stored with row-level security so only you can access your workspace. See the Privacy Policy for full details.",
  },
  {
    q: "Does AI train on my documents?",
    a: "No. Your documents are processed only to extract dates, amounts and vendors for your own tracking. We never use your data to train public AI models, and we never sell it.",
  },
  {
    q: "Can I export my data?",
    a: "Yes — CSV and PDF export are built in for expiry lists and financial records, so your data is always yours to take.",
  },
  {
    q: "Is Wazy free?",
    a: "Core tracking features — documents, budgets, forecasts and reminders — are free. Optional premium features may be introduced later with clear pricing disclosed before purchase.",
  },
  {
    q: "What kinds of documents can I track?",
    a: "Trade licences, visas, Emirates ID, passports, vehicle registrations, tenancy contracts (Ejari), insurance policies and subscriptions — for yourself and for your company.",
  },
  {
    q: "How do the 30/60/90-day alerts work?",
    a: "For every document, Wazy sends reminders at 90, 60 and 30 days before expiry. You'll see urgency colors in the app — green (safe), amber (due soon), red (expiring or expired).",
  },
  {
    q: "How accurate is the cash-flow forecast?",
    a: "The 90-day forecast simulates your daily balance using your recurring income and expenses, plus known renewal fees. It flags dips so you can move money early. Treat it as a planning aid, not financial advice.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-snow-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-dark">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-navy">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-cyan-dark transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
