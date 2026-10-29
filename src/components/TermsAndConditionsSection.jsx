import React, { useState } from 'react';
import { TERMS_AND_CONDITIONS, COMPANY_INFO } from '../data/websiteData';
import { 
  FileText, 
  UserCheck, 
  IndianRupee, 
  RotateCcw, 
  FileX, 
  Scale, 
  ShieldCheck, 
  AlertTriangle, 
  ExternalLink,
  Download,
  Eye,
  CheckCircle2
} from 'lucide-react';

const iconMap = {
  FileText: FileText,
  UserCheck: UserCheck,
  IndianRupee: IndianRupee,
  RotateCcw: RotateCcw,
  FileX: FileX,
  Scale: Scale
};

export default function TermsAndConditionsSection({ onOpenDocumentPreview }) {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="terms" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Official Client Agreement & Policy</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Terms and Conditions & Transparency Charter
          </h2>
          <div className="mt-2 text-xs sm:text-sm font-semibold text-brand-gold-dark uppercase tracking-wider">
            {COMPANY_INFO.tagline}
          </div>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            We operate with 100% legal integrity. Every client is protected by our transparent 6-clause agreement covering services, honest visa disclaimers, 65-Day refund policy, and Pune/Mumbai jurisdiction.
          </p>
        </div>

        {/* Action Bar for Original Agreement Document */}
        <div className="bg-white border border-brand-gold/40 rounded-2xl p-4 sm:p-5 mb-8 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-brand-navy text-sm sm:text-base">
                Official Printed Terms Document
              </div>
              <div className="text-xs text-slate-500">
                Authorized documentation issued by Galaxy Star Work Permit Services
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={onOpenDocumentPreview}
              className="flex-1 sm:flex-none px-4 py-2 bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Eye className="w-4 h-4 text-brand-gold" />
              <span>Preview Original Document</span>
            </button>
            <a
              href={COMPANY_INFO.termsDocumentUrl}
              download="Galaxy_Star_Terms_and_Conditions.jpg"
              className="flex-1 sm:flex-none px-4 py-2 border border-slate-300 hover:border-brand-navy bg-slate-50 text-slate-700 hover:text-brand-navy text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Download Copy</span>
            </a>
          </div>
        </div>

        {/* 6 Terms Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TERMS_AND_CONDITIONS.map((term) => {
            const Icon = iconMap[term.icon] || FileText;
            return (
              <div
                key={term.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brand-gold/60 shadow-card hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Term Header */}
                  <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
                    <div className="w-10 h-10 rounded-xl bg-brand-navy/5 text-brand-navy flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5 text-brand-navy" />
                    </div>
                    <h3 className="font-heading font-black text-base text-brand-navy">
                      {term.title}
                    </h3>
                  </div>

                  {/* Points */}
                  <div className="space-y-3.5">
                    {term.points.map((pt, idx) => (
                      <div key={idx} className="text-xs space-y-1">
                        <div className="font-bold text-slate-800 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold-dark flex-shrink-0" />
                          <span>{pt.subtitle}:</span>
                        </div>
                        <p className="text-slate-600 leading-relaxed pl-5">
                          {pt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Sub-Badge */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                  <span>Clause #{term.id}</span>
                  <span className="text-brand-green font-semibold">Legally Binding</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Critical Legal Disclaimer Note */}
        <div className="mt-10 bg-amber-50/80 border border-amber-200 rounded-2xl p-5 text-xs text-amber-900 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-amber-950">Ethical Emigration Statement (Section 1 & 4):</span>
            <p className="leading-relaxed">
              Galaxy Star Work Permit Services strictly abides by destination country immigration regulations. Approval or rejection of any visa rests entirely at the discretion of the Embassy or Consulate. As per Section 4, if the client cancels the process due to personal difficulties, the amount paid will be refunded within 65 days.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
