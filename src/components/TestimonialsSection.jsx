import React from 'react';
import { TESTIMONIALS } from '../data/websiteData';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-brand-gold-dark fill-brand-gold-dark" />
            <span>Success Stories Across All Ages (18–51)</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Real Stories From Placed Candidates
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Read how aspiring workers from Maharashtra and across India achieved their overseas careers through Galaxy Star's guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div 
              key={t.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-sm text-brand-navy flex items-center gap-1.5">
                    <span>{t.name}</span>
                    <span className="text-[11px] font-normal text-slate-500">({t.age} yrs)</span>
                  </div>
                  <div className="text-xs font-semibold text-brand-gold-dark mt-0.5">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>From {t.origin}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center" title="Verified Placement">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
