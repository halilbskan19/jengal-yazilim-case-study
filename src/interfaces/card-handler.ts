import { Product } from "./product";

export interface FavoriteHandler {
  onAddToFavorites?: (product: Product) => void;
  onRemoveFromFavorites?: (product: Product) => void;
}

export interface CartHandler {
  onAddToCart?: (product: Product) => void;
}
