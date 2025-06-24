import {createStore} from 'vuex'
import products from './modules/products'
const store = createStore ({
    state: {

    },
    mutations: {

    },
    actionns: {
        async fetchProducts() {

        }
    },
    getters: {

    },
    modules: {
        products,
    }
})

export default store