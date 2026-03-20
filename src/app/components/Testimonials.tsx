import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Store } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Johnnie Leslie",
    initial: "J",
    date: "8 months ago",
    rating: 5,
    text: "NCC Construction helped us achieve our dream of adding a patio cover to our home. All this came together seamlessly and the quality is outstanding.",
    color: "bg-purple-600"
  },
  {
    id: 2,
    name: "Robert Bannerm...",
    initial: "R",
    date: "8 months ago",
    rating: 5,
    text: "What started out as a simple concrete slab, NCC Construction Services worked with us from concept to completion. Very professional team.",
    color: "bg-slate-500"
  },
  {
    id: 3,
    name: "Daniel Yee",
    initial: "D",
    date: "8 months ago",
    rating: 5,
    text: "I had a backyard patio covering installed and had new tile flooring installed. I am very satisfied with the results and the attention to detail.",
    color: "bg-slate-700"
  },
  {
    id: 4,
    name: "Sarah Miller",
    initial: "S",
    date: "1 year ago",
    rating: 5,
    text: "Excellent roofing work. They were fast, clean, and the price was exactly what they quoted. Highly recommended for any home project.",
    color: "bg-blue-600"
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    containScroll: 'trimSnaps'
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">What Our Customers Say About Us</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Rating Sidebar */}
          <div className="lg:w-1/4 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center justify-center h-auto">
            <div className="bg-blue-600 p-3 rounded-lg mb-4">
              <Store className="h-8 w-8 text-white" />
            </div>
            <h4 className="font-bold text-lg text-slate-900 mb-1">NCC Construction Services</h4>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-slate-900">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
            </div>
            <p className="text-slate-500 text-sm mb-4">Based on 12 reviews</p>
            <div className="text-xs text-slate-400 mb-6 flex items-center justify-center gap-1">
              powered by <span className="font-bold text-blue-500">G</span><span className="font-bold text-red-500">o</span><span className="font-bold text-yellow-500">o</span><span className="font-bold text-blue-500">g</span><span className="font-bold text-green-500">l</span><span className="font-bold text-red-500">e</span>
            </div>
            <button className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
              review us on <span className="font-bold">G</span>
            </button>
          </div>

          {/* Carousel Area */}
          <div className="lg:w-3/4 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {reviews.map((review) => (
                  <div key={review.id} className="flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_31%] min-w-0 pl-6">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 h-full flex flex-col shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-3 items-center">
                          <div className={`h-10 w-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold`}>
                            {review.initial}
                          </div>
                          <div>
                            <h5 className="font-bold text-slate-900 text-sm leading-tight">{review.name}</h5>
                            <p className="text-slate-400 text-xs">{review.date}</p>
                          </div>
                        </div>
                        <div className="text-blue-500 font-bold italic text-lg">G</div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed line-clamp-4 italic flex-1">
                        "{review.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={scrollPrev}
              className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button 
              onClick={scrollNext}
              className="absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
