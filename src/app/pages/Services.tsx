import { ArrowRight, Hammer, ShieldCheck, PaintBucket, HardHat, Home as HomeIcon, Droplets, Bath, ChefHat, Award, Grid3X3, Layers, DoorOpen, TreePine, Sofa, Landmark } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import imgConcrete from "../../assets/concrete.jpeg";
import imgTrench from "../../assets/9497f52d00cf5573df7b561ddc8692376a4cd1ac.png";
import imgKitchen from "../../assets/Kitchens/kitchen_01.jpeg";
import imgCustomHome from "../../assets/360c771a15cc39a97e2f8946a53d41923b997819.png";
import imgWindowsDoors from "../../assets/188037999d00ee9cb89df9f75c003be506273c32.png";
import imgRoofing from "../../assets/b50090c89b546ab9b195ac22a28d5824694ae0dc.png";
import imgRoofing2 from "../../assets/dff8ee71d58f85e190ab3e01f37ec45149d6a786.png";
import imgBasement from "../../assets/basement.jpeg";
import imgDecks from "../../assets/2ac8d1523147818b3c1282394425a316a0484b87.png";
import imgHomeAdditions from "../../assets/home.jpeg";
import imgFlooring from "../../assets/d054f1e986ae89d9b78f22c1e73e48022efa5374.png";
import imgPainting from "../../assets/painting_house.jpg.png";
import imgMasonry from "../../assets/mansory_stucco2.jpeg";

export default function Services() {
  const services = [
    {
      flagship: true,
      icon: <Hammer className="h-12 w-12 text-white" />,
      title: "Roofing & Storm Damage Repair",
      badge: "Flagship Service",
      desc: "Northern Colorado's trusted roofing experts. From complete replacements to emergency storm repairs — we handle hail damage, insurance claims, leak detection, and impact-resistant installations built for Colorado's high-altitude conditions.",
      features: ["Asphalt Shingles", "Natural Slate", "Decra Tile", "Metal Roofing", "Commercial & Residential", "TPO", "EDPM"],
      image: imgRoofing2
    },
    {
      icon: <ChefHat className="h-12 w-12 text-white" />,
      title: "Kitchen & Bathroom Remodeling",
      desc: "Transform your kitchen and bathrooms with custom cabinetry, quartz countertops, premium tile work, and modern fixtures — crafted to add comfort, function, and long-lasting value to your Colorado home.",
      features: ["Custom Cabinetry", "Quartz & Stone Countertops", "Tile & Shower Conversions", "Vanity & Fixture Upgrades", "Lighting Design", "Full Gut Renovations"],
      image: imgKitchen
    },
    {
      icon: <Sofa className="h-12 w-12 text-white" />,
      title: "Basement Finishing",
      desc: "Unlock the full potential of your home with a professionally finished basement. We handle framing, insulation, drywall, flooring, lighting, and egress windows — creating livable space that adds real value.",
      features: ["Framing & Insulation", "Drywall & Finishing", "Flooring Installation", "Lighting & Electrical", "Egress Windows", "Home Theater & Bar Areas"],
      image: imgBasement
    },
    {
      icon: <TreePine className="h-12 w-12 text-white" />,
      title: "Decks & Outdoor Living",
      desc: "Extend your living space outdoors with custom-built decks, pergolas, and patio covers. We use premium cedar, composite, and treated lumber — designed to endure Colorado's freeze-thaw cycles and mountain weather.",
      features: ["Custom Deck Design & Build", "Pergolas & Shade Structures", "Composite & Cedar Decking", "Railings & Built-ins", "Outdoor Kitchens", "Colorado Weather-Rated Materials"],
      image: imgDecks
    },
    {
      flagship: true,
      premium: true,
      icon: <Award className="h-12 w-12 text-white" />,
      title: "Custom Home Building",
      badge: "Premium Specialty",
      desc: "Build your dream home from the ground up with NCC LLC. Our full-service custom home building brings together design, structural expertise, and quality craftsmanship — delivering a one-of-a-kind home built for life in Northern Colorado.",
      features: ["Full Design-Build Service", "Architectural Coordination", "Custom Floor Plans", "High-End Finishes", "Energy-Efficient Construction", "Walden & Steamboat Coverage"],
      image: imgCustomHome
    },
    {
      icon: <HardHat className="h-12 w-12 text-white" />,
      title: "Home Additions & Structural Work",
      desc: "Need more space? We design and build seamless home additions — from master suite expansions to garage conversions and full structural builds. Our OSHA 30 certified crews ensure safe, code-compliant work from foundation to roof.",
      features: ["Master Suite Additions", "Garage Conversions & Expansions", "Room Additions", "Structural Engineering", "Foundation Work", "Permits & Inspections"],
      image: imgHomeAdditions
    },
    {
      icon: <PaintBucket className="h-12 w-12 text-white" />,
      title: "Interior & Exterior Painting",
      desc: "Professional painting services that transform your home with precision prep work, premium paints, and a clean finish. We handle everything from single rooms to full exterior repaints — with no mess left behind.",
      features: ["Interior Room Painting", "Exterior Painting", "Cabinet Refinishing", "Deck & Fence Staining", "Surface Prep & Repair", "Color Consultation"],
      image: imgPainting
    },
    {
      icon: <Grid3X3 className="h-12 w-12 text-white" />,
      title: "Flooring & Tile",
      desc: "Elevate your home's interior with expert flooring installation. We work with hardwood, LVP, ceramic and porcelain tile, natural stone, and carpet — delivering precision cuts, solid subfloor prep, and a flawless finish.",
      features: ["Hardwood & LVP Flooring", "Ceramic & Porcelain Tile", "Natural Stone Installation", "Shower & Bathroom Tile", "Subfloor Repair & Leveling", "Grout & Sealing"],
      image: imgFlooring
    },
    {
      icon: <DoorOpen className="h-12 w-12 text-white" />,
      title: "Windows & Doors",
      desc: "Improve energy efficiency, security, and curb appeal with new windows and doors. We install energy-rated double-pane windows, entry doors, patio doors, and more — with precise fitting and professional finishing.",
      features: ["Energy-Efficient Windows", "Entry Door Replacement", "Patio & Sliding Doors", "Storm Doors", "Trim & Casing Finish", "Weatherproofing & Sealing"],
      image: imgWindowsDoors
    },
    {
      icon: <Layers className="h-12 w-12 text-white" />,
      title: "Concrete Work",
      desc: "Expert concrete installations for driveways, patios, walkways, and foundations. Our stamped and decorative concrete options add beauty and durability built for Colorado's demanding freeze-thaw climate.",
      features: ["Driveways & Walkways", "Stamped Concrete Patios", "Foundations & Slabs", "Decorative Staining", "Crack Repair & Sealing", "Retaining Walls"],
      image: imgConcrete
    },
    {
      icon: <Landmark className="h-12 w-12 text-white" />,
      title: "Masonry & Stucco",
      desc: "Expert masonry and stucco services for residential and commercial properties. From natural stone and brickwork to EIFS and traditional hard coat stucco systems — built to last in Colorado's demanding climate.",
      features: ["Natural Stone", "Brickwork", "Pavers", "Flagstone Work", "Veneer", "EIFS Stucco System", "Traditional Hard Coat Stucco"],
      image: imgMasonry
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="relative bg-slate-950 pt-32 pb-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(215,25,33,0.08)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">NCC LLC</span>
            <div className="h-[2px] w-12 bg-secondary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter">
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-yellow-500">SERVICES</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            30+ years of combined experience serving Fort Collins, Greeley, Loveland, Walden &amp; Steamboat Springs, CO.
          </p>
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2 bg-secondary/15 border border-secondary/30 px-4 py-2 rounded-sm">
              <span className="text-secondary text-xs font-black uppercase tracking-widest">⛑ OSHA 30 Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/15 border border-secondary/30 px-4 py-2 rounded-sm">
              <span className="text-secondary text-xs font-black uppercase tracking-widest">★ BBB Accredited</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/15 border border-secondary/30 px-4 py-2 rounded-sm">
              <span className="text-secondary text-xs font-black uppercase tracking-widest">✓ Fully Licensed &amp; Insured</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            if (service.flagship) {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 bg-slate-900 rounded-sm overflow-hidden border border-secondary/40 group"
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Image — grande a la izquierda */}
                    <div className="relative lg:w-3/5 h-72 lg:h-auto overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900 hidden lg:block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent lg:hidden" />
                      <div className="absolute top-5 left-5">
                        <span className="text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-secondary">
                          {service.badge}
                        </span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="p-3 rounded-sm bg-secondary/20">
                          {service.icon}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-black text-white leading-tight">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 mb-7 leading-relaxed text-base">{service.desc}</p>
                      <div className="grid grid-cols-2 gap-2 mb-8">
                        {service.features.map((feat, fi) => (
                          <div key={fi} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-secondary" />
                            <span className="text-slate-300 text-sm">{feat}</span>
                          </div>
                        ))}
                      </div>
                      <Link
                        to="/contact"
                        className="w-full py-4 font-black rounded-sm bg-secondary text-white shadow-lg shadow-secondary/20 hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
                      >
                        Get My Free Estimate
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (index % 3) * 0.08 }}
                viewport={{ once: true }}
                className={`bg-slate-900 rounded-sm overflow-hidden border flex flex-col group hover:-translate-y-2 transition-transform duration-300 ${service.premium ? "border-yellow-500/30" : "border-white/5"
                  }`}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 bg-yellow-500">
                        {service.badge}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-2.5 rounded-sm flex-shrink-0 ${service.premium ? "bg-yellow-500/15" : "bg-white/5"}`}>
                      <div className="scale-50 origin-top-left w-6 h-6">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className={`text-xl font-black leading-tight ${service.premium ? "text-yellow-400" : "text-white"}`}>
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 mb-6 leading-relaxed">{service.desc}</p>

                  <div className="grid grid-cols-2 gap-2 mb-8 mt-auto">
                    {service.features.map((feat, fi) => (
                      <div key={fi} className="flex items-center gap-2">
                        <div className={`w-1 h-1 rounded-full flex-shrink-0 ${service.premium ? "bg-yellow-500" : "bg-secondary"}`} />
                        <span className="text-slate-400 text-xs">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-4 font-black rounded-sm hover:scale-105 transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs ${service.premium
                      ? "bg-yellow-500 text-slate-950 shadow-lg shadow-yellow-500/20"
                      : "bg-white/5 border border-white/10 text-white hover:bg-secondary hover:border-secondary"
                      }`}
                  >
                    Get My Free Estimate
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-20 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Need a Custom Project?</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-4">
            Don't see your specific need? We handle unique challenges across all of Northern Colorado.
          </p>
          <p className="text-slate-500 text-sm mb-10">Serving Fort Collins · Greeley · Loveland · Walden · Steamboat Springs, CO</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black rounded-sm hover:scale-105 transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest"
          >
            Get My Free Estimate <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}