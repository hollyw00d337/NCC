import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // O "motion/react" según tu versión
import { X, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// ── 1. ESCANEO AUTOMÁTICO DE FOTOS ──
// Esto jala TODO lo que esté en las carpetas sin importar cuántas fotos sean
const kitchenPhotos = Object.values(import.meta.glob("../../assets/Kitchens/*.{jpeg,jpg,png,JPG}", { eager: true, import: 'default' })) as string[];
const tilePhotos = Object.values(import.meta.glob("../../assets/Tile/*.{jpeg,jpg,png,JPG}", { eager: true, import: 'default' })) as string[];
const concretePhotos = Object.values(import.meta.glob("../../assets/Concrete/*.{jpeg,jpg,png,JPG}", { eager: true, import: 'default' })) as string[];
const masonryPhotos = Object.values(import.meta.glob("../../assets/mansory/*.{jpeg,jpg,png,JPG}", { eager: true, import: 'default' })) as string[];
const roofPhotos = Object.values(import.meta.glob("../../assets/roofing/*.{jpeg,jpg,png,JPG}", { eager: true, import: 'default' })) as string[];


interface Section {
  id: string;
  title: string;
  accent: string;
  accentColor: string;
  description: string;
  photos: string[];
}

const sections: Section[] = [
  {
    id: "kitchens",
    title: "KITCHENS",
    accent: "from-amber-400 via-orange-400 to-red-400",
    accentColor: "rgb(251, 191, 36)",
    description: "Complete kitchen transformations — custom cabinetry, countertops, backsplashes, and modern layouts designed for everyday living.",
    photos: kitchenPhotos,
  },
  {
    id: "tile",
    title: "TILE",
    accent: "from-emerald-600 via-teal-500 to-cyan-400",
    accentColor: "rgb(16, 185, 129)",
    description: "Precision tile installations for floors, bathrooms, backsplashes, and entryways — built to last and crafted to impress.",
    photos: tilePhotos,
  },
  {
    id: "concrete",
    title: "CONCRETE WORK",
    accent: "from-blue-400 via-cyan-400 to-teal-400",
    accentColor: "rgb(96, 165, 250)",
    description: "From foundations and slabs to walkways and driveways — quality concrete work that stands the test of time.",
    photos: concretePhotos,
  },
  {
    id: "masonry",
    title: "MASONRY & STUCCO",
    accent: "from-violet-400 via-purple-400 to-fuchsia-400",
    accentColor: "rgb(167, 139, 250)",
    description: "Expert masonry and stucco work — natural stone, brickwork, veneer, and traditional stucco systems built to last.",
    photos: masonryPhotos,
  },
  {
    id: "roofing",
    title: "ROOFING",
    accent: "from-red-400 via-orange-400 to-amber-400",
    accentColor: "rgb(251, 191, 36)",
    description: "",
    photos: roofPhotos,
  },
];

const allPhotos = sections.flatMap((s) => s.photos);

export default function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const openLightbox = (sectionIdx: number, photoIdx: number) => {
    let absolute = 0;
    for (let i = 0; i < sectionIdx; i++) {
      absolute += sections[i].photos.length;
    }
    absolute += photoIdx;
    setLightboxIndex(absolute);
  };

  const closeLightbox = () => setLightboxIndex(null);
  const goPrev = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + allPhotos.length) % allPhotos.length : null));
  const goNext = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % allPhotos.length : null));

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header (Igual que el tuyo) */}
      <div className="relative pt-32 pb-20 text-center text-white overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-yellow-500">PROJECTS</span></h1>
      </div>

      {/* ── SECCIÓN DE TARJETAS TIPO BANNER ── */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="space-y-8">
          {sections.map((section, sIdx) => {
            const isExpanded = expandedSections[section.id] ?? false;

            return (
              <motion.div key={section.id} className="rounded-sm overflow-hidden border border-white/5 bg-slate-900/20 shadow-xl">
                {/* Banner Clickable */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex flex-col md:flex-row min-h-[400px] text-left group"
                >
                  <div className="w-full md:w-2/5 h-72 md:h-[450px] overflow-hidden relative">
                    <img
                      src={section.photos[0]}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      alt={section.title}
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                  </div>

                  <div className="flex-1 p-10 flex flex-col justify-center">
                    <div className={`h-[2px] w-12 mb-6 bg-gradient-to-r ${section.accent}`} />
                    <h2 className={`text-4xl md:text-5xl font-black mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${section.accent}`}>
                      {section.title}
                    </h2>
                    <p className="text-slate-400 text-lg mb-8 font-light leading-relaxed">{section.description}</p>
                    <div className="mt-auto flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                      {isExpanded ? "Close Gallery" : "View Project Gallery"}
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} style={{ color: section.accentColor }} />
                    </div>
                  </div>
                </button>

                {/* Galería que aparece al expandir */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-slate-950/40 border-t border-white/5 p-8"
                    >
                      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
                        <Masonry gutter="16px">
                          {section.photos.map((src, pIdx) => (
                            <motion.img
                              key={pIdx}
                              src={src}
                              onClick={() => openLightbox(sIdx, pIdx)}
                              className="w-full rounded-sm cursor-pointer hover:opacity-80 transition-opacity"
                            />
                          ))}
                        </Masonry>
                      </ResponsiveMasonry>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 z-10 bg-white/10 hover:bg-secondary text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allPhotos[lightboxIndex]}
                alt={`NCC LLC project ${lightboxIndex + 1}`}
                className="max-h-[78vh] max-w-full object-contain rounded-sm shadow-2xl"
              />
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 z-10 bg-white/10 hover:bg-secondary text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-500 text-xs font-mono uppercase tracking-widest">
              {lightboxIndex + 1} / {allPhotos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}