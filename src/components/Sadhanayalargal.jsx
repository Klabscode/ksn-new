import React, { useState } from 'react';
import { ChevronDown, Award, Trophy, Medal, Calendar, Clock, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Sadhanayalargal = () => {
  const [selectedYear, setSelectedYear] = useState('2009');
  const { language } = useLanguage();

  const years = ['2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000', '1999'];

  // Bilingual content
  const content = {
    tamil: {
      title: "சாதனையாளர்கள்",
      subtitle: "பல்வேறு துறைகளில் சிறந்து விளங்கும் நமது சமூக உறுப்பினர்களின் சாதனைகளைப் போற்றுதல்",
      awardRecipient: "விருது பெற்றவர்",
      previous: "முந்தைய",
      next: "அடுத்த",
      fieldLabel: "துறை"
    },
    english: {
      title: "SADHANAYALARGAL",
      subtitle: "Honoring excellence and outstanding contributions by members of our community in various fields",
      awardRecipient: "Award Recipient",
      previous: "Previous",
      next: "Next",
      fieldLabel: "Field"
    }
  };

  // Get current content based on language
  const currentContent = content[language];

  // Bilingual achievement data - placeholder as requested
  const achievementData = {
    "2009": [
      {
        name: language === 'tamil' ? "கவிஞர் சக்திகனல் (கே.பி. பழனிசாமி)" : "Kavigar Sakthikanal (K.P. Palanisamy)",
        field: language === 'tamil' ? "இலக்கியத்தில் சிறந்த செயல்திறன்" : "Outstanding Performance in Literature"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர். நல்லதம்பி கவுண்டர்" : "Mr. R. Nallathambi Gounder",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க கிராம வணிகம்" : "Remarkable Village Business"
      },
      {
        name: language === 'tamil' ? "திரு. பி.எம். கருப்பண்ணன்" : "Mr. P.M. Karupannan",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர்" : "Outstanding Educationalist"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர். பெருமாள்சாமி" : "Mr. R. Perumaalsamy",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் விவசாயி" : "Outstanding Educationalist and Agriculturist"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஆர். ருக்மணி" : "Dr. R. Rukhmani",
        field: language === 'tamil' ? "சிறந்த பேராசிரியர்" : "Best Professor"
      },
      {
        name: language === 'tamil' ? "டாக்டர் பி. செல்வராஜ்" : "Dr. P. Selvaraj",
        field: language === 'tamil' ? "மருத்துவத் துறையில் சேவை" : "Service in Medical Field"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ். ராஜேந்திரன்" : "Mr. S. Rajendran",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. பி.எம். நாச்சிமுத்து கவுண்டர்" : "Mr. P.M. Naachimuthu Gounder",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் சி. சின்னசாமி" : "Dr. C. Chinnasamy",
        field: language === 'tamil' ? "சிறந்த விவசாய விஞ்ஞானி" : "Outstanding Agricultural Scientist"
      },
      {
        name: language === 'tamil' ? "திரு. சி. பொன்னுசாமி" : "Mr. C. Ponnusamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ். ஜகதீசன்" : "Mr. S. Jagathesan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. அசோகன் முத்துசாமி" : "Mr. Asokan Muthusamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. பி.வி. கல்யாண சுந்தரம்" : "Mr. P.V. Kalyana Sundaram",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. பாயா கவுண்டர் (ஆர். கிருஷ்ணன்)" : "Mr. Paaya Gounder (a) R. Krishnan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. வி.எம். சிவநேசன்" : "Mr. V.M. Sivanesan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. குப்பனூர் பி. சிவானந்தம்" : "Mr. Kuppanoor P. Sivanandham",
        field: language === 'tamil' ? "சிறந்த பொறியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Best Engineer and Remarkable Social Service"
      }
    ],
    "2008": [
      {
        name: language === 'tamil' ? "திரு. வி.கே. ராமசாமி" : "Mr. V.K. Ramasamy",
        field: language === 'tamil' ? "சிறந்த விவசாயி மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Agriculturist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. அட்லஸ் எம். நாச்சிமுத்து" : "Mr. Atlas M. Nachimuthu",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஏ. முருகநாதன்" : "Dr. A. Muruganathan",
        field: language === 'tamil' ? "சிறந்த மருத்துவர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Doctor and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. என்.கே.எம். நல்லசாமி" : "Mr. N.K.M. Nallasamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஜி. செங்கோட்டுவேலு" : "Dr. G. Sengottuvelu",
        field: language === 'tamil' ? "சிறந்த மருத்துவர்" : "Outstanding Doctor"
      },
      {
        name: language === 'tamil' ? "டாக்டர் வி. முருகன்" : "Dr. V. Murugan",
        field: language === 'tamil' ? "சிறந்த பேராசிரியர்" : "Outstanding Professor"
      },
      {
        name: language === 'tamil' ? "திரு. என்.எஸ். பெரியசாமி" : "Mr. N.S. Periasamy",
        field: language === 'tamil' ? "சிறந்த அரசு ஊழியர்" : "Best Government Employee"
      },
      {
        name: language === 'tamil' ? "டாக்டர் சி. சுவாமிநாதன்" : "Dr. C. Swaminathan",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர்" : "Outstanding Educationalist"
      },
      {
        name: language === 'tamil' ? "டாக்டர் சி. கந்தசாமி" : "Dr. C. Kandasamy",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. கொங்கு கோவிந்தசாமி" : "Mr. Kongu Govindasamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர்.கே. பாலகிருஷ்ணன்" : "Mr. R.K. Balakrishnan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திருமதி டி.எம். தங்கமணி" : "Mrs. D.M. Thangamani",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. பி. கோவிந்தசாமி" : "Mr. P. Govindasamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஏ. செல்வி" : "Dr. A. Selvi",
        field: language === 'tamil' ? "சிறந்த விஞ்ஞானி" : "Outstanding Scientist"
      },
      {
        name: language === 'tamil' ? "திரு. எர். பி. மோகன்" : "Mr. Er. B. Mohan",
        field: language === 'tamil' ? "இளம் தொழிலதிபர்" : "Young Industrialist"
      },
      {
        name: language === 'tamil' ? "செல்வி பி. அப்ரஜிதா" : "Selvi B. Aprajita",
        field: language === 'tamil' ? "விளையாட்டு சாம்பியன்" : "Sports Champion"
      }
    ],
    "2007": [
      {
        name: language === 'tamil' ? "திரு. கே. பாலசுப்பிரமணியன்" : "Mr. K. Balasubramanian",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர். தமிழ்மணி" : "Mr. R. Tamilmani",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர்" : "Outstanding Educationalist"
      },
      {
        name: language === 'tamil' ? "டாக்டர் விமலா ராமலிங்கம்" : "Dr. Vimala Ramalingam",
        field: language === 'tamil' ? "சிறந்த மருத்துவர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Doctor and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. கே.கே. வேலுசாமி" : "Mr. K.K. Velusamy",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க முதியோர் சமூக சேவை" : "Outstanding Industrialist and Remarkable Oldage Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ்.டி. சந்திரசேகர்" : "Mr. S.D. Chandrasekar",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர்" : "Outstanding Educationalist"
      },
      {
        name: language === 'tamil' ? "திரு. பி. முத்துசாமி" : "Mr. P. Muthusamy",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ். பெருமாள்" : "Mr. S. Perumal",
        field: language === 'tamil' ? "சிறந்த பேராசிரியர்" : "Outstanding Professor"
      },
      {
        name: language === 'tamil' ? "டாக்டர் கே.எஸ்.கே. வேலுமணி" : "Dr. K.S.K. Velumani",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஆர். நயனம்" : "Dr. R. Nayanam",
        field: language === 'tamil' ? "சிறந்த விவசாய கல்வியாளர்" : "Outstanding Agricultural Educationalist"
      },
      {
        name: language === 'tamil' ? "திரு. எம். சிவசண்முகம்" : "Mr. M. Sivashanmugam",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க நகர மேம்பாட்டு சேவைகள்" : "Remarkable City Uplifting Services"
      },
      {
        name: language === 'tamil' ? "திரு. இ.டி. ராஜமாணிக்கம்" : "Mr. E.T. Rajamanikam",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திருமதி ருக்மணி மாரப்பன்" : "Mrs. Rukmani Marappan",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. எம். குமார கவுண்டர்" : "Mr. M. Kumara Gounder",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் சித்ரா தேவி ஜெகதீசன்" : "Dr. Chitra Devi Jagadeesan",
        field: language === 'tamil' ? "சிறந்த மருத்துவர்" : "Outstanding Doctor"
      },
      {
        name: language === 'tamil' ? "திரு. ஏ.கே.பி. சின்ராஜ்" : "Mr. A.K.P. Chinraj",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. விசா எம். சண்முகம்" : "Mr. Visa M. Shanmugam",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      }
    ],
    "2006": [
      {
        name: language === 'tamil' ? "முனைவர் கே. அரங்கசாமி" : "Munaivar K. Arangasamy",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. சி. அருமுகம்" : "Mr. C. Arumugam",
        field: language === 'tamil' ? "சிறந்த பொறியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Best Engineer and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "கே.கே.கே. சுகுமாரன்" : "K.K.K. Sugumaran",
        field: language === 'tamil' ? "ஆன்மீக மற்றும் கலாச்சார சேவைகள்" : "Spiritual and Cultural Services"
      },
      {
        name: language === 'tamil' ? "பி. கிருஷ்ணசாமி" : "P. Krishnasamy",
        field: language === 'tamil' ? "சிறந்த கொங்கு எழுத்தாளர் (சாகித்ய அகாடமி விருது)" : "Best Kogu Writer (Sagatya Academy Award)"
      },
      {
        name: language === 'tamil' ? "திரு. பி. கந்தசாமி" : "Mr. P. Kandhasamy",
        field: language === 'tamil' ? "சுற்றுச்சூழல் மற்றும் விழிப்புணர்வு சேவைகள்" : "Environmental and Awareness Services"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர். ராமசாமி" : "Mr. R. Ramasamy",
        field: language === 'tamil' ? "சுதந்திரப் போராட்ட வீரர்" : "Freedom Fighter"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ். ராஜேஷ்" : "Mr. S. Rajesh",
        field: language === 'tamil' ? "மென்பொருள் பொறியாளர்" : "Software Engineer"
      },
      {
        name: language === 'tamil' ? "பேராசிரியர் திரு. எஸ். குணசேகரன்" : "Professor Mr. S. Gunasekaran",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "டாக்டர் வி. ஆனந்த்" : "Dr. V. Aanadh",
        field: language === 'tamil' ? "சிறந்த மருத்துவர் (ENT)" : "Outstanding Doctor (ENT)"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஏ.கே. ராமசாமி" : "Dr. A.K. Ramasamy",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Educationalist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. ஆர். ராஜ்குமார்" : "Mr. R. Rajkumar",
        field: language === 'tamil' ? "கின்னஸ் சாதனை" : "Guinness Record"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ். சுசிதேரன்" : "Mr. S. Susidheran",
        field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் குறிப்பிடத்தக்க சமூக சேவை" : "Outstanding Industrialist and Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. என்.பி. வேலு" : "Mr. N.P. Velu",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      }
    ],
    "2005": [
      {
        name: language === 'tamil' ? "திரு. கே. அம்மையப்பன்" : "Mr. K. Ammaiappan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, கரூர்" : "Remarkable Social Service, Karur"
      },
      {
        name: language === 'tamil' ? "திரு. தேவத்தூர் என். நாச்சிமுத்து" : "Thiru. Devatthur N. Nachimuthu",
        field: language === 'tamil' ? "முன்னாள் எம்.எல்.ஏ., சிறந்த சமூக சேவை" : "Former M.L.A., Outstanding Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. என்.கே. சின்னசாமி" : "Mr. N.K. Chinnasamy",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர், நாமக்கல்" : "Outstanding Educationalist, Namakkal"
      },
      {
        name: language === 'tamil' ? "திரு. அரங்க துரைசாமி" : "Mr. Aranga Duraisamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, கர்நாடகா" : "Remarkable Social Service, Karnataka"
      },
      {
        name: language === 'tamil' ? "தலைவர் ஆர். நடேசன்" : "Chairman R. Natesan",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, திருச்செங்கோடு" : "Remarkable Social Service, Thiruchengodu"
      },
      {
        name: language === 'tamil' ? "திரு. டி.பி. சின்னசாமி" : "Mr. T.P. Chinnasamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, சேலம்" : "Remarkable Social Service, Salem"
      },
      {
        name: language === 'tamil' ? "டாக்டர் கே.எஸ். பழனிசாமி" : "Dr. K.S. Palanisamy",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர், ஈரோடு" : "Outstanding Educationalist, Erode"
      },
      {
        name: language === 'tamil' ? "பேராசிரியர் பி. சின்னசாமி" : "Professor P. Chinnasamy",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, ஈரோடு" : "Remarkable Social Service, Erode"
      },
      {
        name: language === 'tamil' ? "சிந்தனை கவிஞர் கவிதாசன்" : "Sinthanai Kavigar Kavithasan",
        field: language === 'tamil' ? "சிறந்த எழுத்தாளர், கோயம்புத்தூர்" : "Best Writer, Coimbatore"
      },
      {
        name: language === 'tamil' ? "டாக்டர் பி. யேகநாதன்" : "Dr. P. Yeganathan",
        field: language === 'tamil' ? "விஞ்ஞானி, ஈரோடு" : "Scientist, Erode"
      },
      {
        name: language === 'tamil' ? "அஞ்சல் பி. முத்து" : "Post P. Muthu",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை, கரூர்" : "Remarkable Social Service, Karur"
      },
      {
        name: language === 'tamil' ? "டாக்டர் ஆர். ராஜவேலு" : "Dr. R. Rajavelu",
        field: language === 'tamil' ? "சிறந்த மருத்துவர், திருச்செங்கோடு" : "Outstanding Doctor, Thiruchengodu"
      },
      {
        name: language === 'tamil' ? "திரு. பொன்னுசாமி கவுண்டர்" : "Mr. Ponnusamy Gounder",
        field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
      },
      {
        name: language === 'tamil' ? "திரு. இ. தங்கதுரை" : "Mr. E. Thangadurai",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர், கரூர்" : "Outstanding Educationalist, Karur"
      },
      {
        name: language === 'tamil' ? "திரு. எஸ்.கே. சுப்பிரமணியம்" : "Mr. S.K. Subramanium",
        field: language === 'tamil' ? "சிறந்த கல்வியாளர், கோயம்புத்தூர்" : "Outstanding Educationalist, Coimbatore"
      },
      {
        name: language === 'tamil' ? "செல்வி ஒய். பிரபா" : "Selvi Y. Prabha",
        field: language === 'tamil' ? "சதுரங்க சாம்பியன், ஈரோடு" : "Chess Champion, Erode"
      }
    ],
    "2004": [
  {
    name: language === 'tamil' ? "டாக்டர் எம்.ஏ. வேலுசாமி" : "Dr. M.A. Velusamy",
    field: language === 'tamil' ? "சிறந்த பொறியாளர் மற்றும் கொங்கு சமூக நலனுக்கு பெரும் பங்களிப்பாளர்" : "Outstanding Engineer and a Great Contributor to Kongu Society Welfare"
  },
  {
    name: language === 'tamil' ? "திரு. தேவத்தூர் என். நாச்சிமுத்து" : "Thiru. Devatthur N. Nachimuthu",
    field: language === 'tamil' ? "முன்னாள் எம்.எல்.ஏ., சிறந்த சமூக சேவை" : "Former M.L.A., Outstanding Social Service"
  },
  {
    name: language === 'tamil' ? "திரு. வி. ஈஸ்வரமூர்த்தி" : "Thiru. V. Eswaramurthy",
    field: language === 'tamil' ? "கல்வியாளர், தமிழ் அறிஞர் மற்றும் பல்வேறு தலைப்புகளில் நூல்களை எழுதியவர்" : "Educationalist, A Tamil Scholar and Authored Many Books on Various Topics"
  },
  {
    name: language === 'tamil' ? "திரு. யு.ஆர். சின்னுசாமி கவுண்டர்" : "Thiru. U.R. Chinnusamy Gounder",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர் மற்றும் கொங்கு சமூக சேவை" : "Outstanding Industrialist and Service to Kongu Society"
  },
  {
    name: language === 'tamil' ? "திரு. எம். குமாரசாமி" : "Thiru. M. Kumarasamy",
    field: language === 'tamil' ? "வாகன சொந்தக்காரர், கல்வியாளர்" : "Fleet Owner, Educationalist"
  },
  {
    name: language === 'tamil' ? "திரு. டாக்டர் வி. செல்லப்பன்" : "Thiru. Dr. V. Chellappan",
    field: language === 'tamil' ? "கொங்கு சமூக நலனுக்கு பெரும் பங்களிப்பாளர்" : "A Great Contributor to the Welfare of Kongu Society"
  },
  {
    name: language === 'tamil' ? "திரு. டி.எஸ். பழனிவேலு" : "Thiru. T.S. Palanivelu",
    field: language === 'tamil' ? "சிறந்த ஆசிரியர் மற்றும் கொங்கு சமூக நலனுக்கு பெரும் பங்களிப்பாளர்" : "An Outstanding Teacher and A Great Contributor to the Welfare of Kongu Society"
  },
  {
    name: language === 'tamil' ? "திரு. டி.கே. சுப்பிரமணியன்" : "Thiru. T.K. Subramanian",
    field: language === 'tamil' ? "சுயநலமற்ற மற்றும் அர்ப்பணிப்புடன் கொங்கு சமூக நலனுக்கு சேவை" : "Selfless and Dedicated Service to the Welfare of Kongu Society"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ்.பி. கோபாலகிருஷ்ணன்" : "Thiru. S.P. Gopalakrishnan",
    field: language === 'tamil' ? "மனித குலத்திற்கு சுயநலமற்ற சேவை" : "Selfless Service to Mankind"
  },
  {
    name: language === 'tamil' ? "திரு. ஏ. ராமசாமி" : "Thiru. A. Ramasamy",
    field: language === 'tamil' ? "சிறந்த கல்வியாளர், எஸ்.ஆர்.வி. பள்ளி" : "Outstanding Educationalist, SRV School"
  },
  {
    name: language === 'tamil' ? "திரு. கே.ஜி. பிரகதீஸ்குமார்" : "Thiru. K.G. Pragatheeskumar",
    field: language === 'tamil' ? "சிறந்த விவசாயி" : "An Outstanding Agriculturist"
  },
  {
    name: language === 'tamil' ? "டாக்டர் எஸ். தனபாக்கியம்" : "Dr. S. Dhanabakkiyam",
    field: language === 'tamil' ? "மகப்பேறு துறையில் பல விருதுகளைப் பெற்றவர்" : "Recipient of Many Awards in the Field of Maternity"
  },
  {
    name: language === 'tamil' ? "டாக்டர் எம்.என். பொன்னுசாமி" : "Dr. M.N. Ponnusamy",
    field: language === 'tamil' ? "சிறந்த பேராசிரியர்" : "An Outstanding Professor"
  },
  {
    name: language === 'tamil' ? "திரு. ஏ.பி. கந்தசாமி" : "Thiru. A.P. Kandasamy",
    field: language === 'tamil' ? "தமிழ் அறிஞர், சிறந்த விவசாயி மற்றும் கொங்கு சமூக சேவை" : "A Tamil Scholar, An Outstanding Agriculturist and Service to Kongu Society"
  },
  {
    name: language === 'tamil' ? "டாக்டர் சி. ராயப்பா" : "Dr. C. Rayappa",
    field: language === 'tamil' ? "சிறந்த ENT நிபுணர் மற்றும் மனித குலத்திற்கு சேவை" : "An Outstanding ENT Specialist and Service to Mankind"
  }
],
"2003": [
  {
    name: language === 'tamil' ? "திரு. நல்ல கோவிந்தசாமி" : "Thiru. Nalla Govindasamy",
    field: language === 'tamil' ? "சமூகத்திற்கு சிறந்த சேவை" : "Outstanding Service to Society"
  },
  {
    name: language === 'tamil' ? "திரு. கே. நல்லியப்பன்" : "Thiru. K. Nalliyappan",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. ஜே.பி. லியோ கணேஷ்" : "Thiru. J.P. Leo Ganesh",
    field: language === 'tamil' ? "சமூகத்திற்கு சிறந்த சேவை" : "Outstanding Service to Society"
  },
  {
    name: language === 'tamil' ? "திரு. \"தங்கமணி\" பி.எம். பழனிசாமி கவுண்டர்" : "Thiru. \"Thangamani\" P.M. Palanisamy Gounder",
    field: language === 'tamil' ? "சிறந்த சமூக சேவை" : "Outstanding Social Service"
  },
  {
    name: language === 'tamil' ? "டாக்டர் கே.வி. கலியப்பன்" : "Dr. K.V. Kaliyappan",
    field: language === 'tamil' ? "சிறந்த பேராசிரியர்/ஆராய்ச்சி அறிஞர்" : "Outstanding Professor/Research Scholar"
  },
  {
    name: language === 'tamil' ? "டாக்டர் ஆர். பாலசுப்பிரமணியன்" : "Dr. R. Balasubramanian",
    field: language === 'tamil' ? "சிறந்த பேராசிரியர்" : "Outstanding Professor"
  },
  {
    name: language === 'tamil' ? "டாக்டர் கே.ஆர். பழனிசாமி" : "Dr. K.R. Palanisamy",
    field: language === 'tamil' ? "சிறந்த மருத்துவர்" : "Outstanding Doctor"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ். நல்லசாமி" : "Thiru. S. Nallasamy",
    field: language === 'tamil' ? "சிறந்த விவசாயி" : "Outstanding Agriculturist"
  },
  {
    name: language === 'tamil' ? "திரு. எம். சிவப்பிரகாசம்" : "Thiru. M. Sivapragasam",
    field: language === 'tamil' ? "சிறந்த ஆசிரியருக்கான தேசிய விருது பெற்றவர்" : "Recipient of National Award for Outstanding Teacher"
  },
  {
    name: language === 'tamil' ? "திரு. ஆர். சைநாதன்" : "Thiru. R. Sainathan",
    field: language === 'tamil' ? "சிறந்த சமூக சேவை" : "Outstanding Social Service"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ். ஜெயவேலன்" : "Thiru. S. Jayavelan",
    field: language === 'tamil' ? "சமூக நலனுக்கு சிறந்த சேவை" : "Outstanding Service for Society Welfare"
  },
  {
    name: language === 'tamil' ? "திரு. கே. சிவலிங்கம்" : "Thiru. K. Sivalingam",
    field: language === 'tamil' ? "சிறந்த கல்வி சேவை" : "Outstanding Educational Service"
  },
  {
    name: language === 'tamil' ? "திரு. கே. சக்திவேல்" : "Thiru. K. Sakthivel",
    field: language === 'tamil' ? "சிறந்த கல்வி சேவை" : "Outstanding Educational Service"
  },
  {
    name: language === 'tamil' ? "திரு. கே. நடராஜன்" : "Thiru. K. Natarajan",
    field: language === 'tamil' ? "சிறந்த கல்வி சேவை" : "Outstanding Educational Service"
  },
  {
    name: language === 'tamil' ? "திரு. வி. அன்பழகன்" : "Thiru. V. Anbazhagan",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. வி. சுந்தரேசன்" : "Thiru. V. Sundaresan",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "திருமதி டாக்டர் உமா செல்வராஜ்" : "Tmt. Dr. Uma Selvaraj",
    field: language === 'tamil' ? "சிறந்த சமூக சேவை" : "Outstanding Social Service"
  },
  {
    name: language === 'tamil' ? "திருமதி டாக்டர் ஆர். சாந்தி" : "Tmt. Dr. R. Shanthi",
    field: language === 'tamil' ? "சிறந்த புவியியலாளர் மற்றும் விவசாய விஞ்ஞானி" : "Outstanding Geologist and Agricultural Scientist"
  }
],
"2002": [
  {
    name: language === 'tamil' ? "திருமதி பாரதி செங்கோட்டுவேல்" : "Tmt. Bharathi Sengottuvel",
    field: language === 'tamil' ? "சிறந்த கட்டிடக்கலைஞர்" : "Outstanding Architect"
  },
  {
    name: language === 'tamil' ? "திரு. கே. செல்லமுத்து" : "Thiru. K. Chellamuthu",
    field: language === 'tamil' ? "விவசாயிகள் நலனில் குறிப்பிடத்தக்க சேவை" : "Remarkable Service in Agriculturists Welfare"
  },
  {
    name: language === 'tamil' ? "அரிமா. திரு. கே. தனபாலன்" : "Arima. Thiru. K. Dhanabalan",
    field: language === 'tamil' ? "சிறந்த சமூக சேவை" : "Outstanding Social Service"
  },
  {
    name: language === 'tamil' ? "திரு. ஆர். கணேசன்" : "Thiru. R. Ganesan",
    field: language === 'tamil' ? "சிறந்த இளம் தொழிலதிபர்" : "Outstanding Young Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. கே. கிருஷ்ணமூர்த்தி" : "Thiru. K. Krishnamurthy",
    field: language === 'tamil' ? "சிறந்த ஆசிரியர்" : "Outstanding Teacher"
  },
  {
    name: language === 'tamil' ? "டாக்டர் எஸ். முத்து" : "Dr. S. Muthu",
    field: language === 'tamil' ? "தொழில்நுட்ப கல்வித் துறையில் சேவை" : "Service in the Field of Technical Education"
  },
  {
    name: language === 'tamil' ? "திரு. கே.பி. நடராஜன்" : "Thiru. K.P. Natarajan",
    field: language === 'tamil' ? "போக்குவரத்து வணிகத்தில் சிறந்த சேவை" : "Outstanding Service in Transport Business"
  },
  {
    name: language === 'tamil' ? "திரு. பி.சி. பழனிசாமி" : "Thiru. P.C. Palanisamy",
    field: language === 'tamil' ? "சிறந்த வழக்கறிஞர்" : "Outstanding Advocate"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ். பிரேம்துரை" : "Thiru. S. Premdurai",
    field: language === 'tamil' ? "சிறந்த ஏற்றுமதியாளர் மற்றும் தொழிலதிபர்" : "Outstanding Exporter and Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. எம். ராமசாமி" : "Thiru. M. Ramasamy",
    field: language === 'tamil' ? "விவசாயத் துறையில் சேவை" : "Service in Agricultural Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் கே. சண்முக சுந்தரம்" : "Dr. K. Shanmuga Sundaram",
    field: language === 'tamil' ? "மருத்துவத் துறையில் சேவை" : "Service in Medical Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் ஆர். வடிவேலன்" : "Dr. R. Vadivelan",
    field: language === 'tamil' ? "தமிழ் இலக்கிய வளர்ச்சிக்கு சேவை" : "Service to Tamil Literature Development"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ். வரதராஜன்" : "Thiru. S. Varadarajan",
    field: language === 'tamil' ? "சிறந்த விஞ்ஞானி" : "Outstanding Scientist"
  },
  {
    name: language === 'tamil' ? "திருமதி சி. விஜயலட்சுமி" : "Tmt. C. Vijayalakshmi",
    field: language === 'tamil' ? "கல்வித் துறையில் சிறந்த சேவை" : "Outstanding Service in Educational Field"
  }
],
"2001": [
  {
    name: language === 'tamil' ? "திரு. எஸ்.கே. செங்கோட கவுண்டர்" : "Thiru. S.K. Sengoda Gounder",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. கே. பொன்னுசாமி" : "Thiru. K. Ponnusamy",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. கே. அரங்கசாமி" : "Thiru. K. Arangasamy",
    field: language === 'tamil' ? "சிறந்த ஆராய்ச்சி அறிஞர்" : "Outstanding Research Scholar"
  },
  {
    name: language === 'tamil' ? "திரு. கே.ஆர். அப்பாவு" : "Thiru. K.R. Appavoo",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "டாக்டர் எஸ். அசோகன்" : "Dr. S. Ashokan",
    field: language === 'tamil' ? "சிறந்த மருத்துவர்" : "Outstanding Doctor"
  },
  {
    name: language === 'tamil' ? "டாக்டர் எம். கந்தசாமி" : "Dr. M. Kandasamy",
    field: language === 'tamil' ? "சிறந்த கல்வியாளர்" : "Outstanding Educationalist"
  },
  {
    name: language === 'tamil' ? "திரு. ஆர். செல்வராஜ்" : "Thiru. R. Selvaraj",
    field: language === 'tamil' ? "சிறந்த இளம் தொழிலதிபர்" : "Outstanding Young Industrialist"
  },
  {
    name: language === 'tamil' ? "திரு. ஆர். ராஜேந்திரன்" : "Thiru. R. Rajendran",
    field: language === 'tamil' ? "குறிப்பிடத்தக்க சமூக சேவை" : "Remarkable Social Service"
  },
  {
    name: language === 'tamil' ? "செல்வி. காஞ்சி கைலாசம்" : "Selvi. Kanchi Kailasam",
    field: language === 'tamil' ? "இளம் நீச்சல் சாம்பியன்" : "Young Swimming Champion"
  }
],
"2000": [
  {
    name: language === 'tamil' ? "திரு. சம்பத் குமார்" : "Thiru. Sampath Kumar",
    field: language === 'tamil' ? "கிரிக்கெட் வீரர்" : "Cricket Player"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ். நாகல்சாமி" : "Thiru. S. Nagalsamy",
    field: language === 'tamil' ? "ஐ.ஏ.எஸ். அதிகாரி" : "I.A.S. Officer"
  },
  {
    name: language === 'tamil' ? "செல்வி. ஜெயந்தி" : "Selvi. Jayanthi",
    field: language === 'tamil' ? "விவசாய பல்கலைக்கழகம்" : "Agricultural University"
  },
  {
    name: language === 'tamil' ? "திரு. கண்ணையன்" : "Thiru. Kannaiyan",
    field: language === 'tamil' ? "எச்.எச்.இ." : "H.H.E."
  },
  {
    name: language === 'tamil' ? "டாக்டர் மணி" : "Dr. Mani",
    field: language === 'tamil' ? "சிறந்த மருத்துவர்" : "Outstanding Doctor"
  },
  {
    name: language === 'tamil' ? "திரு. கே. பழனிசாமி" : "Thiru. K. Palanisamy",
    field: language === 'tamil' ? "சிறந்த தொழில் மேலாண்மை, கவின்கேர்" : "Outstanding Industrial Management, Kavincare"
  },
  {
    name: language === 'tamil' ? "திரு. கருப்பன்" : "Thiru. Karuppan",
    field: language === 'tamil' ? "சிறந்த ஆசிரியர்" : "Outstanding Teacher"
  },
  {
    name: language === 'tamil' ? "திரு. கே.கே. சோமசுந்தரம்" : "Thiru. K.K. Somasundaram",
    field: language === 'tamil' ? "ஐ.எஃப்.எஸ். அதிகாரி" : "I.F.S. Officer"
  },
  {
    name: language === 'tamil' ? "திரு. கலியப்பன்" : "Thiru. Kaliappan",
    field: language === 'tamil' ? "போக்குவரத்து வணிகத்தில் சாதனை - தென்பாண்டியன் போக்குவரத்து" : "Achievement in Transport Business - Thenpandian Transport"
  },
  {
    name: language === 'tamil' ? "திரு. ஞானசேகரன்" : "Thiru. Gnanasekaran",
    field: language === 'tamil' ? "எம்.எல்.ஏ." : "M.L.A."
  },
  {
    name: language === 'tamil' ? "திரு. சண்முகம்" : "Thiru. Shanmugam",
    field: language === 'tamil' ? "சாந்தி எலக்ட்ரிகல்ஸ்" : "Shanthi Electricals"
  },
  {
    name: language === 'tamil' ? "திரு. காசி" : "Thiru. Kasi",
    field: language === 'tamil' ? "இளம் தொழிலதிபர்" : "Young Industrialist"
  },
  {
    name: language === 'tamil' ? "டாக்டர் பாலசுப்பிரமணியம்" : "Dr. Balasubramaniyam",
    field: language === 'tamil' ? "உமா கிளினிக்" : "Uma Clinic"
  },
  {
    name: language === 'tamil' ? "திரு. முத்துராஜா" : "Thiru. Muthuraja",
    field: language === 'tamil' ? "ஜி.டி.பி. மார்பிள்ஸ்" : "G.T.P. Marbles"
  },
  {
    name: language === 'tamil' ? "திரு. கோபால்" : "Thiru. Gopal",
    field: language === 'tamil' ? "அவரது துறையில் சாதனை" : "Achievement in His Field"
  }
],
"1999": [
  {
    name: language === 'tamil' ? "திரு. கே. கந்தசாமி" : "Thiru. K. Kandasamy",
    field: language === 'tamil' ? "கல்வித் துறையில் முன்மாதிரி சேவை" : "Exemplary Service in Educational Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் சி. நாமச்சிவாயம்" : "Dr. C. Namachivayam",
    field: language === 'tamil' ? "கல்வித் துறையில் முன்மாதிரி சேவை" : "Exemplary Service in Educational Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் ஏ.எம். சச்சிதானந்தம்" : "Dr. A.M. Sachithanandam",
    field: language === 'tamil' ? "கல்வித் துறையில் முன்மாதிரி சேவை" : "Exemplary Service in Educational Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் ஜி. குமரவேலு" : "Dr. G. Kumaravelu",
    field: language === 'tamil' ? "தமிழ்நாடு அரசின் சிறந்த ஐ.எஃப்.எஸ். அதிகாரி" : "Outstanding I.F.S. Officer of Tamil Nadu Government"
  },
  {
    name: language === 'tamil' ? "திரு. கே.ஆர். மணி" : "Thiru. K.R. Mani",
    field: language === 'tamil' ? "சிறந்த ஏற்றுமதியாளர்" : "Outstanding Exporter"
  },
  {
    name: language === 'tamil' ? "திரு. எஸ்.வி. குமரகுருபரசாமி" : "Thiru. S.V. Kumaraguruparasamy",
    field: language === 'tamil' ? "சிறந்த ஏற்றுமதியாளர்" : "Outstanding Exporter"
  },
  {
    name: language === 'tamil' ? "டாக்டர் ராஜ் கவுண்டர்" : "Dr. Raj Gounder",
    field: language === 'tamil' ? "கணினி ஆராய்ச்சியில் நிபுணர்" : "Expert in Computer Research"
  },
  {
    name: language === 'tamil' ? "திரு. பொன்வண்ணன்" : "Thiru. Ponvannan",
    field: language === 'tamil' ? "திரைப்பட உலகிற்கு பங்களிப்பு" : "Contribution to Film World"
  },
  {
    name: language === 'tamil' ? "திரு. சி. முத்துசாமி" : "Thiru. C. Muthusamy",
    field: language === 'tamil' ? "சமூகத்திற்கு சிறந்த சேவை" : "Outstanding Service to Society"
  },
  {
    name: language === 'tamil' ? "திரு. ஏ. ஈஸ்வரன்" : "Thiru. A. Eswaran",
    field: language === 'tamil' ? "கல்வித் துறையில் முன்மாதிரி சேவை" : "Exemplary Service in Educational Field"
  },
  {
    name: language === 'tamil' ? "டாக்டர் வி. ராமசாமி" : "Dr. V. Ramasamy",
    field: language === 'tamil' ? "மருத்துவத் துறையில் மருத்துவராக சிறந்த சேவை" : "Outstanding Service as a Doctor in Medical Field"
  },
  {
    name: language === 'tamil' ? "திரு. வி. பரமசிவம்" : "Thiru. V. Paramasivam",
    field: language === 'tamil' ? "சிறந்த ஏற்றுமதியாளர்" : "Outstanding Exporter"
  },
  {
    name: language === 'tamil' ? "திரு. ஏ.கே. வெங்கிடசாமி" : "Thiru. A.K. Venkitasamy",
    field: language === 'tamil' ? "சிறந்த தொழிலதிபர்" : "Outstanding Industrialist"
  },
  {
    name: language === 'tamil' ? "செல்வி. வினோதினி வாசுதேவன்" : "Selvi. Vinodhini Vasudevan",
    field: language === 'tamil' ? "கல்வியில் சாதனை" : "Achievement in Education"
  }
]
  }
  // Get background color based on year (cycling through colors)
  const getColorClass = (year) => {
    const colorOptions = [
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
      'from-green-400 to-emerald-500',
    ];
    
    const index = years.indexOf(year) % colorOptions.length;
    return colorOptions[index];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 mt-44">
      <div className="container mx-auto px-4 py-16">
        {/* Title Section with elegant design */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Trophy className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 mt-12">
              {currentContent.title}
            </h2>
          </div>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-400 to-amber-500 mx-auto my-6 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl font-light">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Year Selection - Desktop */}
        <div className="hidden md:block mb-12">
          <div className="flex flex-wrap justify-center gap-3 px-4">
            {years.map((year, index) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 transform ${
                  selectedYear === year
                    ? `bg-gradient-to-r ${getColorClass(year)} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300 shadow-md'
                }`}
              >
                <div className="flex items-center">
                  {selectedYear === year ? (
                    <Clock className="w-5 h-5 mr-2 text-white" />
                  ) : (
                    <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                  )}
                  <span className="font-medium text-lg">{year}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Year Selection - Mobile */}
        <div className="md:hidden mb-8">
          <div className="relative max-w-xs mx-auto">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="appearance-none w-full p-4 pl-12 pr-10 rounded-xl border border-amber-200 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-md text-lg"
            >
              {years.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <div className="bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg p-2">
                <Calendar className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {achievementData[selectedYear] ? (
            achievementData[selectedYear].map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${getColorClass(selectedYear)} p-5`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-grow">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                        {achievement.name}
                      </h3>
                    </div>
                    <div className="flex-shrink-0 ml-2">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start">
                    <Medal className="w-6 h-6 text-amber-500 mt-0.5 mr-4 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold uppercase text-amber-600 mb-1">{currentContent.fieldLabel}</p>
                      <p className="text-gray-700 font-medium">
                        {achievement.field}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Card Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-amber-500 mr-2" />
                      <span className="text-sm text-amber-700 font-medium">{currentContent.awardRecipient}</span>
                    </div>
                    <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-medium">
                      {selectedYear}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Empty state when no data is available for the selected year
            <div className="col-span-1 sm:col-span-2 lg:col-span-3">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-100 p-10 text-center">
                <Trophy className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Add your achievement data</h3>
                <p className="text-gray-600">
                  Achievements for {selectedYear} will appear here after you add the data to the achievementData object.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Year Navigation Buttons - Mobile */}
        <div className="flex justify-center mt-10 md:hidden">
          <div className="flex space-x-6">
            <button
              onClick={() => {
                const currentIndex = years.indexOf(selectedYear);
                if (currentIndex > 0) {
                  setSelectedYear(years[currentIndex - 1]);
                }
              }}
              disabled={years.indexOf(selectedYear) === 0}
              className={`px-5 py-3 rounded-full flex items-center transition-all ${
                years.indexOf(selectedYear) === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 shadow-sm'
              }`}
            >
              <ChevronDown className="w-4 h-4 mr-2 transform rotate-90" />
              {currentContent.previous}
            </button>
            <button
              onClick={() => {
                const currentIndex = years.indexOf(selectedYear);
                if (currentIndex < years.length - 1) {
                  setSelectedYear(years[currentIndex + 1]);
                }
              }}
              disabled={years.indexOf(selectedYear) === years.length - 1}
              className={`px-5 py-3 rounded-full flex items-center transition-all ${
                years.indexOf(selectedYear) === years.length - 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 shadow-sm'
              }`}
            >
              {currentContent.next}
              <ChevronDown className="w-4 h-4 ml-2 transform -rotate-90" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sadhanayalargal;