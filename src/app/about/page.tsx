export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Gyro Governance</h1>

        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Introduction</h2>
          <p className="text-gray-600 mb-4">
            Gyro Governance is at the forefront of AI research and development, focusing on creating
            sustainable and ethical frameworks for artificial intelligence systems. Our work bridges
            the gap between theoretical physics and practical AI governance solutions.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that the future of AI lies not just in technological advancement, but in
            developing robust governance models that ensure AI systems remain aligned with human
            values and societal needs.
          </p>
        </section>

        {/* Accomplishments Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Accomplishments</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mathematical Physics Foundations
              </h3>
              <p className="text-gray-600">
                Developed novel mathematical frameworks that apply gyroscopic physics principles
                to AI system architecture, enabling more stable and predictable AI behavior.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Alignment Protocols
              </h3>
              <p className="text-gray-600">
                Created comprehensive diagnostic tools and protocols for evaluating and ensuring
                AI system alignment with human values and objectives.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Governance Frameworks
              </h3>
              <p className="text-gray-600">
                Established practical governance models that can be implemented across different
                AI systems and organizational structures.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To advance the field of AI governance through innovative research that combines
            mathematical rigor with practical implementation. We are committed to developing
            solutions that make AI systems more transparent, accountable, and beneficial to society.
          </p>
          <p className="text-gray-600">
            Our research spans multiple disciplines, from theoretical physics to practical
            engineering, ensuring that our solutions are both scientifically sound and
            practically applicable.
          </p>
        </section>
      </div>
    </div>
  );
}
