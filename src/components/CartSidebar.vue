<template>
  <div class="cartSidebar">
    <div class="cartSidebar__wrapper">
      <h3>Cart</h3>
      <button @click="$emit('close')" class="cartSidebar__wrapper--closeBtn">
        ✖
      </button>
    </div>
    <hr />
    <div class="cartSidebar__content">
      <p>Your cart is empty. Try to add stuff</p>
    </div>
  </div>
</template>

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
</style>
