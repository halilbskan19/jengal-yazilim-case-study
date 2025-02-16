import { Dispatch } from "redux";
import { addToFavorites, removeFromFavorites } from "@/store/slices/favoritesSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { Product } from "@/interfaces/product";

export const addProductToFavorites = (dispatch: Dispatch, product: Product) => {
  dispatch(addToFavorites(product));
};

export const removeProductFromFavorites = (dispatch: Dispatch, product: Product) => {
  dispatch(removeFromFavorites(product.id));
};

export const addProductToCart = (dispatch: Dispatch, product: Product) => {
  dispatch(addToCart(product));
};
