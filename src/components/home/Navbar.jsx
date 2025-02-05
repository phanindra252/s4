import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md relative z-10">
      {/* Logo */}
      <div className="text-lg font-bold text-gray-800">
        <Link to="/" className="flex items-center">
          <img
            src="src/components/home/S4Brothers-Main-Logo.svg"
            className="h-8 mr-2"
            alt="Logo"
          />
        </Link>
      </div>

      {/* Navigation links */}
      <div className="hidden md:flex space-x-8 text-gray-600">
        <Link to="/" className="hover:text-gray-800">
          Home
        </Link>
        <Link to="/about-us" className="hover:text-gray-800">
          About Us
        </Link>

        {/* Our Services with Dropdown */}
        <div className="relative group">
  {/* Our Services Link */}
  <Link
    to="/ourservices"
    className="hover:text-gray-800 focus:outline-none block"
    aria-haspopup="true"
  >
    Our Services
  </Link>

  {/* Dropdown */}
  <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block group-focus-within:block transition-all duration-300 ease-in-out">
    <Link to="/kitchen" className="block px-4 py-2 hover:bg-gray-200">
      Kitchen
    </Link>
    <Link to="/bathroom" className="block px-4 py-2 hover:bg-gray-200">
      Bathroom
    </Link>
  </div>
</div>


        {/* Projects with Dropdown */}
        <div className="relative group">
          <button
            className="hover:text-gray-800 focus:outline-none"
            aria-haspopup="true"
          >
            Projects
          </button>
          {/* Dropdown */}
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-md rounded-md hidden group-hover:block group-focus-within:block transition-all duration-300 ease-in-out">
            <Link
              to="/portfolio-1"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Portfolio-1
            </Link>
            <Link
              to="/portfolio-2"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Portfolio-2
            </Link>
            <Link
              to="/portfolio-3"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Portfolio-3
            </Link>
            <Link
              to="/portfolio-4"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Portfolio-4
            </Link>
          </div>
        </div>

        <a href="#contact" className="hover:text-gray-800">
          Get in Touch
        </a>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex items-center space-x-4 text-gray-600">
        <a href="https://facebook.com" className="hover:text-gray-800">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com" className="hover:text-gray-800">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
          <div className="flex flex-col space-y-4 py-4 px-6 text-gray-600">
            <Link to="/" className="hover:text-gray-800">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-gray-800">
              About Us
            </Link>
            <Link to="/ourservices" className="hover:text-gray-800">
              Our Services
            </Link>
            <Link to="/projects" className="hover:text-gray-800">
              Projects
            </Link>
            <a href="#contact" className="hover:text-gray-800">
              Get in Touch
            </a>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" className="hover:text-gray-800">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
