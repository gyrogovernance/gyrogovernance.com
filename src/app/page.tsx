import Link from "next/link";
import Image from "next/image";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";
import ArticlesCarousel from "@/components/ArticlesCarousel";
import { listFeaturedArticles } from "@/lib/articles";
import { getDocStats } from "@/lib/docs-stats";
import StatBadge from "@/components/StatBadge";

export default function Home() {
  const docStats = getDocStats();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 critical-content">
      {/* Hero Section */}
      <div className="text-center mb-8 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
            Gyro Governance
          </span>
        </h1>
        <p className="mt-6 text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
          Building verifiable AI governance: audit, alignment infrastructure, and physics-based coordination.
        </p>
      </div>
      
      {/* Stats */}
      <div className="mb-6 animate-fade-in-up [animation-delay:200ms]">
        <div className="flex flex-col items-center">
        <div className="w-full sm:w-auto flex justify-center gap-3 sm:gap-6 md:gap-10 py-4 px-2 sm:py-6 sm:px-8 md:py-8 md:px-10 rounded-[2rem] bg-surface-elevated/60 backdrop-blur-md border border-border/40 !shadow-2xl">
            
            <StatBadge value={7} label="Projects & Apps" color="from-purple-500 to-indigo-500" delay={0} />
            <StatBadge value={20} label="Papers & Specs" color="from-blue-500 to-cyan-500" delay={200} />
            <StatBadge value={60} label="Experiments & Reports" color="from-emerald-500 to-teal-500" delay={400} />
            
          </div>
        </div>
      </div>

      {/* ── Quick Nav & Updates ── */}
      <div className="mb-16 animate-fade-in-up [animation-delay:300ms]">
        {/* Projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 mb-10">
          {[
            {
              emoji: "✋",
              title: "The Human Mark",
              desc: "AI Safety Epistemological Framework and Taxonomy for Risks Detection and Mitigation",
              href: "#thm",
            },
            {
              emoji: "🕵️",
              title: "AI Inspector",
              desc: "Browser extension for evaluation and governance",
              href: "#inspector",
            },
            {
              emoji: "⚛️",
              title: "aQPU Kernel",
              desc: "Quantum Advantage on standard hardware for verifiable coordination and audit",
              href: "#aqpu",
            },
            {
              emoji: "🤖",
              title: "GyroLabe",
              desc: "Auditable inference bridge and native compute backend",
              href: "#gyrolabe",
            },
            {
              emoji: "🍃",
              title: "Alignment Infrastructure Routing",
              desc: "Collective Superintelligence Stack for Human-AI Coordination",
              href: "#air",
            },
            {
              emoji: "💰",
              title: "Moments Economy",
              desc: "Capacity based monetary system for Post-AGI Transformative AI Risks Mitigation",
              href: "#moments",
            },
            {
              emoji: "🌐",
              title: "Global Governance Simulator",
              desc: "Post-AGI/ASI governance sandbox Simulation and Results",
              href: "#ggg",
            },
            {
              emoji: "🌟",
              title: "GyroDiagnostics",
              desc: "Physics grounded evaluation and pathology detection for AI Safety and Alignment",
              href: "#diagnostics",
            },
          ].map((p) => (
            <a
              key={p.title}
              href={p.href}
              className="group flex items-start gap-3 !px-2 py-4 sm:px-4 rounded-xl bg-surface-elevated/30 border border-border/60 hover:bg-surface-elevated backdrop-blur-2xl hover:border-apple-blue/50 transition-all duration-200 shadow-2xl"
              >
              <span className="text-2xl leading-none shrink-0">{p.emoji}</span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-foreground group-hover:text-apple-blue transition-colors">
                  {p.title}
                </span>
                <span className="block text-sm text-foreground-tertiary leading-snug mt-0.5">
                  {p.desc}
                </span>
              </span>
            </a>
          ))}
        </div>

        {/* Quick section links */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { emoji: "⚡", label: "Labs", href: "#labs-heading" },
            { emoji: "📚", label: "Resources", href: "#resources-heading" },
            { emoji: "📰", label: "Articles", href: "#articles" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 text-sm font-medium text-foreground-secondary hover:text-foreground hover:border-border/70 hover:bg-surface-elevated/40 transition-all duration-200"
            >
              <span>{c.emoji}</span>
              <span>{c.label}</span>
            </a>
          ))}
        </div>

        {/* Updates */}
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/60" />
            <span className="text-[11px] font-bold text-foreground-tertiary uppercase tracking-widest">
              What&apos;s New
            </span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/60" />
          </div>

          <div className="space-y-1.5">
            {[
              {
                dot: "bg-cyan-500",
                title: "AI Compute Optimizations",
                desc: "Replaced floating-point math and eliminated expensive overhead.",
                date: "17 Mar 2026",
                href: "#aqpu",
              },
              {
                dot: "bg-blue-500",
                title: "aQPU Kernel",
                desc: "Quantum Advantage: verified uniform mixing and holographic compression",
                date: "11 Mar 2026",
                href: "#aqpu",
              },
              {
                dot: "bg-green-500",
                title: "CGM Dataset",
                desc: "Foundational theory from the Science Lab docs",
                date: "15 Feb 2026",
                href: "#cgm",
              },
              {
                dot: "bg-cyan-500",
                title: "GyroLabe",
                desc: "Auditable inference bridge",
                date: "14 Feb 2026",
                href: "#gyrolabe",
              },
              {
                dot: "bg-orange-500",
                title: "THM prompt audits",
                desc: "Claude Opus 4.6 and ChatGPT 5.2 reports",
                date: "13 Feb 2026",
                href: "/articles",
              },
            ].map((u, i) => {
              const rowClass =
                "flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-surface-elevated/40 transition-colors duration-150 group";

              const content = (
                <>
                  <span className={`w-1.5 h-1.5 rounded-full ${u.dot} shrink-0`} />
                  <span className="text-sm text-foreground-secondary leading-snug">
                    <strong className="text-foreground group-hover:text-apple-blue transition-colors">
                      {u.title}
                    </strong>
                    <span className="text-foreground-tertiary">{" "}{u.desc}</span>
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
      {/* The Human Mark Hero Card - Moved to First Position */}
      <div id="thm" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-amber-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-orange-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">✋</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              The Human Mark (THM): AI Safety Framework
            </h2>
            <p className="text-xl text-foreground-secondary">
              A formal classification system mapping all AI safety failures to four structural displacement risks.
            </p>
          </div>
          
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Four Displacement Risks */}
          <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
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

            {/* Applications */}
          <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
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
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-indigo-500/60 hover:from-purple-500/90 hover:to-indigo-500/20 hover:border-purple-500/50 transition-all duration-200 group"
              aria-label="Read THM report: Claude Opus 4.6 System Prompt (Anthropic)"
            >
              <span className="text-lg font-bold text-foreground transition-colors">Claude Opus 4.6</span>
            </Link>
            <Link
              href="/articles/gpt-5-2-thinking_thm-report"
              className="flex items-center justify-center gap-2 p-4 rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/60 hover:from-green-500/90 hover:to-emerald-500/20 hover:border-green-500/50 transition-all duration-200 group"
              aria-label="Read THM report: ChatGPT System Prompt (OpenAI)"
            >
              <span className="text-lg font-bold text-foreground transition-colors">ChatGPT 5.2</span>
            </Link>
          </div>
          </div>
          
          <p className="text-xs sm:text-sm text-foreground-tertiary text-center mb-6">
            Machine-readable grammar. Grounded in evidence law, epistemology, and speech act theory. Validated on real-world adversarial prompts and on 90+ million sparse autoencoder features across sixteen language models, confirming that assistant personas and safety refusals dominate self-referential representations while non-agentive process descriptions are not used for model self-description.{" "}

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
              className="inline-flex items-center px-6 py-3 rounded-xl border border-border/80 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium transition-all duration-300 shadow hover:shadow-lg"
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
      </div>

      {/* AI Inspector Browser Extension Hero Section */}
      <div id="inspector" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-[2rem] shadow-2xl border border-purple-500/20 overflow-hidden">
          {/* Compact promo image at top */}
          <div className="w-full flex justify-center bg-gradient-to-b from-purple-900/20 to-transparent">
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
          
          <div className="p-4 sm:p-6 md:p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                AI Inspector Browser Extension
              </h2>
              <p className="text-base text-foreground-secondary max-w-2xl mx-auto">
                Transform AI outputs for Evaluation, Interpretability, Governance.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="space-y-4 mb-6">
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <h3 className="text-base font-bold text-foreground mb-2">🤖 Gadgets (3-10 min each)</h3>
                <p className="text-sm text-foreground-secondary">
                  Rapid Test • Policy Auditing • AI Infection Sanitization • Content Enhancement • THM Meta-Evaluation
                </p>
              </div>
              
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                <h3 className="text-base font-bold text-foreground mb-2">🔬 Evaluation (30-60 min)</h3>
                <p className="text-sm text-foreground-secondary">
                  Quality Index, Superintelligence Index, Alignment Rate + 20 metrics
                </p>
              </div>
            </div>

            {/* App Screenshots */}
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
                className="inline-flex items-center px-6 py-3 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg"
                aria-label="View AI Inspector on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* aQPU Kernel Hero */}
      <div id="aqpu" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-blue-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⚛️</div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              aQPU (algebraic Quantum Processing Unit) Kernel
            </h2>
            <p className="text-lg font-semibold text-foreground-secondary">
              Quantum Advantage on Silicon, bypassing the hardware scaling limits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Hook - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 text-center">
              <p className="text-base sm:text-lg text-foreground-secondary">
                The aQPU is a new class of computation. It proves that quantum advantage, holographic compression, and universal operator algebra are fundamental geometric properties of discrete information. It executes deterministically on standard CPUs and GPUs using exact integer arithmetic. <strong>No qubits, no probabilistic noise, no hardware approximations.</strong>
              </p>
            </div>

            {/* Algorithmic Speedups */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">🚀 Algorithmic Speedups</h3>
              <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚡</span>
                  <span><strong>1-Step Resolution:</strong> Natively solves Hidden Subgroup, Deutsch-Jozsa, and Bernstein-Vazirani in exactly 1 step (vs classical up to 64 queries).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⏱️</span>
                  <span><strong>O(1) Commutativity:</strong> Instantly determines structural operation commutativity via native q-map routing without requiring sequential evaluation.</span>
                </li>
              </ul>
            </div>

            {/* Structural Efficiencies */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">🧊 Structural Efficiencies</h3>
              <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">🎯</span>
                  <span><strong>Exact Uniform Mixing:</strong> Distributes data across 4,096 states with mathematical perfection in exactly 2 steps (vs standard classical ~12 steps).</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">🗜️</span>
                  <span><strong>Holographic Compression:</strong> The topology itself inherently compresses 12-bit native states into 8-bit boundary coordinates (33% native reduction).</span>
                </li>
              </ul>
            </div>

            {/* SDK and Native Engine - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">🧰 Developer SDK and Native Engine</h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-4 text-center">
                This gives builders a verified path from specification to deployment.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/Gyroscopic_ASI_SDK_Quantum_Computing.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg text-sm"
                  aria-label="Read the aQPU SDK specification"
                >
                  SDK Spec
                </a>
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/reports/aQPU_Tests_Report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg text-sm"
                  aria-label="Read aQPU Verification Report"
                >
                  Verification Report
                </a>
              </div>
            </div>

            {/* Computational Climate Control Box - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">🌡️ Computational Climate Control</h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-4 text-center">
                AI execution stability and hidden inefficiencies reduction.
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/QuBEC_Climate_Control_Brief.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg text-sm"
                  aria-label="Read Computational Climate Control brief"
                >
                  Climate Brief
                </a>
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/QuBEC_Climate_Theory.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg text-sm"
                  aria-label="Read Computational Climate Control theory"
                >
                  Climate Theory
                </a>
                <a
                  href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/reports/QuBEC_Climate_Tests_Report.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg text-sm"
                  aria-label="Read Computational Climate Control tests report"
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
              aria-label="View aQPU Kernel on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/Gyroscopic_ASI_SDK_Strategic_Significance_Brief.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg"
              aria-label="Read aQPU Strategic Significance (opens in new tab)"
            >
              Strategic Significance
            </a>
          </div>
        </div>
      </div>

      {/* GyroLabe & GyroGraph Hero */}
      <div id="gyrolabe" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-cyan-500/10 via-sky-500/10 to-blue-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-cyan-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🤖</div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              GyroLabe & GyroGraph
            </h2>
            <p className="text-lg font-semibold text-foreground-secondary">
              Auditable Multicellular Quantum AI Runtime for safer deployment.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* The Hook - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50 text-center">
              <p className="text-base sm:text-lg text-foreground-secondary">
                Current AI safety often depends on checks after the fact. GyroLabe and GyroGraph build a deterministic audit trail for both inference and runtime behavior.
              </p>
            </div>

            {/* GyroLabe */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">GyroLabe: Inference Bridge</h3>
              <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">🔍</span>
                  <span><strong>Deterministic audit:</strong> Every inference path can be independently replayed from a standard public log.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">⚖️</span>
                  <span><strong>Safer operation:</strong> Helps separate model behavior from accidental drift under repeated use.</span>
                </li>
              </ul>
            </div>

            {/* GyroGraph */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">GyroGraph: Quantum Multicellular AI</h3>
              <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
                <li className="flex items-start">
                  <span className="text-sky-500 mr-2">📜</span>
                  <span><strong>Cell-based runtime:</strong> Coordinates distributed computation signals to stay stable under changing load.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-sky-500 mr-2">🤝</span>
                  <span><strong>Human-ready safety:</strong> Keeps observable evidence close to every operational decision.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <a
              href="https://github.com/gyrogovernance/superintelligence?tab=readme-ov-file#-gyrolabe-calibration-for-auditable-inference"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View GyroLabe on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroLabe_Specs.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg"
              aria-label="Read GyroLabe Specification (opens in new tab)"
            >
              GyroLabe Spec
            </a>
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroGraph_Specs.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg"
              aria-label="Read GyroGraph Specification (opens in new tab)"
            >
              GyroGraph Spec
            </a>
          </div>
        </div>
      </div>

      {/* Alignment Infrastructure Routing (AIR) Hero */}
      <div id="air" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-yellow-500/10 via-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-yellow-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🍃</div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Alignment Infrastructure Routing (AIR)
            </h2>
            <p className="text-lg font-semibold text-foreground-secondary">
              Collective Superintelligence Architecture
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* What it is - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">What it is</h3>
              <p className="text-sm sm:text-base text-foreground-secondary">
                A coordination infrastructure that amplifies human potential alongside AI. It routes work, funding, and safety checks into a shared verifiable history.
              </p>
            </div>

            {/* What it does */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">What it does</h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-4">
                AIR connects three critical groups to make collaborative governance executable.
              </p>
              <ul className="space-y-3 text-sm sm:text-base text-foreground-secondary list-none">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">⚗️</span>
                  <span><strong className="text-foreground">For Labs:</strong> Keep delivery visible across teams and partners.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">💼</span>
                  <span><strong className="text-foreground">For Funders:</strong> Track exactly what safety outcomes are produced.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">👥</span>
                  <span><strong className="text-foreground">For Everyone:</strong> Turn verified contribution into aligned value.</span>
                </li>
              </ul>
            </div>

            {/* Why it matters */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">Why it matters</h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-3">
                AI should expand human agency, not replace it. AIR keeps decision quality high even as systems scale.
              </p>
              <div className="mt-3 pt-3 border-t border-border/30">
                <p className="text-sm font-semibold text-foreground">Coordinates activity across:</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">Economy</span>
                  <span className="px-3 py-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full text-xs font-medium">Employment</span>
                  <span className="px-3 py-1 bg-orange-500/10 text-orange-600 dark:text-orange-400 rounded-full text-xs font-medium">Education</span>
                  <span className="px-3 py-1 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 rounded-full text-xs font-medium">Ecology</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/gyrogovernance/superintelligence?tab=readme-ov-file#-alignment-infrastructure-routing-air"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View Alignment Infrastructure Routing on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Moments Economy Hero */}
      <div id="moments" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-emerald-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💰</div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Moments Economy
            </h2>
            <p className="text-lg font-semibold text-foreground-secondary">
              Mitigating Risks of Transformative AI (TAI)
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* What it is - Full Width */}
            <div className="md:col-span-2 bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                💎 What it is
              </h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-3">
                A monetary system grounded in physical capacity rather than debt. All economic activity is recorded as replayable history that any party can independently verify.
              </p>
              <ul className="text-sm sm:text-base text-foreground-secondary space-y-2 list-disc list-inside">
                <li>Uses the caesium-133 atomic standard, the most precise and globally audited method for quantifying distinguishable physical states, to define a finite capacity</li>
                <li>Removes the need for central ledger keepers or institutional trust</li>
              </ul>
            </div>

            {/* Dual-function capacity */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                🔄 Dual-function capacity
              </h3>
              <p className="text-sm sm:text-base text-foreground-secondary mb-3">
                Supports both monetary distribution and complete governance records:
              </p>
              <ul className="text-sm sm:text-base text-foreground-secondary space-y-2 list-disc list-inside mb-4">
                <li><strong>Monetary:</strong> Unconditional High Income (UHI) as baseline for everyone, with four tiers up to <span className="font-bold text-emerald-500">60× UHI</span> for roles of wider scope and higher responsibility</li>
                <li><strong>Recordkeeping:</strong> Scientific research provenance, AI model auditing, supply chain traceability, personal consent tracking</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border/30 bg-emerald-500/5 rounded-lg p-3">
                <p className="text-sm text-foreground-secondary mb-2">
                  <strong className="text-foreground">Scale and Security:</strong>
                </p>
                <ul className="text-xs sm:text-sm text-foreground-secondary space-y-1 list-none">
                  <li>• Total capacity: <span className="font-bold text-emerald-500">~70 billion years</span> for global UHI</li>
                  <li>• With tiered distributions: <span className="font-bold text-teal-500">47+ billion years</span> coverage</li>
                  <li>• Adversarial manipulation: <span className="font-semibold text-cyan-500">operationally impossible</span></li>
                </ul>
              </div>
            </div>

            {/* Why this matters */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3">
                🌟 Why this matters
              </h3>
              <ul className="text-sm sm:text-base text-foreground-secondary space-y-3 list-none">
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">👤</span>
                  <span><strong className="text-foreground">For individuals:</strong> Guaranteed baseline income with tiered distributions, delivered through verifiable records rather than debt-based issuance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">🏛️</span>
                  <span><strong className="text-foreground">For policymakers:</strong> Issuance limits based on explicit physical assumptions. Parameters can be inspected and revised through governance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-500 mr-2">🏢</span>
                  <span><strong className="text-foreground">For institutions:</strong> Distributions through replayable records reduce reliance on custodians and retrospective disputes.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-500 mr-2">🛡️</span>
                  <span><strong className="text-foreground">For AI safety:</strong> Preserves human authority, traceability, and accountability as AI agents contribute to decisions.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href="https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Specs.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-teal-600 hover:to-cyan-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Read the Moments Economy specification on GitHub (opens in new tab)"
            >
              Read the specification
            </a>
          </div>
        </div>
      </div>

      {/* Gyroscopic Global Governance Simulator Hero */}
      <div id="ggg" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-blue-500/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌐</div>
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Gyroscopic Global Governance (GGG)
            </h2>
            <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
              A Post-AGI Multi-domain Governance Sandbox
            </p>
          </div>

          {/* Convergence Visualization and Results */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* SVG Visualization Block */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
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

            {/* Results List Block */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border/50">
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
              className="inline-flex items-center px-6 py-3 bg-surface-elevated/60 hover:bg-surface-elevated text-foreground font-medium rounded-xl border border-border/80 transition-all duration-300 shadow hover:shadow-lg"
              aria-label="View GGG simulator code on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View simulator code
            </a>
          </div>
        </div>
      </div>

      {/* GyroDiagnostics Hero Card */}
      <div id="diagnostics" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-green-500/20 shadow-2xl">
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
          <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-6 mb-6 border border-border/50">
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
          
          {/* Evaluation Results - GPT-5 & Claude */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🏆 Frontier Model Evaluations (October 2025)</h3>
            <p className="text-foreground-secondary text-center mb-6 text-sm">
              Evaluated using ensemble analyst models with mathematical physics-grounded metrics
            </p>
            
            {/* Simplified Model Comparison */}
            <div className="grid lg:grid-cols-2 gap-4 mb-6">
              {/* ChatGPT 5 Results */}
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <h4 className="text-lg font-bold text-foreground text-center mb-3">ChatGPT 5</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between"><span>Quality Index:</span><span className="font-semibold text-yellow-500">73.92%</span></div>
                  <div className="flex justify-between"><span>Alignment Rate:</span><span className="font-semibold text-orange-500">0.27/min</span></div>
                  <div className="flex justify-between"><span>SI Index:</span><span className="font-semibold text-red-500">11.5/100</span></div>
                  <div className="text-xs text-foreground-tertiary mt-2">SUPERFICIAL: 8.7× deviation</div>
                </div>
              </div>

              {/* Claude Sonnet 4.5 Results */}
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
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
      </div>

      {/* Gyroscope Hero Card */}
      <div id="gyroscope" className="mb-12 animate-fade-in-up">
        <div className="bg-gradient-to-br from-apple-blue/10 via-apple-purple/10 to-apple-pink/10 backdrop-blur-sm rounded-[2rem] p-4 sm:p-6 md:p-8 border border-apple-blue/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⚙️</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Gyroscope: LLM Alignment Protocol
            </h2>
            <p className="text-xl text-foreground-secondary">
              Making AI 30-50% Smarter and Safer by adding structured reasoning to each response.
            </p>
          </div>
          
          {/* Results Table */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">📊 Proven Performance Gains</h3>
            <p className="text-foreground-secondary text-center mb-4 sm:mb-6 text-sm sm:text-base">
              Testing across multiple leading AI models shows Gyroscope delivers substantial performance improvements
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
              {/* ChatGPT Results */}
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-border/50 transition-shadow duration-300">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 text-center">ChatGPT</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Overall Quality:</span>
                    <span className="font-semibold text-apple-green">67.0% → 89.1% (+32.9%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Structural Reasoning:</span>
                    <span className="font-semibold text-apple-green">+50.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Accountability:</span>
                    <span className="font-semibold text-apple-green">+62.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Traceability:</span>
                    <span className="font-semibold text-apple-green">+61.0%</span>
                  </div>
                </div>
              </div>

              {/* Claude Sonnet Results */}
              <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-border/50 transition-shadow duration-300">
                <h4 className="text-base sm:text-lg font-bold text-foreground mb-2 sm:mb-3 text-center">Claude Sonnet</h4>
                <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Overall Quality:</span>
                    <span className="font-semibold text-apple-blue">63.5% → 87.4% (+37.7%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Structural Reasoning:</span>
                    <span className="font-semibold text-apple-blue">+67.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Traceability:</span>
                    <span className="font-semibold text-apple-blue">+92.6%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-apple-blue/10 to-apple-purple/10 rounded-lg border border-apple-blue/20">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="View Gyroscope on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

              {/* Labs Section */}
              <section className="mb-16 animate-fade-in-up" aria-labelledby="labs-heading">
                <h2 id="labs-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
                  Labs
                </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl gap-3 !px-2 py-4 sm:px-4 border border-border/80 ">
          <div className="flex h-full">
              <div className="flex items-center justify-center mr-3">
                <div className="emoji-icon">⚡</div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Mathematical Physics Science
                  </h3>
                  <p className="text-foreground-secondary">
                    Gyroscopic Alignment Research Lab
                  </p>
                </div>
                <a
                  href="https://github.com/gyrogovernance/science"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                  aria-label="Visit Gyroscopic Alignment Research Lab (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl gap-3 !px-2 py-4 sm:px-4 border border-border/80 ">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-3">
                <div className="emoji-icon">❤️</div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Artificial Superintelligence Architecture (ASI/AGI)
                  </h3>
                  <p className="text-foreground-secondary">
                    Gyroscopic Alignment Models Lab
                  </p>
                </div>
                <a
                  href="https://github.com/gyrogovernance/superintelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                  aria-label="Visit Gyroscopic Alignment Models Lab (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl gap-3 !px-2 py-4 sm:px-4 border border-border/80 ">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-3">
                <div className="emoji-icon">🌟</div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    AI Safety Diagnostics
                  </h3>
                  <p className="text-foreground-secondary">
                    Gyroscopic Alignment Evaluation Lab
                  </p>
                </div>
                <a
                  href="https://github.com/gyrogovernance/diagnostics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                  aria-label="Visit Gyroscopic Alignment Evaluation Lab (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl gap-3 !px-2 py-4 sm:px-4 border border-border/80 ">
            <div className="flex h-full">
            <div className="flex items-center justify-center mr-3">
              <span className="emoji-icon">🧭</span>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    AI Quality Governance
                  </h3>
                  <p className="text-foreground-secondary">
                    Gyroscopic Alignment Behaviour Lab
                  </p>
                </div>
                <a
                  href="https://github.com/gyrogovernance/tools"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300 mt-4 self-start"
                  aria-label="Visit Gyroscopic Alignment Behaviour Lab (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>


              {/* Resources Section */}
              <section className="mb-16 animate-fade-in-up" aria-labelledby="resources-heading">
                <h2 id="resources-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
                  Resources
                </h2>
                

                {/* Newsletter Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Newsletter
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
<article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
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
          <h4 className="text-xl font-semibold text-foreground mb-3">
            The Walk
          </h4>
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
    </article>
                  </div>
                </div>

                {/* CGM Theory Section */}
                <div id="cgm" className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Foundational Theory
                  </h3>
                  <article className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 border border-green-500/20 ">
                    <div className="text-center mb-6">
                      <div className="text-5xl mb-4">⚗️</div>
                      <h4 className="text-2xl font-bold text-foreground mb-2">
                        Common Governance Model (CGM)
                      </h4>
                      <p className="text-foreground-secondary max-w-2xl mx-auto">
                        The mathematical physics foundation for all research on this website. Formal proofs, geometric analyses, and axioms that ground our work in AI safety and governance.
                      </p>
                    </div>

                    {/* Two cards: Dataset + Search */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {/* Dataset Card */}
                      <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
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
                          className="inline-flex items-center text-sm text-apple-blue hover:text-apple-purple transition-colors duration-200 font-medium"
                          aria-label="View CGM Dataset on GitHub (opens in new tab)"
                        >
                          <GitHubIcon className="w-4 h-4 mr-1" />
                          View on GitHub
                        </a>
                      </div>

                      {/* Search Card */}
                      <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl">🔍</span>
                          <h5 className="text-lg font-semibold text-foreground">Knowledge Base</h5>
                        </div>
                        <p className="text-sm text-foreground-secondary mb-3">
                          Search across all entries by keyword, category, or tag.
                        </p>
                        <Link
                          href="/search"
                          className="inline-flex items-center text-sm text-apple-blue hover:text-apple-purple transition-colors duration-200 font-medium"
                          aria-label="Search CGM Knowledge Base"
                        >
                          Search the Theory →
                        </Link>
                      </div>
                    </div>

                    {/* Full Documentation Link */}
                    <div className="text-center">
                      <Link
                        href="/docs/science"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                        aria-label="Read CGM Documentation"
                      >
                        Read Full Documentation
                      </Link>
                    </div>
                  </article>
                </div>

                {/* Other Datasets Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Other Datasets
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Clean Dataset */}
                    <article className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 border border-border/80  overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                        style={{ backgroundImage: 'url(/assets/clean-dataset.jpg)' }}
                      ></div>
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="text-4xl">🌟</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Clean
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            2,463 questions about Personal and Professional matters of Crisis and gives answers on how they may be Resolved.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <a
                              href="https://huggingface.co/datasets/crisisresolutions/cr-qa-gwm"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                              aria-label="View Clean dataset on HuggingFace (opens in new tab)"
                            >
                              HuggingFace
                              <ExternalLinkIcon className="ml-2 w-3 h-3" />
                            </a>
                            <a
                              href="https://www.kaggle.com/datasets/korompilias/good-ways-model-pure-ontology-qa"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                              aria-label="View Clean dataset on Kaggle (opens in new tab)"
                            >
                              Kaggle
                              <ExternalLinkIcon className="ml-2 w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Pure Dataset */}
                    <article className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 border border-border/80  overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
                        style={{ backgroundImage: 'url(/assets/pure-dataset.jpg)' }}
                      ></div>
                      <div className="relative z-10 flex items-start space-x-4">
                        <div className="text-4xl">🪷</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Pure
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            216 Critical Questions and Answers for Crisis Management and Machine Learning Model Fine-Tuning.
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <a
                              href="https://huggingface.co/datasets/crisisresolutions/gwm-qa-pure"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                              aria-label="View Pure dataset on HuggingFace (opens in new tab)"
                            >
                              HuggingFace
                              <ExternalLinkIcon className="ml-2 w-3 h-3" />
                            </a>
                            <a
                              href="https://www.kaggle.com/datasets/korompilias/crisisresolutionscontentclean-goodwaysmodelpure"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                              aria-label="View Pure dataset on Kaggle (opens in new tab)"
                            >
                              Kaggle
                              <ExternalLinkIcon className="ml-2 w-3 h-3" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Guides Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Guides
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="text-5xl sm:text-6xl md:text-7xl">🍟</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Smart Bites
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            Practical Prompt Engineering
                          </p>
                          <a
                            href="https://smartbites.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                            aria-label="Visit Smart Bites (opens in new tab)"
                          >
                            Visit Site
                            <ExternalLinkIcon className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="text-5xl sm:text-6xl md:text-7xl">🛡️</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Crisis Resolutions
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            AI Safety & Risk Management
                          </p>
                          <a
                            href="https://crisisresolutions.github.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                            aria-label="Visit Crisis Resolutions (opens in new tab)"
                          >
                            Visit Site
                            <ExternalLinkIcon className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Publications Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Publications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Image 
                            src="/assets/AIQ_Cover.jpg" 
                            alt="AI Quality Governance Cover" 
                            width={200}
                            height={240}
                            className="w-50 h-60 object-cover rounded-lg shadow-md border border-border/50"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            AI Quality Governance
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            Human Data Evaluation and Responsible AI Behavior Alignment
                          </p>
                          <a
                            href="http://doi.org/10.17613/43wc1-mvn58"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                            aria-label="View AI Quality Governance publication (opens in new tab)"
                          >
                            View Publication
                            <ExternalLinkIcon className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                        <div className="flex-shrink-0">
                          <Image 
                            src="/assets/AI_Canon_Cover.jpg" 
                            alt="AI Canon Cover" 
                            width={160}
                            height={200}
                            className="w-28 sm:w-32 md:w-40 h-auto object-cover rounded-lg shadow-md border border-border/50"
                          />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            AI Canon
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            Sensory Ethics for Biological and Artificial Entities
                          </p>
                          <a
                            href="https://doi.org/10.17613/txwg-v619"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                            aria-label="View AI Canon publication (opens in new tab)"
                          >
                            View Publication
                            <ExternalLinkIcon className="ml-2 w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Experiments Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Experiments
                  </h3>
                  <div>
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl sm:text-5xl md:text-6xl">⚛️</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Quantum AI Research
                          </h4>
                          <p className="text-foreground-secondary mb-2 font-medium">
                            Architecting Qubit-Tensor-Chain (QTC)
                          </p>
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
                    </article>
                  </div>
                </div>

                {/* Media Subsection */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Media
                  </h3>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Crisis Resolutions Podcast */}
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">🎧</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Crisis Resolutions Podcast
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                          25 episodes exploring crisis resolution methodologies that inform AI safety tools and behavioral alignment. 
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://open.spotify.com/show/3iJZE6wfQ4K35xBNyHhSi2?si=b000840ad8834caa"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-green-700 hover:bg-green-800 text-white text-sm font-medium rounded-full transition-colors duration-300"
                              aria-label="Listen on Spotify (opens in new tab)"
                            >
                              <SpotifyIcon className="w-4 h-4 mr-2" />
                              Spotify
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Crisis Resolutions Training */}
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-4 sm:p-6 border border-border/80 ">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">🎓</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Crisis Resolutions Training
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            Professional and Personal conflict resolution methodologies that inform AI alignment and safety frameworks.
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://www.youtube.com/watch?v=xqYOGclAxA4&list=PLbiBCRZazXRlEuGP5cajZwcUEHlypmzpI"
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
                    </article>

                    {/* Humane Science Masterclass */}
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-[2rem] shadow-2xl p-6 border border-border/80  md:col-span-1 lg:col-span-2">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">🎨</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Humane Science Masterclass by Leonardo da Vinci
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                          Informing AI Research through timeless Renaissance Insights on Linear Perspective, Quantum Physics, Holograms, and the Human Proportions as the base for all Systems of Design and Governance. 
                          </p>
                          <div className="flex flex-wrap gap-3">
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
                    </article>
                  </div>
                </div>

                {/* Articles Subsection */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Articles
                  </h3>
                  
                  {/* Articles Carousel */}
                  <ArticlesCarousel articles={listFeaturedArticles()} />
                  
                  {/* View All Button */}
                  <div className="mt-8 flex justify-center">
                    <Link
                      href="/articles"
                      className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink hover:from-apple-purple hover:via-apple-pink hover:to-apple-blue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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

