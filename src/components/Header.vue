<template>
  <header>
    <nav class="navBar">
      <div class="navBar__leftSide">
        <div class="navBar__hamburger" @click="toggleMenu">☰</div>
        <NavLogo></NavLogo>

        <div class="navBar__links" :class="{ open: isMenuOpen }">
          <PageLink to="/products">Products</PageLink>
          <PageLink to="/contact">Contact Us</PageLink>
        </div>
      </div>

      <div class="navBar__rightSide">
        <button class="navBar__rightSide--cartBtn">🛒</button>
      </div>
    </nav>
  </header>
</template>

<script>
import PageLink from "./PageLink.vue";
import NavLogo from "./NavLogo.vue";
export default {
  components: {
    PageLink,
    NavLogo,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>

<style scoped>
.navBar {
  background-color: #1c2e4a;
  color: #d1cfc9;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: large;
  padding: 0 100px;
  & .navBar__leftSide,
  .navBar__rightSide {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  & .navBar__leftSide {
    flex-wrap: wrap;
  }

  & .navBar__leftSide--logo {
    width: auto;
    height: 60px;
  }

  & .navBar__links {
    display: flex;
    gap: 1rem;
  }
}

.navBar__hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}
.router-link-active {
  font-weight: bold;
  text-decoration: none;
}

@media (max-width: 768px) {
  .navBar__hamburger {
    display: block;
  }

  .navBar__links {
    display: none !important;
    flex-direction: column;
    position: absolute;
    top: 60px;
    padding: 1rem;
    z-index: 1000;
    background-color: #1c2e4a;

    & .navBar__leftSide--link:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
    }
  }

  .navBar__links.open {
    display: flex !important;
  }
}
</style>
