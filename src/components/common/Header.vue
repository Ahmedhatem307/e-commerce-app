<template>
  <header>
    <nav class="navBar">
      <div class="navBar__leftSide">
        <HamburgerMenu @toggle="toggleMenu"></HamburgerMenu>
        <NavLogo></NavLogo>

        <div class="navBar__links" :class="{ open: isMenuOpen }">
          <PageLink to="/products">Products</PageLink>
          <PageLink to="/contact">Contact Us</PageLink>
        </div>
      </div>

      <div class="navBar__rightSide">
        <CartButton></CartButton>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

import PageLink from "../common/PageLink.vue";
import NavLogo from "../layout/NavLogo.vue";
import HamburgerMenu from "../layout/HamburgerMenu.vue";
import CartButton from "../cart/CartButton.vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped lang="scss">
.navBar {
  background-color: #1c2e4a;
  color: #d1cfc9;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: large;
  padding: 0 100px;
  &__leftSide,
  &__rightSide {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  &__leftSide {
    flex-wrap: wrap;
  }

  &__links {
    display: flex;
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .navBar__links {
    display: none !important;
    flex-direction: column;
    position: absolute;
    top: 60px;
    padding: 1rem;
    z-index: 1000;
    background-color: #1c2e4a;
  }

  .navBar__links.open {
    display: flex !important;
  }
}
</style>
