import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Image, Search, ZoomIn, Grid, Menu, Camera, Calendar, Award, Users, Heart, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Image Modal Component - Premium full screen image viewer
const ImageModal = ({ images, onClose, initialIndex = 0 }) => {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [loading, setLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Bilingual content
  const content = {
    tamil: {
      image: "படம்",
      of: "மொத்தம்",
      close: "மூடு",
      next: "அடுத்த படம்",
      previous: "முந்தைய படம்"
    },
    english: {
      image: "Image",
      of: "of",
      close: "Close",
      next: "Next image",
      previous: "Previous image"
    }
  };

  // Current content based on language
  const currentContent = content[language];

  // For swipe functionality
  const minSwipeDistance = 50;

  // Handle swipe start
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle swipe move
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle swipe end
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
  };

  // Load the current image
  useEffect(() => {
    if (images && images.length > 0) {
      setLoading(true);
      const img = new window.Image();
      img.src = images[currentIndex].url;
      img.onload = () => {
        setLoading(false);
      };
      img.onerror = () => {
        setLoading(false);
      };
    }
  }, [currentIndex, images]);

  // Navigate to next image
  const nextImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Navigate to previous image
  const prevImage = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setLoading(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center backdrop-blur-sm">
      {/* Close button - enhanced */}
      <button 
        onClick={onClose}
        className="absolute right-5 top-5 z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all duration-300 text-white group"
        aria-label={currentContent.close}
      >
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/50 rounded-full py-1 px-3 backdrop-blur-sm">
          {currentContent.close}
        </span>
        <X className="w-5 h-5" />
      </button>

      {/* Main content area with touch support */}
      <div 
        className="w-full h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation buttons - premium styling */}
        <button 
          onClick={prevImage}
          className="hidden sm:flex absolute left-5 md:left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group"
          aria-label={currentContent.previous}
        >
          <span className="absolute right-full mr-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/50 rounded-full py-1 px-3 backdrop-blur-sm">
            {currentContent.previous}
          </span>
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button 
          onClick={nextImage}
          className="hidden sm:flex absolute right-5 md:right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm transition-all duration-300 group"
          aria-label={currentContent.next}
        >
          <span className="absolute left-full ml-3 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-black/50 rounded-full py-1 px-3 backdrop-blur-sm">
            {currentContent.next}
          </span>
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Image container - premium styling */}
        <div className="w-full h-full px-4 py-16 flex items-center justify-center">
          <div className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center">
            {/* Loading spinner - elegant version */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-20">
                <div className="w-12 h-12 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Image with premium effect */}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption || `Gallery image ${currentIndex + 1}`}
              className={`max-w-full max-h-[75vh] sm:max-h-[85vh] object-contain transition-all duration-500 ${loading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'} rounded-lg shadow-2xl`}
            />
          </div>
        </div>
      </div>

      {/* Bottom caption and controls - premium styling */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-20 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Image caption */}
          {images[currentIndex].caption && (
            <p className="text-white/90 text-center mb-4 text-base sm:text-lg">
              {images[currentIndex].caption}
            </p>
          )}
 
          {/* Controls - premium styling */}
          <div className="flex items-center justify-between">
            {/* Image counter - enhanced */}
            <div className="flex items-center space-x-2 text-white/70 text-xs sm:text-sm bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full">
              <span className="font-medium text-white">{currentIndex + 1}</span>
              <span className="text-white/50 mx-1">{currentContent.of}</span>
              <span>{images.length}</span>
            </div>
            
            {/* Pagination indicators - premium styling */}
            <div className="flex space-x-1.5">
              {images.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery section component - Premium design
const GallerySection = ({ section, sectionData, onImageClick, onBack }) => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(sectionData?.images || []);
  const [layout, setLayout] = useState('grid'); // 'grid' or 'list'

  // Bilingual content
  const content = {
    tamil: {
      back: "திரும்பிச் செல்க",
      searchPlaceholder: "படங்களைத் தேடுங்கள்...",
      images: "படங்கள்",
      image: "படம்",
      for: "இதற்காக",
      noImagesFound: "படங்கள் எதுவும் கிடைக்கவில்லை",
      tryAdjusting: "உங்கள் தேடல் சொற்றொடரைச் சரிசெய்து பாருங்கள் அல்லது வேறு வகைகளை ஆராயுங்கள்.",
      clearSearch: "தேடலை அழிக்கவும்",
      viewDetails: "விவரங்களைக் காண"
    },
    english: {
      back: "Back",
      searchPlaceholder: "Search images...",
      images: "images",
      image: "image",
      for: "for",
      noImagesFound: "No images found",
      tryAdjusting: "Try adjusting your search term or explore other categories.",
      clearSearch: "Clear search",
      viewDetails: "View details"
    }
  };

  // Translated section title
  const sectionTitles = {
    "2024 AGM": { tamil: "2024 ஆண்டு வருடாந்திர பொதுக்குழு", english: "2024 AGM" },
    "Sports Meet 2015": { tamil: "விளையாட்டு சந்திப்பு 2015", english: "Sports Meet 2015" },
    "Kudumba Vizha 2018": { tamil: "குடும்ப விழா 2018", english: "Kudumba Vizha 2018" },
    "Republic Day 2025": { tamil: "குடியரசு தினம் 2025", english: "Republic Day 2025" },
    "Dheeran Chinnamalai Birthday": { tamil: "தீரன் சின்னமலை பிறந்தநாள்", english: "Dheeran Chinnamalai Birthday" },
    "Special Meeting 26/11/2017": { tamil: "சிறப்பு கூட்டம் 26/11/2017", english: "Special Meeting 26/11/2017" },
    "Dheeran Chinnamalai Memorial 2017": { tamil: "தீரன் சின்னமலை நினைவு நாள் 2017", english: "Dheeran Chinnamalai Memorial 2017" }
  };

  // Current content based on language
  const currentContent = content[language];
  const currentSectionTitle = sectionTitles[section] ? sectionTitles[section][language] : section;

  // Filter images based on search term
  useEffect(() => {
    if (!sectionData || !sectionData.images) return;
    
    if (searchTerm.trim() === '') {
      setFilteredImages(sectionData.images);
    } else {
      setFilteredImages(
        sectionData.images.filter(image => 
          (image.caption && image.caption.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [searchTerm, sectionData?.images]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header with back button and search - premium design */}
      <div className="mb-8 border-b border-emerald-100 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <button 
              onClick={onBack}
              className="mr-4 text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium group transition-colors"
              aria-label={currentContent.back}
            >
              <div className="w-9 h-9 bg-emerald-50 rounded-full flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="ml-2">{currentContent.back}</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {currentSectionTitle}
            </h2>
          </div>
          
          <div className="flex items-center w-full sm:w-auto">
            {/* Search input - premium design */}
            <div className="relative flex-grow sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-emerald-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={currentContent.searchPlaceholder}
                className="block w-full pl-10 pr-10 py-2.5 border border-emerald-100 rounded-full focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm text-gray-700 placeholder-gray-400 bg-white/80 backdrop-blur-sm shadow-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  aria-label={currentContent.clearSearch}
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>
            
            {/* Layout toggle - premium design */}
            <div className="hidden sm:flex items-center ml-4 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm border border-emerald-50">
              <button 
                onClick={() => setLayout('grid')}
                className={`p-2 rounded-full transition-all ${layout === 'grid' ? 'bg-emerald-500 text-white shadow-sm' : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'}`}
                aria-label="Grid view"
              >
                <Grid size={16} />
              </button>
              <button 
                onClick={() => setLayout('list')}
                className={`p-2 rounded-full transition-all ${layout === 'list' ? 'bg-emerald-500 text-white shadow-sm' : 'text-gray-500 hover:text-emerald-600 hover:bg-emerald-50'}`}
                aria-label="List view"
              >
                <Menu size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results count - premium design */}
      <div className="mb-6 flex items-center text-sm text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-emerald-50 w-fit">
        <Camera className="w-4 h-4 mr-2 text-emerald-500" />
        {filteredImages.length} {filteredImages.length === 1 ? currentContent.image : currentContent.images} 
        {searchTerm && (
          <span className="ml-1">
            {currentContent.for} "<span className="font-medium text-emerald-700">{searchTerm}</span>"
          </span>
        )}
      </div>
      
      {/* Image grid - premium design */}
      {filteredImages.length === 0 ? (
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-emerald-100 p-10 text-center my-10">
          <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-5">
            <Image className="w-8 h-8 text-emerald-400" />
          </div>
          <h4 className="text-lg font-medium text-gray-700 mb-2">{currentContent.noImagesFound}</h4>
          <p className="text-gray-500 text-sm max-w-md mx-auto">{currentContent.tryAdjusting}</p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-5 px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm rounded-full transition-all hover:shadow-md hover:from-emerald-600 hover:to-teal-600"
            >
              {currentContent.clearSearch}
            </button>
          )}
        </div>
      ) : layout === 'grid' ? (
        /* Grid layout - premium design */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="aspect-square overflow-hidden rounded-2xl cursor-pointer group relative shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm border border-emerald-50"
            >
              <img
                src={image.url}
                alt={image.caption || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  {image.caption && (
                    <p className="text-white text-sm line-clamp-2 mb-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500">
                      {image.caption}
                    </p>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <div className="w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-500">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List layout - premium design */
        <div className="space-y-4">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="flex items-center bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-lg transition-all duration-300 border border-emerald-50 hover:border-emerald-200 transform hover:-translate-y-1"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-4 flex-grow">
                <p className="text-gray-800 font-medium line-clamp-2 group-hover:text-emerald-700 transition-colors">
                  {image.caption || `${currentContent.image} ${index + 1}`}
                </p>
              </div>
              <div className="p-4 text-gray-400 group-hover:text-emerald-500 transition-colors">
                <div className="w-10 h-10 rounded-full bg-emerald-50 group-hover:bg-emerald-100 flex items-center justify-center transition-colors">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Gallery Page Component - Premium design
const GalleryPage = () => {
  const { language } = useLanguage();
  const [showModal, setShowModal] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [modalImages, setModalImages] = useState([]);
  const [initialIndex, setInitialIndex] = useState(0);

  // Bilingual content
  const content = {
    tamil: {
      title: "படச் சேகரிப்பு",
      subtitle: "எங்கள் நினைவுகள், நிகழ்வுகள் மற்றும் சாதனைகளின் தொகுப்பை ஆராயுங்கள்",
      photos: "படங்கள்",
      view: "காண்க",
      explore: "ஆராய",
      categories: "வகைகள்",
      recentAdditions: "சமீபத்திய சேர்க்கைகள்"
    },
    english: {
      title: "Gallery",
      subtitle: "Explore our collection of memories, events, and achievements",
      photos: "photos",
      view: "View",
      explore: "Explore",
      categories: "Categories",
      recentAdditions: "Recent Additions"
    }
  };

  // Section titles in both languages
  const sectionTitles = {
    "2024 AGM": { tamil: "2024 ஆண்டு வருடாந்திர பொதுக்குழு", english: "2024 AGM" },
    "Sports Meet 2015": { tamil: "விளையாட்டு சந்திப்பு 2015", english: "Sports Meet 2015" },
    "Kudumba Vizha 2018": { tamil: "குடும்ப விழா 2018", english: "Kudumba Vizha 2018" },
    "Republic Day 2025": { tamil: "குடியரசு தினம் 2025", english: "Republic Day 2025" },
    "Dheeran Chinnamalai Birthday": { tamil: "தீரன் சின்னமலை பிறந்தநாள்", english: "Dheeran Chinnamalai Birthday" },
    "Special Meeting 26/11/2017": { tamil: "சிறப்பு கூட்டம் 26/11/2017", english: "Special Meeting 26/11/2017" },
    "Dheeran Chinnamalai Memorial 2017": { tamil: "தீரன் சின்னமலை நினைவு நாள் 2017", english: "Dheeran Chinnamalai Memorial 2017" }
  };

  // Current content based on language
  const currentContent = content[language];

  // Gallery data - placeholder
  const galleryData = {
    // You'll add the content here
  };

  const openSection = (section) => {
    setSelectedSection(section);
  };

  const openImage = (sectionId, index) => {
    const section = selectedSection || sectionId;
    setModalImages(galleryData[section]?.images || []);
    setInitialIndex(index);
    setShowModal(true);
  };

  // Get current section title
  const getCurrentSectionTitle = (section) => {
    return sectionTitles[section] ? sectionTitles[section][language] : section;
  };

  // Get gradient color class based on index
  const getGradientClass = (index) => {
    const gradients = [
      'from-emerald-500 to-teal-600',
      'from-teal-500 to-cyan-600',
      'from-cyan-500 to-blue-600',
      'from-blue-500 to-indigo-600',
      'from-indigo-500 to-violet-600',
      'from-violet-500 to-purple-600',
      'from-purple-500 to-pink-600'
    ];
    return gradients[index % gradients.length];
  };

  // Get icon based on section content
  const getSectionIcon = (section) => {
    const sectionLowerCase = section.toLowerCase();
    if (sectionLowerCase.includes('agm')) return Award;
    if (sectionLowerCase.includes('sport')) return Users;
    if (sectionLowerCase.includes('meeting')) return Users;
    if (sectionLowerCase.includes('birthday') || sectionLowerCase.includes('memorial')) return Calendar;
    return Image;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 pt-24 md:pt-32 pb-16">
      {!selectedSection ? (
        // Gallery categories view - premium design
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Elegant header */}
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

          {/* Section heading */}
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
              <Image className="w-4 h-4 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">{currentContent.categories}</h2>
          </div>

          {/* Categories grid - premium design */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(galleryData).map(([section, data], index) => (
              <div
                key={section}
                onClick={() => openSection(section)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:-translate-y-2"
                tabIndex="0"
              >
                {/* Card image with premium effects */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={data?.coverImage}
                    alt={getCurrentSectionTitle(section)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                {/* Colored overlay */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getGradientClass(index)}`}></div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70"></div>
                  
                  {/* Category icon */}
                  <div className="absolute top-4 right-4">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getGradientClass(index)} flex items-center justify-center shadow-lg`}>
                      {React.createElement(getSectionIcon(section), { className: "w-5 h-5 text-white" })}
                    </div>
                  </div>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-sm font-medium text-emerald-700 flex items-center">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {currentContent.explore}
                      </span>
                    </div>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white text-xl md:text-2xl font-semibold line-clamp-2 tracking-wide">
                      {getCurrentSectionTitle(section)}
                    </h3>
                    <div className="flex items-center mt-2 space-x-2">
                      <span className="flex items-center text-sm text-white/80">
                        <Camera className="w-4 h-4 mr-1.5 text-white/70" />
                        {data?.images?.length || 0} {currentContent.photos}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state if no gallery data */}
          {Object.keys(galleryData).length === 0 && (
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 p-12 text-center my-8">
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-6">
                <Camera className="w-10 h-10 text-emerald-300" />
              </div>
              <h4 className="text-xl font-medium text-gray-700 mb-3">No gallery collections yet</h4>
              <p className="text-gray-500 max-w-md mx-auto">
                Add your gallery data to display collections here.
              </p>
            </div>
          )}
        </div>
      ) : (
        // Individual gallery section view
        <GallerySection 
          section={selectedSection}
          sectionData={galleryData[selectedSection] || { images: [] }}
          onImageClick={(index) => openImage(selectedSection, index)}
          onBack={() => setSelectedSection(null)}
        />
      )}

      {/* Image modal */}
      {showModal && (
        <ImageModal
          images={modalImages}
          onClose={() => setShowModal(false)}
          initialIndex={initialIndex}
        />
      )}
    </div>
  );
};

export default GalleryPage;