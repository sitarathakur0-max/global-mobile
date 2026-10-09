import React, { useState } from 'react';
import { MessageSquare, PhoneCall, X } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const whatsappUrl = getWhatsAppUrl(
    'Hi Global Mobile Parts Peshawar, I want to ask about a mobile part or repair.'
  );

  return (
    <aside
      aria-label="Contact actions"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5"
    >
      {/* Tooltip on hover / view */}
      {showTooltip && (
        <div
          role="tooltip"
          className="bg-slate-900 text-slate-100 text-xs px-3.5 py-2 rounded-xl shadow-2xl border border-slate-700/80 mb-1 max-w-[220px] text-right animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <div className="font-semibold text-cyan-400">Shop #17 Bilour Plaza</div>
          <div className="text-[11px] text-slate-300">Ask about mobile parts availability or repair</div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/60 transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/40"
        aria-label="Chat on WhatsApp with Global Mobile Parts Peshawar"
      >
        {/* Subtle ping ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-pulse pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 2c-5.508 0-9.986 4.477-9.986 9.984 0 1.761.458 3.479 1.332 4.992L2 22l5.174-1.357c1.464.798 3.111 1.22 4.857 1.22 5.508 0 9.986-4.478 9.986-9.984 0-5.507-4.478-9.984-9.986-9.984zm5.828 14.113c-.244.685-1.42 1.309-1.961 1.385-.503.071-1.157.102-3.734-.963-3.292-1.36-5.419-4.71-5.583-4.931-.164-.22-1.33-1.77-1.33-3.374 0-1.604.84-2.395 1.139-2.723.299-.328.653-.41.872-.41.218 0 .436.002.628.012.203.01.474-.078.742.565.275.66.938 2.29.938 2.29.102.247.112.433-.021.62-.133.187-.202.304-.397.533-.196.228-.415.51-.593.685-.2.196-.407.41-.176.808.232.397 1.031 1.701 2.213 2.753 1.519 1.353 2.798 1.771 3.196 1.968.397.196.63.164.862-.102.232-.266.993-1.158 1.258-1.554.266-.396.531-.33.896-.196.365.133 2.316 1.092 2.713 1.291.397.199.662.299.76.464.098.165.098.96-.146 1.645z" />
        </svg>

        {/* Floating badge for active online status */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full" />
      </a>
    </aside>
  );
};
