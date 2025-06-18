<template>
  <header>
    <nav class="navBar">
      <div class="navBar__leftSide">
        <img class="navBar__leftSide--logo" src="../assets/images/logo.png" />
        <router-link to="/products" class="navBar__leftSide--link"
          >Products</router-link
        >
        <router-link to="/contact" class="navBar__leftSide--link"
          >Contact</router-link
        >
      </div>

      <div class="navBar__rightSide">
        <button class="navBar__rightSide--cartBtn">🛒</button>
      </div>
    </nav>
  </header>
</template>

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
}
.router-link-active {
  font-weight: bold;
  text-decoration: none;
}
</style>
