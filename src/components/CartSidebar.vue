<template>
  <div class="cartSidebar">
    <div class="cartSidebar__wrapper">
      <h3>Cart</h3>
      <button @click="$emit('close')" class="cartSidebar__wrapper--closeBtn">
        ✖
      </button>
    </div>
    <hr />

    <div v-if="itemCount === 0" data-testid="empty-cart">
      <p>Your cart is empty. Try to add stuff</p>
    </div>
    <div v-else class="cart">
      <div
        v-for="item in cartItems as CartItem[]"
        :key="item.id"
        class="cartItem"
      >
        <img :src="item.image" alt="" class="cartItem--img" />
        {{ item.title }}

        <div class="cartItem__quantityControl">
          <button
            @click="removingQuantity(item)"
            data-testid="decreaseQuantity-btn"
          >
            -
          </button>
          <span>{{ item.quantity }}</span>
          <button
            @click="addingQuantity(item)"
            data-testid="increaseQuantity-btn"
          >
            +
          </button>
        </div>
        {{ item.price }}$
      </div>
      <div class="cart__footer">
        <div>Number of Items: {{ itemCount }}</div>
        <div>Total Price: {{ totalPrice }} $</div>
      </div>
    </div>
    <div class="cartSidebar__content"></div>
  </div>
</template>

<script setup lang="ts">
import { useCartItemStore } from "../stores/cartItemsStore";
import { computed } from "vue";
import type { CartItem } from "../types/CartItem";

const cart = useCartItemStore();

const cartItems = computed(() => cart.cartItems);
const itemCount = computed(() => cart.itemCount);
const totalPrice = computed(() => cart.totalPrice);

function addingQuantity(item: CartItem) {
  cart.increaseQuantity(item.id);
}
function removingQuantity(item: CartItem) {
  cart.decreaseQuantity(item.id);
}
</script>

<style scoped lang="scss">
.cartSidebar {
  position: fixed;
  text-align: center;
  top: 0;
  right: 0px;
  background-color: #0f1a2b;
  height: 100vh;
  width: 400px;
  overflow-y: auto;
  &__wrapper {
    &--closeBtn {
      position: fixed;
      right: 0px;
      top: 0px;
    }
  }
}
.cart {
  display: flex;
  flex-direction: column;
  height: 100%;
  &__footer {
    padding: 20px 0;
  }
}
.cartItem {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 10px;
  font-size: medium;
  gap: 10px;
  padding: 10px;
  &--img {
    width: 60px;
    height: auto;
  }
  &__quantityControl {
    display: flex;
    gap: 10px;
  }
}
</style>
