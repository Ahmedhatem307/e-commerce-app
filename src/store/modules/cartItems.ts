import type { CartItem } from "../../types/CartItem";

export interface cartState {
    items: CartItem[]

}

const cartItemsModule = {
    namespaced: true,

    state: ()  => ({
        items: []
    }),
    mutations:{
        ADD_ITEM(state: cartState, item: CartItem) {
            const existingItem = state.items.find(i => i.id === item.id)
            if(existingItem){
                existingItem.quantity += 1
            }
            else{
                state.items.push(item)
                item.quantity=1
            }
        },
        REMOVE_ITEMS(state: cartState, id:number) {
            state.items = state.items.filter(item => item.id !== id)
        },
        CLEAR_CART(state: cartState){
            state.items = []
        }
    },
    actions: {

    },
    getters: {
        cartItems: (state: cartState) => state.items,
        totalPrice(state: cartState){
            return state.items.reduce((total,item) => total + item.price * item.quantity,0)
        },
        itemCount(state: cartState){
            return state.items.reduce((sum,item) => sum + item.quantity,0)
        }
    },
    modules: {

    }
}

export default cartItemsModule;