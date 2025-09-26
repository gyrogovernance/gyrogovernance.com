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
            className="inline-flex items-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-apple-blue to-apple-purple hover:from-apple-purple hover:to-apple-pink transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-blue/50 transform hover:scale-105"
            aria-label="Learn more about Gyro Governance"
          >
            Learn More
          </Link>
          <a
            href="https://korompilias.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-apple-orange text-base font-medium rounded-full text-apple-orange bg-surface-elevated hover:bg-apple-orange hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-apple-orange/50 transform hover:scale-105"
            aria-label="Visit Author's personal website (opens in new tab)"
          >
            Author
          </a>
        </div>
      </div>

      {/* Labs Section */}
      <section className="mb-16 animate-fade-in-up" aria-labelledby="labs-heading">
        <h2 id="labs-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
          <span className="bg-gradient-to-r from-apple-green to-apple-blue bg-clip-text text-transparent">
            Labs
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Common Governance Model
            </h3>
            <p className="text-foreground-secondary mb-4">
              Mathematical Physics Foundations for AI governance frameworks
            </p>
            <span className="text-foreground-tertiary text-sm italic">Coming soon</span>
          </article>

          <article className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Gyro-Superintelligence
            </h3>
            <p className="text-foreground-secondary mb-4">
              Gyroscopic Physics AGI/ASI Architecture research and development
            </p>
            <span className="text-foreground-tertiary text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16 animate-fade-in-up" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
          <span className="bg-gradient-to-r from-apple-orange to-apple-red bg-clip-text text-transparent">
            Tools
          </span>
        </h2>
        <div className="grid md:grid-cols-1 gap-6">
          <article className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Gyroscope
            </h3>
            <p className="text-foreground-secondary mb-4">
              LLM Alignment Protocol & Diagnostics for AI safety and reliability
            </p>
            <span className="text-foreground-tertiary text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>

      {/* Guides Section */}
      <section className="mb-16 animate-fade-in-up" aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-3xl font-bold text-foreground mb-8 text-center">
          <span className="bg-gradient-to-r from-apple-pink to-apple-purple bg-clip-text text-transparent">
            Guides
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Smart Bites
            </h3>
            <p className="text-foreground-secondary mb-4">
              Practical Prompt Engineering techniques for AI interaction
            </p>
            <span className="text-foreground-tertiary text-sm italic">Coming soon</span>
          </article>

          <article className="bg-surface-elevated/80 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover border border-border/50">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              AI.Q Governance
            </h3>
            <p className="text-foreground-secondary mb-4">
              Model Behavior Evaluation Framework for AI governance
            </p>
            <span className="text-foreground-tertiary text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>
    </div>
  );
}
