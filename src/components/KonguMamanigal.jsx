import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award, ChevronDown, Star, Calendar, Users, Medal, Crown } from 'lucide-react';

const KonguMamanigal = () => {
  const { language } = useLanguage();
  const [activeYear, setActiveYear] = useState('2010');

  // Bilingual content
  const content = {
    tamil: {
      title: "கொங்கு மாமணிகள்",
      subtitle: "நமது சமூகத்தின் உயர்ந்த பெருமைகளுக்கு வழங்கப்படும் சிறப்பு விருது",
      awardTitle: "விருது பெற்றவர்",
      aboutTitle: "குறிப்பு",
      allYears: "அனைத்து ஆண்டுகள்",
      viewAwardees: "விருது பெற்றவர்களைக் காண"
    },
    english: {
      title: "KONGU MAMANIGAL",
      subtitle: "Special award honoring the highest achievers of our community",
      awardTitle: "Awardee",
      aboutTitle: "About",
      allYears: "All Years",
      viewAwardees: "View Awardees"
    }
  };

  // Current content based on language
  const currentContent = content[language];

  // Bilingual award data - placeholder
  const awardees = [
    {
      year: "2010",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. அட்லஸ் எம். நாச்சிமுத்து" : "Mr. Atlas M. Naachimuthu",
          description: language === 'tamil' 
            ? "அரிய குணங்களைக் கொண்ட மனிதர் - கடின உழைப்பு, அன்பு, சமூகத்திற்கும் நாட்டிற்கும் சிறந்த சேவை. 1975 ஆம் ஆண்டில், அவர் ஒரு ஜவுளித் தொழிற்சாலையைத் தொடங்கினார். இது முன்னணி ஏற்றுமதி தொழிற்சாலைகளில் ஒன்றாகும். மனித குலத்திற்கு சுயநலமற்ற மற்றும் குறிப்பிடத்தக்க சேவை." 
            : "A man of rare qualities – hardwork, love, exemplary service to the society and country. In 1975, he started a textile Industry. This is one of the leading export industry. Selfless and remarkable service to mankind."
        },
        {
          name: language === 'tamil' ? "திரு. கே.ஏ. செங்கோட்டுவேல்" : "Mr. K.A. Sengottuvel",
          description: language === 'tamil' 
            ? "சிறந்த அரசியல்வாதி. விவசாயிகளுக்கான சிறப்பான மற்றும் அர்ப்பணிப்புடன் கூடிய சேவை. மக்கள் நலனுக்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை." 
            : "A great Politician. Meritorious and dedicated service for the farmers. Dedicated and selfless service to the welfare of the people."
        }
      ]
    },
    {
      year: "2009",
      recipients: [
        {
          name: language === 'tamil' ? "டாக்டர் வி.எஸ். நடராஜன்" : "Dr. V.S. Natarajan",
          description: language === 'tamil' 
            ? "மூத்த குடிமக்களுக்கு உதவும் கைகளைக் கொண்ட மனிதர். தனது துறையில் பல புத்தகங்களின் ஆசிரியர். தனது சாதனைகளுக்காக பல விருதுகளைப் பெற்றவர். சமூகத்திற்கு ஆன்மீக மற்றும் சமூக சேவைகளுக்காக அறியப்படுபவர்." 
            : "A man with a Helping hand for Senior Citizens. Author of many books in his field. Receipient of many awards for his achievements. Known for his spiritual and Social services to the Society."
        },
        {
          name: language === 'tamil' ? "சொல்லார் உழவன் திரு. கே. செல்லமுத்து" : "Sollar uzhavan Mr. K.sellamuthu",
          description: language === 'tamil' 
            ? "விவசாயிகளின் நலன், மேம்பாட்டிற்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை. விவசாயிகளின் நலனுக்கு பெரிதும் பங்களித்தவர்." 
            : "Dedicated and selfless service to the welfare, upliftment of farmers. contributed a lot to the welfare of Farmers."
        },
        {
          name: language === 'tamil' ? "பத்மஸ்ரீ ஏ. சக்திவேல்" : "Badmasree A. Sakthivel",
          description: language === 'tamil' 
            ? "NIFT TEA மற்றும் பள்ளி போன்ற பல நிறுவனங்களின் நிறுவனர். தன்னுடைய உண்மை மற்றும் கடின உழைப்பு மூலம் பல சாதனைகளை நிகழ்த்தினார். NIFT-க்கு பெரிதும் பங்களித்தவர்." 
            : "Founder of many institutes like NIFT TEA and School. He achieved a many things through his sincerity and hardwork. contributed a lot to NIFT."
        }
      ]
    },
    {
      year: "2008",
      recipients: [
        {
          name: language === 'tamil' ? "தணிக்கையாளர் பாலசுப்பிரமணியம்" : "Auditor Balasubramaniam",
          description: language === 'tamil' 
            ? "சிறந்த பேச்சாளர், தமிழ் அறிஞர் மற்றும் தணிக்கையாளர். கொங்கு சமூகத்தின் நலன், மேம்பாடு மற்றும் ஒற்றுமைக்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை." 
            : "A great orator, Tamil Scholar and Auditor.Dedicated and selfless service to the welfare, upliftment and unity of kongu society."
        },
        {
          name: language === 'tamil' ? "டாக்டர் என்.எம். வீரையன்" : "Dr. N.M Veerayan",
          description: language === 'tamil' 
            ? "அர்ப்பணிப்புடன் கூடிய முயற்சிகள் மற்றும் கடின உழைப்பால் உயர் பதவிகளுக்கு உயர்ந்தவர். சமூக நலனுக்கு பெரிதும் பங்களித்தவர். சமூகத்திற்கும் நாட்டிற்கும் அவர் செய்த சிறந்த சேவைக்காக பல பட்டங்கள் மற்றும் விருதுகளைப் பெற்றவர்." 
            : "Raised to top positions by his dedicated efforts and hard work. contributed a lot to the welfare ofSociety. Receipient of many titles and awards for his exemplary service to the society and country."
        },
        {
          name: language === 'tamil' ? "திரு. பி. செங்கோடன்" : "Mr.P.Sengodan",
          description: language === 'tamil' 
            ? "கொங்கு சமூகத்தின் நலன், மேம்பாடு மற்றும் ஒற்றுமைக்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை. கடின உழைப்பு, உண்மை மற்றும் மனிதநேயத்திற்காக அறியப்படுபவர். மனித குலத்திற்கு சுயநலமற்ற மற்றும் குறிப்பிடத்தக்க சேவை." 
            : "Dedicated and selfless service to the welfare, upliftment and unity of kongu society. He is known for his hardwork, Sincerity and humanity. Selfless and remarkable service to mankind."
        }
      ]
    },
    {
      year: "2007",
      recipients: [
        {
          name: language === 'tamil' ? "புலவர். எஸ். ராசு" : "Pulavar. S. Raasu",
          description: language === 'tamil' 
            ? "சிறந்த அறிஞர். தனது ஆராய்ச்சி மூலம் தீரன் சின்னமலையின் பிறந்த தேதி மற்றும் நினைவு தேதியைக் கண்டறிந்தவர். தனது ஆராய்ச்சிக்காக பல பட்டங்கள் மற்றும் விருதுகளைப் பெற்றவர்." 
            : "He is a great Scholar.Founded Dheeran chinnalamai's birth date and memorial date through his research.Receipient of many titles and awards for his research."
        },
        {
          name: language === 'tamil' ? "திரு. பெஸ்ட் எஸ். ராமசாமி" : "Mr.Best S.Ramasamy",
          description: language === 'tamil' 
            ? "நாட்டின் முன்னணி ஜவுளி ஏற்றுமதியாளர். ஜவுளி வணிகம் மற்றும் பிற துறைகளில் தனது சாதனைகளுக்காகவும், நாட்டிற்கு செய்த சிறப்பான சேவைக்காகவும் பல விருதுகளைப் பெற்றவர்." 
            : "Leading exporter of textile in the country.Receipient of many awards for his achievements in textile business and other fields and for his meritorious service to the country."
        },
        {
          name: language === 'tamil' ? "பத்மஸ்ரீ டாக்டர் கே.ஆர். பழனிசாமி" : "Badmasree Dr. K.R. Palanisamy",
          description: language === 'tamil' 
            ? "சமூகத்திற்கும் நாட்டிற்கும் அவர் செய்த சிறந்த சேவைக்காக பல பட்டங்கள் மற்றும் விருதுகளைப் பெற்றவர். குறிப்பிடத்தக்க மற்றும் அரிய சாதனைகள் மற்றும் மைல்கல் அறுவைசிகிச்சைகள் மூலம் கொங்கு சமூகத்திற்கும் நாட்டிற்கும் புகழ் சேர்த்தவர்." 
            : "Receipient of many titles and awards for his exemplary service to the society and country. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries."
        }
      ]
    },
    {
      year: "2006",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. நல்ல கோவிந்தசாமி" : "Mr. Nalla Govindasamy",
          description: language === 'tamil' 
            ? "சிறந்த சேவை மற்றும் கடின உழைப்பிற்காகவும், பிற துறைகளுக்காகவும், நாட்டிற்கு செய்த சிறப்பான சேவைக்காகவும் பல விருதுகளைப் பெற்றவர்." 
            : "Receipient of many awards for his best service and hardwork and other fields and for his meritorious service to the country."
        },
        {
          name: language === 'tamil' ? "சக்திமசாலா திரு. பி.சி. துரைசாமி" : "Sakthimasala Mr. P.C.Duraisamy",
          description: language === 'tamil' 
            ? "அவரது தயாரிப்புகளான சக்தி மசாலா மற்றும் சக்தி ஊறுகாய் உலகம் முழுவதும் பிரபலமானவை. நாட்டின் முன்னணி மசாலா ஏற்றுமதியாளர். வணிகம் மற்றும் பிற துறைகளில் தனது சாதனைகளுக்காகவும், நாட்டிற்கு செய்த சிறப்பான சேவைக்காகவும் பல விருதுகளைப் பெற்றவர்." 
            : "His products Sakthi masala and sakthi Pickles are famous world wide.Leading exporter of masala in the country.Receipient of many awards for his achievements in business and other fields and for his meritorious service to the country."
        },
        {
          name: language === 'tamil' ? "திரு. வி.கே. தங்கவேல்" : "Mr. V.K. Thangavel",
          description: language === 'tamil' 
            ? "உண்மை மற்றும் கடின உழைப்பிற்காக அறியப்படுபவர். கரூரில் ஜவுளி வணிகத்தின் மேம்பாட்டில் முக்கிய பங்கு வகித்தார். சமூக மற்றும் ஆன்மீக சேவைகளுக்கு பெரிதும் பங்களித்தவர். அனைவருக்கும் சிறந்த உதாரணம்." 
            : "He is known for his sincerity and hardwork.He played key role in upliftment of textile buisness in Karur.He contributed a lot to the social and spritual services.He is a best example to everone."
        }
      ]
    },
    {
      year: "2005",
      recipients: [
        {
          name: language === 'tamil' ? "என்.எஸ்.ஐ.டி திரு. எம். முருகேசன்" : "NSIT Mr. M.Murugesan",
          description: language === 'tamil' 
            ? "எப்போதும் உதவும் கைகளுடன் இருக்கும் மனிதர்; சமூகத்திற்கும் நாட்டிற்கும் அவர் செய்த சிறந்த சேவைக்காக பல பட்டங்கள் மற்றும் விருதுகளைப் பெற்றவர். மனித குலத்திற்கு சுயநலமற்ற மற்றும் குறிப்பிடத்தக்க சேவை." 
            : "A man always with helping hand; Receipient of many titles and awards for his exemplary service to the society and country. Selfless and remarkable service to mankind."
        },
        {
          name: language === 'tamil' ? "திரு. கே. பழனியப்பன்" : "Mr. K.Palaniappan",
          description: language === 'tamil' 
            ? "கொங்கு சமூகத்தின் நலன், மேம்பாடு மற்றும் ஒற்றுமைக்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை." 
            : "Dedicated and selfless service to the welfare, upliftment and unity of kongu society."
        },
        {
          name: language === 'tamil' ? "திரு. சி.கே. ராமசாமி" : "MR.C.K.Ramasamy",
          description: language === 'tamil' 
            ? "அர்ப்பணிப்புடன் கூடிய முயற்சிகள் மற்றும் கடின உழைப்பால் உயர் பதவிகளுக்கு உயர்ந்தவர்; கொங்கு சமூகத்தின் நலனுக்கு பெரிதும் பங்களித்தவர்." 
            : "Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society."
        }
      ]
    },
    {
      year: "2004",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. பி.கே. கிருஷ்ணராஜ் வானவராயர்" : "Thiru. B.K. Krishnaraj Vanavarayar.",
          description: language === 'tamil' 
            ? "அரிய குணங்களைக் கொண்ட மனிதர் - எளிமை, கடின உழைப்பு, சமூகத்திற்கும் நாட்டிற்கும் சிறந்த சேவை; கலாச்சாரத் துறையில் நாட்டின் தூதுவர்; பாரத வித்யா பவன் உட்பட பல்வேறு அமைப்புகளின் தலைவர், நாடு பொதுவாகவும் கொங்கு சமூகம் குறிப்பாகவும் அவரது சாதனை மற்றும் மனித குலத்திற்கான பங்களிப்புகளில் மிகவும் பெருமைப்படுகிறது." 
            : "A man of rare qualities – simplicity, hardwork, exemplary service to the society and country; An ambassador of the country in the field of culture; President of various organizations including Bharath Vidhya Bhavan, The country in general and the Kongusociety in particular is very proud of hisachievement and contributions to the mankind."
        },
        {
          name: language === 'tamil' ? "திரு. சிலம்பொலின் எஸ். செல்லப்பனார்" : "Thiru. Silambolin S. Sellappanar",
          description: language === 'tamil' 
            ? "சிறந்த தமிழ் அறிஞர், சிறந்த பேச்சாளர்களில் ஒருவர், எப்போதும் உதவும் கைகளுடன் இருக்கும் மனிதர்; நூற்றுக்கணக்கான கொங்கு நபர்களின் மேம்பாட்டிற்காக மிகவும் கடினமாக உழைத்தவர்; தமிழ் மொழிக்கான சிறப்பான மற்றும் அர்ப்பணிப்புடன் கூடிய சேவை; கொங்கு சமூகத்தின் நலனுக்கு பெரிதும் பங்களித்தவர்; தமிழ் துறையில் அவரது பல்வேறு சாதனைகளுக்காக பல விருதுகள் மற்றும் பட்டங்களைப் பெற்றவர்." 
            : "A great Tamil Scholar, one of the best orators, a man always with helping hand; worked very hard for the upliftment of hundreds of Kongu persons; Meritorious and dedicated service for Tamil language; contributed a lot for the welfare of Kongu society; Recipient of many awards and titles for his various achievement in the field of Tamil."
        },
        {
          name: language === 'tamil' ? "டாக்டர் சி. பழனிவேலு" : "Dr. C. Palanivelu",
          description: language === 'tamil' 
            ? "நாட்டின் முன்னணி லேப்ரோஸ்கோபிக் அறுவை சிகிச்சை நிபுணர். மருத்துவத் துறையில் பல மதிப்புமிக்க விருதுகளைப் பெற்றவர். தனது துறையில் பல புத்தகங்களின் ஆசிரியர். குறிப்பிடத்தக்க மற்றும் அரிய சாதனைகள் மற்றும் மைல்கல் அறுவைசிகிச்சைகள் மூலம் கொங்கு சமூகத்திற்கும் நாட்டிற்கும் புகழ் சேர்த்தவர்; மிக இளம் வயதிலேயே தனது துறையில் நிபுணராக மாறியவர்." 
            : "Leading laproscopic surgeon in the country. Receipient of many prestigious awards in the medical field. Author of many books in his field. Has brought laurels to the Kongu Society and the country by his remarkable and rare achievements and milestone surgeries; Has become an expect and authority in the field at a very young age itself."
        }
      ]
    },
    {
      year: "2003",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. டி.ஆர். கார்த்திகேயன் ஐ.பி.எஸ். (ஓய்வு)" : "Thiru. D.R. Karthikeyan I.P.S.(Retd.,)",
          description: language === 'tamil' 
            ? "காவல்துறையில் சிறப்பான மற்றும் சிறந்த சேவை, ஓய்வு பெற்ற வாழ்க்கையில் விவசாயிகளின் நலனுக்காக அர்ப்பணிப்புடன் கூடிய சேவை. மனித குலத்திற்கு சுயநலமற்ற மற்றும் குறிப்பிடத்தக்க சேவை." 
            : "Exemplary and Meritorious Service in PoliceDepartment, Dedicated service to the cause of agriculturists in his retired life. Selfless and remarkable service to mankind."
        },
        {
          name: language === 'tamil' ? "திரு. ஆர். தேவராஜன்" : "Thiru. R. Devarajan",
          description: language === 'tamil' 
            ? "கொங்கு சமூகத்தின் நலன், மேம்பாடு மற்றும் ஒற்றுமைக்காக அர்ப்பணிப்புடனும் சுயநலமற்றும் செய்த சேவை." 
            : "Dedicated and selfless service to the welfare, upliftment and unity of kongu society"
        },
        {
          name: language === 'tamil' ? "திரு. ஜி.ஆர். சுந்தரவடிவேல்" : "Thiru. G.R. Sundaravadivel",
          description: language === 'tamil' 
            ? "வங்கித் துறையில் சிறப்பான சேவை மற்றும் சிறந்த அதிகாரி; அர்ப்பணிப்புடன் கூடிய முயற்சிகள் மற்றும் கடின உழைப்பால் உயர் பதவிகளுக்கு உயர்ந்தவர்; கொங்கு சமூகத்தின் நலனுக்கு பெரிதும் பங்களித்தவர்." 
            : "Meritorious service and an outstandin officer in the Banking Sector: Raised to top positions by his dedicated efforts and hard work: contributed a lot to the welfare of Kongu Society."
        }
      ]
    },
    {
      year: "2002",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. எஸ்.வி. பாலசுப்பிரமணியம்" : "Thiru.S.V. Balasubramaniam",
          description: language === 'tamil' 
            ? "பல்வேறு துறைகளில் அவரது சிறந்த சாதனைகள் மூலம் சமூகத்திற்கும் நாட்டிற்கும் புகழ் சேர்த்தவர், நாட்டிற்கான அவரது பெரும் பங்களிப்புகள் மற்றும் பல்வேறு துறைகளில் வெற்றி காரணமாக கொங்கு சமூகத்தில் மிகவும் முக்கியமான மற்றும் பிரபலமான ஆளுமை." 
            : "Brought laurels to the society and the country by his outstanding achievements in various fields, Most Prominent and Popular Personality in Kongu Society because of his great contributions to the country and success in various fields."
        },
        {
          name: language === 'tamil' ? "திரு. ஆர். காந்தி" : "Thiru. R. Gandhi",
          description: language === 'tamil' 
            ? "சிறந்த பேச்சாளர், தமிழ் அறிஞர், பிரபல மூத்த வழக்கறிஞர், பல்வேறு சமூக, தமிழ் மற்றும் கலாச்சார மன்றங்களின் தலைவர், நீதிக்கான சிறந்த போராளி, முக்கியமாக சென்னையில் கொங்கு சங்கத்தின் வளர்ச்சிக்கு பெரும் காரணம்." 
            : "A great orator, Tamil Scholar famous senior Advocate, President of various social, Tamil and cultural forums,great fighter for justice, Above all mainly responsible for the growth of Kongu Sangam in Chennai."
        }
      ]
    },
    {
      year: "2001",
      recipients: [
        {
          name: language === 'tamil' ? "திரு. கே.எம். செண்ணியப்பன்" : "Thiru. K.M. Chenniyappan",
          description: language === 'tamil' 
            ? "கொங்கு நண்பர்கள் சங்கத்தின் முன்னாள் செயலாளர்; நீண்ட காலமாக இந்தப் பதவியை வகித்து, சங்கத்தின் வளர்ச்சிக்கு உறுதுணையாக இருந்தார்." 
            : "Former Secretary of Kongu Nanbargal Sangam: Held the post for a long period and was instrumental for the growth of the Association."
        },
        {
          name: language === 'tamil' ? "டாக்டர் பழனி. ஜி. பெரியசாமி" : "Dr.Palani. G.Periasamy",
          description: language === 'tamil' 
            ? "சமூகத்திற்கும் நாட்டிற்கும் அவர் செய்த சிறந்த சேவைக்காக பல பட்டங்கள் மற்றும் விருதுகளைப் பெற்றவர்." 
            : "Receipient of many titles and awards for his exemplary service to the society and country."
        },
        {
          name: language === 'tamil' ? "திரு.ஜெம். ஆர். வீரமணி" : "Thiru.Gem. R. Veeramani",
          description: language === 'tamil' 
            ? "நாட்டின் முன்னணி கிரானைட் ஏற்றுமதியாளர். கிரானைட் வணிகம் மற்றும் பிற துறைகளில் தனது சாதனைகளுக்காகவும், நாட்டிற்கு செய்த சிறப்பான சேவைக்காகவும் பல விருதுகளைப் பெற்றவர்." 
            : "Leading exporter of granites in the country.Receipient of many awards for his achievements in granite business and other fields and for his meritorious service to the country."
        }
              ]
            },
          ];
        
  // Get available years for dropdown
  const years = awardees.map(item => item.year) || ['2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001'];
        
  // Get color class for gradient based on year
  const getGradientClass = (yearVal) => {
    const index = years.indexOf(yearVal);
    const gradientClasses = [
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
      'from-teal-500 to-cyan-600',
    ];
    return gradientClasses[index % gradientClasses.length];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-100 mt-44">
      <div className="container mx-auto px-4 py-16">
        {/* Header Section with elegant design */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 mt-12">
  {currentContent.title}
</h1>
          </div>
          <div className="h-1 w-40 bg-gradient-to-r from-emerald-400 to-amber-500 mx-auto my-6 rounded-full"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg md:text-xl font-light">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Year Selection - Mobile */}
        <div className="md:hidden mb-8">
          <div className="relative max-w-xs mx-auto">
            <select
              value={activeYear}
              onChange={(e) => setActiveYear(e.target.value)}
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

        {/* Year Selection - Desktop */}
        <div className="hidden md:block mb-12">
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-3 rounded-xl transition-all duration-300 transform ${
                  activeYear === year
                    ? `bg-gradient-to-r ${getGradientClass(year)} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 border border-amber-200 hover:bg-amber-50 hover:border-amber-300 shadow-md'
                }`}
              >
                <div className="flex items-center">
                  {activeYear === year ? (
                    <Star className="w-5 h-5 mr-2 text-white" />
                  ) : (
                    <Calendar className="w-5 h-5 mr-2 text-amber-500" />
                  )}
                  <span className="font-medium text-lg">{year}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Award Cards Container */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {/* Card placeholders or actual data if available */}
            {awardees.length > 0 ? (
              awardees
                .filter((item) => item.year === activeYear)
                .map((yearGroup, groupIndex) => (
                  <div key={groupIndex} className="space-y-8">
                    {yearGroup.recipients.map((recipient, rIndex) => (
                      <div 
                        key={rIndex} 
                        className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                      >
                        <div className={`bg-gradient-to-r ${getGradientClass(yearGroup.year)} px-6 py-5 flex items-center`}>
                          <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold text-white">
                              {recipient.name}
                            </h3>
                          </div>
                          <div className="flex-shrink-0">
                            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <Award className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                            <div className="flex-shrink-0 sm:mt-1">
                              <Medal className="w-8 h-8 text-amber-500" />
                            </div>
                            <div>
                              <h4 className="text-sm uppercase text-amber-700 font-semibold mb-2">
                                {currentContent.aboutTitle}
                              </h4>
                              <p className="text-gray-700 leading-relaxed">
                                {recipient.description}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-6 py-4 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-amber-100 flex justify-between items-center">
                          <div className="flex items-center">
                            <Users className="w-5 h-5 text-amber-500 mr-2" />
                            <span className="text-sm text-amber-700 font-medium">{currentContent.awardTitle}</span>
                          </div>
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-white text-xs font-medium">
                            {yearGroup.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
            ) : (
              // Placeholder Card when no data is available
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-amber-100">
                <div className={`bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5 flex items-center`}>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Award Recipients
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-10 text-center">
                  <p className="text-amber-700 text-lg">
                    Add your awardees data to display the recipients for each year
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KonguMamanigal;