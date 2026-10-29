import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  MessageCircle, 
  FileText, 
  Briefcase, 
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export default function Navbar({ onOpenApplication, onOpenTermsModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Azerbaijan Jobs (18–51)', href: '#jobs' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Workflow', href: '#workflow' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Terms & Policy', href: '#terms' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Bar for Contact & Headquarters */}
      <div className="bg-brand-navy-dark text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a 
              href={`tel:+91${COMPANY_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-brand-gold transition-colors font-medium text-white"
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>+91 {COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-brand-gold transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-gold" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-brand-gold" />
              <span>Headquarters: Pune / Mumbai, Maharashtra</span>
            </div>
          </div>

          <div className="flex items-center gap-3 ml-auto">
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-gold" />
              <span>Mon - Sat: 9:30 AM - 6:30 PM</span>
            </span>
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-brand-green/20 text-brand-green hover:bg-brand-green/30 px-2.5 py-0.5 rounded-full border border-brand-green/30 font-medium transition-all text-[11px]"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${isScrolled ? 'bg-brand-navy shadow-navy py-2.5' : 'bg-brand-navy/95 backdrop-blur-md py-3.5'} border-b border-brand-gold/20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-brand-gold shadow-md flex-shrink-0 group-hover:scale-105 transition-transform">
              <img 
                src={COMPANY_INFO.logoUrl} 
                alt="Galaxy Star Work Permit Services Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-heading font-extrabold text-white text-base sm:text-lg leading-tight tracking-wide flex items-center gap-1">
                <span>GALAXY STAR</span>
                <span className="text-brand-gold">SERVICES</span>
              </div>
              <div className="text-[10px] sm:text-xs text-brand-gold font-semibold tracking-wider uppercase">
                Work Permit & Emigration Consultancy
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-brand-gold px-3 py-1.5 rounded-md text-sm font-medium transition-colors hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenTermsModal()}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-brand-gold px-3 py-2 border border-slate-700 rounded-lg hover:border-brand-gold/50 transition-colors"
              title="View Official Terms & Conditions"
            >
              <FileText className="w-3.5 h-3.5 text-brand-gold" />
              <span>Official Terms</span>
            </button>
            <button
              onClick={() => onOpenApplication()}
              className="bg-gradient-gold hover:opacity-95 text-brand-navy font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-gold hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <span>Free 18–51 Assessment</span>
              <CheckCircle className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => onOpenApplication()}
              className="bg-brand-gold text-brand-navy font-bold text-xs px-3 py-1.5 rounded-md sm:hidden"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-brand-gold p-2 rounded-lg bg-white/5 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-brand-navy-dark border-t border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-fadeIn">
            <div className="text-xs text-brand-gold font-semibold uppercase tracking-wider px-3 py-1">
              Galaxy Star Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-slate-200 hover:text-brand-gold hover:bg-white/5 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTermsModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700"
              >
                <FileText className="w-4 h-4 text-brand-gold" />
                <span>View Official Terms & Conditions (Pune/Mumbai)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenApplication();
                }}
                className="w-full py-2.5 px-4 text-sm font-bold text-brand-navy bg-gradient-gold rounded-lg shadow-gold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Start Free Assessment (Age 18–51)</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
