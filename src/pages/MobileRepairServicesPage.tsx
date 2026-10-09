import React from 'react';
import { Smartphone, BatteryCharging, Zap, Volume2, Mic, Camera, Cpu, Wrench, AlertTriangle, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface MobileRepairServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const MobileRepairServicesPage: React.FC<MobileRepairServicesPageProps> = ({ onNavigate }) => {
  const services = [
    {
      title: 'Screen & Display Services',
      description: 'Diagnosis and replacement inquiries for cracked front glass, malfunctioning touch sensors, dead pixels, and black or flickering screens.',
      pageId: 'screen-display' as PageId,
      icon: Smartphone,
      accent: 'blue',
      symptoms: ['Cracked outer glass', 'Unresponsive touch areas', 'Display lines or discoloration', 'Complete black screen'],
    },
    {
      title: 'Battery Solutions',
      description: 'Assessing degraded lithium cells, battery replacement inquiries for rapid battery depletion, and safety evaluations for swollen battery cases.',
      pageId: 'battery-solutions' as PageId,
      icon: BatteryCharging,
      accent: 'cyan',
      symptoms: ['Battery drops quickly under normal use', 'Sudden device shutdowns', 'Phone swelling / lifted back cover', 'Phone requires continuous charger connection'],
    },
    {
      title: 'Charging & Power Ports',
      description: 'Addressing loose charging pins, bent ports, intermittent connection, and charging sub-board component checks.',
      pageId: 'charging-power' as PageId,
      icon: Zap,
      accent: 'amber',
      symptoms: ['Cable needs to be held at an angle', 'Slow or halted power intake', 'Debris or physical port damage', 'Device fails to recognize charger'],
    },
    {
      title: 'Speaker & Audio Problems',
      description: 'Troubleshooting earpieces for muffled voice calls, cracked loudspeaker audio during playback, and silent ringers.',
      icon: Volume2,
      accent: 'indigo',
      symptoms: ['Low or distorted in-call audio', 'Muffled speaker during media playback', 'No ringtone or notifications', 'Intermittent audio crackling'],
    },
    {
      title: 'Microphone Components',
      description: 'Testing and replacing microphone modules when callers cannot hear your voice or voice recordings sound static-heavy.',
      icon: Mic,
      accent: 'emerald',
      symptoms: ['Other party cannot hear calls', 'Static during voice messages', 'Video recordings lack audio', 'Microphone mesh blockage'],
    },
    {
      title: 'Camera Modules & Glass',
      description: 'Assisting with blurry rear camera focus, cracked external lens covers, front selfie camera errors, and black camera viewfinder screens.',
      icon: Camera,
      accent: 'rose',
      symptoms: ['Cracked camera protective glass', 'Camera app crashes or shows black screen', 'Autofocus cannot lock onto subject', 'Specks or spots inside lens module'],
    },
    {
      title: 'Buttons & Small Hardware',
      description: 'Resolving jammed power buttons, non-responsive volume rockers, damaged SIM trays, and internal hardware brackets.',
      icon: Cpu,
      accent: 'purple',
      symptoms: ['Stuck or loose power button', 'Volume keys failing to click', 'Lost or damaged SIM card tray', 'Internal bracket vibration issues'],
    },
    {
      title: 'Software Troubleshooting',
      description: 'Legitimate diagnostic help for system crash loops, firmware recovery, unresponsive operating systems, and official software configuration.',
      pageId: 'software-troubleshooting' as PageId,
      icon: Wrench,
      accent: 'sky',
      symptoms: ['Stuck on boot logo screen', 'Frequent system crashing/freezing', 'Post-update operation failure', 'Legitimate storage and OS diagnosis'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Technical Solutions
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Mobile Repair Services in Peshawar
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Comprehensive device inspection, component replacement inquiries, and hardware troubleshooting handled at Shop #17, Basement Bilour Plaza, Saddar Cantt, Peshawar.
        </p>

        {/* Mandatory Careful Wording Notice */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-800/60 text-amber-200/90 text-xs flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-amber-100">Service Confirmation:</strong> Services may depend on the device model and specific fault. Contact the shop to confirm part availability and feasibility before visiting.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  {item.pageId && (
                    <button
                      onClick={() => onNavigate(item.pageId!)}
                      className="text-[11px] font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Deep Guide</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Common Symptoms:
                  </div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {item.symptoms.map((sym, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cyan-400 shrink-0" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <a
                  href={getWhatsAppUrl(`Hi Global Mobile Parts Peshawar, I want to ask about ${item.title} for my device.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inquire on WhatsApp</span>
                </a>

                {item.pageId ? (
                  <button
                    onClick={() => onNavigate(item.pageId!)}
                    className="text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Details &rarr;
                  </button>
                ) : (
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    Call Shop &rarr;
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Repair Process Bridge */}
      <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Clear Workflow
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
            How Does the Device Assessment &amp; Repair Process Work?
          </h3>
          <p className="text-xs text-slate-400 max-w-xl">
            From initial fault description to inspection, solution identification, component fitting, and final testing.
          </p>
        </div>

        <button
          onClick={() => onNavigate('repair-process')}
          className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>View 5-Step Repair Process</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
