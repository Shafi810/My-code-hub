import { Link } from "react-scroll";
import Logo from "./Logo.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { navLinks } from "./data/Featuredata";
import { useState } from "react";



const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <header>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-700 bg-white/90 dark:bg-gray-950/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex justify-center items-center">
              <Logo className="w-12 h-12 md:w-14 md:h-14" />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-700 text-transparent bg-clip-text">
                Shafi code hub
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active-link"
                    className="relative text-gray-900 dark:text-white cursor-pointer transition-colors duration-300 hover:text-blue-500 
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
                      after:bg-gradient-to-r from-blue-400 to-blue-700 after:transition-all after:duration-500 hover:after:w-full"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
         <div className="hidden lg:flex items-center space-x-6">
  <button className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white 
    font-medium rounded-lg shadow-md hover:scale-105 transition-transform duration-300">
    <a
      href="/resume.pdf"
      download='resume.pdf'
     
    >
      Download Resume
    </a>
  </button>
</div>
            {/* Mobile Toggle */}
            <div className="lg:hidden flex text-2xl">
              <button
                type="button"
                onClick={toggleNavbar}
                aria-label={mobileDrawerOpen ? "Close menu" : "Open menu"}
              >
                {mobileDrawerOpen ? (
                  <AiOutlineCloseCircle />
                ) : (
                  <GiHamburgerMenu />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileDrawerOpen && (
            <div className="lg:hidden flex flex-col space-y-5 mt-4 pb-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      activeClass="active-link"
                      className="block text-gray-900 dark:text-white cursor-pointer hover:text-blue-500 transition"
                      onClick={toggleNavbar}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

             <a
     href="/resume.pdf"
    download="resume"
    className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500
                 text-white text-center font-medium rounded-lg shadow-md hover:scale-105 transition-transform  duration-300"
  >
                📄 Download Resume
              </a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
