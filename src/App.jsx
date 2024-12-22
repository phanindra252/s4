import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Kitchen from "./pages/Kitchen";
import Bathroom from "./pages/Bathroom";
import Portfolio1 from "./pages/Portfolio-1";
import Portfolio2 from "./pages/Portfolio-2";
import Portfolio3 from "./pages/Portfolio-3";
import Portfolio4 from "./pages/Portfolio-4";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/ourservices" element={<OurServices />} />
            <Route path="/kitchen" element={<Kitchen />} />
            <Route path="/bathroom" element={<Bathroom />} />
            <Route path="/portfolio-1" element={<Portfolio1 />} />
            <Route path="/portfolio-2" element={<Portfolio2 />} />
            <Route path="/portfolio-3" element={<Portfolio3 />} />
            <Route path="/portfolio-4" element={<Portfolio4 />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
