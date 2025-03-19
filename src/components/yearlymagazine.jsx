import React, { useState } from 'react';
import { BookOpen, ExternalLink, ChevronRight, Calendar, ArrowRight, Clock, LibraryBig } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const YearlyMagazineArchive = () => {
  const { language } = useLanguage();
  const [selectedDecade, setSelectedDecade] = useState(null);
  const [hoveredYear, setHoveredYear] = useState(null);

  const yearlyMagazines = [
    { year: 2025, link: "https://kongunanbargalsangam.org/Maga_pdf_2025.html" },
    { year: 2024, link: "https://kongunanbargalsangam.org/Maga_pdf_2024.html" },
    { year: 2023, link: "https://kongunanbargalsangam.org/Magazine_pdf.html" },
    { year: 2019, link: "https://kongunanbargalsangam.org/pdf/Book_2019.pdf" },
    { year: 2018, link: "https://kongunanbargalsangam.org/pdf/Book_2018.pdf" },
    { year: 2017, link: "https://kongunanbargalsangam.org/pdf/Book_2017.pdf" },
    { year: 2016, link: "https://kongunanbargalsangam.org/pdf/2016.pdf" },
    { year: 2014, link: "https://kongunanbargalsangam.org/pdf/2014.pdf" },
    { year: 2013, link: "https://kongunanbargalsangam.org/pdf/2013.pdf" },
    { year: 2012, link: "https://kongunanbargalsangam.org/pdf/2012.pdf" },
    { year: 2011, link: "https://kongunanbargalsangam.org/pdf/2011.pdf" },
    { year: 2009, link: "https://kongunanbargalsangam.org/pdf/2009.pdf" },
    { year: 2008, link: "https://kongunanbargalsangam.org/pdf/2008.pdf" },
    { year: 2007, link: "https://kongunanbargalsangam.org/pdf/2007.pdf" },
    { year: 2006, link: "https://kongunanbargalsangam.org/pdf/2006.pdf" },
    { year: 2005, link: "https://kongunanbargalsangam.org/pdf/2005.pdf" },
    { year: 2004, link: "https://kongunanbargalsangam.org/pdf/2004.pdf" },
    { year: 2003, link: "https://kongunanbargalsangam.org/pdf/2003.pdf" },
  ];


  const tamilYears = {
    2025: "2025",
    2024: "2024",
    2023: "2023",
    2019: "2019",
    2018: "2018",
    2017: "2017",
    2016: "2016",
    2014: "2014",
    2013: "2013",
    2012: "2012",
    2011: "2011",
    2009: "2009",
    2008: "2008",
    2007: "2007",
    2006: "2006",
    2005: "2005",
    2004: "2004",
    2003: "2003"
  };

  const content = {
    tamil: {
      title: 'ஆண்டு தொகுப்புகள்',
      subtitle: 'எதிர்கால சந்ததியினருக்காக கவனமாகப் பாதுகாக்கப்பட்டு டிஜிட்டல் முறையில் காப்பகப்படுத்தப்பட்ட எங்கள் வருடாந்திர வெளியீடுகளின் தொகுப்பை ஆராயுங்கள்.',
      browseByDecade: 'பத்தாண்டுகளால் உலாவு',
      viewArchive: 'காப்பகத்தைக் காண்க',
      selectDecade: 'தொகுப்புகளைக் காண தசாப்தத்தைத் தேர்ந்தெடுக்கவும்',
      allPublications: 'அனைத்து வெளியீடுகளும்'
    },
    english: {
      title: 'Annual Collections',
      subtitle: 'Explore our curated collection of yearly publications, meticulously preserved and digitally archived for future generations.',
      browseByDecade: 'Browse by Decade',
      viewArchive: 'View Archive',
      selectDecade: 'Select a decade to view collections',
      allPublications: 'All Publications'
    }
  };

  const currentContent = language === 'tamil' ? content.tamil : content.english;

  const groupByDecade = () => {
    const decades = {};
    yearlyMagazines.forEach(magazine => {
      const decade = Math.floor(magazine.year / 10) * 10;
      if (!decades[decade]) {
        decades[decade] = [];
      }
      decades[decade].push(magazine);
    });
    return Object.entries(decades).sort((a, b) => b[0] - a[0]); // Sort decades in descending order
  };

  const handleYearClick = (link) => {
    window.open(link, '_blank');
  };

  const decades = groupByDecade();

  // Get color for a specific decade
  const getDecadeColor = (decade) => {
    const colorMap = {
      2020: 'from-emerald-400 to-teal-500',
      2010: 'from-sky-400 to-blue-500',
      2000: 'from-indigo-400 to-violet-500',
      1990: 'from-purple-400 to-pink-500'
    };
    
    return colorMap[decade] || 'from-emerald-400 to-teal-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 py-16 px-4 sm:px-6 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header with elegant styling */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full transform -translate-y-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <LibraryBig className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600 tracking-tight">
                {currentContent.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {currentContent.subtitle}
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Decades Navigation - Premium sidebar */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-600 border-b border-emerald-400">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-white" />
                  {currentContent.browseByDecade}
                </h2>
              </div>
              
              {decades.length > 0 ? (
                <div className="divide-y divide-emerald-100">
                  <button
                    onClick={() => setSelectedDecade(null)}
                    className={`w-full px-5 py-4 flex items-center justify-between transition-all duration-300 ${
                      selectedDecade === null 
                        ? 'bg-emerald-50 text-emerald-800 font-medium' 
                        : 'text-gray-700 hover:bg-emerald-50/70'
                    }`}
                  >
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 mr-3 ${
                        selectedDecade === null ? 'text-emerald-600' : 'text-emerald-400'
                      }`} />
                      <span>{currentContent.allPublications}</span>
                    </div>
                    <ArrowRight className={`w-4 h-4 transform transition-transform duration-300 ${
                      selectedDecade === null ? 'rotate-90 text-emerald-600' : 'text-emerald-300'
                    }`} />
                  </button>
                  
                  {decades.map(([decade]) => (
                    <button
                      key={decade}
                      onClick={() => setSelectedDecade(selectedDecade === decade ? null : decade)}
                      className={`w-full px-5 py-4 flex items-center justify-between transition-all duration-300 ${
                        selectedDecade === decade 
                          ? 'bg-emerald-50 text-emerald-800 font-medium' 
                          : 'text-gray-700 hover:bg-emerald-50/70'
                      }`}
                    >
                      <div className="flex items-center">
                        <div className={`w-4 h-4 mr-3 rounded-full bg-gradient-to-r ${getDecadeColor(parseInt(decade))}`}></div>
                        <span>{decade}s</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transform transition-transform duration-300 ${
                        selectedDecade === decade ? 'rotate-90 text-emerald-600' : 'text-emerald-300'
                      }`} />
                    </button>
                  ))}
                </div>
              ) : (
                // Empty state for decades
                <div className="p-8 text-center text-gray-500">
                  <Clock className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>{currentContent.selectDecade}</p>
                </div>
              )}
            </div>
          </div>

          {/* Years Grid - Premium design */}
          <div className="md:col-span-8 lg:col-span-9">
            {decades.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {decades
                  .filter(([decade]) => !selectedDecade || decade === selectedDecade)
                  .map(([decade, magazines]) =>
                    magazines.map((magazine) => (
                      <button
                        key={magazine.year}
                        onClick={() => handleYearClick(magazine.link)}
                        onMouseEnter={() => setHoveredYear(magazine.year)}
                        onMouseLeave={() => setHoveredYear(null)}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${getDecadeColor(Math.floor(magazine.year / 10) * 10)} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 ease-in-out`} />
                        
                        <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl group-hover:border-emerald-200">
                          {/* Top highlight bar */}
                          <div className={`h-1.5 w-full bg-gradient-to-r ${getDecadeColor(Math.floor(magazine.year / 10) * 10)}`}></div>
                          
                          <div className="p-8 flex flex-col items-center space-y-3">
                            <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-100">
                              <BookOpen className="w-7 h-7 text-emerald-600 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-700" />
                            </div>
                            <span className="text-2xl font-light text-gray-800 transition-all duration-500 group-hover:text-emerald-800">
                              {language === 'tamil' ? tamilYears[magazine.year] : magazine.year}
                            </span>
                            <div className="w-full pt-3 mt-1 border-t border-gray-100 flex justify-center">
                              <div className="flex items-center gap-2 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                <span className="text-sm font-medium">{currentContent.viewArchive}</span>
                                <ExternalLink className="w-4 h-4 transition-all duration-300 transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </button>
                    ))
                  )}
              </div>
            ) : (
              // Empty state when no publications are available
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 flex flex-col items-center justify-center p-16 text-center transition-all duration-500 hover:shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-6">
                  <BookOpen className="w-10 h-10 text-emerald-400" />
                </div>
                <p className="text-lg text-gray-500 max-w-md">
                  {currentContent.selectDecade}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-emerald-100">
            <ExternalLink className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-gray-600">PDF Format</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearlyMagazineArchive;