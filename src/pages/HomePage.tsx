import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin, CheckCircle2, Star, Wrench, BatteryCharging, Zap, Smartphone, Sparkles } from 'lucide-react';
import { PageId } from '../types';
import { BUSINESS_INFO, CUSTOMER_REVIEWS, REVIEW_THEMES, ASSET_IMAGES, getWhatsAppUrl } from '../constants';
import { TrustStrip } from '../components/TrustStrip';
import { PartsInquiryForm } from '../components/PartsInquiryForm';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 overflow-hidden">
        {/* Subtle background tech ambient gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Clean unboxed location tag - strictly anti-pill */}
              <div className="flex items-center gap-2 text-xs font-medium text-cyan-400 tracking-wide">
                <span>Shop #17, Basement Bilour Plaza</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Saddar Cantt, Peshawar</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-display text-balance">
                Mobile Parts &amp; Repair Services in Peshawar
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
                Global Mobile Parts Peshawar is a local mobile phone repair and parts business located in Bilour Plaza, Saddar Cantt, Peshawar. We assist customers with component availability, parts sourcing, and device diagnostics.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('parts-availability')}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-900/30 flex items-center gap-2 transition-all transform active:scale-95 cursor-pointer"
                >
                  <span>Ask About a Part</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>Call Now: {BUSINESS_INFO.phone}</span>
                </a>
              </div>

              {/* Verified Location Text */}
              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Shop #17, Basement Bilour Plaza, Saddar Rd, Peshawar, 25000</span>
              </div>
            </div>

            {/* Right Visual Carrier */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
                <img
                  src={ASSET_IMAGES.heroWorkbench}
                  alt="Precision mobile phone repair workbench with modern smartphone, screwdrivers, and ESD tools"
                  className="w-full h-[320px] sm:h-[400px] object-cover object-center transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                {/* Floating Micro Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 border border-slate-800/80 rounded-xl p-3 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Bilour Plaza Technician Bench</span>
                    <span className="text-cyan-400 font-mono">Open Until 9 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Hero Trust Area */}
      <TrustStrip />

      {/* 3. Substantial About Global Mobile Parts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              About The Business
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
              Dedicated Mobile Parts &amp; Repair in Saddar Cantt
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              Global Mobile Parts Peshawar is a local mobile phone repair and parts business operating from Shop #17 in the basement of Bilour Plaza, Saddar Cantt, Peshawar.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              The business serves customers looking for mobile parts and repair-related assistance across Peshawar and surrounding areas. Our operation is grounded on factual customer experiences: providing good quality parts, responsive sourcing when items are needed from trusted channels, and direct technical consultations.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Read Full Business Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {REVIEW_THEMES.map((theme, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-xl p-4.5 space-y-2 hover:border-slate-700 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <h3 className="text-sm font-semibold text-white">{theme.title}</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Repair Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
              Technical Services
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display mt-1">
              Mobile Repair Services in Peshawar
            </h2>
            <p className="text-sm text-slate-400 max-w-xl mt-2">
              Services may depend on the device and specific fault. Contact the shop to confirm model compatibility.
            </p>
          </div>
          <button
            onClick={() => onNavigate('repair-services')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors cursor-pointer self-start md:self-auto"
          >
            <span>View All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Service 1: Screen */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Smartphone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Screen &amp; Display</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cracked glass, black screens, touch responsiveness faults, and display flickering issues.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 mt-4">
              <button
                onClick={() => onNavigate('screen-display')}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Service 2: Battery */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <BatteryCharging className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Battery Solutions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fast battery drain, unexpected device shutdowns, and physical inspection for swollen batteries.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 mt-4">
              <button
                onClick={() => onNavigate('battery-solutions')}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Service 3: Charging */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Charging &amp; Power</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Loose charging cable connection, phone failing to draw current, and charging sub-board assessment.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 mt-4">
              <button
                onClick={() => onNavigate('charging-power')}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Service 4: Software */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 hover:border-blue-500/40 transition-all flex flex-col justify-between group">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white">Software Troubleshooting</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                System crashes, boot loop diagnostics, device setup, and legitimate official update guidance.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800/80 mt-4">
              <button
                onClick={() => onNavigate('software-troubleshooting')}
                className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
              >
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Mobile Parts Showcase & Sourcing */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
                Parts Availability &amp; Sourcing
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
                Looking For a Specific Mobile Part in Peshawar?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                If a required mobile part is not immediately on hand, customer feedback highlights that parts can also be arranged from other sources when needed. We encourage visitors to ask about availability directly.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Replacement Screens
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Internal Batteries
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Charging Sub-boards
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Camera Modules
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Speakers &amp; Mic
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800">
                  • Buttons &amp; Hardware
                </div>
              </div>
              <div className="pt-4 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate('parts-availability')}
                  className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Check Availability Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('parts-categories')}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                >
                  <span>Explore Parts Categories</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-xl">
                <img
                  src={ASSET_IMAGES.displayScreen}
                  alt="Modern smartphone OLED replacement screen assembly with flex ribbon"
                  className="w-full h-64 sm:h-72 object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Customer Trust Section (Strictly Real Reviews) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
            Customer Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-display">
            Customers Talk About Quality &amp; Trust
          </h2>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-300 pt-1">
            <span className="font-bold text-white">4.9 / 5</span>
            <span className="text-amber-400">★★★★★</span>
            <span className="text-slate-500">·</span>
            <span>25 Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CUSTOMER_REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors relative"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-cyan-400/90 font-medium">
                    {review.highlight}
                  </span>
                </div>
                <blockquote className="text-sm text-slate-300 leading-relaxed italic">
                  "{review.content}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-slate-800/80 mt-4 flex items-center justify-between text-xs">
                <span className="font-semibold text-white">{review.name}</span>
                <span className="text-slate-500">Verified Reviewer</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => onNavigate('customer-reviews')}
            className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Read All Verified Customer Insights &amp; Review Themes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 7. Interactive Find My Part Form Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <PartsInquiryForm />
      </section>

      {/* 8. Visit Us / Shop Location Summary (Text only, NO maps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              Shop Location
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight font-display">
              Visit Global Mobile Parts Peshawar
            </h3>
            <p className="text-sm text-slate-300">
              Shop #17, Basement Bilour Plaza, Saddar Rd, Saddar Cantt, Peshawar, 25000, Pakistan
            </p>
            <div className="text-xs text-slate-400 flex items-center gap-3 pt-1">
              <span>Location Code: {BUSINESS_INFO.locationCode}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400">Open Daily Until 9 PM</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>Call Before Visiting</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Visit Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
