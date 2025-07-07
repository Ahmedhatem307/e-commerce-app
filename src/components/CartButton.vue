<template>
  <button class="cartBtn" @click="toggleCart">🛒</button>
  <transition name="slide">
    <CartSidebar
      v-if="isCartOpen"
      @close="toggleCart"
      class="toggleCart"
    ></CartSidebar>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import CartSidebar from "./CartSidebar.vue";

const isCartOpen = ref(false);

function toggleCart() {
  isCartOpen.value = !isCartOpen.value;
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); /* Start/end off-screen to the right */
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0); /* Fully visible */
}
</style>
