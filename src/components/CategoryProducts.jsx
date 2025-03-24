import React from "react";
import { useFilterByCategory } from "../hooks/useFilterByCategory";
import { Card } from "./Card";

export const CategoryProducts = ({ category }) => {
  const { products, isLoading } = useFilterByCategory(category);
  const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_BASE_URL;

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {isLoading ? (
        <p className="text-center text-gray-500">Cargando productos...</p>
      ) : products.length > 0 ? (
        products.map((product) => (
          <Card
            key={product.pid}
            title={product.name}
            image={
              product.photos?.length > 0
                ? `${CLOUDINARY_BASE_URL}/${product.photos[0]}`
                : "/placeholder.jpg"
            }
            route={`/product/${product.pid}`}
            size="small"
            product={product}
          />
        ))
      ) : (
        <p className="text-center text-gray-500">No hay productos disponibles.</p>
      )}
    </div>
  );
};
