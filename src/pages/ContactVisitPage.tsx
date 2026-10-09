import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, Wrench, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';
import { PartsInquiryForm } from '../components/PartsInquiryForm';

interface ContactVisitPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactVisitPage: React.FC<ContactVisitPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Direct Connect &amp; Shop Details
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Contact &amp; Visit Us
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Reach Global Mobile Parts Peshawar by phone or WhatsApp, or visit our physical shop located in the basement of Bilour Plaza, Saddar Cantt, Peshawar.
        </p>
      </div>

      {/* Main Grid: Details on Left, Interactive WhatsApp Inquiry on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Contact & Location Information */}
        <div className="lg:col-span-5 space-y-6">
          {/* Shop Physical Address Box */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400">
              <MapPin className="w-5 h-5 shrink-0" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Shop Address &amp; Location
              </h2>
            </div>

            <div className="space-y-1.5 text-sm text-slate-300">
              <div className="font-bold text-white text-base">
                GLOBAL MOBILE PARTS PESHAWAR
              </div>
              <div className="font-semibold text-slate-200">
                Shop #17, Basement Bilour Plaza
              </div>
              <div>Saddar Rd, Saddar Cantt</div>
              <div>Peshawar, 25000, Pakistan</div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 space-y-2 text-xs">
              <div className="text-slate-400">
                <span className="font-medium text-slate-300">Location Reference:</span> {BUSINESS_INFO.locationCode}
              </div>
              <div className="text-slate-400">
                <span className="font-medium text-slate-300">Building:</span> Bilour Plaza (Basement Level, Shop 17)
              </div>
            </div>
          </div>

          {/* Operating Hours Box */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400">
              <Clock className="w-5 h-5 shrink-0" />
              <h2 className="text-base font-bold text-white uppercase tracking-wider">
                Business Hours
              </h2>
            </div>

            <div className="text-sm text-slate-200 space-y-1">
              <div className="flex items-center justify-between">
                <span>Daily Schedule:</span>
                <span className="font-semibold text-emerald-400">Open · Closes 9 PM</span>
              </div>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                We are open throughout the day until 9:00 PM. We advise calling before visiting if you are traveling from outside Saddar or late in the evening.
              </p>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Immediate Contact Channels
            </div>

            <div className="space-y-2.5">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Before Visiting: {BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I am planning to visit the shop.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-slate-500 text-center">
              Direct connection to shop technicians · No automated bot delays
            </p>
          </div>
        </div>

        {/* Right: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-white font-display">
              Send an Instant Parts or Repair Inquiry
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Fill in your device details to generate a formatted message directly to our WhatsApp.
            </p>
          </div>
          <PartsInquiryForm />
        </div>
      </div>
    </div>
  );
};
