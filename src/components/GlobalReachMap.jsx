import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building, MapPin } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ReachShowcase = () => {
  const { language } = useLanguage();
  const mapRef = useRef(null);
  const [activeCity, setActiveCity] = useState(null);

  const content = {
    tamil: {
      title: "எங்கள் பரவல்",
      subtitle: "தமிழ்நாடு மற்றும் கர்நாடகாவில் உள்ள முக்கிய நகரங்களில் எங்கள் சேவைகள் கிடைக்கின்றன",
      members: "உறுப்பினர்கள்"
    },
    english: {
      title: "OUR REACH",
      subtitle: "We have established our presence across key cities in Tamil Nadu and Karnataka",
      members: "Members"
    }
  };

  // Location coordinates for each city with member counts
  const locations = [
    { name: 'Chennai', coords: [13.0827, 80.2707], members: 245 },
    { name: 'Salem', coords: [11.6643, 78.1460], members: 128 },
    { name: 'Pollachi', coords: [10.6589, 77.0089], members: 86 },
    { name: 'Namakkal', coords: [11.2342, 78.1673], members: 74 },
    { name: 'Madurai', coords: [9.9252, 78.1198], members: 156 },
    { name: 'Karur', coords: [10.9601, 78.0766], members: 92 },
    { name: 'Erode', coords: [11.3410, 77.7172], members: 107 },
    { name: 'Dindigul', coords: [10.3624, 77.9695], members: 68 },
    { name: 'Coimbatore', coords: [11.0168, 76.9558], members: 198 },
    { name: 'Bangalore', coords: [12.9716, 77.5946], members: 175 },
    { name: 'Dharmapuri', coords: [12.1462, 78.1578], members: 72 }
  ];

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map with same settings
      const map = L.map('map', {
        center: [11.7401, 78.8490], // Center of Tamil Nadu
        zoom: 7,
        zoomControl: false,
        dragging: false,
        touchZoom: false,
        doubleClickZoom: false,
        scrollWheelZoom: false,
        boxZoom: false,
        keyboard: false
      });

      // Add custom styled tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: false
      }).addTo(map);

      // Enhanced marker icons
      const standardIcon = L.divIcon({
        className: 'custom-div-icon',
        html: '<div class="marker-pin bg-green-600 w-4 h-4 rounded-full shadow-lg pulse-animation"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });
      
      const activeIcon = L.divIcon({
        className: 'custom-div-icon-active',
        html: '<div class="marker-pin bg-green-600 w-6 h-6 rounded-full shadow-xl pulse-animation-strong"></div>',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      // Create marker reference object
      const markers = {};

      // Add markers for each location
      locations.forEach(loc => {
        const marker = L.marker(loc.coords, { icon: standardIcon }).addTo(map);
        
        // Store marker reference
        markers[loc.name] = marker;
        
        // Add click handler
        marker.on('click', () => {
          // Reset all markers
          Object.values(markers).forEach(m => m.setIcon(standardIcon));
          
          // Set this marker as active
          marker.setIcon(activeIcon);
          
          // Update active city
          setActiveCity(loc);
        });
      });

      mapRef.current = { map, markers };
    }

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.map.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // Handle city selection from city list
  const handleCitySelect = (city) => {
    setActiveCity(city);
    
    if (mapRef.current && mapRef.current.markers) {
      // Reset all markers
      Object.values(mapRef.current.markers).forEach(marker => {
        marker.setIcon(L.divIcon({
          className: 'custom-div-icon',
          html: '<div class="marker-pin bg-green-600 w-4 h-4 rounded-full shadow-lg pulse-animation"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        }));
      });
      
      // Set active marker
      if (mapRef.current.markers[city.name]) {
        mapRef.current.markers[city.name].setIcon(L.divIcon({
          className: 'custom-div-icon-active',
          html: '<div class="marker-pin bg-green-600 w-6 h-6 rounded-full shadow-xl pulse-animation-strong"></div>',
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        }));
      }
    }
  };

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-green-50/50 via-emerald-50/30 to-white">
      {/* Enhanced Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-green-50/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-green-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-blue-50/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Enhanced Header with 3D Effect */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-green-50 to-white rounded-full shadow-md mb-8 relative transform hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-green-100/20 rounded-full blur"></div>
            <Building className="w-7 h-7 text-green-600 relative" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 drop-shadow-sm">
            {content[language].title}
          </h2>
          
          <div className="h-1 w-32 bg-gradient-to-r from-green-400/40 via-green-500 to-green-400/40 mx-auto mb-8"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content[language].subtitle}
          </p>
        </div>

        {/* Two Column Layout on Desktop */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Map Container with Premium Styling */}
          <div className="lg:w-2/3">
            <div className="relative overflow-hidden shadow-2xl border border-green-100 bg-white transition-all duration-300">
              {/* Interactive City Info Overlay */}
              {activeCity && (
                <div className="absolute top-0 right-0 m-4 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-green-100 max-w-xs transition-opacity duration-300">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-800">{activeCity.name}</h4>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p className="mb-1">{content[language].members}: <span className="font-semibold">{activeCity.members}</span></p>
                  </div>
                </div>
              )}
              
              <div id="map" className="w-full h-[500px] z-10"></div>
              
              {/* Premium Map Border Effects */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border border-green-200/30"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
                <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
                <div className="absolute top-0 right-0 h-full w-px bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-green-500/10 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-green-500/10 to-transparent"></div>
              </div>
            </div>
            
            {/* Caption / Info Text */}
            <div className="mt-4 text-center text-gray-500 text-sm italic">
              {language === 'tamil' ? 'நாங்கள் தென் இந்தியாவில் 11 முக்கிய நகரங்களில் இருக்கிறோம்' : 'We are present in 11 key cities across South India'}
            </div>
          </div>
          
          {/* Cities List with Member Counts */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-xl border border-green-100 overflow-hidden h-full">
              <div className="p-5 bg-gradient-to-r from-green-50 to-white border-b border-green-100">
                <h3 className="text-xl font-bold text-gray-800">
                  {language === 'tamil' ? 'எங்கள் இருப்பிடங்கள்' : 'Our Locations'}
                </h3>
              </div>
              
              <div className="divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                {locations.map((location, index) => (
                  <div 
                    key={index} 
                    className={`p-4 hover:bg-green-50 transition-colors cursor-pointer flex items-center ${activeCity && activeCity.name === location.name ? 'bg-green-50 border-l-4 border-green-500' : ''}`}
                    onClick={() => handleCitySelect(location)}
                  >
                    <MapPin className={`w-5 h-5 ${activeCity && activeCity.name === location.name ? 'text-green-600' : 'text-green-500'} mr-3 flex-shrink-0`} />
                    <div>
                      <h4 className="text-base font-medium text-gray-900">{location.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">{content[language].members}: {location.members}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Total Members Counter */}
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">
                    {language === 'tamil' ? 'மொத்த உறுப்பினர்கள்' : 'Total Members'}
                  </span>
                  <span className="text-green-600 font-bold text-lg">
                    {locations.reduce((sum, location) => sum + location.members, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS for Animations */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
        }
        
        .pulse-animation-strong {
          animation: pulseStrong 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.7);
          }
          
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 10px rgba(22, 163, 74, 0);
          }
          
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
          }
        }
        
        @keyframes pulseStrong {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.9);
          }
          
          70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 15px rgba(22, 163, 74, 0);
          }
          
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(22, 163, 74, 0);
          }
        }
        
        /* Scrollbar styling for city list */
        .max-h-\\[400px\\]::-webkit-scrollbar {
          width: 6px;
        }
        
        .max-h-\\[400px\\]::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .max-h-\\[400px\\]::-webkit-scrollbar-thumb {
          background: #d1fae5;
          border-radius: 10px;
        }
        
        .max-h-\\[400px\\]::-webkit-scrollbar-thumb:hover {
          background: #10b981;
        }
      `}</style>
    </section>
  );
};

export default ReachShowcase;