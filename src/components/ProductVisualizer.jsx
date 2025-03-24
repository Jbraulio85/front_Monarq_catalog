import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel } from "../components/Carousel";

export const ProductVisualizer = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.product) {
    return (
      <div className="text-center p-4">
        <p className="text-gray-500">Producto no encontrado.</p>
        <button className="text-blue-500" onClick={() => navigate("/")}>
          Volver al inicio
        </button>
      </div>
    );
  }

  const { name, description, photos } = state.product;
  const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;
  const fullImageUrls = photos.map(photo => `${CLOUDINARY_BASE_URL}/${photo}`);

  return (
    <div className="p-6">
      {/* Carrusel */}
      <Carousel images={fullImageUrls} />

      {/* Información del producto */}
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  );
};



