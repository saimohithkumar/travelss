import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(prev => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-orange-600 bg-orange-50 px-3.5 py-1.5 rounded-full inline-block">
            Tour Assistance Desk
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-royal-950">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Got queries about temple timetables, hill road guidelines, or cab booking procedures? Find clear, helpful answers below.
          </p>
        </div>

        {/* FAQ Accordion Lists */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div 
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen 
                    ? 'border-amber-500 bg-amber-500/[0.01]' 
                    : 'border-slate-100 hover:border-slate-200 bg-slate-50/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus:bg-slate-50 transition-colors cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 mt-0.5 ${isOpen ? 'text-amber-500' : 'text-slate-400'}`} />
                    <span className="font-bold text-sm sm:text-base text-royal-950">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`p-1.5 rounded-full ${isOpen ? 'bg-amber-100 text-amber-700' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* Animated expand/collapse height helper */}
                <div className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-[300px] border-t border-slate-100/70 p-5 opacity-100' : 'max-h-0 p-0 overflow-hidden opacity-0'
                }`}>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Help box banner */}
        <div className="text-center pt-4">
          <p className="text-xs text-gray-500">
            Have another custom question about Srikalahasteeswara Rahu-Ketu ticket pre-booking or Alipiri luggage scanners?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-1.5 text-xs text-orange-600 hover:text-orange-700 font-bold mt-1.5"
          >
            Ask us on our Contact Desk &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
