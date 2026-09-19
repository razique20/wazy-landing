import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";

const socials = ["X", "LinkedIn", "Instagram"];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-obsidian">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.svg" alt="Wazy logo" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold tracking-tight text-white">Wazy</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Every renewal. Every dirham. One dashboard — financial
              intelligence and document expiry tracking for the UAE.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <Link href="/terms" className="text-slate-400 transition hover:text-cyan">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-400 transition hover:text-cyan">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
                Contact
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a
                    href="mailto:support@wazy.app"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan"
                  >
                    <Mail className="h-4 w-4" />
                    support@wazy.app
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/971000000000"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400 transition hover:border-cyan/40 hover:text-cyan"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <span>© 2026 Wazy. All rights reserved.</span>
          <span>Made in the UAE 🇦🇪</span>
        </div>
      </div>
    </footer>
  );
}
