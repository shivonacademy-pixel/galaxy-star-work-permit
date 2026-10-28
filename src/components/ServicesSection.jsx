import React from 'react';
import { SERVICES_LIST } from '../data/websiteData';
import { 
  Briefcase, 
  Scale, 
  Globe, 
  ShieldCheck, 
  Compass, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

const iconMap = {
  Briefcase: Briefcase,
  Scale: Scale,
  Globe: Globe,
  ShieldCheck: ShieldCheck,
  Compass: Compass,
  ShieldAlert: ShieldAlert
};

export default function ServicesSection({ onOpenApplication }) {
  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Globe className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Comprehensive Emigration Solutions</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Our Professional Emigration & Visa Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            From initial document verification to embassy filing and employer contracts, we handle every stage of your global mobility journey with utmost transparency.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => {
            const Icon = iconMap[srv.icon] || Briefcase;
            return (
              <div 
                key={srv.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-brand-gold/60 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Service Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors flex items-center justify-center mb-5 border border-brand-navy/10">
                    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-brand-navy mb-2.5">
                    {srv.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 mb-6">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onOpenApplication(srv.title)}
                  className="w-full py-2.5 px-4 rounded-xl border border-slate-200 group-hover:border-brand-navy bg-slate-50 group-hover:bg-brand-navy group-hover:text-white text-brand-navy text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <span>Inquire About This Service</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
