import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, ChevronDown } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const navItems: { label: string; page: PageId }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'repair-services' },
    { label: 'Mobile Parts', page: 'mobile-parts' },
    { label: 'Reviews', page: 'customer-reviews' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Gallery', page: 'gallery' },
    { label: 'Contact', page: 'contact' },
  ];

  const subPages: { label: string; page: PageId; group: string }[] = [
    { label: 'Parts Categories', page: 'parts-categories', group: 'Parts' },
    { label: 'Parts Availability & Inquiry', page: 'parts-availability', group: 'Parts' },
    { label: 'Screen & Display', page: 'screen-display', group: 'Specialties' },
    { label: 'Battery Solutions', page: 'battery-solutions', group: 'Specialties' },
    { label: 'Charging & Power', page: 'charging-power', group: 'Specialties' },
    { label: 'Software & Troubleshooting', page: 'software-troubleshooting', group: 'Specialties' },
    { label: '5-Step Repair Process', page: 'repair-process', group: 'Process' },
    { label: 'Why Choose Us', page: 'why-choose-us', group: 'Trust' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark (Single text element wordmark as per Top Bar Contract) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
          aria-label="Global Mobile Parts Peshawar - Home"
        >
          <span className="font-display font-bold tracking-tight text-lg sm:text-xl text-white group-hover:text-cyan-400 transition-colors block">
            GLOBAL MOBILE PARTS
          </span>
          <span className="text-[11px] tracking-widest uppercase font-semibold text-cyan-400/90 block -mt-1">
            PESHAWAR
          </span>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-medium text-slate-300"
        >
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap cursor-pointer text-xs xl:text-sm ${
                currentPage === item.page
                  ? 'text-white bg-slate-800/80 shadow-xs'
                  : 'hover:text-white hover:bg-slate-900/60'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* More Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              onBlur={() => setTimeout(() => setServicesDropdownOpen(false), 200)}
              className="px-2.5 py-1.5 rounded-lg text-xs xl:text-sm text-slate-400 hover:text-white hover:bg-slate-900/60 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Explore</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-3 py-1.5">
                  Specialized Pages
                </div>
                {subPages.map((sub) => (
                  <button
                    key={sub.page}
                    onClick={() => handleNavClick(sub.page)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                      currentPage === sub.page
                        ? 'text-cyan-400 bg-slate-800'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Call CTA */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 text-slate-100 text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-colors"
            title="Call Global Mobile Parts Peshawar"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="hidden xs:inline">Call Now</span>
          </a>

          {/* WhatsApp CTA */}
          <a
            href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about a mobile part or repair.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap shadow-sm shadow-blue-900/40 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 shrink-0" />
            <span>WhatsApp</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-4 max-h-[80vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          <div className="text-[11px] font-semibold text-slate-300 tracking-wider uppercase px-2">
            Main Pages
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                  currentPage === item.page
                    ? 'text-cyan-400 bg-slate-800 font-semibold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-3">
            <div className="text-[11px] font-semibold text-slate-300 tracking-wider uppercase px-2 mb-1.5">
              Repair & Parts Sections
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {subPages.map((sub) => (
                <button
                  key={sub.page}
                  onClick={() => handleNavClick(sub.page)}
                  className={`text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    currentPage === sub.page
                      ? 'text-cyan-400 bg-slate-800 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {sub.label}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-center text-xs font-semibold text-white flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call +92 345 9281414</span>
            </a>
            <a
              href={getWhatsAppUrl('Hi Global Mobile Parts Peshawar, I want to ask about a mobile part or repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-center text-xs font-semibold text-white flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
