import type { Metadata } from "next";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";
import JoinForm from "./JoinForm";

export const metadata: Metadata = {
  title: "Exodus | Gyro Governance",
  description:
    "Exodus is a program using science to mitigate risks of transformative AI and end poverty through a globally available economic medium based in the atomic frequency.",
  keywords: [
    "Exodus",
    "economic abundance",
    "transformative AI",
    "poverty",
    "atomic frequency",
    "int$",
    "UHI",
    "unconditional high income",
    "Common Source Moment",
  ],
  authors: [{ name: "Gyro Governance" }],
  metadataBase: new URL("https://gyrogovernance.com"),
  openGraph: {
    title: "Exodus | Gyro Governance",
    description:
      "Humanity's departure from our old, oppressive economic system into abundance through a scientifically verified economic medium.",
    url: "https://gyrogovernance.com/exodus",
    siteName: "Gyro Governance",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Exodus - Gyro Governance",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exodus | Gyro Governance",
    description:
      "Humanity's departure from our old, oppressive economic system into abundance.",
    images: ["/og-image.png"],
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
      "A baseline of 240 int$ per day for every recognised person, flowing from registry recognition under published eligibility rules.",
  },
  {
    title: "1.12 Trillion Year Capacity",
    value: "7.94 × 10²⁶ Units",
    description:
      "Global UHI is supported for a timescale that makes exhaustion operationally irrelevant. An adversary would need to issue 11.2 billion times the global annual UHI to consume just 1% of the total capacity.",
  },
  {
    title: "Globally Verifiable by any Smartphone",
    value: "Atomic frequency",
    description:
      "Atomic frequency is the most widely distributed and relied-upon high-capacity medium in human history. Every time a device uses GPS or syncs its clock over the internet, it relies on this constant.",
  },
];

export default function Exodus() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="relative z-10 space-y-12">
        {/* Hero */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-purple rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                  Exodus
                </h1>
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/45 bg-red-600/15 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-xs font-bold uppercase tracking-wider">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                    High-Risk TAI Triggered
                  </span>
                </div>
                <p className="text-lg sm:text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
                  Humanity&apos;s departure from our old, oppressive economic
                  system into abundance.
                </p>
                <div className="mt-6">
                  <a
                    href="#join"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-gray-800 hover:to-gray-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Join us
                  </a>
                </div>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">
                    Exodus is a program using science to mitigate risks of
                    transformative AI (TAI) and end poverty.
                  </strong>
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Human misuse of Artificial Intelligence models driven by
                  economic scarcity enables adversaries and amplifies high risks
                  from abusive power concentration, leading to poverty,
                  unemployment, misinformation, and ecological degeneration.
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Economic inequality <strong className="text-foreground">must</strong>{" "}
                  stop, as it leads to crimes against humanity and our planet.
                  Our solution is the issuance of a globally available economic
                  medium based in the atomic frequency (caesium standard),
                  yielding a fixed capacity of 7.94 × 100 Septillion Units
                  (10<sup>26</sup>), with each Unit defined as 1 int$ in value.
                </p>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Globally Verifiable Abundance */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-emerald rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Globally Verifiable Abundance
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                {abundancePoints.map((item) => (
                  <div
                    key={item.title}
                    className="glass-card-inner rounded-xl p-4 sm:p-6"
                  >
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
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
          </LiquidGlassCard>
        </div>

        {/* Common Source Moment */}
        <div className="animate-fade-in-up">
          <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  The Common Source Moment
                </h2>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 space-y-4">
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  Every economic structure humans have devised exists to manage
                  scarcity. Markets, prices, competition, and property rights
                  are all mechanisms for allocating things that are not
                  sufficiently available for everyone to have what they need.
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  <strong className="text-foreground">
                    The Common Source Moment abolishes scarcity as the
                    organizing premise of settlement, as it is a medium
                    physically derived from a constantly abundant measure.
                  </strong>
                </p>
                <p className="text-sm sm:text-base text-foreground-secondary leading-relaxed">
                  CSM is governed through how it is maintained. Scarcity stops
                  governing the meaning of economic activity. Instead of
                  extracting attention, the system values attentiveness. The
                  operational constraint is therefore how well institutions
                  govern, keep registries honest, and coordinate under shared
                  rules.
                </p>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Join us */}
        <div id="join" className="animate-fade-in-up scroll-mt-24">
          <LiquidGlassCard className="glass-card glass-card-orange rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-3">
                  Join us
                </h2>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
                  We collectively align on uniform power distribution through
                  good governance, enabling us to collectively address the
                  interconnected crises of poverty, unemployment,
                  misinformation, and ecological degeneration.
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 max-w-lg mx-auto">
                <JoinForm />
              </div>

              <p className="mt-6 text-center text-sm text-foreground-tertiary">
                All communications are handled under the{" "}
                <a
                  href="/privacy-policy"
                  className="text-classic-blue hover:text-classic-purple transition-colors duration-200 underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </LiquidGlassCard>
        </div>
      </div>
    </div>
  );
}
