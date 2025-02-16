import { useProducts } from "@/hooks/useProducts";
import RecipeReviewCard from "./RecipeReviewCard";
import { useTranslation } from "next-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/interfaces/product";
import { addProductToCart, addProductToFavorites } from "@/utils/productHandlers";
import { RootState } from "@/store";

export default function ProductList() {
  const { products, loading } = useProducts();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (loading) return <p className="text-center">{t("loading")}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {products.map((product: Product) => (
        <RecipeReviewCard
          key={product.id}
          data={product}
          isFavorited={favorites.some((fav: Product) => fav.id === product.id)}
          onAddToFavorites={() => addProductToFavorites(dispatch, product)}
          onAddToCart={() => addProductToCart(dispatch, product)}
        />
      ))}
    </div>
  );
}
