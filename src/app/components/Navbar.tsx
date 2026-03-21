import { Link, useLocation } from "react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/456fabb955cacfc8ec473bfc360d837d3eb3ec0d.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isHome = location.pathname === "/";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-slate-950/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl" 
          : isHome 
            ? "bg-transparent py-6" 
            : "bg-slate-950 py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <div className="h-10 md:h-12 w-10 md:w-12 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1 shadow-lg shadow-black/20">
              <img 
                src={logo} 
                alt="NCC Logo" 
                className="h-full w-full object-contain" 
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-10">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-xs font-black tracking-[0.2em] uppercase transition-all hover:text-secondary relative group ${
                  location.pathname === link.href
                    ? "text-secondary"
                    : scrolled || !isHome ? "text-white" : "text-white/80"
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-secondary transition-all duration-300 ${
                  location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href="tel:+19706325030"
              className="flex items-center gap-3 px-8 py-3 bg-secondary text-white rounded-sm hover:scale-105 transition-all shadow-xl shadow-secondary/20 active:scale-95"
            >
              <Phone className="h-4 w-4" />
              <span className="font-black text-xs tracking-[0.1em]">FREE ESTIMATE</span>
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-slate-950 flex flex-col p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="h-12 w-12 rounded-lg overflow-hidden bg-white flex items-center justify-center p-1">
                <img src={logo} alt="NCC Logo" className="h-full w-full object-contain" />
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X className="h-8 w-8" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-3xl font-black uppercase tracking-tighter ${
                    location.pathname === link.href
                      ? "text-secondary"
                      : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-white/10">
              <a
                href="tel:+19706325030"
                className="flex items-center justify-center gap-3 w-full py-6 bg-secondary text-white font-black tracking-widest uppercase rounded-sm"
              >
                <Phone className="h-5 w-5" />
                GET FREE ESTIMATE
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}