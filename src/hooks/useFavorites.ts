import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { removeFromFavorites } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store";
import { Product } from "@/interfaces/product";

export const useFavorites = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootState) => state.favorites);

  const removeFavorite = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const addProductToCart = (item: Product) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
  };

  return { items, removeFavorite, addProductToCart };
};
