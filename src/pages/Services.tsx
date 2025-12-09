import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-dark via-dark-lighter to-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4">
              Comprehensive cloud infrastructure and software solutions
            </p>
          </div>
        </div>
      </section>

      <section className="pt-12 pb-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="bg-white p-12 border border-gray-200 hover:border-primary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                  CLOUD SOLUTIONS
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  Hybrid Cloud Brokerage
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Vendor-agnostic multi-cloud orchestration across EU providers.
                  Optimize costs while maintaining full GDPR compliance.
                </p>
              </div>
              <div className="space-y-2 text-gray-700 text-sm border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  <span>Multi-cloud integration</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  <span>Cost optimization (up to 40%)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                  <span>EU data residency & GDPR</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 border border-gray-200 hover:border-secondary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                  INFRASTRUCTURE
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  Tier 2+ Data Center
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Locally hosted in the Netherlands. 200-300 racks, redundant power and cooling,
                  connected to AMS-IX.
                </p>
              </div>
              <div className="space-y-2 text-gray-700 text-sm border-t border-gray-100 pt-4">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                  <span>T2+ certified infrastructure</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                  <span>N+1 UPS & cooling redundancy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                  <span>PUE &lt; 1.4, renewable energy</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 border border-gray-200 hover:border-primary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-primary/5 text-primary text-sm font-semibold mb-6">
                  SECURITY
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  Cybersecurity & Compliance
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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

            <div className="bg-white p-12 border border-gray-200 hover:border-secondary/30 transition-all duration-300 group">
              <div className="mb-8">
                <div className="inline-block px-4 py-1 bg-secondary/5 text-secondary text-sm font-semibold mb-6">
                  DEVELOPMENT
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-dark mb-3">
                  Software Development
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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

      <section className="py-20 px-4 bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-gray-300 mb-6 text-sm md:text-base">
            Let's discuss how we can help your business grow
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary hover:bg-primary-dark text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
