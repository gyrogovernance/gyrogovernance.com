import { Metadata } from "next";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import SoftwareSchema from "@/components/SoftwareSchema";
import ResearchProjectSchema from "@/components/ResearchProjectSchema";

export const metadata: Metadata = {
  title: 'GitHub Repositories - AI Safety Evaluation & Alignment Tools | Gyro Governance',
  description: 'Open source AI safety evaluation framework, LLM alignment protocol, and superintelligence research. Independent AI testing tools for detecting pathologies, measuring alignment metrics, and assessing catastrophic AI risks. Production-ready solutions for frontier AI safety.',
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
    // Technical Evaluation
    'AI safety benchmarks',
    'dangerous capability evaluations',
    'AI pathology detection',
    'AI model evaluation',
    'AI safety testing',
    'AI red teaming',
    'external AI evaluation',
    'third-party AI evaluation',
    // Risk Categories
    'AI misalignment',
    'deceptive AI alignment',
    'AI scheming',
    'AI hallucination detection',
    'AI sycophancy',
    // Technical Terms
    'LLM alignment',
    'large language models safety',
    'foundation models',
    'frontier models',
    'AI agents safety',
    // Research Areas
    'mechanistic interpretability',
    'AI alignment theory',
    'scalable oversight',
    'AI control mechanisms',
    'superintelligence alignment',
    'AGI safety',
    // Specific Solutions
    'AI diagnostics framework',
    'AI alignment protocol',
    'mathematical physics AI',
    'structural AI alignment',
    'quantitative AI safety metrics',
    // Pathologies
    'AI goal drift',
    'AI semantic drift',
    'AI contextual degradation',
    'superficial AI optimization',
    // Governance
    'responsible AI development',
    'AI accountability',
    'AI transparency metrics',
    'AI safety governance',
    // Open Source
    'open source AI safety',
    'reproducible AI safety testing',
    'democratic AI evaluation',
    'GitHub AI safety projects'
  ],
  openGraph: {
    title: 'GitHub Repositories - Open Source AI Research & Tools | Gyro Governance',
    description: 'Explore Gyro Governance open source repositories: GyroDiagnostics AI Safety Framework, Gyroscope LLM Alignment Protocol, Mathematical Physics Research, and Superintelligence Architecture.',
    type: 'website',
    url: 'https://gyrogovernance.com/github',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GitHub Repositories - Open Source AI Research & Tools',
    description: 'Production-ready AI safety and alignment tools from Gyro Governance',
  },
  alternates: {
    canonical: 'https://gyrogovernance.com/github',
  },
};

export default function GitHub() {
  // Schema data for repositories
  const repositoriesSchemaData = [
    {
      name: "GyroDiagnostics",
      description: "AI Safety Evaluation Framework - Production-ready evaluation suite for frontier model testing, dangerous capability assessments, and AI pathology detection",
      url: "https://github.com/gyrogovernance/diagnostics",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Safety Evaluation", "Frontier AI Safety", "AI Diagnostics", "AI Risk Assessment", "Pathology Detection"]
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
      name: "Gyroscopic Alignment Development Lab",
      description: "AGI Safety Architecture - Superintelligence alignment architectures and safe AI system design",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["AGI Safety", "Superintelligence Alignment", "AI Architecture", "AI Control Problem"]
    }
  ];

  const repositories = [
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
      emoji: '⚙️',
      name: 'Gyroscope',
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
      gradient: 'from-purple-500/10 via-indigo-500/10 to-blue-500/10',
      borderColor: 'border-purple-500/20',
      buttonGradient: 'from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600'
    },
    {
      emoji: '👶',
      name: 'Gyroscopic Alignment Development Lab',
      title: 'Artificial Superintelligence Architecture (ASI/AGI)',
      description: 'AGI safety research and superintelligence alignment architectures addressing fundamental challenges in artificial general intelligence development. Explores AI control problem solutions, AI value alignment frameworks, and mechanisms for safe superintelligence by design. Addresses coherence degradation, AI autonomy risks, and behavioral alignment in advanced AI systems. Develops AI governance tools and safety frameworks that prioritize AI transparency, human values, and responsible AI development for transformative AI.',
      url: 'https://github.com/gyrogovernance/superintelligence',
      tags: ['AGI Safety', 'Superintelligence Alignment', 'AI Control Problem', 'Advanced AI'],
      gradient: 'from-orange-500/10 via-red-500/10 to-pink-500/10',
      borderColor: 'border-orange-500/20',
      buttonGradient: 'from-orange-600 to-red-600 hover:from-red-600 hover:to-pink-600'
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
        description="Open source research initiative for AI safety evaluation, alignment metrics, and governance frameworks using mathematical physics foundations"
        url="https://gyrogovernance.com/github"
        keywords={[
          "AI Safety Research",
          "AI Alignment",
          "AI Governance",
          "Frontier AI Safety",
          "Mathematical Physics",
          "AGI Safety",
          "Superintelligence"
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
            Independent AI safety evaluation frameworks for frontier model testing, dangerous capability assessments, and AI pathology detection.
            Production-ready tools for measuring AI alignment metrics, assessing catastrophic AI risks, and advancing AGI safety research.
            Open source repositories for AI risk assessment, AI safety benchmarks, and quantitative AI alignment testing.
            All repositories are open source and actively maintained.
          </p>
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
        <section className="mt-16 prose prose-lg mx-auto text-foreground-secondary">
          <h2 className="text-2xl font-bold text-foreground mb-4">Independent AI Safety Evaluation & Frontier Model Testing</h2>
          <p className="mb-4">
            Gyro Governance develops <strong>open source AI safety evaluation frameworks</strong> and <strong>independent AI testing tools</strong> 
            for assessing <strong>catastrophic AI risks</strong>, <strong>AI misalignment</strong>, and <strong>dangerous capability evaluations</strong> in 
            frontier models. Our repositories provide <strong>quantitative AI safety metrics</strong> and <strong>AI alignment theory</strong> grounded in 
            mathematical physics principles, enabling <strong>reproducible AI safety testing</strong> without requiring special model access.
          </p>
          
          <h3 className="text-xl font-semibold text-foreground mb-3">AI Safety Evaluation & Risk Assessment</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
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
            <strong>AI third-party oversight</strong>, and community-driven <strong>AI safety best practices</strong>.
          </p>
        </section>
      </div>
    </div>
    </>
  );
}

