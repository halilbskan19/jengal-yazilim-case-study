import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/router";

export function useNavbarLogic() {
  const cartCount = useSelector((state: RootState) => state.cart.items.length);
  const favoritesCount = useSelector((state: RootState) => state.favorites.items.length);
  const { theme, changeTheme } = useTheme();
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(router.pathname, router.asPath, { locale: lang });
  };

  return {
    cartCount,
    favoritesCount,
    theme,
    changeTheme,
    router,
    changeLanguage,
  };
}
