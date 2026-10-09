import React from 'react';
import { Phone, MapPin, Clock, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-300 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Business Profile */}
          <div className="space-y-4">
            <div>
              <span className="font-display font-bold tracking-tight text-lg text-white block">
                GLOBAL MOBILE PARTS
              </span>
              <span className="text-xs uppercase tracking-widest font-semibold text-cyan-400 block">
                PESHAWAR
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Global Mobile Parts Peshawar is a local mobile phone repair and mobile parts business located in Bilour Plaza, Saddar Cantt, Peshawar. Inquire for parts availability and reliable device repair.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>4.9 ★ Rating based on 25 Google Reviews</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('repair-services')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mobile-parts')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Mobile Parts</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('repair-process')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Repair Process</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('customer-reviews')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Reviews (4.9 ★)</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>FAQ</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Gallery</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-cyan-500/70" />
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Popular Services
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('mobile-parts')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Mobile Parts Sourcing</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('screen-display')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Screen & Display Repair</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('battery-solutions')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Battery Solutions</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('charging-power')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Charging & Power Sub-boards</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('software-troubleshooting')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Software Troubleshooting</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('parts-categories')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Parts Categories</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-choose-us')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white"
                >
                  <ChevronRight className="w-3 h-3 text-blue-500/70" />
                  <span>Why Choose Us</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Visit & Contact */}
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-white">
              Visit / Contact
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div className="text-slate-400">
                  <div className="font-semibold text-slate-200">Shop #17, Basement Bilour Plaza</div>
                  <div>Saddar Cantt, Saddar Rd, Peshawar, 25000</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Ref: {BUSINESS_INFO.locationCode}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-slate-200 hover:text-cyan-400 font-medium transition-colors"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-slate-300">Open · Closes 9 PM</span>
              </div>

              <div className="pt-2">
                <a
                  href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about a mobile part or repair.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white font-medium text-xs transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Global Mobile Parts Peshawar. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Shop #17 Basement Bilour Plaza</span>
            <span aria-hidden="true">·</span>
            <span>Saddar Cantt, Peshawar</span>
            <span aria-hidden="true">·</span>
            <span>Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
