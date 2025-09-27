export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
      <div className="animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 text-center">
          <span className="bg-gradient-to-r from-apple-purple via-apple-blue to-apple-green bg-clip-text text-transparent">
            About Gyro Governance
          </span>
        </h1>

        {/* Intro Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="text-12xl mr-4"></div>
            <h2 className="text-2xl font-semibold text-foreground">
              Introduction
            </h2>
          </div>
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
            <p className="text-foreground-secondary mb-4 leading-relaxed text-lg font-semibold">
              Gyro Governance specializes in alignment and governance research for artificial intelligence, 
              with a focus on mathematical frameworks derived from physics principles. Established in 2013, 
              the work bridges theoretical foundations with practical implementation strategies.
            </p>
            <p className="text-foreground-secondary mb-4 leading-relaxed">
              The research addresses critical challenges in machine learning systems through 
              approaches based on gyroscopic dynamics and structural coherence. This unique perspective 
              enables the development of more robust and interpretable computational architectures.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Beyond technological innovation, the focus extends to ethical frameworks and governance 
              models that ensure these systems serve societal needs while maintaining transparency 
              and accountability.
            </p>
          </div>
        </section>

        {/* Key Developments Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="text-12xl mr-4">🎯</div>
            <h2 className="text-2xl font-semibold text-foreground">
              Key Developments
            </h2>
          </div>
          <div className="space-y-6">
            {/* Alignment Protocols & Diagnostics - Table Format */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">🎯</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Alignment Protocols & Diagnostics</h3>
                  <p className="text-sm text-foreground-tertiary">Gyroscope Protocol Performance Metrics</p>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Metric</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Improvement</th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border-secondary">
                      <td className="py-3 px-4 text-foreground-secondary">Output Quality</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-apple-green">+32.9%</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-secondary text-sm">Measurable improvement in response quality</td>
                    </tr>
                    <tr className="border-b border-border-secondary">
                      <td className="py-3 px-4 text-foreground-secondary">Structural Reasoning</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-apple-green">+50.9%</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-secondary text-sm">Enhanced logical structure and coherence</td>
                    </tr>
                    <tr className="border-b border-border-secondary">
                      <td className="py-3 px-4 text-foreground-secondary">Accountability</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-apple-green">+62.7%</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-secondary text-sm">Improved responsibility and traceability</td>
                    </tr>
                    <tr className="border-b border-border-secondary">
                      <td className="py-3 px-4 text-foreground-secondary">Traceability</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-apple-green">+61.0%</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-secondary text-sm">Better tracking of decision processes</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-foreground-secondary">Behavioral Integrity</td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-apple-green">+54.9%</span>
                      </td>
                      <td className="py-3 px-4 text-foreground-secondary text-sm">Enhanced ethical consistency and alignment</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-foreground-secondary leading-relaxed mt-4 text-sm">
                These protocols provide quantitative metrics for transparency and ethical coherence without requiring model retraining. 
                The Gyroscope Protocol demonstrates measurable improvements in language model performance across multiple dimensions.
              </p>
            </div>

            {/* Governance Architecture - Card Format */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">⚖️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Governance Architecture
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Practical frameworks for oversight and decision-making that can be adapted across 
                    different organizational contexts. These models emphasize participatory approaches 
                    and structural accountability mechanisms for responsible deployment of intelligent systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Mathematical Physics Foundations - Card Format */}
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">🔬</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Mathematical Physics Foundations
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Research into fundamental mathematical frameworks that apply gyroscopic physics principles 
                    to questions of stability, coherence, and dynamics in complex systems. This theoretical work 
                    provides the foundation for understanding alignment and governance challenges from first principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <div className="text-12xl mr-4"></div>
            <h2 className="text-2xl font-semibold text-foreground">
              Research Focus
            </h2>
          </div>
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
            <p className="text-foreground-secondary mb-4 leading-relaxed text-lg font-semibold">
              The research combines mathematical rigor with practical engineering to address 
              fundamental challenges in machine intelligence. This interdisciplinary approach 
              draws from physics, philosophy, and systems theory to create robust solutions.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Current projects explore superintelligence architectures, behavioral alignment 
              mechanisms, and governance protocols that prioritize transparency and human values. 
              All developments are documented through open-source repositories and educational resources.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}