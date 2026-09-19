import { CalendarX, Wallet, FileWarning } from "lucide-react";

const problems = [
  {
    icon: FileWarning,
    title: "Fines you never saw coming",
    body: "A missed trade-licence renewal in the UAE can trigger thousands of dirhams in fines — sometimes within days of expiry.",
    tone: "text-danger-red",
    chip: "AED 5,000+ typical fine",
  },
  {
    icon: CalendarX,
    title: "Dates scattered everywhere",
    body: "Emirates ID here, tenancy contract there, insurance in an email — renewal dates live across calendars, WhatsApp threads and sticky notes.",
    tone: "text-warning-amber",
    chip: "6+ places to forget",
  },
  {
    icon: Wallet,
    title: "Renewals that break your budget",
    body: "Visa, licence and insurance fees land all at once. Without a forecast, one renewal month can wipe out your cash buffer.",
    tone: "text-cyan",
    chip: "3–5x normal monthly spend",
  },
];

export function ProblemStrip() {
  return (
    <section className="bg-snow-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            The paperwork tax is real
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            In the UAE, every document has a deadline — and every deadline has
            a price tag.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, body, tone, chip }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200/80 bg-white/70 p-7 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-lg hover:shadow-navy/5"
            >
              <div className={`inline-flex rounded-xl bg-slate-100 p-3 ${tone}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
              <span className="mt-4 inline-block rounded-full bg-navy/5 px-3 py-1 text-xs font-semibold text-navy">
                {chip}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
