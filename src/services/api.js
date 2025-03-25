import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://192.168.43.106:3005/monarqCatalog/v1`,
  timeout: 5000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const filterByCategory = async (category) => {
  try {
    const response = await apiClient.get(
      `/product/filterByCategory/${category}`
    );
    return response.data;
  } catch (e) {
    const errorResponse = e.response?.data;

    if (Array.isArray(errorResponse?.errors)) {
      const errorMessage =
        errorResponse.errors[0]?.msg ||
        "An error occurred while fetching products by category.";
      return {
        error: true,
        message: errorMessage,
      };
    }

    const errorMessage =
      errorResponse?.msg ||
      "An error occurred while fetching products by category.";

    return {
      error: true,
      message: errorMessage,
    };
  }
};
