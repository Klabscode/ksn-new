import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ChevronRight, Calendar, ArrowRight } from 'lucide-react';
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

  const groupByDecade = () => {
    const decades = {};
    yearlyMagazines.forEach(magazine => {
      const decade = Math.floor(magazine.year / 10) * 10;
      if (!decades[decade]) {
        decades[decade] = [];
      }
      decades[decade].push(magazine);
    });
    return Object.entries(decades).sort((a, b) => b[0] - a[0]);
  };

  const handleYearClick = (link) => {
    window.open(link, '_blank');
  };

  const decades = groupByDecade();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative text-center space-y-8"
        >
          <h1 className="text-4xl font-bold text-green-950 mb-6 tracking-tight">
            {language === 'tamil' ? 'ஆண்டு தொகுப்புகள்' : 'Annual Collections'}
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto font-semibold">
            {language === 'tamil' ? 'எதிர்கால சந்ததியினருக்காக கவனமாகப் பாதுகாக்கப்பட்டு டிஜிட்டல் முறையில் காப்பகப்படுத்தப்பட்ட எங்கள் வருடாந்திர வெளியீடுகளின் தொகுப்பை ஆராயுங்கள்.' : 'Explore our curated collection of yearly publications, meticulously preserved and digitally archived for future generations.'}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-8 mt-12">
          {/* Decades Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="sticky top-8 bg-green-200 p-4 rounded-lg">
              <h2 className="text-xl font-bold text-black mb-6 pl-4 w-full">
                {language === 'tamil' ? 'பத்தாண்டுகளால் உலாவு' : 'Browse by Decade'}
              </h2>
              <div className="space-y-2">
                {decades.map(([decade]) => (
                  <motion.button
                    key={decade}
                    onClick={() => setSelectedDecade(selectedDecade === decade ? null : decade)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      selectedDecade === decade
                        ? 'bg-green-500 text-white shadow-lg shadow-green-900/10'
                        : 'hover:bg-gradient-to-r from-green-50 to-green-200 text-green-800 hover:shadow-lg hover:shadow-green-400'
                    }`}>
                    <div className={`w-px h-8 transition-all duration-300 ${
                      selectedDecade === decade ? 'bg-green-400' : 'bg-green-200 group-hover:bg-green-300'
                    }`} />
                    <span className="text-lg font-semibold ">{decade}s</span>
                    <ArrowRight className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                      selectedDecade === decade ? 'rotate-90' : ''
                    }`} />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Years Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-9"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {decades
                .filter(([decade]) => !selectedDecade || decade === selectedDecade)
                .map(([_, magazines]) =>
                  magazines.map((magazine) => (
                    <motion.button
                      key={magazine.year}
                      onClick={() => handleYearClick(magazine.link)}
                      onMouseEnter={() => setHoveredYear(magazine.year)}
                      onMouseLeave={() => setHoveredYear(null)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="absolute bg-green-200 inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
                      />
                      
                      <div className="relative bg-white/70 backdrop-blur-sm border border-green-100/50 rounded-2xl p-8 transition-all duration-500 group-hover:border-green-200 group-hover:shadow-xl group-hover:shadow-green-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/20 rounded-2xl" />
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="relative flex flex-col items-center gap-4"
                        >
                          <div className="text-3xl font-extralight text-green-950 tracking-tight">
                            {language === 'tamil' ? tamilYears[magazine.year] : magazine.year}
                          </div>
                          
                          <div className="w-8 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent" />
                          
                          <div className="flex items-center gap-2 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-sm font-light">
                              {language === 'tamil' ? 'காப்பகத்தைக் காண்க' : 'View Archive'}
                            </span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </motion.div>
                      </div>
                    </motion.button>
                  ))
                )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default YearlyMagazineArchive;