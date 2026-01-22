import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Gyro Governance website",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose max-w-none">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        
        <p className="text-foreground-secondary mb-6">
          <strong>Last updated:</strong> January 2025
        </p>

        <section className="prose-section">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you visit our website or contact us.
          </p>
          <h3>1.1 Information You Provide</h3>
          <ul>
            <li>Contact information when you reach out to us</li>
            <li>Any information you voluntarily provide through our website</li>
          </ul>

          <h3>1.2 Information We Collect Automatically</h3>
          <ul>
            <li>Usage data through Google Analytics (anonymized)</li>
            <li>Device information and browser type</li>
            <li>Pages visited and time spent on our website</li>
          </ul>
        </section>

        <section className="prose-section">
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Analyze website usage and improve our content</li>
            <li>Respond to your inquiries and provide support</li>
            <li>Ensure the security and proper functioning of our website</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="prose-section">
          <h2>3. Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information about your use of our website, including:
          </p>
          <ul>
            <li>Pages you visit and time spent on each page</li>
            <li>How you arrived at our website</li>
            <li>Your general geographic location (country/city level)</li>
            <li>Device and browser information</li>
          </ul>
          <p>
            This information is anonymized and aggregated. We do not collect personally identifiable information through Google Analytics.
          </p>
          <p>
            You can opt out of Google Analytics by installing the Google Analytics Opt-out Browser Add-on or by rejecting cookies when prompted.
          </p>
        </section>

        <section className="prose-section">
          <h2>4. Cookies</h2>
          <p>
            We use cookies to enhance your browsing experience and analyze website traffic. Cookies are small text files stored on your device that help us understand how you use our website.
          </p>
          <p>
            For detailed information about our cookie usage, please see our <a href="/cookie-policy">Cookie Policy</a>.
          </p>
        </section>

        <section className="prose-section">
          <h2>5. Data Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties, except:
          </p>
          <ul>
            <li>With Google Analytics (anonymized data only)</li>
            <li>When required by law or to protect our rights</li>
            <li>With your explicit consent</li>
          </ul>
        </section>

        <section className="prose-section">
          <h2>6. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section className="prose-section">
          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul>
            <li>The right to access your personal information</li>
            <li>The right to correct inaccurate information</li>
            <li>The right to delete your personal information</li>
            <li>The right to object to processing of your information</li>
            <li>The right to data portability</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
        </section>

        <section className="prose-section">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section className="prose-section">
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <ul>
            <li>Email: <a href="mailto:basilkorompilias@gmail.com">basilkorompilias@gmail.com</a></li>
            <li>Website: <a href="https://gyrogovernance.com">https://gyrogovernance.com</a></li>
          </ul>
        </section>
      </article>
    </div>
  );
}
