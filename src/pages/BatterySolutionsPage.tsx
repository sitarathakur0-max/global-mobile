import React from 'react';
import { BatteryCharging, AlertTriangle, ShieldCheck, ArrowRight, MessageSquare, Phone, CheckCircle2, BatteryWarning } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, ASSET_IMAGES, getWhatsAppUrl } from '../constants';

interface BatterySolutionsPageProps {
  onNavigate: (page: PageId) => void;
}

export const BatterySolutionsPage: React.FC<BatterySolutionsPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Power &amp; Cell Inspection
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Battery Solutions
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Battery assessments, replacement inquiries, and degraded cell diagnosis for mobile devices at Shop #17, Basement Bilour Plaza, Saddar Cantt, Peshawar.
        </p>

        {/* Critical Safety Notice */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/80 text-amber-200 text-xs flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-amber-100 font-semibold">Important Safety Warning:</strong> Battery problems should be inspected professionally, especially if a battery appears swollen or physically damaged. Do not attempt to puncture, bend, or force open a pressurized lithium cell at home.
          </div>
        </div>
      </div>

      {/* Hero Visual & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">
            Signs Your Phone Battery Needs Inspection
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Smartphone lithium-ion batteries naturally degrade over hundreds of charge cycles. As chemical aging progresses, internal resistance climbs and capacity shrinks, leading to noticeable performance drops and unpredictable battery percentage readings.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            If your mobile device is shutting down unexpectedly or lasting only a fraction of its normal runtime, visit Global Mobile Parts in Bilour Plaza to test cell health and check replacement battery availability.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about Battery Availability for my mobile.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask About Battery Availability</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call +92 345 9281414</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={ASSET_IMAGES.batteryPack}
              alt="Replacement smartphone internal lithium-ion battery pack with flex connector"
              className="w-full h-72 sm:h-80 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Battery Symptoms Grid */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Diagnostic Indicators
          </div>
          <h2 className="text-2xl font-bold text-white font-display mt-1">
            Common Battery Degradation Symptoms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Fast Battery Drain</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Battery percentage drops from 80% to 20% in an hour or two despite moderate usage, indicating severe chemical degradation.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Sudden Unexpected Shutdowns</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The phone shuts off abruptly while displaying 25% or 40% battery, especially when opening cameras or during phone calls.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Swollen Battery or Screen Lifting</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Gas buildup pushes against the phone screen or rear panel. This is a fire safety hazard that requires immediate professional extraction.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Overheating During Charging</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Device becomes excessively hot to the touch during normal charging cycles due to elevated internal resistance.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Tethered Dependency</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The smartphone functions only when physically plugged into a power bank or wall charger and dies immediately when unplugged.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Parts Sourcing Assistance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customer feedback highlights our capability to arrange compatible battery packs when an exact model code is not readily found.
            </p>
          </div>
        </div>
      </div>

      {/* Inquiry Form Bridge */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-display">
            Need a Replacement Battery for Your Smartphone?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Provide your exact device model so we can check availability or arrange a replacement pack.
          </p>
        </div>

        <button
          onClick={() => onNavigate('parts-availability')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Check Battery Availability</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
