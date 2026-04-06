import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import imgKitchen from "../../assets/Kitchens/kitchen_01.jpeg";
import imgRoofing2 from "../../assets/dff8ee71d58f85e190ab3e01f37ec45149d6a786.png";
import imgRoofing from "../../assets/b50090c89b546ab9b195ac22a28d5824694ae0dc.png";
import imgBasement from "../../assets/9b9be97e457bc094618b626fd34d06c2f41919b7.png";
import imgDecks from "../../assets/2ac8d1523147818b3c1282394425a316a0484b87.png";
import imgStampedEntry from "../../assets/3a0abfcd7def748b07255641c76dc71fbd9d8deb.png";
import { projectId, publicAnonKey } from "/utils/supabase/info";

const staticProjects = [
  {
    id: 1,
    title: "Roof Replacement — Residential",
    category: "Roofing",
    image: imgRoofing2,
  },
  {
    id: 2,
    title: "Storm Damage Roof Repair",
    category: "Roofing",
    image: imgRoofing,
  },
  {
    id: 3,
    title: "Full Kitchen Remodel",
    category: "Remodeling",
    image: imgKitchen,
  },
  {
    id: 4,
    title: "Stamped Concrete Walkway & Entry Steps",
    category: "Outdoor",
    image: imgStampedEntry,
  },
  {
    id: 5,
    title: "Custom Deck Build",
    category: "Outdoor",
    image: imgDecks,
  },
  {
    id: 6,
    title: "Basement Finishing",
    category: "Remodeling",
    image: imgBasement,
  }
];

const categories = ["All", "Roofing", "Remodeling", "Outdoor"];

export function Projects() {
  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState(staticProjects);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-71c1c944/projects`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        if (res.ok) {
          const data = await res.json();
          if (data.projects && data.projects.length > 0) {
            setProjects([...staticProjects, ...data.projects]);
          }
        }
      } catch (err) {
        console.error("Error fetching dynamic projects:", err);
      }
    };
    fetchProjects();
  }, []);

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="projects">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-secondary" />
              <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">
                Our Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter"
            >
              CRAFTSMANSHIP <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
                YOU CAN TRUST
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${filter === cat
                    ? "bg-secondary border-secondary text-white shadow-lg shadow-secondary/25"
                    : "bg-transparent border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-900 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 transition-opacity duration-300" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="mb-4 overflow-hidden">
                    <span className="inline-block px-3 py-1 bg-secondary/90 text-white text-[10px] font-black uppercase tracking-widest mb-3 backdrop-blur-md">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-black text-white leading-tight mb-1 uppercase tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-3 text-white font-bold uppercase tracking-widest text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    View Project <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-10 py-5 bg-transparent border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 hover:border-white/40 transition-all uppercase tracking-widest group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}