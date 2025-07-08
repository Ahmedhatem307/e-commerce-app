import type { Product } from "../types/product"
import { defineStore } from "pinia"

export interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}


export const useProductStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null
  }),

  actions: {
    async fetchProducts() {
      this.loading = true
      try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        this.products = data
        this.loading = false
      } catch (error) {
        this.error = 'Failed to load'
        this.loading = false
      }
    }
  }
})

// const productsModule = {
//   namespaced: true,
//   state: (): ProductsState => ({
//     products: [],
//     loading: false,
//     error: null,
//   }),
//   mutations: {
//     setProducts(state: ProductsState, products: Product[]) {
//       state.products = products;
//     },
//     setLoading(state: ProductsState, loading: boolean) {
//       state.loading = loading;
//     },
//     setError(state: ProductsState, error: string | null){
//       state.error = error;
//     }
//   },
//   actions: {
//     async fetchProducts({ commit }: any) {
//       commit('setLoading', true);
//       try{
//         const res = await fetch('https://fakestoreapi.com/products');
//         const data = await res.json();
//         commit('setProducts', data);
//         commit('setLoading', false);
//       }
//       catch(error) {
//         commit('setError', 'Failed to load');
//         commit('setLoading', false);
//       }
//     },
//   },
//   getters: {
    
//     },
//   }

// export default productsModule