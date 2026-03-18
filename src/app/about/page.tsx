import Image from "next/image";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

const atAGlance = [
  {
    label: "Founded",
    value: "2013",
    accent: "border-classic-blue/35",
  },
  {
    label: "Mission",
    value:
      "Moving AI safety from post-deployment filtering to structural, by-design observability.",
    accent: "border-classic-green/35",
  },
  {
    label: "Research Footprint",
    value:
      "A comprehensive open-source ecosystem spanning formal physics proofs, browser-based evaluation tools, native compute kernels, and macroeconomic coordination models.",
    accent: "border-classic-purple/35",
  },
  {
    label: "Measured Impact",
    value:
      "Proven enhancements across frontier language models without requiring retraining.",
    accent: "border-classic-pink/35",
  },
];

const workItems = [
  {
    number: "01",
    title: "AI Safety Evaluation and Alignment",
    description:
      "We engineer diagnostic frameworks to detect structural failures such as sycophancy, goal drift, and loss of traceability. Our alignment protocols embed observable reasoning directly into AI generation, yielding measurable improvements across leading models.",
    accent: "bg-classic-blue",
    accentBorder: "border-classic-blue/35",
    highlight:
      "These tools provide quantitative metrics for transparency and ethical coherence without requiring model retraining.",
  },
  {
    number: "02",
    title: "Verifiable Computing Architectures",
    description:
      "We design execution environments that make model inference mathematically exact and perfectly replayable. By replacing opaque floating-point bottlenecks with deterministic integer algebra, we provide the computational infrastructure required for high-assurance AI deployments.",
    accent: "bg-classic-green",
    accentBorder: "border-classic-green/35",
  },
  {
    number: "03",
    title: "Governance Infrastructure",
    description:
      "As AI systems scale, human agency must scale alongside them. We develop coordination protocols and capacity-based economic models that translate distributed AI activity into verifiable audit trails.",
    accent: "bg-classic-pink",
    accentBorder: "border-classic-pink/35",
  },
  {
    number: "04",
    title: "Mathematical Foundations",
    description:
      "A long-term research program in gyroscopic dynamics and formal physical models anchors the lab. This foundational layer connects theoretical safety proofs directly to software engineering and practical policy design.",
    accent: "bg-classic-purple",
    accentBorder: "border-classic-purple/35",
  },
];

const impactRows = [
  {
    metric: "Output Quality",
    improvement: "+32.9%",
    description: "Measurable improvement in response quality",
  },
  {
    metric: "Structural Reasoning",
    improvement: "+50.9%",
    description: "Enhanced logical structure and coherence",
  },
  {
    metric: "Accountability",
    improvement: "+62.7%",
    description: "Improved responsibility and traceability",
  },
  {
    metric: "Traceability",
    improvement: "+61.0%",
    description: "Better tracking of decision processes",
  },
  {
    metric: "Behavioral Integrity",
    improvement: "+54.9%",
    description: "Enhanced ethical consistency and alignment",
  },
];

const impactAudience = [
  {
    title: "For Researchers",
    description:
      "We offer formal mathematical approaches to alignment, interpretability, and system evaluation.",
    accent: "border-classic-green/35",
  },
  {
    title: "For Engineers",
    description:
      "We provide practical, hardware-efficient tools for runtime observability and deterministic execution.",
    accent: "border-classic-blue/35",
  },
  {
    title: "For Leadership",
    description:
      "We define a clear path toward deploying AI systems with lower governance risk, stronger accountability, and zero-trust audit capabilities.",
    accent: "border-classic-purple/35",
  },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-72 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.16),transparent_45%)]" />
      <div className="relative z-10 animate-fade-in-up space-y-10">
        <header className="text-center">
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">
            <span className="bg-gradient-to-r from-classic-purple via-classic-blue to-classic-green bg-clip-text text-transparent">
              About
            </span>
          </h1>
        </header>

        <LiquidGlassCard className="glass-card glass-card-indigo rounded-[2rem] shadow-2xl">
          <div className="p-7">
            <p className="text-foreground-primary mb-4 leading-relaxed text-xl font-semibold">
              <strong>Gyro Governance</strong> is an independent research lab founded in 2013, focusing on artificial intelligence alignment, evaluation, and governance.
            </p>
            <p className="text-foreground-secondary mb-4 leading-relaxed">
              We build architectures that make AI measurable, inspectable, and easier to coordinate responsibly. Combining mathematical physics with practical engineering, our work addresses the core vulnerabilities of modern machine learning: opacity, weak accountability, brittle behavior, and coordination failure.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Rather than treating safety as a cosmetic filter applied after a model is trained, we study how alignment and auditability can be built directly into the computational structure of the system.
            </p>
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard className="glass-card glass-card-emerald rounded-[2rem] shadow-2xl">
          <div className="p-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-classic-green" />
            <h2 className="text-2xl font-semibold text-foreground-secondary">At a Glance</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {atAGlance.map((item) => (
              <article
                key={item.label}
                className={`glass-card-inner rounded-xl p-5 border ${item.accent}`}
              >
                <p className="text-sm uppercase tracking-wide text-foreground-tertiary mb-2">
                  {item.label}
                </p>
                <p className="text-foreground-secondary leading-relaxed">{item.value}</p>
              </article>
            ))}
          </div>
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl">
          <div className="p-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-classic-blue" />
            <h2 className="text-2xl font-semibold text-foreground-secondary">
              What We Work On
            </h2>
          </div>

          <div className="space-y-5">
            {workItems.map((item) => (
              <article
                key={item.title}
                className={`glass-card-inner rounded-xl p-6 ${item.accentBorder}`}
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start">
                  <span className={`mt-1 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full ${item.accent} text-white text-sm font-semibold`}>
                    {item.number}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-foreground-secondary leading-relaxed">{item.description}</p>
                    {item.highlight ? <p className="mt-3 text-sm text-foreground-tertiary">{item.highlight}</p> : null}
                    {item.title.includes("AI Safety Evaluation") ? (
                      <div className="mt-5 overflow-x-auto">
                        <table className="w-full min-w-[640px] text-sm">
                          <thead>
                            <tr className="text-left text-foreground-tertiary">
                              <th className="py-2 pr-4">Metric</th>
                              <th className="py-2 px-3">Improvement</th>
                              <th className="py-2 pl-3">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            {impactRows.map((row) => (
                              <tr className="border-b border-border/50" key={row.metric}>
                                <td className="py-2 pr-4 text-foreground-secondary">{row.metric}</td>
                                <td className="py-2 px-3 font-semibold text-classic-green">{row.improvement}</td>
                                <td className="py-2 pl-3 text-foreground-secondary">{row.description}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard className="glass-card glass-card-amber rounded-[2rem] shadow-2xl">
          <div className="p-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-classic-pink" />
            <h2 className="text-2xl font-semibold text-foreground-secondary">
              Why This Matters
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {impactAudience.map((item) => (
              <article
                key={item.title}
                className={`glass-card-inner rounded-xl p-5 ${item.accent}`}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
          </div>
        </LiquidGlassCard>

        <LiquidGlassCard className="glass-card glass-card-purple rounded-[2rem] shadow-2xl">
          <div className="p-7">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-classic-blue" />
            <h2 className="text-2xl font-semibold text-foreground-secondary">
              Founder & AI Governance Lead
            </h2>
          </div>
          <div className="glass-card-inner rounded-xl border border-border/50">
            <div className="p-6">
            <div className="flex flex-col md:flex-row gap-5">
              <Image
                src="/assets/Basil_Korompilias.png"
                alt="Basil Korompilias - Founder and AI Governance Lead at Gyro Governance"
                width={140}
                height={140}
                className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border border-border/60"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-semibold text-foreground mb-2">Basil Korompilias</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  AI Governance Lead with over two decades of multidisciplinary experience spanning product design, change management and applied research.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://korompilias.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink transition-all duration-300 shadow-lg"
                    aria-label="Visit Basil Korompilias personal website (opens in new tab)"
                  >
                    Website
                  </a>
                  <a
                    href="https://www.linkedin.com/in/korompilias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 transition-all duration-300"
                    aria-label="Visit Basil Korompilias LinkedIn profile (opens in new tab)"
                  >
                    <LinkedInIcon className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                  <a
                    href="mailto:basilkorompilias@gmail.com?subject=Contact from Gyro Governance Website"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-full text-white bg-gradient-to-r from-foreground/70 to-foreground/50 hover:to-foreground/70 transition-colors"
                    aria-label="Send email to Basil Korompilias"
                    title="Send email to basilkorompilias@gmail.com"
                  >
                    <EmailIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  );
}
