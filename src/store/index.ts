import {createStore} from 'vuex'
import products from './modules/products'
import cartItems from './modules/cartItems'
import selectedProduct from './modules/selectedProduct'
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
        cartItems,
        selectedProduct
    }
})

export default store