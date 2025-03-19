import React from 'react';
import { Award, Home, Book, GraduationCap, Users, Heart } from 'lucide-react';

const MajorActivities = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-green-600 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Major Activities
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto text-green-50">
            Empowering our community through education, support, and cultural excellence
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Accommodation Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <Home className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Accommodation Facilities
                </h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Kongu Nadu Illam</h3>
                    <p className="text-gray-600">
                      Running "Kongu Nadu Illam" which is accommodating about 30 girls for a short stay 
                      who comes to Chennai for Projects, Special Coaching for C.A., I.A.S., Training 
                      and for the freshers who get jobs in Chennai mainly in Software and other areas.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Velli Vizha Illam</h3>
                    <p className="text-gray-600">
                      Running "Velli Vizha Illam" having about 20 well furnished rooms for our people 
                      to stay and attend their work like hospitalization, business etc.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg w-[600px] h-[400px] mx-auto group">
              <img 
                src="/Images/kongu_building.png" 
                alt="Kongu Nadu Illam" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Magazine Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-lg w-[600px] h-[400px] mx-auto order-2 lg:order-1 group">
              <img 
                src="/Images/hostel1.png" 
                alt="Seithi Madal Magazine" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Magazine & Matrimonial
                </h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Seithi Madal Magazine</h3>
                    <p className="text-gray-600">
                      A monthly magazine "Seithi Madal" is being released which comes with articles for the 
                      benefit of our community, about job opportunities, and about the Veterans of kongunadu.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-green-600 mb-3">Matrimonial Services</h3>
                    <p className="text-gray-600">
                      A dedicated matrimonial section to register and connect suitable matches 
                      for girls and boys from our community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Awards Section */}
          <div>
            <div className="flex items-center gap-3 justify-center mb-12">
              <Award className="w-8 h-8 text-green-600" />
              <h2 className="text-3xl font-bold text-gray-800">Annual Awards</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Kongu Mamani Award</h3>
                <p className="text-gray-600">
                  Recognizing excellence in service and contributions at the national level since 2003.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Sathanaiyalar Award</h3>
                <p className="text-gray-600">
                  Honoring 15-20 outstanding performers in their respective professions annually.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-3">Academic Excellence</h3>
                <p className="text-gray-600">
                  Medals for top three rank holders in 10th and +2 examinations.
                </p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg w-[600px] h-[400px] mx-auto group">
              <img 
                src="/Images/img_3.jpg" 
                alt="Annual Awards Ceremony" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Education & Support */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-green-600" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Education & Community Support
                </h2>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg space-y-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Users className="w-6 h-6 text-green-600 mt-1" />
                    <h3 className="text-xl font-semibold">Educational Support</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 ml-9">
                    <li>• Educational aid Rs.10,000 each to 10 deserving students</li>
                    <li>• Free engineering college seats for 10 students</li>
                    <li>• Sports events and prizes for children and ladies</li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <Heart className="w-6 h-6 text-green-600 mt-1" />
                    <h3 className="text-xl font-semibold">Community Welfare</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600 ml-9">
                    <li>• Annual Day functions to promote children's talents</li>
                    <li>• Continuous support for poor and needy</li>
                    <li>• Emergency assistance during natural calamities</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg w-[600px] h-[400px] mx-auto group">
              <img 
                src="/Images/img_4.png" 
                alt="Educational Support" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MajorActivities;