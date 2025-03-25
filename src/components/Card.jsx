import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, image, route, size, product, titleClass }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route, { state: { product } });
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex flex-col items-center justify-between bg-black rounded-2xl overflow-hidden shadow-lg 
        transition-transform duration-300 ease-in-out
        ${size === "small"
          ? "w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
          : "w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"}
      `}
    >
      {image && <img className="w-full h-3/4 object-cover" src={image} alt={title} />}
      <div className="w-full h-1/4 flex items-center justify-center bg-gray-900 text-white">
        <h2 className={`font-semibold uppercase tracking-wider ${titleClass} hover:text-gray-500`}>
          {title}
        </h2>
      </div>
    </div>
  );
};

