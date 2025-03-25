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
    }, 300);

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
              transition: { staggerChildren: 0.3 }
            }
          }}
          className="flex gap-6 lg:gap-12 xl:gap-16 flex-wrap justify-center"
        >
          {/* Aquí pasamos 'small' para hacer las cards más pequeñas */}
          <Card title="Damas" image={damaImg} route="/women" size="medium" />
          <Card title="Caballeros" image={caballeroImg} route="/men" size="medium" />
        </motion.div>
      )}
    </div>
  );
};
