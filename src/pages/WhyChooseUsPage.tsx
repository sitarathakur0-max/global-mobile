import React from 'react';
import { ShieldCheck, Star, MapPin, Search, Phone, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, CUSTOMER_REVIEWS, getWhatsAppUrl } from '../constants';

interface WhyChooseUsPageProps {
  onNavigate: (page: PageId) => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({ onNavigate }) => {
  const pillars = [
    {
      title: 'Quality-Focused Parts',
      detail: 'Customer reviews specifically praise the quality and durability of mobile parts provided by Global Mobile Parts. We focus on reliable replacement components that restore device operation properly.',
      basis: 'Verified Google Review: "Good Quality and Available every Parts of Mobile..."',
      icon: CheckCircle2,
      color: 'blue',
    },
    {
      title: 'Parts Availability & Inquiry',
      detail: 'Customers can contact us directly via WhatsApp or phone to check current stock and confirm whether a specific replacement component is on hand before making the trip.',
      basis: 'Direct inquiry channel for displays, batteries, charging boards, and internal hardware.',
      icon: Search,
      color: 'cyan',
    },
    {
      title: 'Parts Sourcing & Arrangement',
      detail: 'If a component is rare or not immediately on hand in the shop, customer feedback confirms our willingness and capability to arrange parts from trusted distribution sources.',
      basis: 'Verified Google Review: "...and also they arrange Mobile parts for you from other Place"',
      icon: ShieldCheck,
      color: 'emerald',
    },
    {
      title: 'Convenient Bilour Plaza Location',
      detail: 'Located at Shop #17 in the basement of Bilour Plaza, Saddar Cantt, on Saddar Road in Peshawar. Bilour Plaza is well known and easily accessible for mobile and electronics shoppers.',
      basis: 'Open daily until 9:00 PM with direct road access in Saddar Cantt.',
      icon: MapPin,
      color: 'amber',
    },
    {
      title: 'Direct Personal Contact',
      detail: 'No automated call menus or delayed ticketing bots. You speak directly with our shop technicians via phone (+92 345 9281414) or WhatsApp for immediate answers.',
      basis: 'Active direct communication on mobile and messaging.',
      icon: Phone,
      color: 'indigo',
    },
    {
      title: 'Exceptional Local Trust (4.9 Rating)',
      detail: 'The business currently holds a 4.9 out of 5.0 Google rating across 25 reviews, demonstrating consistent customer satisfaction and honest service.',
      basis: 'Verified Google Review: "I can get my mobile fixed with my eyes closed and I can trust them..."',
      icon: Star,
      color: 'rose',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Factual Differentiation
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Why Choose Global Mobile Parts Peshawar
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Our reputation is founded strictly on verifiable customer feedback and local service integrity in Saddar Cantt, Peshawar.
        </p>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pillars.map((pillar, idx) => {
          const PillarIcon = pillar.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                  <PillarIcon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.detail}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80">
                <div className="text-[11px] text-cyan-400/90 font-medium italic">
                  {pillar.basis}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Verified Reviews Adjacency Block */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Customer Voices
            </div>
            <h3 className="text-xl font-bold text-white font-display mt-1">
              Grounded in Real Customer Words
            </h3>
          </div>
          <button
            onClick={() => onNavigate('customer-reviews')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
          >
            <span>See Reviews Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {CUSTOMER_REVIEWS.map((r, i) => (
            <div key={i} className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 text-xs space-y-2">
              <div className="text-amber-400 flex">★★★★★</div>
              <p className="text-slate-300 italic">"{r.content}"</p>
              <div className="text-slate-500 font-semibold pt-1">— {r.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-900/40 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold text-white font-display">
            Need Parts or Repair in Saddar, Peshawar?
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Call our shop directly or message us on WhatsApp to check availability.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
