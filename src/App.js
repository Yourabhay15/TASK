import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Uncomment if using Bootstrap Icons

const Home = React.lazy(() => import('./components/Home'));
const Services = React.lazy(() => import('./components/Services'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <Router>
      <Navbar />
      <React.Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </React.Suspense>
      <Footer />
    </Router>
  );
}

export default App;
