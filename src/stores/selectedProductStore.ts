import type { Product } from "../types/product";
import { defineStore } from "pinia";

export const useSelectedProductStore = defineStore("selectedProduct", {
  state: () => ({
    item: null as Product | null,
  }),

  getters: {
    getSelectedProduct: (state) => state.item,
  },

  actions: {
    setSelectedProduct(product: Product) {
      this.item = product;
    },
  },
});
