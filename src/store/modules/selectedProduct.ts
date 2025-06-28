import type {Product} from "../../types/product"

export interface SelectedProductState {
    item: Product | null
}


const selectedProductModule = {
    namespaced: true,
    state: () => ({
        item: null
    }),
    mutations: {
        SET_SELECTED_PRODUCT(state: SelectedProductState, product: Product) {
            state.item = product
        }
    },
    actions: {
        selectProduct({commit}: any, product: Product){
            commit('SET_SELECTED_PRODUCT', product)
        }
    },
    getters: {
        getSelectedProduct(state: SelectedProductState){
            return state.item
        }
    }

}

export default selectedProductModule