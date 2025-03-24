import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { DashboardPage } from './pages/DashboardPage';
import { WomenPage } from './pages/WomenPage';
import { MenPage } from './pages/MenPage';
import { CategoryProducts } from './components/CategoryProducts'; // Componente genérico
import { ProductVisualizer } from './components/ProductVisualizer';
import { Footer } from './components/Footer';

export const MonarqRoutes = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
      <div className="w-full bg-black bg-opacity-90 shadow-md">
          <Navbar />
        </div>
        <div className="flex-grow overflow-auto mt-[80px] max-sm:mt-[20%] mb-[64px] flex items-center justify-center">


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
        <div className="fixed bottom-0 left-0 w-full z-50">
          <Footer />
        </div>
      </div>
    </Router>
  );
};




