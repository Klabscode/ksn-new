import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import CareerGuidance from './CareerGuidance'; 

const RevampedServicesSection = () => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const [showCareerGuidance, setShowCareerGuidance] = useState(false);

  // Parallax effect implementation
  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.pageYOffset;
      
      document.querySelectorAll('.parallax-bg').forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.15;
        const yPos = -(scrollPosition * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    // Animation with IntersectionObserver
    const handleAnimation = () => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
    
        document.querySelectorAll('.animate-item').forEach((item) => {
          observer.observe(item);
        });
      } else {
        // Fallback for browsers without IntersectionObserver
        document.querySelectorAll('.animate-item').forEach((item) => {
          item.classList.add('animate-in');
        });
      }
    };

    // Initialize parallax and animations
    window.addEventListener('scroll', handleParallax);
    handleAnimation();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  // Bilingual content with expanded descriptions
  const content = {
    tamil: {
      sectionTitle: "எங்கள் சேவைகள்",
      sectionSubtitle: "கல்வி, கலாச்சார பாதுகாப்பு மற்றும் தொழில் முன்னேற்றம் நோக்கிய பல்வேறு முயற்சிகள் மூலம் எங்கள் சமூகத்திற்கு சேவை செய்தல்",
      learnMore: "மேலும் அறிய",
      showForm: "படிவத்தைக் காட்டு",
      contactUs: "இப்போது தொடர்பு கொள்ளவும்",
      communityTitle: "சமூகத்துடன் இணையுங்கள்",
      communitySubtitle: "எங்கள் சமூகத்தின் நடவடிக்கைகளில் பங்கேற்கவும்",
      services: [
        {
          title: "திருமண சேவை",
          subtitle: "கொங்கு சமூகம்",
          image: "/Images/3.jpg",
          description: "கோங்கு சமூக திருமண இணையதளம், பாரம்பரிய மதிப்புகள், நம்பிக்கை மற்றும் நெருக்கத்தை உறுதி செய்யும் விதமாக, பொருத்தமான இணையை கண்டுபிடிக்க உதவுகிறது.",
          extendedDescription: "கோங்கு சமூக திருமண சேவைகள், பாரம்பரிய மதிப்புகளைக் கடைப்பிடித்துக்கொண்டு, ஒருவருக்கு பொருத்தமான வாழ்க்கை துணையை கண்டுபிடிக்க உதவுகின்றன. குடும்பம், கல்வி மற்றும் விருப்பங்களை அடிப்படையாகக் கொண்டு, நேர்மறை பொருத்தங்களை உருவாக்குவது முக்கியமான நோக்கமாக உள்ளது. நம்பிக்கை மற்றும் உண்மைத்தன்மை, அர்த்தமுள்ள திருமண இணைப்புகளை உறுதி செய்கின்றன. இந்த தளம், பயனர்கள் சொந்தமாகத் தகவல் பதிவு செய்ய, பொருத்தங்களை தேட, மற்றும் எதிர்பார்க்கும் துணையுடன் தொடர்புகொள்ள ஒரு பாதுகாப்பான மற்றும் நம்பகமான சூழலை வழங்குகிறது.",
          link: "https://kongunanbargalsangam.org/matrimony/registration/register.aspx",
          external: true,
          useForm: false
        },
        {
          title: "சேவைகள்",
          subtitle: "கொங்கு சேவைகள்",
          image: "/Images/farm.png",
          description: "செயல்பாட்டில் உள்ள 'கொங்கு நாடு இல்லம்' சென்னைக்கு திட்டப்பணிகள், CA, IAS பயிற்சிக்காக வரும் சுமார் 30 பெண்களுக்கு தங்குமிடம் வழங்குகிறது.",
          extendedDescription: "எங்கள் சேவை முயற்சிகள் சமூகத்தின் அனைத்து பிரிவுகளையும் உள்ளடக்கியது. கல்வி உதவித்தொகைகள், மருத்துவ முகாம்கள், வேலைவாய்ப்பு வழிகாட்டுதல் மற்றும் இயற்கை பேரிடர் நிவாரணம் ஆகியவை எங்களின் முக்கிய செயல்பாடுகளாகும். சென்னையில் உள்ள 'கொங்கு நாடு இல்லம்' படிப்பு மற்றும் பயிற்சிக்காக வரும் இளம்பெண்களுக்கு பாதுகாப்பான தங்குமிடத்தை வழங்குகிறது, மேலும் எங்கள் சமூகத்தில் உள்ள பல சவால்களை எதிர்கொள்ளும் குடும்பங்களுக்கு உதவுகிறது.",
          link: "/history",
          external: true,
          useForm: false
        },
        {
          title: "தொழில் வழிகாட்டல்",
          subtitle: "வேலை வாய்ப்புக்கு வழிகாட்டல்",
          image: "/Images/job.png",
          description: "கொங்கு வேளாளர் இளைஞர்களுக்கான வேலை வாய்ப்புக்கு வழிகாட்டல் மற்றும் தொழில் மேம்பாட்டு திட்டங்கள்",
          extendedDescription: "இன்றைய மாறிவரும் வேலை சந்தையில் எங்கள் இளைஞர்கள் சிறந்து விளங்க வேண்டும் என்பதை நாங்கள் அறிவோம். எங்கள் தொழில் வழிகாட்டல் திட்டங்கள் மூலம், தனிப்பட்ட ஆலோசனை, திறன் மேம்பாட்டு பயிற்சிகள், தொழில்முனைவோர் ஆதரவு மற்றும் வேலைவாய்ப்பு கண்காட்சிகளை வழங்குகிறோம். பல வெற்றிகரமான தொழில் நிபுணர்கள் எங்கள் சமூகத்தின் இளைஞர்களுக்கு ஆலோசனை கூறி, உதவி வழங்குகிறார்கள், இதன் மூலம் தொழில் வாய்ப்புகளை அணுகுவதற்கும், நிதி சுதந்திரத்தை அடைவதற்கும் உதவுகிறோம்.",
          useForm: true
        }
      ]
    },
    english: {
      sectionTitle: "Our Services",
      sectionSubtitle: "Serving our community through various initiatives aimed at education, culture preservation, and career development",
      learnMore: "Learn More",
      showForm: "Show Form",
      contactUs: "Contact Us Now",
      communityTitle: "Connect With The Community",
      communitySubtitle: "Participate in our community activities and events",
      services: [
        {
          title: "Matrimony",
          subtitle: "Kongu Community",
          image: "/Images/3.jpg",
          description: "The Kongu Community Matrimony Website connects individuals with compatible partners while ensuring cultural values, trust, and authenticity.",
          extendedDescription: "Kongu community matrimony services connect individuals with compatible life partners while respecting cultural values. They focus on profile matching based on family, education, and preferences. Trust and authenticity ensure meaningful marriage connections.This platform offers a secure and authentic environment where users can create profiles, search for matches, and communicate with potential partners.",
          link: "https://kongunanbargalsangam.org/matrimony/registration/register.aspx",
          external: true,
          useForm: false
        },
        {
          title: "Services",
          subtitle: "Kongu Services",
          image: "/Images/farm.png",
          description: "Running \"Kongu Nadu Illam\" which is accommodating about 30 girls for a short stay who comes to Chennai for Projects, Special Coaching for C.A., I.A.S, Training...",
          extendedDescription: "Our service initiatives span across all sections of the community. Educational scholarships, medical camps, employment guidance, and natural disaster relief are among our key activities. The 'Kongu Nadu Illam' in Chennai provides safe accommodation for young women who come for studies and training, and we assist families facing various challenges in our community. We also organize regular community development programs focused on health awareness, environmental sustainability, and social welfare to ensure holistic progress.",
          link: "/history",
          external: true,
          useForm: false
        },
        {
          title: "Career Guidance",
          subtitle: "Employment Assistance",
          image: "/Images/job.png",
          description: "Providing career guidance and employment assistance for Kongu Vellalar youth through mentorship and professional development programs.",
          extendedDescription: "We recognize that our youth need to excel in today's evolving job market. Through our career guidance programs, we offer personalized counseling, skill development workshops, entrepreneurship support, and job fairs. Many successful professionals from our community mentor and assist our youth, helping them access career opportunities and achieve financial independence. We also maintain strong connections with various industries and educational institutions to create pathways for internships, job placements, and higher education opportunities tailored to the strengths of our community members.",
          useForm: true
        }
      ]
    }
  };

  // Get content based on current language
  const currentContent = content[language];

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden bg-gradient-to-br from-blue-50 via-green-50 to-teal-50">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-5 parallax-bg" data-speed="0.1" style={{ backgroundImage: "url('/Images/texture-pattern.png')", backgroundSize: "cover" }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="relative max-w-3xl mx-auto text-center mb-20 animate-item opacity-0 translate-y-4">
          <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            {language === 'tamil' ? 'கொங்கு சமூகம்' : 'KONGU COMMUNITY'}
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 font-heading">
            {currentContent.sectionTitle}
          </h2>
          
          <div className="w-16 h-1 bg-green-600 mx-auto mb-6"></div>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-body leading-relaxed">
            {currentContent.sectionSubtitle}
          </p>
        </div>

        {/* Alternating Service Cards with Uniform Height */}
        <div className="space-y-32 mb-24">
          {currentContent.services.map((service, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-stretch animate-item opacity-0 ${isEven ? 'translate-x-8' : '-translate-x-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image Container */}
                <div className="w-full lg:w-1/2 mb-10 lg:mb-0 overflow-hidden">
                  <div className="relative h-full min-h-[400px] lg:min-h-[500px] overflow-hidden group">
                    <div className="absolute inset-0 bg-black/20 z-10 transition-opacity group-hover:opacity-10"></div>
                    <img
                      src={service.image || '/Images/placeholder.jpg'}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out transform scale-100 group-hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/Images/placeholder.jpg';
                      }}
                    />
                  </div>
                </div>
                
                {/* Content Container */}
                <div className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'} flex flex-col justify-center`}>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-heading">
                    {service.title}
                  </h3>
                  
                  <div className="w-32 h-1 bg-green-600 mb-6"></div>
                  
                  <p className="text-gray-700 text-lg mb-5 font-body leading-relaxed">
                    {service.description}
                  </p>

                  {/* Display extended description for all sections */}
                  <p className="text-gray-600 mb-8 font-body leading-relaxed">
                    {service.extendedDescription}
                  </p>
                  
                 
                  
                
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CSS for animations and styling */}
      <style jsx>{`
        .font-heading {
          font-family: 'Poppins', 'Hind', sans-serif;
        }
        
        .font-body {
          font-family: 'Inter', 'Hind', sans-serif;
        }
        
        .animate-item {
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        
        @media (prefers-reduced-motion) {
          .animate-item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
          .parallax-bg {
            transform: none !important;
          }
          .animate-fade-in {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-item {
            transform: translateY(20px) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default RevampedServicesSection;