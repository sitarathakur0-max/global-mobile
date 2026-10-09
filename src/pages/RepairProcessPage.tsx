import React from 'react';
import { MessageSquare, Search, Wrench, CheckCircle2, Phone, Smartphone, AlertCircle, ArrowRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface RepairProcessPageProps {
  onNavigate: (page: PageId) => void;
}

export const RepairProcessPage: React.FC<RepairProcessPageProps> = ({ onNavigate }) => {
  const steps = [
    {
      number: '01',
      title: 'Tell Us the Problem',
      summary: 'Initial contact via WhatsApp, phone, or shop visit.',
      details: 'You describe the symptoms—such as a blank screen, rapid battery drain, or unresponsive charging socket. Providing the exact phone brand and model code allows us to check initial parts availability and give realistic guidance.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Device Assessment',
      summary: 'Physical examination at Shop #17, Basement Bilour Plaza.',
      details: 'Our technician inspects the device directly to evaluate the underlying hardware cause, checking for physical frame bends, internal liquid contact, connector damage, or display panel separation.',
      icon: Search,
    },
    {
      number: '03',
      title: 'Identify the Required Solution',
      summary: 'Confirming component requirements and pricing.',
      details: 'We explain what component is needed (e.g., screen assembly, replacement battery, charging sub-board) and confirm whether it is immediately in stock or needs to be arranged from trusted supplier sources.',
      icon: Smartphone,
    },
    {
      number: '04',
      title: 'Repair & Part Installation',
      summary: 'Careful component replacement using precision tools.',
      details: 'Using anti-static ESD mats, precision heat equipment, and calibrated drivers, the damaged part is extracted and the replacement component is seated and secured cleanly.',
      icon: Wrench,
    },
    {
      number: '05',
      title: 'Testing & Handover',
      summary: 'Functional verification before you leave.',
      details: 'We test essential functions—touch response, screen uniform brightness, battery charging current, audio output, or camera clarity—before handing the device back to you.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Structured Workflow
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Our 5-Step Repair Process
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          A clear, straightforward procedure designed to keep you informed from initial diagnosis through part arrangement and final device testing.
        </p>

        {/* Realism Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Realistic Expectations:</strong> Repair timelines and part sourcing timeframes vary depending on device complexity, fault severity, and component availability. We do not make generic "instant 10-minute" promises; we prioritize thorough, correct installation.
          </p>
        </div>
      </div>

      {/* Polished Editorial Timeline */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          return (
            <div key={idx} className="relative group">
              {/* Timeline Marker */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-950 border-2 border-cyan-500/80 flex items-center justify-center text-cyan-400 text-xs font-bold font-mono shadow-md group-hover:border-cyan-400 group-hover:bg-cyan-950/40 transition-colors">
                {step.number}
              </div>

              {/* Step Card */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 space-y-3 hover:border-slate-700 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400 shrink-0">
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {step.number}. {step.title}
                      </h3>
                      <div className="text-xs text-cyan-400 font-medium">
                        {step.summary}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                  {step.details}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Process CTA */}
      <div className="bg-gradient-to-r from-blue-950/70 to-slate-900 border border-blue-900/40 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white font-display">
            Ready to Begin Step 01?
          </h3>
          <p className="text-xs text-slate-300">
            Tell us about your phone model and fault symptoms on WhatsApp or call our shop directly.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <a
            href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to describe a problem with my mobile phone.')}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Describe Problem on WhatsApp</span>
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
