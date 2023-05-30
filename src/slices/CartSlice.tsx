import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface CartItem {
  name: string;
  quantity: number;
  sku: string;
  id: string;
  price: string;
}

interface CartState {
  items: CartItem[];
  total: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { price, id, sku, quantity, name } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ price, id, sku, quantity, name });
      }
      state.total += parseInt(price) * quantity;
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const itemToDelete = state.items.find((item: any) => item.id == id);
      if (itemToDelete) {
        state.total -= parseInt(itemToDelete.price) * itemToDelete.quantity;
        state.items = state.items.filter((item: any) => item.id !== id);
      }
    },
    editCartItem: (
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const itemToEdit = state.items.find((item: any) => item.id === id);
      if (itemToEdit) {
        state.total +=
          parseInt(itemToEdit.price) * (quantity - itemToEdit.quantity);
        itemToEdit.quantity = quantity;
      }
    },
  },
});

export const { addToCart, deleteFromCart, editCartItem } = cartSlice.actions;

export default cartSlice.reducer;
