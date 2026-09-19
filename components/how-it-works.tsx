import {
  BellRing,
  FolderPlus,
  LineChart,
  ScanLine,
} from "lucide-react";

const steps = [
  {
    icon: FolderPlus,
    step: "1",
    title: "Create your collections",
    body: "Personal, company, or both — one collection per business, everything grouped the way you think.",
  },
  {
    icon: ScanLine,
    step: "2",
    title: "Scan or upload documents",
    body: "Snap a photo or drop a PDF. OCR reads it and fills in the title, type, expiry, emirate and authority.",
  },
  {
    icon: BellRing,
    step: "3",
    title: "Get 30/60/90-day alerts",
    body: "Wazy watches every deadline and pings you three times before it's due — no more last-minute scrambles.",
  },
  {
    icon: LineChart,
    step: "4",
    title: "Watch the forecast reserve the money",
    body: "The 90-day cash-flow forecast simulates renewal fees as outflows, so funds are ready before the bill lands.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-snow-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-cyan-dark">
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            From shoebox to sorted in four steps
          </h2>
        </div>

        <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-8 hidden border-t-2 border-dashed border-navy/15 lg:block"
            aria-hidden
          />
          {steps.map(({ icon: Icon, step, title, body }) => (
            <div key={step} className="relative">
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy shadow-lg shadow-navy/25">
                <Icon className="h-7 w-7 text-cyan" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-cyan text-xs font-bold text-obsidian">
                  {step}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
