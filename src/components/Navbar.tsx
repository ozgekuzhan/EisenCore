import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo2.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#16212c] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="EisenCore" className="h-12 md:h-16 lg:h-20" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
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

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary p-2"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Services
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-primary hover:bg-primary-dark text-dark px-6 py-3 rounded-lg transition-colors duration-200 font-semibold text-center"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
