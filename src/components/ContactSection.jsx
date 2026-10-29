import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/websiteData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  Scale
} from 'lucide-react';

export default function ContactSection({ prefilledService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '28',
    phone: '',
    email: '',
    destination: 'Azerbaijan (Baku)',
    skill: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageNum = parseInt(formData.age, 10);
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please enter your full name and contact number.');
      return;
    }
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 51) {
      setErrorMsg('Eligible candidate age is strictly between 18 and 51 years.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    // Format WhatsApp message
    const waText = encodeURIComponent(
      `Hello Galaxy Star Work Permit Services,\n\nI am submitting an emigration application inquiry:\n` +
      `👤 Name: ${formData.name}\n` +
      `🎂 Age: ${formData.age} Years (Eligible 18-51)\n` +
      `📞 Phone: ${formData.phone}\n` +
      `📧 Email: ${formData.email || 'N/A'}\n` +
      `🌍 Preferred Country: ${formData.destination}\n` +
      `🛠️ Trade/Skill: ${formData.skill || 'General'}\n` +
      `💬 Message: ${formData.message || 'Please provide free profile assessment.'}`
    );

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${waText}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span>Connect Directly With Our Counselors</span>
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
            Get in Touch with Galaxy Star
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Have questions about age eligibility (18–51), fees, or overseas work permits? Call, message, or visit us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone & WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-extrabold text-lg text-brand-navy">
                Direct Calling & WhatsApp
              </h3>
              
              <div className="space-y-3">
                <a 
                  href={`tel:+91${COMPANY_INFO.phone}`} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-brand-navy/5 border border-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Official Helpline:</div>
                    <div className="text-base font-bold text-brand-navy group-hover:text-brand-gold-dark transition-colors">
                      +91 {COMPANY_INFO.phone}
                    </div>
                  </div>
                </a>

                <a 
                  href={COMPANY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-brand-green/10 hover:bg-brand-green/20 border border-brand-green/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-600 font-medium">WhatsApp Support:</div>
                    <div className="text-base font-bold text-brand-green">
                      +91 {COMPANY_INFO.phone}
                    </div>
                  </div>
                </a>

                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-brand-navy/5 border border-slate-200 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-navy text-brand-gold flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-500 font-medium">Official Email:</div>
                    <div className="text-xs sm:text-sm font-bold text-brand-navy truncate">
                      {COMPANY_INFO.email}
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Office Locations & Hours */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-4">
              <h3 className="font-heading font-extrabold text-base text-brand-navy flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-gold-dark" />
                <span>Headquarters & Jurisdiction</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Pune & Mumbai, Maharashtra, India.</strong> All disputes and contracts are formally governed under Pune/Mumbai court jurisdiction as outlined in our Terms & Conditions.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <Clock className="w-4 h-4 text-brand-gold-dark" />
                <span>{COMPANY_INFO.workingHours}</span>
              </div>
            </div>

            {/* Social Media Connections */}
            <div className="bg-brand-navy text-white rounded-2xl p-6 shadow-navy border border-brand-gold/30 space-y-4">
              <h3 className="font-heading font-extrabold text-base text-white">
                Follow Us on Social Media
              </h3>
              <p className="text-xs text-slate-300">
                Stay updated with the latest visa stamping photos, verified employer interviews, and fresh job openings.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-md hover:opacity-90 transition-opacity"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram Profile</span>
                </a>

                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook Page</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Consultation & Profile Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-card">
            
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="font-heading font-black text-xl text-brand-navy">
                Book a Free Consultation & Profile Assessment
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Fill in your candidate details. Your message will be formatted for immediate review by our senior counselor.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-brand-green/10 border border-brand-green/30 rounded-2xl">
                <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
                <h4 className="font-heading font-black text-lg text-brand-navy">
                  Assessment Inquiry Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you, <strong>{formData.name}</strong>. If WhatsApp did not open automatically, you can also reach us directly at +91 {COMPANY_INFO.phone}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-brand-navy text-white text-xs font-bold rounded-xl"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Patil"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>

                  {/* Age (18 to 51) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                      <span>Age (Must be 18–51) *</span>
                      <span className="text-[11px] text-brand-gold-dark font-semibold">Strict Bracket</span>
                    </label>
                    <input
                      type="number"
                      name="age"
                      min="18"
                      max="51"
                      required
                      placeholder="28"
                      value={formData.age}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy font-bold text-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Target Destination */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Target Destination in Azerbaijan
                    </label>
                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy bg-white"
                    >
                      <option value="Azerbaijan (Baku)">Azerbaijan - Baku (Capital City)</option>
                      <option value="Azerbaijan (Sumqayit)">Azerbaijan - Sumqayit (Industrial Hub)</option>
                      <option value="Azerbaijan (Ganja)">Azerbaijan - Ganja Region</option>
                      <option value="Azerbaijan (All Quotas)">Azerbaijan - Any Placement</option>
                    </select>
                  </div>

                  {/* Trade / Skill */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Your Skill or Trade
                    </label>
                    <input
                      type="text"
                      name="skill"
                      placeholder="e.g. Welder, Chef, Driver, Logistics"
                      value={formData.skill}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Current Passport Status
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    placeholder="Tell us about your educational background, passport validity, and expected departure timeframe..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                  />
                </div>

                {/* Compliance Disclaimer Checkbox */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-600 leading-relaxed">
                  By submitting this form, you acknowledge that Galaxy Star Work Permit Services operates under official Terms and Conditions with a 65-Day refund policy, and disputes are subject to Pune/Mumbai court jurisdiction.
                </div>

                {/* Submit Buttons */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold rounded-xl shadow-gold transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Open WhatsApp Inquiry</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
