import { ShieldCheck, MapPin, Award, Compass, HeartHandshake, Eye } from 'lucide-react';

export default function AboutUs() {
  const PACKAGES = [
    {
      title: 'Tirumala Balaji Special Yatra',
      description: 'Pick up from Tirupati station/airport, drive via the scenic Alipiri Ghat road, assist with tons of luggage storage, and drive back safely.',
      duration: 'Full Day tour',
      popularity: '98%'
    },
    {
      title: 'Kalahasti & Kanipakam Divine Combo',
      description: 'A custom trip to Srikalahasteeswara Temple (Rahu Ketu Puja) and Kanipakam Vinayaka Temple with flexible stay points.',
      duration: '8 Hours',
      popularity: '94%'
    },
    {
      title: 'Tirupati Local Temple Sightseeing',
      description: 'Visit Padmavathi Ammavari, Kapilatheertham, Srinivasam Mangapuram, and Govindaraja Swamy temples under comfortable schedules.',
      duration: 'Half Day / Full Day',
      popularity: '90%'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Visual Bento Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Detail */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full inline-block">
              About Sri Ganesha Travels
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-royal-950 leading-tight">
              Tirupati's Most Trusted &amp; Blessed <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Yatra Cab Operator</span>
            </h2>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Founded over a decade ago with a simple mission—to make pilgrimages to Lord Venkateswara Swamy safe, sacred, and effortless. <strong>Sri Ganesha Travels</strong> has grown into the leading cab rental operator in Tirupati.
            </p>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              We treat every customer as an guest of God (Adithi Devo Bhava). Our drivers double as courteous temple tour guides who can speak multiple languages including <strong>Telugu, Tamil, English, and Hindi</strong>, ensuring that language is never a barrier to your divine journey.
            </p>

            {/* Core Values Points */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex gap-2 text-sm text-gray-700">
                <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-royal-950 block">Safe Hill Driving</span>
                  <span className="text-xs text-gray-500">Drivers specialized in Tirumala Ghat hair-pin curves.</span>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <Award className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-royal-950 block">Punctuality Guarantees</span>
                  <span className="text-xs text-gray-500">Driver reaches station 15 min before you arrive.</span>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-royal-950 block">Renigunta Airport Special</span>
                  <span className="text-xs text-gray-500">Instant pick-up with flight delay monitoring.</span>
                </div>
              </div>
              <div className="flex gap-2 text-sm text-gray-700">
                <HeartHandshake className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-royal-950 block">Pilgrim Priority Care</span>
                  <span className="text-xs text-gray-500">Flexible stops for elderly, infants, and food.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Column */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-royal-900 to-royal-950 text-white rounded-3xl p-6 shadow-lg border border-royal-800 space-y-2 mt-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-display block">
                  10+
                </span>
                <span className="text-sm font-semibold block uppercase tracking-wider">
                  Years of Service
                </span>
                <p className="text-xs text-gray-300">
                  Providing blessed experiences to pilgrims from across India.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-royal-950 rounded-3xl p-6 shadow-lg space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-display block">
                  50k+
                </span>
                <span className="text-sm font-extrabold block uppercase tracking-wider text-royal-950/80">
                  Happy Pilgrims
                </span>
                <p className="text-xs text-royal-990 opacity-90">
                  Trusted by families, corporate groups, and lone travellers.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-md space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-orange-600 font-display block">
                  100%
                </span>
                <span className="text-sm font-bold text-royal-950 block uppercase tracking-wider">
                  Custom Itineraries
                </span>
                <p className="text-xs text-gray-500">
                  Tailor-make your stops for temples, viewpoints, and local dining.
                </p>
              </div>

              <div className="bg-gradient-to-br from-royal-950/95 to-slate-900 text-white rounded-3xl p-6 shadow-lg border border-white/[0.05] space-y-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-amber-400 font-display block">
                  24/7
                </span>
                <span className="text-sm font-semibold block uppercase tracking-wider text-gray-200">
                  Instant Support
                </span>
                <p className="text-xs text-gray-400">
                  Always-active helpline and whatsapp dispatchers to handle queries.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sightseeing Packages Row */}
        <div className="pt-8 border-t border-slate-100 space-y-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4">
            <div>
              <span className="text-xs font-bold text-orange-600 tracking-widest uppercase block mb-1">
                Pilgrim temple tours
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-royal-950">
                Most Popular Sightseeing Travel Packages
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 max-w-md">
              Check out our highly requested tour durations. Select your vehicle in the fleet grid or booking form below and type the package name in your special requests!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, i) => (
              <div 
                key={i} 
                className="bg-slate-50 hover:bg-amber-500/[0.02] p-6 rounded-2xl border border-slate-100 hover:border-amber-500/10 transition-all shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-slate-200/60 font-bold uppercase tracking-wider px-2.5 py-1 rounded text-slate-700">
                      Duration: {pkg.duration}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2.5 py-1 rounded">
                      ★ {pkg.popularity} Popularity
                    </span>
                  </div>
                  <h4 className="font-display font-bold text-lg text-royal-950">
                    {pkg.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>
                
                {/* Book Link trigger */}
                <a 
                  href="#booking-section"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-600 hover:text-amber-700 font-bold pt-4 mt-4 border-t border-slate-200/50"
                >
                  Configure This Trip Package →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Localized SEO Rich Content: Popular Tirupati Cab Routes */}
        <div className="pt-12 border-t border-slate-100 space-y-6">
          <div className="max-w-3xl">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-royal-950">
              Popular Routes &amp; Cab Fares Guideline in Tirupati
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
              As the leading choice for <strong className="text-royal-950 font-semibold">cabs in Tirupati</strong>, we operate premium, direct routes connecting the temple city with all primary locations across South India. Compare the travel details and reserve your yatra taxi below:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Route Card 1 */}
            <div className="bg-slate-50/55 p-5 rounded-2xl border border-slate-100/80 flex gap-4 items-start hover:shadow-md hover:border-amber-300/30 transition-all">
              <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0 font-bold text-xs font-mono font-sans">
                01
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-royal-950">Tirupati to Tirumala Cab Booking</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fastest Alipiri Toll transit service with free baggage handling. Distance: 22 KM | Time: Approx. 50 mins. Recommended for VIP &amp; Special Darshan pilgrims.
                </p>
              </div>
            </div>

            {/* Route Card 2 */}
            <div className="bg-slate-50/55 p-5 rounded-2xl border border-slate-100/80 flex gap-4 items-start hover:shadow-md hover:border-amber-300/30 transition-all">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0 font-bold text-xs font-mono font-sans">
                02
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-royal-950">Renigunta Airport to Tirupati &amp; Tirumala</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Instant terminal pick-up with luggage space. Distance: 15 KM (Tirupati city) or 38 KM (Tirumala). We monitor flights for delays so your driver waits on-time.
                </p>
              </div>
            </div>

            {/* Route Card 3 */}
            <div className="bg-slate-50/55 p-5 rounded-2xl border border-slate-100/80 flex gap-4 items-start hover:shadow-md hover:border-amber-300/30 transition-all">
              <div className="p-2.5 rounded-xl bg-orange-100 text-orange-600 shrink-0 font-bold text-xs font-mono font-sans">
                03
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-royal-950">Tirupati to Srikalahasti Cab Service</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Best temple combo packages for Srikalahasteeswara Rahu Ketu Sarpa Dosha Puja. Distance: 38 KM | Time: Approx. 45 mins. Flexible schedules.
                </p>
              </div>
            </div>

            {/* Route Card 4 */}
            <div className="bg-slate-50/55 p-5 rounded-2xl border border-slate-100/80 flex gap-4 items-start hover:shadow-md hover:border-amber-300/30 transition-all">
              <div className="p-2.5 rounded-xl bg-amber-100 text-amber-700 shrink-0 font-bold text-xs font-mono font-sans">
                04
              </div>
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-royal-950">Vellore Golden Temple Outstation Trip</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Relaxing scenic single-day outstation tour covering Sripuram Golden Temple. Distance: 110 KM | Time: 2.5 hours. Multi-lingual driver provided.
                </p>
              </div>
            </div>
          </div>

          {/* Localized FAQ/SEO Quick Summary box (The Content Checklist SEO block) */}
          <div className="p-5 sm:p-6 bg-amber-500/5 rounded-2xl border border-amber-500/10 space-y-3.5 text-xs text-left">
            <h4 className="font-bold text-royal-950 text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Why Choose Sri Ganesha Travels for Car Rentals in Tirupati?
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-700">
              <p className="leading-relaxed">
                <strong>Certified Drivers:</strong> All vehicles are manned by courteous Tamil &amp; Telugu-speaking local professionals who have hundreds of hours of experience navigating the beautiful Alipiri-Tirumala Ghat roads.
              </p>
              <p className="leading-relaxed">
                <strong>Fixed Transparent Tariff:</strong> Say goodbye to surprise pricing. The custom pre-calculated tariff quotes we generate cover driver beta and fuel charges automatically. Choose us for the <strong className="text-amber-950 font-semibold">best car rentals in Tirupati</strong>.
              </p>
              <p className="leading-relaxed">
                <strong>Pristine Safe Fleet:</strong> Choose from clean, fully air-conditioned Swift Dzire sedans, premium 7-seater Innova Crysta SUVs, or spacious Force Tempo Travellers for larger spiritual yatra groups.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
