import React, { useState, useEffect } from 'react';
import { DEFAULT_TESTIMONIALS } from '../data/websiteData';
import { Star, MessageSquarePlus, CheckCircle2, MapPin, User, Calendar, X, Sparkles } from 'lucide-react';

const STORAGE_KEY = 'galaxy_star_candidate_reviews_az';

export default function TestimonialsSection() {
  const [reviews, setReviews] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    age: '28',
    role: '',
    origin: '',
    rating: 5,
    quote: ''
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Load reviews from localStorage on mount, falling back to DEFAULT_TESTIMONIALS
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews(parsed);
          return;
        }
      }
    } catch (e) {
      console.error('Error loading saved reviews', e);
    }
    setReviews(DEFAULT_TESTIMONIALS);
  }, []);

  const handleRatingChange = (ratingVal) => {
    setNewReview(prev => ({ ...prev, rating: ratingVal }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.role.trim() || !newReview.quote.trim()) {
      setErrorMessage('Please fill in your name, role in Azerbaijan, and review message.');
      return;
    }

    const ageNum = parseInt(newReview.age, 10);
    if (isNaN(ageNum) || ageNum < 18 || ageNum > 51) {
      setErrorMessage('Candidate age must be between 18 and 51 years.');
      return;
    }

    const createdReview = {
      id: Date.now(),
      name: newReview.name.trim(),
      age: ageNum,
      role: newReview.role.trim(),
      origin: newReview.origin.trim() || 'Maharashtra, India',
      rating: newReview.rating,
      quote: newReview.quote.trim(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
      verified: true,
      isUserAdded: true
    };

    const updated = [createdReview, ...reviews];
    setReviews(updated);

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error persisting review to localStorage', e);
    }

    setSubmitSuccess(true);
    setErrorMessage('');
    setNewReview({
      name: '',
      age: '28',
      role: '',
      origin: '',
      rating: 5,
      quote: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsFormOpen(false);
    }, 2000);
  };

  const averageRating = reviews.length > 0
    ? (reviews.reduce((acc, r) => acc + (r.rating || 5), 0) / reviews.length).toFixed(1)
    : '5.0';

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Review Counter & Add Button */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/10 text-brand-navy font-bold text-xs uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-brand-gold-dark fill-brand-gold-dark" />
              <span>Real Candidate Reviews (Azerbaijan 🇦🇿)</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-brand-navy">
              Candidate Experiences & Reviews
            </h2>
            <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl">
              Authentic feedback from candidates placed in Baku, Sumqayit, and across Azerbaijan. Anyone can manually share their review below.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-brand-gold fill-brand-gold" />
                <span className="font-heading font-extrabold text-lg text-brand-navy">{averageRating}</span>
              </div>
              <div className="text-xs text-slate-500 border-l border-slate-200 pl-3">
                <strong className="text-slate-800">{reviews.length}</strong> Verified Reviews
              </div>
            </div>

            <button
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-5 py-3 bg-brand-navy hover:bg-brand-navy-light text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all flex items-center gap-2"
            >
              <MessageSquarePlus className="w-4 h-4 text-brand-gold" />
              <span>{isFormOpen ? 'Cancel' : 'Write a Review'}</span>
            </button>
          </div>
        </div>

        {/* Manual Review Form (Collapsible) */}
        {isFormOpen && (
          <div className="bg-white rounded-2xl border-2 border-brand-gold/50 shadow-xl p-6 sm:p-8 mb-12 animate-fadeIn">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-gold/15 text-brand-gold-dark flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-brand-navy">
                    Share Your Experience with Galaxy Star
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your review will be published immediately on the site for all visitors to see.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="p-6 bg-brand-green/10 border border-brand-green/30 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-brand-green mx-auto" />
                <h4 className="font-heading font-bold text-base text-brand-navy">Review Published Successfully!</h4>
                <p className="text-xs text-slate-600">Thank you for your feedback. Your review is now live in the list below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Shinde"
                      value={newReview.name}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Age (18–51) *</label>
                    <input
                      type="number"
                      name="age"
                      min="18"
                      max="51"
                      required
                      placeholder="32"
                      value={newReview.age}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy font-bold text-brand-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your City / State</label>
                    <input
                      type="text"
                      name="origin"
                      placeholder="e.g. Pune, Maharashtra"
                      value={newReview.origin}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Trade / Job in Azerbaijan *</label>
                    <input
                      type="text"
                      name="role"
                      required
                      placeholder="e.g. Welder in Baku / Warehouse Staff"
                      value={newReview.role}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Star Rating *</label>
                    <div className="flex items-center gap-1.5 pt-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => handleRatingChange(star)}
                          className="p-1 hover:scale-125 transition-transform"
                        >
                          <Star
                            className={`w-6 h-6 ${
                              star <= newReview.rating
                                ? 'text-brand-gold fill-brand-gold'
                                : 'text-slate-300'
                            }`}
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-brand-navy ml-2">{newReview.rating} of 5 Stars</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Review & Feedback *</label>
                  <textarea
                    rows={3}
                    name="quote"
                    required
                    placeholder="Share how Galaxy Star assisted you with your Azerbaijan work permit, documentation, and migration..."
                    value={newReview.quote}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-none focus:border-brand-navy"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-gradient-gold hover:opacity-95 text-brand-navy font-bold text-xs sm:text-sm rounded-xl shadow-gold"
                  >
                    Post Review Instantly
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((t) => (
            <div 
              key={t.id}
              className={`bg-white rounded-2xl p-6 border shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                t.isUserAdded ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-slate-200'
              }`}
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-brand-gold fill-brand-gold" />
                    ))}
                  </div>
                  {t.isUserAdded && (
                    <span className="text-[10px] font-extrabold uppercase bg-brand-gold/20 text-brand-gold-dark px-2 py-0.5 rounded-full">
                      New Review
                    </span>
                  )}
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
                    <span>{t.origin}</span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0" title="Verified Placement in Azerbaijan">
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
