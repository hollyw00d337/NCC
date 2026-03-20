import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
  Menu,
  X,
  HardHat,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import clsx from "clsx";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-slate-50">
      {/* Navigation */}
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md py-3 border-slate-200"
            : "bg-transparent py-5 text-white",
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <div
              className={clsx(
                "p-2 rounded bg-orange-600 text-white transition-transform group-hover:scale-105",
              )}
            >
              <HardHat size={24} strokeWidth={2.5} />
            </div>
            <span
              className={clsx(
                "text-2xl font-bold tracking-tight uppercase",
                isScrolled ? "text-slate-900" : "text-white",
              )}
            >
              Apex<span className="text-orange-600">Build</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "text-sm font-semibold tracking-wide uppercase transition-colors hover:text-orange-600 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all hover:after:w-full",
                  location.pathname === link.path
                    ? "text-orange-600 after:w-full"
                    : isScrolled
                      ? "text-slate-700"
                      : "text-slate-100",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded font-bold uppercase text-sm tracking-wider transition-all shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={clsx(
              "md:hidden p-2",
              isScrolled ? "text-slate-900" : "text-white",
            )}
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={clsx(
                  "text-2xl font-bold border-b border-slate-100 pb-4",
                  location.pathname === link.path
                    ? "text-orange-600"
                    : "text-slate-800",
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 bg-orange-600 text-white text-center py-4 rounded-lg font-bold uppercase tracking-wider"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-16">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-2 rounded bg-orange-600 text-white">
                <HardHat size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase text-white">
                Apex
                <span className="text-orange-600">Build</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Constructing excellence across the United States.
              From residential dreams to commercial landmarks,
              we build with precision, integrity, and passion.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-orange-600 text-white rounded transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-orange-600 text-white rounded transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-orange-600 text-white rounded transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-slate-800 hover:bg-orange-600 text-white rounded transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  General Contracting
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Design-Build
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Construction Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-orange-500 transition-colors"
                >
                  Pre-construction Planning
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="text-orange-600 shrink-0 mt-1"
                  size={20}
                />
                <span>
                  123 Construction Blvd, Suite 400
                  <br />
                  Austin, TX 78701
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="text-orange-600 shrink-0"
                  size={20}
                />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="text-orange-600 shrink-0"
                  size={20}
                />
                <span>info@apexbuild.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} ApexBuild
            Construction. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}