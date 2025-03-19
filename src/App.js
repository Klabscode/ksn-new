import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeaderLayout from "./components/navbar";
import HomePage from "./pages/homepage";
import HistoryPage from "./pages/history";
import MagazinePage from './pages/Magazine';
import Footer from './components/footer';
import MajorActivities from './pages/services';
import ContactPage from './pages/Contactus';
import GalleryPage from './pages/gallery';
import { LanguageProvider } from './contexts/LanguageContext';
import ScrollToTopButton from './components/ScrollToTopButton'; // Keep this for the button
import ScrollToTop from './components/ScrollToTop'; // Add this for route changes
import OurHistory from './components/ourhistory';
import KonguMamanigal from './components/KonguMamanigal';
import Sadhanayalargal from './components/Sadhanayalargal';

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div>
          <ScrollToTop /> {/* This will handle automatic scrolling on route changes */}
          <HeaderLayout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/history" element={<OurHistory />} />
            <Route path="/magazine" element={<MagazinePage/>} />
            <Route path="/activities" element={<MajorActivities/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/gallery" element={<GalleryPage/>} />
            <Route path="/kongu-mamanigal" element={<KonguMamanigal/>} />
            <Route path="/sadhanayalargal" element={<Sadhanayalargal/>} />
          </Routes>
          <ScrollToTopButton /> {/* Keep this for the manual scroll button */}
          <Footer/>
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;