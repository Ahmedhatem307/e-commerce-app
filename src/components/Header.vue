<template>
  <header>
    <nav class="navBar">
      <div class="navBar__lSide">
        <h4 class="navBar__logo">Logo</h4>
        <router-link to="/App" class="navBar__link">Home</router-link>
        <router-link to="/products" class="navBar__link">Products</router-link>
        <router-link to="/contact" class="navBar__link">Contact</router-link>
      </div>
      
      <div class="navBar__rSide">
        <h4 class="navBar__searchLabel">Search</h4>
        <a href="#" class="navBar__signIn">Sign In</a>
        <button  class="navBar__cartBtn">🛒</button>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navBar {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: large;
  padding: 0 30px;
}
.router-link-active {
  font-weight: bold;
  text-decoration: none;
}
.navBar__link, .navBar__signIn {
  text-decoration: none;
  color: gray;
  font-weight: bold;
}

.navBar__lSide, .navBar__rSide{
  display: flex;
  align-items: center;
  gap: 10px;
}

.navBar__lSide {
  flex-wrap: wrap;
}

</style>