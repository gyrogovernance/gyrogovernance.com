import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Gyro Governance
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          Advancing AI governance through innovative research and development solutions
        </p>
        <div className="mt-8 flex justify-center space-x-4">
          <Link
            href="/about"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Learn more about Gyro Governance"
          >
            Learn More
          </Link>
          <a
            href="https://korompilias.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Visit Author's personal website (opens in new tab)"
          >
            Author
          </a>
        </div>
      </div>

      {/* Labs Section */}
      <section className="mb-16" aria-labelledby="labs-heading">
        <h2 id="labs-heading" className="text-3xl font-bold text-gray-900 mb-8">Labs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Common Governance Model
            </h3>
            <p className="text-gray-600 mb-4">
              Mathematical Physics Foundations for AI governance frameworks
            </p>
            {/* <a
              href="/labs/governance-model"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Learn more about Common Governance Model"
            >
              Learn more →
            </a> */}
            <span className="text-gray-400 text-sm italic">Coming soon</span>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Gyro-Superintelligence
            </h3>
            <p className="text-gray-600 mb-4">
              Gyroscopic Physics AGI/ASI Architecture research and development
            </p>
            {/* <a
              href="/labs/gyro-superintelligence"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Learn more about Gyro-Superintelligence"
            >
              Learn more →
            </a> */}
            <span className="text-gray-400 text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>

      {/* Tools Section */}
      <section className="mb-16" aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-3xl font-bold text-gray-900 mb-8">Tools</h2>
        <div className="grid md:grid-cols-1 gap-6">
          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Gyroscope
            </h3>
            <p className="text-gray-600 mb-4">
              LLM Alignment Protocol & Diagnostics for AI safety and reliability
            </p>
            {/* <a
              href="/tools/gyroscope"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Learn more about Gyroscope tool"
            >
              Learn more →
            </a> */}
            <span className="text-gray-400 text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>

      {/* Guides Section */}
      <section className="mb-16" aria-labelledby="guides-heading">
        <h2 id="guides-heading" className="text-3xl font-bold text-gray-900 mb-8">Guides</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Bites
            </h3>
            <p className="text-gray-600 mb-4">
              Practical Prompt Engineering techniques for AI interaction
            </p>
            {/* <a
              href="/guides/smart-bites"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Learn more about Smart Bites prompt engineering"
            >
              Learn more →
            </a> */}
            <span className="text-gray-400 text-sm italic">Coming soon</span>
          </article>

          <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              AI.Q Governance
            </h3>
            <p className="text-gray-600 mb-4">
              Model Behavior Evaluation Framework for AI governance
            </p>
            {/* <a
              href="/guides/aiq-governance"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label="Learn more about AI.Q Governance framework"
            >
              Learn more →
            </a> */}
            <span className="text-gray-400 text-sm italic">Coming soon</span>
          </article>
        </div>
      </section>
    </div>
  );
}
