export interface FavoriteItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    quantity: number;
  }
  
  export interface FavoritesState {
    items: FavoriteItem[];
  }
  