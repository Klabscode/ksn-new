import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LuxuryHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sliderRef = useRef(null);
  const { language } = useLanguage();
  
  // Content for both languages with updated CTA buttons and routes
  const content = {
    tamil: {
      slides: [
        {
          image: "/Images/hero1.png",
          eyebrow: "சிறப்பு சமூகம்",
          title: "கொங்கு நண்பர்கள் சங்கம்",
          subtitle: "பாரம்பரியம் | சமூகம் | எதிர்காலம்",
          cta: "வரலாறு",
          route: "/history"
        },
        {
          image: "/Images/hero2.png",
          eyebrow: "வரலாறு & பாரம்பரியம்",
          title: "பாரம்பரியத்தை போற்றுதல்",
          subtitle: "கலாச்சாரத்தை பாதுகாத்து அடுத்த தலைமுறைக்கு வழங்குதல்",
          cta: "பத்திரிகை",
          route: "/magazine"
        },
        {
          image: "/Images/hero3.png",
          eyebrow: "சமூக முன்னேற்றம்",
          title: "சமூக சேவை",
          subtitle: "4,200+ உறுப்பினர்களுடன், நாங்கள் சமூகத்தை வளர்க்க உறுதிபூண்டுள்ளோம்",
          cta: "படத்தொகுப்பு",
          route: "/gallery"
        }
      ]
    },
    english: {
      slides: [
        {
          image: "/Images/hero1.png",
          eyebrow: "DISTINGUISHED COMMUNITY",
          title: "Kongu Nanbargal Sangam",
          subtitle: "Preserving Heritage | Elevating Community | Building Future",
          cta: "History",
          route: "/history"
        },
        {
          image: "/Images/hero2.png",
          eyebrow: "HISTORY & HERITAGE",
          title: "Celebrating Our Legacy",
          subtitle: "Leading the way in preserving cultural heritage and passing it to our next generation.",
          cta: "Magazine",
          route: "/magazine"
        },
        {
          image: "/Images/hero3.png",
          eyebrow: "COMMUNITY ADVANCEMENT",
          title: "Proud to Serve Society",
          subtitle: "With 4,200+ members, we're dedicated to strengthening and enhancing our community.",
          cta: "Gallery",
          route: "/gallery"
        }
      ]
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Handle slide change
  const changeSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  // Auto rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        const newIndex = (currentSlide + 1) % currentContent.slides.length;
        changeSlide(newIndex);
      }
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide, isAnimating, currentContent.slides.length]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Main Hero Slider */}
      <div 
        ref={sliderRef}
        className="relative w-full h-[660px] overflow-hidden"
      >
        {/* Slides Container */}
        <div className="h-full">
          {currentContent.slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30 z-10"></div>
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover object-center transition-transform duration-10000 ease-out scale-110 transform-gpu"
                  style={{
                    transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
                    transition: 'transform 7s ease-out'
                  }}
                />
              </div>

              {/* Content Container */}
              <div className="relative z-20 h-full flex items-center">
                <div className="container mx-auto px-8 md:px-16 max-w-screen-xl">
                  <div className="max-w-3xl">
                    {/* Animated content elements */}
                    <div 
                      className={`overflow-hidden transition-transform duration-1000 delay-200 ${
                        currentSlide === index ? 'transform-none' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <span className="inline-block py-1 px-3 bg-green-500 text-xs font-bold tracking-widest text-black rounded-sm mb-5 transition-all duration-300">
                        {slide.eyebrow}
                      </span>
                    </div>

                    <div 
                      className={`overflow-hidden transition-all duration-1000 delay-300 ${
                        currentSlide === index ? 'transform-none' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <h1 className={`${language === 'tamil' ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'} font-bold text-white mb-6 leading-tight`}>
                        {slide.title}
                      </h1>
                    </div>

                    <div 
                      className={`overflow-hidden transition-all duration-1000 delay-400 ${
                        currentSlide === index ? 'transform-none' : 'translate-y-8 opacity-0'
                      }`}
                    >
                      <p className={`${language === 'tamil' ? 'text-lg' : 'text-xl'} text-white/80 mb-8 max-w-2xl`}>
                        {slide.subtitle}
                      </p>
                    </div>

                    <div 
                      className={`transition-all duration-1000 delay-500 ${
                        currentSlide === index ? 'opacity-100 transform-none' : 'opacity-0 translate-y-8'
                      }`}
                    >
                      <Link 
                        to={slide.route}
                        className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-none hover:bg-green-500 transition-all duration-500 inline-flex items-center"
                      >
                        <span className="relative z-10 flex items-center gap-2 font-medium">
                          {slide.cta}
                          <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute bottom-0 left-0 w-0 h-1 bg-green-500 group-hover:w-full transition-all duration-300"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls - Simplified to only dots */}
        <div className="absolute bottom-12 left-0 w-full z-30 container mx-auto px-8 md:px-16 max-w-screen-xl">
          <div className="flex justify-center items-center">
            {/* Dot Navigation - Centered */}
            <div className="flex gap-3">
              {currentContent.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => changeSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-white scale-100' : 'bg-white/30 scale-75 hover:scale-90 hover:bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHeroSection;