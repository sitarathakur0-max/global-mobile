import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageSquare, Phone, ArrowRight, UserCheck } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, CUSTOMER_REVIEWS, REVIEW_THEMES, getWhatsAppUrl } from '../constants';

interface CustomerReviewsPageProps {
  onNavigate: (page: PageId) => void;
}

export const CustomerReviewsPage: React.FC<CustomerReviewsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Verified Feedback
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Customer Reviews &amp; Ratings
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Real feedback from local customers in Peshawar who have experienced our mobile parts availability and repair services firsthand.
        </p>

        {/* Real Rating Card */}
        <div className="flex flex-wrap items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-3">
            <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
              {BUSINESS_INFO.rating}
            </span>
            <div>
              <div className="flex text-amber-400 text-sm">
                ★★★★★
              </div>
              <div className="text-xs text-slate-400">
                Out of 5.0 Rating
              </div>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs text-slate-300">
            Based on <strong className="text-white">{BUSINESS_INFO.totalReviews} Google Reviews</strong> for Shop #17 Bilour Plaza, Saddar Cantt, Peshawar.
          </div>
        </div>
      </div>

      {/* Actual Verified Reviews List (Strictly prompt-supplied) */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Verified Customer Words
          </div>
          <h2 className="text-2xl font-bold text-white font-display mt-1">
            Featured Google Reviews
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Direct feedback left by customers on Google for Global Mobile Parts Peshawar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-colors relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-cyan-400">
                    {review.highlight}
                  </span>
                </div>

                <blockquote className="text-sm text-slate-200 leading-relaxed italic">
                  "{review.content}"
                </blockquote>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold text-xs">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {review.name}
                  </div>
                  <div className="text-[11px] text-slate-400 flex items-center gap-1">
                    <UserCheck className="w-3 h-3 text-emerald-400" />
                    <span>Verified Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Themes Section */}
      <div className="border-t border-slate-800 pt-12 space-y-6">
        <div>
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Customer Feedback Themes
          </div>
          <h2 className="text-2xl font-bold text-white font-display mt-1">
            What Customers Consistently Highlight
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Analysis of customer satisfaction points reflected across review feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REVIEW_THEMES.map((theme, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-xl p-5 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <h3 className="text-sm font-semibold text-white">{theme.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Review CTA Bridge */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-lg font-bold text-white font-display">
            Experience Our Service in Peshawar
          </h3>
          <p className="text-xs text-slate-400">
            Visit Shop #17 in the basement of Bilour Plaza or contact us directly on WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about your services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors cursor-pointer"
          >
            <span>Visit Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};
