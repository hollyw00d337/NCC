import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  Home as HomeIcon,
  HardHat,
  Award,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Testimonials } from "../components/Testimonials";
import { Projects } from "../components/Projects";
import imgWalkway from "../../assets/custom.jpg";
import imgKitchen from "../../assets/Kitchens/kitchen_01.jpeg";
import imgRoofing2 from "../../assets/dff8ee71d58f85e190ab3e01f37ec45149d6a786.png";
import imgDecks from "../../assets/decks.jpg";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* ─── HERO SECTION ─────────────────────────────────────────────
           📄 File: /src/app/pages/Home.tsx  |  Lines 11-134
      ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-slate-950">
        {/* Background image + overlays */}
        <div className="absolute inset-0">
          <img
            src={imgRoofing2}
            alt="NCC Roofing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/75" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ── Left column ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Location line */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[2px] w-8 bg-secondary" />
                <span className="text-secondary text-[11px] uppercase tracking-[0.4em] font-bold">
                  Northern Colorado · Walden · Steamboat
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.02] tracking-tight mb-6">
                We Build What
                <br />
                <span className="text-secondary">
                  Mountains
                </span>{" "}
                Demand.
              </h1>

              {/* Subtext */}
              <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-10">
                30+ years of combined experience — roofing,
                remodeling & outdoor living engineered for
                Colorado's toughest conditions.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="group flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-secondary/90 transition-colors"
                >
                  Get My Free Estimate
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+19706325030"
                  className="flex items-center justify-center gap-3 px-8 py-4 border border-white/15 text-white text-sm font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (970) 632-5030
                </a>
              </div>
            </motion.div>

            {/* ── Right column — minimal stats card ── */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: "easeOut",
              }}
              className="hidden lg:block"
            >
              <div className="border border-white/10 rounded-sm p-10 max-w-xs ml-auto space-y-8">
                {[
                  {
                    value: "30+",
                    label: "Years Combined Experience",
                  },
                  {
                    value: "300+",
                    label: "Projects Completed",
                  },
                  {
                    value: "OSHA 30",
                    label: "Safety Certified Crews",
                  },
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-3xl font-black text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade into white */}
      </section>

      {/* Trust Bar */}
      <section className="bg-slate-950 border-b border-white/5 py-5">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {[
              {
                icon: (
                  <HardHat className="h-4 w-4 text-secondary" />
                ),
                label: "OSHA 30 Certified – Safety First",
              },
              {
                icon: (
                  <Award className="h-4 w-4 text-secondary" />
                ),
                label: "BBB Accredited Business",
              },
              {
                icon: (
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                ),
                label: "Fully Licensed & Insured",
              },
              {
                icon: (
                  <CheckCircle className="h-4 w-4 text-secondary" />
                ),
                label: "Locally & Owner-Operated",
              },
              {
                icon: (
                  <MapPin className="h-4 w-4 text-secondary" />
                ),
                label:
                  "Northern CO · Walden · Steamboat Springs",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span className="text-slate-300 text-[11px] font-bold uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <span className="text-secondary font-black tracking-widest uppercase text-xs mb-4 block">
                What We Do
              </span>
              <h2 className="text-5xl md:text-6xl font-black text-slate-950 leading-none tracking-tighter">
                Built for the Rockies,
                <br />
                Engineered for Life.
              </h2>
            </div>
            <div className="max-w-sm"></div>
          </div>

          {/* Flagship Roofing Banner */}
          <div className="relative bg-slate-950 rounded-sm overflow-hidden mb-10 group">
            <img
              src="https://images.unsplash.com/photo-1727777266423-6a33048e4894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mJTIwcmVwYWlyJTIwc2hpbmdsZXMlMjBob3VzZXxlbnwxfHx8fDE3NzIwNTgyMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Roofing"
              className="w-full h-72 object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center px-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  Flagship Service
                </span>
                <span className="bg-secondary/20 border border-secondary/40 text-secondary text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  OSHA 30 Certified Crews
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-white mb-3 tracking-tight">
                ROOFING &amp; STORM DAMAGE REPAIR
              </h3>
              <p className="text-slate-400 max-w-xl mb-6 leading-relaxed">
                Impact-resistant systems, full replacements,
                leak repairs & insurance claim assistance —
                designed for Colorado's heavy snow, hail, and
                high-altitude UV exposure.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all"
              >
                Explore Roofing Services{" "}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "KITCHEN & BATH REMODELING",
                desc: "High-end kitchen and bathroom transformations — custom cabinetry, quartz countertops, tile work, and premium mountain finishes.",
                icon: <HomeIcon className="h-8 w-8" />,
                img: imgKitchen,
              },
              {
                title: "DECKS & OUTDOOR LIVING",
                desc: "Durable custom decks, pergolas, and stamped concrete patios built for Colorado's outdoor lifestyle and mountain weather.",
                icon: <ShieldCheck className="h-8 w-8" />,
                img: imgDecks,
              },
              {
                title: "CUSTOM HOME BUILDING",
                desc: "Premium custom home construction from the ground up — structural excellence, quality craftsmanship, and personalized design throughout Northern Colorado.",
                icon: <Award className="h-8 w-8" />,
                img: imgWalkway,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 rounded-lg overflow-hidden border border-slate-100 transition-all duration-500"
              >
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-10">
                  <div className="bg-white w-16 h-16 flex items-center justify-center rounded-sm shadow-xl -mt-20 relative z-10 mb-6 group-hover:bg-secondary transition-colors">
                    {React.cloneElement(
                      service.icon as React.ReactElement,
                      {
                        className:
                          "h-8 w-8 text-secondary group-hover:text-white transition-colors",
                      },
                    )}
                  </div>
                  <h4 className="text-xl font-black text-slate-950 mb-4 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                    {service.desc}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-secondary font-bold uppercase tracking-widest text-xs group-hover:gap-4 transition-all"
                  >
                    Explore Service{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 border-2 border-slate-900 text-slate-900 font-black rounded-sm hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest group"
            >
              View All Services{" "}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary"></div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-secondary/15 border border-secondary/30 px-4 py-2 rounded-sm">
              <HardHat className="h-4 w-4 text-secondary" />
              <span className="text-secondary text-xs font-black uppercase tracking-widest">
                OSHA 30 Certified
              </span>
            </div>
            <div className="flex items-center gap-2 bg-white/8 border border-white/15 px-4 py-2 rounded-sm">
              <Award className="h-4 w-4 text-white" />
              <span className="text-white text-xs font-black uppercase tracking-widest">
                BBB Accredited
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
            READY TO BUILD YOUR{" "}
            <span className="text-secondary italic font-light">
              LEGACY?
            </span>
          </h2>
          <p className="text-slate-400 text-xl mb-4 max-w-2xl mx-auto font-light">
            Serving Fort Collins, Greeley, Loveland — and
            mountain communities including Walden &amp;
            Steamboat Springs, CO.
          </p>
          <p className="text-slate-500 text-sm mb-12 max-w-xl mx-auto">
            OSHA 30 Certified &amp; BBB Accredited – Safety
            &amp; quality on every job.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="px-12 py-5 bg-secondary text-white font-black rounded-sm hover:scale-105 transition-all shadow-xl shadow-secondary/20 tracking-widest uppercase"
            >
              Get My Free Estimate
            </Link>
            <Link
              to="/projects"
              className="px-12 py-5 bg-transparent border border-white/20 text-white font-black rounded-sm hover:bg-white/5 transition-all tracking-widest uppercase"
            >
              See Our Work
            </Link>
          </div>
        </div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </section>
    </div>
  );
}