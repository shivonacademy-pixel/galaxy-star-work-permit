import React from 'react';
import { WORKFLOW_STEPS } from '../data/websiteData';
import { 
  CheckCircle, 
  FileCheck, 
  Briefcase, 
  Stamp, 
  PlaneTakeoff, 
  ArrowRight,
  ShieldCheck 
} from 'lucide-react';

const iconMap = {
  CheckCircle: CheckCircle,
  FileCheck: FileCheck,
  Briefcase: Briefcase,
  Stamp: Stamp,
  PlaneTakeoff: PlaneTakeoff
};

export default function WorkflowSection({ onOpenApplication }) {
  return (
    <section id="workflow" className="py-16 sm:py-20 bg-brand-navy text-white relative overflow-hidden">
      
      {/* Decorative background vectors */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/30 via-brand-navy to-brand-navy-dark pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Ethical & Transparent Process</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white">
            Our 5-Step Azerbaijan Placement Workflow
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            No confusion, no hidden steps. Follow our structured roadmap from initial age assessment to safe Baku departure.
          </p>
        </div>

        {/* Workflow Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {WORKFLOW_STEPS.map((step, index) => {
            const Icon = iconMap[step.icon] || CheckCircle;
            return (
              <div 
                key={step.step}
                className="relative bg-slate-900/80 border border-slate-800 hover:border-brand-gold/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-heading font-black text-2xl text-brand-gold/70 group-hover:text-brand-gold transition-colors">
                    {step.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center border border-brand-gold/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2 mb-4">
                  <div className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
                    {step.highlight}
                  </div>
                  <h3 className="font-heading font-bold text-base text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Status indicator line */}
                <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span>Phase {index + 1} of 5</span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Workflow Guarantee Callout */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading font-extrabold text-lg text-white">
              Ready to start Phase 1 for free?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Submit your CV or passport copy for immediate age & qualifications evaluation under our legal framework.
            </p>
          </div>
          <button
            onClick={() => onOpenApplication()}
            className="bg-gradient-gold hover:opacity-95 text-brand-navy font-bold px-6 py-3 rounded-xl shadow-gold transition-all text-sm flex items-center gap-2 flex-shrink-0"
          >
            <span>Begin Free Evaluation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
