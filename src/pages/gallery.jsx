import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Image, Search, ZoomIn, Grid, Menu, Camera, Calendar, Award, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Image Modal Component - Full screen image viewer
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
      close: "மூடு"
    },
    english: {
      image: "Image",
      of: "of",
      close: "Close"
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
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm">
      {/* Close button */}
      <button 
        onClick={onClose}
        className="absolute right-4 top-4 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 text-white group"
      >
        <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {currentContent.close}
        </span>
        <X className="w-6 h-6" />
      </button>

      {/* Main content area with touch support */}
      <div 
        className="w-full h-full flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Navigation buttons - Hidden on small mobile devices */}
        <button 
          onClick={prevImage}
          className="hidden sm:flex absolute left-4 md:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        <button 
          onClick={nextImage}
          className="hidden sm:flex absolute right-4 md:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Image container */}
        <div className="w-full h-full px-4 py-10 sm:py-16 flex items-center justify-center">
          <div className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center">
            {/* Loading spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-20">
                <div className="w-10 h-10 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            {/* Image */}
            <img
              src={images[currentIndex].url}
              alt={images[currentIndex].caption || `Gallery image ${currentIndex + 1}`}
              className={`max-w-full max-h-[70vh] sm:max-h-[80vh] object-contain transition-opacity duration-300 ${loading ? 'opacity-0' : 'opacity-100'} rounded shadow-2xl`}
            />
          </div>
        </div>
      </div>

      {/* Bottom caption and controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent pt-16 pb-6 px-6">
        <div className="max-w-4xl mx-auto">
 
          {/* Controls */}
          <div className="flex items-center justify-between">
            {/* Image counter */}
            <div className="flex items-center space-x-2 text-white/70 text-xs sm:text-sm">
              <span className="font-semibold text-white">{currentIndex + 1}</span>
              <span className="text-white/50 mx-1">{currentContent.of}</span>
              <span>{images.length}</span>
            </div>
            
            {/* Pagination indicators - Only on mobile */}
            <div className="flex space-x-1.5 sm:hidden">
              {images.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex ? 'bg-white scale-125' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Gallery section component
const GallerySection = ({ section, sectionData, onImageClick, onBack }) => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredImages, setFilteredImages] = useState(sectionData.images);
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
    if (searchTerm.trim() === '') {
      setFilteredImages(sectionData.images);
    } else {
      setFilteredImages(
        sectionData.images.filter(image => 
          (image.caption && image.caption.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
    }
  }, [searchTerm, sectionData.images]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header with back button and search */}
      <div className="mb-8 border-b border-emerald-100 pb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
            <button 
              onClick={onBack}
              className="mr-4 text-emerald-600 hover:text-emerald-700 flex items-center text-sm font-medium group"
            >
              <div className="bg-emerald-50 rounded-full p-1.5 group-hover:bg-emerald-100 transition-colors">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="ml-2">{currentContent.back}</span>
            </button>
            <h2 className="text-xl sm:text-2xl font-bold text-emerald-800">{currentSectionTitle}</h2>
          </div>
          
          <div className="flex items-center w-full sm:w-auto">
            {/* Search input */}
            <div className="relative flex-grow sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-emerald-400" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={currentContent.searchPlaceholder}
                className="block w-full pl-10 pr-3 py-2 border border-emerald-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-sm text-gray-700 placeholder-gray-400"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <X className="h-4 w-4 text-gray-400 hover:text-gray-500" />
                </button>
              )}
            </div>
            
            {/* Layout toggle */}
            <div className="hidden sm:flex items-center ml-4 bg-emerald-50 rounded-lg p-1">
              <button 
                onClick={() => setLayout('grid')}
                className={`p-1.5 rounded-md ${layout === 'grid' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
              >
                <Grid size={18} />
              </button>
              <button 
                onClick={() => setLayout('list')}
                className={`p-1.5 rounded-md ${layout === 'list' ? 'bg-white shadow-sm text-emerald-600' : 'text-gray-500'}`}
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Results count */}
      <div className="mb-5 flex items-center text-sm text-gray-500">
        <Camera className="w-4 h-4 mr-2 text-emerald-500" />
        {filteredImages.length} {filteredImages.length === 1 ? currentContent.image : currentContent.images} 
        {searchTerm && (
          <span className="ml-1">
            {currentContent.for} "<span className="font-medium text-emerald-700">{searchTerm}</span>"
          </span>
        )}
      </div>
      
      {/* Image grid */}
      {filteredImages.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm border border-emerald-100 p-8 text-center my-10">
          <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <Image className="w-7 h-7 text-emerald-400" />
          </div>
          <h4 className="text-lg font-medium text-gray-700 mb-2">{currentContent.noImagesFound}</h4>
          <p className="text-gray-500 text-sm">{currentContent.tryAdjusting}</p>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-5 px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm rounded-lg transition-colors"
            >
              {currentContent.clearSearch}
            </button>
          )}
        </div>
      ) : layout === 'grid' ? (
        /* Grid layout */
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="aspect-square overflow-hidden rounded-xl bg-gray-50 cursor-pointer group relative shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100"
            >
              <img
                src={image.url}
                alt={image.caption || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                    <ZoomIn className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List layout */
        <div className="space-y-3">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              onClick={() => onImageClick(index)}
              className="flex items-center bg-white rounded-xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-md transition-all duration-300 border border-emerald-100 hover:border-emerald-200"
            >
              <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.caption || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-grow">
                <p className="text-gray-800 text-sm font-medium line-clamp-1">
                  {image.caption || `${currentContent.image} ${index + 1}`}
                </p>
              </div>
              <div className="p-4 text-gray-400 group-hover:text-emerald-600 transition-colors">
                <div className="bg-emerald-50 group-hover:bg-emerald-100 p-2 rounded-full transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Gallery Page Component
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
      view: "காண்க"
    },
    english: {
      title: "Gallery",
      subtitle: "Explore our collection of memories, events, and achievements",
      photos: "photos",
      view: "View"
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

  // Gallery data with categories and images - placeholder
  const galleryData = {
    "2024 AGM": {
      "coverImage": "/Images/Gallery/agm/1.jpg",
      "images": [
        { 
          "url": "/Images/Gallery/agm/1.jpg", 
          "caption": language === 'tamil' ? "வருடாந்திர பொதுக்குழு கூட்டம் 2024" : "Annual General Meeting 2024" 
        },
        { 
          "url": "/Images/Gallery/agm/2.jpg", 
          "caption": language === 'tamil' ? "தலைவரின் உரை" : "President's Address" 
        },
        { 
          "url": "/Images/Gallery/agm/3.jpg", 
          "caption": language === 'tamil' ? "உறுப்பினர்கள் சந்திப்பு" : "Members Meet" 
        },
        { 
          "url": "/Images/Gallery/agm/4.jpg", 
          "caption": language === 'tamil' ? "விருது வழங்கும் விழா" : "Award Ceremony" 
        },
        { 
          "url": "/Images/Gallery/agm/5.jpg", 
          "caption": language === 'tamil' ? "சிறப்பு விருந்தினர் உரை" : "Chief Guest Speech" 
        },
        { 
          "url": "/Images/Gallery/agm/6.jpg", 
          "caption": language === 'tamil' ? "நினைவுப் பரிசு வழங்குதல்" : "Memento Presentation" 
        }
      ]
    },
    "Sports Meet 2015": {
      "coverImage": "/Images/Gallery/sports2015/cover.jpg",
      "images": [
        { 
          "url": "/Images/Gallery/sports2015/1.jpg", 
          "caption": language === 'tamil' ? "விளையாட்டு போட்டி 2015 துவக்க விழா" : "Sports Meet 2015 Inauguration" 
        },
        { 
          "url": "/Images/Gallery/sports2015/2.jpg", 
          "caption": language === 'tamil' ? "கோப்பை வெற்றியாளர்கள்" : "Trophy Winners" 
        },
        { 
          "url": "/Images/Gallery/sports2015/3.jpg", 
          "caption": language === 'tamil' ? "குழந்தைகள் விளையாட்டு" : "Children's Games" 
        },
        { 
          "url": "/Images/Gallery/sports2015/4.jpg", 
          "caption": language === 'tamil' ? "பெண்கள் விளையாட்டு" : "Women's Sports" 
        },
        { 
          "url": "/Images/Gallery/sports2015/5.jpg", 
          "caption": language === 'tamil' ? "மூத்த உறுப்பினர்கள் போட்டி" : "Senior Members Competition" 
        },
        { 
          "url": "/Images/Gallery/sports2015/6.jpg", 
          "caption": language === 'tamil' ? "விருது வழங்கும் விழா" : "Prize Distribution" 
        }
      ]
    },
    "Kudumba Vizha 2018": {
      "coverImage": "/Images/Gallery/kudumba2018/cover.jpg",
      "images": [
        { 
          "url": "/Images/Gallery/kudumba2018/1.jpg", 
          "caption": language === 'tamil' ? "குடும்ப விழா 2018 துவக்கம்" : "Family Festival 2018 Opening" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/2.jpg", 
          "caption": language === 'tamil' ? "கலைநிகழ்ச்சி" : "Cultural Program" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/3.jpg", 
          "caption": language === 'tamil' ? "குழந்தைகள் நிகழ்ச்சி" : "Children's Performance" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/4.jpg" ,
          "caption": language === 'tamil' ? "பாரம்பரிய நடனம்" : "Traditional Dance" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/5.jpg", 
          "caption": language === 'tamil' ? "விருந்து" : "Feast" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/6.jpg", 
          "caption": language === 'tamil' ? "குடும்ப உறுப்பினர்கள் கூட்டம்" : "Family Members Gathering" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/7.jpg", 
          "caption": language === 'tamil' ? "சிறப்பு விருந்தினர் உரை" : "Chief Guest Address" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/8.jpg", 
          "caption": language === 'tamil' ? "பரிசளிப்பு விழா" : "Gift Distribution" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/9.jpg", 
          "caption": language === 'tamil' ? "குழு புகைப்படம்" : "Group Photo" 
        },
        { 
          "url": "/Images/Gallery/kudumba2018/10.jpg", 
          "caption": language === 'tamil' ? "விழா நிறைவு" : "Event Conclusion" 
        }
      ]
    },
   "Republic Day 2025": {
  "coverImage": "/Images/Gallery/republic2025/cover.jpg",
  "images": [
    { 
      "url": "/Images/Gallery/republic2025/1.jpg", 
      "caption": language === 'tamil' ? "கொடியேற்றும் விழா" : "Flag Hoisting Ceremony" 
    },
    { 
      "url": "/Images/Gallery/republic2025/2.jpg", 
      "caption": language === 'tamil' ? "தேசிய கீதம்" : "National Anthem" 
    },
    { 
      "url": "/Images/Gallery/republic2025/3.jpg", 
      "caption": language === 'tamil' ? "மாணவர்கள் அணிவகுப்பு" : "Students Parade" 
    },
    { 
      "url": "/Images/Gallery/republic2025/4.jpg", 
      "caption": language === 'tamil' ? "தலைவர் உரை" : "President's Speech" 
    },
    { 
      "url": "/Images/Gallery/republic2025/5.jpg", 
      "caption": language === 'tamil' ? "விருது வழங்கும் விழா" : "Award Ceremony" 
    },
    { 
      "url": "/Images/Gallery/republic2025/6.jpg", 
      "caption": language === 'tamil' ? "குழந்தைகள் நிகழ்ச்சி" : "Children's Performance" 
    },
    { 
      "url": "/Images/Gallery/republic2025/7.jpg", 
      "caption": language === 'tamil' ? "தேசபக்தி பாடல்கள்" : "Patriotic Songs" 
    },
    { 
      "url": "/Images/Gallery/republic2025/8.jpg", 
      "caption": language === 'tamil' ? "பாரம்பரிய நடனம்" : "Traditional Dance" 
    },
    { 
      "url": "/Images/Gallery/republic2025/9.jpg", 
      "caption": language === 'tamil' ? "நினைவுப் பரிசு வழங்குதல்" : "Memento Presentation" 
    },
    { 
      "url": "/Images/Gallery/republic2025/10.jpg", 
      "caption": language === 'tamil' ? "குழு புகைப்படம்" : "Group Photo" 
    }
  ]
},
"Dheeran Chinnamalai Birthday": {
  "coverImage": "/Images/Gallery/birthday/cover.jpg",
  "images": [
    { 
      "url": "/Images/Gallery/birthday/1.jpg", 
      "caption": language === 'tamil' ? "தீரன் சின்னமலை சிலைக்கு மாலை அணிவித்தல்" : "Garlanding Dheeran Chinnamalai Statue" 
    },
    { 
      "url": "/Images/Gallery/birthday/2.jpg", 
      "caption": language === 'tamil' ? "பிறந்தநாள் கொண்டாட்டம்" : "Birthday Celebration" 
    },
    { 
      "url": "/Images/Gallery/birthday/3.jpg", 
      "caption": language === 'tamil' ? "தலைவர்களின் உரை" : "Leaders' Speeches" 
    },
    { 
      "url": "/Images/Gallery/birthday/4.jpg", 
      "caption": language === 'tamil' ? "சிறப்பு விருந்தினர் உரை" : "Chief Guest Address" 
    },
    { 
      "url": "/Images/Gallery/birthday/5.jpg", 
      "caption": language === 'tamil' ? "மாணவர்கள் கலை நிகழ்ச்சி" : "Students Cultural Program" 
    },
    { 
      "url": "/Images/Gallery/birthday/6.jpg", 
      "caption": language === 'tamil' ? "வரலாற்று சொற்பொழிவு" : "Historical Lecture" 
    },
    { 
      "url": "/Images/Gallery/birthday/7.jpg", 
      "caption": language === 'tamil' ? "பாரம்பரிய இசை நிகழ்ச்சி" : "Traditional Music Performance" 
    },
    { 
      "url": "/Images/Gallery/birthday/8.jpg", 
      "caption": language === 'tamil' ? "கேக் வெட்டும் நிகழ்வு" : "Cake Cutting Ceremony" 
    },
    { 
      "url": "/Images/Gallery/birthday/9.jpg", 
      "caption": language === 'tamil' ? "நினைவுப் பரிசு வழங்குதல்" : "Memento Distribution" 
    },
    { 
      "url": "/Images/Gallery/birthday/10.jpg", 
      "caption": language === 'tamil' ? "குழு புகைப்படம்" : "Group Photo" 
    }
  ]
},
"Special Meeting 26/11/2017": {
  "coverImage": "/Images/Gallery/meeting2017/cover.jpg",
  "images": [
    { 
      "url": "/Images/Gallery/meeting2017/1.jpg", 
      "caption": language === 'tamil' ? "சிறப்பு கூட்டம் துவக்கம்" : "Special Meeting Inauguration" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/2.jpg", 
      "caption": language === 'tamil' ? "தலைவர் உரை" : "President's Speech" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/3.jpg", 
      "caption": language === 'tamil' ? "செயலாளர் அறிக்கை" : "Secretary's Report" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/4.jpg", 
      "caption": language === 'tamil' ? "சிறப்பு விருந்தினர் உரை" : "Chief Guest Address" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/5.jpg", 
      "caption": language === 'tamil' ? "உறுப்பினர்கள் கலந்துரையாடல்" : "Members Discussion" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/6.jpg", 
      "caption": language === 'tamil' ? "புதிய உறுப்பினர்கள் அறிமுகம்" : "New Members Introduction" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/7.jpg", 
      "caption": language === 'tamil' ? "விருது வழங்கும் விழா" : "Award Ceremony" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/8.jpg", 
      "caption": language === 'tamil' ? "நிதி அறிக்கை சமர்ப்பித்தல்" : "Financial Report Presentation" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/9.jpg", 
      "caption": language === 'tamil' ? "புதிய திட்டங்கள் அறிவிப்பு" : "New Projects Announcement" 
    },
    { 
      "url": "/Images/Gallery/meeting2017/10.jpg", 
      "caption": language === 'tamil' ? "குழு புகைப்படம்" : "Group Photo" 
    }
  ]
},
"Dheeran Chinnamalai Memorial 2017": {
  "coverImage": "/Images/Gallery/memorial2017/cover.jpg",
  "images": [
    { 
      "url": "/Images/Gallery/memorial2017/1.jpg", 
      "caption": language === 'tamil' ? "நினைவு நாள் துவக்க விழா" : "Memorial Day Inauguration" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/2.jpg", 
      "caption": language === 'tamil' ? "மலர் அஞ்சலி" : "Floral Tribute" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/3.jpg", 
      "caption": language === 'tamil' ? "மௌன அஞ்சலி" : "Silent Tribute" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/4.jpg", 
      "caption": language === 'tamil' ? "தலைவர் உரை" : "President's Speech" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/5.jpg", 
      "caption": language === 'tamil' ? "வரலாற்று சொற்பொழிவு" : "Historical Lecture" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/6.jpg", 
      "caption": language === 'tamil' ? "வீர வணக்கம்" : "Heroic Salute" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/7.jpg", 
      "caption": language === 'tamil' ? "மாணவர்கள் பேச்சுப் போட்டி" : "Students Speech Competition" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/8.jpg", 
      "caption": language === 'tamil' ? "விருது வழங்கும் விழா" : "Award Ceremony" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/9.jpg", 
      "caption": language === 'tamil' ? "நாடகம்" : "Drama Performance" 
    },
    { 
      "url": "/Images/Gallery/memorial2017/10.jpg", 
      "caption": language === 'tamil' ? "குழு புகைப்படம்" : "Group Photo" 
    }
  ]
}
};

  const openSection = (section) => {
    setSelectedSection(section);
  };

  const openImage = (sectionId, index) => {
    const section = selectedSection || sectionId;
    setModalImages(galleryData[section].images);
    setInitialIndex(index);
    setShowModal(true);
  };

  // Get current section title
  const getCurrentSectionTitle = (section) => {
    return sectionTitles[section] ? sectionTitles[section][language] : section;
  };

  // Get background color class based on index
  const getBgColorClass = (index) => {
    const colorClasses = [
      'from-emerald-500 to-teal-600',
      'from-teal-500 to-cyan-600',
      'from-cyan-500 to-blue-600',
      'from-blue-500 to-indigo-600',
      'from-indigo-500 to-violet-600',
      'from-violet-500 to-purple-600',
      'from-purple-500 to-pink-600'
    ];
    return colorClasses[index % colorClasses.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 pt-25 md:pt-44 pb-16 mt-10">
      {!selectedSection ? (
        // Gallery categories view
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">
              {currentContent.title}
            </h1>
            <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-base sm:text-lg">
              {currentContent.subtitle}
            </p>
          </div>

          {/* Categories grid - with animation and improved visuals */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {Object.entries(galleryData).map(([section, data], index) => (
              <div
                key={section}
                onClick={() => openSection(section)}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-emerald-100 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transform hover:-translate-y-1"
                tabIndex="0"
              >
                {/* Card image with animated gradient overlay */}
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img
                    src={data.coverImage}
                    alt={getCurrentSectionTitle(section)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Animated gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getBgColorClass(index)} opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
                  
                  {/* Hover overlay content */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium text-emerald-800 flex items-center">
                        <ZoomIn className="w-4 h-4 mr-1.5" />
                        {currentContent.view}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Card content */}
                <div className="p-4 sm:p-5">
                  <h2 className="text-lg sm:text-xl font-semibold text-emerald-800 mb-2">
                    {getCurrentSectionTitle(section)}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center text-sm text-gray-500">
                      <Camera className="w-4 h-4 mr-1.5 text-emerald-500" />
                      {data.images.length} {currentContent.photos}
                    </span>
                    <span className="inline-flex items-center text-emerald-600 text-sm font-medium">
                      {currentContent.view}
                      <ChevronRight className="w-4 h-4 ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Individual gallery section view
        <GallerySection 
          section={selectedSection}
          sectionData={galleryData[selectedSection]}
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