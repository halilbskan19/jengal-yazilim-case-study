import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { removeFromCart } from "@/store/slices/cartSlice";
import { useTranslation } from "next-i18next";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function CartPage() {
    const dispatch = useDispatch();
    const { items, totalPrice } = useSelector((state: RootState) => state.cart);
    const { t } = useTranslation("common");

    return (
        <main className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-2xl font-bold text-center py-6">{t("my_cart")}</h1>
            {items.length === 0 ? (
                <p className="text-center text-gray-600">{t("empty_cart")}</p>
            ) : (
                <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    {items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b pb-4 mb-4">
                            <img src={item.image} alt={item.title} className="h-16 w-16 object-contain" />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-500">${item.price} x {item.quantity}</p>
                            </div>
                            <button
                                className="bg-red-500 text-white px-3 py-1 rounded"
                                onClick={() => dispatch(removeFromCart(item.id))}
                            >
                                ❌
                            </button>
                        </div>
                    ))}
                    <h2 className="text-xl font-bold mt-4">{t("total_price")}: ${totalPrice.toFixed(2)}</h2>
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
