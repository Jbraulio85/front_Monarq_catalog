/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card } from "../components/Card";
import { useFilterByCategory } from "../hooks/useFilterByCategory";

const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;

export const MenPage = () => {
  const { allPhotos: shoesPhotos } = useFilterByCategory("MEN_SHOES");
  const { allPhotos: accessoriesPhotos } = useFilterByCategory("MEN_ACCESSORIES");
  const { allPhotos: tshirtsPhotos } = useFilterByCategory("MEN_TSHIRTS");

  const [images, setImages] = useState({
    shoes: "/placeholder.jpg",
    accessories: "/placeholder.jpg",
    tshirts: "/placeholder.jpg",
  });

  useEffect(() => {
    const getRandomImage = (photos) => {
      if (!photos || photos.length === 0) return "/placeholder.jpg";
      return `${CLOUDINARY_BASE_URL}/${photos[Math.floor(Math.random() * photos.length)]}`;
    };

    setImages({
      shoes: getRandomImage(shoesPhotos),
      accessories: getRandomImage(accessoriesPhotos),
      tshirts: getRandomImage(tshirtsPhotos),
    });
  }, [shoesPhotos, accessoriesPhotos, tshirtsPhotos]);

  return (
    <div className="flex flex-grow items-center justify-center px-4">
      <motion.div
        key="cards-container"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="flex flex-col md:flex-row md:flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-10 justify-center items-center"
      >
        <Card title="Zapatos" image={images.shoes} route="/men/shoes" size="small" />
        <Card title="Accesorios" image={images.accessories} route="/men/accessories" size="small" />
        <Card title="Playeras" image={images.tshirts} route="/men/tshirts" size="small" />
      </motion.div>
    </div>
  );
};



