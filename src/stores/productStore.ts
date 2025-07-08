import type { Product } from "../types/product";
import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        this.products = data;
        this.loading = false;
      } catch (error) {
        this.error = "Failed to load";
        this.loading = false;
      }
    },
  },
});
