import { Link } from 'react-router-dom'
import logo from '../assets/Logo2.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-dark via-dark-lighter to-dark py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
              Hybrid Cloud & Data Center
              <span className="block mt-2 text-primary">for Digital Sovereignty</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 max-w-3xl mx-auto px-4">
              Secure, compliant, and scalable cloud solutions for European businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary hover:bg-primary-dark text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-dark px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-dark mb-3 md:mb-4">Our Core Competencies</h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Three strategic pillars that power your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
              <div className="text-3xl mb-3 md:mb-4">☁️</div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">Cloud Brokerage</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Vendor-agnostic multi-cloud orchestration across EU-based providers. Optimize costs and maintain full control.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Multi-cloud integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Cost optimization
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  GDPR compliance
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-secondary">
              <div className="text-3xl mb-3 md:mb-4">🔒</div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">Data Security</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Zero-trust architecture with AI-driven threat detection and continuous monitoring for maximum security.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  ISO 27001 certified
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  End-to-end encryption
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  24/7 monitoring
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-primary">
              <div className="text-3xl mb-3 md:mb-4">💻</div>
              <h3 className="text-lg md:text-xl font-bold text-dark mb-2 md:mb-3">Software Development</h3>
              <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                Custom web and mobile applications, AI-powered analytics, and SaaS solutions built with modern technology.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  React & React Native
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  AI/ML integration
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Custom SaaS platforms
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">300+</div>
              <div className="text-xs md:text-sm text-gray-300">Rack Capacity</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-xs md:text-sm text-gray-300">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-xs md:text-sm text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">EU</div>
              <div className="text-xs md:text-sm text-gray-300">Data Residency</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-dark mb-3 md:mb-4">Why Choose EisenCore?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
                A sovereign infrastructure project that strengthens digital autonomy within the EU.
                We provide a European-aligned alternative to hyperscale cloud providers.
              </p>
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3">🇪🇺</span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-dark mb-1">EU Data Sovereignty</h3>
                    <p className="text-xs md:text-sm text-gray-600">Full GDPR compliance with data residing in the Netherlands</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3">⚡</span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-dark mb-1">Tier 2+ Data Center</h3>
                    <p className="text-xs md:text-sm text-gray-600">Redundant power, cooling, and network infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl md:text-3xl mr-3">🌱</span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-dark mb-1">Sustainable Operations</h3>
                    <p className="text-xs md:text-sm text-gray-600">PUE &lt; 1.4, 100% renewable energy, LEED Gold targeted</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <img
                src={logo}
                alt="EisenCore Infrastructure"
                className="w-full max-w-md md:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-dark mb-3 md:mb-4">
            Ready to Transform Your Infrastructure?
          </h2>
          <p className="text-sm md:text-base text-dark-lighter mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Get in touch with our team to discuss your cloud and data center needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-dark hover:bg-dark-lighter text-white px-6 md:px-8 py-2.5 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
