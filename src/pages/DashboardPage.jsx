/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import damaImg from '../assets/img/Cate_1_Dama.webp';
import caballeroImg from '../assets/img/Cate_1_Caballero.avif';

export const DashboardPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300); // Se reduce el delay para mejorar fluidez

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-grow items-center justify-center">
      {isLoaded && (
        <motion.div
          key="cards-container"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 } // Se agrega para mejorar sincronización
            }
          }}
          className="flex gap-6 lg:gap-12 xl:gap-16 flex-wrap justify-center"
        >
          <Card title="Damas" image={damaImg} route="/women" />
          <Card title="Caballeros" image={caballeroImg} route="/men" />
        </motion.div>
      )}
    </div>
  );
};




