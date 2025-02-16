import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useNavbarLogic } from "@/hooks/useNavbarLogic";
import ThemeSelector from "./ThemeSelector";
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const { cartCount, favoritesCount, theme, changeTheme, router, changeLanguage } = useNavbarLogic();
  const { t } = useTranslation("common");

  return (
    <nav className="bg-primary text-text py-4 px-6 flex justify-between">
      <Link href="/" className="flex text-md font-bold sm:items-center">{t("store")}</Link>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex gap-6 justify-end sm:items-center">
          <Link href="/favorites">{t("favorites")} ({favoritesCount})</Link>
          <Link href="/cart">{t("cart")} ({cartCount})</Link>
        </div>
        <div className="flex gap-6 justify-end">
          <LanguageSelector value={router.locale ?? "tr"} onChange={changeLanguage} />
          <ThemeSelector value={theme || "brandA"} onChange={changeTheme} />
        </div>
      </div>
    </nav>
  );
}
