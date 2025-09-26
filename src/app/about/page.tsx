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
            <p className="text-foreground-secondary mb-4 leading-relaxed">
              Gyro Governance is at the forefront of AI research and development, focusing on creating
              sustainable and ethical frameworks for artificial intelligence systems. Our work bridges
              the gap between theoretical physics and practical AI governance solutions.
            </p>
            <p className="text-foreground-secondary mb-4 leading-relaxed">
              We believe that the future of AI lies not just in technological advancement, but in
              developing robust governance models that ensure AI systems remain aligned with human
              values and societal needs.
            </p>
          </div>
        </section>

                {/* Accomplishments Section */}
                <section className="mb-12 animate-fade-in-up">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-12xl mr-4"></div>
                    <h2 className="text-2xl font-semibold text-foreground">
                      Accomplishments
                    </h2>
                  </div>
          <div className="space-y-6">
            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">🔬</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Mathematical Physics Foundations
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Developed novel mathematical frameworks that apply gyroscopic physics principles
                    to AI system architecture, enabling more stable and predictable AI behavior.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">🎯</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    AI Alignment Protocols
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Created comprehensive diagnostic tools and protocols for evaluating and ensuring
                    AI system alignment with human values and objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-elevated/60 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-border/80">
              <div className="flex items-start space-x-4">
                <div className="text-5xl">⚖️</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Governance Frameworks
                  </h3>
                  <p className="text-foreground-secondary leading-relaxed">
                    Established practical governance models that can be implemented across different
                    AI systems and organizational structures.
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
                      Our Mission
                    </h2>
                  </div>
          <div className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-border/50">
            <p className="text-foreground-secondary mb-4 leading-relaxed">
              To advance the field of AI governance through innovative research that combines
              mathematical rigor with practical implementation. We are committed to developing
              solutions that make AI systems more transparent, accountable, and beneficial to society.
            </p>
            <p className="text-foreground-secondary leading-relaxed">
              Our research spans multiple disciplines, from theoretical physics to practical
              engineering, ensuring that our solutions are both scientifically sound and
              practically applicable.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
