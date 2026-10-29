import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Scale, 
  ShieldCheck, 
  Heart,
  ArrowUp
} from 'lucide-react';

export default function Footer({ onOpenTermsModal, onOpenApplication }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 border-t border-brand-gold/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold flex-shrink-0">
                <img 
                  src={COMPANY_INFO.logoUrl} 
                  alt="Galaxy Star Work Permit Services Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-black text-white text-lg tracking-wide">
                  GALAXY STAR
                </span>
                <span className="text-brand-gold font-bold text-xs block">
                  Work Permit Services
                </span>
              </div>
            </div>

            <p className="text-xs text-brand-gold font-bold tracking-wider uppercase">
              {COMPANY_INFO.tagline}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier emigration consultancy & job placement agency specialized in matching candidates aged <strong>18 to 51</strong> with verified employer work permits in Baku, Sumqayit, and across Azerbaijan.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 text-white flex items-center justify-center transition-all shadow-sm"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 text-white flex items-center justify-center transition-all shadow-sm"
                title="Follow on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-brand-green text-white flex items-center justify-center transition-all shadow-sm"
                title="Message on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition-colors">Services</a></li>
              <li><a href="#jobs" className="hover:text-brand-gold transition-colors">Azerbaijan Jobs (18–51)</a></li>
              <li><a href="#eligibility" className="hover:text-brand-gold transition-colors">Age Eligibility Tool</a></li>
              <li><a href="#workflow" className="hover:text-brand-gold transition-colors">5-Step Process</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold transition-colors">Candidate Reviews</a></li>
              <li><a href="#terms" className="hover:text-brand-gold transition-colors">Terms & Policy</a></li>
              <li><a href="#contact" className="hover:text-brand-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Key Destinations */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Azerbaijan Work Programs 🇦🇿
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>🇦🇿 Baku Warehouse & Logistics Quotas</li>
              <li>🇦🇿 Sumqayit Welder & Fabrication Permits</li>
              <li>🇦🇿 Baku Luxury Hotel & Hospitality Visas</li>
              <li>🇦🇿 Azerbaijan Heavy Driver & Transport Permits</li>
              <li>🇦🇿 Commercial Electrical Maintenance Visas</li>
              <li>🇦🇿 State Migration Service (SMS) Registration</li>
              <li>🇦🇿 Temporary Residence & Work Permit (TRWP)</li>
              <li>🇦🇿 Construction & Technical Trades Permits</li>
            </ul>
          </div>

          {/* Contact & Legal Governance */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Official Helpline & HQ
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a 
                href={`tel:+91${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors text-white font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-brand-gold" />
                <span>+91 {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-gold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-brand-green" />
                <span>WhatsApp: {COMPANY_INFO.phone}</span>
              </a>
              <a 
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-center gap-2 hover:text-brand-gold transition-colors break-all"
              >
                <Mail className="w-3.5 h-3.5 text-brand-gold" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Headquarters: Pune / Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTermsModal}
                className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-brand-gold border border-slate-700 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Review Terms & Conditions</span>
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Jurisdiction Note */}
        <div className="pt-8 pb-4 text-[11px] text-slate-500 space-y-2">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Emigration Notice & Jurisdiction: </strong> 
            Galaxy Star Work Permit Services provides advisory, documentation, and candidate matching assistance. 
            Visa issuance remains strictly subject to the authority of foreign embassies & consulates. 
            All disputes and agreements are governed by the courts at Pune / Mumbai, Maharashtra (Section 6).
          </p>
        </div>

        {/* Copyright and Bottom Row */}
        <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong>Galaxy Star Work Permit Services</strong>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTermsModal}
              className="hover:text-brand-gold transition-colors"
            >
              Terms & Conditions
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-brand-gold transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
