import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Card = ({ title, image, route, size, product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route, { state: { product } }); // 🔥 Enviar el producto en el estado
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex flex-col items-center justify-between bg-black rounded-2xl overflow-hidden shadow-lg 
        transition-transform duration-300 ease-in-out
        ${size === "small" 
          ? "w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96" 
          : "w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px]"}`}
    >
      {image && (
        <img className="w-full h-3/4 object-cover" src={image} alt={title} />
      )}
      <div className="w-full h-1/4 flex items-center justify-center bg-gray-900 text-white">
        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold uppercase tracking-wider">
          {title}
        </h2>
      </div>
    </div>
  );
};


