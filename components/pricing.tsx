import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    tagline: "Track what matters — free forever",
    price: "AED 0",
    period: "forever",
    note: "≈ $0",
    highlight: false,
    features: [
      "3 AI Executive Summaries / month",
      "2 AI Budget Planner generations / month",
      "1 personal collection",
      "Up to 10 tracked documents",
      "Standard 30/60/90-day renewal reminders",
      "Basic budgets & finance tracking",
    ],
  },
  {
    name: "Plus",
    tagline: "For power users who never miss a renewal",
    price: "AED 25",
    period: "per month",
    note: "≈ $6.99 / month",
    highlight: true,
    features: [
      "15 AI Executive Summaries / month",
      "10 AI Budget Planner generations / month",
      "Unlimited documents",
      "1 company collection",
      "90-day cash-flow forecast & dip detection",
      "PDF and CSV report exports",
      "Custom reminder alert days per document",
      "AI monthly executive summaries & AI budget planner",
    ],
  },
  {
    name: "Business",
    tagline: "Multiple workspaces for PROs & SMEs",
    price: "AED 99",
    period: "per month",
    note: "≈ $26.99 / month",
    highlight: false,
    features: [
      "Everything in Plus",
      "40 AI Executive Summaries / month",
      "25 AI Budget Planner generations / month",
      "Unlimited company workspaces & collections",
      "Document assignment to team members / responsible persons",
      "Immutable renewal audit history",
      "Multi-collection team data exports",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-snow-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-violet font-bold">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Start free. Upgrade when you grow.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Core tracking — documents, budgets, forecasts and reminders — is
            always free. Pay only for more capacity and AI.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border p-8 transition ${
                t.highlight
                  ? "border-violet bg-ink text-white shadow-xl shadow-violet/25 lg:-translate-y-3"
                  : "border-slate-200/80 bg-white/70 shadow-sm backdrop-blur hover:-translate-y-1 hover:shadow-lg hover:shadow-violet/10"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-violet px-4 py-1 text-xs font-bold text-white shadow-md shadow-violet/40">
                  Most popular
                </span>
              )}
              <h3
                className={`text-lg font-bold ${t.highlight ? "text-white" : "text-ink"}`}
              >
                {t.name}
              </h3>
              <p
                className={`mt-1 text-sm ${t.highlight ? "text-slate-300" : "text-slate-500"}`}
              >
                {t.tagline}
              </p>
              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className={`text-4xl font-bold ${t.highlight ? "text-violet-light" : "text-ink"}`}
                >
                  {t.price}
                </span>
                <span
                  className={`text-sm ${t.highlight ? "text-slate-400" : "text-slate-500"}`}
                >
                  / {t.period}
                </span>
              </div>
              {t.note && (
                <p
                  className={`mt-1 text-xs ${t.highlight ? "text-violet-light" : "text-slate-500"}`}
                >
                  {t.note}
                </p>
              )}
              <ul className="mt-7 flex-1 space-y-3.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${t.highlight ? "text-violet-light" : "text-safe-green"}`}
                    />
                    <span
                      className={`leading-relaxed ${t.highlight ? "text-slate-200" : "text-slate-600"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#download"
                className={`mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
                  t.highlight
                    ? "bg-violet text-white hover:bg-violet-hover shadow-lg shadow-violet/30"
                    : "border border-ink/15 bg-white text-ink hover:border-violet hover:bg-violet/5 hover:text-violet"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-slate-500">
          Prices shown in AED with approximate USD equivalents; local pricing
          shown in-app for each GCC country.
        </p>
      </div>
    </section>
  );
}
