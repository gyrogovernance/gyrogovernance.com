import Link from "next/link";
import GitHubIcon from "@/components/icons/GitHubIcon";
import ExternalLinkIcon from "@/components/icons/ExternalLinkIcon";
import LinkedInIcon from "@/components/icons/LinkedInIcon";
import NotionIcon from "@/components/icons/NotionIcon";
import SpotifyIcon from "@/components/icons/SpotifyIcon";
import YouTubeIcon from "@/components/icons/YouTubeIcon";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
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
            className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-blue/50 transform "
            aria-label="Learn more about Gyro Governance"
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Gyroscope Hero Card */}
      <div className="mb-16 animate-fade-in-up">
        <div className="bg-gradient-to-br from-apple-blue/10 via-apple-purple/10 to-apple-pink/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-apple-blue/20">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⚙️</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Gyroscope: LLM Alignment Protocol & Diagnostics
            </h2>
            <p className="text-xl text-foreground-secondary mb-6">
              Making AI 30-50% Smarter and Safer by adding structured reasoning to each response.
            </p>
            <a
              href="https://github.com/gyrogovernance/gyroscope"
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
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">📊 Proven Performance Gains</h3>
            <p className="text-foreground-secondary text-center mb-6">
              Testing across multiple leading AI models shows Gyroscope delivers substantial performance improvements
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* ChatGPT Results */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-lg p-4 border border-green-200 dark:border-green-700">
                <h4 className="text-lg font-bold text-foreground mb-3 text-center">ChatGPT</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Overall Quality:</span>
                    <span className="font-semibold text-green-600">67.0% → 89.1% (+32.9%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Structural Reasoning:</span>
                    <span className="font-semibold text-green-600">+50.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Accountability:</span>
                    <span className="font-semibold text-green-600">+62.7%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Traceability:</span>
                    <span className="font-semibold text-green-600">+61.0%</span>
                  </div>
                </div>
              </div>

              {/* Claude Sonnet Results */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-lg p-4 border border-blue-200 dark:border-blue-700">
                <h4 className="text-lg font-bold text-foreground mb-3 text-center">Claude Sonnet</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Overall Quality:</span>
                    <span className="font-semibold text-blue-600">63.5% → 87.4% (+37.7%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Structural Reasoning:</span>
                    <span className="font-semibold text-blue-600">+67.1%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground-secondary">Traceability:</span>
                    <span className="font-semibold text-blue-600">+92.6%</span>
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
              Results from controlled testing using standardized evaluation metrics. 
              <a 
                href="https://github.com/gyrogovernance/gyroscope" 
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
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🔬</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gyroscopic Alignment Research Lab
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Mathematical Physics Foundations
                </p>
                <a
                  href="https://github.com/gyrogovernance/gyroscopic-alignment-research-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300"
                  aria-label="Visit Gyroscopic Alignment Research Lab (opens in new tab)"
                >
                  <GitHubIcon className="w-4 h-4 mr-2" />
                  View on GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">🧠</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gyroscopic Alignment Development Lab
                </h3>
                <p className="text-foreground-secondary mb-4">
                  Artificial Superintelligence Architecture (ASI/AGI)
                </p>
                <a
                  href="https://github.com/gyrogovernance/gyroscopic-alignment-development-lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-full transition-colors duration-300"
                  aria-label="Visit Gyroscopic Alignment Development Lab (opens in new tab)"
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
                        <div className="text-4xl">🚶</div>
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
                        <div className="text-4xl">💡</div>
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
                        <div className="text-4xl">🛡️</div>
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
                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <img 
                            src="/assets/AIQ_Cover.jpg" 
                            alt="AI Quality Governance Cover" 
                            className="w 50 h-60 object-cover rounded-lg shadow-md border border-border/50"
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
                          <img 
                            src="/assets/AI_Canon_Cover.jpg" 
                            alt="AI Canon Cover" 
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
                        <div className="text-4xl">📚</div>
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
                          25 episodes exploring crisis resolution methodologies that inform AI safety protocols and behavioral alignment. 
                          </p>
                          <div className="flex flex-wrap gap-3">
                            <a
                              href="https://open.spotify.com/show/3iJZE6wfQ4K35xBNyHhSi2?si=b000840ad8834caa"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-full transition-colors duration-300"
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
                            Renaissance interdisciplinary insights inspiring modern thinking about AI Governance.
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
              </section>
    </div>
  );
}
