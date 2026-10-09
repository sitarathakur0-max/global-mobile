import React from 'react';
import { Star, MapPin, Clock, Wrench } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export const TrustStrip: React.FC = () => {
  return (
    <div className="w-full bg-slate-900/95 border-y border-slate-800 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/80">
          {/* Trust 1: Rating */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2 sm:py-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-tight flex items-center gap-1.5 font-display">
                <span>{BUSINESS_INFO.rating}</span>
                <span className="text-amber-400 text-xs">★★★★★</span>
              </div>
              <div className="text-xs text-slate-400">
                {BUSINESS_INFO.totalReviews} Google Reviews
              </div>
            </div>
          </div>

          {/* Trust 2: Bilour Plaza Saddar */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2 sm:py-0">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Bilour Plaza
              </div>
              <div className="text-xs text-slate-400">
                Saddar Cantt, Peshawar
              </div>
            </div>
          </div>

          {/* Trust 3: Hours */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2 sm:py-0">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Open Until 9 PM
              </div>
              <div className="text-xs text-slate-400">
                Daily Operational Hours
              </div>
            </div>
          </div>

          {/* Trust 4: Specialization */}
          <div className="flex items-center gap-3.5 px-2 sm:px-4 py-2 sm:py-0">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Mobile Parts & Repair
              </div>
              <div className="text-xs text-slate-400">
                Parts Sourcing & Diagnostics
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
