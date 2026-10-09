import { ReviewItem, FaqItem, PartCategory } from './types';

// Business Core Information
export const BUSINESS_INFO = {
  name: 'Global Mobile Parts Peshawar',
  shortName: 'Global Mobile Parts',
  tagline: 'Mobile Parts & Repair Services in Peshawar',
  address: 'Shop #17, Basement Bilour Plaza, Saddar Cantt, Saddar Rd, Cantt, Peshawar, 25000, Pakistan',
  building: 'Shop #17, Basement Bilour Plaza',
  area: 'Saddar Cantt, Peshawar',
  city: 'Peshawar, Pakistan',
  postalCode: '25000',
  phone: '+92 345 9281414',
  phoneRaw: '+923459281414',
  whatsappNumber: '923459281414',
  locationCode: 'XGWP+GR Peshawar, Pakistan',
  hours: 'Open · Closes 9 PM',
  closingTime: '9 PM',
  rating: 4.9,
  totalReviews: 25,
};

// Verified Customer Reviews (Strictly from provided prompt data)
export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    name: 'Muhammad Afaq',
    rating: 5,
    highlight: 'Quality & Parts Arrangement',
    content: 'Good Quality and Available every Parts of Mobile and also they arrange Mobile parts for you from other Place',
  },
  {
    name: 'Haris Khan',
    rating: 5,
    highlight: 'Parts Quality & Satisfaction',
    content: 'Good Quality and satisfied from Global Parts',
  },
  {
    name: 'adil Hussain',
    rating: 5,
    highlight: 'Exceptional Local Trust',
    content: 'I think there is a very good shop in Peshawar where I can get my mobile fixed with my eyes closed and I can trust them...',
  },
];

// Factual Review Themes
export const REVIEW_THEMES = [
  {
    title: 'Good Quality Parts',
    description: 'Customers highlight the reliability and build quality of mobile components provided.',
  },
  {
    title: 'Mobile Parts Availability',
    description: 'Inquire directly for current stock of replacement parts and phone components in Saddar.',
  },
  {
    title: 'Parts Sourcing & Arrangement',
    description: 'When a specific component is not immediately on hand, parts can often be arranged from trusted sources.',
  },
  {
    title: 'Customer Satisfaction & Trust',
    description: 'Local customers in Peshawar emphasize honest advice, reliable diagnostic support, and peace of mind.',
  },
  {
    title: 'Competitive & Affordable Pricing',
    description: 'Straightforward local rates without artificial markups or hidden fees.',
  },
];

// Photorealistic assets generated for the applet
export const ASSET_IMAGES = {
  heroWorkbench: '/src/assets/images/hero_repair_workbench_1791464463250.jpg',
  displayScreen: '/src/assets/images/display_screen_assembly_1791464473291.jpg',
  batteryPack: '/src/assets/images/mobile_battery_solution_1791464486388.jpg',
  chargingPort: '/src/assets/images/charging_port_components_1791464496400.jpg',
  partsStation: '/src/assets/images/technician_parts_station_1791464506661.jpg',
};

// WhatsApp Link Generator
export function getWhatsAppUrl(customMessage?: string): string {
  const base = `https://wa.me/${BUSINESS_INFO.whatsappNumber}`;
  const defaultText = 'Hi Global Mobile Parts Peshawar, I want to ask about a mobile part or repair.';
  const text = customMessage || defaultText;
  return `${base}?text=${encodeURIComponent(text)}`;
}

// Parts Categories
export const PARTS_CATEGORIES: PartCategory[] = [
  {
    id: 'display',
    name: 'Display & Screen',
    subtitle: 'Screens & Front Glass Assemblies',
    description: 'For customers looking for replacement display-related parts, touchscreen modules, and front panel units.',
    examples: ['OLED & AMOLED assemblies', 'IPS LCD panels', 'Touch digitizers', 'Display flex cables'],
    pageId: 'screen-display',
    iconName: 'Smartphone',
  },
  {
    id: 'battery',
    name: 'Battery Solutions',
    subtitle: 'Replacement Internal Battery Packs',
    description: 'For customers looking for replacement battery solutions to resolve fast battery drain, shutdowns, or degraded cells.',
    examples: ['Internal Lithium-ion packs', 'High-capacity battery units', 'Battery connector strips'],
    pageId: 'battery-solutions',
    iconName: 'BatteryCharging',
  },
  {
    id: 'charging',
    name: 'Charging & Power',
    subtitle: 'Port Connectors & Sub-boards',
    description: 'For charging-port and charging-related components, sub-boards, and power distribution connectors.',
    examples: ['Type-C charging boards', 'Micro-USB sub-boards', 'Charging flex cables', 'Power IC modules'],
    pageId: 'charging-power',
    iconName: 'Zap',
  },
  {
    id: 'audio',
    name: 'Audio Components',
    subtitle: 'Earpieces, Loudspeakers & Microphones',
    description: 'For speaker and microphone-related components addressing muffled sound, no audio, or mic failures.',
    examples: ['Loudspeaker buzzer modules', 'Ear speaker receivers', 'Noise-cancelling microphones'],
    iconName: 'Volume2',
  },
  {
    id: 'camera',
    name: 'Camera Modules',
    subtitle: 'Rear Main & Front Facing Units',
    description: 'For camera-related components, replacement sensor modules, camera lens covers, and flex ribbons.',
    examples: ['Primary rear camera units', 'Front selfie camera flex', 'External camera glass lens protectors'],
    iconName: 'Camera',
  },
  {
    id: 'small-components',
    name: 'Small Components',
    subtitle: 'Buttons, Antennas & Trays',
    description: 'For buttons and other mobile hardware components, internal brackets, SIM trays, and switches.',
    examples: ['Power & volume buttons', 'Fingerprint sensor ribbons', 'SIM card trays', 'Antenna flex cables'],
    iconName: 'Cpu',
  },
  {
    id: 'general-parts',
    name: 'General Parts',
    subtitle: 'Housings, Back Covers & Frames',
    description: 'For other device-specific parts, back glasses, mid-frames, vibration motors, and hardware fittings.',
    examples: ['Back glass replacement panels', 'Middle chassis frames', 'Haptic vibration motors', 'Internal screws & shields'],
    iconName: 'Wrench',
  },
];

// Comprehensive FAQ Data (Strictly factual, no invented warranties, parking, or OEM certifications)
export const FAQ_LIST: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Location & Timing',
    question: 'Where is Global Mobile Parts Peshawar located?',
    answer: 'We are located at Shop #17, Basement Bilour Plaza, Saddar Cantt, Saddar Rd, Cantt, Peshawar, 25000, Pakistan. Our location reference is XGWP+GR Peshawar, Pakistan.',
  },
  {
    id: 'faq-2',
    category: 'Location & Timing',
    question: 'What time does the shop close?',
    answer: 'The shop is open daily and closes at 9:00 PM. We recommend calling before visiting if you are arriving late in the evening.',
  },
  {
    id: 'faq-3',
    category: 'Services & Inquiries',
    question: 'What can I ask about?',
    answer: 'You can contact us about mobile phone parts availability and a variety of mobile repair-related services, including screen replacement inquiries, battery issues, charging port repairs, audio issues, and general hardware diagnostics.',
  },
  {
    id: 'faq-4',
    category: 'Parts & Availability',
    question: 'Can I ask if a specific mobile part is available?',
    answer: 'Yes! Customers can contact us directly via WhatsApp or phone with their exact device brand, model, and the required component to check current stock and availability.',
  },
  {
    id: 'faq-5',
    category: 'Parts & Availability',
    question: 'Can a part be arranged if it is not immediately available?',
    answer: 'Yes. Customer feedback highlights that when a specific part is not immediately in stock at the shop, we can often arrange the required mobile part from other trusted sources. Please contact us directly with your device model to confirm.',
  },
  {
    id: 'faq-6',
    category: 'Contact',
    question: 'How can I contact the shop?',
    answer: 'You can call us directly at +92 345 9281414 or message us on WhatsApp at the same number. We respond promptly during operational hours.',
  },
  {
    id: 'faq-7',
    category: 'Repair Service',
    question: 'Do you repair every mobile model?',
    answer: 'Repair capability depends on the specific mobile model, the nature of the fault, and component availability. Please contact us directly with your exact phone model and issue so our technicians can advise you.',
  },
  {
    id: 'faq-8',
    category: 'Repair Service',
    question: 'How does the repair and diagnosis process work?',
    answer: 'The process involves: 1) You inform us of the issue; 2) Physical and technical device assessment at our Bilour Plaza shop; 3) Identifying the suitable solution; 4) Repair or part replacement; and 5) Thorough testing before handover.',
  },
  {
    id: 'faq-9',
    category: 'Parts & Availability',
    question: 'Do you provide parts for multiple brands?',
    answer: 'Yes, we handle replacement components for popular smartphone models in the Pakistani market. Contact us on WhatsApp with your exact model to check compatibility and stock.',
  },
  {
    id: 'faq-10',
    category: 'Pricing & Trust',
    question: 'What do customers say about your shop?',
    answer: 'Global Mobile Parts Peshawar has a 4.9 out of 5 Google rating based on 25 customer reviews. Customers consistently praise good quality parts, parts availability and arrangement, trustworthy technical service, and competitive pricing.',
  },
];
