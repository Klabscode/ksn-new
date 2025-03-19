import React from 'react';
import { MapPin, Mail, Phone, Facebook, Instagram, Twitter, Youtube, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

function Footer() {
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    tamil: {
      tagline: "நட்பு, சகோதரத்துவம் மற்றும் கலாச்சார மூலம் வளர்ச்சி.",
      quickLinks: "விரைவு இணைப்புகள்",
      externalResources: "வெளி ஆதாரங்கள்",
      matrimony: "திருமண சேவை",
      getInTouch: "தொடர்பு",
      address: "34, ஸ்ரீநிவாச பெருமாள் சந்நதி, முதல் தெரு, ராயப்பேட்டை, சென்னை - 600 014",
      officeHours: "அலுவலக நேரம்: திங்கள் - வெள்ளி: 9:00 - 5:00, சனி: 9:00 - 1:00",
      copyright: "© 2025 கொங்கு நண்பர்கள் சங்கம்",
      designedBy: "வடிவமைத்தவர்",
      links: [
        'முகப்பு', 
        'வரலாறு', 
        'இதழ்', 
        'புகைப்படத் தொகுப்பு', 
        'தொடர்பு'
      ]
    },
    english: {
      tagline: "Promoting friendship, brotherhood & cultural excellence.",
      quickLinks: "Quick Links",
      externalResources: "Resources",
      matrimony: "Matrimony",
      getInTouch: "Contact",
      address: "34, Srinivasa Perumal Sannadi, 1st Street, Royapettah, Chennai - 600 014",
      officeHours: "Office: Mon-Fri: 9AM-5PM, Sat: 9AM-1PM",
      copyright: "© 2025 Kongu Nanbargal Sangam",
      designedBy: "Designed by",
      links: [
        'Home', 
        'History', 
        'Magazine', 
        'Gallery', 
        'Contact'
      ]
    }
  };

  // Get current content based on language
  const currentContent = content[language];
  
  const paths = ['/', '/history', '/magazine', '/gallery', '/contact'];

  return (
    <footer className="bg-white">
      {/* Top border line */}
      <div className="h-1 bg-gradient-to-r from-amber-400 via-green-500 to-amber-600" />
      
      {/* Main Content - more readable and neat */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Logo Section - increased font sizes */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-3">
                <img src="/Images/logo1.png" alt="Logo" className="h-14 w-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-700">Chennai Kongu</h3>
                  <h4 className="text-base text-amber-600">Nanbargal Sangam</h4>
                </div>
              </div>
              <p className="text-amber-600 text-sm leading-relaxed">{currentContent.tagline}</p>
              
              {/* Social Media Icons - made bigger */}
              <div className="flex gap-3 mt-4">
                <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-green-600 hover:text-white transition-colors duration-300">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Links Section - improved readability */}
            <div className="p-5">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-base font-semibold text-black mb-3 flex items-center">
                    <span className="w-2 h-5 bg-amber-500 rounded-full mr-2"></span>
                    {currentContent.quickLinks}
                  </h3>
                  <ul className="space-y-2">
                    {currentContent.links.map((link, index) => (
                      <li key={link}>
                        <a 
                          href={paths[index]}
                          className="text-gray-700 hover:text-amber-600 flex items-center transition-all duration-300 text-sm"
                        >
                          <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-base font-semibold text-black mb-3 flex items-center">
                    <span className="w-2 h-5 bg-amber-500 rounded-full mr-2"></span>
                    {currentContent.externalResources}
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="https://kongunanbargalsangam.org/matrimony/registration/register.aspx"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-amber-600 flex items-center transition-all duration-300 text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        {currentContent.matrimony}
                        <ExternalLink size={14} className="ml-1.5 text-gray-500" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Section - improved font size and spacing */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-base font-semibold text-black mb-3 flex items-center">
                <span className="w-2 h-5 bg-amber-500 rounded-full mr-2"></span>
                {currentContent.getInTouch}
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {currentContent.address}
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <a href="tel:+91448351244" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">
                    +91 44 8351244
                  </a>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-green-600" />
                    </div>
                  </div>
                  <a href="mailto:chennaikongu@gmail.com" className="text-gray-700 hover:text-amber-600 transition-colors text-sm">
                    chennaikongu@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-gray-700 text-sm">{currentContent.officeHours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - improved readability */}
      <div className="bg-gradient-to-r from-green-700 to-amber-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <p className="text-white text-sm">
              {currentContent.copyright}
            </p>
            <p className="text-white/90 text-sm">
              {currentContent.designedBy}{' '}
              <a 
                href="https://klabsindia.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-amber-200 transition-colors"
              >
                K Labs Technology and Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;