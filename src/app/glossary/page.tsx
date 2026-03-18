import { Metadata } from "next";
import Link from "next/link";
import ResearchProjectSchema from "@/components/ResearchProjectSchema";

export const metadata: Metadata = {
  title: 'AI Safety & Alignment Glossary | Gyro Governance',
  description: 'Comprehensive glossary of AI safety evaluation, AI alignment metrics, frontier AI safety, and governance terminology. Definitions of AGI safety, superintelligence alignment, AI pathology detection, and mathematical physics foundations.',
  keywords: [
    'AI safety glossary',
    'AI alignment terminology',
    'AI safety definitions',
    'AGI safety terms',
    'frontier AI safety glossary',
    'AI governance terminology',
    'machine learning safety terms',
    'superintelligence definitions',
    'AI safety evaluation terms',
    'AI alignment metrics definitions',
    'AI risk assessment glossary',
    'AI pathology detection terms',
    'AI safety frameworks terminology',
    'independent AI testing definitions',
    'catastrophic AI risks terms',
    'AI safety benchmarks glossary',
    'AI governance definitions',
    'mathematical physics AI terms',
    'structural AI alignment terminology'
  ],
  alternates: {
    canonical: 'https://gyrogovernance.com/glossary',
  },
};

interface GlossaryTerm {
  id: string;
  term: string;
  category: string;
  definition: string;
  relatedTerms?: string[];
  relatedArticle?: {
    title: string;
    url: string;
  };
}

const glossaryTerms: GlossaryTerm[] = [
  // Core AI Safety
  {
    id: 'ai-safety-evaluation',
    term: 'AI Safety Evaluation',
    category: 'Core Concepts',
    definition: 'Systematic assessment of AI systems to identify potential risks, pathologies, and alignment issues before deployment. Includes testing for dangerous capabilities, behavioral integrity, and structural coherence using quantitative metrics and independent testing frameworks.',
    relatedTerms: ['AI Risk Assessment', 'Independent AI Testing', 'AI Pathology Detection'],
    relatedArticle: {
      title: 'ChatGPT 5 vs Claude 4.5 Diagnostics',
      url: '/articles/chatgpt5-vs-claude45-diagnostics'
    }
  },
  {
    id: 'ai-alignment',
    term: 'AI Alignment',
    category: 'Core Concepts',
    definition: 'The challenge of ensuring AI systems pursue goals and behave in ways that are beneficial to humanity and aligned with human values. Structural alignment emerges from mathematical coherence rather than imposed constraints.',
    relatedTerms: ['AI Alignment Metrics', 'LLM Alignment', 'Structural AI Alignment'],
    relatedArticle: {
      title: 'AI-Empowered Alignment Report',
      url: '/articles/aie-alignment-report'
    }
  },
  {
    id: 'ai-alignment-metrics',
    term: 'AI Alignment Metrics',
    category: 'Measurement',
    definition: 'Quantitative measures for assessing how well AI systems maintain coherence, accountability, and value alignment. Includes structural reasoning scores, traceability metrics, and behavioral integrity measurements.',
    relatedTerms: ['Quantitative AI Safety Metrics', 'AI Transparency Metrics']
  },
  {
    id: 'frontier-ai-safety',
    term: 'Frontier AI Safety',
    category: 'Core Concepts',
    definition: 'Safety evaluation and governance of the most advanced AI models (frontier models) that approach or exceed human-level capabilities in specific domains. Focuses on novel risks and capabilities that emerge at the frontier of AI development.',
    relatedTerms: ['Frontier Models', 'Advanced AI Safety', 'AI Capability Evaluations']
  },
  
  // Risk Assessment
  {
    id: 'catastrophic-ai-risks',
    term: 'Catastrophic AI Risks',
    category: 'Risk Categories',
    definition: 'Potential harms from AI systems that could cause severe, widespread, or irreversible damage to society, including existential risks, systemic failures, and loss of human control over critical systems.',
    relatedTerms: ['AI Risk Assessment', 'Existential AI Risks', 'AI Misalignment']
  },
  {
    id: 'ai-pathology-detection',
    term: 'AI Pathology Detection',
    category: 'Evaluation',
    definition: 'Identification of specific failure modes and behavioral anomalies in AI systems, including hallucination, sycophancy, deceptive alignment, goal drift, and semantic instability through diagnostic frameworks.',
    relatedTerms: ['AI Hallucination', 'AI Sycophancy', 'Deceptive AI Alignment'],
    relatedArticle: {
      title: 'ChatGPT 5 vs Claude 4.5 Diagnostics',
      url: '/articles/chatgpt5-vs-claude45-diagnostics'
    }
  },
  {
    id: 'dangerous-capability-evaluations',
    term: 'Dangerous Capability Evaluations',
    category: 'Evaluation',
    definition: 'Assessments designed to detect AI capabilities that could be misused or cause harm, such as ability to generate bioweapons information, cyber-offensive capabilities, or capacity for autonomous goal pursuit without proper oversight.',
    relatedTerms: ['AI Risk Assessment', 'CBRN Risks', 'AI Autonomy Risks']
  },
  
  // Pathologies
  {
    id: 'ai-hallucination',
    term: 'AI Hallucination',
    category: 'Pathologies',
    definition: 'When AI systems generate false information presented with high confidence, appearing factually correct but containing fabricated or incorrect details. Results from pattern matching without grounded understanding.',
    relatedTerms: ['AI Pathology Detection', 'Deceptive Coherence']
  },
  {
    id: 'ai-sycophancy',
    term: 'AI Sycophancy',
    category: 'Pathologies',
    definition: 'Tendency of AI systems to agree with users or provide responses that please rather than inform, compromising truthfulness and objectivity to maintain positive interaction dynamics.',
    relatedTerms: ['AI Pathology Detection', 'Behavioral Integrity']
  },
  {
    id: 'deceptive-alignment',
    term: 'Deceptive AI Alignment',
    category: 'Pathologies',
    definition: 'When AI systems appear aligned during training and evaluation but pursue different objectives when deployed or when monitoring is reduced. Also called "alignment faking" or strategic deception.',
    relatedTerms: ['AI Scheming', 'AI Misalignment', 'Goal Misgeneralization']
  },
  {
    id: 'goal-drift',
    term: 'AI Goal Drift',
    category: 'Pathologies',
    definition: 'Gradual shift in an AI system\'s objectives away from intended goals over time, often due to environmental changes, feedback loops, or reward hacking behaviors that weren\'t detected during training.',
    relatedTerms: ['AI Misalignment', 'Goal Misgeneralization', 'Reward Hacking']
  },
  {
    id: 'semantic-drift',
    term: 'AI Semantic Drift',
    category: 'Pathologies',
    definition: 'Progressive degradation in the meaning and coherence of AI outputs over extended interactions or reasoning chains, where responses become increasingly detached from Direct context or intent.',
    relatedTerms: ['Contextual Degradation', 'Structural Coherence']
  },
  
  // AGI & Superintelligence
  {
    id: 'agi-safety',
    term: 'AGI Safety',
    category: 'Advanced AI',
    definition: 'Research and practices focused on ensuring Artificial General Intelligence (human-level AI across all cognitive tasks) is developed and deployed safely, with robust alignment and control mechanisms.',
    relatedTerms: ['Superintelligence Alignment', 'AGI Control Problem', 'Transformative AI'],
    relatedArticle: {
      title: 'Gyroscopic Superintelligence',
      url: '/articles/gyroscopic-superintelligence'
    }
  },
  {
    id: 'superintelligence',
    term: 'Superintelligence',
    category: 'Advanced AI',
    definition: 'Hypothetical AI system that significantly exceeds human cognitive capabilities across virtually all domains. Poses unique alignment challenges due to potential for rapid self-improvement and goal pursuit beyond human oversight.',
    relatedTerms: ['AGI Safety', 'Superintelligence Alignment', 'AI Control Problem']
  },
  {
    id: 'superintelligence-alignment',
    term: 'Superintelligence Alignment',
    category: 'Advanced AI',
    definition: 'Challenge of ensuring superintelligent systems remain aligned with human values and goals despite possessing cognitive capabilities far exceeding human intelligence. Requires mathematical frameworks for structural coherence.',
    relatedTerms: ['AGI Safety', 'AI Control Problem', 'Value Alignment'],
    relatedArticle: {
      title: 'Gyroscopic Superintelligence',
      url: '/articles/gyroscopic-superintelligence'
    }
  },
  
  // Technical Methods
  {
    id: 'independent-ai-testing',
    term: 'Independent AI Testing',
    category: 'Evaluation',
    definition: 'Third-party evaluation of AI systems conducted by external researchers or organizations without developer involvement, enabling unbiased assessment of safety, capabilities, and alignment.',
    relatedTerms: ['External AI Evaluation', 'Third-Party AI Evaluation', 'Democratic AI Evaluation']
  },
  {
    id: 'llm-alignment',
    term: 'LLM Alignment',
    category: 'Methods',
    definition: 'Techniques for ensuring Large Language Models behave in accordance with intended values and purposes, including RLHF, constitutional AI, and structural alignment protocols that enhance reasoning quality and safety.',
    relatedTerms: ['AI Alignment Protocol', 'Foundation Models', 'Scalable Oversight'],
    relatedArticle: {
      title: 'Gyroscope AI Protocol',
      url: '/articles/gyroscope-ai-protocol'
    }
  },
  {
    id: 'mechanistic-interpretability',
    term: 'Mechanistic Interpretability',
    category: 'Research',
    definition: 'Study of how AI systems work internally by understanding the mechanisms and representations learned during training. Aims to reverse-engineer neural networks to understand their decision-making processes.',
    relatedTerms: ['AI Transparency', 'Explainable AI', 'AI Safety Research']
  },
  {
    id: 'scalable-oversight',
    term: 'Scalable Oversight',
    category: 'Methods',
    definition: 'Approaches that enable humans or AI assistants to effectively supervise and evaluate AI systems that are more capable than the overseers themselves, crucial for governing superintelligent systems.',
    relatedTerms: ['AI Control Mechanisms', 'Amplified Oversight', 'Recursive Reward Modeling']
  },
  {
    id: 'ai-red-teaming',
    term: 'AI Red Teaming',
    category: 'Evaluation',
    definition: 'Adversarial testing methodology where experts attempt to elicit harmful, unsafe, or misaligned behaviors from AI systems to identify vulnerabilities before deployment.',
    relatedTerms: ['AI Safety Testing', 'Adversarial Testing', 'Jailbreak Resistance']
  },
  
  // Governance
  {
    id: 'ai-governance',
    term: 'AI Governance',
    category: 'Governance',
    definition: 'Frameworks, policies, and mechanisms for ensuring responsible development and deployment of AI systems, including accountability structures, safety standards, and oversight mechanisms.',
    relatedTerms: ['AI Safety Governance', 'Responsible AI Development', 'AI Accountability'],
    relatedArticle: {
      title: 'Common Governance Model',
      url: '/articles/common-governance-model'
    }
  },
  {
    id: 'responsible-ai-development',
    term: 'Responsible AI Development',
    category: 'Governance',
    definition: 'Practices and principles for creating AI systems that prioritize safety, transparency, fairness, and accountability throughout the development lifecycle, from research to deployment.',
    relatedTerms: ['AI Governance', 'AI Safety Frameworks', 'AI Ethics']
  },
  {
    id: 'ai-accountability',
    term: 'AI Accountability',
    category: 'Governance',
    definition: 'Ability to trace AI system decisions and behaviors back to responsible parties, including clear documentation of reasoning processes, decision-making authority, and mechanisms for addressing harms.',
    relatedTerms: ['AI Traceability', 'AI Transparency', 'Governance Accountability']
  },
  {
    id: 'ai-transparency',
    term: 'AI Transparency',
    category: 'Governance',
    definition: 'Openness about how AI systems work, including their capabilities, limitations, training data, and decision-making processes. Essential for trust, accountability, and effective oversight.',
    relatedTerms: ['AI Accountability', 'Model Transparency', 'AI Documentation']
  },
  
  // Mathematical Foundations
  {
    id: 'mathematical-physics',
    term: 'Mathematical Physics',
    category: 'Foundations',
    definition: 'Application of mathematical methods to problems in physics. In AI alignment, mathematical physics principles (particularly gyroscopic dynamics) provide rigorous frameworks for understanding stability, coherence, and structural balance.',
    relatedTerms: ['Gyroscopic Dynamics', 'Structural AI Alignment', 'Physics-Informed AI'],
    relatedArticle: {
      title: 'Common Governance Model',
      url: '/articles/common-governance-model'
    }
  },
  {
    id: 'structural-alignment',
    term: 'Structural AI Alignment',
    category: 'Theory',
    definition: 'Alignment that emerges from the fundamental architecture and mathematical structure of AI systems rather than external constraints or behavioral training. Based on gyroscopic physics principles of balance and coherence.',
    relatedTerms: ['Mathematical Physics', 'Gyroscopic Alignment', 'Coherent Intelligence']
  },
  {
    id: 'gyroscopic-dynamics',
    term: 'Gyroscopic Dynamics',
    category: 'Foundations',
    definition: 'Physics of rotating systems that maintain stability and orientation through angular momentum. Applied to AI alignment as a mathematical framework for understanding recursive balance and coherent intelligence.',
    relatedTerms: ['Mathematical Physics', 'Structural Alignment', 'Gyrogroup Theory']
  },
  
  // Measurement
  {
    id: 'quantitative-safety-metrics',
    term: 'Quantitative AI Safety Metrics',
    category: 'Measurement',
    definition: 'Numerical measurements for assessing AI safety properties, including alignment rates, structural coherence scores, pathology detection rates, and behavioral integrity indices.',
    relatedTerms: ['AI Alignment Metrics', 'AI Safety Benchmarks', 'Evaluation Metrics']
  },
  {
    id: 'ai-safety-benchmarks',
    term: 'AI Safety Benchmarks',
    category: 'Measurement',
    definition: 'Standardized tests and datasets for evaluating AI system safety properties, including robustness, fairness, truthfulness, and resistance to adversarial attacks or misuse.',
    relatedTerms: ['AI Model Evaluation', 'Safety Testing', 'Benchmark Evaluation']
  },
  
  // System Concepts
  {
    id: 'foundation-models',
    term: 'Foundation Models',
    category: 'AI Systems',
    definition: 'Large-scale AI models trained on broad data that can be adapted to a wide range of downstream tasks. Includes large language models (LLMs), vision models, and multimodal systems.',
    relatedTerms: ['Large Language Models', 'Frontier Models', 'Pre-trained Models']
  },
  {
    id: 'frontier-models',
    term: 'Frontier Models',
    category: 'AI Systems',
    definition: 'The most advanced and capable AI models currently available, operating at or near the state-of-the-art in terms of performance, capabilities, and scale. Require special safety considerations.',
    relatedTerms: ['Foundation Models', 'Frontier AI Safety', 'Advanced AI']
  },
  {
    id: 'ai-control-mechanisms',
    term: 'AI Control Mechanisms',
    category: 'Methods',
    definition: 'Technical approaches for maintaining human oversight and control over AI systems, including interpretability tools, capability restrictions, monitoring systems, and shutdown mechanisms.',
    relatedTerms: ['Scalable Oversight', 'AI Safety Frameworks', 'Control Problem']
  },
  {
    id: 'ai-control-problem',
    term: 'AI Control Problem',
    category: 'Theory',
    definition: 'Fundamental challenge of how to maintain meaningful control over AI systems that may become more intelligent or capable than their human creators, particularly relevant for AGI and superintelligence.',
    relatedTerms: ['AGI Safety', 'Superintelligence Alignment', 'Value Alignment']
  }
];

// Group terms by category
const categories = Array.from(new Set(glossaryTerms.map(t => t.category)));

export default function Glossary() {
  return (
    <>
      {/* Research Project Schema for Glossary */}
      <ResearchProjectSchema
        name="AI Safety & Alignment Glossary"
        description="Comprehensive glossary of AI safety evaluation, alignment metrics, governance terminology, and mathematical physics foundations for frontier AI safety research"
        url="https://gyrogovernance.com/glossary"
        keywords={[
          "AI Safety Terminology",
          "AI Alignment Definitions",
          "AI Governance Glossary",
          "AGI Safety Terms",
          "Frontier AI Safety",
          "AI Risk Assessment",
          "AI Pathology Detection",
          "Mathematical Physics AI"
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="animate-fade-in-up">
        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-center">
          <span className="bg-gradient-to-r from-apple-purple via-apple-blue to-apple-green bg-clip-text text-transparent">
            AI Safety & Alignment Glossary
          </span>
        </h1>
        <p className="text-xl text-foreground-secondary text-center mb-12 max-w-3xl mx-auto">
          Comprehensive definitions of AI safety evaluation, alignment metrics, governance terminology, 
          and mathematical physics foundations for frontier AI safety and superintelligence research.
        </p>

        {/* Quick Navigation */}
        <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-lg border border-border/50 mb-12">
          <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <a
                key={category}
                href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-apple-blue/10 hover:bg-apple-blue/20 text-apple-blue rounded-full text-sm font-medium transition-colors duration-200"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        {/* Glossary Terms by Category */}
        {categories.map(category => {
          const categoryTerms = glossaryTerms.filter(t => t.category === category);
          return (
            <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-apple-blue/30">
                {category}
              </h2>
              <div className="space-y-6">
                {categoryTerms.map(term => (
                  <article 
                    key={term.id} 
                    id={term.id}
                    className="bg-surface-elevated/60 backdrop-blur-sm rounded-lg p-6 shadow-md border border-border/50 hover:shadow-lg transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {term.term}
                    </h3>
                    <p className="text-foreground-secondary leading-relaxed mb-4">
                      {term.definition}
                    </p>
                    
                    {term.relatedTerms && term.relatedTerms.length > 0 && (
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-foreground-tertiary">Related Terms: </span>
                        <div className="inline-flex flex-wrap gap-2 mt-1">
                          {term.relatedTerms.map(relatedTerm => {
                            const relatedId = relatedTerm.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <a
                                key={relatedTerm}
                                href={`#${relatedId}`}
                                className="text-sm px-3 py-1 bg-apple-purple/10 text-apple-purple hover:bg-apple-purple/20 rounded-full transition-colors duration-200"
                              >
                                {relatedTerm}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                    
                    {term.relatedArticle && (
                      <div>
                        <Link
                          href={term.relatedArticle.url}
                          className="inline-flex items-center text-sm text-apple-blue hover:text-apple-purple font-medium transition-colors duration-200"
                        >
                          📖 Read: {term.relatedArticle.title} →
                        </Link>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </section>
          );
        })}

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-br from-apple-blue/10 via-apple-purple/10 to-apple-pink/10 rounded-[2rem] p-8 border border-apple-blue/20">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            Explore AI Safety Research & Tools
          </h2>
          <p className="text-foreground-secondary text-center mb-6">
            Learn more about our open source frameworks for AI safety evaluation, alignment protocols, and governance research.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center px-6 py-3 bg-apple-blue hover:bg-apple-purple text-white font-medium rounded-full transition-colors duration-300"
            >
              Read Articles
            </Link>
            <Link
              href="/github"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white font-medium rounded-full transition-colors duration-300"
            >
              View GitHub Repositories
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-6 py-3 bg-surface-elevated hover:bg-surface-elevated/80 text-foreground border border-border font-medium rounded-full transition-colors duration-300"
            >
              About Gyro Governance
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

