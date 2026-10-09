import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Wrench } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppUrl } from '../constants';

interface PartsInquiryFormProps {
  initialPart?: string;
  className?: string;
}

export const PartsInquiryForm: React.FC<PartsInquiryFormProps> = ({
  initialPart = '',
  className = '',
}) => {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [partNeeded, setPartNeeded] = useState(initialPart);
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the formatted WhatsApp message
    let message = `Hi Global Mobile Parts Peshawar,\n\nI am looking for a mobile part / repair inquiry:\n`;
    if (brand && model) {
      message += `• Device: ${brand} ${model}\n`;
    } else if (model) {
      message += `• Model: ${model}\n`;
    } else if (brand) {
      message += `• Brand: ${brand}\n`;
    }
    if (partNeeded) {
      message += `• Part Needed: ${partNeeded}\n`;
    }
    if (customerName) {
      message += `• Customer Name: ${customerName}\n`;
    }
    if (phoneNumber) {
      message += `• Contact Number: ${phoneNumber}\n`;
    }
    if (details) {
      message += `• Additional Notes: ${details}\n`;
    }
    message += `\nPlease let me know about availability and pricing. Thank you!`;

    const targetUrl = getWhatsAppUrl(message);
    setIsSubmitted(true);

    // Open WhatsApp in a new window/tab safely
    window.location.href = targetUrl;
  };

  return (
    <div
      className={`bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-xl text-left ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
          <Wrench className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Find My Part / Check Availability
          </h3>
          <p className="text-xs text-slate-400">
            Send your device details directly to our shop on WhatsApp
          </p>
        </div>
      </div>

      {isSubmitted && (
        <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-200 text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-emerald-100">WhatsApp message generated!</p>
            <p className="text-xs text-emerald-300 mt-1">
              If WhatsApp did not launch automatically, click the button below to reach Shop #17, Bilour Plaza.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Mobile Brand <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Samsung, Xiaomi, Infinix, Vivo..."
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Mobile Model <span className="text-blue-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Note 12, A54, Spark 10, Reno 8..."
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Part Required <span className="text-blue-400">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Display / Screen, Battery, Charging Port, Camera..."
            value={partNeeded}
            onChange={(e) => setPartNeeded(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Your Name (Optional)
            </label>
            <input
              type="text"
              placeholder="Your name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Phone / WhatsApp Number (Optional)
            </label>
            <input
              type="tel"
              placeholder="e.g. 0345..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1.5">
            Additional Details or Fault Symptoms (Optional)
          </label>
          <textarea
            rows={2}
            placeholder="e.g. Blank screen after drop, phone not charging, rapid battery drain..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="w-full px-3.5 py-2 rounded-lg bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2.5 transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Send Inquiry on WhatsApp</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          Direct connection to {BUSINESS_INFO.phone} · Closes {BUSINESS_INFO.closingTime}
        </p>
      </form>
    </div>
  );
};
