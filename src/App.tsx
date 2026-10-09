import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MobileRepairServicesPage } from './pages/MobileRepairServicesPage';
import { MobilePartsPage } from './pages/MobilePartsPage';
import { PartsCategoriesPage } from './pages/PartsCategoriesPage';
import { PartsAvailabilityPage } from './pages/PartsAvailabilityPage';
import { ScreenDisplayPage } from './pages/ScreenDisplayPage';
import { BatterySolutionsPage } from './pages/BatterySolutionsPage';
import { ChargingPowerPage } from './pages/ChargingPowerPage';
import { SoftwareTroubleshootingPage } from './pages/SoftwareTroubleshootingPage';
import { RepairProcessPage } from './pages/RepairProcessPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { CustomerReviewsPage } from './pages/CustomerReviewsPage';
import { FAQPage } from './pages/FAQPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactVisitPage } from './pages/ContactVisitPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'about',
      'repair-services',
      'mobile-parts',
      'parts-categories',
      'parts-availability',
      'screen-display',
      'battery-solutions',
      'charging-power',
      'software-troubleshooting',
      'repair-process',
      'why-choose-us',
      'customer-reviews',
      'faq',
      'gallery',
      'contact',
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      if (hash && hash !== currentPage) {
        setCurrentPage(hash);
      } else if (!hash && currentPage !== 'home') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'repair-services':
        return <MobileRepairServicesPage onNavigate={navigateTo} />;
      case 'mobile-parts':
        return <MobilePartsPage onNavigate={navigateTo} />;
      case 'parts-categories':
        return <PartsCategoriesPage onNavigate={navigateTo} />;
      case 'parts-availability':
        return <PartsAvailabilityPage onNavigate={navigateTo} />;
      case 'screen-display':
        return <ScreenDisplayPage onNavigate={navigateTo} />;
      case 'battery-solutions':
        return <BatterySolutionsPage onNavigate={navigateTo} />;
      case 'charging-power':
        return <ChargingPowerPage onNavigate={navigateTo} />;
      case 'software-troubleshooting':
        return <SoftwareTroubleshootingPage onNavigate={navigateTo} />;
      case 'repair-process':
        return <RepairProcessPage onNavigate={navigateTo} />;
      case 'why-choose-us':
        return <WhyChooseUsPage onNavigate={navigateTo} />;
      case 'customer-reviews':
        return <CustomerReviewsPage onNavigate={navigateTo} />;
      case 'faq':
        return <FAQPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactVisitPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080d1a] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Sticky Header */}
      <Header currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Content */}
      <main className="flex-1 w-full">{renderPage()}</main>

      {/* Persistent Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Comprehensive Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
