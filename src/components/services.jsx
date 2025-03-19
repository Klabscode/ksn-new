import React, { useEffect } from 'react';
import { ArrowRight, BookOpen, Building, Briefcase, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const EnhancedServicesSection = () => {
  const { language } = useLanguage();

  // Simplified animation system with fallback
  useEffect(() => {
    // Add a fallback to ensure content is visible even if IntersectionObserver fails
    const animateAllItems = () => {
      document.querySelectorAll('.animate-item').forEach((item) => {
        item.classList.add('animate-in');
      });
    };

    // Try using IntersectionObserver if supported
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, { threshold: 0.1, rootMargin: '50px' });
  
      document.querySelectorAll('.animate-item').forEach((item) => {
        observer.observe(item);
      });
  
      return () => {
        document.querySelectorAll('.animate-item').forEach((item) => {
          observer.unobserve(item);
        });
      };
    } else {
      // Fallback for browsers without IntersectionObserver
      setTimeout(animateAllItems, 300);
    }

    // Additional fallback - if nothing has animated after 1s, force animation
    setTimeout(() => {
      const anyNotAnimated = document.querySelectorAll('.animate-item:not(.animate-in)').length > 0;
      if (anyNotAnimated) {
        animateAllItems();
      }
    }, 1000);
  }, []);

  // Bilingual content
  const content = {
    tamil: {
      sectionTitle: "எங்கள் சேவைகள்",
      sectionSubtitle: "கல்வி, கலாச்சார பாதுகாப்பு மற்றும் தொழில் முன்னேற்றம் நோக்கிய பல்வேறு முயற்சிகள் மூலம் எங்கள் சமூகத்திற்கு சேவை செய்தல்",
      learnMore: "மேலும் அறிய",
      services: [
        {
          title: "வரலாறு & கலாச்சாரம்",
          subtitle: "கொங்கு சமூகம்",
          image: "/Images/history_img.png",
          description: "1960களில் நமது கொங்கு சமூகத்தின் பெரியோர்கள் இதை உணர்ந்து, அனைத்து வழிகளிலும் மற்றவர்களுக்கு உதவும் இந்த சேவை அமைப்பிற்கு அடித்தளம் அமைத்தனர்.",
          link: "/history",
          icon: BookOpen
        },
        {
          title: "சேவைகள்",
          subtitle: "கொங்கு சேவைகள்",
          image: "/Images/farm.png",
          description: "செயல்பாட்டில் உள்ள 'கொங்கு நாடு இல்லம்' சென்னைக்கு திட்டப்பணிகள், CA, IAS பயிற்சிக்காக வரும் சுமார் 30 பெண்களுக்கு தங்குமிடம் வழங்குகிறது.",
          link: "/history",
          icon: Building
        },
        {
          title: "தொழில் வழிகாட்டல்",
          subtitle: "வேலை வாய்ப்புக்கு வழிகாட்டல்",
          image: "/Images/job.png",
          description: "கொங்கு வேளாளர் இளைஞர்களுக்கான வேலை வாய்ப்புக்கு வழிகாட்டல் மற்றும் தொழில் மேம்பாட்டு திட்டங்கள்",
          link: "#career",
          icon: Briefcase
        }
      ]
    },
    english: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Serving our community through various initiatives aimed at education, culture preservation, and career development",
      learnMore: "Learn More",
      services: [
        {
          title: "History & Culture",
          subtitle: "Kongu Community",
          image: "/Images/history_img.png",
          description: "Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways.",
          link: "/history",
          icon: BookOpen
        },
        {
          title: "Services",
          subtitle: "Kongu Services",
          image: "/Images/farm.png",
          description: "Running \"Kongu Nadu Illam\" which is accommodating about 30 girls for a short stay who comes to Chennai for Projects, Special Coaching for C.A., I.A.S, Training...",
          link: "/history",
          icon: Building
        },
        {
          title: "Career Guidance",
          subtitle: "Employment Assistance",
          image: "/Images/job.png",
          description: "Providing career guidance and employment assistance for Kongu Vellalar youth through mentorship and professional development programs.",
          link: "#career",
          icon: Briefcase
        }
      ]
    }
  };

  // Get content based on current language
  const currentContent = content[language];

  return (
    <section className="py-16 relative overflow-hidden bg-[#FAFDF9]">
      {/* Simple Background with lower opacity */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/Images/texture-pattern.png')" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Simplified Section Header with less spacing */}
        <div className="relative max-w-3xl mx-auto text-center mb-12 animate-item opacity-0 translate-y-4 transition-all duration-500 ease-out">
          <div className="flex items-center justify-center mb-4">
            <span className="h-px w-12 bg-green-500"></span>
          </div>
          
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            {currentContent.sectionTitle}
          </h2>
          
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {currentContent.sectionSubtitle}
          </p>
        </div>

        {/* Service Cards with less spacing and reduced animation delay */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {currentContent.services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="animate-item opacity-0 translate-y-4 transition-all duration-500 group relative"
                style={{ transitionDelay: `${index*100}ms` }}
              >
                {/* Simplified Card Design */}
                <div className="h-full overflow-hidden flex flex-col relative bg-white shadow-md rounded-xl">
                  {/* Image Container with proper fallback */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={service.image || '/Images/placeholder.jpg'}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/Images/placeholder.jpg';
                      }}
                    />
                    
                    {/* Simplified Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"></div>
                    
                    {/* Icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="inline-block text-white text-xs font-semibold bg-green-600 px-3 py-1 rounded-full mb-2">
                        {service.subtitle}
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* Content Container */}
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-gray-600 mb-4 flex-grow">
                      {service.description}
                    </p>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-green-600 font-medium group/link"
                    >
                      <span>{currentContent.learnMore}</span>
                      <span className="ml-2 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center group-hover/link:translate-x-1 transition-transform">
                        <ArrowRight size={14} className="text-green-600" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Connection with simplified design */}
        <div className="animate-item opacity-0 translate-y-4 transition-all duration-500 ease-out" style={{ transitionDelay: '300ms' }}>
          <div className="rounded-xl p-8 bg-white shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center mr-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-1">{language === 'tamil' ? 'சமூகத்துடன் இணையுங்கள்' : 'Connect With The Community'}</h4>
                  <p className="text-gray-600">{language === 'tamil' ? 'எங்கள் சமூகத்தின் நடவடிக்கைகளில் பங்கேற்கவும்' : 'Participate in our community activities and events'}</p>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg flex items-center group"
              >
                <span className="mr-2">{language === 'tamil' ? 'இப்போது தொடர்பு கொள்ளவும்' : 'Contact Us Now'}</span>
                <ArrowRight className="h-4 w-4 text-white" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* CSS for animations - simplified and with fallback */}
        <style jsx>{`
          .animate-item {
            transition: opacity 0.5s ease-out, transform 0.5s ease-out;
          }
          .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          
          /* Fallback to ensure content appears even if JS fails */
          @media (prefers-reduced-motion) {
            .animate-item {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;