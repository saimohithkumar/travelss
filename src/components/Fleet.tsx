import { Users, Briefcase, Snowflake, CheckCircle2, ChevronRight } from 'lucide-react';
import { Vehicle } from '../types';
import { VEHICLES } from '../data';

interface FleetProps {
  onSelectVehicle: (vehicleId: string) => void;
}

export default function Fleet({ onSelectVehicle }: FleetProps) {
  return (
    <section id="fleet" className="py-20 px-4 md:px-8 bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full inline-block">
            Our Premium Fleet Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal-950 leading-tight">
            Select the Ideal Ride for Your <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Tirupati Yatra</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            All our cabs are strictly in superb aesthetic condition, feature-packed with ice-cold air conditioning, and driven by well-bebehaved, background-checked local drivers.
          </p>
        </div>

        {/* Fleet Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VEHICLES.map((vehicle: Vehicle) => (
            <div 
              key={vehicle.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-royal-950/[0.04] hover:shadow-2xl hover:shadow-orange-500/[0.08] transition-all duration-300 border border-slate-100 flex flex-col group"
            >
              {/* Vehicle Image Container */}
              <div className="relative h-56 bg-slate-100 overflow-hidden">
                {/* Vehicle Image */}
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                {/* Category Pin Badge */}
                <span className="absolute top-4 left-4 bg-royal-900/90 text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow border border-white/10">
                  {vehicle.type}
                </span>
              </div>

              {/* Core Specs Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-royal-950 group-hover:text-amber-600 transition-colors">
                      {vehicle.name}
                    </h3>
                    {/* Fast Specs Row */}
                    <div className="flex items-center gap-3.5 mt-2.5 text-xs text-gray-500 font-medium">
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Users className="w-3.5 h-3.5 text-orange-500" />
                        {vehicle.capacity}
                      </span>
                      <span className="flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md">
                        <Briefcase className="w-3.5 h-3.5 text-orange-500" />
                        {vehicle.baggage}
                      </span>
                      {vehicle.AC && (
                        <span className="flex items-center gap-1 bg-amber-500/10 text-amber-700 px-2.5 py-1 rounded-md font-bold text-[10px] uppercase tracking-wider">
                          <Snowflake className="w-3 h-3 text-amber-600 animate-spin-slow" />
                          AC Cab
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed border-t border-slate-100 pt-3">
                    {vehicle.bestFor}
                  </p>

                  {/* Bullet Bullet Features */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Premium Features Includes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-gray-600">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Booking Call Action button */}
                <button 
                  onClick={() => onSelectVehicle(vehicle.id)}
                  className="w-full bg-slate-900 hover:bg-gradient-to-r hover:from-amber-500 hover:to-orange-500 text-white hover:text-royal-955 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  Book {vehicle.type}
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Note Info */}
        <div className="bg-amber-500/5 hover:bg-amber-500/10 border border-amber-500/10 rounded-2xl p-5 text-center text-xs text-amber-850 hover:text-amber-900 transition-colors max-w-2xl mx-auto font-medium">
          💡 <strong>Need customizable schedules or multi-destination rates?</strong> Click any button above to select your vehicle, fill the quick options and chat with us on WhatsApp for specialized discounts on custom temple runs.
        </div>
      </div>
    </section>
  );
}
