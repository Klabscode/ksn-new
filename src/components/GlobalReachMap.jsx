import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Building } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const ReachShowcase = () => {
  const { language } = useLanguage();
  const mapRef = useRef(null);

  const content = {
    tamil: {
      title: "எங்கள் பரவல்",
      subtitle: "தமிழ்நாடு மற்றும் கர்நாடகாவில் உள்ள முக்கிய நகரங்களில் எங்கள் சேவைகள் கிடைக்கின்றன"
    },
    english: {
      title: "OUR REACH",
      subtitle: "We have established our presence across key cities in Tamil Nadu and Karnataka"
    }
  };

  // Location coordinates for each city
  const locations = [
    { name: 'Chennai', coords: [13.0827, 80.2707] },
    { name: 'Salem', coords: [11.6643, 78.1460] },
    { name: 'Pollachi', coords: [10.6589, 77.0089] },
    { name: 'Namakkal', coords: [11.2342, 78.1673] },
    { name: 'Madurai', coords: [9.9252, 78.1198] },
    { name: 'Karur', coords: [10.9601, 78.0766] },
    { name: 'Erode', coords: [11.3410, 77.7172] },
    { name: 'Dindigul', coords: [10.3624, 77.9695] },
    { name: 'Coimbatore', coords: [11.0168, 76.9558] },
    { name: 'Bangalore', coords: [12.9716, 77.5946] },
    { name: 'Dharmapuri', coords: [12.1462, 78.1578] }
  ];

  useEffect(() => {
    if (!mapRef.current) {
      // Initialize map
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

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: '<div class="marker-pin bg-green-600 w-4 h-4 rounded-full shadow-lg pulse-animation"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      // Add markers for each location
      locations.forEach(loc => {
        L.marker(loc.coords, { icon: customIcon })
          .addTo(map);
      });

      mapRef.current = map;
    }

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-green-50/50 to-white">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-green-50/30 to-transparent"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-green-100/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-green-100/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Elegant Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-green-50 to-white rounded-full shadow-sm mb-6 relative">
            <div className="absolute inset-0 bg-green-100/20 rounded-full blur"></div>
            <Building className="w-6 h-6 text-green-600 relative" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {content[language].title}
          </h2>
          
          <div className="h-1 w-24 bg-gradient-to-r from-green-400/40 via-green-500 to-green-400/40 mx-auto mb-6"></div>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content[language].subtitle}
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-[70%] mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-green-100">
          <div id="map" className="w-full h-[500px] z-10"></div>
          </div>
          
          {/* Map Overlay for Premium Effect */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* CSS for Marker Animation */}
      <style jsx>{`
        .pulse-animation {
          animation: pulse 2s infinite;
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
      `}</style>
    </section>
  );
};

export default ReachShowcase;