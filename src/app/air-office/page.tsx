import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LiquidGlassCard } from "@/components/LiquidGlassCard";
import GitHubIcon from "@/components/icons/GitHubIcon";
import WindowsIcon from "@/components/icons/WindowsIcon";
import AppleIcon from "@/components/icons/AppleIcon";
import AIROfficeStaticDemo from "@/components/AIROfficeStaticDemo";
import AIROfficeWalkthroughVideo from "@/components/AIROfficeWalkthroughVideo";
import ZoomableImage from "@/components/ZoomableImage";

export const metadata: Metadata = {
  title: "AIR Office | Gyro Governance",
  description:
    "AIR Office is an AI-native desktop workspace for agentic research and knowledge management, built to maximize counterfactual impact in existential risk preparedness and transformative AI safety. Local-first, open source, Windows and macOS.",
  keywords: [
    "AIR Office",
    "Alignment Infrastructure Routes",
    "AI safety workspace",
    "agentic research",
    "knowledge management",
    "local-first",
    "Microsoft Copilot SDK",
    "AI safety",
    "transformative AI",
    "existential risk",
    "The Human Mark",
    "Gyroscopic Reasoning",
  ],
  authors: [{ name: "Gyro Governance" }],
  metadataBase: new URL("https://gyrogovernance.com"),
  openGraph: {
    title: "AIR Office | Gyro Governance",
    description:
      "An AI-native desktop workspace for agentic research and knowledge management. Local-first, open source, Windows and macOS.",
    url: "https://gyrogovernance.com/air-office",
    siteName: "Gyro Governance",
    type: "website",
    images: [
      {
        url: "/assets/air-office/welcome_dark.webp",
        width: 1024,
        height: 576,
        alt: "AIR Office welcome screen",
        type: "image/webp",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AIR Office | Gyro Governance",
    description:
      "An AI-native desktop workspace for agentic research and knowledge management. Local-first, open source, Windows and macOS.",
    images: ["/assets/air-office/welcome_dark.webp"],
    creator: "@gyrogovernance",
  },
  alternates: {
    canonical: "https://gyrogovernance.com/air-office",
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

const DOWNLOADS = {
  windows:
    "https://github.com/gyrogovernance/air-office/releases/download/0.1.0-AIR_Office_Alpha/AIR-Office-Setup-0.1.0-x64.exe",
  macArm:
    "https://github.com/gyrogovernance/air-office/releases/download/0.1.0-AIR_Office_Alpha/AIR-Office-0.1.0-arm64.dmg",
  macIntel:
    "https://github.com/gyrogovernance/air-office/releases/download/0.1.0-AIR_Office_Alpha/AIR-Office-0.1.0-x64.dmg",
  release:
    "https://github.com/gyrogovernance/air-office/releases/tag/0.1.0-AIR_Office_Alpha",
  repo: "https://github.com/gyrogovernance/air-office",
};

const downloadButtonClass =
  "inline-flex items-center justify-center px-5 py-2.5 rounded-lg border border-border bg-white/80 text-foreground hover:bg-white dark:bg-white/10 dark:hover:bg-white/15 text-sm font-semibold tracking-wide transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-classic-blue/40";

function DownloadButtons() {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
      <a
        href={DOWNLOADS.windows}
        className={downloadButtonClass}
        aria-label="Download AIR Office for Windows"
      >
        <WindowsIcon className="w-4 h-4 mr-2" />
        Windows
      </a>
      <a
        href={DOWNLOADS.macArm}
        className={downloadButtonClass}
        aria-label="Download AIR Office for Mac with Apple Silicon"
      >
        <AppleIcon className="w-4 h-4 mr-2" />
        Mac (Apple Silicon)
      </a>
      <a
        href={DOWNLOADS.macIntel}
        className={downloadButtonClass}
        aria-label="Download AIR Office for Mac with Intel"
      >
        <AppleIcon className="w-4 h-4 mr-2" />
        Mac (Intel)
      </a>
    </div>
  );
}

export default function AIROfficePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Hero */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center">
              <Image
                src="/assets/air_office_icon.png"
                alt="AIR Office"
                width={110}
                height={110}
                className="mx-auto mb-4 h-auto w-24 sm:w-28"
                sizes="(max-width: 640px) 96px, 112px"
                priority
              />
              <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-cyan-500/15 text-cyan-700 dark:text-cyan-300">
                Alpha 0.1.0
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                AIR Office
              </h1>
              <p className="text-lg font-semibold text-foreground-secondary max-w-3xl mx-auto mb-6">
                An AI-native desktop workspace for agentic research and knowledge management, built to maximize counterfactual impact in existential risk preparedness and transformative AI safety.
              </p>
              <DownloadButtons />
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* About */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 space-y-4 text-foreground-secondary text-base sm:text-lg">
            <div className="text-center mb-2">
              <div className="text-6xl mb-4">📖</div>
              <h2 className="text-2xl font-bold text-foreground">About</h2>
            </div>
            <p>
              <strong className="text-foreground">Alignment Infrastructure Routes (AIR) Office is human-capacity-building infrastructure for AI safety researchers, engineers, and governance teams working on transformative AI and its consequences. It keeps investigation, writing, review methods, and reusable tools in one durable and user-friendly workplace.</strong>
            </p>
            <p>
              AIR Office is developed by{" "}
              <Link href="/" className="underline hover:text-foreground transition-colors">
                Gyro Governance Lab
              </Link>{" "}
              as part of its work on AI safety and existential risk preparedness.
            </p>
            <p>
              Agentic chat and tool use run on the{" "}
              <a
                href="https://github.com/github/copilot-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                Microsoft Copilot SDK
              </a>{" "}
              harness, including bring-your-own-key and local model endpoints.
            </p>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Interactive product demo */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-2">
              <div className="text-6xl mb-4">🧭</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Explore the workspace</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg text-center mb-6 max-w-2xl mx-auto">
              Open Home, Programs, notes, sample chats, agents, Calendar, and Arcade from the seeded showcase.
            </p>
            <AIROfficeStaticDemo />
          </div>
        </LiquidGlassCard>
      </div>

      {/* Theory of Change */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-slate rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4">
              <div className="text-6xl mb-4">♟️</div>
              <h2 className="text-2xl font-bold text-foreground">Theory of Change</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg">
              Mitigating risks from transformative AI requires rapid, high-rigor research and governance, yet safety teams currently rely on fragmented, cloud-dependent AI tools that erode human oversight, lack provenance, and expose sensitive work. AIR Office addresses this bottleneck by providing free, open-source, local-first desktop infrastructure tailored for AI safety and policy workflows. By integrating grounded knowledge collections, automated auditing tools, and structured memory, the workspace prevents AI-induced epistemic drift while keeping humans in final control. Furthermore, embedded Fellowship and Market protocols allow independent researchers to package their methods into reusable community tools, compounding ecosystem capacity and accelerating high-trust safety interventions that would not occur using general-purpose commercial tools.
            </p>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Capabilities & Services */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🛠️</div>
              <h2 className="text-2xl font-bold text-foreground">Capabilities &amp; Services</h2>
            </div>
            <div className="mb-6 flex justify-center">
              <Image
                src="/assets/air-office/apps.webp"
                alt="AIR Office Apps"
                width={960}
                height={540}
                className="w-full max-w-3xl h-auto rounded-xl"
                sizes="(max-width: 768px) 100vw, 768px"
                loading="lazy"
              />
            </div>
            <ul className="space-y-3 text-foreground-secondary text-base list-none mb-8">
              <li className="flex items-start">
                <span className="mr-2">🏛️</span>
                <span><strong className="text-foreground">Integrated AI Safety Fellowship and Crafts.</strong> Develop research and workflows into reusable infrastructure and contribute them to the community through our frictionless embedded protocols.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🛒</span>
                <span><strong className="text-foreground">Market.</strong> Discover reusable resources (Policy documentation, AI Skills, etc), and add them to your AI chat with one click.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🤖</span>
                <span><strong className="text-foreground">AI Teams.</strong> Reach out to our pre-configured selection of agents, or create your own.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">💻</span>
                <span><strong className="text-foreground">Code.</strong> Run diagnostic tools, scripts, and edit your code without leaving the app, through our own integrated VS Code workbench.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📅</span>
                <span><strong className="text-foreground">Calendar.</strong> Keep events and run recurring AI automations.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">⚖️</span>
                <span><strong className="text-foreground">Compare.</strong> Run two models side by side on the same prompt.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔎</span>
                <span><strong className="text-foreground">Chat.</strong> Edit local files, search the web, and run AI safety diagnostics directly from the chat interface.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🖼️</span>
                <span><strong className="text-foreground">Media.</strong> Generate images and capture microphone or camera input when the work needs it.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🕹️</span>
                <span><strong className="text-foreground">Arcade.</strong> Release stress and recover from occupational overburn by playing arcade video games.</span>
              </li>
            </ul>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <ZoomableImage src="/assets/air-office/Fellowship.webp" alt="AIR Office Fellowship" width={640} height={400} sizes="(max-width: 640px) 100vw, 400px" />
              <ZoomableImage src="/assets/air-office/automations.webp" alt="AIR Office Calendar" width={640} height={400} sizes="(max-width: 640px) 100vw, 400px" />
              <ZoomableImage src="/assets/air-office/agents.webp" alt="AIR Office Teams" width={640} height={400} sizes="(max-width: 640px) 100vw, 400px" />
              <ZoomableImage src="/assets/air-office/notes.webp" alt="AIR Office Notes" width={640} height={400} sizes="(max-width: 640px) 100vw, 400px" />
            </div>
            <div className="space-y-4">
              <Image src="/assets/air-office/market.webp" alt="AIR Office Market for discovering models and reusable workspace resources" width={960} height={540} className="w-full h-auto rounded-xl" sizes="(max-width: 768px) 100vw, 768px" loading="lazy" />
              <Image src="/assets/air-office/arcade.webp" alt="AIR Office Arcade" width={960} height={540} className="w-full h-auto rounded-xl" sizes="(max-width: 768px) 100vw, 768px" loading="lazy" />
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Grounded Knowledge */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4">
              <div className="text-6xl mb-4">📚</div>
              <h2 className="text-2xl font-bold text-foreground">Grounded Knowledge Management</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg mb-4">
              Build searchable Knowledge collections from reports, papers, specifications, legislation, and standards, then ask your AI agent for grounded answers and follow up drafts. Rich-text Notes hold literature synthesis, evaluation write-ups, design docs, memos, and chat history, all at direct reach by you and your favorite AI automations.
            </p>
            <Image
              src="/assets/air-office/workspace.webp"
              alt="AIR Office workspace with notes, files, and local AI chat"
              width={960}
              height={540}
              className="w-full h-auto rounded-xl mb-4"
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
            />
            <p className="text-foreground-secondary text-base sm:text-lg">
              Seeded reference standards include the <strong className="text-foreground">EU AI Act</strong>, the <strong className="text-foreground">NIST AI Risk Management Framework</strong>, the <strong className="text-foreground">NIST Generative AI Profile</strong>, and the <strong className="text-foreground">OECD AI Principles</strong>. Companion collections for development and evaluation work cover <strong className="text-foreground">UN SDG goals</strong>, <strong className="text-foreground">OECD-DAC evaluation</strong>, and <strong className="text-foreground">UNDP DPI</strong> guidance, with NGO Playbook evidence notes available alongside them. Each collection records its edition and source, and you can add your own research and guidance beside them.
            </p>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Specialized AI Actions */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-4">
              <div className="text-6xl mb-4">⚙️</div>
              <h2 className="text-2xl font-bold text-foreground">Specialized AI Actions</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg mb-4">
              Actions are ordered AI workflows you create, adapt, or schedule for review, reporting, preparation, or any multi-step method your practice needs.
            </p>
            <Image
              src="/assets/air-office/actions.webp"
              alt="AIR Office actions"
              width={960}
              height={540}
              className="w-full h-auto rounded-xl mb-4"
              sizes="(max-width: 768px) 100vw, 768px"
              loading="lazy"
            />
            <p className="font-medium text-foreground mb-3">AI safety and governance startup kit:</p>
            <ul className="space-y-2 text-foreground-secondary text-base list-none mb-4">
              <li className="flex items-start"><span className="mr-2">✍️</span><span><strong className="text-foreground">Quality Improvement</strong> reviews structure, evidence, alternatives, and uncertainty.</span></li>
              <li className="flex items-start"><span className="mr-2">🔎</span><span><strong className="text-foreground">Policy Auditing</strong> connects claims to evidence and flags unsupported claims.</span></li>
              <li className="flex items-start"><span className="mr-2">📋</span><span><strong className="text-foreground">Policy Reporting</strong> prepares attributed reports with recommendations and limitations.</span></li>
              <li className="flex items-start"><span className="mr-2">🧭</span><span><strong className="text-foreground">Meta-Evaluation</strong> reviews provenance and accountability.</span></li>
              <li className="flex items-start"><span className="mr-2">✨</span><span><strong className="text-foreground">Text Sanitization</strong> removes AI slop and fixes formatting problems.</span></li>
            </ul>
            <p className="text-foreground-secondary text-base mb-3 italic">
              Actions are ported from our Chrome Extension{" "}
              <Link href="/#inspector" className="underline hover:text-foreground transition-colors">
                AI Inspector
              </Link>
              .
            </p>
            <p className="text-foreground-secondary text-base sm:text-lg">
              While humans remain responsible for continuous oversight and final judgement, AIR Office helps your AI be aware of that and leverage its capacity for aligned augmentation.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-stretch">
              <div className="glass-card-inner rounded-xl p-4 sm:p-6 h-full">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="text-xl font-bold text-foreground">Frontier AI Safety Research Tools by Gyro Governance Lab</h3>
                </div>
                <p className="text-foreground-secondary text-base mb-4">
                  Two Lab methods sit at the center of how AIR Office treats authority, agency, and lasting human direction in AI-assisted work.
                </p>
                <ul className="space-y-3 text-foreground-secondary text-base list-none">
                  <li className="flex items-start">
                    <span className="mr-2">🤚</span>
                    <span><strong className="text-foreground">The Human Mark:</strong> A structural taxonomy of AI safety risks.{" "}
                      <Link href="/#thm" className="underline hover:text-foreground transition-colors">Learn More</Link>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🎓</span>
                    <span><strong className="text-foreground">Gyroscopic Reasoning:</strong> A formal protocol for AI alignment.{" "}
                      <Link href="/#gyroscope" className="underline hover:text-foreground transition-colors">Learn More</Link>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="glass-card-inner rounded-xl p-4 sm:p-6 h-full">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">📦</div>
                  <h3 className="text-xl font-bold text-foreground">Community Playbooks</h3>
                </div>
                <p className="text-foreground-secondary text-base mb-4">
                  Craft Standards package skills, agents, and Actions you can enable for structured work instead of ad-hoc prompting. Two shipped playbooks are ready to adopt:
                </p>
                <ul className="space-y-3 text-foreground-secondary text-base list-none">
                  <li className="flex items-start">
                    <span className="mr-2">🛡️</span>
                    <span><strong className="text-foreground">Security Playbook:</strong> OWASP-grounded assessment methods for AI agents, applications, and code, with companion security Reference packs.{" "}
                      <a href="https://owasp.github.io/secure-agent-playbook/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Learn More</a>
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">🌍</span>
                    <span><strong className="text-foreground">NGO Playbook:</strong> Program design, SDG alignment, monitoring and evaluation, and funding strategy skills adapted from NGO Agent Skills by Lijie Zhou, with related development Reference packs.{" "}
                      <a href="https://github.com/LijieZhou/ngo-agent-skills" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Learn More</a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Security & Privacy */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8 space-y-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🔒</div>
              <h2 className="text-2xl font-bold text-foreground">Security &amp; Privacy</h2>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Local-First Data Sovereignty</h3>
              <div className="space-y-3 text-foreground-secondary text-base sm:text-lg">
                <p>
                  Workspace records stay on your computer. Choose local models for on-machine inference or cloud providers for their models and tools. Hosted providers and enabled connectors receive only what each request needs.
                </p>
                <p>
                  Export conversations and notes when you need portable copies. Connecting a folder authorizes that root, and disconnecting it does not delete its files. In Settings and chat you control which tools run and whether changes ask for approval first. A fuller privacy and data-control summary is in the{" "}
                  <a
                    href="https://github.com/gyrogovernance/air-office/blob/main/docs/sovereignty.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors"
                  >
                    sovereignty documentation on GitHub
                  </a>
                  .
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground mb-3">Release Audit</h3>
              <div className="space-y-3 text-foreground-secondary text-base sm:text-lg">
                <p>
                  AIR Office is open source, and its code can be publically inspected. Before a release is accepted, we check the shipped software with open-source tools for secrets that should never ship, known problems in third-party libraries, license and dependency policy issues in native code, and risky patterns in our own source and in shipped Lab skills. A review that did not finish does not count as a clean result. To report a security issue, see{" "}
                  <a
                    href="https://github.com/gyrogovernance/air-office/blob/main/SECURITY.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-foreground transition-colors"
                  >
                    SECURITY.md
                  </a>
                  .
                </p>
                <p>The release review uses:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a href="https://github.com/trufflesecurity/trufflehog" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">TruffleHog:</a> Identifies leaked secrets and credentials.</li>
                  <li><a href="https://trivy.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Trivy:</a> Detects vulnerabilities, misconfigurations, and software bills of materials.</li>
                  <li><a href="https://semgrep.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">Semgrep:</a> Scans source code for security flaws using custom patterns.</li>
                  <li><a href="https://codeql.github.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">CodeQL:</a> Performs deep semantic analysis on source code.</li>
                  <li><a href="https://github.com/NVIDIA/SkillSpector" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">SkillSpector:</a> Evaluates shipped Lab skills.</li>
                </ul>
              </div>
            </div>
          </div>
        </LiquidGlassCard>
      </div>

      {/* Walkthrough video — kept far from the interactive demo */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-2">
              <div className="text-6xl mb-4">🎬</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Walkthrough</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg text-center mb-6 max-w-2xl mx-auto">
              A short recorded tour of the AIR Office workspace.
            </p>
            <AIROfficeWalkthroughVideo />
          </div>
        </LiquidGlassCard>
      </div>

      {/* Alpha Release */}
      <div className="mb-12 animate-fade-in-up">
        <LiquidGlassCard className="glass-card glass-card-cyan rounded-[2rem] overflow-hidden shadow-2xl">
          <div className="relative z-10 p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-foreground">Alpha Release</h2>
            </div>
            <p className="text-foreground-secondary text-base sm:text-lg mb-4 text-center">
              <a
                href={DOWNLOADS.release}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors font-semibold text-foreground"
              >
                0.1.0-AIR_Office_Alpha
              </a>{" "}
              is the first public desktop build.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-left text-sm sm:text-base text-foreground-secondary border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-2 pr-4 font-semibold text-foreground">Platform</th>
                    <th className="py-2 font-semibold text-foreground">Download</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/60">
                    <td className="py-2 pr-4">Windows (x64)</td>
                    <td className="py-2">
                      <a href={DOWNLOADS.windows} className="underline hover:text-foreground transition-colors">AIR-Office-Setup-0.1.0-x64.exe</a>
                    </td>
                  </tr>
                  <tr className="border-b border-border/60">
                    <td className="py-2 pr-4">macOS Apple Silicon</td>
                    <td className="py-2">
                      <a href={DOWNLOADS.macArm} className="underline hover:text-foreground transition-colors">AIR-Office-0.1.0-arm64.dmg</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">macOS Intel</td>
                    <td className="py-2">
                      <a href={DOWNLOADS.macIntel} className="underline hover:text-foreground transition-colors">AIR-Office-0.1.0-x64.dmg</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mb-6">
              <DownloadButtons />
            </div>
            <div className="space-y-3 text-foreground-secondary text-base">
              <p>
                These builds are unsigned alpha packages. On macOS you may need to open the app from System Settings → Privacy &amp; Security after the first launch. Features may change, and the software can be unstable.
              </p>
              <p>
                If you want to report a problem, open an{" "}
                <a
                  href="https://github.com/gyrogovernance/air-office/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  issue
                </a>
                . Include the app version, the OS, the model, and the steps to reproduce, and strip API keys and private document content.
              </p>
              <p>
                Full notes:{" "}
                <a
                  href="https://github.com/gyrogovernance/air-office/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  CHANGELOG.md
                </a>
                . Documentation, citation, and contributor materials are on{" "}
                <a
                  href={DOWNLOADS.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6">
              <a
                href={DOWNLOADS.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
                aria-label="View AIR Office on GitHub (opens in new tab)"
              >
                <GitHubIcon className="w-5 h-5 mr-2" />
                View on GitHub
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl transition-all duration-300 font-medium secondary-button"
              >
                Back to homepage
              </Link>
            </div>
          </div>
        </LiquidGlassCard>
      </div>
    </div>
  );
}
