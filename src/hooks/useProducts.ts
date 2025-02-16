import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/interfaces/product";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

api.interceptors.request.use(
  (config) => {
    console.log("İstek gönderiliyor:", config);
    return config;
  },
  (error) => {
    console.error("İstek hatası:", error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Yanıt alındı:", response);
    return response;
  },
  (error) => {
    console.error("Yanıt hatası:", error);
    return Promise.reject(error);
  }
);

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};
