import { navLinks } from "./data/Featuredata";
import { Link } from "react-scroll";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaGithub } from "react-icons/fa6";
import fiver from "../assets/fiver.webp";
import { FaLongArrowAltUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="full-width-footer mt-20 border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 px-6 sm:px-8 md:px-10 lg:px-16 py-12">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">
            About Me
          </h3>
          <p className="text-md leading-relaxed text-gray-400">
            I'm a passionate Front-End Developer skilled in HTML, CSS,
            JavaScript, Bootstrap, Tailwind, and React + vite. I love building
            fast, responsive, and user-friendly websites.
          </p>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-2 text-white lg:ml-20">
            Menu
          </h3>
          <ul className="flex flex-col justify-center list-none  lg:ml-20">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  className="cursor-pointer text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-4 mb-3">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Services</h3>
          <ul className="list-disc ml-4 text-gray-400">
            <li>Responsive Website Design</li>
            <li>Landing Page / Lead Generation</li>
            <li>UI/UX Improvements & Prototyping</li>
            <li>Performance Optimization</li>
            <li>Bug Fixes & Cross-Browser Support</li>
          </ul>
        </div>
        <div className="col-md-4 mb-3">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            Contact Info
          </h3>
          <ul className="list-none text-gray-400">
            <li>
              <strong>Name:</strong> Shafi Usmani
            </li>
            <li>
              <strong>Phone:</strong> +92 309 1183431
            </li>
            <li>
              <strong>Email:</strong> shafek790@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Karachi, Pakistan
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-5">
        <a
          href="https://fiverr.com/shafeusmani"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Fiverr gig"
        >
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center opacity-80 hover:scale-110 transition duration-200">
            <img
              src={fiver}
              alt="fiverr logo"
              className="w-8 h-8 object-contain " loading="lazy"
            />
          </div>
        </a>
        <a
          href="https://github.com/settings/profile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit gitHub profile"
          className="hover:text-white"
        >
          <div className="w-8 h-8 text-2xl opacity-80 hover:scale-110 bg-gray-300 rounded-full flex items-center justify-center text-black  font-bold">
            <FaGithub />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/shafe-khan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit linkedIn profile"
          className="hover:text-white"
        >
          <div className="w-8 h-8 text-2xl opacity-80 hover:scale-110 bg-gray-300 rounded-full flex items-center justify-center text-black  font-bold">
           <TbBrandLinkedinFilled />
          </div>
        </a>
      </div>

      <div className="relative mt-6 py-4 border-t border-neutral-800 flex items-center justify-between px-4 sm:px-6">
  {/* Text */}
  <p className="text-neutral-400 text-sm text-left sm:text-left md:text-center w-full">
    © {new Date().getFullYear()} Shafi code hub. All rights reserved.
  </p>

  {/* Scroll-to-top Icon */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="absolute right-4 md:static flex items-center justify-center w-12 h-12 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full border-2 border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white transition-all duration-300"
    aria-label="Scroll to top"
  >
    <FaLongArrowAltUp />
  </button>
</div>

    </footer>
  );
};

export default Footer;
