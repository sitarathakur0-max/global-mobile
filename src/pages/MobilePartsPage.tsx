import React from 'react';
import { Smartphone, BatteryCharging, Zap, Volume2, Mic, Camera, Cpu, Wrench, ArrowRight, MessageSquare, Phone, Info } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, PARTS_CATEGORIES, ASSET_IMAGES, getWhatsAppUrl } from '../constants';

interface MobilePartsPageProps {
  onNavigate: (page: PageId) => void;
}

export const MobilePartsPage: React.FC<MobilePartsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Component Inquiry
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Mobile Parts
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Inquire directly with Global Mobile Parts Peshawar regarding mobile phone components, replacement modules, and parts arrangement for a wide range of devices.
        </p>

        {/* Mandatory Availability Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Inquiry Notice:</strong> The component categories shown below represent areas for customer inquiry and do not constitute a guaranteed live inventory list. Please contact the shop via WhatsApp or phone to <span className="text-cyan-300 font-semibold">ask about availability</span> for your exact model.
          </p>
        </div>
      </div>

      {/* Hero Highlight Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10">
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Parts Sourcing in Bilour Plaza
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Parts Can Be Arranged When Needed
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Customer feedback emphasizes that if a specific smartphone part is not immediately available at the shop, our team can arrange parts from other trusted places when requested.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('parts-availability')}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Submit Part Request Online</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Shop: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            <img
              src={ASSET_IMAGES.displayScreen}
              alt="Replacement smartphone screen assembly and flex ribbon cables"
              className="w-full h-64 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Inquiry Categories */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Categories For Inquiry
            </div>
            <h2 className="text-2xl font-bold text-white font-display mt-1">
              Smartphone Component Categories
            </h2>
          </div>
          <button
            onClick={() => onNavigate('parts-categories')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
          >
            <span>View Full Category Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PARTS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-[10px] text-cyan-400 uppercase tracking-wider font-semibold">
                    Inquiry
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {cat.description}
                </p>

                <div className="pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">
                    Examples:
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {cat.examples.map((ex, eIdx) => (
                      <li key={eIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{ex}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hi Global Mobile Parts Peshawar, I want to ask about availability of ${cat.name} for my phone.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask Availability</span>
                </a>

                {cat.pageId && (
                  <button
                    onClick={() => onNavigate(cat.pageId!)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Dedicated Page &rarr;
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
