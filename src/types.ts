export type PageId =
  | 'home'
  | 'about'
  | 'repair-services'
  | 'mobile-parts'
  | 'parts-categories'
  | 'parts-availability'
  | 'screen-display'
  | 'battery-solutions'
  | 'charging-power'
  | 'software-troubleshooting'
  | 'repair-process'
  | 'why-choose-us'
  | 'customer-reviews'
  | 'faq'
  | 'gallery'
  | 'contact';

export interface ReviewItem {
  name: string;
  rating: number;
  date?: string;
  content: string;
  highlight: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface PartCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  examples: string[];
  pageId?: PageId;
  iconName: string;
}
