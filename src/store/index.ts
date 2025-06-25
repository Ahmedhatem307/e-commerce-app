import {createStore} from 'vuex'
import products from './modules/products'
import cartItems from './modules/cartItems'
const store = createStore ({
    state: {

    },
    mutations: {

    },
    actionns: {

    },
    getters: {

    },
    modules: {
        products,
        cartItems
    }
})

export default store