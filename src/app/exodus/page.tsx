import type { Metadata } from "next";
import Link from "next/link";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";
import EvidenceSources from "./EvidenceSources";
import JoinForm from "./JoinForm";
import ShareButtons from "./ShareButtons";

export const metadata: Metadata = {
  title: "Exodus | Gyro Governance",
  description:
    "Exodus is a planetary-scale operation for addressing active existential risks through the Moments Economy: economic empowerment for resilience to transformative AI.",
  keywords: [
    "Exodus",
    "economic abundance",
    "transformative AI",
    "existential risk",
    "poverty",
    "atomic frequency",
    "int$",
    "UHI",
    "unconditional high income",
    "Common Source Moment",
    "Moments Economy",
  ],
  authors: [{ name: "Gyro Governance" }],
  metadataBase: new URL("https://gyrogovernance.com"),
  openGraph: {
    title: "Exodus | Gyro Governance",
    description:
      "Economic empowerment for resilience to active existential risks through the Moments Economy.",
    url: "https://gyrogovernance.com/exodus",
    siteName: "Gyro Governance",
    type: "article",
    images: [
      {
        url: "/assets/exodus_cover_image.png",
        width: 1672,
        height: 941,
        alt: "Exodus: From scarcity into abundance | Gyro Governance",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exodus | Gyro Governance",
    description:
      "Economic empowerment for resilience to active existential risks through the Moments Economy.",
    images: ["/assets/exodus_cover_image.png"],
    creator: "@gyrogovernance",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const abundancePoints = [
  {
    title: "Unconditional High Income",
    value: "240 int$ / day",
    description:
      "A baseline of 240 int$ per day for every recognised person, allocated through registration under published eligibility rules.",
  },
  {
    title: "1.12 Trillion Years of Capacity",
    value: "7.94 × 10²⁶ Units",
    description:
      "Global UHI is supported over a timescale that makes exhaustion operationally irrelevant. An adversary would need to issue 11.2 billion times the global annual UHI to consume just 1% of the total capacity.",
  },
  {
    title: "Globally Verifiable by any Smartphone",
    value: "Atomic frequency",
    description:
      "Atomic frequency is the most widely distributed and relied-upon high-capacity medium in human history. Every time a device uses GPS or syncs its clock over the internet, it relies on this constant.",
  },
];

function RiskPill() {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/45 bg-red-600/15 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider">
      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
      High Risks Triggered
    </span>
  );
}

export default function Exodus() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="relative z-10 space-y-12">
        {/* Hero card */}
        <div className="animate-fade-in-up">
          <div className="exodus-hero shadow-2xl">
            <LiquidGlassCard className="glass-card glass-card-red shadow-none">
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4" aria-hidden="true">
                    🚨
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                    Exodus
                  </h1>
                  <div className="mb-4">
                    <RiskPill />
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                    Economic Empowerment for Resilience to Active Existential
                    Risks.
                  </p>
                </div>

                <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4 mb-6">
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    Economic disempowerment from misuse of{" "}
                    <strong className="text-foreground">
                      transformative AI (TAI)
                    </strong>{" "}
                    amplifies existential risk by weakening institutions,
                    eroding trust, and limiting people&apos;s capacity to
                    prevent harm.
                  </p>
                  <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                    <strong className="text-foreground">
                      Exodus is a planetary-scale operation for addressing
                      active existential risks through the Moments Economy:
                    </strong>{" "}
                    a science-backed governance framework for unconditional high
                    income and uniform power distribution.
                  </p>
                </div>

                <div className="flex justify-center">
                  <a
                    href="#join"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-800 to-red-600 hover:from-red-900 hover:to-red-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Join us
                  </a>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Problem */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-orange rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4" aria-hidden="true">
                  🛑
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Exit Strategy Triggers
                </h2>
                <p className="text-lg italic text-foreground-secondary max-w-2xl mx-auto">
                  From gradual harm to existential risk.
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4 mb-6">
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">
                    Poverty, unemployment, misinformation, and ecological
                    degradation already threaten human lives, livelihoods, and
                    the conditions for survival. Economic inequality
                    concentrates power and deprives people of the resources to
                    protect themselves, their communities, and their
                    environment.
                  </strong>
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Misuse of AI and automated systems intensifies these harms,
                  expanding the scale of manipulation, displacement, and
                  control. Competition for economic and geopolitical advantage
                  increases the pressure for irresponsible deployment.
                </p>
              </div>

              <EvidenceSources />

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  Economic Empowerment as Risk Mitigation
                </h3>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Economic security and shared power provide the foundation for
                  human capacity building: strengthening people&apos;s ability
                  to meet their needs, make informed decisions, and prevent
                  harm. Addressing the economic conditions behind these
                  interconnected crises is fundamental to mitigating both
                  ongoing harm and existential risk.
                </p>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Solution 1 */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-12 dark:opacity-12"
              style={{ backgroundImage: "url('/assets/earth.jpg')" }}
              aria-hidden="true"
            />
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4" aria-hidden="true">
                  🌈
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  The Promised Land
                </h2>
                <p className="text-lg font-semibold text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                  Humanity&apos;s departure from our old, oppressive economic
                  system into abundance.
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">
                    Economic inequality must end, as it leads to crimes against
                    humanity and our planet.
                  </strong>
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Through Exodus, we initiate a planetary-scale operation to
                  address active existential risks through the Moments Economy:
                  a civil governance framework supported by the issuance of a
                  globally verifiable economic medium based on the atomic
                  frequency (caesium standard).
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  The medium has a fixed issuance capacity of 794 Septillion
                  Units (7.94 × 10<sup>26</sup>), with each Unit defined as 1
                  international dollar (int$) in value.
                </p>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Solution 2 */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-emerald rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4" aria-hidden="true">
                  🪙
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Moments Economy
                </h2>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4 mb-6">
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">
                    Through the Common Source Moment (CSM), we abolish scarcity
                    as the organizing principle of economic exchange, using a
                    medium physically derived from a constantly abundant
                    measure.
                  </strong>
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Governance depends on how institutions maintain the medium,
                  keep registries accurate, and coordinate under shared rules.
                  Economic participation centres on attentiveness instead of
                  attention: the care people bring to their responsibilities,
                  communities, and shared resources.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground text-center mb-4">
                  Globally Verifiable Abundance
                </h3>
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                  {abundancePoints.map((item) => (
                    <div
                      key={item.title}
                      className="glass-card-inner rounded-xl p-4 sm:p-6"
                    >
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {item.title}
                      </h4>
                      <p className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-3">
                        {item.value}
                      </p>
                      <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/programs/AIR_Moments_Economy_Specs.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Read the Moments Economy specifications (opens in new tab)"
                >
                  Specifications
                </a>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Action / Join */}
        <div id="join" className="animate-fade-in-up scroll-mt-24">
          <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4" aria-hidden="true">
                  🤝
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Join us
                </h2>
                <p className="text-lg font-semibold text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                  Everyone is welcome!
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 max-w-lg mx-auto">
                <JoinForm />
              </div>

              <p className="mt-6 text-center text-sm text-foreground-tertiary">
                All communications are handled under the{" "}
                <Link
                  href="/privacy-policy"
                  className="text-classic-blue hover:text-classic-purple transition-colors duration-200 underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </LiquidGlassCard>
        </div>

        <div className="animate-fade-in-up">
          <div className="exodus-hero shadow-2xl">
            <LiquidGlassCard className="glass-card glass-card-red shadow-none">
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4" aria-hidden="true">
                    📢
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-3">
                    Let others know.
                  </h2>
                  <p className="text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
                    Share our message with your family and community.
                  </p>
                </div>
                <ShareButtons />
              </div>
            </LiquidGlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
