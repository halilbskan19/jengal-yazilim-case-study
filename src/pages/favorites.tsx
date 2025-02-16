import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { removeFromFavorites } from "@/store/slices/favoritesSlice";
import { RootState } from "@/store";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RecipeReviewCard from "@/components/RecipeReviewCard";

interface FavoriteItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
}

export default function FavoritesPage() {
    const dispatch = useDispatch();
    const { items } = useSelector((state: RootState) => state.favorites);
    const { t } = useTranslation("common");

    const handleRemoveFromFavorites = (id: number) => {
        dispatch(removeFromFavorites(id));
    };

    const handleAddToCart = (item: FavoriteItem) => {
        dispatch(addToCart({ ...item, quantity: 1 }));
    };

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center py-6">{t("favorites")}</h1>
            {items.length === 0 ? (
                <p className="text-center text-gray-600">{t("favorites_empty")}</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
                    {items.map((item) => (
                        <RecipeReviewCard
                            key={item.id}
                            data={item}
                            onRemoveFromFavorites={() => handleRemoveFromFavorites(item.id)}
                            onAddToCart={() => handleAddToCart(item)}
                        />
                    ))}
                </div>
            )}
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "tr", ["common"])),
    },
});
