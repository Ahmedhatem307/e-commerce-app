<template>
  <div class="cartSidebar">
    <div class="cartSidebar__wrapper">
      <h3>Cart</h3>
      <button @click="$emit('close')" class="cartSidebar__wrapper--closeBtn">
        ✖
      </button>
    </div>
    <hr />

    <div v-if="itemCount === 0">
      <p>Your cart is empty. Try to add stuff</p>
    </div>
    <div v-else>
      <div
        v-for="item in cartItems as CartItem[]"
        :key="item.id"
        class="cartItem"
      >
        {{ item.title }}
        {{ item.price }}$
        {{ item.quantity }}
        <img :src="item.image" alt="" class="cartItem--img" />
      </div>
      <div>Number of items: {{ itemCount }}</div>
      <div>Total Price: {{ totalPrice }} $</div>
    </div>
    <div class="cartSidebar__content"></div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import type { CartItem } from "../types/CartItem";

export default {
  computed: {
    ...mapGetters("cartItems", ["cartItems", "itemCount", "totalPrice"]),
  },
};
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
  &__wrapper {
    &--closeBtn {
      position: fixed;
      right: 0px;
      top: 0px;
    }
  }
}
.cartItem {
  font-size: small;
  &--img {
    width: 20px;
  }
}
</style>
