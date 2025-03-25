/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { motion } from "framer-motion";

export const Carousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const selectImage = (index) => setCurrent(index);

  return (
    <div className="relative mx-auto flex flex-col items-center">
      {/* Imagen Principal (Tamaño responsivo con ajuste de aspecto) */}
      <div className="relative w-[90%] sm:w-[350px] md:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center bg-gray-100 overflow-hidden rounded-2xl">
        <motion.img
          key={current}
          src={images[current]}
          alt={`Image ${current}`}
          className="w-full h-full object-contain rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      </div>

      {/* Miniaturas en 1 o 2 filas según el ancho disponible */}
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index}`}
            className={`w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg cursor-pointer border-2 
              ${index === current ? "border-black opacity-100" : "border-transparent opacity-50"} 
              hover:opacity-100 transition`}
            onClick={() => selectImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

