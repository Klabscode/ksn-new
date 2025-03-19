import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ReactDOM from 'react-dom';

const CareerGuidanceForm = () => {
  const { language } = useLanguage();
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [modalRoot, setModalRoot] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    contact: '',
    email: '',
    percentage10th: '',
    percentage12th: '',
    qualification: '',
    address: '',
    kuttam: ''
  });

  // Create a div for the modal and append it to the body
  useEffect(() => {
    if (!modalRoot) {
      const modalRootDiv = document.createElement('div');
      modalRootDiv.id = 'modal-root';
      document.body.appendChild(modalRootDiv);
      setModalRoot(modalRootDiv);
    }

    return () => {
      if (modalRoot && document.body.contains(modalRoot)) {
        document.body.removeChild(modalRoot);
      }
    };
  }, [modalRoot]);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isFormVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFormVisible]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      dob: '',
      contact: '',
      email: '',
      percentage10th: '',
      percentage12th: '',
      qualification: '',
      address: '',
      kuttam: ''
    });
    // Hide form after submission
    setIsFormVisible(false);
  };

  const content = {
    tamil: {
      title: "வேலை வழிகாட்டல் செயல்முறை",
      steps: [
        "1. தகுதியுள்ள விருப்பமுள்ள விண்ணப்பதாரர்கள் ஆன்லைனில் பதிவு செய்ய வேண்டும்",
        "2. விண்ணப்பதாரர்கள் சென்னையில் உள்ள வேலை வழிகாட்டல் திட்டத்திற்கு அழைக்கப்படுவார்கள்",
        "3. விண்ணப்பதாரர்களுக்கு மதிப்பீட்டின் அடிப்படையில் வேலை / பயிற்சிக்கான தனிப்பட்ட ஆலோசனை வழங்கப்படும்",
        "4. விண்ணப்பதாரர்கள் மதிப்பீட்டு மதிப்பெண்களின் அடிப்படையில் நிறுவனங்களுக்கு பரிந்துரைக்கப்படுவார்கள்"
      ],
      eligibility: "தகுதி: 2017 தொகுப்பில் இருந்து மட்டுமே பட்டம் பெறும் மாணவர்கள்",
      joinIn: "சேரவும்",
      formLabels: {
        name: "பெயர்",
        dob: "பிறந்த தேதி",
        contact: "தொடர்பு எண்",
        email: "மின்னஞ்சல்",
        percentage10th: "10ஆம் வகுப்பில் சதவீதம்",
        percentage12th: "12ஆம் வகுப்பில் சதவீதம்",
        qualification: "கல்வித் தகுதி",
        address: "முகவரி",
        kuttam: "குட்டம்"
      },
      submit: "சமர்ப்பிக்கவும்"
    },
    english: {
      title: "Career Guidance Process",
      steps: [
        "1. Eligible Interested candidates should register online",
        "2. Candidates will be called for Career Guidance Program at Chennai",
        "3. Candidates will be given personal counseling for Job / Training based on the assessment",
        "4. Candidates will be referred to the companies based on the assessment scores."
      ],
      eligibility: "Eligibility: Students Graduating only from 2017 Batch",
      joinIn: "Join In",
      formLabels: {
        name: "Name",
        dob: "Date of birth",
        contact: "Contact number",
        email: "Email",
        percentage10th: "Percentage in 10th",
        percentage12th: "Percentage in 12th",
        qualification: "Qualification",
        address: "Address",
        kuttam: "Kuttam"
      },
      submit: "Submit"
    }
  };

  const currentContent = content[language];

  // The modal component that will be rendered via portal
  const Modal = () => {
    if (!isFormVisible) return null;
    
    return ReactDOM.createPortal(
      <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 999999 }}>
        {/* Overlay with blur effect */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={() => setIsFormVisible(false)}
        ></div>
        
        {/* Form Container with fixed height and scrolling */}
        <div 
          className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-md relative"
          style={{ 
            zIndex: 1000000,
            maxHeight: '80vh',  // Set max height to 80% of viewport height
            overflowY: 'auto'   // Enable vertical scrolling
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4 sticky top-0 bg-white pt-1 pb-2">
            <h3 className="text-xl font-bold text-green-700">{currentContent.title}</h3>
            <button 
              onClick={() => setIsFormVisible(false)}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="bg-gray-100 p-4 mb-4 rounded">
            {currentContent.steps.map((step, index) => (
              <p key={index} className="text-sm mb-2">{step}</p>
            ))}
            <p className="text-sm text-orange-500 font-medium mt-2">{currentContent.eligibility}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.name}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.dob}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.contact}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.email}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="number"
                  name="percentage10th"
                  value={formData.percentage10th}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.percentage10th}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                  min="0"
                  max="100"
                  step="0.01"
                />
              </div>
              <div>
                <input
                  type="number"
                  name="percentage12th"
                  value={formData.percentage12th}
                  onChange={handleInputChange}
                  placeholder={currentContent.formLabels.percentage12th}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                  min="0"
                  max="100"
                  step="0.01"
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                placeholder={currentContent.formLabels.qualification}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>

            <div>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder={currentContent.formLabels.address}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
                rows="2"
              />
            </div>

            <div>
              <input
                type="text"
                name="kuttam"
                value={formData.kuttam}
                onChange={handleInputChange}
                placeholder={currentContent.formLabels.kuttam}
                className="border border-gray-300 rounded px-3 py-2 w-full"
                required
              />
            </div>

            <div className="text-right sticky bottom-0 bg-white pt-2 pb-1">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-medium rounded px-6 py-3"
              >
                {currentContent.submit}
              </button>
            </div>
          </form>
        </div>
      </div>,
      modalRoot
    );
  };

  return (
    <div className="relative">
      {/* Career Guidance button */}
      <button 
        className="inline-flex items-center bg-green-700 text-white font-medium px-6 py-2 rounded w-fit"
        onClick={() => setIsFormVisible(true)}
      >
        <span>{language === 'tamil' ? 'மேலும் அறிய' : 'Learn More'}</span>
      </button>

      {/* Render the modal via portal */}
      {modalRoot && <Modal />}
    </div>
  );
};

export default CareerGuidanceForm;