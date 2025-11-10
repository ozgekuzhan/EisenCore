import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600">
            Comprehensive cloud infrastructure and software solutions
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* Service 1 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-primary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                  CLOUD SOLUTIONS
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Hybrid Cloud Brokerage
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Vendor-agnostic multi-cloud orchestration across EU providers.
                  Optimize costs while maintaining full GDPR compliance.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>Multi-cloud integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>Cost optimization (up to 40%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>EU data residency & GDPR</span>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-secondary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                  INFRASTRUCTURE
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Tier 2+ Data Center
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Locally hosted in the Netherlands. 200-300 racks, redundant power and cooling,
                  connected to AMS-IX.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>T2+ certified infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>N+1 UPS & cooling redundancy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>PUE &lt; 1.4, renewable energy</span>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-primary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                  SECURITY
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Cybersecurity & Compliance
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Zero-trust architecture with AI-driven threat detection.
                  ISO 27001 certified, GDPR and NIS2 compliant.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>End-to-end encryption</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>AI-powered threat detection</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                  <span>ISO 27001 & NIS2 compliant</span>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-12 border border-gray-200 hover:border-secondary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                  DEVELOPMENT
                </div>
                <h2 className="text-3xl font-bold text-dark mb-4">
                  Software Development
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Custom web and mobile apps, AI-powered analytics, and SaaS solutions
                  built with React and modern tech stack.
                </p>
              </div>
              <div className="space-y-3 text-gray-700 border-t border-gray-100 pt-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>React & React Native apps</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>Node.js, GraphQL, Kubernetes</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3"></div>
                  <span>AI/ML & DevSecOps integration</span>
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
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Let's discuss how we can help your business grow
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

export default Services
