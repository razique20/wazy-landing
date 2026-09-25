import { ChevronRight } from "lucide-react";

function StoreBadge({
  href,
  top,
  bottom,
  icon,
}: {
  href: string;
  top: string;
  bottom: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-white backdrop-blur transition hover:bg-white/20"
    >
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-white/70">
          {top}
        </span>
        <span className="block text-sm font-semibold">{bottom}</span>
      </span>
    </a>
  );
}

const appleIcon = (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.05 20.28c-.98.95-2.05.86-3.08.41-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.41C2.11 15.09 2.8 7.31 8.7 6.99c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.18 4.4zM12.03 7c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const playIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M3 20.5V3.5c0-.6.34-1.11.84-1.35L13.7 12 3.84 21.85c-.5-.24-.84-.75-.84-1.35zm13.81-5.38L6.05 21.34 14.54 12.85l2.27 2.27zm3.35-4.31c.34.27.59.68.59 1.19s-.22.93-.57 1.2l-2.29 1.32-2.5-2.5 2.5-2.5 2.27 1.29zM6.05 2.66l10.76 6.22-2.27 2.27-8.49-8.49z" />
  </svg>
);

export function FinalCta() {
  return (
    <section id="download" className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-dark via-ink to-ink-light" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Stop tracking deadlines in your head.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
          Put every renewal and every dirham on one dashboard — free to start,
          across all six GCC countries.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <StoreBadge href="#" top="Download on the" bottom="App Store" icon={appleIcon} />
          <StoreBadge href="#" top="Get it on" bottom="Google Play" icon={playIcon} />
          <a
            href="#features"
            className="group flex items-center gap-1.5 text-sm font-semibold text-violet-light transition hover:text-white"
          >
            Explore the features
            <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
