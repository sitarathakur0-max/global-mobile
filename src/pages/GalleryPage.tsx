import React, { useState } from 'react';
import { ASSET_IMAGES, BUSINESS_INFO, getWhatsAppUrl } from '../constants';
import { PageId } from '../types';
import { MessageSquare, Phone, ArrowRight, Info, Eye } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: ASSET_IMAGES.heroWorkbench,
      title: 'Precision Mobile Workbench & Tools',
      category: 'Technician Workspace',
      description: 'Disassembly and precision screwdrivers, ESD anti-static mat, tweezers, and display suction equipment used in modern phone repairs.',
    },
    {
      src: ASSET_IMAGES.displayScreen,
      title: 'Smartphone OLED Screen Assembly',
      category: 'Component Inspection',
      description: 'High-resolution display replacement panel displaying delicate flex ribbon cable connectors and IC bonding.',
    },
    {
      src: ASSET_IMAGES.batteryPack,
      title: 'Internal Lithium Battery Unit',
      category: 'Power Components',
      description: 'Replacement internal battery pack showing technical specifications and terminal gold flex ribbon.',
    },
    {
      src: ASSET_IMAGES.chargingPort,
      title: 'Charging Port & Flex Sub-board',
      category: 'Hardware Micro-soldering',
      description: 'Close-up of smartphone USB-C connector board and integrated microphone traces held by precision tweezers.',
    },
    {
      src: ASSET_IMAGES.partsStation,
      title: 'Technician Parts Station & Diagnostic Bench',
      category: 'Workshop Environment',
      description: 'Multimeter, illuminated magnifying inspection lamp, and organized component sorting trays.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-16 text-left">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <div className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">
          Visual Showcase
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
          Hardware &amp; Workshop Gallery
        </h1>
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
          Visual overview of mobile repair workflows, precision tooling, and replacement component categories relevant to our service center at Bilour Plaza, Peshawar.
        </p>

        {/* Transparent Labeling Banner per strict rules */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 flex items-start gap-3">
          <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Editorial Notice:</strong> Images displayed below represent illustrative technical component photography and mobile hardware repair setups reflecting the types of components and tools handled in our workshop.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, idx) => (
          <div
            key={idx}
            className="group bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between"
          >
            <div className="relative overflow-hidden bg-slate-950 aspect-[4/3]">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-slate-700/80 text-[10px] uppercase font-bold text-cyan-400 tracking-wider">
                {item.category}
              </div>
            </div>

            <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('parts-availability')}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire on Part</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href={getWhatsAppUrl(`Hi Global Mobile Parts Peshawar, I am inquiring about components seen in your gallery (${item.title}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-lg font-bold text-white font-display">
            Need a Replacement Component Sourced?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Send us the exact model code or bring your device to Shop #17 Basement Bilour Plaza.
          </p>
        </div>

        <button
          onClick={() => onNavigate('parts-availability')}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Ask About Availability</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
