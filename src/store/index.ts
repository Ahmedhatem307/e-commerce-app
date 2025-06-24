import {createStore} from 'vuex'
import products from './modules/products'
import cart from './modules/cartItems'
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
        cart
    }
})

export default store