<template>
  <header>
    <nav>
      <router-link to="/products">Products</router-link>
      <router-link to="/contact">Contact</router-link>
      <button>🛒</button>
    </nav>
  </header>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: large;
}
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>