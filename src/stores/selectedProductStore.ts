import type { Product } from "../types/product"
import {defineStore} from 'pinia'
export interface SelectedProductState {
    item: Product | null
}

export const useSelectedProductStore = defineStore('selectedProduct', {
  state: () => ({
    item: null as Product | null
  }),

  getters: {
    getSelectedProduct: (state) => state.item
  },

  actions: {
    setSelectedProduct(product: Product) {
      this.item = product
    }
  }
})
// const selectedProductModule = {
//     namespaced: true,
//     state: () => ({
//         item: null
//     }),
//     mutations: {
//         SET_SELECTED_PRODUCT(state: SelectedProductState, product: Product) {
//             state.item = product
//         }
//     },
//     actions: {
//         selectProduct({commit}: any, product: Product){
//             commit('SET_SELECTED_PRODUCT', product)
//         }
//     },
//     getters: {
//         getSelectedProduct(state: SelectedProductState){
//             return state.item
//         }
//     }

// }

// export default selectedProductModule