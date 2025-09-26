import Link from "next/link";

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
                  className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                  aria-label="Visit Gyroscopic Alignment Research Lab (opens in new tab)"
                >
                  View on GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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
                  className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                  aria-label="Visit Gyroscopic Alignment Development Lab (opens in new tab)"
                >
                  View on GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

              {/* Tools Section */}
              <section className="mb-16 animate-fade-in-up" aria-labelledby="tools-heading">
                <h2 id="tools-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
                  Tools
                </h2>
        <div className="grid md:grid-cols-1 gap-6">
          <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start space-x-4">
              <div className="text-4xl">⚙️</div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Gyroscope
                </h3>
                <p className="text-foreground-secondary mb-4">
                  LLM Alignment Protocol & Diagnostics
                </p>
                <a
                  href="https://github.com/gyrogovernance/gyroscope"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                  aria-label="Visit Gyroscope on GitHub (opens in new tab)"
                >
                  View on GitHub
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
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
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
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
                        <div className="text-4xl">📊</div>
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
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>

                    <article className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80 hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-4xl">⚖️</div>
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
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>

                {/* Documentations Subsection */}
                <div className="mb-8">
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
                            className="inline-flex items-center text-apple-blue hover:text-apple-purple transition-colors duration-300 font-medium"
                            aria-label="View Notion Documentation (opens in new tab)"
                          >
                            Notion Documentation
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </section>
    </div>
  );
}
