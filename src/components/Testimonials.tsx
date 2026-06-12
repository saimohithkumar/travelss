import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-slate-900 text-white relative">
      {/* Visual glowing effects */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3.5 py-1.5 rounded-full inline-block border border-amber-500/20">
            Pilgrim Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Loved by Thousands of <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">Blessed Travellers</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Read stories of families, pilgrims, and tour groups who hired Sri Ganesha Travels for their spiritual journey to Tirupati &amp; surrounding temples.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-royal-950/70 border border-white/5 hover:border-amber-500/20 rounded-3xl p-6 sm:p-8 relative flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/[0.04]"
            >
              {/* Giant icon accent */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/[0.03] group-hover:text-amber-500/10 transition-colors pointer-events-none" />

              <div className="space-y-6">
                {/* Five Stars Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-none" />
                  ))}
                </div>

                {/* Review Review Text */}
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Profile details */}
              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-white/5">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-royal-950 font-bold uppercase text-sm shadow">
                  {testimonial.name.slice(0, 2)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h4>
                  <span className="text-xs text-gray-400 flex items-center gap-1 font-medium">
                    📍 {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust metrics block footer */}
        <div className="bg-royal-950/40 border border-white/5 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-4xl mx-auto">
          <div className="pt-4 md:pt-0 pb-4 md:pb-0">
            <span className="font-display font-black text-3xl text-amber-400 block mb-1">99.2%</span>
            <span className="text-xs text-gray-300 font-medium">Customer Satisfaction Index</span>
          </div>
          <div className="pt-4 md:pt-0 pb-4 md:pb-0">
            <span className="font-display font-black text-3xl text-amber-400 block mb-1">15 Mins</span>
            <span className="text-xs text-gray-300 font-medium">Average Railway/Airport Pickup Wait Time</span>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="font-display font-black text-3xl text-amber-400 block mb-1">Zero Cost</span>
            <span className="text-xs text-gray-300 font-medium">Cancellation Fee up to 12 Hrs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
