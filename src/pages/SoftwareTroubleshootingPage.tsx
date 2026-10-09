import React from 'react';
import { Wrench, ShieldCheck, AlertCircle, ArrowRight, MessageSquare, Phone, CheckCircle2, RefreshCw, Cpu, Smartphone } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface SoftwareTroubleshootingPageProps {
  onNavigate: (page: PageId) => void;
}

export const SoftwareTroubleshootingPage: React.FC<SoftwareTroubleshootingPageProps> = ({ onNavigate }) => {
  const categories = [
    {
      title: 'Operating System Recovery & Boot Loop Diagnosis',
      desc: 'Assisting devices stuck on initial brand logo screens, infinite restart loops, or recovery mode following failed OTA updates or corrupt storage sectors.',
    },
    {
      title: 'Severe Performance Sluggishness & Freezing',
      desc: 'Identifying system memory leaks, background process conflicts, and storage corruption causing persistent UI lockups and touch delays.',
    },
    {
      title: 'Official Firmware & Update Assistance',
      desc: 'Guiding customers through legitimate manufacturer software updates, resolving update verification errors, and clean system reinstallation.',
    },
    {
      title: 'App Crashing & Cache Cleanups',
      desc: 'Troubleshooting critical apps crashing on launch, Google Play Services errors, and resolving software permissions conflicts.',
    },
    {
      title: 'General Device Configuration & Setup',
      desc: 'Assisting customers with fresh phone setup, transferring data legitimately between devices, and configuring system settings.',
    },
    {
      title: 'Software vs. Hardware Fault Differentiation',
      desc: 'Determining whether an issue (such as touchscreen freezing or sudden reboots) is caused by corrupt firmware or a failing physical component.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Legitimate System Support
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Software &amp; Troubleshooting
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Diagnostic software support, official firmware recovery, and operating system troubleshooting handled ethically at Shop #17, Basement Bilour Plaza, Saddar Cantt, Peshawar.
        </p>

        {/* Ethical Standards Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-white">Strict Legal &amp; Ethical Policy:</strong> We strictly provide legitimate software troubleshooting. We do not perform security bypasses, iCloud/FRP lock removals on lost or stolen devices, IMEI modifications, or unauthorized access procedures. All services are conducted strictly within legal and manufacturer guidelines.
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3 hover:border-slate-700 transition-colors"
          >
            <div className="flex items-center gap-2 text-cyan-400">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <h3 className="text-base font-semibold text-white">{cat.title}</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {cat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Guidance Box */}
      <div className="bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-900/40 rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white font-display">
            Experiencing a Software Issue or Boot Failure?
          </h3>
          <p className="text-xs text-slate-300 max-w-xl">
            Describe the symptom to our technician on WhatsApp. We will let you know whether it requires an in-person physical assessment at Bilour Plaza.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I need help troubleshooting a software issue on my phone.')}
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
            <span>Call Shop</span>
          </a>
        </div>
      </div>
    </div>
  );
};
