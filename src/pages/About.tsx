import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-dark via-dark-lighter to-dark">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building Europe's Digital Sovereignty
          </h1>
          <p className="text-xl text-gray-300">
            A strategic infrastructure project strengthening digital autonomy within the EU
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                OUR MISSION
              </div>
              <h2 className="text-4xl font-bold text-dark mb-6">
                Empowering European Businesses
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We provide sovereign cloud infrastructure that keeps European data within European borders.
                Our mission is to deliver enterprise-grade cloud services with full GDPR compliance,
                enabling businesses to maintain complete control over their digital assets.
              </p>
            </div>
            <div>
              <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                OUR VISION
              </div>
              <h2 className="text-4xl font-bold text-dark mb-6">
                A Truly Independent EU Cloud
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the leading European-aligned alternative to hyperscale cloud providers,
                offering multi-cloud orchestration, Tier 2+ data centers, and cutting-edge security
                while championing digital sovereignty across the continent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
              CORE VALUES
            </div>
            <h2 className="text-4xl font-bold text-dark mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-dark mb-4">Sovereignty</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete data residency and control within the EU, ensuring compliance with European regulations and values.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-dark mb-4">Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Zero-trust architecture with AI-driven threat detection, ISO 27001 certification, and NIS2 compliance.
              </p>
            </div>
            <div className="bg-white p-10 border border-gray-200">
              <h3 className="text-2xl font-bold text-dark mb-4">Sustainability</h3>
              <p className="text-gray-600 leading-relaxed">
                Green energy-powered data centers with PUE &lt; 1.4, targeting LEED Gold certification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                ABOUT EISENCORE
              </div>
              <h2 className="text-4xl font-bold text-dark mb-6">
                Your Trusted Infrastructure Partner
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                EisenCore B.V. is a Netherlands-based cloud infrastructure and software development company
                dedicated to providing secure, compliant, and scalable solutions for European businesses.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Located in Amsterdam, we operate a Tier 2+ data center with 200-300 rack capacity,
                connected directly to AMS-IX for optimal network performance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>Amsterdam, Netherlands</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>GDPR & NIS2 Compliant</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-12 border border-gray-200">
              <h3 className="text-2xl font-bold text-dark mb-8">Key Facts</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-3xl font-bold text-primary mb-2">300+</div>
                  <div className="text-gray-600">Rack Capacity</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime SLA</div>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-gray-600">Support & Monitoring</div>
                </div>
                <div className="pb-4">
                  <div className="text-3xl font-bold text-primary mb-2">&lt; 1.4</div>
                  <div className="text-gray-600">Power Usage Effectiveness</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Your Future Together
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Discover how EisenCore can support your digital transformation
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-dark px-8 py-4 rounded-lg font-semibold transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About
