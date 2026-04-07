import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// ── Kitchen imports ──
import kitchen01 from "../../assets/Kitchens/kitchen_01.jpeg";
import kitchen02 from "../../assets/Kitchens/kitchen_02.jpeg";
import kitchen03 from "../../assets/Kitchens/kitchen_03.jpeg";
import kitchen04 from "../../assets/Kitchens/kitchen_04.jpeg";
import kitchen05 from "../../assets/Kitchens/kitchen_05.jpeg";
import kitchen06 from "../../assets/Kitchens/kitchen_06.jpeg";
import kitchen07 from "../../assets/Kitchens/kitchen_07.jpeg";
import kitchen08 from "../../assets/Kitchens/kitchen_08.jpeg";
import kitchen09 from "../../assets/Kitchens/kitchen_09.jpeg";
import kitchen10 from "../../assets/Kitchens/kitchen_10.jpeg";
import kitchen11 from "../../assets/Kitchens/kitchen_11.jpeg";
import kitchen12 from "../../assets/Kitchens/kitchen_12.jpeg";
import kitchen13 from "../../assets/Kitchens/kitchen_13.jpeg";
import kitchen14 from "../../assets/Kitchens/kitchen_14.jpeg";
import kitchen15 from "../../assets/Kitchens/kitchen_15.jpeg";
import kitchen16 from "../../assets/Kitchens/kitchen_16.jpeg";

// ── Tile imports ──
import tile01 from "../../assets/Tile/tile_01.jpeg";
import tile02 from "../../assets/Tile/tile_02.jpeg";
import tile03 from "../../assets/Tile/tile_03.jpeg";
import tile04 from "../../assets/Tile/tile_04.jpeg";
import tile05 from "../../assets/Tile/tile_05.jpeg";
import tile06 from "../../assets/Tile/tile_06.jpeg";
import tile07 from "../../assets/Tile/tile_07.jpeg";
import tile08 from "../../assets/Tile/tile_08.jpeg";
import tile09 from "../../assets/Tile/tile_09.jpeg";
import tile10 from "../../assets/Tile/tile_10.jpeg";
import tile11 from "../../assets/Tile/tile_11.jpeg";
import tile12 from "../../assets/Tile/tile_12.jpeg";
import tile13 from "../../assets/Tile/tile_13.jpeg";
import tile14 from "../../assets/Tile/tile_14.jpeg";

// ── Concrete imports ──
import concrete01 from "../../assets/Concrete/concrete_01.jpeg";
import concrete02 from "../../assets/Concrete/concrete_02.jpeg";
import concrete03 from "../../assets/Concrete/concrete_03.jpeg";
import concrete04 from "../../assets/Concrete/concrete_04.jpeg";
import concrete05 from "../../assets/Concrete/concrete_05.jpeg";
import concrete06 from "../../assets/Concrete/concrete_06.jpeg";
import concrete07 from "../../assets/Concrete/concrete_07.jpeg";
import concrete08 from "../../assets/Concrete/concrete_08.jpeg";
import concrete09 from "../../assets/Concrete/concrete_09.jpeg";
import concrete10 from "../../assets/Concrete/concrete_10.jpeg";
import concrete11 from "../../assets/Concrete/concrete_11.jpeg";
import concrete12 from "../../assets/Concrete/concrete_12.jpeg";
import concrete13 from "../../assets/Concrete/concrete_13.jpeg";
import concrete14 from "../../assets/Concrete/concrete_14.jpeg";
import concrete15 from "../../assets/Concrete/concrete_15.jpeg";
import concrete16 from "../../assets/Concrete/concrete_16.jpeg";
import concrete17 from "../../assets/Concrete/concrete_17.jpeg";
import concrete18 from "../../assets/Concrete/concrete_18.jpeg";
import concrete19 from "../../assets/Concrete/concrete_19.jpeg";

// ── Masonry & Stucco imports ──
import masonry01 from "../../assets/mansory/concrete.jpeg";
import masonry02 from "../../assets/mansory/concrete1.jpeg";
import masonry03 from "../../assets/mansory/concrete2.jpeg";
import masonry04 from "../../assets/mansory/concrete3.jpeg";
import masonry05 from "../../assets/mansory/concrete4.jpeg";
import masonry06 from "../../assets/mansory/concrete5.jpeg";
import masonry07 from "../../assets/mansory/concrete6.jpeg";
import masonry08 from "../../assets/mansory/concrete7.jpeg";
import masonry09 from "../../assets/mansory/concrete8.jpeg";
import masonry10 from "../../assets/mansory/concrete9.jpeg";
import masonry11 from "../../assets/mansory/concrete10.jpeg";
import masonry12 from "../../assets/mansory/concrete11.jpeg";
import masonry13 from "../../assets/mansory/concrete12.jpeg";
import masonry14 from "../../assets/mansory/concrete13.jpeg";
import masonry15 from "../../assets/mansory/concrete14.jpeg";
import masonry16 from "../../assets/mansory/concrete15.jpeg";
import masonry17 from "../../assets/mansory/concrete16.jpeg";
import masonry18 from "../../assets/mansory/concrete17.jpeg";
import masonry19 from "../../assets/mansory/concrete18.jpeg";
import masonry20 from "../../assets/mansory/concrete19.jpeg";
import masonry21 from "../../assets/mansory/concrete20.jpeg";
import masonry22 from "../../assets/mansory/concrete21.jpeg";

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
    description:
      "Complete kitchen transformations — custom cabinetry, countertops, backsplashes, and modern layouts designed for everyday living.",
    photos: [
      kitchen01, kitchen02, kitchen03, kitchen04, kitchen05,
      kitchen06, kitchen07, kitchen08, kitchen09, kitchen10,
      kitchen11, kitchen12, kitchen13, kitchen14, kitchen15,
      kitchen16,
    ],
  },
  {
    id: "tile",
    title: "TILE",
    accent: "from-emerald-600 via-teal-500 to-cyan-400",
    accentColor: "rgb(16, 185, 129)",
    description:
      "Precision tile installations for floors, bathrooms, backsplashes, and entryways — built to last and crafted to impress.",
    photos: [
      tile05, tile02, tile03, tile04, tile01, tile06, tile07,
      tile08, tile09, tile10, tile11, tile12, tile13, tile14,
    ],
  },
  {
    id: "concrete",
    title: "CONCRETE WORK",
    accent: "from-blue-400 via-cyan-400 to-teal-400",
    accentColor: "rgb(96, 165, 250)",
    description:
      "From foundations and slabs to walkways and driveways — quality concrete work that stands the test of time.",
    photos: [
      concrete01, concrete02, concrete03, concrete04, concrete05,
      concrete06, concrete07, concrete08, concrete09, concrete10,
      concrete11, concrete12, concrete13, concrete14, concrete15,
      concrete16, concrete17, concrete18, concrete19,
    ],
  },
  {
    id: "masonry",
    title: "MASONRY & STUCCO",
    accent: "from-violet-400 via-purple-400 to-fuchsia-400",
    accentColor: "rgb(167, 139, 250)",
    description:
      "Expert masonry and stucco work — natural stone, brickwork, pavers, flagstone, veneer, EIFS and traditional hard coat stucco systems built to last.",
    photos: [
      masonry01, masonry02, masonry03, masonry04, masonry05,
      masonry06, masonry07, masonry08, masonry09, masonry10,
      masonry11, masonry12, masonry13, masonry14, masonry15,
      masonry16, masonry17, masonry18, masonry19, masonry20,
      masonry21, masonry22,
    ],
  },
];

// Flatten all photos for lightbox navigation
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

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + allPhotos.length) % allPhotos.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % allPhotos.length);
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <div className="relative bg-slate-950 pt-32 pb-20 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(215,25,33,0.08)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-secondary" />
            <span className="text-secondary font-black text-xs uppercase tracking-[0.4em]">Our Work</span>
            <div className="h-[2px] w-12 bg-secondary" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-yellow-500">
              PROJECTS
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Real work. Real results. A visual portfolio of NCC LLC craftsmanship across Northern Colorado.
          </p>
        </div>
      </div>

      {/* Sections — Compact Accordion */}
      {/* Sections — Visual Cards Accordion */}
      <div className="container mx-auto px-6 lg:px-12 py-12">
        <div className="space-y-8">
          {sections.map((section, sIdx) => {
            const isExpanded = expandedSections[section.id] ?? false;

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-sm overflow-hidden border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 transition-all duration-500"
              >
                {/* CABECERA TIPO BANNER (Imagen + Descripción) */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full relative group cursor-pointer overflow-hidden flex flex-col md:flex-row min-h-[350px] text-left"
                >
                  {/* Lado de la Imagen */}
                  <div className="relative w-full md:w-2/5 h-72 md:h-[450px] overflow-hidden">
                    <img
                      src={section.photos[0]}
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />

                    <div className="absolute bottom-4 left-4">
                      <span className="bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1.5 border border-white/10 uppercase tracking-widest">
                        {section.photos.length} Project Photos
                      </span>
                    </div>
                  </div>

                  {/* Lado del Contenido */}
                  <div className="relative flex-1 p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`h-[2px] w-8 bg-gradient-to-r ${section.accent}`} />
                      <span className="text-[10px] font-mono text-slate-500 tracking-[0.4em] uppercase">
                        Portfolio Section {String(sIdx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className={`text-4xl md:text-5xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r ${section.accent}`}>
                      {section.title}
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-8 font-light leading-relaxed">
                      {section.description}
                    </p>

                    <div className="mt-auto">
                      <div
                        className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-full group-hover:border-white/30 transition-all"
                        style={{ backgroundColor: isExpanded ? `${section.accentColor}15` : 'transparent' }}
                      >
                        <span className="text-white font-black text-[10px] uppercase tracking-widest">
                          {isExpanded ? "Hide Gallery" : "View Gallery"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
                          style={{ color: section.accentColor }}
                        />
                      </div>
                    </div>
                  </div>
                </button>

                {/* GALERÍA MASONRY (Se revela al expandir) */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="bg-slate-950/40 border-t border-white/5"
                    >
                      <div className="p-6 md:p-12">
                        <div className="flex items-center gap-4 mb-10 text-slate-600">
                          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Full Project Gallery</span>
                          <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
                          <Masonry gutter="16px">
                            {section.photos.map((src, pIdx) => (
                              <motion.div
                                key={`${section.id}-${pIdx}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: (pIdx % 10) * 0.05 }}
                                className="group relative overflow-hidden rounded-sm cursor-pointer shadow-2xl border border-white/5"
                                onClick={() => openLightbox(sIdx, pIdx)}
                              >
                                <img
                                  src={src}
                                  alt={`Gallery ${pIdx}`}
                                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </motion.div>
                            ))}
                          </Masonry>
                        </ResponsiveMasonry>
                      </div>
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