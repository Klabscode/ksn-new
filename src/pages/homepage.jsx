import React, { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/services';
import PartnersShowcase from '../components/ad';
import GlobalReachMap from '../components/GlobalReachMap';

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] h-[80vh] sm:h-[70vh] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 sm:right-4 top-2 sm:top-4 z-10 p-1.5 sm:p-2 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-gray-900" />
        </button>
        
        {/* Content Container */}
        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="h-[60%] sm:h-[70%] bg-gray-50 relative flex items-center justify-center p-4 overflow-hidden">
            <img
              src="Images/modal.png"
              alt="Magazine Cover"
              className="h-full w-auto max-w-full object-contain"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20 pointer-events-none" />
          </div>
          
          {/* Bottom Section */}
          <div className="h-[40%] sm:h-[30%] flex flex-col items-center justify-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-gradient-to-b from-amber-50 to-white">
            <h2 className="text-xl sm:text-2xl font-light text-amber-900 text-center px-2">
              Download Our Latest Magazine
            </h2>
            <button 
              onClick={() => window.open('https://kongunanbargalsangam.org/pdf/Magazine_2025.pdf', '_blank')}
              className="flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-full hover:from-amber-700 hover:to-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 transform group-hover:-translate-y-0.5 transition-transform" />
              <span className="font-light tracking-wide text-sm sm:text-base">Download Magazine</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useEffect(() => {
    // Add overflow-hidden to body when component mounts to prevent any potential issues
    document.body.classList.add('overflow-x-hidden');
    
    // Check if modal has been shown in this browser session
    const modalShownInSession = sessionStorage.getItem('modalShown');
    
    // If not shown in this session yet, show it
    if (!modalShownInSession) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
        // Mark that modal has been shown in this session
        sessionStorage.setItem('modalShown', 'true');
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    return () => {
      // Remove the class when component unmounts
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);
  
  // Control body overflow when modal opens
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);
  
  return (
    <div className="min-h-screen bg-white pt-16 md:pt-28 overflow-hidden">
      {/* Reduced padding-top for mobile, kept original for md and up */}
      <HeroSection />
      <ServicesSection />
      <PartnersShowcase />
      <GlobalReachMap/>
      
      <WelcomeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default HomePage;