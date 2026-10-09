import React from 'react';
import { ShieldCheck, MapPin, CheckCircle2, Phone, MessageSquare, ArrowRight, Wrench, Search, Users, ThumbsUp } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, REVIEW_THEMES, ASSET_IMAGES, getWhatsAppUrl } from '../constants';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          About The Business
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          About Global Mobile Parts Peshawar
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Operating from Shop #17 in the basement of Bilour Plaza, Saddar Cantt, Peshawar, Global Mobile Parts serves individuals and technicians seeking dependable smartphone parts and repair-related support.
        </p>
      </div>

      {/* Main Narrative Section with Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5 text-sm text-slate-300 leading-relaxed">
          <h2 className="text-2xl font-bold text-white font-display">
            Local Presence &amp; Operational Focus
          </h2>
          <p>
            Global Mobile Parts Peshawar is a local mobile phone repair and parts business operating from Shop #17 in the basement of Bilour Plaza, situated on Saddar Road in the commercial core of Saddar Cantt, Peshawar.
          </p>
          <p>
            The business focuses on two primary needs: helping mobile users and local repairers find the right replacement components for smartphones, and providing practical troubleshooting for common hardware faults like cracked displays, degraded battery cells, and unresponsive charging ports.
          </p>
          <p className="text-slate-400">
            Rather than making exaggerated claims or advertising unauthorized brand partnerships, our position is straightforward: we provide access to quality-focused replacement parts, check availability directly, and maintain direct phone and WhatsApp contact with our customers.
          </p>

          <div className="pt-2 flex items-center gap-3">
            <div className="px-3 py-1.5 rounded-lg bg-blue-950/60 border border-blue-800 text-blue-300 text-xs font-medium">
              Shop #17, Basement Bilour Plaza
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium">
              4.9 ★ (25 Google Reviews)
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <img
              src={ASSET_IMAGES.partsStation}
              alt="Mobile repair workbench and organized component parts station"
              className="w-full h-72 sm:h-80 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* What We Do / Customer Needs */}
      <div className="border-t border-slate-800 pt-12 space-y-8">
        <div>
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Core Service Tenets
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mt-1">
            Grounded in Real Customer Experience
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mt-2">
            Feedback from verified Google reviewers highlights the specific strengths that define our daily interactions with customers in Peshawar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Good Quality Parts</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customer reviews specifically note the quality and durability of replacement components sourced through Global Mobile Parts.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Parts Sourcing &amp; Arrangement</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When a component is not directly in current inventory, customer feedback confirms our willingness and ability to arrange parts from trusted channels.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Customer Trust</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Customers in Peshawar describe the shop as a reliable destination they can trust for honest advice without unnecessary repairs.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ThumbsUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Competitive &amp; Fair Rates</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Affordable, transparent component rates designed to keep smartphone repairs cost-effective for everyday phone owners.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Technical Diagnosis</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Physical inspection of broken screens, failing batteries, and power ports before recommending parts or repair steps.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-600/10 border border-rose-500/20 flex items-center justify-center text-rose-400">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">Convenient Bilour Plaza Hub</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Located in the basement of Bilour Plaza, Saddar Cantt—one of Peshawar's key electronics centers—making visits simple and accessible.
            </p>
          </div>
        </div>
      </div>

      {/* Transparent Disclaimer Notice */}
      <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 text-xs text-slate-400 leading-relaxed space-y-2">
        <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
          Honesty &amp; Independent Service Note
        </div>
        <p>
          Global Mobile Parts Peshawar is an independent local mobile repair and parts business. We do not claim official authorization or dealership status from any smartphone manufacturer (such as Apple, Samsung, Xiaomi, Vivo, Oppo, or others). All repair assessments and component inquiries are handled independently based on model compatibility.
        </p>
      </div>

      {/* CTA Block */}
      <div className="bg-gradient-to-r from-blue-950/80 to-slate-900 border border-blue-900/60 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white font-display">
            Have a Question About a Mobile Part or Repair?
          </h3>
          <p className="text-xs text-slate-300">
            Contact Shop #17, Bilour Plaza directly by phone or WhatsApp.
          </p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call Now</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};
