import React from 'react';
import YearlyMagazineArchive from '../components/yearlymagazine';
import MonthlyMagazineArchive from '../components/monthlymagazine';

const MagazinePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white pt-28">
      {/* Yearly Archives */}
      <YearlyMagazineArchive />
      
      {/* Monthly Archives */}
      <MonthlyMagazineArchive />
    </div>
  );
};

export default MagazinePage;