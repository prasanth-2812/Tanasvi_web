import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Faq from './pages/Faq.jsx';
import Service from './pages/Service.jsx';
import Project from './pages/Project.jsx';
import Team from './pages/Team.jsx';
import Pricing from './pages/Pricing.jsx';
import Career from './pages/Career.jsx';
import NotFound from './pages/NotFound.jsx';

// Project Detail Components (Moved to pages/project)
import HRM from './pages/Hrm.jsx';
import Shipping from './pages/Shipping.jsx';
import Inventory from './pages/Inventory.jsx';
import HomeAutomation from './pages/HomeAutomation.jsx';
import AIModels from './pages/AIModels.jsx';
import LMS from './pages/Lms.jsx';
import Crm from './pages/Crm.jsx';

// Services
import DatabaseSecurity from './pages/DatabaseSecurity.jsx';

function App() {
  return (
    <>
      <Helmet>
        <title>Tanasvi Technologies - Professional Web Solutions</title>
        <meta name="description" content="Tanasvi offers professional web development and business solutions." />
        <meta name="keywords" content="Tanasvi, React, Web Development, Services, Portfolio, Business, SEO" />
        <meta name="author" content="Tanasvi" />
        <link rel="canonical" href="https://www.tanasvi.com/" />
        <meta property="og:title" content="Tanasvi - Professional Web Solutions" />
        <meta property="og:description" content="Tanasvi offers professional web development and business solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tanasvi.com/" />
        <meta property="og:image" content="/img/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tanasvi - Professional Web Solutions" />
        <meta name="twitter:description" content="Tanasvi offers professional web development and business solutions." />
        <meta name="twitter:image" content="/img/logo.jpg" />
      </Helmet>
      <div className="mouse-cursor cursor-outer"></div>
      <div className="mouse-cursor cursor-inner"></div>
      <Router>
        <Header />
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/service" element={<Service />} />
            <Route path="/project" element={<Project />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/career" element={<Career />} />
            {/* ✅ Project Detail Routes */}
            <Route path="/project/hrm" element={<HRM />} />
            <Route path="/project/shipping" element={<Shipping />} />
            <Route path="/project/inventory" element={<Inventory />} />
            <Route path="/project/home-automation" element={<HomeAutomation />} />
            <Route path="/project/ai-models" element={<AIModels />} />
            <Route path="/project/Lms" element={<LMS />} />
            <Route path="/project/Crm" element={<Crm />} />
            {/* Services routes*/}
            <Route path="/service/databaseSecurity" element={<DatabaseSecurity />} />
            {/* 404 Fallback */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
