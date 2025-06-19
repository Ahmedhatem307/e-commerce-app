<template>
  <header>
    <nav class="navBar">
      <div class="navBar__leftSide">
        <div class="navBar__hamburger" @click="toggleMenu">☰</div>
        <img class="navBar__leftSide--logo" src="../assets/images/logo.png" />
        <div class="navBar__links" :class="{ open: isMenuOpen }">
          <router-link to="/products" class="navBar__leftSide--link"
            >Products</router-link
          >
          <router-link to="/contact" class="navBar__leftSide--link"
            >Contact</router-link
          >
        </div>
      </div>

      <div class="navBar__rightSide">
        <button class="navBar__rightSide--cartBtn">🛒</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
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
  & .navBar__leftSide--link,
  .navBar__rightSide--signIn {
    text-decoration: none;
    color: #d1cfc9;
    font-weight: bold;
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
