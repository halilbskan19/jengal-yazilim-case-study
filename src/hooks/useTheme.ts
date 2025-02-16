import { useEffect, useState } from "react";

const THEME_KEY = "theme";

const THEMES = {
  brandA: process.env.NEXT_PUBLIC_BRANDA || "brandA",
  brandB: process.env.NEXT_PUBLIC_BRANDB || "brandB",
  brandC: process.env.NEXT_PUBLIC_BRANDC || "brandC",
};

const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME || THEMES.brandA;

export function useTheme() {
  const [theme, setTheme] = useState<string | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    setTheme(storedTheme);
    document.documentElement.classList.add(`theme-${storedTheme}`);
  }, []);

  const changeTheme = (newTheme: string) => {
    if (!Object.values(THEMES).includes(newTheme)) return;

    document.documentElement.classList.remove(`theme-${theme}`);
    document.documentElement.classList.add(`theme-${newTheme}`);

    setTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  return { theme, changeTheme };
}
