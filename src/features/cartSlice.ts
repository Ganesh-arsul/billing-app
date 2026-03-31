import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = state.find((i) => i.id === action.payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item) item.quantity++;
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.find((i) => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity--;
    },
  },
});

export const { addItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;