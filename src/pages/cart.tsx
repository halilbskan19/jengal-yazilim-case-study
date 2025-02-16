import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart, setCartFromLocalStorage } from "@/store/slices/cartSlice";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import CartItem from "@/components/CartItem";
import Head from "next/head";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const { t } = useTranslation("common");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch(setCartFromLocalStorage(JSON.parse(savedCart)));
      }
    }
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{t("cart_title")}</title>
        <meta name="description" content={t("cart_description")} />
      </Head>
      <main className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center py-6">{t("my_cart")}</h1>
        {items.length === 0 ? (
          <p className="text-center text-gray-600">{t("empty_cart")}</p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {items.map((item) => (
              <CartItem key={item.id} item={item} onRemove={() => dispatch(removeFromCart(item.id))} />
            ))}
            <h2 className="text-xl font-bold mt-4">{t("total_price")}: ${totalPrice.toFixed(2)}</h2>
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
