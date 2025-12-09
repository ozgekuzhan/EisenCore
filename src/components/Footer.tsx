import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-lg md:text-xl font-bold text-primary mb-3 md:mb-4">EisenCore</h3>
            <p className="text-sm md:text-base text-gray-400">
              Professional cloud solutions and consulting services for modern businesses.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm md:text-base text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Contact</h4>
            <ul className="space-y-2 text-sm md:text-base text-gray-400">
              <li>
                <a href="mailto:info@eisencore.com" className="hover:text-primary transition-colors">
                  Email: info@eisencore.com
                </a>
              </li>
              <li>
                <a href="tel:+31629037707" className="hover:text-primary transition-colors">
                  🇳🇱 +31 6 29 03 77 07
                </a>
              </li>
              <li>
                <a href="tel:+905359432533" className="hover:text-primary transition-colors">
                  🇹🇷 +90 535 943 25 33
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-sm md:text-base text-gray-400">
          <p>&copy; {currentYear} EisenCore. All rights reserved.</p>
          <p className="mt-2">Designed & Developed by Ozge Kuzhan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
