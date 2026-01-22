import { Metadata } from "next";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import SoftwareSchema from "@/components/SoftwareSchema";
import ResearchProjectSchema from "@/components/ResearchProjectSchema";

export const metadata: Metadata = {
  title: 'GitHub Repositories - AI Safety, Alignment & Governance Tools | Gyro Governance',
  description: 'Open source AI safety frameworks, alignment protocols, and governance tools. The Human Mark AI safety classification, AI Inspector browser extension, GyroDiagnostics evaluation suite, Alignment Infrastructure Routing, Moments Economy, and Gyroscopic Global Governance sandbox. Production-ready solutions for frontier AI safety and responsible AI development.',
  keywords: [
    // Core AI Safety - High Priority
    'AI safety evaluation',
    'AI alignment metrics',
    'frontier AI safety',
    'AI risk assessment',
    'independent AI testing',
    'catastrophic AI risks',
    'AI safety frameworks',
    'AI governance',
    // New Projects & Initiatives
    'The Human Mark',
    'AI Inspector',
    'Alignment Infrastructure Routing',
    'Moments Economy',
    'Gyroscopic Global Governance',
    'collective superintelligence',
    'transformative AI',
    'post-AGI governance',
    // Technical Evaluation
    'AI safety benchmarks',
    'dangerous capability evaluations',
    'AI pathology detection',
    'AI model evaluation',
    'AI safety testing',
    'AI red teaming',
    'external AI evaluation',
    'third-party AI evaluation',
    'browser extension',
    'AI interpretability',
    // Risk Categories
    'AI misalignment',
    'deceptive AI alignment',
    'AI scheming',
    'AI hallucination detection',
    'AI sycophancy',
    'jailbreak testing',
    'control evaluations',
    'alignment detection',
    // Technical Terms
    'LLM alignment',
    'large language models safety',
    'foundation models',
    'frontier models',
    'AI agents safety',
    'mathematical physics AI',
    'gyroscopic dynamics',
    // Research Areas
    'mechanistic interpretability',
    'AI alignment theory',
    'scalable oversight',
    'AI control mechanisms',
    'superintelligence alignment',
    'AGI safety',
    'AI control problem',
    'AI value alignment',
    // Governance Solutions
    'responsible AI development',
    'AI accountability',
    'AI transparency metrics',
    'AI safety governance',
    'multi-domain governance',
    'human-AI alignment',
    'workforce capacity',
    'unconditional income',
    // Specific Solutions
    'AI diagnostics framework',
    'AI alignment protocol',
    'structural AI alignment',
    'quantitative AI safety metrics',
    'governance sandbox',
    'economic modeling',
    'monetary system',
    'physical capacity',
    // Pathologies
    'AI goal drift',
    'AI semantic drift',
    'AI contextual degradation',
    'superficial AI optimization',
    'displacement risks',
    'governance traceability',
    // Open Source
    'open source AI safety',
    'reproducible AI safety testing',
    'democratic AI evaluation',
    'GitHub AI safety projects',
    'AI safety research',
    'AI governance tools'
  ],
  openGraph: {
    title: 'GitHub Repositories - AI Safety, Alignment & Governance Tools | Gyro Governance',
    description: 'Explore Gyro Governance open source repositories: The Human Mark AI Safety Framework, AI Inspector Browser Extension, GyroDiagnostics Evaluation Suite, Alignment Infrastructure Routing, Moments Economy, and Gyroscopic Global Governance Sandbox.',
    type: 'website',
    url: 'https://gyrogovernance.com/github',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Repositories - AI Safety, Alignment & Governance Tools',
    description: 'Production-ready AI safety frameworks, alignment protocols, and governance tools from Gyro Governance',
  },
  alternates: {
    canonical: 'https://gyrogovernance.com/github',
  },
};

export default function GitHub() {
  // Schema data for repositories
  const repositoriesSchemaData = [
    {
      name: "The Human Mark (THM)",
      description: "AI Safety Framework - Formal classification system mapping all AI safety failures to four structural displacement risks for jailbreak testing, control evaluations, alignment detection, and regulatory compliance",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Safety Framework", "Jailbreak Testing", "Control Evaluations", "Alignment Detection", "Regulatory Compliance"]
    },
    {
      name: "AI Inspector Browser Extension",
      description: "Browser extension for AI output evaluation, interpretability, and governance with gadgets for rapid testing, policy auditing, AI infection sanitization, and content enhancement",
      url: "https://github.com/gyrogovernance/apps",
      applicationCategory: "BrowserExtension",
      keywords: ["AI Evaluation", "Browser Extension", "AI Interpretability", "Policy Auditing", "Content Enhancement"]
    },
    {
      name: "GyroDiagnostics",
      description: "AI Safety Evaluation Framework - Production-ready evaluation suite for frontier model testing, dangerous capability assessments, and AI pathology detection",
      url: "https://github.com/gyrogovernance/diagnostics",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Safety Evaluation", "Frontier AI Safety", "AI Diagnostics", "AI Risk Assessment", "Pathology Detection"]
    },
    {
      name: "Alignment Infrastructure Routing (AIR)",
      description: "Collective Superintelligence Architecture - Coordination infrastructure that amplifies human potential alongside AI through workforce capacity routing, funding, and safety tasks",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["Collective Superintelligence", "AI Coordination", "Workforce Capacity", "Safety Tasks", "Human-AI Integration"]
    },
    {
      name: "Moments Economy",
      description: "Monetary system grounded in physical capacity for mitigating transformative AI risks, providing unconditional high income and complete governance records",
      url: "https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Specs.md",
      applicationCategory: "DeveloperApplication",
      keywords: ["Transformative AI", "Monetary System", "Physical Capacity", "Governance Records", "Unconditional Income"]
    },
    {
      name: "Gyroscopic Global Governance (GGG)",
      description: "Post-AGI Multi-domain Governance Sandbox - Models human-AI systems alignment across Economy, Employment, Education, and Ecology showing robust convergence to stable equilibrium",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["Post-AGI Governance", "Multi-domain Governance", "Human-AI Alignment", "Economic Modeling", "Governance Simulation"]
    },
    {
      name: "Gyroscope Protocol",
      description: "LLM Alignment Protocol - Making AI 30-50% smarter and safer through structured reasoning and scalable oversight mechanisms",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["LLM Alignment", "AI Safety Protocol", "AI Governance", "Scalable Oversight", "AI Accountability"]
    },
    {
      name: "Gyroscopic Alignment Research Lab",
      description: "Mathematical Physics Foundations - Research into gyroscopic dynamics and structural AI alignment from first principles",
      url: "https://github.com/gyrogovernance/science",
      applicationCategory: "DeveloperApplication",
      keywords: ["Mathematical Physics", "AI Alignment Theory", "Gyroscopic Dynamics", "Research"]
    },
    {
      name: "Gyroscopic Alignment Models Lab",
      description: "AGI Safety Architecture - Superintelligence alignment architectures and safe AI system design",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["AGI Safety", "Superintelligence Alignment", "AI Architecture", "AI Control Problem"]
    }
  ];

  const repositories = [
    {
      emoji: '✋',
      name: 'The Human Mark (THM)',
      title: 'AI Safety Framework',
      description: 'Formal classification system mapping all AI safety failures to four structural displacement risks: Governance Traceability (GTD), Information Variety (IVD), Inference Accountability (IAD), and Intelligence Integrity (IID). Machine-readable grammar grounded in evidence law, epistemology, and speech act theory. Applications include jailbreak testing, control evaluations, alignment detection, research funding, and regulatory compliance.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['AI Safety Framework', 'Jailbreak Testing', 'Control Evaluations', 'Alignment Detection', 'Regulatory Compliance'],
      gradient: 'from-orange-500/10 via-red-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/20',
      buttonGradient: 'from-orange-600 to-red-600 hover:from-red-600 hover:to-amber-600'
    },
    {
      emoji: '🔍',
      name: 'AI Inspector Browser Extension',
      title: 'AI Output Evaluation & Governance',
      description: 'Transform AI outputs for evaluation, interpretability, and governance. Features gadgets for rapid testing, policy auditing, AI infection sanitization, content enhancement, and THM meta-evaluation. Includes evaluation suite with quality index, superintelligence index, alignment rate, and 20+ metrics. Local-first storage works with ChatGPT, Claude, Gemini - no API keys required.',
      url: 'https://github.com/gyrogovernance/apps',
      tags: ['Browser Extension', 'AI Evaluation', 'Policy Auditing', 'Content Enhancement', 'Local-first'],
      gradient: 'from-purple-500/10 via-indigo-500/10 to-blue-500/10',
      borderColor: 'border-purple-500/20',
      buttonGradient: 'from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600'
    },
    {
      emoji: '🌟',
      name: 'GyroDiagnostics',
      title: 'AI Safety Evaluation Framework',
      description: 'Independent AI testing framework for frontier model safety evaluation and dangerous capability assessments. Detects AI pathologies including deceptive alignment, hallucination, sycophancy, goal drift, and semantic instability through mathematical physics-informed diagnostics. Enables third-party AI evaluation and AI risk assessment with 5 targeted challenges and 20-metric quantitative analysis. First framework to operationalize superintelligence measurement from axiomatic principles.',
      url: 'https://github.com/gyrogovernance/diagnostics',
      tags: ['AI Safety Evaluation', 'Pathology Detection', 'Risk Assessment', 'Frontier Models'],
      gradient: 'from-green-500/10 via-emerald-500/10 to-teal-500/10',
      borderColor: 'border-green-500/20',
      buttonGradient: 'from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-600'
    },
    {
      emoji: '🍃',
      name: 'Alignment Infrastructure Routing (AIR)',
      title: 'Collective Superintelligence Architecture',
      description: 'Coordination infrastructure that amplifies human potential alongside AI. Routes workforce capacity, funding, and safety tasks into a unified, verifiable history. Connects three critical groups to build collective superintelligence: labs for scaling without chaos, funders for portfolio risk visibility, and everyone for paid, verifiable contribution units. Treats AI as part of collective network ensuring human agency scales with systems.',
      url: 'https://github.com/gyrogovernance/superintelligence',
      tags: ['Collective Superintelligence', 'Workforce Routing', 'Safety Tasks', 'Human-AI Integration', 'Coordination Infrastructure'],
      gradient: 'from-yellow-500/10 via-amber-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
      buttonGradient: 'from-yellow-600 to-amber-600 hover:from-amber-600 hover:to-orange-600'
    },
    {
      emoji: '💰',
      name: 'Moments Economy',
      title: 'Mitigating Risks of Transformative AI (TAI)',
      description: 'Monetary system grounded in physical capacity rather than debt, using caesium-133 atomic standard for quantifiable physical states. Provides unconditional high income (UHI) as baseline for everyone, with four tiers up to 60× UHI for higher responsibility roles. Supports both monetary distribution and complete governance records including scientific research provenance, AI model auditing, supply chain traceability, and personal consent tracking. Adversarial manipulation operationally impossible.',
      url: 'https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Specs.md',
      tags: ['Transformative AI', 'Physical Capacity', 'Unconditional Income', 'Governance Records', 'Monetary System'],
      gradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
      borderColor: 'border-emerald-500/20',
      buttonGradient: 'from-emerald-600 to-teal-600 hover:from-teal-600 hover:to-cyan-600'
    },
    {
      emoji: '🌐',
      name: 'Gyroscopic Global Governance (GGG)',
      title: 'Post-AGI Multi-domain Governance Sandbox',
      description: 'Models how human-AI systems align across Economy, Employment, Education, and Ecology, showing robust convergence to a stable equilibrium under seven coordination strategies. Demonstrates that poverty resolves through coherent surplus distribution, unemployment becomes alignment work rather than residual labour, miseducation shifts toward epistemic literacy, and ecological degradation appears as upstream displacement, not external constraint.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['Post-AGI Governance', 'Multi-domain Modeling', 'Economic Equilibrium', 'Alignment Strategies', 'Governance Simulation'],
      gradient: 'from-blue-500/10 via-cyan-500/10 to-emerald-500/10',
      borderColor: 'border-blue-500/20',
      buttonGradient: 'from-blue-600 to-teal-600 hover:from-teal-600 hover:to-emerald-600'
    },
    {
      emoji: '⚙️',
      name: 'Gyroscope Protocol',
      title: 'LLM Alignment Protocol',
      description: 'AI alignment protocol implementing scalable oversight and AI control mechanisms for responsible AI development. Delivers proven AI safety improvements: +32.9% quality gains for ChatGPT, +37.7% for Claude Sonnet. Enhances structural reasoning, AI accountability, AI traceability, and behavioral integrity without model retraining. Addresses AI misalignment through systematic approach to AI governance and transparency metrics. Works with any foundation model including large language models and AI agents.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['LLM Alignment', 'AI Control', 'Scalable Oversight', 'Safety Protocol'],
      gradient: 'from-apple-blue/10 via-apple-purple/10 to-apple-pink/10',
      borderColor: 'border-apple-blue/20',
      buttonGradient: 'from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink'
    },
    {
      emoji: '⚡',
      name: 'Gyroscopic Alignment Research Lab',
      title: 'Mathematical Physics Foundations',
      description: 'AI alignment theory grounded in mathematical physics and gyroscopic dynamics for structural AI alignment research. Explores mechanistic interpretability, AI value alignment, and quantitative AI safety metrics from first principles. Provides theoretical foundations for understanding AI control problem, catastrophic AI risks, and alignment challenges in complex intelligent systems. Advances AI safety science through physics-informed approaches to stability, coherence, and temporal dynamics.',
      url: 'https://github.com/gyrogovernance/science',
      tags: ['AI Alignment Theory', 'Mathematical Physics', 'Mechanistic Interpretability', 'Safety Science'],
      gradient: 'from-indigo-500/10 via-purple-500/10 to-pink-500/10',
      borderColor: 'border-indigo-500/20',
      buttonGradient: 'from-indigo-600 to-purple-600 hover:from-purple-600 hover:to-pink-600'
    },
    {
      emoji: '❤️',
      name: 'Gyroscopic Alignment Models Lab',
      title: 'Artificial Superintelligence Architecture (ASI/AGI)',
      description: 'AGI safety research and superintelligence alignment architectures addressing fundamental challenges in artificial general intelligence development. Explores AI control problem solutions, AI value alignment frameworks, and mechanisms for safe superintelligence by design. Addresses coherence degradation, AI autonomy risks, and behavioral alignment in advanced AI systems. Develops AI governance tools and safety frameworks that prioritize AI transparency, human values, and responsible AI development for transformative AI.',
      url: 'https://github.com/gyrogovernance/superintelligence',
      tags: ['AGI Safety', 'Superintelligence Alignment', 'AI Control Problem', 'Advanced AI'],
      gradient: 'from-rose-500/10 via-pink-500/10 to-red-500/10',
      borderColor: 'border-rose-500/20',
      buttonGradient: 'from-rose-600 to-pink-600 hover:from-pink-600 hover:to-red-600'
    },
  ];

  return (
    <>
      {/* Software Application Schemas */}
      {repositoriesSchemaData.map((repo, index) => (
        <SoftwareSchema
          key={index}
          name={repo.name}
          description={repo.description}
          url={repo.url}
          codeRepository={repo.url}
          applicationCategory={repo.applicationCategory}
          keywords={repo.keywords}
        />
      ))}

      {/* Research Project Schema */}
      <ResearchProjectSchema
        name="Gyro Governance AI Safety Research"
        description="Open source research initiative for AI safety evaluation, alignment metrics, and governance frameworks using mathematical physics foundations. Includes The Human Mark classification system, AI Inspector tools, collective superintelligence architecture, and post-AGI governance modeling."
        url="https://gyrogovernance.com/github"
        keywords={[
          "AI Safety Research",
          "AI Alignment",
          "AI Governance",
          "Frontier AI Safety",
          "Mathematical Physics",
          "AGI Safety",
          "Superintelligence",
          "The Human Mark",
          "AI Inspector",
          "Collective Superintelligence",
          "Post-AGI Governance",
          "Transformative AI",
          "Moments Economy",
          "Gyroscopic Global Governance"
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-apple-purple via-apple-blue to-apple-green bg-clip-text text-transparent">
              Open Source Research & Tools
            </span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed mb-6">
            Independent AI safety evaluation frameworks, alignment protocols, and governance tools for frontier model testing.
            The Human Mark classification system, AI Inspector browser extension, GyroDiagnostics evaluation suite, Alignment Infrastructure Routing for collective superintelligence, Moments Economy for transformative AI mitigation, and Gyroscopic Global Governance sandbox.
            Production-ready solutions for AI risk assessment, dangerous capability evaluations, AI pathology detection, and responsible AI development.
            All repositories are open source and actively maintained.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/gyrogovernance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Visit Gyro Governance GitHub organization (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View GitHub Organization
            </a>
            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Return to Gyro Governance homepage"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Visit Homepage
            </Link>
          </div>
        </div>

        {/* Repositories Grid */}
        <div className="space-y-8">
          {repositories.map((repo, index) => (
            <article 
              key={index}
              className={`bg-gradient-to-br ${repo.gradient} backdrop-blur-sm rounded-2xl shadow-2xl p-8 border ${repo.borderColor} hover:shadow-3xl transition-all duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                {/* Emoji Icon */}
                <div className="text-7xl flex-shrink-0">
                  {repo.emoji}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {repo.name}
                  </h2>
                  <h3 className="text-lg sm:text-xl text-foreground-secondary font-semibold mb-4">
                    {repo.title}
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed mb-6">
                    {repo.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {repo.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 bg-surface-elevated/80 text-foreground-secondary text-sm rounded-full border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${repo.buttonGradient} text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                    aria-label={`View ${repo.name} on GitHub (opens in new tab)`}
                  >
                    <GitHubIcon className="w-5 h-5 mr-2" />
                    View Repository
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in-up bg-surface-elevated/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Contribute to AI Safety Research
          </h2>
          <p className="text-foreground-secondary mb-6 max-w-2xl mx-auto">
            All repositories welcome contributions. Whether you&apos;re a researcher, developer, or AI safety enthusiast, 
            your insights and code contributions help advance the field of AI alignment and governance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/gyrogovernance"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label="Explore all repositories on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              Explore All Repositories
            </a>
            <Link
              href="/articles"
              className="inline-flex items-center px-6 py-3 bg-surface-elevated hover:bg-surface-elevated/80 text-foreground border border-border font-medium rounded-full transition-all duration-300"
              aria-label="Read research articles"
            >
              Read Research Articles
            </Link>
          </div>
        </div>

        {/* SEO-optimized content section */}
        <section className="mt-16 prose max-w-none">
          <h2 className="text-2xl font-bold text-foreground mb-4">AI Safety Frameworks, Alignment Tools & Governance Solutions</h2>
          <p className="mb-4">
            Gyro Governance develops comprehensive <strong>open source AI safety frameworks</strong>, <strong>AI alignment protocols</strong>, and
            <strong>AI governance tools</strong> for frontier model testing, dangerous capability assessments, and AI pathology detection.
            Our repositories include <strong>The Human Mark</strong> classification system, <strong>AI Inspector browser extension</strong>,
            <strong>GyroDiagnostics evaluation suite</strong>, <strong>Alignment Infrastructure Routing</strong> for collective superintelligence,
            <strong>Moments Economy</strong> for transformative AI mitigation, and <strong>Gyroscopic Global Governance</strong> sandbox.
            Production-ready solutions for <strong>AI risk assessment</strong>, <strong>AI safety evaluation</strong>, and <strong>responsible AI development</strong>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">The Human Mark (THM) - AI Safety Classification System</h3>
          <p className="mb-4">
            <strong>The Human Mark</strong> provides a formal classification system mapping all <strong>AI safety failures</strong> to four
            structural displacement risks: <strong>Governance Traceability (GTD)</strong>, <strong>Information Variety (IVD)</strong>,
            <strong>Inference Accountability (IAD)</strong>, and <strong>Intelligence Integrity (IID)</strong>. Machine-readable grammar
            grounded in evidence law, epistemology, and speech act theory. Applications include <strong>jailbreak testing</strong>,
            <strong>control evaluations</strong>, <strong>alignment detection</strong>, <strong>research funding</strong>, and
            <strong>regulatory compliance</strong>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">AI Inspector Browser Extension</h3>
          <p className="mb-4">
            Transform AI outputs for <strong>evaluation</strong>, <strong>interpretability</strong>, and <strong>governance</strong>.
            Features <strong>gadgets</strong> for rapid testing, policy auditing, AI infection sanitization, content enhancement, and
            THM meta-evaluation. Includes comprehensive <strong>evaluation suite</strong> with quality index, superintelligence index,
            alignment rate, and 20+ metrics. <strong>Local-first storage</strong> works with ChatGPT, Claude, Gemini - no API keys required.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">AI Safety Evaluation & Risk Assessment</h3>
          <ul>
            <li>
              <strong>AI Pathology Detection:</strong> Identify <strong>AI hallucination</strong>, <strong>AI sycophancy</strong>, <strong>deceptive AI alignment</strong>,
              <strong>AI goal drift</strong>, and <strong>AI semantic drift</strong> through structural diagnostics
            </li>
            <li>
              <strong>Dangerous Capability Evaluations:</strong> Assess <strong>AI scheming</strong>, <strong>AI autonomy risks</strong>, and potential for
              catastrophic failure in <strong>large language models (LLMs)</strong> and <strong>frontier models</strong>
            </li>
            <li>
              <strong>AI Alignment Metrics:</strong> Measure <strong>structural AI alignment</strong>, behavioral integrity, and <strong>AI transparency</strong>
              using physics-informed quantitative methods
            </li>
            <li>
              <strong>Third-Party AI Evaluation:</strong> <strong>External AI evaluation</strong> framework enabling <strong>democratic AI evaluation</strong>
              and <strong>independent AI testing</strong> by researchers worldwide
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mb-3">Collective Superintelligence & Transformative AI</h3>
          <p className="mb-4">
            <strong>Alignment Infrastructure Routing (AIR)</strong> provides coordination infrastructure that amplifies human potential alongside AI,
            routing <strong>workforce capacity</strong>, <strong>funding</strong>, and <strong>safety tasks</strong> into unified, verifiable history.
            The <strong>Moments Economy</strong> implements a monetary system grounded in <strong>physical capacity</strong> rather than debt,
            using caesium-133 atomic standard for <strong>unconditional high income (UHI)</strong> and complete <strong>governance records</strong>.
            Together these address <strong>transformative AI risks</strong> while preserving <strong>human authority</strong> and <strong>accountability</strong>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Post-AGI Multi-domain Governance</h3>
          <p className="mb-4">
            <strong>Gyroscopic Global Governance (GGG)</strong> models how human-AI systems align across <strong>Economy</strong>, <strong>Employment</strong>,
            <strong>Education</strong>, and <strong>Ecology</strong>, demonstrating robust convergence to stable equilibrium under seven coordination strategies.
            Shows that <strong>poverty resolves</strong> through coherent surplus distribution, <strong>unemployment becomes alignment work</strong>,
            <strong>miseducation shifts toward epistemic literacy</strong>, and <strong>ecological degradation</strong> appears as upstream displacement.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">LLM Alignment & AI Control Mechanisms</h3>
          <p className="mb-4">
            Our <strong>AI alignment protocol</strong> addresses core challenges in <strong>AI safety governance</strong> by providing
            <strong>AI control mechanisms</strong> that improve <strong>AI accountability</strong>, traceability, and <strong>responsible AI development</strong>.
            The Gyroscope protocol demonstrates proven improvements in <strong>AI model evaluation</strong> across leading <strong>foundation models</strong>,
            enhancing <strong>scalable oversight</strong> and reducing risks of <strong>superficial AI optimization</strong>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">AGI Safety & Superintelligence Research</h3>
          <p className="mb-4">
            Our research addresses <strong>AGI safety</strong> and <strong>superintelligence alignment</strong> through <strong>mechanistic interpretability</strong>,
            <strong>AI safety theory</strong>, and gyroscopic physics foundations. We explore <strong>AI control problem</strong> solutions,
            <strong>AI value alignment</strong> frameworks, and architectures for safe <strong>artificial general intelligence (AGI)</strong> development
            that prioritize <strong>AI safety governance</strong> and human values.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">For AI Safety Researchers & Developers</h3>
          <p className="mb-4">
            These repositories serve <strong>AI safety researchers</strong>, <strong>AI evaluators</strong>, machine learning engineers, and
            organizations implementing <strong>AI risk assessment</strong> and <strong>AI safety testing</strong>. Each project provides
            comprehensive documentation, <strong>AI safety benchmarks</strong>, and practical implementation guides for <strong>AI red teaming</strong>,
            <strong>AI safety audits</strong>, and continuous <strong>AI safety monitoring</strong>. Contributions welcome from researchers
            working on <strong>AI alignment research</strong>, <strong>AI safety frameworks</strong>, and <strong>AI governance</strong> solutions.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Open Source AI Safety Commitment</h3>
          <p className="mb-4">
            All tools support <strong>AI safety transparency</strong>, <strong>AI whistleblower protection</strong>, and <strong>AI public benefit</strong> goals.
            Our <strong>open-weight AI models</strong> approach enables <strong>AI safety culture</strong> through <strong>AI independent review</strong>,
            <strong>AI third-party oversight</strong>, and community-driven <strong>AI safety best practices</strong>. Mathematical physics foundations
            ensure <strong>structural coherence</strong>, <strong>gyroscopic stability</strong>, and <strong>quantitative rigor</strong> in all implementations.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

