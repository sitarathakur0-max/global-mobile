import React from 'react';
import { Smartphone, BatteryCharging, Zap, Volume2, Camera, Cpu, Wrench, MessageSquare, ArrowRight, ShieldAlert } from 'lucide-react';
import { PageId } from '../types';
import { PARTS_CATEGORIES, getWhatsAppUrl } from '../constants';

interface PartsCategoriesPageProps {
  onNavigate: (page: PageId) => void;
}

export const PartsCategoriesPage: React.FC<PartsCategoriesPageProps> = ({ onNavigate }) => {
  const iconMap: Record<string, React.ElementType> = {
    Smartphone,
    BatteryCharging,
    Zap,
    Volume2,
    Camera,
    Cpu,
    Wrench,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Parts Catalog Overview
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Parts Categories
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Explore replacement hardware categories available for inquiry at Global Mobile Parts Peshawar. Select any category to connect directly via WhatsApp and verify availability.
        </p>

        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Customer Guidance:</strong> Because mobile phone models require exact version and connector matches, please have your model code ready when asking on WhatsApp.
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PARTS_CATEGORIES.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || Wrench;
          return (
            <div
              key={cat.id}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors uppercase tracking-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-cyan-400/90 font-medium mt-0.5">
                    {cat.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.description}
                </p>

                <div className="space-y-1 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Common Components:
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {cat.examples.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                <a
                  href={getWhatsAppUrl(`Hi Global Mobile Parts Peshawar, I want to ask about availability for ${cat.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask About Availability</span>
                </a>

                {cat.pageId && (
                  <button
                    onClick={() => onNavigate(cat.pageId!)}
                    className="text-xs text-slate-400 hover:text-white transition-colors py-2 text-center cursor-pointer"
                  >
                    View Details &rarr;
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Sourcing Bridge */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white font-display">
            Need a Specific Part Not Listed Above?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Customer reviews highlight our ability to arrange mobile parts from other places when needed. Fill out our simple inquiry form to check sourcing options.
          </p>
        </div>

        <button
          onClick={() => onNavigate('parts-availability')}
          className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Open Parts Inquiry Form</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
