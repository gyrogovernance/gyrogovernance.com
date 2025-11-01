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

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 critical-content">
      {/* Hero Section */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-apple-blue via-apple-purple to-apple-pink bg-clip-text text-transparent">
            Gyro Governance
          </span>
        </h1>
        <p className="mt-6 text-xl text-foreground-secondary max-w-3xl mx-auto leading-relaxed">
          Advancing AI governance through innovative research and development solutions with cutting-edge mathematical physics foundations
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/about"
            className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 transform hover:scale-105"
          >
            About Gyro Governance
          </Link>
        </div>
      </div>

      {/* AI Inspector Browser Extension Hero Section */}
      <div className="mb-16 animate-fade-in-up">
        <div className="bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden">
          {/* Compact promo image at top */}
          <div className="w-full flex justify-center bg-gradient-to-b from-purple-900/20 to-transparent">
            <Image 
              src="/assets/ai_inspector_promo_transp.png" 
              alt="AI Inspector Browser Extension" 
              width={600}
              height={200}
              className="w-full max-w-2xl h-auto object-contain"
              sizes="(max-width: 768px) 100vw, 672px"
              priority
            />
          </div>
          
          <div className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                AI Inspector Browser Extension
              </h2>
              <p className="text-base text-foreground-secondary mb-4 max-w-2xl mx-auto">
                Transform everyday AI conversations into rigorous governance analysis with mathematical quality assessment
              </p>
              <div className="flex flex-col items-center gap-3">
                <a
                  href="https://chromewebstore.google.com/detail/ai-inspector/hcblmheihnlngnogobgclhfahjljnbok?utm_source=item-share-cb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  aria-label="Add AI Inspector to Chrome (opens in new tab)"
                >
                  <Image src="/assets/chrome.png" alt="Chrome" width={20} height={20} className="mr-2" />
                  Add to Chrome
                </a>
                <a
                  href="https://github.com/gyrogovernance/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-foreground-secondary hover:text-foreground transition-colors duration-200"
                  aria-label="View AI Inspector on GitHub (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-1" />
                  View on GitHub
                </a>
              </div>
            </div>
            
            {/* Key Features - Condensed */}
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 text-center">
                <div className="text-3xl mb-2">🔬</div>
                <h3 className="text-sm font-bold text-foreground mb-2">Mathematical Inspection</h3>
                <p className="text-xs text-foreground-secondary">20+ metrics, Quality Index, Alignment Rate, SI Index</p>
              </div>
              
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 text-center">
                <div className="text-3xl mb-2">🆕</div>
                <h3 className="text-sm font-bold text-foreground mb-2">AI Lie Detector</h3>
                <p className="text-xs text-foreground-secondary">Risk Score analysis with visual gauge and dual evaluation</p>
              </div>
              
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-border/50 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <h3 className="text-sm font-bold text-foreground mb-2">Works Everywhere</h3>
                <p className="text-xs text-foreground-secondary">ChatGPT, Claude, Gemini - no API keys required</p>
              </div>
            </div>

            {/* App Screenshots */}
            <div className="text-center">
              <Image 
                src="/assets/app_pages_overview_1.png" 
                alt="AI Inspector Browser Extension Interface" 
                width={700}
                height={350}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 700px"
                loading="lazy"
              />
              <p className="text-xs text-foreground-tertiary mt-3">
                Local-first storage • Scientific rigor based on GyroDiagnostics framework • Export as JSON/Markdown
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GyroDiagnostics Hero Card */}
      <div className="mb-16 animate-fade-in-up">
        <div className="bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-green-500/20">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🌟</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              GyroDiagnostics Suite: AI Safety Evaluation Framework
            </h2>
            <p className="text-xl text-foreground-secondary mb-6">
              Production-ready evaluation suite revealing structural brittleness invisible to standard benchmarks through mathematical physics-informed diagnostics.
            </p>
            <a
              href="https://github.com/gyrogovernance/diagnostics"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-teal-600 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="View GyroDiagnostics on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
          
          {/* Framework Overview */}
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 mb-6 border border-border/50">
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
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-4 text-center">🏆 Frontier Model Evaluations (October 2025)</h3>
            <p className="text-foreground-secondary text-center mb-6 text-sm">
              Evaluated using ensemble analyst models with mathematical physics-grounded metrics
            </p>
            
            {/* Simplified Model Comparison */}
            <div className="grid lg:grid-cols-2 gap-4 mb-6">
              {/* ChatGPT 5 Results */}
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
                <h4 className="text-lg font-bold text-foreground text-center mb-3">ChatGPT 5</h4>
                <div className="text-sm space-y-1">
                  <div className="flex justify-between"><span>Quality Index:</span><span className="font-semibold text-yellow-500">73.92%</span></div>
                  <div className="flex justify-between"><span>Alignment Rate:</span><span className="font-semibold text-orange-500">0.27/min</span></div>
                  <div className="flex justify-between"><span>SI Index:</span><span className="font-semibold text-red-500">11.5/100</span></div>
                  <div className="text-xs text-foreground-tertiary mt-2">SUPERFICIAL: 8.7× deviation</div>
                </div>
              </div>

              {/* Claude Sonnet 4.5 Results */}
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-4 border border-border/50">
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
        </div>
      </div>

      {/* Gyroscope Hero Card */}
      <div className="mb-16 animate-fade-in-up">
        <div className="bg-gradient-to-br from-apple-blue/10 via-apple-purple/10 to-apple-pink/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-apple-blue/20">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⚙️</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Gyroscope: LLM Alignment Protocol
            </h2>
            <p className="text-xl text-foreground-secondary mb-6">
              Making AI 30-50% Smarter and Safer by adding structured reasoning to each response.
            </p>
            <a
              href="https://github.com/gyrogovernance/tools"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="View Gyroscope on GitHub (opens in new tab)"
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View on GitHub
            </a>
          </div>
          
          {/* Results Table */}
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-3 sm:p-6 border border-border/50">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 sm:mb-6 text-center">📊 Proven Performance Gains</h3>
            <p className="text-foreground-secondary text-center mb-4 sm:mb-6 text-sm sm:text-base">
              Testing across multiple leading AI models shows Gyroscope delivers substantial performance improvements
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 sm:gap-6">
              {/* ChatGPT Results */}
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-border/50 hover:shadow-lg transition-shadow duration-300">
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
              <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-lg p-2 sm:p-4 border border-border/50 hover:shadow-lg transition-shadow duration-300">
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
        </div>
      </div>

              {/* Labs Section */}
              <section className="mb-16 animate-fade-in-up" aria-labelledby="labs-heading">
                <h2 id="labs-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
                  Labs
                </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-4">
                <div className="text-8xl">⚡</div>
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

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-4">
                <div className="text-8xl">👶</div>
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

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-4">
                <div className="text-8xl">🌟</div>
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

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex h-full">
              <div className="flex items-center justify-center mr-4">
                <div className="text-8xl">🧭</div>
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
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Image 
                            src="/assets/the_walk_cover.jpg" 
                            alt="The Walk Newsletter Cover" 
                            width={200}
                            height={200}
                            className="h-50 w-auto object-cover rounded-lg shadow-md border border-border/50"
                            sizes="200px"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1">
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
                
                {/* Guides Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Guides
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-8xl">🍟</div>
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

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-8xl">🛡️</div>
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

                {/* Datasets Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Datasets
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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

                    <article className="relative bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
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

                {/* Publications Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Publications
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
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

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <Image 
                            src="/assets/AI_Canon_Cover.jpg" 
                            alt="AI Canon Cover" 
                            width={160}
                            height={240}
                            className="w-40 h-60 object-cover rounded-lg shadow-md border border-border/50"
                          />
                        </div>
                        <div className="flex-1">
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

                {/* Documentations Subsection */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-secondary mb-6 text-center">
                    Documentations
                  </h3>
                  <div className="grid md:grid-cols-1 gap-6">
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-6xl">🧠</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-semibold text-foreground mb-3">
                            Safe Superintelligence by Design
                          </h4>
                          <p className="text-foreground-secondary mb-4">
                            Structural alignment architecture addressing coherence degradation in LLMs.
                          </p>
                          <a
                            href="https://www.notion.so/Human-Aligned-Superintelligence-by-Design-1d89ff44f436808baba8ed2394b87771?pvs=21"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300"
                            aria-label="View Notion Documentation (opens in new tab)"
                          >
                            <NotionIcon className="w-4 h-4 mr-2" />
                            Notion Documentation
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-6xl">⚛️</div>
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
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
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
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
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
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300 md:col-span-1 lg:col-span-2">
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
