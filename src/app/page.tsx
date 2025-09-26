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
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
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
                            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.033-.793c.327-.047.514-.233.514-.513V.513c0-.28-.187-.466-.514-.513L1.936.28C1.61.233 1.423.42 1.423.7v.513c0 .28.187.466.513.513z"/>
                            </svg>
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
                              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.16-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
                              </svg>
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
                              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
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
                              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                              </svg>
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
