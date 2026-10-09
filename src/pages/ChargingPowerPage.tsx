import React from 'react';
import { Zap, AlertTriangle, CheckCircle2, ArrowRight, MessageSquare, Phone, ShieldCheck, HelpCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, ASSET_IMAGES, getWhatsAppUrl } from '../constants';

interface ChargingPowerPageProps {
  onNavigate: (page: PageId) => void;
}

export const ChargingPowerPage: React.FC<ChargingPowerPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Power Sub-board &amp; Port Diagnosis
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Charging &amp; Power Solutions
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Troubleshooting loose Type-C/Micro-USB ports, damaged charging sub-boards, and power intake failures at Shop #17, Basement Bilour Plaza, Saddar Cantt, Peshawar.
        </p>

        {/* Diagnosis Rationale Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Why Diagnosis is Crucial:</strong> Charging failures can originate from multiple distinct root causes—including physical port damage, compacted pocket lint, cracked solder contacts, a damaged charging flex ribbon, a degraded battery, or a logic board power management fault. Proper physical inspection identifies the true issue before replacing parts unnecessarily.
          </p>
        </div>
      </div>

      {/* Hero Visual & Narrative */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">
            Restoring Reliable Power Intake
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Daily wear and tear, cable tugging, dust accumulation, and moisture can compromise a smartphone's charging socket. In many modern phones, the charging port sits on an independent lower sub-board or daughterboard alongside the primary microphone.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            Global Mobile Parts inspects the pins under magnification, checks amperage intake, and verifies whether a safe port cleaning, pin realignment, or sub-board replacement is needed.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to discuss a Charging Problem with my phone.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss a Charging Problem</span>
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
              src={ASSET_IMAGES.chargingPort}
              alt="Smartphone USB-C charging port board with ribbon connectors held by precision tweezers"
              className="w-full h-72 sm:h-80 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Common Charging Symptoms */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Fault Checklist
          </div>
          <h2 className="text-2xl font-bold text-white font-display mt-1">
            Common Charging Symptoms We Evaluate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Loose Cable Connection</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Charging cable falls out easily or must be held at an awkward upward angle to trigger the charging lightning icon.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Intermittent Charging Cycles</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Phone repeatedly connects and disconnects every few seconds, causing notification chimes without increasing battery level.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Completely Dead / No Power Intake</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Device shows zero response when plugged into multiple known-working chargers and outlets.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Moisture or Debris Warnings</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Persistent on-screen warnings claiming water or debris is detected in the port even when completely dry.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Overheating at the Base</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The bottom charging zone becomes unusually hot, indicating potential shorting in the port pins or sub-board capacitors.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2">
            <h3 className="text-base font-semibold text-white">Sub-board Sourcing</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We check availability and can arrange model-specific charging daughterboards and flex connectors when required.
            </p>
          </div>
        </div>
      </div>

      {/* Inquiry Form Bridge */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-display">
            Need Your Phone's Charging Port Looked At?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Send us your device model or visit Shop #17 in Basement Bilour Plaza, Saddar Cantt.
          </p>
        </div>

        <button
          onClick={() => onNavigate('parts-availability')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Ask About Charging Port</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
