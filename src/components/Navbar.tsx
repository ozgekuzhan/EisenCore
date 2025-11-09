import { Link } from 'react-router-dom'
import logo from '../assets/Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-dark shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EisenCore" className="h-12" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-primary transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="bg-primary hover:bg-primary-dark text-dark px-6 py-2 rounded-lg transition-colors duration-200 font-semibold"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-white hover:text-primary">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
