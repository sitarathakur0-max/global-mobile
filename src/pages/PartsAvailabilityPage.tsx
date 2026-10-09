import React from 'react';
import { Phone, MessageSquare, ShieldCheck, CheckCircle2, Clock, HelpCircle, AlertCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';
import { PartsInquiryForm } from '../components/PartsInquiryForm';

interface PartsAvailabilityPageProps {
  onNavigate: (page: PageId) => void;
}

export const PartsAvailabilityPage: React.FC<PartsAvailabilityPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Parts Sourcing &amp; Inquiries
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Looking for a Specific Mobile Part?
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          If a required mobile part is not immediately available in shop stock, customers can contact us to ask about sourcing and arranging the required component from other places.
        </p>
      </div>

      {/* Main Form & Sourcing Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: The Interactive WhatsApp Form */}
        <div className="lg:col-span-7">
          <PartsInquiryForm />
        </div>

        {/* Right: Sourcing Information & Customer Feedback Basis */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-white font-display">
              How Parts Sourcing Works
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Based on verified customer feedback (such as customer Muhammad Afaq noting: <em>"also they arrange Mobile parts for you from other Place"</em>), our shop actively assists clients when components are hard to locate locally.
            </p>

            <ul className="space-y-3 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Model Identification:</strong> Provide exact brand, series, and revision number.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Direct Sourcing Check:</strong> We verify if the piece is in shop stock or can be procured from trusted parts distributors.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Direct Quote &amp; Timing:</strong> You receive immediate confirmation of price and availability over WhatsApp or phone.</span>
              </li>
            </ul>
          </div>

          {/* Sourcing Realism Notice */}
          <div className="bg-slate-900/40 border border-slate-800 rounded-2xl p-5 text-xs text-slate-400 space-y-2">
            <div className="flex items-center gap-2 text-slate-300 font-semibold">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Availability Transparency</span>
            </div>
            <p className="leading-relaxed">
              While we make every effort to arrange required components through our supplier network, availability depends on market stock and device rarity. We do not guarantee that every requested part can always be sourced, but we provide an honest, fast answer.
            </p>
          </div>

          {/* Direct Call Alternative */}
          <div className="bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-900/40 rounded-2xl p-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-white">Prefer to Call Directly?</div>
              <div className="text-[11px] text-slate-400">Speak with technician at Bilour Plaza</div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
