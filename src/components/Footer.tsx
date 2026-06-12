import { MapPin, Phone, Mail, Clock, MessageSquare, Compass, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-royal-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8 space-y-12 relative z-10">
        
        {/* Core footer columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Col 1: Brand details & taglines */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-royal-950 shadow">
                <Compass className="w-5.5 h-5.5 stroke-[2.5]" />
              </div>
              <div>
                <span className="block font-display text-lg font-extrabold tracking-wide uppercase">
                  Sri Ganesha <span className="text-amber-400">Travels</span>
                </span>
                <span className="block text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                  Tirupati Tourism Services
                </span>
              </div>
            </a>
            
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              We provide highly reliable, affordable, and safe luxury cab hiring in and around Tirupati. Specialized in Airport pick-up drops, standard local temple sightseeing, and long-route pilgrim yatras.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3.5 text-xs text-gray-300">
                <MapPin className="w-4.5 h-4.5 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3.5 text-xs text-gray-300">
                <Phone className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <div>
                  <a href={`tel:${CONTACT_INFO.phonePrimary}`} className="hover:text-amber-400 transition-colors block">
                    {CONTACT_INFO.phonePrimary} (Helpline)
                  </a>
                  <a href={`tel:${CONTACT_INFO.phoneSecondary}`} className="hover:text-amber-400 transition-colors block mt-0.5">
                    {CONTACT_INFO.phoneSecondary} (Backup)
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3.5 text-xs text-gray-300">
                <Mail className="w-4.5 h-4.5 text-amber-500 shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-400 transition-colors text-xs">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-3.5 text-xs text-amber-300 bg-royal-900 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                <Clock className="w-4 h-4 shrink-0" />
                <span className="font-semibold">Open 24/7 Hours, 365 Days</span>
              </div>
            </div>
          </div>

          {/* Col 2: Useful Fast Navigation */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home (Top)
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  Available Fleet
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Sri Ganesha
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Review Stories
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs &amp; Help
                </a>
              </li>
              <li>
                <a href="#booking-section" className="font-bold text-amber-400 hover:text-white transition-colors">
                  Book A Cab Now
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Real Direct Google Maps Embedded location */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex justify-between items-center">
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-400">
                Our Physical Location
              </h4>
              <span className="text-[10px] bg-amber-500/10 text-amber-300 font-bold px-2 py-0.5 rounded border border-amber-500/20">
                Near APSRTC Central Stand
              </span>
            </div>
            
            {/* Embedded Google Map iframe safety with sandboxing */}
            <div className="h-52 w-full rounded-2xl overflow-hidden border border-white/10 shadow-lg relative bg-royal-900">
              <iframe 
                src={CONTACT_INFO.googleMapsIframeUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer"
                title="Sri Ganesha Travels Location Map"
                className="opacity-90 hover:opacity-100 transition-opacity"
              ></iframe>
            </div>
            <p className="text-[11px] text-gray-400 italic text-right leading-tight">
              Located right opposite to APSRTC Bus Stand - perfect for immediate arrivals!
            </p>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div>
            &copy; {currentYear} <strong>Sri Ganesha Travels</strong>. All rights reserved. Made in Tirupati.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors select-none">Terms of Booking</span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition-colors select-none">Grievance Desk</span>
            <span className="text-white/20">•</span>
            <span className="text-emerald-400 font-bold hover:underline">
              <a 
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi,%20I'm%20visiting%20Tirupati%20and%20want%2520to%20know%20more%20about%20cab%20rates.`} 
                target="_blank" 
                rel="noreferrer"
              >
                Launch Live Chat
              </a>
            </span>
          </div>
        </div>

      </div>

      {/* STICKY BOTTOM RIGHT CORNER FLOATING WHATSAPP BUTTON FOR CLIENTS */}
      <a 
        href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=Hi%2C%20I%20want%20to%20book%20a%20cab%20with%20Sri%20Ganesha%20Travels.%20Please%20guide%20me%20on%20tariffs.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white p-3.5 rounded-full shadow-2xl hover:shadow-emerald-500/20 transition-all hover:-translate-y-1 duration-300 flex items-center justify-center border-2 border-white/10 select-none cursor-pointer group"
        title="Chat with us on WhatsApp"
        id="floating-whatsapp-trigger"
      >
        <MessageSquare className="w-6.5 h-6.5 fill-white stroke-none text-emerald-500" />
        <span className="absolute right-full mr-2.5 bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-xl shadow-lg border border-emerald-500/20 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
          Need Help? Chat Now!
        </span>
      </a>

    </footer>
  );
}
