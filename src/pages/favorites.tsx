import { useFavorites } from "@/hooks/useFavorites";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import RecipeReviewCard from "@/components/RecipeReviewCard";
import Head from "next/head";

export default function FavoritesPage() {
  const { items, removeFavorite, addProductToCart } = useFavorites();
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("favorites_title")}</title>
        <meta name="description" content={t("favorites_description")} />
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center py-6">{t("favorites")}</h1>
        {items.length === 0 ? (
          <p className="text-center text-gray-600">{t("favorites_empty")}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
            {items.map((item) => (
              <RecipeReviewCard
                key={item.id}
                data={item}
                onRemoveFromFavorites={() => removeFavorite(item.id)}
                onAddToCart={() => addProductToCart(item)}
                isFavorited={true}
              />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale ?? "tr", ["common"])),
    },
});
