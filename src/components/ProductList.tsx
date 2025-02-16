import { useProducts } from "@/hooks/useProducts";
import RecipeReviewCard from "./RecipeReviewCard";
import { useTranslation } from "next-i18next";
import { useDispatch } from "react-redux";
import { addToFavorites } from "@/store/slices/favoritesSlice";
import { addToCart } from "@/store/slices/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  quantity: number;
}

export default function ProductList() {
  const { products, loading } = useProducts();
  const { t } = useTranslation("common");
  const dispatch = useDispatch();

  const handleAddToFavorites = (product: Product) => {
    dispatch(addToFavorites(product));
  };

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  if (loading) return <p className="text-center">{t("loading")}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {products.map((product) => (
        <RecipeReviewCard key={product.id} data={product} onAddToFavorites={handleAddToFavorites} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
}