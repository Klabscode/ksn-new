import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const PartnersShowcase = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const content = {
    tamil: {
      title: "மதிப்பிற்குரிய உறுப்பினர்கள் & பங்காளிகள்",
      titleHighlight: "உறுப்பினர்கள்",
      subtitle: "சமுதாய சேவை மற்றும் கலாச்சார பாதுகாப்பில் எங்கள் அர்ப்பணிப்பைப் பகிர்ந்து கொள்ளும் நிறுவனங்களுடன் இணைந்து பணியாற்றுவதில் நாங்கள் பெருமை கொள்கிறோம்"
    },
    english: {
      title: "Valued Members & Partners",
      titleHighlight: "Members",
      subtitle: "We're proud to collaborate with organizations that share our commitment to community service and cultural preservation"
    }
  };

  const currentContent = content[language];

  const partners = [
    {
      image: "/Images/sakthi.png",
      alt: "Sakthi Group Logo"
    },
    {
      image: "/Images/pon.png",
      alt: "Pon Pure Chemicals Logo"
    },
    {
      image: "/Images/klabs.png",
      alt: "K Labs Logo"
    }
  ];

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % partners.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isHovering, partners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % partners.length);
  const prevSlide = () => setCurrentSlide((prev) => prev === 0 ? partners.length - 1 : prev - 1);

  return (
    <section className="py-8 relative overflow-hidden bg-[linear-gradient(165deg,#f0f9ff_0%,#ffffff_100%)]">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-green-50/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-green-100/20 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-green-100/20 to-transparent blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Elegant section header */}
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 via-green-300/20 to-green-200/20 blur-sm rounded-full"></div>
            <div className="relative bg-gradient-to-r from-green-50 to-white p-2 rounded-full shadow-sm border border-green-100/50">
              <Building className="w-5 h-5 text-green-600" />
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 px-4">
            {language === 'tamil' ? (
              <>மதிப்பிற்குரிய <span className="text-green-600">உறுப்பினர்கள்</span> & பங்காளிகள்</>
            ) : (
              <>Valued <span className="text-green-600">Members</span> & Partners</>
            )}
          </h2>
          
          <div className="h-0.5 w-24 bg-gradient-to-r from-green-400/40 via-green-500 to-green-400/40 mx-auto"></div>
          
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3 px-4">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Responsive carousel */}
        <div 
          className="relative mx-auto group w-full max-w-screen-md"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Main carousel container with responsive height */}
          <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-green-50/50 shadow-md backdrop-blur-sm border border-green-100/50 h-40 sm:h-48 md:h-56 lg:h-64">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.03),transparent_70%)]"></div>
            
            <div
              className="flex h-full transition-transform duration-700 ease-out relative"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {partners.map((partner, index) => (
                <div key={index} className="w-full flex-shrink-0 h-full">
                  <div className="flex items-center justify-center h-full p-4">
                    <img
                      src={partner.image}
                      alt={partner.alt}
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Always visible navigation buttons on mobile, fade in/out on desktop */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-3 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white border border-green-100/50"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-green-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-3 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white border border-green-100/50"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-green-800" />
            </button>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-3 md:mt-4 gap-2">
            {partners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-6 h-1 bg-gradient-to-r from-green-500 to-green-600' 
                    : 'w-1 h-1 bg-green-200 hover:bg-green-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;