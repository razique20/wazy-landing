import {
  Banknote,
  BellRing,
  BrainCircuit,
  CalendarClock,
  CheckCircle2,
  FolderOpen,
  ScanLine,
  Sparkles,
  TrendingDown,
  Wallet,
} from "lucide-react";

type Pillar = {
  icon: typeof Wallet;
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
};

const pillars: Pillar[] = [
  {
    icon: Wallet,
    eyebrow: "Financial Intelligence",
    title: "Budgets that behave, forecasts that warn you first",
    body: "Your whole financial picture in AED — tracked, budgeted and projected, so renewals never blindside you.",
    points: [
      "Unified ledger for income & expenses with a monthly pace reading",
      "Category budgets with 80% and 100% spend alerts",
      "Savings envelopes for the renewals you know are coming",
      "90-day cash-flow forecast with automatic dip detection",
    ],
  },
  {
    icon: FolderOpen,
    eyebrow: "Document Expiry Tracking",
    title: "Every licence, visa and ID — tracked to the day",
    body: "A radar for your paperwork: urgency colors, renewal windows and fees for every document you care about.",
    points: [
      "Multi-entity collections: keep Personal and Company apart",
      "Emirates ID, trade licences, visas, tenancy contracts, insurance and more",
      "Smart 30/60/90-day reminders before every deadline",
      "Renewal-window progress and fee estimates per document",
    ],
  },
  {
    icon: BrainCircuit,
    eyebrow: "Smart AI Engine",
    title: "Type a sentence. Get a structured transaction.",
    body: "Wazy's AI reads your documents and your plain English, then does the data entry for you.",
    points: [
      'Natural-language quick add: "Paid AED 450 for DEWA utilities yesterday"',
      "Auto-categorization with UAE vendor dictionaries — DEWA, Salik, Talabat, Etisalat",
      "Bill-spike & anomaly detection vs your 3-month baseline",
      "OCR scan-to-fill extracts dates, amounts and vendors from any document",
    ],
  },
];

export function FeaturePillars() {
  return (
    <section id="features" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-dark">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Three engines. One clear picture.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Money, deadlines and intelligence — built together, not bolted on.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.eyebrow}
              className="flex flex-col rounded-2xl border border-slate-200/80 bg-white/70 p-8 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-dark">
                <p.icon className="h-3.5 w-3.5" />
                {p.eyebrow}
              </div>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.body}</p>
              <ul className="mt-6 flex-1 space-y-3.5">
                {p.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-safe-green" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-3 text-xs font-medium text-slate-500">
          <Sparkles className="h-4 w-4 text-cyan-dark" />
          <span>Powered by Google ML Kit OCR</span>
          <span className="text-slate-300">·</span>
          <CalendarClock className="h-4 w-4 text-cyan-dark" />
          <span>30/60/90-day reminder engine</span>
          <span className="text-slate-300">·</span>
          <TrendingDown className="h-4 w-4 text-cyan-dark" />
          <span>Cash-flow dip detection</span>
          <span className="text-slate-300">·</span>
          <Banknote className="h-4 w-4 text-cyan-dark" />
          <span>AED-first</span>
          <span className="text-slate-300">·</span>
          <ScanLine className="h-4 w-4 text-cyan-dark" />
          <span>Scan-to-fill</span>
          <span className="text-slate-300">·</span>
          <BellRing className="h-4 w-4 text-cyan-dark" />
          <span>Bill-spike alerts</span>
        </div>
      </div>
    </section>
  );
}
