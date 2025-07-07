<template>
  <div class="productCard" v-if="product">
    <h1>Product's Detail</h1>
    <h2>{{ product.title }}</h2>
    <h3>{{ product.category }}</h3>
    <div class="productCard__rating">
      <p>{{ product.rating.rate }} out of 5 stars</p>
      <small>({{ product.rating.count }} reviews)</small>
    </div>
    <img :src="product?.image" alt="Product image" class="productCard__image" />
    <div class="productCard__description">
      <p>{{ product.description }}</p>
    </div>
    <h1>{{ product.price }} $</h1>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import type { Product } from "../types/product";

const product = ref<Product | null>(null);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id;
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    product.value = await res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
  }
});
</script>

<style lang="scss">
.productCard {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__description {
    max-width: 400px;
    margin-top: 20px;
  }

  &__rating {
    align-items: center;
    margin-bottom: 30px;
  }

  &__image {
    max-width: 300px;
    height: 300px;
    object-fit: contain;
  }
}
</style>
