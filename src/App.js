import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Album from './pages/Album';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUS';
import Portfolio from './pages/Portfolio';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import Terms from './pages/Terms';
import Wasfat from './pages/wasfat';

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/album" element={<Album />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/return" element={<ReturnPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/services" element={<Wasfat />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
