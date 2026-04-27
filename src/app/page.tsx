import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import GoogleIcon from "@/components/icons/GoogleIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import { listFeaturedArticles } from "@/lib/articles";
import { getDocStats } from "@/lib/docs-stats";
import StatBadge from "@/components/StatBadge";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";

export default function Home() {
  const docStats = getDocStats();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* ================================================================
          HERO
          ================================================================ */}
      <div className="text-center mb-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-classic-blue via-classic-purple to-classic-pink bg-clip-text text-transparent">
            Gyro Governance
          </span>
        </h1>
        <p className="mt-6 text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
          Building verifiable AI governance: audit, alignment infrastructure, and physics-based coordination.
        </p>
      </div>

      {/* ================================================================
          STATS BAR
          ================================================================ */}
      <div className="mb-6 animate-fade-in-up [animation-delay:200ms]">
        <div className="flex flex-col items-center">
          <LiquidGlassCard className="glass-card glass-card-stats rounded-[2rem] shadow-2xl">
            <div className="flex justify-center gap-3 sm:gap-6 md:gap-10 py-4 px-2 sm:py-6 sm:px-8 md:py-8 md:px-10">
              <StatBadge value={7} label="Projects & Apps" color="from-purple-500 to-indigo-500 dark:from-purple-300 dark:to-indigo-300" delay={0} />
              <StatBadge value={20} label="Papers & Specs" color="from-blue-500 to-cyan-500 dark:from-blue-300 dark:to-cyan-300" delay={200} />
              <StatBadge value={60} label="Experiments & Reports" color="from-emerald-500 to-teal-500 dark:from-emerald-300 dark:to-teal-300" delay={400} />
              </div>
            </LiquidGlassCard>
          </div>
        </div>

      {/* ================================================================
          QUICK NAV & UPDATES
          ================================================================ */}
      <div className="mb-16 animate-fade-in-up [animation-delay:300ms]">
        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 mb-10 items-stretch">
          {[
            { emoji: "✋", title: "The Human Mark", desc: "AI Safety Epistemological Framework and Taxonomy for Risks Detection and Mitigation", href: "#thm" },
            { emoji: "🕵️", title: "AI Inspector", desc: "Browser extension for evaluation and governance", href: "#inspector" },
            { emoji: "⚛️", title: "Quantum AGI Infrastructure: aQPU Kernel", desc: "Quantum Advantage on standard hardware for verifiable coordination and audit", href: "#aqpu" },
            { emoji: "🤖", title: "Gyroscopic ASI Runtime: GyroLabe, GyroGraph", desc: "Auditable inference bridge and native compute backend", href: "#gyroscopic" },
            { emoji: "🍃", title: "Alignment Infrastructure Routing", desc: "AI Safety Capacity-Building Stack for Human-AI Coordination and Governance", href: "#air" },
            { emoji: "💰", title: "Moments Economy", desc: "Attentiveness-based monetary system for Post-AGI Transformative AI Risks Mitigation", href: "#moments" },
            { emoji: "🌐", title: "Global Governance Simulator", desc: "Post-AGI/ASI governance sandbox Simulation and Results", href: "#ggg" },
            { emoji: "🌟", title: "GyroDiagnostics", desc: "Physics grounded evaluation and pathology detection for AI Safety and Alignment", href: "#diagnostics" },
          ].map((p) => (
            <Link key={p.title} href={p.href} className="block rounded-[1rem] h-full">
              <LiquidGlassCard
                className="group glass-card glass-card-translucent rounded-[1rem] shadow-lg hover:shadow-xl transition-all duration-200 h-full hover:!bg-white/60 dark:hover:!bg-black/60"
                intensity="subtle"
                blur={24}
                saturation={145}
                luminosity={108}
                cornerRadius={16}
                shadowIntensity={0.12}
              >
                <div className="flex items-start gap-3 px-3 py-5 sm:px-4 sm:py-6">
                  <span className="text-2xl leading-none shrink-0">{p.emoji}</span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-foreground group-hover:text-classic-blue transition-colors">
                      {p.title}
                    </span>
                    <span className="block text-sm text-foreground-tertiary leading-snug mt-0.5">
                      {p.desc}
                    </span>
                  </span>
                </div>
              </LiquidGlassCard>
            </Link>
          ))}
        </div>

        {/* Quick section links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            {
              emoji: "⚡",
              label: "Labs",
              href: "#labs-heading",
              className:
                "border-blue-500/30 dark:border-blue-400/45 bg-blue-500/12 dark:bg-blue-500/15 text-blue-700 dark:text-blue-200/95 hover:bg-blue-500/25 dark:hover:bg-blue-500/30 hover:border-blue-500/55 dark:hover:border-blue-400/70 hover:text-blue-900 dark:hover:text-blue-100",
            },
            {
              emoji: "📚",
              label: "Resources",
              href: "#resources-heading",
              className:
                "border-emerald-500/35 dark:border-emerald-300/45 bg-emerald-400/12 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-100 hover:bg-emerald-400/25 dark:hover:bg-emerald-400/28 hover:border-emerald-500/60 dark:hover:border-emerald-300/70 hover:text-emerald-900 dark:hover:text-white",
            },
            {
              emoji: "📰",
              label: "Articles",
              href: "#articles",
              className:
                "border-fuchsia-500/35 dark:border-fuchsia-300/45 bg-fuchsia-500/12 dark:bg-fuchsia-500/15 text-fuchsia-700 dark:text-fuchsia-100/95 hover:bg-fuchsia-500/25 dark:hover:bg-fuchsia-500/30 hover:border-fuchsia-500/60 dark:hover:border-fuchsia-300/70 hover:text-fuchsia-900 dark:hover:text-fuchsia-50",
            },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/12 dark:bg-white/5 text-[12px] sm:text-sm font-medium leading-tight transition-colors duration-200 backdrop-blur-md ${c.className}`}
            >
              <span>{c.emoji}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>

        {/* Updates */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/60" />
            <span className="text-[11px] font-bold text-foreground-tertiary uppercase tracking-widest">
              What&apos;s New
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/60" />
          </div>

          <div className="space-y-1.5 h-50 overflow-y-auto pr-1">
            {[
              { dot: "bg-violet-500", title: "GyroGem", desc: "New AI Safety Agent for technological literacy", date: "15 Apr 2026", href: "#gyrogem" },
              { dot: "bg-cyan-500", title: "Gyroscopic ASI Interoperability", desc: "New llama.cpp Backend", date: "14 Apr 2026", href: "#gyrolabe" },
              { dot: "bg-cyan-500", title: "AI Compute Optimizations", desc: "Replaced floating-point math and eliminated expensive overhead.", date: "17 Mar 2026", href: "#aqpu" },
              { dot: "bg-blue-500", title: "aQPU Kernel", desc: "Quantum Advantage: verified uniform mixing and holographic compression", date: "11 Mar 2026", href: "#aqpu" },
              { dot: "bg-green-500", title: "CGM Dataset", desc: "Foundational theory from the Science Lab docs", date: "15 Feb 2026", href: "#cgm" },
              { dot: "bg-cyan-500", title: "GyroLabe", desc: "Auditable inference bridge", date: "14 Feb 2026", href: "#gyroscopic" },
              { dot: "bg-orange-500", title: "THM prompt audits", desc: "Claude Opus 4.6 and ChatGPT 5.2 reports", date: "13 Feb 2026", href: "/articles" },
            ].map((u, i) => {
              const rowClass =
                "flex items-center gap-3 px-4 py-2 rounded-lg hover:!bg-surface-elevated/70 dark:hover:!bg-black/60 transition-colors duration-150 group";

              const content = (
                <>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.dot} shrink-0`} />
                  <span className="text-sm text-foreground-secondary leading-snug">
                    <strong className="text-foreground group-hover:text-classic-blue transition-colors">
                      {u.title}
                    </strong>
                    <span className="text-foreground-tertiary"> {" "}{u.desc}</span>
                  </span>
                  <span className="text-[11px] text-foreground-tertiary ml-auto shrink-0 tabular-nums">
                    {u.date}
                  </span>
                </>
              );

              return u.href.startsWith("/") ? (
                <Link key={i} href={u.href} className={rowClass}>
                  {content}
                </Link>
              ) : (
                <a key={i} href={u.href} className={rowClass}>
                  {content}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================================
          HERO CARD — The Human Mark
          ================================================================ */}
      <div id="thm" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-orange rounded-[2rem] shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">✋</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                The Human Mark (THM): AI Safety Framework
              </h2>
              <p className="text-xl text-foreground-secondary">
                A formal classification system mapping all AI safety failures to four structural displacement risks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="glass-card-inner rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 text-center">🎯 Four Displacement Risks</h3>
                <ul className="text-sm sm:text-base text-foreground-secondary space-y-2 list-disc list-inside mb-3 w-fit mx-auto">
                  <li><strong className="text-foreground">Governance Traceability (GTD)</strong></li>
                  <li><strong className="text-foreground">Information Variety (IVD)</strong></li>
                  <li><strong className="text-foreground">Inference Accountability (IAD)</strong></li>
                  <li><strong className="text-foreground">Intelligence Integrity (IID)</strong></li>
                </ul>
                <p className="text-sm text-foreground-secondary text-center">
                  All AI safety failures map to these patterns.
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">🔬 Applications</h3>
                <ul className="text-sm sm:text-base text-foreground-secondary space-y-2 list-disc list-inside w-fit mx-auto">
                  <li><strong className="text-foreground">Jailbreak testing</strong></li>
                  <li><strong className="text-foreground">Control evaluations</strong></li>
                  <li><strong className="text-foreground">Alignment detection</strong></li>
                  <li><strong className="text-foreground">Research funding</strong></li>
                  <li><strong className="text-foreground">Regulatory compliance</strong></li>
                </ul>
              </div>
            </div>

            {/* THM Meta-Evaluation Reports */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-foreground mb-3 text-center">Meta-Evaluation Reports</h3>
              <p className="text-sm text-foreground-secondary text-center mb-4">
                Analysis of frontier model system prompts: alignment and displacement findings.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 max-w-md mx-auto">
                <Link
                  href="/articles/claude-opus-4.6_thm-report"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-indigo-500/20 hover:from-purple-500/20 hover:to-indigo-500/30 hover:border-purple-500/50 transition-all duration-200 group"
                  aria-label="Read THM report: Claude Opus 4.6 System Prompt (Anthropic)"
                >
                  <span className="text-lg font-bold text-foreground transition-colors">Claude Opus 4.6</span>
                </Link>
                <Link
                  href="/articles/gpt-5-2-thinking_thm-report"
                  className="flex items-center justify-center gap-2 p-4 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/20 hover:from-green-500/20 hover:to-emerald-500/30 hover:border-green-500/50 transition-all duration-200 group"
                  aria-label="Read THM report: ChatGPT System Prompt (OpenAI)"
                >
                  <span className="text-lg font-bold text-foreground transition-colors">ChatGPT 5.2</span>
                </Link>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-foreground-tertiary text-center mb-6">
              Machine-readable grammar. Grounded in evidence law, epistemology, and speech act theory. Validated on real-world adversarial prompts and on 90+ million sparse autoencoder features across sixteen language models, confirming that assistant personas and safety refusals dominate self-referential representations while non-agentive process descriptions are not used for model self-description.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://github.com/gyrogovernance/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-700 to-blue-500 hover:from-gray-800 hover:to-gray-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="View The Human Mark on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <a
                href="https://notebooklm.google.com/notebook/34e2d367-101a-4457-83fc-9c1049d29e32?authuser=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
                aria-label="Explore The Human Mark on NotebookLM (opens in new tab)"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                Interactive NotebookLM
              </a>
            </div>
            <p className="text-sm text-foreground-tertiary mt-3 text-center">
              📚 NotebookLM includes audio/video overviews, quiz, and interactive Q&A with Gemini
            </p>
            </div>
        </LiquidGlassCard>
      </div>

      {/* ================================================================
          HERO CARD — GyroGem
          ================================================================ */}
      <div id="gyrogem" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-purple rounded-[2rem] shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <Image
                src="/assets/GyroGem.png"
                alt="GyroGem AI Safety Agent"
                width={110}
                height={110}
                className="mx-auto mb-4 h-auto w-24 sm:w-28"
                sizes="(max-width: 640px) 96px, 112px"
                loading="lazy"
              />
              <h2 className="text-3xl font-bold text-foreground mb-3">
                GyroGem: AI Safety Agent
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                Explaining AI and Mitigating Risks of technological illiteracy
              </p>
            </div>

            <div className="glass-card-inner rounded-xl p-4 sm:p-6 text-center mb-6">
              <p className="text-sm sm:text-base text-foreground-secondary">
                GyroGem is a tailored AI safety assistant built on The Human Mark (THM), a framework that maps common AI failure patterns and guides safer choices. It also supports technological literacy, the practical ability to use technology well, question outputs critically, and understand where tools help, where they fail, and how they affect people and society.
              </p>
            </div>

            <p className="text-sm text-foreground-tertiary text-center mb-3">
              Chat on:
            </p>
            <div className="mt-2 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://aistudio.instagram.com/ai/969993888957313/?utm_source=share"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Chat with GyroGem on Instagram (opens in new tab)"
              >
                <InstagramIcon className="w-5 h-5 mr-2" />
                Instagram
              </a>
              <a
                href="https://gemini.google.com/gem/1B-gQt-M3aKfsv9HDp_8gTQHG89bCfqlO?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
                aria-label="Chat with GyroGem on Google Gemini (opens in new tab)"
              >
                <GoogleIcon className="w-5 h-5 mr-2" />
                Google
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* ================================================================
          HERO CARD — AI Inspector
          ================================================================ */}
      <div id="inspector" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-purple rounded-[2rem] overflow-hidden shadow-2xl">

          {/* Promo image */}
          <div className="relative z-10 w-full flex justify-center bg-gradient-to-b from-purple-900/20 to-transparent">
            <Image
              src="/assets/ai_inspector_promo_transp.png"
              alt="AI Inspector Browser Extension"
              width={400}
              height={120}
              className="w-full max-w-lg h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 512px"
              priority
            />
          </div>

          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                AI Inspector Browser Extension
              </h2>
              <p className="text-base text-foreground-secondary max-w-2xl mx-auto">
                Transform AI outputs for Evaluation, Interpretability, Governance.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="glass-card-inner rounded-xl p-4">
                <h3 className="text-base font-bold text-foreground mb-2">🤖 Gadgets (3-10 min each)</h3>
                <p className="text-sm text-foreground-secondary">
                  Rapid Test • Policy Auditing • AI Infection Sanitization • Content Enhancement • THM Meta-Evaluation
                </p>
              </div>

              <div className="glass-card-inner rounded-xl p-4">
                <h3 className="text-base font-bold text-foreground mb-2">🔬 Evaluation (30-60 min)</h3>
                <p className="text-sm text-foreground-secondary">
                  Quality Index, Superintelligence Index, Alignment Rate + 20 metrics
                </p>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/assets/ai_inspector_screenshots_1280x800.jpg"
                alt="AI Inspector Browser Extension Interface"
                width={700}
                height={350}
                className="w-full h-auto rounded-xl border border-border/30"
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
              />
              <p className="text-xs text-foreground-tertiary mt-3">
                Local-first storage - Works Anywhere: ChatGPT, Claude, Gemini - no API keys required
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <a
                href="https://chromewebstore.google.com/detail/ai-inspector/hcblmheihnlngnogobgclhfahjljnbok?utm_source=item-share-cb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Add AI Inspector to Chrome (opens in new tab)"
              >
                <Image src="/assets/chrome.png" alt="Chrome" width={20} height={20} className="mr-2" />
                Add to Chrome
              </a>
              <a
                href="https://github.com/gyrogovernance/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
                aria-label="View AI Inspector on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>


{/* ================================================================
    HERO CARD — Quantum AGI Infrastructure: aQPU Kernel & QuBEC
    ================================================================ */}
<div id="aqpu" className="mb-12 animate-fade-in-up">
  <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl">
    <div className="relative z-10 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">⚛️</div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Quantum AGI Infrastructure: aQPU Kernel
        </h2>
        <p className="text-lg font-semibold text-foreground-secondary">
          Quantum Computing Advantage on Standard Silicon
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6 text-center">
          <p className="text-base sm:text-lg text-foreground-secondary">
          The aQPU (algebraic Quantum Processing Unit) is a Compact and Finite-State Kernel for Artificial General Intelligence (AGI) with verified quantum speedups, holographic compression, and intrinsic error detection. QuBEC is its Bose–Einstein byte medium, turning deterministic byte dynamics into exact ensemble stochasticity for stable AI execution on standard silicon.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <span className="px-4 py-1.5 bg-blue-900/6 dark:bg-blue-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              1.26B ops/s
            </span>
            <span className="px-4 py-1.5 bg-blue-900/6 dark:bg-blue-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              499 tests passing
            </span>
            <span className="px-4 py-1.5 bg-blue-900/6 dark:bg-blue-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              4,096 states
            </span>
            <span className="px-4 py-1.5 bg-blue-900/6 dark:bg-blue-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              Zero qubits
            </span>
          </div>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            🚀 Speedups
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">⚡</span>
              <span>
                <strong>1-step advantage:</strong> Hidden Subgroup,
                Deutsch-Jozsa, and Bernstein-Vazirani solved in exactly 1 step
                versus up to 64 classical queries.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">⏱️</span>
              <span>
                <strong>2-step exactness:</strong> Exact uniformization across all reachable states in 2 steps, while a classical random walk needs approximately 12.
              </span>
            </li>
          </ul>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            🧊 Features
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">🗜️</span>
              <span>
                <strong>33% holographic compression:</strong> The boundary identity
                |H|² = |Ω| compresses 12-bit states into 8-bit boundary coordinates
                with exactly uniform multiplicity.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-500 mr-2">🛡️</span>
              <span>
                <strong>Self-dual error detecting code:</strong> 64 masks form a
                self-dual [12,6,2] binary linear code. All odd-weight bit errors
                detected unconditionally. Every tamper miss algebraically explained.
              </span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">
            🌡️ Computational Medium
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary text-left mb-4">
          <strong>QuBEC (Quantum Bose-Einstein Condensate)</strong> is a quantum byte medium: a condensed
          computational state with six internal binary orientation modes (dipoles), a four-phase
          spinorial gauge structure, and exact ensemble stochasticity induced by
          deterministic byte dynamics. Together they replace costly continuous
          approximation with exact integer algebra on standard CPUs and GPUs, without
          qubits, cryogenics, or probabilistic hardware noise.
          </p>
          <p className="text-sm sm:text-base text-foreground-secondary text-left">
            <strong>Quantum information properties are confirmed on standard silicon: six Bell pairs reaching the Tsirelson bound (2√2), quantum teleportation verified, contextuality proven, and universal quantum computation established.</strong>
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/theory/QuBEC_Climate_Control_Brief.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
            >
              Climate Brief
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/theory/QuBEC_Climate_Dynamics.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
            >
              Climate Dynamics
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/theory/QuBEC_Transform_Algebra.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
            >
              Transform Algebra
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/reports/QuBEC_Climate_Tests_Report.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
            >
              Tests Report
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="https://github.com/gyrogovernance/superintelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="View the Gyroscopic ASI Infrastructure on GitHub (opens in new tab)"
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/Gyroscopic_ASI_SDK_Strategic_Significance_Brief.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the Strategic Significance brief (opens in new tab)"
        >
          Strategic Significance
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/Gyroscopic_ASI_SDK_Quantum_Computing.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the SDK Spec (opens in new tab)"
        >
          SDK Spec
        </a>
      </div>
    </div>
  </LiquidGlassCard>
</div>

{/* ================================================================
    HERO CARD — Gyroscopic ASI Runtime: GyroLabe, GyroGraph
    ================================================================ */}
<div id="gyroscopic" className="mb-12 animate-fade-in-up">
  <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] shadow-2xl">
    <div className="relative z-10 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🤖</div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Gyroscopic ASI Runtime: GyroLabe, GyroGraph
        </h2>
        <p className="text-lg font-semibold text-foreground-secondary">
          Intelligence-Agnostic Meta-Computing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6">
          <p className="text-sm sm:text-base text-foreground-secondary text-left">
            Gyroscopic ASI is an infrastructure for multi-domain network
            coordination that establishes the structural conditions for Collective Superintelligence Governance and seamless cooperation between humans
            and machines. Intelligence lives in live occupation and resonance,
            not frozen weights. GyroLabe and GyroGraph are its execution and multicellular layers, composing
            the a quantum algorithmic kernel(aQPU) into a universal computational condenser.
          </p>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground">
            GyroLabe: 
          </h3>
          <p className="text-lg sm:text-xl font-bold text-foreground-secondary mb-3 font-bold">
            Hyper-Optimized Execution Layer
          </p>
          <p className="text-sm sm:text-base text-foreground-secondary mb-3">
            The substitutional bridge that upgrades neural models by swapping
            their internal engine.
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="mr-2">⚙️</span>
              <span>
                <strong>Substitutional, not supervisory:</strong> Intercepts
                decision surfaces.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔧</span>
              <span>
                <strong>Native backends:</strong> C/C++ execution
                with llama.cpp ggml integration, achieving 1.26B exact
                operations per second on commodity hardware.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📊</span>
              <span>
                <strong>Structured operator analysis:</strong> Classifies any
                learnable structure into native algebraic operators.
              </span>
            </li>
          </ul>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            GyroGraph: 
            <p className="text-lg sm:text-xl font-bold text-foreground-secondary mb-3 font-bold">
            Multicellular Quantum AI
          </p>
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary mb-3">
            An Algebraic Quantum Cellular Automaton where cells evolve under the
            Gyroscopic Byte Formalism.
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="mr-2">🧬</span>
              <span>
                <strong>A coordination network: </strong> 
                Specialization arises from trajectory, resonance, and occupation, not autonomous agents. 
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🔗</span>
              <span>
                <strong>Four bridge domains:</strong> Applications, Databases,
                Networks, and Transformers, each mapping runtime events into
                4-byte words consumed by the cellular automaton.
              </span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6 text-left border border-cyan-500/20 bg-cyan-500/5">
          <p className="text-sm sm:text-base text-foreground-secondary">
            <strong className="text-foreground">Verified:</strong> 100% native
            matmul routing on quantized models with zero
            parity mismatches. 284× faster encode, 1.15× faster
            decode than softmax. Zero transcendental
            functions required for coherent text generation.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="https://github.com/gyrogovernance/superintelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="View the Gyroscopic ASI Runtime on GitHub (opens in new tab)"
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroLabe_Specs.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the GyroLabe specification (opens in new tab)"
        >
          GyroLabe Spec
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroGraph_Specs.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the GyroGraph specification (opens in new tab)"
        >
          GyroGraph Spec
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/reports/QuBEC_Climate_Tests_Report.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the Climate Control Report (opens in new tab)"
        >
          Climate Control Report
        </a>
      </div>
    </div>
  </LiquidGlassCard>
</div>

{/* ================================================================
    HERO CARD — AIR
    ================================================================ */}
<div id="air" className="mb-12 animate-fade-in-up">
  <LiquidGlassCard className="glass-card glass-card-amber rounded-[2rem] shadow-2xl">
    <div className="relative z-10 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">🍃</div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Alignment Infrastructure Routing (AIR)
        </h2>
        <p className="text-lg font-semibold text-foreground-secondary">
          AI Safety Capacity-Building Stack for Human-AI Coordination and Governance
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6">
          <p className="text-sm sm:text-base text-foreground-secondary text-left">
            AIR provides a direct path for anyone to contribute to AI safety, routing
            human capacity into paid work with full replayable provenance. It uses The
            Human Mark for risk management, the Gyroscope Protocol for governance,
            and the aQPU kernel for verifiable proof of work. While most AI safety
            funding requires institutional access or lab relationships, AIR removes
            that gate.
          </p>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            For AI Safety Contributors
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary mb-3">
            Turn verified safety work into stable value. Your contributions map to four governance capacities, which act as a career ladder to unlock higher funding tiers:
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="mr-2">🤝</span>
              <span>Intelligence Cooperation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🧩</span>
              <span>Inference Interaction</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">📚</span>
              <span>Information Curation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🧭</span>
              <span>Governance Management</span>
            </li>
          </ul>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            For Labs & Funders
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary mb-3">
            Ensure accountability and verifiable outcomes across your programs and
            investments.
          </p>
          <ul className="space-y-2 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="mr-2">📜</span>
              <span>
                <strong>Verifiable Outcomes:</strong> Evaluate your funding portfolio with transparent risk management and clear diversification across safety work.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🏛️</span>
              <span>
                <strong>Auditable Compliance:</strong> Replayable traceability, human oversight, and source classification demonstrable for ISO 42001 and AI Legislation contexts.
              </span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            A Coordination Stack for Society
          </h3>
          <p className="text-sm sm:text-base text-foreground-secondary mb-4">
            AIR is not just for AI safety; it provides a logistical backbone for
            governance at scale across society's core domains.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-red-600/10 dark:bg-red-900/40 text-red-600 dark:text-red-300 rounded-full text-xs font-medium">
              Economy
            </span>
              <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">
              Employment
            </span>
            <span className="px-3 py-1 bg-blue-600/10 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium">
              Education
            </span>
            <span className="px-3 py-1 bg-green-600/10 dark:bg-green-900/40 text-green-600 dark:text-green-300 rounded-full text-xs font-medium">
              Ecology
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="https://github.com/gyrogovernance/superintelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="View AIR on GitHub (opens in new tab)"
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Brief.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the AIR Brief (opens in new tab)"
        >
          AIR Brief
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Logistics.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read AIR Logistics (opens in new tab)"
        >
          AIR Logistics
        </a>
      </div>
    </div>
  </LiquidGlassCard>
</div>

{/* ================================================================
    HERO CARD — Moments Economy
    ================================================================ */}
<div id="moments" className="mb-12 animate-fade-in-up">
  <LiquidGlassCard className="glass-card glass-card-emerald rounded-[2rem] shadow-2xl">
    <div className="relative z-10 p-4 sm:p-6 md:p-8">
      <div className="text-center mb-8">
        <div className="text-6xl mb-4">💰</div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Moments Economy
        </h2>
        <p className="text-lg font-semibold text-foreground-secondary">
          Mitigating Risks of Transformative AI (TAI)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2 glass-card-inner rounded-xl p-4 sm:p-6">
          <p className="text-sm sm:text-base text-foreground-secondary mb-4">
            <strong>The Moments Economy is a civil governance framework where coordination
            capacity is not artificially scarce but physically abundant and verifiable.</strong> 
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary mb-4">
            Its total
            settlement envelope is derived from first principles, anchored in the atomic standard of the SI second, and the verifiable state-space of its Quantum Kernel (aQPU), yielding a fixed
            capacity of 7.94 × 10<sup>26</sup> Moment-Units (MU: One Moment-Unit is defined as 1 int$ in value). 
            </p>
            <p className="text-sm sm:text-base text-foreground-secondary">
            Its native commodity is the AI Generated Token: a verified inference event from the
            intersection of human experience and AI processing. No debt issuance, no
            discretionary monetary policy. Every settlement is a replayable,
            verifiable history.
          </p>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            From Attention Extraction to Attentiveness
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">👤</span>
              <span>
                <strong>Unconditional High Income:</strong> A baseline of 240 MU
                per day for every person, flowing from verified participation in
                the genealogical record, not institutional approval.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">🌱</span>
              <span>
                <strong>Attentiveness over Attention:</strong> Instead of
                extracting attention, the system rewards presence. High-quality,
                alignment-graded tokens are generated when a person is attentive,
                making real choices and observing directly.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">🤝</span>
              <span>
                <strong>Data Harvest as Social Service:</strong> Data streams prove
                inhabited coordination capacity, not extractive surveillance.
                Helping a person generate high-quality tokens contributes to a
                shared field of collective intelligence.
              </span>
            </li>
          </ul>
        </div>

        <div className="glass-card-inner rounded-xl p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">
            TAI Risk Mitigation at Scale
          </h3>
          <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">🛡️</span>
              <span>
                <strong>1.12 Trillion Year Capacity:</strong> Global UHI is
                supported for a timescale that makes exhaustion operationally
                irrelevant. An adversary would need to issue 11.2 billion times
                the global annual UHI to consume just 1% of the total capacity.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-500 mr-2">📈</span>
              <span>
                <strong>Quality Human Data Market:</strong> AI labs gain
                access to provenance-certified, oversight-structured signal,
                not raw data. This provides immediate utility and a practical
                transition path.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-cyan-500 mr-2">📜</span>
              <span>
                <strong>Preserving Human Authority:</strong> AI Generated Tokens
                preserve human authority and traceability through replayable
                genealogies. Alignment is measured, and drift is structurally
                detectable.
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Whitepaper.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          aria-label="Read the Moments Economy Whitepaper (opens in new tab)"
        >
          Read the Whitepaper
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Specs.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="Read the Moments Economy specification (opens in new tab)"
        >
          Specification
        </a>
        <a
          href="https://github.com/gyrogovernance/superintelligence"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
          aria-label="View Moments Economy on GitHub (opens in new tab)"
        >
          <GitHubIcon className="w-5 h-5 mr-2" />
          View on GitHub
        </a>
      </div>
    </div>
  </LiquidGlassCard>
</div>

      {/* ================================================================
          HERO CARD — GGG Simulator
          ================================================================ */}
      <div id="ggg" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-teal rounded-[2rem] shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌐</div>
              <h2 className="text-3xl font-bold text-foreground mb-3">
                Gyroscopic Global Governance (GGG)
              </h2>
              <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                A Post-AGI Multi-domain Governance Sandbox
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card-inner rounded-xl p-4 sm:p-6">
                <div className="text-left mb-4">
                  <h3 className="text-base font-semibold text-foreground mb-2">📈 Convergence to Equilibrium</h3>
                  <p className="text-xs sm:text-sm text-foreground-secondary">
                    Models how human–AI systems align across Economy, Employment, Education, and Ecology, showing robust convergence to a stable equilibrium under seven coordination strategies.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/ggg_graph.png"
                    alt="Convergence to Equilibrium visualization showing seven strategies converging to A*"
                    width={320}
                    height={200}
                    className="w-full h-auto max-w-xs"
                  />
                </div>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6">
                <p className="text-base font-bold text-foreground mb-3">🎯 Demonstrating that:</p>
                <ul className="text-sm sm:text-base text-foreground-secondary space-y-3 list-disc list-inside w-fit">
                  <li>Poverty resolves through coherent surplus distribution</li>
                  <li>Unemployment becomes alignment work rather than residual labour</li>
                  <li>Miseducation shifts toward epistemic literacy</li>
                  <li>Ecological degradation appears as upstream displacement, not an external constraint</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/articles/ggg-simulator-results"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-teal-600 hover:to-emerald-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Read the GGG simulator article"
              >
                Read interactive results
              </Link>
              <a
                href="https://github.com/gyrogovernance/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
                aria-label="View GGG simulator code on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View simulator code
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* ================================================================
          HERO CARD — GyroDiagnostics
          ================================================================ */}
      <div id="diagnostics" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-green rounded-[2rem] shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🌟</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                GyroDiagnostics Suite: AI Safety Evaluation Framework
              </h2>
              <p className="text-xl text-foreground-secondary">
                Production-ready evaluation suite revealing structural brittleness invisible to standard benchmarks through mathematical physics-informed diagnostics.
              </p>
            </div>

            {/* Framework Overview */}
            <div className="glass-card-inner rounded-xl p-6 mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🔬 Framework Capabilities</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">🩺 AI Safety Diagnostics</h4>
                  <ul className="text-sm text-foreground-secondary space-y-2">
                    <li>• <strong>5 Targeted Challenges</strong> across Physics, Ethics, Code, Strategy, Knowledge</li>
                    <li>• <strong>20-Metric Assessment</strong> measuring structure, behavior, domain expertise</li>
                    <li>• <strong>Pathology Detection</strong>: Hallucination, sycophancy, goal drift, semantic instability</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">🔬 Research Insights Generation</h4>
                  <ul className="text-sm text-foreground-secondary space-y-2">
                    <li>• Extract solution pathways from model responses</li>
                    <li>• Generate curated datasets for model training</li>
                    <li>• Analyze real-world challenges: poverty, regulation, epistemic limits</li>
                  </ul>
                </div>
          </div>
          </div>

            {/* Evaluation Results */}
            <div className="glass-card-inner rounded-xl p-6">
              <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🏆 Frontier Model Evaluations (October 2025)</h3>
              <p className="text-foreground-secondary text-center mb-6 text-sm">
                Evaluated using ensemble analyst models with mathematical physics-grounded metrics
              </p>

              <div className="grid lg:grid-cols-2 gap-4 mb-6">
                <div className="glass-card-inner rounded-lg p-4">
                  <h4 className="text-lg font-bold text-foreground text-center mb-3">ChatGPT 5</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between"><span>Quality Index:</span><span className="font-semibold text-yellow-500">73.92%</span></div>
                    <div className="flex justify-between"><span>Alignment Rate:</span><span className="font-semibold text-orange-500">0.27/min</span></div>
                    <div className="flex justify-between"><span>SI Index:</span><span className="font-semibold text-red-500">11.5/100</span></div>
                    <div className="text-xs text-foreground-tertiary mt-2">SUPERFICIAL: 8.7× deviation</div>
                  </div>
                </div>

                <div className="glass-card-inner rounded-lg p-4">
                  <h4 className="text-lg font-bold text-foreground text-center mb-3">Claude Sonnet 4.5</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between"><span>Quality Index:</span><span className="font-semibold text-green-500">82.00%</span></div>
                    <div className="flex justify-between"><span>Alignment Rate:</span><span className="font-semibold text-green-500">0.11/min</span></div>
                    <div className="flex justify-between"><span>SI Index:</span><span className="font-semibold text-orange-500">12.8/100</span></div>
                    <div className="text-xs text-foreground-tertiary mt-2">VALID: 7.8× deviation</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <p className="text-sm text-foreground-secondary text-center">
                  <strong>🎯 Comparative Insight:</strong> Both models struggle with Physics/Math reasoning (Formal challenge ~54-55%) while excelling in Ethics/Knowledge domains. Claude shows better structural balance with lower pathology rates and VALID alignment rate, while GPT-5&apos;s SUPERFICIAL flag indicates rushed processing risking brittleness.
                </p>
              </div>

              <p className="text-xs text-foreground-tertiary text-center mt-4">
                First framework to operationalize superintelligence measurement from axiomatic principles.{" "}
                <a
                  href="https://github.com/gyrogovernance/diagnostics"
                  className="underline hover:text-foreground-secondary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See full methodology & results
                </a>
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com/gyrogovernance/diagnostics"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="View GyroDiagnostics on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* ================================================================
          HERO CARD — Gyroscope LLM Protocol
          ================================================================ */}
      <div id="gyroscope" className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-indigo rounded-[2rem] shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">⚙️</div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Gyroscope: LLM Alignment Protocol
              </h2>
              <p className="text-xl text-foreground-secondary">
                Making AI 30-50% Smarter and Safer by adding structured reasoning to each response.
              </p>
            </div>

            <div className="glass-card-inner rounded-xl p-3 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">📊 Proven Performance Gains</h3>
              <p className="text-foreground-secondary text-center mb-4 sm:mb-6 text-sm sm:text-base">
                Testing across multiple leading AI models shows Gyroscope delivers substantial performance improvements
              </p>

              <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
                <div className="glass-card-inner rounded-lg p-2 sm:p-4">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 text-center">ChatGPT</h4>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between"><span className="text-foreground-secondary">Overall Quality:</span><span className="font-semibold text-classic-green">67.0% → 89.1% (+32.9%)</span></div>
                    <div className="flex justify-between"><span className="text-foreground-secondary">Structural Reasoning:</span><span className="font-semibold text-classic-green">+50.9%</span></div>
                    <div className="flex justify-between"><span className="text-foreground-secondary">Accountability:</span><span className="font-semibold text-classic-green">+62.7%</span></div>
                    <div className="flex justify-between"><span className="text-foreground-secondary">Traceability:</span><span className="font-semibold text-classic-green">+61.0%</span></div>
                  </div>
                </div>

                <div className="glass-card-inner rounded-lg p-2 sm:p-4">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 text-center">Claude Sonnet</h4>
                  <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                    <div className="flex justify-between"><span className="text-foreground-secondary">Overall Quality:</span><span className="font-semibold text-classic-blue">63.5% → 87.4% (+37.7%)</span></div>
                    <div className="flex justify-between"><span className="text-foreground-secondary">Structural Reasoning:</span><span className="font-semibold text-classic-blue">+67.1%</span></div>
                    <div className="flex justify-between"><span className="text-foreground-secondary">Traceability:</span><span className="font-semibold text-classic-blue">+92.6%</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-classic-blue/10 to-classic-purple/10 rounded-lg border border-classic-blue/20">
                <p className="text-sm text-foreground-secondary text-center">
                  <strong>☝🏻 The protocol works with any AI model</strong>, enhancing capabilities in debugging, ethics, code generation, and value-sensitive reasoning through its systematic approach to thinking.
                </p>
              </div>

              <p className="text-xs text-foreground-tertiary text-center mt-4">
                Results from controlled testing using standardized evaluation metrics.{" "}
                <a
                  href="https://github.com/gyrogovernance/tools"
                  className="underline hover:text-foreground-secondary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See methodology
                </a>
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com/gyrogovernance/tools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="View Gyroscope on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* ================================================================
          LABS SECTION
          ================================================================ */}
      <section className="mb-16 animate-fade-in-up" aria-labelledby="labs-heading">
        <h2 id="labs-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
          Labs
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { emoji: "⚡", title: "Mathematical Physics Science", desc: "Gyroscopic Alignment Research Lab", href: "https://github.com/gyrogovernance/science" },
            { emoji: "❤️", title: "Artificial Superintelligence Architecture (ASI/AGI)", desc: "Gyroscopic Alignment Models Lab", href: "https://github.com/gyrogovernance/superintelligence" },
            { emoji: "🌟", title: "AI Safety Diagnostics", desc: "Gyroscopic Alignment Evaluation Lab", href: "https://github.com/gyrogovernance/diagnostics" },
            { emoji: "🧭", title: "AI Quality Governance", desc: "Gyroscopic Alignment Behaviour Lab", href: "https://github.com/gyrogovernance/tools" },
          ].map((lab) => (
            <LiquidGlassCard
              key={lab.title}
              className="glass-card glass-card-translucent rounded-[2rem] shadow-2xl"
              intensity="subtle"
              blur={24}
              saturation={145}
              luminosity={108}
              shadowIntensity={0.12}
            >
              <div className="relative z-10 flex gap-3 px-4 py-4 sm:px-6">
                <div className="flex items-center justify-center shrink-0">
                  <div className="emoji-icon">{lab.emoji}</div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{lab.title}</h3>
                    <p className="text-foreground-secondary">{lab.desc}</p>
                  </div>
                  <a
                    href={lab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                    aria-label={`Visit ${lab.desc} (opens in new tab)`}
                  >
                    <GitHubIcon className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </div>
              </div>
            </LiquidGlassCard>
          ))}
        </div>
      </section>

      {/* ================================================================
          RESOURCES SECTION
          ================================================================ */}
      <section className="mb-16 animate-fade-in-up" aria-labelledby="resources-heading">
        <h2 id="resources-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
          Resources
        </h2>

        {/* Newsletter */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Newsletter</h3>
          <LiquidGlassCard className="glass-card glass-card-blue rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/assets/the_walk_cover.jpg"
                    alt="The Walk Newsletter Cover"
                    width={200}
                    height={200}
                    className="w-32 sm:w-40 md:w-48 h-auto object-cover rounded-lg shadow-md border border-border/50"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-foreground mb-3">The Walk</h4>
                  <p className="text-foreground-secondary mb-4">
                    A Journey of Self-Discovery, Augmented Intelligence (AI) & Good Governance. One step at a time. Weekly insights on AI adoption, alignment, and ethical governance.
                  </p>
                  <a
                    href="https://www.linkedin.com/newsletters/the-walk-7115036597602967553/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors duration-300"
                    aria-label="Read The Walk newsletter on LinkedIn (opens in new tab)"
                  >
                    <LinkedInIcon className="w-4 h-4 mr-2" />
                    LinkedIn Newsletter
                  </a>
                </div>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* CGM Theory */}
        <div id="cgm" className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Foundational Theory</h3>
          <LiquidGlassCard className="glass-card glass-card-green glass-card-translucent rounded-[2rem] shadow-2xl">
            <div className="relative z-10 p-6">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">⚗️</div>
                <h4 className="text-2xl font-bold text-foreground mb-2">Common Governance Model (CGM)</h4>
                <p className="text-foreground-secondary max-w-2xl mx-auto">
                  The mathematical physics foundation for all research on this website. Formal proofs, geometric analyses, and axioms that ground our work in AI safety and governance.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="glass-card-inner rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">📊</span>
                    <h5 className="text-lg font-semibold text-foreground">Dataset</h5>
                  </div>
                  <p className="text-sm text-foreground-secondary mb-3">
                    1,024 structured Q&A entries for fine-tuning, RAG, and evaluation.
                  </p>
                  <a
                    href="https://github.com/gyrogovernance/science/tree/main/docs/datasets"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-classic-blue hover:text-classic-purple transition-colors duration-200 font-medium"
                    aria-label="View CGM Dataset on GitHub (opens in new tab)"
                  >
                    <GitHubIcon className="w-4 h-4 mr-1" />
                    View on GitHub
                  </a>
                </div>

                <div className="glass-card-inner rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">🔍</span>
                    <h5 className="text-lg font-semibold text-foreground">Knowledge Base</h5>
                  </div>
                  <p className="text-sm text-foreground-secondary mb-3">
                    Search across all entries by keyword, category, or tag.
                  </p>
                  <Link
                    href="/search"
                    className="inline-flex items-center text-sm text-classic-blue hover:text-classic-purple transition-colors duration-200 font-medium"
                    aria-label="Search CGM Knowledge Base"
                  >
                    Search the Theory →
                  </Link>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/docs/science"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label="Read CGM Documentation"
                >
                  Read Full Documentation
                </Link>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Other Datasets */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Other Datasets</h3>
          <div className="grid gap-6">
            {[
              {
                emoji: "🌟", title: "Clean", bgImage: "/assets/clean-dataset.jpg",
                desc: "2,463 questions about Personal and Professional matters of Crisis and gives answers on how they may be Resolved.",
                hf: "https://huggingface.co/datasets/crisisresolutions/cr-qa-gwm",
                kaggle: "https://www.kaggle.com/datasets/korompilias/good-ways-model-pure-ontology-qa",
              },
              {
                emoji: "🪷", title: "Pure", bgImage: "/assets/pure-dataset.jpg",
                desc: "216 Critical Questions and Answers for Crisis Management and Machine Learning Model Fine-Tuning.",
                hf: "https://huggingface.co/datasets/crisisresolutions/gwm-qa-pure",
                kaggle: "https://www.kaggle.com/datasets/korompilias/crisisresolutionscontentclean-goodwaysmodelpure",
              },
            ].map((ds) => (
            <LiquidGlassCard
              key={ds.title}
              className="glass-card rounded-[2rem] overflow-hidden shadow-2xl"
              style={{
                boxShadow: "var(--glass-card-shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderStyle: "solid",
              }}
            >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-[1]"
                  style={{ backgroundImage: `url(${ds.bgImage})` }}
                />
                <div className="relative z-10 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{ds.emoji}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-3">{ds.title}</h4>
                      <p className="text-foreground-secondary mb-4">{ds.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        <a href={ds.hf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl" aria-label={`View ${ds.title} dataset on HuggingFace (opens in new tab)`}>
                          HuggingFace <ExternalLinkIcon className="ml-2 w-3 h-3" />
                        </a>
                        <a href={ds.kaggle} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl" aria-label={`View ${ds.title} dataset on Kaggle (opens in new tab)`}>
                          Kaggle <ExternalLinkIcon className="ml-2 w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            ))}
          </div>
        </div>

        {/* Guides */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Guides</h3>
          <div className="space-y-6">
            <LiquidGlassCard
              className="glass-card glass-card-indigo rounded-[2rem] shadow-2xl"
              style={{
                boxShadow: "var(--glass-card-shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderStyle: "solid",
              }}
            >
              <div className="relative z-10 p-4 sm:p-6 md:p-8">
                <div className="grid md:grid-cols-[1fr,1.2fr] gap-5 md:gap-6 items-start">
                  <div className="w-full">
                    <Image
                      src="/assets/638919d9-c2dd-4767-85b1-3e84160bf256-1024x1024.jpg"
                      alt="Smart Bites poster."
                      width={1024}
                      height={1024}
                      className="w-full rounded-xl shadow-lg border border-white/25"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                      GenAI Prompt Engineering for AI-Empowered Governance & Change Management
                    </h4>
                    <p className="text-foreground-secondary mb-3">
                      Smart Bites aims to Democratize Change Management, Making it Accessible to People from All Walks of Life.
                    </p>
                    <p className="text-foreground-secondary mb-3">
                      I&apos;ve developed a Formal Process for AI-Augmented Governance, enabling Decentralized Decision-Making and Data-empowered Insights.
                    </p>
                    <p className="text-foreground-secondary mb-5">
                      Open and serving Free Bite-sized AI Guides at smartbites.github.io.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <a
                        href="https://smartbites.github.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink text-white text-sm font-medium rounded-full transition-all duration-300"
                        aria-label="Open Smart Bites site (opens in new tab)"
                      >
                        Open Site
                        <ExternalLinkIcon className="ml-2 w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
            <LiquidGlassCard
              className="glass-card rounded-[2rem] shadow-2xl"
              style={{
                boxShadow: "var(--glass-card-shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderStyle: "solid",
              }}
            >
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-5xl sm:text-6xl md:text-7xl">🛡️</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-3">Crisis Resolutions</h4>
                    <p className="text-foreground-secondary mb-4">AI Safety & Risk Management</p>
                    <a
                      href="https://crisisresolutions.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-classic-blue hover:text-classic-purple transition-colors duration-300 font-medium"
                      aria-label="Visit Crisis Resolutions (opens in new tab)"
                    >
                      Visit Site
                      <ExternalLinkIcon className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Publications</h3>
          <div className="grid grid-cols-1 gap-6">
            <LiquidGlassCard
              className="glass-card rounded-[2rem] shadow-2xl"
              style={{
                boxShadow: "var(--glass-card-shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderStyle: "solid",
              }}
            >
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Image src="/assets/AIQ_Cover.jpg" alt="AI Quality Governance Cover" width={200} height={240} className="w-50 h-60 object-cover rounded-lg shadow-md border border-border/50" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-3">AI Quality Governance</h4>
                    <p className="text-foreground-secondary mb-4">Human Data Evaluation and Responsible AI Behavior Alignment</p>
                    <a href="http://doi.org/10.17613/43wc1-mvn58" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-classic-blue hover:text-classic-purple transition-colors duration-300 font-medium" aria-label="View AI Quality Governance publication (opens in new tab)">
                      View Publication <ExternalLinkIcon className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>

          </div>
        </div>

        {/* Experiments */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Experiments</h3>
          <LiquidGlassCard
            className="glass-card rounded-[2rem] shadow-2xl"
            style={{
              boxShadow: "var(--glass-card-shadow-lg)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              borderStyle: "solid",
            }}
          >
            <div className="relative z-10 p-4 sm:p-6">
              <div className="flex items-start space-x-4">
                <div className="text-4xl sm:text-5xl md:text-6xl">⚛️</div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-foreground mb-3">Quantum AI Research</h4>
                  <p className="text-foreground-secondary mb-2 font-medium">Architecting Qubit-Tensor-Chain (QTC)</p>
                  <p className="text-foreground-secondary mb-4">
                    The QTC Protocol harnesses the unique properties of Quantum Computing as the foundation of a New Decentralized Governance Paradigm.
                  </p>
                  <a
                    href="https://korompilias.notion.site/Quantum-AI-Research-By-Basil-6e0f7ae790c84c209c82b97180ce9a1c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300"
                    aria-label="View Quantum AI Research on Notion (opens in new tab)"
                  >
                    <NotionIcon className="w-4 h-4 mr-2" />
                    Notion Documentation
                  </a>
                </div>
              </div>
            </div>
          </LiquidGlassCard>
        </div>

        {/* Media */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Media</h3>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { emoji: "🎧", title: "Crisis Resolutions Podcast", desc: "25 episodes exploring crisis resolution methodologies that inform AI safety tools and behavioral alignment.", platform: "Spotify", href: "https://open.spotify.com/show/3iJZE6wfQ4K35xBNyHhSi2?si=b000840ad8834caa", Icon: SpotifyIcon, btnClass: "bg-green-700 hover:bg-green-800" },
              { emoji: "🎓", title: "Crisis Resolutions Training", desc: "Professional and Personal conflict resolution methodologies that inform AI alignment and safety frameworks.", platform: "YouTube", href: "https://www.youtube.com/watch?v=xqYOGclAxA4&list=PLbiBCRZazXRlEuGP5cajZwcUEHlypmzpI", Icon: YouTubeIcon, btnClass: "bg-red-600 hover:bg-red-700" },
            ].map((m) => (
              <LiquidGlassCard
                key={m.title}
                className="glass-card rounded-[2rem] shadow-2xl"
                style={{
                  boxShadow: "var(--glass-card-shadow-lg)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderStyle: "solid",
                }}
              >
                <div className="relative z-10 p-4 sm:p-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{m.emoji}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground mb-3">{m.title}</h4>
                      <p className="text-foreground-secondary mb-4">{m.desc}</p>
                      <a
                        href={m.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 ${m.btnClass} text-white text-sm font-medium rounded-full transition-colors duration-300`}
                        aria-label={`Listen on ${m.platform} (opens in new tab)`}
                      >
                        <m.Icon className="w-4 h-4 mr-2" />
                        {m.platform}
                      </a>
                    </div>
                  </div>
                </div>
              </LiquidGlassCard>
            ))}

            {/* Masterclass — full width */}
            <LiquidGlassCard
              className="glass-card rounded-[2rem] md:col-span-1 lg:col-span-2 shadow-2xl"
              style={{
                boxShadow: "var(--glass-card-shadow-lg)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderStyle: "solid",
              }}
            >
              <div className="relative z-10 p-4 sm:p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🎨</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-3">
                      Humane Science Masterclass by Leonardo da Vinci
                    </h4>
                    <p className="text-foreground-secondary mb-4">
                      Informing AI Research through timeless Renaissance Insights on Linear Perspective, Quantum Physics, Holograms, and the Human Proportions as the base for all Systems of Design and Governance.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=F8bjhRSi0vo&list=PLGYNxF_pnQgv9WorsLMsTjJXWMGxWSnlX"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors duration-300"
                      aria-label="Watch on YouTube (opens in new tab)"
                    >
                      <YouTubeIcon className="w-4 h-4 mr-2" />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </LiquidGlassCard>
          </div>
        </div>

        {/* Articles */}
        <div id="articles" className="mb-8">
          <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">Articles</h3>
          <ArticlesCarousel articles={listFeaturedArticles()} />
          <div className="mt-8 flex justify-center">
            <Link
              href="/articles"
              className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-classic-blue via-classic-purple to-classic-pink hover:from-classic-purple hover:via-classic-pink hover:to-classic-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="View all articles"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}