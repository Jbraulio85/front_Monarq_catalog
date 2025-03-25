import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashboardPage } from './pages/DashboardPage';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';
import { CategoryProducts } from './components/CategoryProducts';
import { ProductVisualizer } from './components/ProductVisualizer';
import { Footer } from './components/Footer';

export const MonarqRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="w-full bg-[#090f15] shadow-md fixed top-0 left-0 z-50 h-[70px]">
          <Navbar />
        </div>
        <div className="flex-grow flex items-center justify-center pt-[80px]">
          <Routes>
            <Route path="/*" element={<DashboardPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/men/shoes" element={<CategoryProducts category="MEN_SHOES" />} />
            <Route path="/women/shoes" element={<CategoryProducts category="WOMEN_SHOES" />} />
            <Route path="/men/accessories" element={<CategoryProducts category="MEN_ACCESSORIES" />} />
            <Route path="/women/accessories" element={<CategoryProducts category="WOMEN_ACCESSORIES" />} />
            <Route path="/men/tshirts" element={<CategoryProducts category="MEN_TSHIRTS" />} />
            <Route path="/product/:pid" element={<ProductVisualizer />} />
          </Routes>
        </div>
        <div className="w-full mt-auto">
          <Footer />
        </div>
      </div>
    </Router>
  );
};








