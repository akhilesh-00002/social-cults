import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Home from './pages/Home';
import About from './pages/About';
import SocialMedia from './pages/services/SocialMedia';
import SEOservices from './pages/services/SEOservices';
import PPC from './pages/services/PPC';
import Webdev from './pages/services/Webdev';
import APPDEV from './pages/services/APPDEV'
import Branding from './pages/services/Branding';
import ORM from './pages/services/ORM';
import CRO from './pages/services/CRO'; import CRM from './pages/services/CRM';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Footer from './component/footer';
import LetsTalk from './component/lets';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Career from './pages/Career';
import NotFound from './pages/NotFound'; // 👈 Import 404 Page
import Seo from './pages/services/SEOservices';
import GetQuote from './component/GetQuote/GetQuote'
import PopUpForm from './component/PopUp';
import Testim from './component/Testim';


// Service Pages
// import SocialMediaMarketing from './pages/services/Smm';




function App() {
  return (
    <Router>
      {/* Header stays fixed on all pages */}
      <Header />

      {/* Page Content */}
      <main className="pt-[120px]">
        <Routes>
          {/* Main pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/social-media-marketing" element={<SocialMedia />} />
          <Route path="/seo-services" element={<SEOservices />} />
          <Route path="/ppc-advertising" element={<PPC />} />
          <Route path="/website-development" element={<Webdev />} />
          <Route path="/mobile-app-development" element={<APPDEV />} />
          <Route path="/branding" element={<Branding />} />
          <Route path="/orm" element={<ORM />} />
          <Route path="/cro" element={<CRO />} />
          <Route path="/crm/lms/erp" element={<CRM />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="/PopUp" element={<PopUpForm />} />
          <Route path="/testim" element={<Testim />} />
          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />

          {/* Service Pages */}
          {/* <Route path="/Social Media Marketing" element={<SocialMediaMarketing />} /> */}



        </Routes>
      </main>

      <LetsTalk />
      <Footer />
    </Router>
  );
}

export default App;
