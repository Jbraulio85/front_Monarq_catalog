/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WellcomeScreen } from "./components/WellcomeScreen";
import { MonarqRoutes } from "./Monarq.Routes";

const INACTIVITY_TIME = 10 * 60 * 1000;

export const App = () => {
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();

    if (!lastVisit || now - lastVisit > INACTIVITY_TIME) {
      const timer = setTimeout(() => {
        setShowRoutes(true);
        localStorage.setItem("lastVisit", Date.now());
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setShowRoutes(true);
    }
  }, []);

  return (
    <div className="w-full min-h-screen overflow-auto relative">
      <AnimatePresence mode="sync">
        {!showRoutes && (
          <motion.div
            key="sparkles"
            className="absolute top-0 left-0 w-full h-screen flex items-center justify-center"
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <WellcomeScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {showRoutes && (
        <motion.div
          key="routes"
          className="absolute top-0 left-0 w-full h-screen"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
        >
          <MonarqRoutes />
        </motion.div>
      )}
    </div>
  );
};



