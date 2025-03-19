import React, { useState } from 'react';
import { Calendar, ChevronDown, ExternalLink, Clock, ArrowRight, BookOpen, Archive } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MonthlyMagazineArchive = () => {
  const { language } = useLanguage();
  const [selectedYear, setSelectedYear] = useState(2018);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const monthlyArchives = {
    2018: {
      January: "https://kongunanbargalsangam.org/magazines/2018/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2018/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2018/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2018/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2018/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2018/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2018/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2018/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2018/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2018/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2018/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2018/december.pdf"
    },
    2017: {
      January: "https://kongunanbargalsangam.org/magazines/2017/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2017/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2017/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2017/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2017/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2017/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2017/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2017/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2017/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2017/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2017/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2017/december.pdf"
    },
    2016: {
      January: "https://kongunanbargalsangam.org/magazines/2016/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2016/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2016/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2016/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2016/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2016/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2016/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2016/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2016/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2016/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2016/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2016/december.pdf"
    },
    2015: {
      January: "https://kongunanbargalsangam.org/magazines/2015/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2015/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2015/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2015/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2015/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2015/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2015/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2015/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2015/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2015/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2015/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2015/december.pdf"
    },
    2014: {
      January: "https://kongunanbargalsangam.org/magazines/2014/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2014/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2014/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2014/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2014/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2014/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2014/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2014/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2014/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2014/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2014/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2014/december.pdf"
    },
    2013: {
      January: "https://kongunanbargalsangam.org/magazines/2013/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2013/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2013/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2013/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2013/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2013/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2013/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2013/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2013/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2013/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2013/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2013/december.pdf"
    },
    2012: {
      January: "https://kongunanbargalsangam.org/magazines/2012/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2012/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2012/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2012/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2012/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2012/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2012/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2012/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2012/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2012/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2012/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2012/december.pdf"
    },
    2011: {
      January: "https://kongunanbargalsangam.org/magazines/2011/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2011/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2011/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2011/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2011/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2011/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2011/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2011/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2011/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2011/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2011/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2011/december.pdf"
    },
    2010: {
      January: "https://kongunanbargalsangam.org/magazines/2010/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2010/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2010/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2010/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2010/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2010/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2010/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2010/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2010/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2010/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2010/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2010/december.pdf"
    },
    2009: {
      January: "https://kongunanbargalsangam.org/magazines/2009/january.pdf",
      February: "https://kongunanbargalsangam.org/magazines/2009/february.pdf",
      March: "https://kongunanbargalsangam.org/magazines/2009/march.pdf",
      April: "https://kongunanbargalsangam.org/magazines/2009/april.pdf",
      May: "https://kongunanbargalsangam.org/magazines/2009/may.pdf",
      June: "https://kongunanbargalsangam.org/magazines/2009/june.pdf",
      July: "https://kongunanbargalsangam.org/magazines/2009/july.pdf",
      August: "https://kongunanbargalsangam.org/magazines/2009/august.pdf",
      September: "https://kongunanbargalsangam.org/magazines/2009/september.pdf",
      October: "https://kongunanbargalsangam.org/magazines/2009/october.pdf",
      November: "https://kongunanbargalsangam.org/magazines/2009/november.pdf",
      December: "https://kongunanbargalsangam.org/magazines/2009/december.pdf"
    },

  };

  const tamilMonths = {
    January: "ஜனவரி",
    February: "பிப்ரவரி",
    March: "மார்ச்",
    April: "ஏப்ரல்",
    May: "மே",
    June: "ஜூன்",
    July: "ஜூலை",
    August: "ஆகஸ்ட்",
    September: "செப்டம்பர்",
    October: "அக்டோபர்",
    November: "நவம்பர்",
    December: "டிசம்பர்"
  };

  const tamilContent = {
    magazineArchives: "மாதாந்திர இதழ்கள் காப்பகம்",
    browseCollection: "எங்கள் மாதாந்திர இதழ்களின் தொகுப்பை உலாவுங்கள்",
    selectYear: "ஆண்டைத் தேர்ந்தெடுக்கவும்",
    issues: "பிரச்சினைகள்",
    noYearSelected: "இதழ்களைக் காண ஆண்டைத் தேர்ந்தெடுக்கவும்",
    pdfFormat: "அனைத்து இதழ்களும் PDF வடிவத்தில் உள்ளன"
  };

  const englishContent = {
    magazineArchives: "Monthly Magazine Archives",
    browseCollection: "Browse our collection of monthly magazines",
    selectYear: "Select Year",
    issues: "Issues",
    noYearSelected: "Select a year to view available magazines",
    pdfFormat: "All magazines are available in PDF format"
  };

  const contentText = language === 'tamil' ? tamilContent : englishContent;

  const handleMonthClick = (link) => {
    window.open(link, '_blank');
  };

  const years = Object.keys(monthlyArchives).sort((a, b) => b - a);
  const months = selectedYear && monthlyArchives[selectedYear] ? Object.keys(monthlyArchives[selectedYear]) : [];

  // Get month-specific colors
  const getMonthColor = (month) => {
    const colorMap = {
      January: 'from-emerald-400 to-teal-500',
      February: 'from-cyan-400 to-sky-500',
      March: 'from-sky-400 to-blue-500',
      April: 'from-indigo-400 to-violet-500',
      May: 'from-purple-400 to-pink-500',
      June: 'from-pink-400 to-rose-500',
      July: 'from-rose-400 to-red-500',
      August: 'from-amber-400 to-orange-500',
      September: 'from-orange-400 to-amber-500',
      October: 'from-yellow-400 to-amber-500',
      November: 'from-lime-400 to-green-500',
      December: 'from-teal-400 to-cyan-500'
    };
    
    return colorMap[month] || 'from-emerald-400 to-teal-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with elegant styling */}
        <div className="text-center mb-16">
          <div className="relative mb-6">
            <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-emerald-300 to-sky-300 rounded-full transform -translate-y-1/2"></div>
            <div className="relative">
              <div className="inline-flex items-center justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-emerald-500" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600 tracking-tight">
                {contentText.magazineArchives}
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {contentText.browseCollection}
          </p>
          <div className="mt-6 h-1 w-32 bg-gradient-to-r from-emerald-400 to-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          {/* Years Panel - Elegant card design */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-1">
              <div className="p-5 bg-gradient-to-r from-emerald-500 to-teal-600 border-b border-emerald-400">
                <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Archive className="w-5 h-5 text-white" />
                  {contentText.selectYear}
                </h2>
              </div>
              <div className="divide-y divide-emerald-100">
                {years.length > 0 ? (
                  years.map((year) => (
                    <button
                      key={year}
                      onClick={() => {
                        setSelectedYear(parseInt(year));
                        setSelectedMonth(null);
                      }}
                      className={`w-full px-5 py-4 flex items-center justify-between transition-all duration-300 ${
                        selectedYear === parseInt(year) 
                          ? 'bg-emerald-50 text-emerald-800 font-medium' 
                          : 'text-gray-700 hover:bg-emerald-50/70'
                      }`}
                    >
                      <div className="flex items-center">
                        <Clock className={`w-4 h-4 mr-3 ${
                          selectedYear === parseInt(year) ? 'text-emerald-600' : 'text-emerald-400'
                        }`} />
                        <span>{year}</span>
                      </div>
                      <ArrowRight className={`w-4 h-4 transform transition-transform duration-300 ${
                        selectedYear === parseInt(year) ? 'rotate-90 text-emerald-600' : 'text-emerald-300'
                      }`} />
                    </button>
                  ))
                ) : (
                  // Empty state for years
                  <div className="p-6 text-center text-gray-500">
                    <Clock className="w-10 h-10 mx-auto mb-3 text-gray-300" />
                    <p>No years available</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Months Grid - Premium design */}
          <div className="md:col-span-8 lg:col-span-9">
            {selectedYear && months.length > 0 ? (
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 overflow-hidden transition-all duration-500 hover:shadow-2xl">
                <div className="p-5 bg-gradient-to-r from-sky-500 to-emerald-500 border-b border-emerald-200">
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-white" />
                    {selectedYear} {contentText.issues}
                  </h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => handleMonthClick(monthlyArchives[selectedYear][month])}
                        className="group relative"
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${getMonthColor(month)} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500 ease-in-out`} />
                        <div className="relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-xl group-hover:border-emerald-200">
                          {/* Top highlight bar */}
                          <div className={`h-1.5 w-full bg-gradient-to-r ${getMonthColor(month)}`}></div>
                          
                          <div className="p-6 flex flex-col items-center space-y-3">
                            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-100">
                              <Calendar className="w-6 h-6 text-emerald-600 transition-all duration-500 group-hover:scale-110 group-hover:text-emerald-700" />
                            </div>
                            <span className="text-base font-medium text-gray-800 transition-all duration-500 group-hover:text-emerald-800">
                              {language === 'tamil' ? tamilMonths[month] : month}
                            </span>
                            <div className="w-full pt-2 mt-2 border-t border-gray-100 flex justify-center">
                              <ExternalLink className="w-4 h-4 text-emerald-500 transition-all duration-500 ease-in-out transform group-hover:scale-125" />
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-emerald-100 flex flex-col items-center justify-center p-12 text-center transition-all duration-500 hover:shadow-2xl">
                <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                  <Calendar className="w-10 h-10 text-emerald-400" />
                </div>
                <p className="text-lg text-gray-500 max-w-md">
                  {contentText.noYearSelected}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-2 py-2 px-4 rounded-full bg-white/80 backdrop-blur-sm shadow-sm border border-emerald-100">
            <ExternalLink className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-gray-600">{contentText.pdfFormat}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthlyMagazineArchive;