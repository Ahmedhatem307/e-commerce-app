<template>
  <div class="container">
    <h1>Welcome to Our — Where Quality Meets Convenience</h1>
    <p>
      Discover a curated collection of top-quality products tailored to your
      lifestyle. Whether you're shopping for essentials or looking for something
      special, we're here to make your experience smooth, secure, and
      satisfying. Browse our latest arrivals and enjoy shopping with confidence.
    </p>
    <PageLink to="/products" class="container__productsLink"
      >Explore Our Products</PageLink
    >
  </div>
</template>

<script setup lang="ts">
import PageLink from "./PageLink.vue";
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 50px;
  margin: 20px 80px;
  max-width: 700px;
  background-color: rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(4px);

  &__productsLink {
    color: #f5f5f5;
    background-color: #1c2e4a;
    margin-top: 20px;
    border-radius: 2cm;
    width: 200px;
    transform: none;
  }
}
</style>
