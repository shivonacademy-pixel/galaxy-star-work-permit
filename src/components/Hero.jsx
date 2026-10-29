import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Globe2, 
  Plane, 
  MessageCircle, 
  FileCheck, 
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';

export default function Hero({ onOpenApplication, onScrollToEligibility }) {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-navy pt-8 pb-16 lg:py-20 text-white">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-brand-navy to-brand-navy-dark pointer-events-none" />
      
      {/* Airplane Flight Path SVG Decoration */}
      <div className="absolute right-0 top-1/4 opacity-10 pointer-events-none hidden lg:block">
        <svg width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 350C150 300 250 100 550 50" stroke="#D4AF37" strokeWidth="3" strokeDasharray="8 8" />
          <circle cx="550" cy="50" r="8" fill="#D4AF37" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-brand-gold animate-pulse" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-5xl leading-tight tracking-tight text-white">
              Azerbaijan Emigration & <br className="hidden sm:inline" />
              <span className="text-gradient-gold">Work Permit Services</span> <br />
              For Ages <span className="underline decoration-brand-gold decoration-4 underline-offset-4">18 to 51</span>
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              Turn your international career ambition into reality with verified employer job placements across 
              <strong className="text-white"> Baku, Sumqayit, and Azerbaijan</strong>. 
              Protected by our transparent 6-point legal agreement, 65-Day refund policy, and zero false promises.
            </p>

            {/* Key Trust Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>State Migration Service (SMS) Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Candidates Aged 18 to 51 Eligible</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Written Agreement with 65-Day Refund Clause</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Court Jurisdiction: Pune / Mumbai HQ</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onScrollToEligibility}
                className="bg-gradient-gold text-brand-navy hover:opacity-95 font-bold px-6 py-3.5 rounded-xl shadow-gold hover:shadow-xl transition-all flex items-center gap-2.5 text-base"
              >
                <span>Check Age 18–51 Eligibility</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-brand-green hover:bg-brand-green-dark text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>

            {/* Quick Contact & Working Hours Bar */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
                <span className="text-slate-300 font-medium">Accepting Applications for 2026/2027 Intakes</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Pune / Mumbai Headquarters</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Trust Card & Logo Visual */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-gold/30 to-brand-navy-light/40 blur-lg opacity-75" />

              <div className="relative bg-slate-900/90 border border-brand-gold/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
                
                {/* Brand Card Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-800">
                  <div className="w-16 h-16 rounded-full bg-white p-1 border-2 border-brand-gold shadow-md flex-shrink-0">
                    <img 
                      src={COMPANY_INFO.logoUrl} 
                      alt="Galaxy Star Work Permit Services" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-white text-lg sm:text-xl">
                      Galaxy Star
                    </h3>
                    <p className="text-xs text-brand-gold font-medium">
                      Work Permit & Emigration Consultancy
                    </p>
                    <p className="text-[11px] text-slate-400">
                      Pune & Mumbai Legal Jurisdiction
                    </p>
                  </div>
                </div>

                {/* Quick Trust Stat Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                    <div className="text-2xl font-black text-brand-gold">18 – 51</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Eligible Candidate Age</div>
                  </div>
                  <div className="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                    <div className="text-xl font-black text-white flex items-center justify-center gap-1">
                      <span>🇦🇿 Baku</span>
                    </div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Azerbaijan Work Permits</div>
                  </div>
                  <div className="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                    <div className="text-2xl font-black text-brand-green">100%</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Transparent Terms</div>
                  </div>
                  <div className="bg-brand-navy/60 border border-slate-800 rounded-xl p-3.5 text-center">
                    <div className="text-2xl font-black text-brand-gold">65 Days</div>
                    <div className="text-xs text-slate-300 font-medium mt-0.5">Refund Policy Protection</div>
                  </div>
                </div>

                {/* Direct Consultation Box */}
                <div className="bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/20 rounded-xl p-4 text-sm text-slate-300">
                  <div className="font-semibold text-white flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>Certified Emigration Consultancy</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Have your documents evaluated by specialists before applying. Get realistic insights on visa processing times and embassy procedures.
                  </p>
                </div>

                {/* Quick Call Direct */}
                <button
                  onClick={onOpenApplication}
                  className="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold rounded-xl shadow-gold transition-all flex items-center justify-center gap-2 text-sm"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Submit Profile for Free Verification</span>
                </button>

                <div className="text-center text-xs text-slate-400">
                  Call our official helpline: <a href={`tel:+91${COMPANY_INFO.phone}`} className="text-brand-gold font-bold hover:underline">+91 {COMPANY_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
