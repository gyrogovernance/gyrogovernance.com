import { Metadata } from "next";
import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import SoftwareSchema from "@/components/SoftwareSchema";
import ResearchProjectSchema from "@/components/ResearchProjectSchema";

export const metadata: Metadata = {
  title: 'GitHub Repositories - AI Safety, Alignment & Governance Tools | Gyro Governance',
  description: 'Open source AI safety frameworks, alignment protocols, and governance tools. The Human Mark AI safety classification, GyroGem AI safety agent, AI Inspector browser extension, aQPU Kernel & SDK for quantum advantage on silicon, QuBEC quantum byte medium, GyroLabe auditable inference engine, GyroGraph multicellular AI runtime, Computational Climate Control, GyroDiagnostics evaluation suite, Alignment Infrastructure Routing, Moments Economy, and Gyroscopic Global Governance sandbox. Production-ready solutions for frontier AI safety and responsible AI development.',
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
    'GyroGem',
    'aQPU Kernel',
    'aQPU SDK',
    'QuBEC',
    'Quantum Bose-Einstein Condensate',
    'GyroLabe',
    'GyroGraph',
    'Computational Climate Control',
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
    'mechanistic interpretability',
    'neural activation coordination',
    // Risk Categories
    'AI misalignment',
    'deceptive AI alignment',
    'AI scheming',
    'AI hallucination detection',
    'AI sycophancy',
    'jailbreak testing',
    'control evaluations',
    'alignment detection',
    'activation drift',
    // Technical Terms
    'LLM alignment',
    'large language models safety',
    'foundation models',
    'frontier models',
    'AI agents safety',
    'mathematical physics AI',
    'gyroscopic dynamics',
    'quantum advantage',
    'holographic compression',
    'quantum computing on silicon',
    // Research Areas
    'mechanistic interpretability',
    'AI alignment theory',
    'scalable oversight',
    'AI control mechanisms',
    'superintelligence alignment',
    'AGI safety',
    'AI control problem',
    'AI value alignment',
    'neural pathway steering',
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
    'mechanistic calibration',
    'technological literacy',
    // Pathologies
    'AI goal drift',
    'AI semantic drift',
    'AI contextual degradation',
    'superficial AI optimization',
    'displacement risks',
    'governance traceability',
    'activation collapse',
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
    description: 'Explore Gyro Governance open source repositories: The Human Mark AI Safety Framework, GyroGem AI Safety Agent, AI Inspector Browser Extension, aQPU Kernel & SDK, QuBEC quantum byte medium, GyroLabe Auditable Inference, GyroGraph multicellular runtime specs, Computational Climate Control, GyroDiagnostics Evaluation Suite, Alignment Infrastructure Routing, Moments Economy, and Gyroscopic Global Governance Sandbox.',
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
      name: "GyroGem",
      description: "AI Safety Agent - Tailored AI safety assistant explaining AI and mitigating risks of technological illiteracy, built on The Human Mark framework to guide safer choices and support practical technological literacy",
      url: "https://aistudio.instagram.com/ai/969993888957313/?utm_source=share",
      applicationCategory: "AI Safety Agent",
      keywords: ["AI Safety", "Technological Literacy", "AI Assistant", "Risk Mitigation"]
    },
    {
      name: "AI Inspector Browser Extension",
      description: "Browser extension for AI output evaluation, interpretability, and governance with gadgets for rapid testing, policy auditing, AI infection sanitization, and content enhancement",
      url: "https://github.com/gyrogovernance/apps",
      applicationCategory: "BrowserExtension",
      keywords: ["AI Evaluation", "Browser Extension", "AI Interpretability", "Policy Auditing", "Content Enhancement"]
    },
    {
      name: "aQPU Kernel & SDK",
      description: "Quantum Advantage on Silicon with deterministic execution on standard CPUs and GPUs using exact integer arithmetic. Includes 1-step resolution for selected quantum-classic problems, O(1) commutativity checks, exact uniform mixing in 2 steps, holographic compression (33% reduction), and a developer toolkit with native operator algebra plus bitplane tensor decomposition. QuBEC is the Bose-Einstein byte computational medium enabling quantum properties on standard hardware without qubits or cryogenics.",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["Quantum Advantage", "aQPU Kernel", "aQPU SDK", "QuBEC", "Holographic Compression", "Tensor Engine"]
    },
    {
      name: "GyroLabe",
      description: "Auditable AI Inference Engine - Hyper-optimized execution layer providing mechanistic transparency by building a deterministic, zero-trust audit trail directly into model inference. Translates token generation into exact algebraic operations and produces a mathematically exact ledger for independent replay and verification. Native backends with llama.cpp ggml integration achieving 1.26B operations per second on commodity hardware.",
      url: "https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroLabe_Specs.md",
      applicationCategory: "DeveloperApplication",
      keywords: ["Auditable Inference", "Verifiable Ledger", "Structural Decomposition", "Alignment Signals", "Compliance"]
    },
    {
      name: "GyroGraph",
      description: "Quantum multicellular AI runtime - An algebraic quantum cellular automaton coordinating distributed computation into stable, deterministic behavior with strong auditability. Specialization arises from trajectory, resonance, and occupation with four bridge domains (Applications, Databases, Networks, Transformers) mapping runtime events into 4-byte words.",
      url: "https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroGraph_Specs.md",
      applicationCategory: "DeveloperApplication",
      keywords: ["Quantum Multicellular AI", "Cellular Runtime", "Deterministic Replay", "AI Stability", "Auditable Inference"]
    },
    {
      name: "Computational Climate Control",
      description: "Runtime control layer for AI execution stability and hidden inefficiency reduction. Applies adaptive controls that preserve deterministic behavior and traceability in production environments. Enables efficient resource utilization while maintaining verifiable execution traces.",
      url: "https://github.com/gyrogovernance/superintelligence/blob/main/docs/theory/QuBEC_Climate_Control_Brief.md",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Runtime Stability", "Execution Stability", "Adaptive Control", "Efficiency", "Traceability"]
    },
    {
      name: "GyroDiagnostics",
      description: "AI Safety Evaluation Framework - Production-ready evaluation suite for frontier model testing, dangerous capability assessments, and AI pathology detection using mathematical physics-informed diagnostics",
      url: "https://github.com/gyrogovernance/diagnostics",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Safety Evaluation", "Frontier AI Safety", "AI Diagnostics", "AI Risk Assessment", "Pathology Detection"]
    },
    {
      name: "Alignment Infrastructure Routing (AIR)",
      description: "Collective Superintelligence Architecture - Coordination infrastructure that amplifies human potential alongside AI through workforce capacity routing, funding allocation, and safety task distribution. Connects labs for scaling, funders for portfolio visibility, and everyone for paid verifiable contribution units across Economy, Employment, Education, and Ecology domains.",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["Collective Superintelligence", "AI Coordination", "Workforce Capacity", "Safety Tasks", "Human-AI Integration"]
    },
    {
      name: "Moments Economy",
      description: "Monetary system grounded in physical capacity for mitigating transformative AI risks. Uses caesium-133 atomic standard for finite capacity (7.94 × 10²⁶ Moment-Units). Provides unconditional high income baseline, tiered distributions up to 60× UHI, AI Generated Tokens as native commodity, and complete replayable governance records. Total capacity: ~70 billion years for global UHI.",
      url: "https://github.com/gyrogovernance/superintelligence/blob/main/docs/AIR_Moments_Economy_Specs.md",
      applicationCategory: "DeveloperApplication",
      keywords: ["Transformative AI", "Monetary System", "Physical Capacity", "Governance Records", "Unconditional Income"]
    },
    {
      name: "Gyroscopic Global Governance (GGG)",
      description: "Post-AGI Multi-domain Governance Sandbox - Models human-AI systems alignment across Economy, Employment, Education, and Ecology showing robust convergence to stable equilibrium under seven coordination strategies. Demonstrates poverty resolution, employment as alignment work, educational shifts to epistemic literacy, and ecological degradation as upstream displacement.",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["Post-AGI Governance", "Multi-domain Governance", "Human-AI Alignment", "Economic Modeling", "Governance Simulation"]
    },
    {
      name: "Gyroscope Protocol",
      description: "LLM Alignment Protocol - Making AI 30-50% smarter and safer through structured reasoning and scalable oversight mechanisms. Proven improvements: ChatGPT +32.9% quality (+50.9% structural reasoning), Claude +37.7% quality (+67.1% structural reasoning). Works with any foundation model without retraining.",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["LLM Alignment", "AI Safety Protocol", "AI Governance", "Scalable Oversight", "AI Accountability"]
    },
    {
      name: "Gyroscopic Alignment Research Lab",
      description: "Mathematical Physics Foundations - Research into gyroscopic dynamics and structural AI alignment from first principles. Explores mechanistic interpretability, AI safety theory, and physics-informed approaches to stability, coherence, and temporal dynamics in complex intelligent systems.",
      url: "https://github.com/gyrogovernance/science",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Alignment Theory", "Mathematical Physics", "Mechanistic Interpretability", "Safety Science"]
    },
    {
      name: "Gyroscopic Alignment Models Lab",
      description: "AGI Safety Architecture - Superintelligence alignment architectures and safe AI system design. Explores AI control problem solutions, AI value alignment frameworks, and mechanisms for safe superintelligence and AGI development.",
      url: "https://github.com/gyrogovernance/superintelligence",
      applicationCategory: "DeveloperApplication",
      keywords: ["AGI Safety", "Superintelligence Alignment", "AI Architecture", "AI Control Problem"]
    },
    {
      name: "Gyroscopic Alignment Evaluation Lab",
      description: "AI Safety Diagnostics - Independent AI testing framework for frontier model safety evaluation. Detects AI pathologies through mathematical physics-informed diagnostics for third-party AI evaluation and AI risk assessment.",
      url: "https://github.com/gyrogovernance/diagnostics",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Safety Evaluation", "Pathology Detection", "Risk Assessment", "Frontier Models"]
    },
    {
      name: "Gyroscopic Alignment Behaviour Lab",
      description: "AI Quality Governance - AI output evaluation, interpretability, and governance tools. Implements The Human Mark framework, Gyroscope Protocol, and AI Inspector browser extension for comprehensive AI quality assessment and governance.",
      url: "https://github.com/gyrogovernance/tools",
      applicationCategory: "DeveloperApplication",
      keywords: ["AI Quality Governance", "AI Evaluation", "AI Interpretability", "Governance Tools"]
    }
  ];

  const repositories = [
    {
      emoji: '✋',
      name: 'The Human Mark (THM)',
      title: 'AI Safety Framework',
      description: 'Formal classification system mapping all AI safety failures to four structural displacement risks: Governance Traceability (GTD), Information Variety (IVD), Inference Accountability (IAD), and Intelligence Integrity (IID). Machine-readable grammar grounded in evidence law, epistemology, and speech act theory. Applications include jailbreak testing, control evaluations, alignment detection, research funding, and regulatory compliance. Validated on 90+ million sparse autoencoder features across sixteen language models.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['AI Safety Framework', 'Jailbreak Testing', 'Control Evaluations', 'Alignment Detection', 'Regulatory Compliance'],
      gradient: 'from-orange-500/10 via-red-500/10 to-amber-500/10',
      borderColor: 'border-orange-500/20',
      buttonGradient: 'from-orange-600 to-red-600 hover:from-red-600 hover:to-amber-600'
    },
    {
      emoji: '🌟',
      name: 'GyroGem',
      title: 'AI Safety Agent',
      description: 'Tailored AI safety assistant explaining AI and mitigating risks of technological illiteracy. Built on The Human Mark framework to map common AI failure patterns and guide safer choices. Supports technological literacy: the practical ability to use technology well, question outputs critically, and understand where tools help, where they fail, and societal impacts.',
      url: 'https://aistudio.instagram.com/ai/969993888957313/?utm_source=share',
      tags: ['AI Safety', 'Technological Literacy', 'AI Assistant', 'Risk Mitigation'],
      gradient: 'from-purple-500/10 via-pink-500/10 to-rose-500/10',
      borderColor: 'border-purple-500/20',
      buttonGradient: 'from-purple-600 to-pink-600 hover:from-pink-600 hover:to-rose-600'
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
      emoji: '⚛️',
      name: 'aQPU Kernel & SDK',
      title: 'Quantum Advantage on Silicon',
      description: 'Compact, finite-state kernel for AGI with verified quantum speedups, 33% holographic compression, and intrinsic error detection. QuBEC is the Bose-Einstein byte computational medium enabling quantum properties on standard CPUs/GPUs with exact integer arithmetic. 1.26B ops/s, 499 tests passing, 4,096 states, zero qubits. 1-step advantage for Deutsch-Jozsa, Bernstein-Vazirani, Hidden Subgroup. Self-dual [12,6,2] error-detecting code. Bell pairs reaching Tsirelson bound confirmed on standard silicon.',
      url: 'https://github.com/gyrogovernance/superintelligence',
      tags: ['Quantum Advantage', 'aQPU Kernel', 'aQPU SDK', 'QuBEC', 'Holographic Compression', 'Tensor Engine'],
      gradient: 'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
      borderColor: 'border-blue-500/20',
      buttonGradient: 'from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600'
    },
    {
      emoji: '🤖',
      name: 'GyroLabe',
      title: 'Auditable AI Inference Engine',
      description: 'Hyper-optimized execution layer providing mechanistic transparency by building a deterministic, zero-trust audit trail directly into model inference. Translates token generation into exact algebraic operations and produces a mathematically exact ledger for independent replay and verification. Native backends with llama.cpp ggml integration achieving 1.26B operations per second. 100% native matmul routing, 284× faster encode than softmax, zero transcendental functions required.',
      url: 'https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroLabe_Specs.md',
      tags: ['Auditable Inference', 'Verifiable Ledger', 'Structural Decomposition', 'AI Governance', 'Compliance'],
      gradient: 'from-cyan-500/10 via-sky-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/20',
      buttonGradient: 'from-cyan-600 to-sky-600 hover:from-sky-600 hover:to-blue-600'
    },
    {
      emoji: '🤖',
      name: 'GyroGraph',
      title: 'Quantum Multicellular AI Runtime',
      description: 'Algebraic quantum cellular automaton coordinating distributed computation into stable, deterministic behavior with strong auditability. Specialization arises from trajectory, resonance, and occupation (not autonomous agents). Four bridge domains (Applications, Databases, Networks, Transformers) map runtime events into 4-byte words consumed by the cellular automaton.',
      url: 'https://github.com/gyrogovernance/superintelligence/blob/main/docs/GyroGraph_Specs.md',
      tags: ['Quantum Multicellular AI', 'Cellular Runtime', 'Deterministic Replay', 'AI Stability', 'Auditable Inference'],
      gradient: 'from-violet-500/10 via-blue-500/10 to-cyan-500/10',
      borderColor: 'border-violet-500/20',
      buttonGradient: 'from-violet-600 to-blue-600 hover:from-blue-600 hover:to-cyan-600'
    },
    {
      emoji: '☂️',
      name: 'Computational Climate Control',
      title: 'AI Execution Stability Layer',
      description: 'Runtime control layer for AI execution stability and hidden inefficiency reduction. Applies adaptive controls that preserve deterministic behavior and traceability in production environments. Enables efficient resource utilization while maintaining verifiable execution traces.',
      url: 'https://github.com/gyrogovernance/superintelligence/blob/main/docs/theory/QuBEC_Climate_Control_Brief.md',
      tags: ['Computational Climate', 'Execution Stability', 'Efficiency', 'Adaptive Control', 'Traceability'],
      gradient: 'from-sky-500/10 via-cyan-500/10 to-blue-500/10',
      borderColor: 'border-sky-500/20',
      buttonGradient: 'from-sky-600 to-cyan-600 hover:from-cyan-600 hover:to-blue-600'
    },
    {
      emoji: '🌟',
      name: 'GyroDiagnostics',
      title: 'AI Safety Evaluation Framework',
      description: 'Independent AI testing framework for frontier model safety evaluation and dangerous capability assessments. Detects AI pathologies including deceptive alignment, hallucination, sycophancy, goal drift, and semantic instability through mathematical physics-informed diagnostics. Enables third-party AI evaluation and AI risk assessment with 5 targeted challenges and 20-metric quantitative analysis. First framework to operationalize superintelligence measurement from axiomatic principles. Recent evaluations: ChatGPT 5 (73.92% Quality, SUPERFICIAL), Claude Sonnet 4.5 (82.00% Quality, VALID).',
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
      description: 'Coordination infrastructure that amplifies human potential alongside AI. Routes workforce capacity, funding, and safety tasks into a unified, verifiable history. Connects three critical groups: labs for scaling without chaos, funders for portfolio risk visibility, and everyone for paid, verifiable contribution units. Treats AI as part of collective network ensuring human agency scales with systems. Coordinates activity across Economy, Employment, Education, and Ecology.',
      url: 'https://github.com/gyrogovernance/superintelligence',
      tags: ['Collective Superintelligence', 'Workforce Routing', 'Safety Tasks', 'Human-AI Integration', 'Coordination Infrastructure'],
      gradient: 'from-yellow-500/10 via-amber-500/10 to-orange-500/10',
      borderColor: 'border-yellow-500/20',
      buttonGradient: 'from-yellow-600 to-amber-600 hover:from-amber-600 hover:to-orange-600'
    },
    {
      emoji: '💰',
      name: 'Moments Economy',
      title: 'Attentiveness-based Monetary System for TAI Mitigation',
      description: 'Grounded in physical capacity rather than debt. Uses caesium-133 atomic standard for finite, verifiable capacity (7.94 × 10²⁶ Moment-Units). Provides unconditional high income baseline (240 MU/day), tiered distributions up to 60× for higher responsibility, AI Generated Tokens as native commodity (verified inference at human-AI intersection), and complete replayable governance records. Total capacity: ~70 billion years for global UHI. Adversarial exhaustion operationally impossible (requires 11.2 billion× global annual UHI to consume 1%).',
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
      description: 'AI alignment protocol implementing scalable oversight and AI control mechanisms for responsible AI development. Adds structured reasoning to each response without model retraining. Delivers proven AI safety improvements: ChatGPT +32.9% quality (+50.9% structural reasoning, +62.7% accountability, +61.0% traceability), Claude Sonnet +37.7% quality (+67.1% structural reasoning, +92.6% traceability). Enhances behavioral integrity and addresses AI misalignment through systematic AI governance and transparency metrics. Works with any foundation model including large language models and AI agents.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['LLM Alignment', 'AI Control', 'Scalable Oversight', 'Safety Protocol'],
      gradient: 'from-classic-blue/10 via-classic-purple/10 to-classic-pink/10',
      borderColor: 'border-classic-blue/20',
      buttonGradient: 'from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink'
    },
    {
      emoji: '⚡',
      name: 'Gyroscopic Alignment Research Lab',
      title: 'Mathematical Physics Foundations',
      description: 'AI alignment theory grounded in mathematical physics and gyroscopic dynamics for structural AI alignment research. Explores mechanistic interpretability, AI value alignment, and quantitative AI safety metrics from first principles. Provides theoretical foundations for understanding AI control problem, catastrophic AI risks, and alignment challenges in complex intelligent systems. Advances AI safety science through physics-informed approaches to stability, coherence, and temporal dynamics. Includes Common Governance Model (CGM) dataset with 1,024 Q&A entries for fine-tuning and evaluation.',
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
    {
      emoji: '🌟',
      name: 'Gyroscopic Alignment Evaluation Lab',
      title: 'AI Safety Diagnostics',
      description: 'Independent AI testing framework for frontier model safety evaluation. Detects AI pathologies through mathematical physics-informed diagnostics for third-party AI evaluation and AI risk assessment.',
      url: 'https://github.com/gyrogovernance/diagnostics',
      tags: ['AI Safety Evaluation', 'Pathology Detection', 'Risk Assessment', 'Frontier Models'],
      gradient: 'from-green-500/10 via-lime-500/10 to-emerald-500/10',
      borderColor: 'border-green-500/20',
      buttonGradient: 'from-green-600 to-lime-600 hover:from-lime-600 hover:to-emerald-600'
    },
    {
      emoji: '🧭',
      name: 'Gyroscopic Alignment Behaviour Lab',
      title: 'AI Quality Governance',
      description: 'AI output evaluation, interpretability, and governance tools. Implements The Human Mark framework, Gyroscope Protocol, and AI Inspector browser extension for comprehensive AI quality assessment and governance.',
      url: 'https://github.com/gyrogovernance/tools',
      tags: ['AI Quality Governance', 'AI Evaluation', 'AI Interpretability', 'Governance Tools'],
      gradient: 'from-amber-500/10 via-yellow-500/10 to-orange-500/10',
      borderColor: 'border-amber-500/20',
      buttonGradient: 'from-amber-600 to-yellow-600 hover:from-yellow-600 hover:to-orange-600'
    }
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
        description="Open source research initiative for AI safety evaluation, alignment metrics, and governance frameworks using mathematical physics foundations. Includes The Human Mark classification system, GyroGem AI safety agent, AI Inspector tools, aQPU Kernel & SDK for quantum advantage on silicon, GyroLabe auditable inference engine, GyroGraph multicellular runtime, QuBEC quantum byte medium, collective superintelligence architecture, and post-AGI governance modeling."
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
          "GyroGem",
          "AI Inspector",
          "aQPU Kernel",
          "GyroLabe",
          "GyroGraph",
          "QuBEC",
          "Collective Superintelligence",
          "Post-AGI Governance",
          "Transformative AI",
          "Moments Economy",
          "Gyroscopic Global Governance",
          "Quantum Advantage",
          "Technological Literacy"
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="animate-fade-in-up">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-classic-purple via-classic-blue to-classic-green bg-clip-text text-transparent">
              Open Source Research & Tools
            </span>
          </h1>
          <p className="text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed mb-6">
            Independent AI safety evaluation frameworks, alignment protocols, and governance tools for frontier model testing.
            The Human Mark classification system, GyroGem AI safety agent, AI Inspector browser extension, aQPU Kernel & SDK for quantum advantage on silicon, QuBEC quantum byte medium, GyroLabe auditable inference engine, GyroGraph multicellular runtime, GyroDiagnostics evaluation suite, Computational Climate Control for execution stability, Alignment Infrastructure Routing for collective superintelligence, Moments Economy for transformative AI mitigation, and Gyroscopic Global Governance sandbox.
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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
              className={`bg-gradient-to-br ${repo.gradient} backdrop-blur-sm rounded-[2rem] shadow-2xl p-8 border ${repo.borderColor} transition-all duration-300 animate-fade-in-up`}
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
        <div className="mt-16 text-center animate-fade-in-up bg-surface-elevated/80 backdrop-blur-sm rounded-[2rem] p-8 shadow-lg border border-border/50">
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
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-classic-blue to-classic-purple hover:from-classic-purple hover:to-classic-pink text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
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
            Gyro Governance develops comprehensive <strong>open source AI safety frameworks</strong>, <strong>AI alignment protocols</strong>,
            <strong>AI governance tools</strong>, and a <strong>quantum advantage compute kernel</strong> for frontier model testing, dangerous capability assessments, and AI pathology detection.
            Our repositories include <strong>The Human Mark</strong> classification system, <strong>GyroGem</strong> AI safety agent,
            <strong>AI Inspector browser extension</strong>,
            <strong>aQPU Kernel & SDK</strong> for quantum advantage on silicon, <strong>QuBEC</strong> quantum byte medium,
            <strong>GyroLabe auditable inference engine</strong>, <strong>GyroGraph</strong> multicellular runtime,
            <strong>GyroDiagnostics evaluation suite</strong>, <strong>Alignment Infrastructure Routing</strong> for collective superintelligence,
            <strong>Moments Economy</strong> for transformative AI mitigation, and <strong>Gyroscopic Global Governance</strong> sandbox.
            Production-ready solutions for <strong>AI risk assessment</strong>, <strong>AI safety evaluation</strong>, and <strong>responsible AI development</strong>.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">GyroGem - AI Safety Agent for Technological Literacy</h3>
          <p className="mb-4">
            <strong>GyroGem</strong> is a tailored AI safety assistant explaining AI and mitigating <strong>technological illiteracy risks</strong>.
            Built on The Human Mark framework to map common AI failure patterns and guide safer choices. Supports <strong>technological literacy</strong>:
            the practical ability to use technology well, question outputs critically, and understand where tools help, where they fail, and societal impacts.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">aQPU Kernel & SDK - Quantum Advantage on Silicon</h3>
          <p className="mb-4">
            A compact, finite-state kernel for AGI proving that <strong>quantum algorithmic speedups</strong> (1-step resolution for Deutsch-Jozsa,
            Bernstein-Vazirani, Hidden Subgroup), <strong>33% holographic compression</strong> (12-bit to 8-bit boundary coordinates), and
            <strong>self-dual error-detecting code</strong> ([12,6,2] with unconditional odd-weight detection) are geometric properties of discrete information.
            <strong>QuBEC</strong> (Quantum Bose-Einstein Condensate) is the computational medium: a quantum byte with six internal binary modes,
            four-phase spinorial gauge, and exact ensemble stochasticity from deterministic dynamics. Runs on standard CPUs and GPUs via exact integer
            arithmetic without qubits, cryogenics, or probabilistic hardware noise.
          </p>
          <p className="mb-4">
            <strong>Quantum information properties confirmed on standard silicon:</strong> six Bell pairs reaching the Tsirelson bound (2√2),
            quantum teleportation verified, contextuality proven, and universal quantum computation established.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">GyroLabe - Auditable Inference Engine</h3>
          <p className="mb-4">
            <strong>GyroLabe</strong> provides mechanistic transparency for neural networks by translating opaque token generation into exact algebraic operations.
            It builds a <strong>deterministic, zero-trust audit trail</strong> directly into the inference process. By injecting trainable structural signals,
            it aligns models from the inside out without altering their interface. It produces a <strong>mathematically exact ledger</strong> of the generation
            trajectory, providing the missing structural substrate required for rigorous <strong>AI governance</strong>, alignment guarantees, and
            <strong>policy enforcement</strong>. Native backends with llama.cpp ggml integration achieving 1.26B operations per second. 100% native matmul routing,
            284× faster encode, 1.15× faster decode than softmax. Zero transcendental functions required.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">GyroGraph - Quantum Multicellular AI Runtime</h3>
          <p className="mb-4">
            <strong>GyroGraph</strong> coordinates a multicellular AI runtime as an algebraic quantum cellular automaton. Specialization arises from trajectory,
            resonance, and occupation (not autonomous agents). Four bridge domains (Applications, Databases, Networks, Transformers) map runtime events into
            4-byte words for deterministic coordination. Preserves deterministic execution, stabilizes dynamic workloads, and supports reproducibility and
            auditability across runtime cells.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">Computational Climate Control</h3>
          <p className="mb-4">
            <strong>Computational Climate Control</strong> improves AI execution stability and hidden inefficiency reduction. Adaptive runtime controls preserve
            deterministic behavior and traceability in production environments while optimizing resource utilization.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-3">The Human Mark (THM) - AI Safety Classification System</h3>
          <p className="mb-4">
            <strong>The Human Mark</strong> provides a formal classification system mapping all <strong>AI safety failures</strong> to four
            structural displacement risks: <strong>Governance Traceability (GTD)</strong>, <strong>Information Variety (IVD)</strong>,
            <strong>Inference Accountability (IAD)</strong>, and <strong>Intelligence Integrity (IID)</strong>. Machine-readable grammar
            grounded in evidence law, epistemology, and speech act theory. Validated on 90+ million sparse autoencoder features across sixteen
            language models. Applications include <strong>jailbreak testing</strong>,
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
            using caesium-133 atomic standard for finite, verifiable capacity (7.94 × 10²⁶ Moment-Units), <strong>unconditional high income (UHI)</strong>
            at 240 MU/day baseline, AI Generated Tokens as native commodity, and complete <strong>governance records</strong>.
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
            The Gyroscope protocol demonstrates proven improvements in <strong>AI model evaluation</strong> across leading <strong>foundation models</strong>:
            ChatGPT +32.9% quality (+50.9% structural reasoning, +62.7% accountability), Claude Sonnet +37.7% quality (+67.1% structural reasoning, +92.6% traceability).
            Enhances <strong>scalable oversight</strong> and reduces risks of <strong>superficial AI optimization</strong>.
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