import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addToCart } from "@/store/slices/cartSlice";
import { addToFavorites, removeFromFavorites, setFavoritesFromLocalStorage } from "@/store/slices/favoritesSlice";
import { FavoriteItem } from "@/interfaces/favorites";
import { RootState } from "@/store";
import { Product } from "@/interfaces/product";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.favorites);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites) as FavoriteItem[];
      dispatch(setFavoritesFromLocalStorage(favorites));
    }
  }, [dispatch]);

  const addProductToFavorites = (product: FavoriteItem) => {
    dispatch(addToFavorites(product));
    const updatedFavorites = [...items, product];
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const removeFavorite = (id: number) => {
    dispatch(removeFromFavorites(id));
    const updatedFavorites = items.filter((item) => item.id !== id);
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  const addProductToCart = (item: Product) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return { items, removeFavorite, addProductToFavorites, addProductToCart };
};
