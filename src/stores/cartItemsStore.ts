import type { CartItem } from "../types/CartItem";
import { defineStore } from "pinia";
import type { Product } from "../types/product";

export const useCartItemStore = defineStore("cartItem", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    cartItems: (state) => state.items,
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    itemCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  },

  actions: {
    ADD_ITEM(product: Product) {
      const existingItem = this.cartItems.find((i) => i.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        const cartItem: CartItem = { ...product, quantity: 1 };
        this.cartItems.push(cartItem);
      }
    },
    increaseQuantity(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item?.quantity === 1) {
        const index = this.items.findIndex((i) => i.id === id);
        this.items.splice(index, 1);
      }
    },
  },
});
