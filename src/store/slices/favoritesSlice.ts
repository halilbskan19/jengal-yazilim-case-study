import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteItem } from "@/interfaces/favorites";

const initialState: { items: FavoriteItem[] } = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action: PayloadAction<FavoriteItem>) => {
      const localFavorites = localStorage.getItem('favorites');
      const favorites = localFavorites ? JSON.parse(localFavorites) : [];
    
      const itemExists = favorites.some((item: FavoriteItem) => item.id === action.payload.id);
      if (!itemExists) {
        favorites.push(action.payload); 
    
        localStorage.setItem('favorites', JSON.stringify(favorites));
      }
    
      state.items = favorites;
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      if (typeof window !== "undefined") {
        const updatedFavorites = [...state.items];
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      }
    },
    setFavoritesFromLocalStorage: (state, action: PayloadAction<FavoriteItem[]>) => {
      state.items = action.payload;
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFavoritesFromLocalStorage } = favoritesSlice.actions;
export default favoritesSlice.reducer;
