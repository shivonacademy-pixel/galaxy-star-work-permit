import React, { useState } from 'react';
import { FAQS, COMPANY_INFO } from '../data/websiteData';
import { HelpCircle, ChevronDown, MessageCircle, FileText } from 'lucide-react';

export default function FaqSection({ onOpenTermsModal }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Transparency First</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Honest, straightforward answers based on our official Terms and Conditions.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex items-center justify-between gap-4"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-brand-navy">
                  {faq.question}
                </span>
                <ChevronDown className={`w-5 h-5 text-brand-gold-dark flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-180' : ''}`} />
              </button>

              {openIndex === idx && (
                <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Extra question helper */}
        <div className="mt-10 p-6 bg-brand-navy/5 border border-brand-navy/15 rounded-2xl text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold text-brand-navy">
            Have a question regarding Azerbaijan work permits or age requirements?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-brand-green text-white text-xs font-bold rounded-xl flex items-center gap-2 shadow-sm hover:bg-brand-green-dark transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask on WhatsApp (+91 {COMPANY_INFO.phone})</span>
            </a>
            <button
              onClick={onOpenTermsModal}
              className="px-4 py-2 border border-slate-300 bg-white text-brand-navy text-xs font-bold rounded-xl flex items-center gap-2 hover:bg-slate-50 transition-all"
            >
              <FileText className="w-4 h-4 text-brand-gold-dark" />
              <span>Review 6-Point Legal Agreement</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
