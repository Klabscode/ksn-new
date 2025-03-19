import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, BookOpen, Award, ChevronDown, History } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import OurHistory from '../components/ourhistory';
import KonguMamanigal from '../components/KonguMamanigal';
import Sadhanayalargal from '../components/Sadhanayalargal';
import PartnersShowcase from '../components/ad';

const HistoryPage = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeSection, setActiveSection] = useState('section1');
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  const slidesRef = useRef([]);

  // Bilingual content
  const content = {
    tamil: {
      pageTitle: "எங்கள் பாரம்பரியம்",
      pageBanners: [
        {
          image: "/Images/history1.jpg",
          title: "எங்களது பாரம்பரியம் மற்றும் வரலாறு",
          subtitle: "பாரம்பரியத்தை பாதுகாத்தல் | கலாச்சாரத்தை போற்றுதல்"
        },
        {
          image: "/Images/history2.jpg",
          title: "எங்கள் மரபைக் கொண்டாடுகிறோம்",
          subtitle: "கொங்கு சமூகத்தின் பெருமைமிகு கதை"
        }
      ],
      sections: [
        { id: 'section1', title: 'வரலாறு', icon: Clock },
        { id: 'section2', title: 'கொங்கு மாமணிகள்', icon: BookOpen },
        { id: 'section3', title: 'சாதனையாளர்கள்', icon: Award }
      ],
      mobileMenuLabel: "பிரிவைத் தேர்ந்தெடுக்கவும்"
    },
    english: {
      pageTitle: "Our Heritage",
      pageBanners: [
        {
          image: "/Images/history1.jpg",
          title: "Our Heritage and History",
          subtitle: "Preserving Traditions | Honoring Culture"
        },
        {
          image: "/Images/history2.jpg",
          title: "Celebrating Our Legacy",
          subtitle: "The Proud Story of Kongu Community"
        }
      ],
      sections: [
        { id: 'section1', title: 'History', icon: Clock },
        { id: 'section2', title: 'Kongu Mamanigal', icon: BookOpen },
        { id: 'section3', title: 'Sadhanayalargal', icon: Award }
      ],
      mobileMenuLabel: "Select Section"
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Transition slide with proper animation
  const transitionSlide = (index) => {
    if (isAnimating) return;
    
    setPreviousSlide(currentSlide);
    setCurrentSlide(index);
    setIsAnimating(true);
    
    // Reset animation state after transition completes
    setTimeout(() => {
      setIsAnimating(false);
    }, 700);
  };

  // Handle slider auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentSlide + 1) % currentContent.pageBanners.length;
      transitionSlide(nextIndex);
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, currentContent.pageBanners.length, isAnimating]);

  // Handle click outside for dropdown menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle scroll effects for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 400;
      setIsScrolled(window.scrollY > headerHeight - 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % currentContent.pageBanners.length;
    transitionSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlide === 0 ? currentContent.pageBanners.length - 1 : currentSlide - 1;
    transitionSlide(prevIndex);
  };

  // Function to render the appropriate section content
  const renderSectionContent = () => {
    switch(activeSection) {
      case 'section1':
        return <OurHistory />;
      case 'section2':
        return <KonguMamanigal />;
      case 'section3':
        return <Sadhanayalargal />;
      default:
        return <OurHistory />;
    }
  };

  // Calculate top position for section navigation based on main navbar height
  const navbarHeight = "72px"; // This should match your main navbar height

  return (
    <div className="min-h-screen bg-white pt-16 md:pt-20">
      {/* Hero Banner Section with Carousel (kept as is) */}
      <div ref={headerRef} className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] w-full overflow-hidden bg-gray-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-green-900/10 z-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(34,197,94,0.07) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* Slides with transition */}
        <div className="absolute inset-0">
          {currentContent.pageBanners.map((banner, index) => (
            <div 
              key={index}
              ref={el => slidesRef.current[index] = el}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? 'opacity-100 z-10' 
                  : 'opacity-0 z-0'
              }`}
            >
              {/* Image container with improved aspect ratio handling */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={banner.image}
                  alt={`History Banner ${index + 1}`}
                  className="w-full h-full object-cover object-center"
                  style={{
                    transform: currentSlide === index ? 'scale(1.05)' : 'scale(1.15)',
                    transition: 'transform 7s ease-out, opacity 0.5s ease-in-out',
                    opacity: currentSlide === index ? 1 : 0.8,
                  }}
                />
                {/* Enhanced Gradient Overlay - softer transition */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
              </div>
              
              {/* Content with staggered animation */}
              <div className="absolute inset-0 flex items-center justify-center text-center p-6 z-20">
                <div className="max-w-4xl mx-auto">
                  <div className={`mb-6 transition-all duration-700 ${
                    currentSlide === index 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-10'
                  }`}>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-wide leading-tight">
                      {banner.title}
                    </h1>
                    <div className="h-1 w-20 md:w-32 bg-green-500 mx-auto mb-6"></div>
                    <p className="text-white/90 text-sm md:text-xl max-w-2xl mx-auto font-light">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation UI Elements */}
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="h-full flex items-center justify-between px-4 sm:px-6 md:px-8">
            {/* Left Navigation Arrow */}
            <button 
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto transform hover:scale-105"
              aria-label="Previous slide"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
            
            {/* Right Navigation Arrow */}
            <button 
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 flex items-center justify-center pointer-events-auto transform hover:scale-105"
              aria-label="Next slide"
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Improved Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {currentContent.pageBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && transitionSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? 'w-12 h-3 bg-green-500' 
                  : 'w-3 h-3 bg-white/70 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isAnimating}
            />
          ))}
        </div>
        
        {/* NEW: Prominent Section Navigation Banner */}
        <div className="absolute bottom-0 left-0 right-0 z-40">
          <div className="flex flex-col items-center">
            {/* Section Navigation Indicator - Animation to indicate scrollable content */}
            <div className="hidden md:flex items-center justify-center mb-2 animate-bounce">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                <ChevronDown className="w-5 h-5 text-white" />
              </div>
            </div>
            
            {/* Premium Section Navigation Pills - Fixed Responsiveness */}
            <div className="w-full bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-md py-5 px-4">
              <div className="container mx-auto">
                <div className="flex justify-center sm:justify-center gap-2 md:gap-8 overflow-x-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {currentContent.sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => setActiveSection(section.id)}
                        className={`flex items-center gap-2 md:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                          activeSection === section.id 
                            ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/20' 
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                          activeSection === section.id 
                            ? 'bg-white/20' 
                            : 'bg-white/10'
                        }`}>
                          <Icon className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                        <span className="text-xs md:text-sm font-medium whitespace-nowrap">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Sticky Section Navigation - For when user scrolls - Improved Responsiveness */}
      <div 
        className={`sticky z-20 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white shadow-xl border-b border-gray-100 py-2' 
            : 'bg-white/0 -translate-y-full opacity-0'
        }`}
        style={{ top: navbarHeight }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Section Title with elegant styling */}
            <div className={`flex items-center gap-2 transition-opacity duration-500 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-50 flex items-center justify-center">
                <History className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-base md:text-lg font-medium text-gray-800">{currentContent.pageTitle}</h2>
                <div className="h-0.5 w-8 md:w-12 bg-green-500 mt-1"></div>
              </div>
            </div>
            
            {/* Desktop Navigation - Premium pill buttons */}
            <div className="hidden md:block">
              <nav className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                {currentContent.sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`relative px-3 md:px-5 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                        activeSection === section.id 
                          ? 'bg-green-50 text-green-700 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{section.title}</span>
                      </div>
                      {activeSection === section.id && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-green-500"></div>
                      )}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Dropdown Navigation - Elegant styling */}
            <div className="md:hidden relative" ref={menuRef}>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center justify-between px-3 py-2 rounded-full border border-gray-200 shadow-sm bg-white text-gray-800 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {(() => {
                    const currentSection = currentContent.sections.find(s => s.id === activeSection);
                    const Icon = currentSection.icon;
                    return (
                      <>
                        <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center">
                          <Icon className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-xs font-medium">{currentSection.title}</span>
                      </>
                    );
                  })()}
                  <ChevronDown className={`w-3 h-3 ml-1 transition-transform ${menuOpen ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              {menuOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden z-40">
                  {currentContent.sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          setMenuOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left border-b border-gray-100 last:border-0 transition-all ${
                          activeSection === section.id 
                            ? 'bg-green-50 text-green-700' 
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        <div className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center ${
                          activeSection === section.id 
                            ? 'bg-green-100' 
                            : 'bg-gray-100'
                        }`}>
                          <Icon className={`w-3 h-3 md:w-4 md:h-4 ${
                            activeSection === section.id 
                              ? 'text-green-600' 
                              : 'text-gray-500'
                          }`} />
                        </div>
                        <span className="text-sm font-medium">{section.title}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Container with Enhanced Premium Styling */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Section */}
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Premium Header for Section - Improved Responsiveness */}
            <div className="relative overflow-hidden bg-green-700 text-white">
              {/* Decorative background pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <defs>
                    <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0 20 L40 20 M20 0 L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#pattern)" />
                </svg>
              </div>
              
              {/* Section Header Content */}
              <div className="relative py-4 md:py-6 px-5 md:px-8 lg:px-10 flex items-center justify-between">
                {(() => {
                  const currentSection = currentContent.sections.find(s => s.id === activeSection);
                  const Icon = currentSection.icon;
                  return (
                    <>
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold">{currentSection.title}</h2>
                          <div className="h-1 w-10 md:w-12 bg-white/30 mt-1 md:mt-2"></div>
                        </div>
                      </div>
                      
                      {/* Decorative number */}
                      <div className="flex items-center justify-center">
                        <div className="text-3xl md:text-5xl lg:text-6xl font-bold opacity-20">
                          {currentContent.sections.findIndex(s => s.id === activeSection) + 1}
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
            
            {/* Tab Content */}
            <div className="p-6 md:p-10 lg:p-12">
              {renderSectionContent()}
            </div>
          </div>
          
          {/* Section Navigation Cards - Additional way to navigate between sections - Improved Responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-16">
            {currentContent.sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                    isActive 
                      ? 'shadow-xl ring-2 ring-green-500' 
                      : 'shadow-md hover:shadow-lg border border-gray-100 hover:border-green-200'
                  }`}
                >
                  <div className={`absolute top-0 left-0 w-1 h-full transition-all ${
                    isActive ? 'bg-green-500' : 'bg-gray-200 group-hover:bg-green-200'
                  }`}></div>
                  
                  <div className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isActive 
                        ? 'bg-green-50 text-green-600' 
                        : 'bg-gray-50 text-gray-500 group-hover:bg-green-50 group-hover:text-green-500'
                    }`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    
                    <div className="text-left">
                      <h3 className={`text-base md:text-lg font-semibold transition-colors ${
                        isActive ? 'text-green-700' : 'text-gray-800 group-hover:text-green-700'
                      }`}>{section.title}</h3>
                      <p className="text-xs md:text-sm text-gray-500 mt-1">
                        {isActive && (
                          <span className="text-green-600 font-medium">Currently viewing</span>
                        )}
                        {!isActive && (
                          <span>Click to view this section</span>
                        )}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* Partners Showcase with enhanced styling */}
      <div className="bg-gray-50 py-16 border-t border-gray-100">
        <PartnersShowcase />
      </div>
      
      {/* Add a subtle decorative element at the bottom */}
      <div className="h-2 w-full bg-gradient-to-r from-green-700 via-green-500 to-green-700"></div>
    </div>
  );
};

export default HistoryPage;