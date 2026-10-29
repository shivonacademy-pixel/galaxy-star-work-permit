import React from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { ShieldCheck, XCircle, CheckCircle2, Award, Users, Scale, FileText } from 'lucide-react';

export default function WhyChooseUs({ onOpenApplication, onOpenTermsModal }) {
  const comparison = [
    {
      feature: "Legal Written Agreement",
      galaxyStar: "Official 6-clause agreement covering all terms & fee splits",
      others: "Verbal assurances with no written legal security"
    },
    {
      feature: "Visa Guarantee Policy",
      galaxyStar: "Honest embassy discretion disclosure (Section 1). No false promises",
      others: "Fake '100% guaranteed visa' claims to trap candidates"
    },
    {
      feature: "Refund Policy",
      galaxyStar: "Refund within 65 days if process canceled due to difficulties (Section 4)",
      others: "Strictly non-refundable; advance money lost"
    },
    {
      feature: "Age Eligibility Range",
      galaxyStar: "Dedicated verified employer slots for candidates aged 18 to 51",
      others: "Limited to youth or misinformed age restrictions"
    },
    {
      feature: "Fee Transparency",
      galaxyStar: "Agreed consultancy fee clearly separated from government fees",
      others: "Hidden charges, sudden demands for bribe/middleman costs"
    },
    {
      feature: "Legal Jurisdiction",
      galaxyStar: "Headquarters court jurisdiction in Pune / Mumbai (Section 6)",
      others: "Untraceable, no fixed registered office"
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Why Galaxy Star Stands Apart</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Genuine Guidance vs. Industry Pitfalls
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            In an industry fraught with fake promises and untraceable agents, Galaxy Star Work Permit Services protects your time, investment, and future with legally binding transparency.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-card mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-brand-navy text-white text-xs uppercase font-heading">
                <tr>
                  <th className="py-4 px-6 font-bold">Standard Feature</th>
                  <th className="py-4 px-6 font-bold bg-brand-navy-light text-brand-gold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span>Galaxy Star Work Permit Services</span>
                  </th>
                  <th className="py-4 px-6 font-bold text-slate-400">
                    Unverified / Typical Agents
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {comparison.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white transition-colors">
                    <td className="py-4 px-6 font-bold text-brand-navy">
                      {item.feature}
                    </td>
                    <td className="py-4 px-6 bg-brand-gold/5 font-semibold text-brand-navy">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
                        <span>{item.galaxyStar}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>{item.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-brand-navy">
              Legal Peace of Mind
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every applicant receives our authenticated 6-point agreement right at consultation. You know exactly what you pay for and what each party's responsibilities are.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-brand-navy">
              Inclusive Age Network (18–51)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you are an 18-year-old seeking entry-level hospitality in Baku or a 49-year-old master welder with 20 years of hands-on skill, we have verified Azerbaijan openings.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-extrabold text-lg text-brand-navy">
              Direct Embassy Documentation
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We eliminate paperwork errors, guide you through official apostille, PCC, and translation, maximizing your chances of getting your e-Visa stamped on time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
