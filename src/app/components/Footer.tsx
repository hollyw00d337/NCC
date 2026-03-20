import { Link } from "react-router";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "../../assets/e0a7c900e7267bf5523e7895249679aabbecde0f.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t-4 border-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col items-start">
            <Link to="/" className="mb-8 block group transition-transform hover:scale-105 duration-300">
              <div className="bg-white p-4 rounded-xl shadow-lg shadow-black/20">
                <img src={logo} alt="NCC Logo" className="h-16 w-auto object-contain" />
              </div>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed max-w-sm">
              NCC LLC — locally & owner-operated in Northern Colorado. 30+ years of combined experience, OSHA 30 certified crews, and BBB accredited. Craftsmanship You Can Trust.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:bg-secondary hover:text-white hover:border-secondary transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Our Projects", href: "/projects" },
                { name: "Testimonials", href: "/#testimonials" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-accent transition-colors flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-accent transition-colors" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Expertise
            </h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              {[
                "Roofing & Storm Damage",
                "Kitchen & Bath Remodeling",
                "Basement Finishing",
                "Decks & Outdoor Living",
                "Siding & Gutters",
                "Home Additions",
                "Interior & Exterior Painting",
                "Flooring & Tile",
                "Windows & Doors",
                "Custom Home Building",
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                   <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-secondary transition-colors" />
                   {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-bold uppercase tracking-widest mb-8 flex items-center gap-3">
              <span className="w-8 h-1 bg-accent rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 group hover:border-slate-800 transition-colors">
                <div className="bg-secondary/10 p-2.5 rounded-lg">
                  <MapPin className="h-5 w-5 text-secondary" />
                </div>
                <span className="text-slate-400 text-sm leading-relaxed">
                  Fort Collins · Greeley · Loveland<br />
                  <span className="text-white font-bold">Northern Colorado</span><br />
                  <span className="text-slate-500 text-xs">+ Walden &amp; Steamboat Springs</span>
                </span>
              </div>
              <a href="tel:+19706825555" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 group hover:border-slate-800 transition-colors">
                <div className="bg-accent/10 p-2.5 rounded-lg">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <span className="text-slate-400 text-sm font-bold group-hover:text-white transition-colors">(970) 682-5555</span>
              </a>
              <a href="mailto:office@ncc-build.com" className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-900 group hover:border-slate-800 transition-colors">
                <div className="bg-white/10 p-2.5 rounded-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <span className="text-slate-400 text-sm font-bold group-hover:text-white transition-colors">office@ncc-build.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} <span className="text-white font-bold">NCC LLC</span>. Craftsmanship You Can Trust. · OSHA 30 Certified · BBB Accredited
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}