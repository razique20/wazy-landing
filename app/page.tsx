import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ProblemStrip } from "@/components/problem-strip";
import { FeaturePillars } from "@/components/feature-pillars";
import { HowItWorks } from "@/components/how-it-works";
import { BuiltForGcc } from "@/components/built-for-gcc";
import { Pricing } from "@/components/pricing";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Wazy",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS, Android",
  description:
    "AI-powered financial budgeting & cash-flow intelligence app with document expiry tracking and renewal alerts, built for personal users, freelancers and businesses across the GCC.",
  url: "https://wazy.app",
  offers: { "@type": "Offer", price: "0", priceCurrency: "AED" },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <ProblemStrip />
        <FeaturePillars />
        <HowItWorks />
        <BuiltForGcc />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
    </>
  );
}
