import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import imgRoofing2 from "../../assets/dff8ee71d58f85e190ab3e01f37ec45149d6a786.png";
import imgRoofing from "../../assets/b50090c89b546ab9b195ac22a28d5824694ae0dc.png";
import imgBasement from "../../assets/9b9be97e457bc094618b626fd34d06c2f41919b7.png";
import imgDecks from "../../assets/2ac8d1523147818b3c1282394425a316a0484b87.png";
import imgHomeAdditions from "../../assets/55a529a018cf753fcd605f89208146c4c3a9f912.png";
import imgFlooring from "../../assets/d054f1e986ae89d9b78f22c1e73e48022efa5374.png";
import imgPainting from "../../assets/6b6e141c231b8ca93ccaa2a49c9c3a046cdc596d.png";
import imgKitchen from "../../assets/d158dd299136b99ee896766d38aeb4eea63208d0.png";
import imgKitchen2 from "../../assets/5731aec71180adcce39d30731e1d90ca6e2090a8.png";
import imgWindowsDoors from "../../assets/188037999d00ee9cb89df9f75c003be506273c32.png";
import imgCustomHome from "../../assets/360c771a15cc39a97e2f8946a53d41923b997819.png";
import imgWalkway from "../../assets/5dff2e8a0be5ebe5827005c8cbaad6720bca5384.png";
import imgTrench from "../../assets/9497f52d00cf5573df7b561ddc8692376a4cd1ac.png";
import imgConcreteSlab from "../../assets/d7d62d37530960cd0792b68673f20d34027faf60.png";
import imgHomeReno from "../../assets/8a790d09478182ed7b3e628cfb0d5d75068906ef.png";
import imgFoundation from "../../assets/c0bd000d1975851fd35899bd0b36024423f6e344.png";
import imgStampedEntry from "../../assets/3a0abfcd7def748b07255641c76dc71fbd9d8deb.png";
import imgBasementBath from "../../assets/80b00cbc36c96ebfc974c71af99af14ebf69db38.png";

interface Photo {
  src: string;
  label?: string;
}

const photos: Photo[] = [
  {
    src: imgRoofing2,
    label: "Roof Replacement — Residential",
  },
  {
    src: imgFoundation,
    label: "Foundation Wall Forms — New Construction",
  },
  {
    src: imgKitchen,
    label: "Full Kitchen Remodel",
  },
  {
    src: imgKitchen2,
    label: "Kitchen Remodel — Marble Countertops & Tile Backsplash",
  },
  {
    src: imgHomeReno,
    label: "Home Exterior Renovation & Pergola Framing",
  },
  {
    src: imgBasement,
    label: "Basement Finishing",
  },
  {
    src: imgBasementBath,
    label: "Basement Bathroom & Flooring Renovation",
  },
  {
    src: imgConcreteSlab,
    label: "Concrete Garage Slab — Mountain Property",
  },
  {
    src: imgStampedEntry,
    label: "Stamped Concrete Walkway & Entry Steps",
  },
  {
    src: imgDecks,
    label: "Custom Deck Build",
  },
  {
    src: imgHomeAdditions,
    label: "Home Addition & Structural Work",
  },
  {
    src: imgPainting,
    label: "Exterior Painting",
  },
  {
    src: imgFlooring,
    label: "Hardwood & Tile Flooring Installation",
  },
  {
    src: imgWindowsDoors,
    label: "Windows & Entry Door Replacement",
  },
  {
    src: imgRoofing,
    label: "Storm Damage Roof Repair",
  },
  {
    src: imgCustomHome,
    label: "Custom Home Build — Northern Colorado",
  },
  {
    src: imgWalkway,
    label: "Concrete Patio & Walkway",
  },
  {
    src: imgTrench,
    label: "Foundation Excavation & Footing Work",
  },
];

export default function Projects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length);
  };

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % photos.length);
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
            OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-orange-400 to-yellow-500">PROJECTS</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Real work. Real results. A visual portfolio of NCC LLC craftsmanship across Northern Colorado.
          </p>
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="container mx-auto px-6 lg:px-12 pb-32">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
          <Masonry gutter="12px">
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-sm cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={photo.src}
                  alt={photo.label ?? `NCC LLC project ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Overlay gradient always present at bottom when label exists */}
                {photo.label && (
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}

                {/* Label — appears on hover */}
                {photo.label && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xs font-black uppercase tracking-widest leading-tight drop-shadow-lg">
                      {photo.label}
                    </span>
                    <div className="h-[2px] w-8 bg-secondary mt-1" />
                  </div>
                )}

                {/* Border on hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-secondary/40 transition-colors duration-300 pointer-events-none rounded-sm" />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 py-24 border-t border-white/5">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
            READY TO START YOUR <span className="text-secondary italic font-light">PROJECT?</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-12 font-light">
            From the initial consultation to the final walkthrough, NCC LLC is your trusted partner for quality construction in Colorado.
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
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 z-10 bg-white/10 hover:bg-secondary text-white p-3 rounded-full transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Image + label */}
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
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].label ?? `NCC LLC project ${lightboxIndex + 1}`}
                className="max-h-[78vh] max-w-full object-contain rounded-sm shadow-2xl"
              />
              {photos[lightboxIndex].label && (
                <div className="flex items-center gap-3">
                  <div className="h-[2px] w-6 bg-secondary flex-shrink-0" />
                  <span className="text-white text-sm font-black uppercase tracking-widest">
                    {photos[lightboxIndex].label}
                  </span>
                  <div className="h-[2px] w-6 bg-secondary flex-shrink-0" />
                </div>
              )}
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 z-10 bg-white/10 hover:bg-secondary text-white p-3 rounded-full transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-slate-500 text-xs font-mono uppercase tracking-widest">
              {lightboxIndex + 1} / {photos.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}