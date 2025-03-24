import { useState, useEffect } from "react";
import { filterByCategory as fetchProducts } from "../services/api.js";
import toast from "react-hot-toast";

export const useFilterByCategory = (category) => {
  const [products, setProducts] = useState([]);
  const [allPhotos, setAllPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!category) return;

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const data = await fetchProducts(category);

        if (data.error) {
          toast.error(data.message || "Error al obtener productos.");
          setError(data.message || "Error al obtener productos.");
        } else {
          setProducts(data.products);

          const photos = data.products
            .map((product) => product.photos || [])
            .flat();

          setAllPhotos(photos);
        }
      } catch (error) {
        toast.error(
          `No se pudo conectar con el servidor. Intenta de nuevo más tarde ${error}.`
        );
        setError(
          "No se pudo conectar con el servidor. Intenta de nuevo más tarde."
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return {
    products,
    allPhotos,
    isLoading,
    error,
  };
};
