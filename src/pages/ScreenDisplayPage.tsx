import React from 'react';
import { Smartphone, CheckCircle2, AlertTriangle, ArrowRight, MessageSquare, Phone, EyeOff, Layers, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, ASSET_IMAGES, getWhatsAppUrl } from '../constants';

interface ScreenDisplayPageProps {
  onNavigate: (page: PageId) => void;
}

export const ScreenDisplayPage: React.FC<ScreenDisplayPageProps> = ({ onNavigate }) => {
  const issues = [
    {
      title: 'Cracked Outer Glass & Impact Damage',
      desc: 'The outer protective glass is cracked from drops or pressure while the inner display panel might still show graphics or have fractured glass chips.',
    },
    {
      title: 'Touch Response & Ghost Touch',
      desc: 'Touch digitizer is completely unresponsive, registers false touches across the screen, or only functions in selective quadrants.',
    },
    {
      title: 'Black Screen / No Display Output',
      desc: 'The phone powers on, vibrates, or plays notification chimes, but the screen remains completely dark due to an internal display panel failure or disconnected flex ribbon.',
    },
    {
      title: 'Display Flickering & Vertical Colored Lines',
      desc: 'Green, purple, or white vertical lines appearing down the panel, severe flickering at certain brightness levels, or intermittent picture loss.',
    },
    {
      title: 'Bleeding Ink & Dead Pixels',
      desc: 'Dark blotches spreading across an OLED or LCD screen following physical impact, obstructing text and user interface elements.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Display Diagnostics
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Screen &amp; Display Services
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Screen replacement assessments and display component inquiries for smartphones at Shop #17, Basement Bilour Plaza, Saddar Cantt, Peshawar.
        </p>

        {/* Clear Transparency Banner */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-white">Clear Advisory:</strong> Replacement screen availability and repair compatibility depend on your exact phone model, panel type, and frame condition. Contact our shop directly to discuss options for your device.
        </div>
      </div>

      {/* Hero Visual & Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 space-y-4">
          <h2 className="text-2xl font-bold text-white font-display">
            Understanding Screen Failures
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Modern mobile displays are multi-layer assemblies consisting of outer glass, capacitive touch digitizers, display backlights/matrices, and delicate flex cables. A drop or hard impact can damage one or several of these layers.
          </p>
          <p className="text-sm text-slate-400 leading-relaxed">
            At Global Mobile Parts Peshawar, we physically inspect the frame, test whether touch and display controller ICs are responding, and advise whether a replacement screen assembly is available or can be sourced.
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about Screen Repair for my mobile.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Ask About Screen Repair</span>
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
              src={ASSET_IMAGES.displayScreen}
              alt="Replacement smartphone display panel and ribbon cable connectors"
              className="w-full h-72 sm:h-80 object-cover object-center"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      {/* Common Screen Issues */}
      <div className="space-y-6">
        <div>
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Symptom Checklist
          </div>
          <h2 className="text-2xl font-bold text-white font-display mt-1">
            Common Screen &amp; Touch Issues We Inspect
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-2 text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Inquiry Form Bridge */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-display">
            Need a Screen Replacement for Your Model?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Send us your mobile brand and model details so we can check display availability.
          </p>
        </div>

        <button
          onClick={() => onNavigate('parts-availability')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Check Screen Availability</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
