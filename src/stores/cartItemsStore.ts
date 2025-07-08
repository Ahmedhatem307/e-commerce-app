import type { CartItem } from "../types/CartItem";
import { defineStore } from "pinia";

export interface cartState {
  items: CartItem[];
}

export const useCartItemStore = defineStore("cartItem", {
  state: () => ({
    items: [] as CartItem[],
  }),

  getters: {
    cartItems: (state) => state.items,
    totalPrice: (state) =>
      state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      ),
    itemCount: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),
  },

  actions: {
    ADD_ITEM(item: CartItem) {
      const existingItem = this.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        item.quantity = 1;
        this.items.push(item);
      }
    },
    increaseQuantity(id: number) {
      const item = this.items.find(i => i.id === id)
      if (item) {
        item.quantity += 1
      }
    },
    decreaseQuantity(id: number) {
      const item = this.items.find(i => i.id === id)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      } else if (item?.quantity === 1) {
        const index = this.items.findIndex(i => i.id === id)
        this.items.splice(index, 1)
      }
    }
  },
});

// const cartItemsModule = {
//     namespaced: true,

//     state: ()  => ({
//         items: []
//     }),
//     mutations:{
//         ADD_ITEM(state: cartState, item: CartItem) {
//             const existingItem = state.items.find(i => i.id === item.id)
//             if(existingItem){
//                 existingItem.quantity += 1
//             }
//             else{
//                 state.items.push(item)
//                 item.quantity=1
//             }
//         },
//         increaseQuantity(state: cartState, id:number){
//             const item = state.items.find(i => i.id === id)
//             if(item){
//                 item.quantity++
//             }
//         },
//         decreaseQuantity(state: cartState, id:number){
//             const item = state.items.find(i => i.id === id)
//             if(item && item.quantity > 1){
//                 item.quantity--
//             }
//             else if(item?.quantity === 1){
//                 const index = state.items.findIndex(item => item.id === id)
//                 state.items.splice(index, 1)
//             }
//         },
//     },
//     actions: {

//     },
//     getters: {
//         cartItems: (state: cartState) => state.items,
//         totalPrice(state: cartState){
//             return state.items.reduce((total,item) => total + item.price * item.quantity,0)
//         },
//         itemCount(state: cartState){
//             return state.items.reduce((sum,item) => sum + item.quantity,0)
//         }
//     },
//     modules: {

//     }
// }

// export default cartItemsModule;
