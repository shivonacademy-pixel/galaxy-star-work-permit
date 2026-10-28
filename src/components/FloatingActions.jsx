import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';

export default function FloatingActions({ onOpenApplication }) {
  return (
    <>
      {/* Floating WhatsApp Action (Bottom Right) */}
      <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
        {/* Tooltip */}
        <div className="hidden sm:flex items-center gap-1.5 bg-brand-navy text-white text-xs py-1.5 px-3 rounded-full shadow-lg border border-brand-gold/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-ping" />
          <span>Chat on WhatsApp ({COMPANY_INFO.phone})</span>
        </div>

        {/* Big WhatsApp Pill Button */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-dark text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white"
          aria-label="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="hidden sm:inline-block font-heading font-bold text-xs">
            WhatsApp Direct
          </span>
        </a>
      </aside>

      {/* Floating Call Button for Mobile (Bottom Left) */}
      <aside aria-label="Mobile quick call" className="fixed bottom-6 left-6 z-40 sm:hidden">
        <a
          href={`tel:+91${COMPANY_INFO.phone}`}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-navy text-brand-gold shadow-2xl border-2 border-brand-gold"
          aria-label="Call Helpline"
        >
          <Phone className="w-5 h-5" />
        </a>
      </aside>
    </>
  );
}
