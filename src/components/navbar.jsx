import React, { useState, useEffect } from 'react';
import { Menu, Phone, Mail, ChevronDown, X, ExternalLink, Home, Book, BookOpen, Image, MessageSquare, Heart, Globe, AlertCircle, Award, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle outside click to close menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  // Menu items with translations - added two new menu items
  const menuItems = [
    {
      tamil: { name: 'முகப்பு', path: '/', icon: Home },
      english: { name: 'Home', path: '/', icon: Home }
    },
    {
      tamil: { name: 'வரலாறு', path: '/history', icon: Book },
      english: { name: 'History', path: '/history', icon: Book }
    },
    {
      tamil: { name: 'கொங்கு மாமணிகள்', path: '/kongu-mamanigal', icon: Award },
      english: { name: 'Kongu Mamanigal', path: '/kongu-mamanigal', icon: Award }
    },
    {
      tamil: { name: 'சாதனையாளர்கள்', path: '/sadhanayalargal', icon: User },
      english: { name: 'Sadhanayalargal', path: '/sadhanayalargal', icon: User }
    },
    {
      tamil: { name: 'பத்திரிகை', path: '/magazine', icon: BookOpen },
      english: { name: 'Magazine', path: '/magazine', icon: BookOpen }
    },
    {
      tamil: { name: 'படத்தொகுப்பு', path: '/gallery', icon: Image },
      english: { name: 'Gallery', path: '/gallery', icon: Image }
    },
    {
      tamil: { name: 'தொடர்புக்கு', path: '/contact', icon: MessageSquare },
      english: { name: 'Contact Us', path: '/contact', icon: MessageSquare }
    },
    {
      tamil: { 
        name: 'திருமண சேவை', 
        path: 'https://kongunanbargalsangam.org/matrimony/registration/register.aspx',
        isExternal: true,
        icon: Heart
      },
      english: { 
        name: 'Matrimony', 
        path: 'https://kongunanbargalsangam.org/matrimony/registration/register.aspx',
        isExternal: true,
        icon: Heart
      }
    }
  ];

  // Get current language menu items
  const currentMenuItems = menuItems.map(item => item[language]);

  // Organization title translations
  const orgTitle = {
    tamil: {
      main: 'சென்னை கொங்கு நண்பர்கள் சங்கம்',
      sub: 'Chennai Kongu Friends Association'
    },
    english: {
      main: 'Chennai Kongu Friends Association',
      sub: 'Founded 1960 • Serving Community'
    }
  };

  // Contact information translations
  const contactInfo = {
    tamil: {
      phone: 'தொலைபேசி',
      email: 'மின்னஞ்சல்',
      announcement: 'அறிவிப்பு'
    },
    english: {
      phone: 'Phone',
      email: 'Email',
      announcement: 'Announcement'
    }
  };

  // Close menu on navigation or external click
  const closeMenu = () => {
    setIsOpen(false);
  };

  // Combine navbar heights to calculate the content padding
  const navbarHeight = "80px"; // Approximate based on logo size + padding
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main navbar - with orange background (changed from white) */}
      <div className={`bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'shadow-md py-3'
      }`}>
        <div className="container mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex items-center justify-between">
            {/* Logo and title section */}
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex-shrink-0 group">
                <div className="bg-gradient-to-r from-green-50 to-transparent rounded-full p-3">
                  <img
                    src="/Images/logo1.png"
                    alt="Logo"
                    className="h-20 w-16 md:h-16 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="hidden sm:block pl-2 border-l-2 border-amber-200">
                <h1 className="text-base md:text-lg font-bold text-white">
                  {orgTitle[language].main}
                </h1>
                <p className="text-xs md:text-sm text-amber-100">{orgTitle[language].sub}</p>
              </div>
            </div>

            {/* Desktop contact info - text colors adjusted for orange background */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="tel:+919876543210" className="flex items-center text-white hover:text-amber-100 transition-colors text-sm group">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-white transition-colors">
                  <Phone size={16} className="text-amber-600" />
                </div>
                <span>{contactInfo[language].phone}: <span className="font-medium">+91 98765 43210</span></span>
              </a>
              <a href="mailto:info@chennaikongu.org" className="flex items-center text-white hover:text-amber-100 transition-colors text-sm group">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-2 group-hover:bg-white transition-colors">
                  <Mail size={16} className="text-amber-600" />
                </div>
                <span>{contactInfo[language].email}: <span className="font-medium">info@chennaikongu.org</span></span>
              </a>
              
              {/* Language Toggle - colors adjusted */}
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-amber-100 hover:bg-white px-4 py-2 rounded-full text-sm text-amber-800 transition-all duration-300 border border-amber-200"
              >
                <Globe size={16} className="flex-shrink-0" />
                <span className="font-medium">{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
              </button>
            </div>

            {/* Mobile language toggle and menu button - colors adjusted */}
            <div className="flex items-center space-x-3 md:hidden">
              <button 
                onClick={toggleLanguage}
                className="flex items-center space-x-1 bg-amber-100 hover:bg-white px-3 py-2 rounded-full text-sm text-amber-800 border border-amber-200"
              >
                <Globe size={16} className="flex-shrink-0" />
                <span className="font-medium">{language === 'tamil' ? 'English' : 'தமிழ்'}</span>
              </button>
              
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center p-2 rounded-lg bg-amber-100 text-amber-800 hover:bg-white transition-colors border border-amber-200"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation Menu - modified with green menu items */}
      <nav className="hidden md:block py-3 bg-white shadow-md">
        <div className="container mx-auto max-w-full px-2 lg:px-4">
          <ul className="flex items-center justify-center flex-nowrap">
            {currentMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name} className="relative group whitespace-nowrap">
                  {item.isExternal ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center px-2 lg:px-3 py-2 text-gray-800 font-medium transition-all hover:bg-green-50 rounded-lg ${language === 'tamil' ? 'text-sm' : ''}`}
                    >
                      <Icon size={16} strokeWidth={2} className="mr-1 flex-shrink-0 text-gray-600" />
                      <span>{item.name}</span>
                      <ExternalLink size={12} className="ml-1 opacity-70 flex-shrink-0" />
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center px-2 lg:px-3 py-2 font-medium transition-all rounded-lg ${
                        language === 'tamil' ? 'text-sm' : ''
                      } ${
                        location.pathname === item.path 
                          ? 'text-black bg-green-300 shadow-sm' 
                          : 'text-gray-800 hover:bg-green-50'
                      }`}
                    >
                      <Icon size={16} strokeWidth={2} className={`mr-1 flex-shrink-0 ${
                        location.pathname === item.path ? 'text-green-700' : 'text-gray-600'
                      }`} />
                      <span>{item.name}</span>
                    </Link>
                  )}
                  {/* Underline animation for active menu item - updated to green */}
                  {location.pathname === item.path && !item.isExternal && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-0.5 bg-green-500 rounded-full"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* MOBILE Menu - Premium Full Page Overlay with colors adjusted to orange */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto overflow-x-hidden mobile-menu">
          {/* Mobile Menu Header - changed to orange gradient */}
          <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-6 py-8 text-white relative">
            {/* Close button added to mobile menu header */}
            <button 
              onClick={closeMenu}
              className="absolute top-6 right-6 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <div className="flex items-center">
              <img src="/Images/logo1.png" alt="Logo" className="h-16 w-auto mr-4 flex-shrink-0" />
              <div className="overflow-hidden">
                <h2 className="text-xl font-bold">{orgTitle[language].main}</h2>
                <p className="text-sm text-amber-100">{orgTitle[language].sub}</p>
              </div>
            </div>
          </div>
          
                      {/* Mobile Menu Items - updated with green and orange colors */}
          <nav className="py-6 px-6 bg-white">
            <ul className="space-y-0">
              {currentMenuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-4 px-4 w-full text-gray-800 border-b border-gray-100 hover:bg-green-50 transition-colors"
                        onClick={closeMenu}
                      >
                        <div className="flex items-center overflow-hidden">
                          <div className="w-10 h-10 flex items-center justify-center bg-green-50 rounded-full mr-4">
                            <Icon size={20} className="text-green-600 flex-shrink-0" />
                          </div>
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <ExternalLink size={16} className="opacity-70 flex-shrink-0" />
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={closeMenu}
                        className={`flex items-center py-4 px-4 w-full border-b border-gray-100 hover:bg-green-50 transition-colors ${
                          location.pathname === item.path
                            ? 'text-black font-medium' 
                            : 'text-gray-800'
                        }`}
                      >
                        <div className={`w-10 h-10 flex items-center justify-center rounded-full mr-4 ${
                          location.pathname === item.path
                            ? 'bg-green-300' 
                            : 'bg-gray-100'
                        }`}>
                          <Icon size={20} className={`flex-shrink-0 ${
                            location.pathname === item.path
                              ? 'text-green-700' 
                              : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        
          {/* Mobile contact information - colors adjusted to orange */}
          <div className="px-6 py-8 bg-gray-50 mt-4">
            <h3 className="text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider">{contactInfo[language].announcement}</h3>
            <div className="space-y-6">
              <a href="tel:+919876543210" className="flex items-center text-gray-700 hover:text-amber-700 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm mr-4">
                  <Phone size={18} className="text-amber-600 flex-shrink-0" />
                </div>
                <span className="font-medium">+91 98765 43210</span>
              </a>
              <a href="mailto:info@chennaikongu.org" className="flex items-center text-gray-700 hover:text-amber-700 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full shadow-sm mr-4">
                  <Mail size={18} className="text-amber-600 flex-shrink-0" />
                </div>
                <span className="font-medium">info@chennaikongu.org</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;