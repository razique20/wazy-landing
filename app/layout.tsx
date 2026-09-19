import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wazy.app"),
  title: {
    default: "Wazy — Every renewal. Every dirham. One dashboard.",
    template: "%s — Wazy",
  },
  description:
    "Wazy forecasts your cash flow and tracks every document expiry — trade licences, visas, Emirates ID, insurance — with alerts 30/60/90 days before they're due.",
  keywords: [
    "Wazy",
    "UAE budgeting app",
    "document expiry tracking",
    "cash flow forecast",
    "trade licence renewal",
    "Emirates ID reminder",
  ],
  openGraph: {
    type: "website",
    url: "https://wazy.app",
    siteName: "Wazy",
    title: "Wazy — Every renewal. Every dirham. One dashboard.",
    description:
      "AI-powered budgeting & document expiry tracking for the UAE. 90-day cash-flow forecasts and 30/60/90-day renewal alerts.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wazy — Every renewal. Every dirham. One dashboard.",
    description:
      "AI-powered budgeting & document expiry tracking for the UAE. 90-day cash-flow forecasts and 30/60/90-day renewal alerts.",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="flex min-h-screen flex-col font-grotesk">
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
