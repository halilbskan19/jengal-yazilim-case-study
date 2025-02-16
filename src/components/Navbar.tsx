import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import SelectList from "./SelectList";

export default function Navbar() {
    const cartCount = useSelector((state: RootState) => state.cart.items.length);
    const favoritesCount = useSelector((state: RootState) => state.favorites.items.length);
    const { theme, changeTheme } = useTheme();
    const router = useRouter();
    const { t } = useTranslation("common");

    const changeLanguage = (lang: string) => {
        router.push(router.pathname, router.asPath, { locale: lang });
    };

    return (
        <nav className="bg-primary text-text py-4 px-6 flex justify-between">
            <Link href="/" className="flex text-md font-bold sm:items-center">{t("store")}</Link>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex gap-6 justify-end sm:items-center">
                    <Link href="/favorites">{t("favorites")} ({favoritesCount})</Link>
                    <Link href="/cart">{t("cart")} ({cartCount})</Link>
                </div>
                <div className="flex gap-6 justify-end">
                    <SelectList
                        value={router.locale ?? "tr"}
                        onChange={changeLanguage}
                        options={[
                            { value: "tr", label: "Türkçe" },
                            { value: "en", label: "English" },
                        ]}
                        minWidth={120}
                    />

                    <SelectList
                        value={theme || "brandA"}
                        onChange={changeTheme}
                        options={[
                            { value: "brandA", label: "Modern (Brand A)" },
                            { value: "brandB", label: "Lüks (Brand B)" },
                            { value: "brandC", label: "İndirim (Brand C)" },
                        ]}
                        minWidth={150}
                    />
                </div>
            </div>
        </ nav>
    );
}