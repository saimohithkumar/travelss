import React from 'react';
import { Car, MapPin, Sparkles, Navigation, ShieldCheck, HeartHandshake } from 'lucide-react';
import heroBanner from '../assets/images/tirupati_banner_1781241552067.jpg';
import { VEHICLES } from '../data';

interface HeroProps {
  onQuickBook: (vehicleId: string, tripType: string) => void;
}

export default function Hero({ onQuickBook }: HeroProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const vehicleId = formData.get('vehicle') as string;
    const tripType = formData.get('tripType') as string;
    onQuickBook(vehicleId, tripType);
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center py-20 px-4 md:px-8 overflow-hidden bg-royal-950">
      {/* Background Image with Dark & Thermal Gradients */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBanner} 
          alt="Tirupathi Hills Sunrise Travel" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-subtleZoom"
          referrerPolicy="no-referrer"
        />
        {/* Colorful Gradient Overlays for Travel Trust Vibe (Deep blue, gold, orange) */}
        <div className="absolute inset-0 bg-gradient-to-r from-royal-950 via-royal-900/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-transparent to-royal-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 via-transparent to-amber-500/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Hand: Majestic Copywriting & Catchy Tagline */}
        <div className="lg:col-span-7 text-left space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase animate-bounce">
            <Sparkles className="w-4 h-4 text-amber-400" />
            Reliable • Affordable • Safe Cab Rental
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Seamless &amp; Comfortable <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 bg-clip-text text-transparent">
              Travels in Tirupati
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Welcome to <strong className="text-white">Sri Ganesha Travels</strong>. Embark on a premium travel experience with our high-quality fleet, well-trained local drivers, and zero-hassle bookings. Specialized in Tirumala temple yatra and outstation rentals.
          </p>

          {/* Quick Pillars Benefits */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mt-2">
            <div className="flex items-start gap-2.5 bg-royal-900/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all">
              <div className="p-2 rounded-lg bg-amber-500/15">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">No Hidden Fares</h4>
                <p className="text-xs text-gray-400">Pure fixed tariff. Transparent bills.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 bg-royal-900/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all">
              <div className="p-2 rounded-lg bg-orange-500/15">
                <Navigation className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Professional Guides</h4>
                <p className="text-xs text-gray-400">Safe, courteous Telugu &amp; Tamil drivers.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 bg-royal-900/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all">
              <div className="p-2 rounded-lg bg-amber-500/15">
                <Car className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">Pristine Vehicles</h4>
                <p className="text-xs text-gray-400">Regular checkups, perfect AC.</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 bg-royal-900/40 backdrop-blur-sm p-3.5 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all">
              <div className="p-2 rounded-lg bg-orange-500/15">
                <HeartHandshake className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm">24/7 Pickup Service</h4>
                <p className="text-xs text-gray-400">Anytime station/airport pickup.</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="pt-4 flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-amber-600 border border-royal-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">RK</div>
              <div className="w-9 h-9 rounded-full bg-blue-600 border border-royal-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">PS</div>
              <div className="w-9 h-9 rounded-full bg-indigo-600 border border-royal-900 flex items-center justify-center text-[10px] font-bold text-white uppercase">VR</div>
            </div>
            <div className="text-xs text-gray-300">
              <div className="flex items-center gap-1.5 font-medium text-white">
                <span className="text-amber-400">★★★★★</span> 4.9/5 Rating
              </div>
              <span>Based on 1,200+ satisfied pilgrims &amp; tourists</span>
            </div>
          </div>
        </div>

        {/* Right Hand: Quick Selector Widget Form */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl shadow-royal-950/50 border border-white relative">
            {/* Top Accents */}
            <div className="absolute top-0 right-10 bg-gradient-to-r from-amber-500 to-orange-500 text-royal-950 font-bold text-[10px] px-3.5 py-1 rounded-b-xl shadow-sm uppercase tracking-wider">
              Quick Estimate
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-royal-950 mb-1">
              Where are you traveling?
            </h3>
            <p className="text-xs text-gray-600 mb-6">
              Pick a vehicle &amp; trip type to configure your pre-filled inquiry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Trip Type Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-royal-900 mb-1.5">
                  Trip Style
                </label>
                <div className="relative">
                  <select 
                    name="tripType"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none transition-all"
                  >
                    <option value="tirumala-darshan">Tirumala Balaji Special Darshan Yatra</option>
                    <option value="local-sightseeing">Tirupati Local Sightseeing (Temples &amp; Nature)</option>
                    <option value="one-way">One-Way Drop Trip</option>
                    <option value="round-trip">Outstation Round-Trip Yatra</option>
                    <option value="custom-south-india">Custom South India Multi-City Tour (Any Places)</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Vehicle Select */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-royal-900 mb-1.5">
                  Select Your Vehicle
                </label>
                <div className="relative">
                  <select 
                    name="vehicle"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent appearance-none transition-all"
                  >
                    {VEHICLES.map((vehicle) => (
                      <option key={vehicle.id} value={vehicle.id}>
                        {vehicle.name} ({vehicle.capacity})
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500">
                    ▼
                  </div>
                </div>
              </div>

              {/* Destination Tip / Hint Display */}
              <div className="flex gap-2.5 p-3 rounded-xl bg-orange-500/5 border border-orange-500/10 text-xs text-orange-850 hover:bg-orange-500/10 transition-colors">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold block">Popular Routes:</span>
                  Tirupati Station to Tirumala hills, Renigunta Airport to Tirumala, Kalahasti Temple, Kanipakam Temple, Vellore Golden Temple.
                </div>
              </div>

              {/* Quick Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-royal-950 hover:text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-md shadow-orange-500/10 hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Car className="w-4 h-4" />
                Customize Booking Details
              </button>
            </form>

            <div className="mt-4 text-center text-[10px] text-gray-500 font-medium">
              ⚡ Instantly pre-fills the final booking form below for quick editing!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
