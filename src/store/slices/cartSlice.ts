import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "@/interfaces/cart";

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const saveCartToLocalStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.price;
      saveCartToLocalStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        state.totalPrice -= state.items[index].price * state.items[index].quantity;
        state.items.splice(index, 1);
        saveCartToLocalStorage(state);
      }
    },
    setCartFromLocalStorage: (state, action: PayloadAction<CartState>) => {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addToCart, removeFromCart, setCartFromLocalStorage } = cartSlice.actions;
export default cartSlice.reducer;
