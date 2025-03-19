import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  CalendarDays, Users, Building, Award, BookOpen, 
  Clock, Star, ChevronLeft, ChevronRight, Camera 
} from 'lucide-react';

// Add CSS keyframes for marquee animation
const marqueeStyle = `
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.marquee-container {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-content {
  display: flex;
  animation: marquee 80s linear infinite;
  padding-right: 24px;
},
.timeline-content {
  min-height: 300px; /* Adjust this value based on your content */
  transition: all 0.3s ease;
}

.photo-marquee-content {
  display: flex;
  animation: marquee 100s linear infinite;
  padding-right: 24px;
}
`;

const OurHistory = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState(0);
  const timelineSectionsRef = useRef(null);

  // Bilingual content
  const content = {
    tamil: {
      title: "கொங்கு நண்பர்கள் சங்கத்தின் வரலாறு",
      subtitle: "பாரம்பரியம் · பரிணாமம் · முன்னேற்றம்",
      quote: "பிறருக்கு ஏதோ ஒரு வகையில் கொடுப்பதற்காக செலவிடப்படாவிட்டால், வாழ்க்கை வாழத்தகுதியானதல்ல",
      section1: "நமது கொங்கு சமூகத்தின் பெரியோர்கள் இதை 1960களில் உணர்ந்து, அனைத்து வழிகளிலும் மற்றவர்களுக்கு உதவும் இந்த சேவை அமைப்பிற்கு அடித்தளம் அமைத்தனர். தொடக்கத்திலிருந்தே, இது பெரும் முன்னேற்றங்களை அடைந்து சேவையின் பல்வேறு வழிகளில் ஈடுபடும் ஒரு புகழ்பெற்ற சமூகமாக வளர்ந்துள்ளது.",
      section2: "1961 ஆம் ஆண்டில், எங்கள் சங்கத்தின் தந்தை திரு. K.M. செண்ணியப்பன் B.A., மகிழ்ச்சியான சந்தர்ப்பங்களிலும் கஷ்ட காலங்களிலும் ஒருவருக்கொருவர் உதவியாக இருக்கும் ஒரு சமூகத்தின் தேவையை உணர்ந்தார். திரு.K.A.சுப்ரமணியம், திரு. C.K. ராமசாமி, திரு. T.P. சடசிவம், திரு. K.A. தேவியப்பன், திரு.C.ஈஸ்வரமூர்த்தி, செயலகத்தில் பணிபுரிந்த திரு. பழனிசாமி ஆகியோருடன் இணைந்து, ஹோட்டல் தர்பார் மற்றும் மெரினா கடற்கரையில் வழக்கமான கூட்டங்களை ஏற்பாடு செய்தார்.",
      section3: "1968 ஆம் ஆண்டில் அருட்செல்வர் N.மகாலிங்கம் பொறுப்பேற்றபோது, உறுப்பினர்களின் எண்ணிக்கை கணிசமாக அதிகரித்திருந்தது மற்றும் உறுப்பினர்கள் குடும்பத்துடன் திரு.K.R.மாரப்பன் நடத்திய நர்சரி பள்ளி மற்றும் ஹோட்டல் வுட்லேண்ட்ஸில் சந்தித்தனர். ஏறக்குறைய ஒரு தசாப்தத்திற்குப் பிறகு, திரு K.பழனியப்பன் & திரு.R.காந்தி சங்கத்தை தலைமை தாங்கிய போது, ஒரு ஸ்டார் நைட் மூலம் நிதி திரட்டப்பட்டது, அப்போதைய செயலாளர் T.K.சுப்ரமணியன் முயற்சியால் கொங்கு நாடு இல்லத்திற்கான இடம் வாங்கப்பட்டது. மாணவர்கள் தலைநகரில் தங்கள் பட்டப்படிப்புகளைத் தொடர தங்குமிடம் வழங்கப்பட்டது. \"செய்திமடல்\" என்ற பெயரில் வெறும் நான்கு பக்கங்களைக் கொண்ட ஒரு செய்திமடல் சுற்றுக்கு வெளியிடப்பட்டது.",
      section4: "1993 – 1996 காலகட்டம் கொங்கு நண்பர்கள் சங்கத்தின் வரலாற்றில் ஒரு திருப்புமுனையாக இருந்தது, திரு.அருணாசலம் மற்றும் திரு. P. தேவராஜன் தலைவர்களாகவும் திரு. K. பாலசுப்ரமணியன் செயலாளராகவும் இருந்தபோது. கொங்கு நாடு இல்லம் ஒரு வருடத்திற்குள் கட்டப்பட்டது, இந்தியாவின் முதல் சுதந்திரப் போராட்ட வீரர் தீரன் சின்னமலையின் சிலை திறக்கப்பட்டது, பல்வேறு துறைகளில் சாதனை புரிந்தவர்களை அங்கீகரிக்க பதினைந்து \"சாதனையாளர் விருது\" நிறுவப்பட்டது மற்றும் 10 மற்றும் 12 ஆம் வகுப்பில் முதல் மூன்று தரவரிசையில் உள்ளவர்களை கௌரவிக்க ஒரு அறக்கட்டளை அமைக்கப்பட்டது.",
      section5: "திரு.K.R.அப்பாவு தலைவராகவும் திரு. K.C.கலியண்ணன் செயலாளராகவும் இருந்த 1997-2000 காலகட்டத்தில் கொங்கு நண்பர்கள் சங்கம் மிகப்பெரிய முன்னேற்றத்தைக் காட்டியது. மாதாந்திர செய்திமடல் திரு.S.K.கருப்பன் உதவியுடன் ஒரு இதழாக மாற்றப்பட்டது. இது கொங்கு சமூகத்தில் பெரும் தாக்கத்தை ஏற்படுத்தி, பல மூத்தவர்களை சங்கத்தின் செயல்பாடுகளில் ஈடுபடுத்தியது. குடும்ப சந்திப்புகள் \"ஆவலுடன் காத்திருந்த\" நிகழ்வுகளாக இருந்தன. வெள்ளி விழா இல்லத்திற்கான இடம் வாங்கப்பட்டு கட்டுமானத்திற்கான திட்டங்கள் வகுக்கப்பட்டன.",
      section6: "திரு. கோவிந்தசாமி மற்றும் திரு. K.C. கலியண்ணன் தலைவர்களாகவும் திரு. E.R. ஈஸ்வரன் செயலாளராகவும் இருந்த 2001 முதல் பெரும் நடவடிக்கைகள் இருந்து வருகின்றன. தங்களுக்கும் நாட்டிற்கும் பெயர் பெற்ற நமது சமூகத்தின் மூத்தவர்களை கௌரவிக்க \"கொங்கு மாமணி\" விருது நிறுவப்பட்டது, \"ஆனந்தமாலை\" மற்றும் \"சந்தோஷமாலை\" கலாச்சார நிகழ்ச்சிகள் மூலம் நிதி திரட்டப்பட்டது மற்றும் வெள்ளி விழா இல்லத்தின் கட்டுமானம் நிறைவடைந்தது. பல மாணவர்கள், தனிநபர்கள் மற்றும் குடும்பங்கள் இரண்டு இல்லங்களிலும் தங்குமிட வசதிகளை அனுபவித்துள்ளனர் மற்றும் இன்றும் அனுபவித்து வருகின்றனர்."
    },
    english: {
      title: "HISTORY OF KONGU NANBARGAL SANGAM",
      subtitle: "Heritage · Evolution · Progress",
      quote: "Life is not worth living unless it is spent giving to others in some way",
      section1: "Great men of our Kongu community had realized this, way back in the 1960s and laid the foundation for this service organization to help others in all possible ways. Right from the start, it has taken huge strides and grown into a reputed society delving into various avenues of service.",
      section2: "In 1961, Thiru. K.M. Chenniappan B.A., Father of our Sangam felt the need for a society wherein, the members would be of help to one another both in joyous occasions and in times of adversity. Along with Thiru.K.A.Subramaniam, Thiru. C.K. Ramaswami, Thiru. T.P. Sadasivam, Thiru. K.A. Deviappan, Thiru.C.Eswarmurthi, Thiru. Palaniswami who worked at the secretariat, he arranged for regular meetings at Hotel Durbar and Marina beach.",
      section3: "When Arutchelvar .N.Mahalingam took over in the year 1968, the membership had increased considerably and the members along with families met at the nursery school run by Thiru.K.R.Marappan and at Hotel Woodlands. After almost a decade, when Thiru K.Palaniappan & Thiru.R.Gandhi headed the sangam, funds were raised through a Star Nite and of course with generous contributions from our families in Chennai & in our native places, the site for Kongu Nadu Illam was purchased by the efforts made by then Secretary T.K.Subramanian. Accommodation was provided for the students to pursue their degree courses in the capital. A newsletter, by the name, \"Seithimadal\" with just four pages was brought out for circulation.",
      section4: "The period from 1993 – 1996 was a turning point in the history of Kongu Nanbargal Sangam, when Thiru.Arunachalam and Thiru. P. Devarajan were presidents and Thiru. K. Balasubramanian was the secretary. Kongu Nadu Illam was constructed within a year's time, the statue of Theeran Chinnamalai, the first freedom fighter of India was unveiled, fifteen \"Sadhanaiyalar Award\" to recognize our people who have achieved honors in various avenues was instituted and an Arakkattalai to honor the first three toppers in the 10th and 12th classes was formed.",
      section5: "Kongu Nanabargal Sangam showed tremendous progress during the period 1997 -2000 when Thiru.K.R.Appavoo was President and Thiru. K.C.Kaliannan was Secretary. The monthly newsletter was converted to a magazine with the help of Thiru.S.K.Karuppan. It had a great impact on the Kongu society bringing about the involvement of many more elders in the activities of the sangam. Family get-togethers were \"anxiously awaited for\" occasions. The site for the Silver Jubilee Illam was purchased & plans were laid for the construction.",
      section6: "There has been a great flurry of activity since 2001, when Thiru. Govindasamy and Thiru. K.C. Kaliannan were presidents & Thiru. E.R. Eswaran was the secretary. The \"Kongu Mamani\" award to honor those elders of our society ho have earned a name for themselves as well the nation was instituted, funds were raised through \"Anandhamaalai\" and \"Sandhoshamaalai\" cultural extravaganzas and the construction of the Silver Jubilee Illam was completed. Many students, individuals and families have enjoyed and even today enjoy the accommodation facilities at both the Illams."
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Timeline sections for horizontal scroll with improved translations
  const timelineData = [
    {
      period: "1961-1968",
      title: language === 'tamil' ? "அடித்தளம் மற்றும் தொடக்கம்" : "Foundation and Beginning",
      icon: Users,
      iconColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-700",
      content: currentContent.section2
    },
    {
      period: "1968-1993",
      title: language === 'tamil' ? "விரிவாக்கமும் வளர்ச்சியும்" : "Expansion and Growth",
      icon: Award,
      iconColor: "text-amber-700",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-700",
      content: currentContent.section3
    },
    {
      period: "1993-1996",
      title: language === 'tamil' ? "திருப்புமுனை காலம்" : "Turning Point Period",
      icon: Star,
      iconColor: "text-orange-700",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-700",
      content: currentContent.section4
    },
    {
      period: "1997-Present",
      title: language === 'tamil' ? "தொடர் வளர்ச்சியும் சாதனைகளும்" : "Continued Growth and Achievements",
      icon: BookOpen,
      iconColor: "text-green-700",
      bgColor: "bg-green-50",
      borderColor: "border-green-700",
      content: currentContent.section5 + " " + currentContent.section6
    }
  ];

  // Key figures data
  const keyFigures = [
    {
      name: "K.M. Chenniappan B.A.",
      title: language === 'tamil' ? "நிறுவனர்" : "Founder",
      period: "1961"
    },
    {
      name: "N. Mahalingam",
      title: language === 'tamil' ? "தலைவர்" : "President",
      period: "1968"
    },
    {
      name: "K. Palaniappan & R. Gandhi",
      title: language === 'tamil' ? "தலைவர்கள்" : "Presidents",
      period: "1980s"
    },
    {
      name: "T.K. Subramanian",
      title: language === 'tamil' ? "செயலாளர்" : "Secretary",
      period: "1980s"
    },
    {
      name: "K. Balasubramanian",
      title: language === 'tamil' ? "செயலாளர்" : "Secretary",
      period: "1993-1996"
    },
    {
      name: "K.C. Kaliannan",
      title: language === 'tamil' ? "செயலாளர்" : "Secretary",
      period: "1997-2000"
    }
  ];

  // Photo gallery - EXPANDED TO 16 IMAGES
  const photoGallery = [
    {
      title: language === 'tamil' ? "வரலாற்று கூட்டம்" : "Historical Gathering",
      year: "1968"
    },
    {
      title: language === 'tamil' ? "கொங்கு நாடு இல்லம்" : "Kongu Nadu Illam",
      year: "1993"
    },
    {
      title: language === 'tamil' ? "விருது விழா" : "Award Ceremony",
      year: "2001"
    },
    {
      title: language === 'tamil' ? "திருவிழா கொண்டாட்டம்" : "Festival Celebrations",
      year: "1975"
    },
    {
      title: language === 'tamil' ? "அறக்கட்டளை துவக்கம்" : "Foundation Inauguration",
      year: "1988"
    },
    {
      title: language === 'tamil' ? "முதல் மாணவர் விடுதி" : "First Students Hostel",
      year: "1995"
    },
    {
      title: language === 'tamil' ? "வெள்ளி விழா கொண்டாட்டம்" : "Silver Jubilee Celebration",
      year: "2000"
    },
    {
      title: language === 'tamil' ? "கலாச்சார நிகழ்ச்சி" : "Cultural Program",
      year: "2005"
    },
    {
      title: language === 'tamil' ? "சஞ்சிகை வெளியீடு" : "Magazine Launch",
      year: "1997"
    },
    {
      title: language === 'tamil' ? "தீரன் சின்னமலை சிலை திறப்பு" : "Theeran Chinnamalai Statue Unveiling",
      year: "1994"
    },
    {
      title: language === 'tamil' ? "சிறப்பு கூட்டம்" : "Special Meeting",
      year: "1987"
    },
    {
      title: language === 'tamil' ? "குடும்ப சந்திப்பு" : "Family Gathering",
      year: "2002"
    },
    {
      title: language === 'tamil' ? "நிதி திரட்டும் நிகழ்ச்சி" : "Fundraising Event",
      year: "1998"
    },
    {
      title: language === 'tamil' ? "மூத்த தலைவர்கள் கௌரவிப்பு" : "Honoring Senior Leaders",
      year: "2008"
    },
    {
      title: language === 'tamil' ? "பொன் விழா திட்டமிடல்" : "Golden Jubilee Planning",
      year: "2010"
    },
    {
      title: language === 'tamil' ? "சமூக சேவை நிகழ்ச்சி" : "Community Service Event",
      year: "2015"
    }
  ];

  // Scroll timeline sections into view
  const scrollToSection = (index) => {
    setActiveSection(index);
    
    // Scroll timeline cards
    if (timelineSectionsRef.current) {
      const cards = timelineSectionsRef.current.querySelectorAll('button');
      if (cards && cards[index]) {
        cards[index].scrollIntoView({ behavior: 'smooth', inline: 'center' });
      }
    }
  };

  // Handle navigation buttons for timeline sections
  const handlePrevSection = () => {
    const newIndex = Math.max(0, activeSection - 1);
    scrollToSection(newIndex);
  };

  const handleNextSection = () => {
    const newIndex = Math.min(timelineData.length - 1, activeSection + 1);
    scrollToSection(newIndex);
  };

  return (
<div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100">
      {/* Add marquee CSS via style tag */}
      <style dangerouslySetInnerHTML={{ __html: marqueeStyle }} />
      
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 mt-36">
        {/* Hero Section */}
        <section className="mb-16 text-center bg-white rounded-2xl shadow-sm p-8 border border-green-100">
          <div className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            {currentContent.subtitle}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{currentContent.title}</h1>
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl italic text-gray-600 mb-8 p-4 border-l-4 border-green-300 bg-green-50 rounded">
              "{currentContent.quote}"
            </blockquote>
            <p className="text-lg text-gray-700">{currentContent.section1}</p>
          </div>
        </section>

        {/* Interactive Timeline Navigation */}
        <section className="mb-16">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center">
              <CalendarDays className="w-6 h-6 mr-2 text-green-700" />
              {language === 'tamil' ? "காலவரிசை" : "Timeline"}
            </h2>
            <div className="flex space-x-2">
              <button 
                onClick={handlePrevSection}
                disabled={activeSection === 0}
                className={`p-2 rounded-full ${activeSection === 0 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                aria-label={language === 'tamil' ? "முந்தைய பிரிவு" : "Previous section"}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextSection}
                disabled={activeSection === timelineData.length - 1}
                className={`p-2 rounded-full ${activeSection === timelineData.length - 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                aria-label={language === 'tamil' ? "அடுத்த பிரிவு" : "Next section"}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Timeline Pills */}
          <div 
            className="flex overflow-x-auto py-4 scrollbar-hide mb-8 gap-4"
            ref={timelineSectionsRef}
          >
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`flex-none px-4 py-3 rounded-lg flex items-center gap-3 transition-all ${
                    activeSection === index 
                      ? `${item.bgColor} ${item.borderColor} border-l-4 shadow-md`
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeSection === index ? item.bgColor : 'bg-gray-100'}`}>
                    <Icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="text-left">
                    <span className="block font-medium text-gray-900">{item.period}</span>
                    <span className="text-sm text-gray-500">{item.title}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Timeline Content Display */}
{/* Timeline Content Display */}
<div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 border border-green-100">
  <div className="px-6 py-8 timeline-content">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-2xl font-bold text-gray-900">
        {timelineData[activeSection].title}
        <span className="ml-2 text-base font-normal text-gray-500">{timelineData[activeSection].period}</span>
      </h3>
      <div className={`w-12 h-12 rounded-full ${timelineData[activeSection].bgColor} flex items-center justify-center`}>
        {React.createElement(timelineData[activeSection].icon, { 
          className: `w-6 h-6 ${timelineData[activeSection].iconColor}` 
        })}
      </div>
    </div>
    <p className="text-gray-700 leading-relaxed text-lg">
      {timelineData[activeSection].content}
    </p>
  </div>
</div>
        </section>

        {/* Key Milestones Section - Auto Scrolling Marquee */}
        <section className="mb-16 overflow-hidden bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Clock className="w-6 h-6 mr-2 text-green-700" />
            {language === 'tamil' ? "முக்கிய காலகட்டங்கள்" : "Key Milestones"}
          </h2>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {/* First set of timeline cards */}
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className={`timeline-card flex-none w-80 rounded-xl shadow-md overflow-hidden border-t-4 ${item.borderColor} transition-transform mr-6 cursor-pointer hover:shadow-lg`}
                    onClick={() => scrollToSection(index)}
                  >
                    <div className={`p-6 ${index === activeSection ? item.bgColor : 'bg-white'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {item.period}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}>
                          <Icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 line-clamp-3">{item.content.substring(0, 150)}...</p>
                      <button 
                        className={`mt-4 inline-flex items-center text-sm font-medium ${item.iconColor}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(index);
                        }}
                      >
                        {language === 'tamil' ? "மேலும் படிக்க" : "Read more"}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                );
              })}

              {/* Second set of timeline cards (duplicated for continuous loop) */}
              {timelineData.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={`repeat-${index}`}
                    className={`timeline-card flex-none w-80 rounded-xl shadow-md overflow-hidden border-t-4 ${item.borderColor} transition-transform mr-6 cursor-pointer hover:shadow-lg`}
                    onClick={() => scrollToSection(index)}
                  >
                    <div className={`p-6 ${index === activeSection ? item.bgColor : 'bg-white'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                          {item.period}
                        </span>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.bgColor}`}>
                          <Icon className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 line-clamp-3">{item.content.substring(0, 150)}...</p>
                      <button 
                        className={`mt-4 inline-flex items-center text-sm font-medium ${item.iconColor}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          scrollToSection(index);
                        }}
                      >
                        {language === 'tamil' ? "மேலும் படிக்க" : "Read more"}
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/* Key Figures Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2 text-green-700" />
            {language === 'tamil' ? "முக்கிய தலைவர்கள்" : "Key Leaders"}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFigures.map((figure, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-xl font-bold">
                      {figure.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{figure.name}</h3>
                      <div className="flex items-center text-sm">
                        <span className="text-gray-600">{figure.title}</span>
                        <span className="mx-2 text-green-400">•</span>
                        <span className="text-green-700 font-medium">{figure.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Photo Gallery - Marquee */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Camera className="w-6 h-6 mr-2 text-green-700" />
            {language === 'tamil' ? "புகைப்படங்கள்" : "Photos"}
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden p-6 border border-green-100">
            <div className="marquee-container">
              <div className="photo-marquee-content">
                {/* First set of photos */}
                {photoGallery.map((photo, index) => (
                  <div key={index} className="flex-none w-80 mr-6">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                      <div className="relative aspect-video">
                        <img
                   src={`/Images/history/photo${index + 1}.jpg`}
                          alt={photo.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Second set of photos (duplicated for continuous loop) */}
                {photoGallery.map((photo, index) => (
                  <div key={`repeat-${index}`} className="flex-none w-80 mr-6">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all">
                      <div className="relative aspect-video">
                        <img
                        src={`/Images/history/photo${(index % 16) + 1}.jpg`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                         
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      
        {/* Footer */}
        <div className="mt-12 pb-8 text-center text-sm text-gray-600 bg-white rounded-lg p-4 shadow-sm border border-green-100">
          <p>
            {language === 'tamil' 
              ? "கொங்கு நண்பர்கள் சங்கம் - பாரம்பரியத்தின் பாதுகாவலர்கள் © 2025" 
              : "Kongu Nanbargal Sangam - Guardians of Heritage © 2025"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurHistory;