import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useTheme } from "@/hooks/useTheme";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function useNavbarLogic() {
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);

  const { theme, changeTheme } = useTheme();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const favoritesItems = useSelector((state: RootState) => state.favorites.items);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedFavorites = localStorage.getItem("favorites");

    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartCount(parsedCart.items.length);
    } else {
      setCartCount(cartItems.length);
    }

    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavoritesCount(parsedFavorites.length);
    } else {
      setFavoritesCount(favoritesItems.length);
    }
  }, [cartItems, favoritesItems]);

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
