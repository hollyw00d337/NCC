import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// ── Kitchen imports ──
import kitchen01 from "../../assets/kitchens/kitchen_01.jpeg";
import kitchen02 from "../../assets/kitchens/kitchen_02.jpeg";
import kitchen03 from "../../assets/kitchens/kitchen_03.jpeg";
import kitchen04 from "../../assets/kitchens/kitchen_04.jpeg";
import kitchen05 from "../../assets/kitchens/kitchen_05.jpeg";
import kitchen06 from "../../assets/kitchens/kitchen_06.jpeg";
import kitchen07 from "../../assets/kitchens/kitchen_07.jpeg";
import kitchen08 from "../../assets/kitchens/kitchen_08.jpeg";
import kitchen09 from "../../assets/kitchens/kitchen_09.jpeg";
import kitchen10 from "../../assets/kitchens/kitchen_10.jpeg";
import kitchen11 from "../../assets/kitchens/kitchen_11.jpeg";
import kitchen12 from "../../assets/kitchens/kitchen_12.jpeg";
import kitchen13 from "../../assets/kitchens/kitchen_13.jpeg";
import kitchen14 from "../../assets/kitchens/kitchen_14.jpeg";
import kitchen15 from "../../assets/kitchens/kitchen_15.jpeg";
import kitchen16 from "../../assets/kitchens/kitchen_16.jpeg";

// ── Tile imports ──
import tile01 from "../../assets/tile/tile_01.jpeg";
import tile02 from "../../assets/tile/tile_02.jpeg";
import tile03 from "../../assets/tile/tile_03.jpeg";
import tile04 from "../../assets/tile/tile_04.jpeg";
import tile05 from "../../assets/tile/tile_05.jpeg";
import tile06 from "../../assets/tile/tile_06.jpeg";
import tile07 from "../../assets/tile/tile_07.jpeg";
import tile08 from "../../assets/tile/tile_08.jpeg";
import tile09 from "../../assets/tile/tile_09.jpeg";
import tile10 from "../../assets/tile/tile_10.jpeg";
import tile11 from "../../assets/tile/tile_11.jpeg";
import tile12 from "../../assets/tile/tile_12.jpeg";
import tile13 from "../../assets/tile/tile_13.jpeg";
import tile14 from "../../assets/tile/tile_14.jpeg";

// ── Concrete imports ──
import concrete01 from "../../assets/concrete/concrete_01.jpeg";
import concrete02 from "../../assets/concrete/concrete_02.jpeg";
import concrete03 from "../../assets/concrete/concrete_03.jpeg";
import concrete04 from "../../assets/concrete/concrete_04.jpeg";
import concrete05 from "../../assets/concrete/concrete_05.jpeg";
import concrete06 from "../../assets/concrete/concrete_06.jpeg";
import concrete07 from "../../assets/concrete/concrete_07.jpeg";
import concrete08 from "../../assets/concrete/concrete_08.jpeg";
import concrete09 from "../../assets/concrete/concrete_09.jpeg";
import concrete10 from "../../assets/concrete/concrete_10.jpeg";
import concrete11 from "../../assets/concrete/concrete_11.jpeg";
import concrete12 from "../../assets/concrete/concrete_12.jpeg";
import concrete13 from "../../assets/concrete/concrete_13.jpeg";
import concrete14 from "../../assets/concrete/concrete_14.jpeg";
import concrete15 from "../../assets/concrete/concrete_15.jpeg";
import concrete16 from "../../assets/concrete/concrete_16.jpeg";
import concrete17 from "../../assets/concrete/concrete_17.jpeg";
import concrete18 from "../../assets/concrete/concrete_18.jpeg";
import concrete19 from "../../assets/concrete/concrete_19.jpeg";

interface Section {
  id: string;
  title: string;
  accent: string;
  accentColor: string;
  description: string;
  photos: string[];
}

const PREVIEW_COUNT = 6;

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
    accent: "from-secondary via-orange-400 to-yellow-500",
    accentColor: "rgb(215, 25, 33)",
    description:
      "Precision tile installations for floors, bathrooms, backsplashes, and entryways — built to last and crafted to impress.",
    photos: [
      tile01, tile02, tile03, tile04, tile05, tile06, tile07,
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

      {/* Sections */}
      {sections.map((section, sIdx) => {
        const isExpanded = expandedSections[section.id] ?? false;
        const hasMore = section.photos.length > PREVIEW_COUNT;
        const visiblePhotos = isExpanded ? section.photos : section.photos.slice(0, PREVIEW_COUNT);
        const hiddenCount = section.photos.length - PREVIEW_COUNT;

        return (
          <div key={section.id} className={`${sIdx % 2 === 0 ? "bg-slate-950" : "bg-slate-900/50"}`}>
            <div className="container mx-auto px-6 lg:px-12 py-20">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`h-[3px] w-16 bg-gradient-to-r ${section.accent}`} />
                  <span className="text-slate-500 font-mono text-xs uppercase tracking-[0.3em]">
                    {String(sIdx + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
                  <span className={`text-transparent bg-clip-text bg-gradient-to-r ${section.accent}`}>
                    {section.title}
                  </span>
                </h2>
                <p className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
                  {section.description}
                </p>
              </motion.div>

              {/* Gallery */}
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
                <Masonry gutter="12px">
                  {visiblePhotos.map((src, pIdx) => (
                    <motion.div
                      key={`${section.id}-${pIdx}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: pIdx < PREVIEW_COUNT ? (pIdx % 3) * 0.08 : (pIdx - PREVIEW_COUNT) * 0.03 }}
                      className="group relative overflow-hidden rounded-sm cursor-pointer"
                      onClick={() => openLightbox(sIdx, pIdx)}
                    >
                      <img
                        src={src}
                        alt={`NCC LLC ${section.title.toLowerCase()} project ${pIdx + 1}`}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                      />

                      {/* Overlay gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Border on hover */}
                      <div className="absolute inset-0 border border-white/0 group-hover:border-secondary/40 transition-colors duration-300 pointer-events-none rounded-sm" />
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>

              {/* Expand / Collapse Button */}
              {hasMore && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-10 flex justify-center"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="group/btn relative flex items-center gap-3 px-8 py-4 rounded-sm border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <span className="text-sm font-black uppercase tracking-widest text-slate-300 group-hover/btn:text-white transition-colors">
                      {isExpanded ? "Show Less" : `View All ${section.photos.length} Photos`}
                    </span>
                    <span
                      className="flex items-center justify-center w-7 h-7 rounded-full transition-colors"
                      style={{ backgroundColor: `${section.accentColor}20` }}
                    >
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" style={{ color: section.accentColor }} />
                      ) : (
                        <ChevronDown className="h-4 w-4" style={{ color: section.accentColor }} />
                      )}
                    </span>
                    {!isExpanded && (
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${section.accentColor}15`,
                          color: section.accentColor,
                        }}
                      >
                        +{hiddenCount}
                      </span>
                    )}
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        );
      })}

      {/* CTA Section */}
      <div className="bg-slate-900 py-24 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            READY TO START YOUR <span className="text-secondary italic font-light">PROJECT?</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            From the initial consultation to the final walkthrough, NCC LLC is your trusted partner for quality
            construction in Colorado.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-secondary text-white font-black rounded-sm hover:scale-105 transition-all shadow-xl shadow-secondary/20 uppercase tracking-widest"
          >
            Get a Free Quote <ArrowRight className="h-5 w-5" />
          </Link>
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