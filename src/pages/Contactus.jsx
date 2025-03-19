import React from 'react';
import { MapPin, Phone, Mail, Navigation, Compass, Building, Home, ExternalLink } from 'lucide-react';
import PartnersShowcase from '../components/ad';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      title: "எங்களை தொடர்பு கொள்ள",
      subtitle: "எங்கள் எந்த இடத்திலும் எங்களை தொடர்பு கொள்ளவும்",
      scanDirections: "திசைகளுக்கு ஸ்கேன் செய்யவும்",
      openInMaps: "வரைபடங்களில் திறக்கவும்",
      address: "முகவரி",
      phoneNumbers: "தொலைபேசி எண்கள்",
      emailUs: "மின்னஞ்சல் முகவரிகள்"
    },
    english: {
      title: "Contact Us",
      subtitle: "Get in touch with us at any of our locations",
      scanDirections: "Scan for directions",
      openInMaps: "Open in Maps",
      address: "Address",
      phoneNumbers: "Phone Numbers",
      emailUs: "Email Us"
    }
  };

  // Current content based on language
  const currentContent = content[language];

  // Bilingual locations data
  const locations = [
    {
      title: language === 'tamil' ? "நிர்வாக அலுவலகம் - வெள்ளி விழா இல்லம்" : "Administrative Office - Velli Vizha Illam",
      address: language === 'tamil' 
        ? "34 - ஸ்ரீநிவாச பெருமாள் சந்நதி, முதல் தெரு, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "34 - Srinivasa perumal sannadi, 1st Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1244", "2835 2744", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/VVI.jpg",
      qrCode: "/Images/VVI_QR.jpg",
      icon: Building
    },
    {
      title: language === 'tamil' ? "மகளிர் விடுதி - கொங்கு நாடு இல்லம்" : "Ladies Hostel - Kongu Nadu Illam",
      address: language === 'tamil' 
        ? "27, அம்மையப்பன் தெரு, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "27, Ammaiappan Street, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 3214", "2835 0432", "6383985919"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/KNI.jpg",
      qrCode: "/Images/KNI_QR.jpg",
      icon: Home
    },
    {
      title: language === 'tamil' ? "விருந்தினர் இல்லம் - தீரன் சின்னமலை மாளிகை" : "Guest House - Dheeran Chinnamalai Maligai",
      address: language === 'tamil' 
        ? "72, பீட்டர்ஸ் சாலை, ராயப்பேட்டை, சென்னை - 600 014. தமிழ்நாடு. இந்தியா." 
        : "72, Peters Road, Royapettah, Chennai - 600 014. Tamil Nadu. India.",
      phones: ["91 - 44 - 2835 1744", "9381545451", "9080461503"],
      emails: ["chennaikongu@gmail.com", "konguchennai@yahoo.com"],
      image: "/Images/his2.png",
      qrCode: "/Images/KNI_QR.jpg",
      icon: Compass
    }
  ];

  // Get gradient class based on index
  const getBgGradient = (index) => {
    const gradients = [
      'from-emerald-400 to-teal-500',
      'from-teal-400 to-cyan-500',
      'from-cyan-400 to-sky-500',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 mt-16">
      {/* Top padding that adjusts for different screen sizes */}
      <div className="pt-20 md:pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Page Title with elegant styling */}
          <div className="text-center mb-16">
            <div className="relative mb-6">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full transform -translate-y-1/2"></div>
              <div className="relative">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 tracking-tight">
                  {currentContent.title}
                </h1>
              </div>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-lg">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Location Cards - Premium Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:border-emerald-200"
              >
                {/* Location Image with Premium Styling */}
                <div className="relative h-64 overflow-hidden bg-gray-50">
                  <img 
                    src={location.image} 
                    alt={location.title} 
                    className="w-full h-full object-cover transition-transform duration-700 transform hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-80`} />
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${getBgGradient(index)}`}></div>
                  
                  {/* Title with elegant styling */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center">
                      <div className={`bg-gradient-to-r ${getBgGradient(index)} p-3 rounded-full mr-4 shadow-lg`}>
                        {React.createElement(location.icon, { className: "w-6 h-6 text-white" })}
                      </div>
                      <h3 className="text-white text-xl md:text-2xl font-semibold line-clamp-2 tracking-wide">
                        {location.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Location Details - Premium Design */}
                <div className="p-6">
                  {/* Address Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-1 bg-gradient-to-r ${getBgGradient(index)} rounded-full mr-2`}></div>
                      <h4 className="text-sm font-semibold uppercase text-emerald-800">
                        {currentContent.address}
                      </h4>
                    </div>
                    <div className="flex space-x-3">
                      <MapPin className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">{location.address}</p>
                    </div>
                  </div>
                  
                  {/* Phone Numbers Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-1 bg-gradient-to-r ${getBgGradient(index)} rounded-full mr-2`}></div>
                      <h4 className="text-sm font-semibold uppercase text-emerald-800">
                        {currentContent.phoneNumbers}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {location.phones.map((phone, idx) => (
                        <a 
                          key={idx} 
                          href={`tel:${phone.replace(/[^0-9]/g, '')}`} 
                          className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Phone className="w-4 h-4 text-emerald-500 group-hover:text-emerald-600" />
                          </div>
                          <span className="text-sm font-medium">{phone}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Email Addresses Section */}
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className={`w-8 h-1 bg-gradient-to-r ${getBgGradient(index)} rounded-full mr-2`}></div>
                      <h4 className="text-sm font-semibold uppercase text-emerald-800">
                        {currentContent.emailUs}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {location.emails.map((email, idx) => (
                        <a 
                          key={idx} 
                          href={`mailto:${email}`} 
                          className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                            <Mail className="w-4 h-4 text-emerald-500 group-hover:text-emerald-600" />
                          </div>
                          <span className="text-sm font-medium break-all">{email}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* QR Code and Map Link - Premium Design */}
                  {location.qrCode && (
                    <div className="mt-6 pt-6 border-t border-emerald-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-gray-500 mb-3">{currentContent.scanDirections}</p>
                          <a 
                            href={`https://maps.google.com/?q=${encodeURIComponent(location.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-white text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md hover:from-emerald-600 hover:to-teal-700"
                          >
                            <Navigation className="w-4 h-4 mr-2" />
                            {currentContent.openInMaps}
                            <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
                          </a>
                        </div>
                        <div className="bg-white rounded-xl shadow-md border border-emerald-100 p-2 hover:shadow-lg transition-shadow">
                          <img 
                            src={location.qrCode} 
                            alt="Location QR" 
                            className="w-24 h-24 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Partners Showcase */}
      <div className="mt-12">
        <PartnersShowcase />
      </div>
    </div>
  );
};

export default ContactPage;