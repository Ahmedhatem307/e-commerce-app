<template>
  <div class="productPage">
    <h1>Products Page</h1>
    <SortDropdown @sort="handleSort"></SortDropdown>

    <div class="productPage__Grid">
      <ProductCard
        v-for="product in sortedProducts"
        :product="product"
        :key="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { useProductStore } from "../stores/productStore";
import ProductCard from "../components/products/ProductCard.vue";
import SortDropdown from "../components/products/SortDropdown.vue";
import type { Product } from "../types/product";

const prodcutStore = useProductStore();

const sortOptions = ref("default");
const products = computed<Product[]>(() => prodcutStore.products);

function handleSort(option: string) {
  sortOptions.value = option;
}

const sortedProducts = computed(() => {
  const sorted = [...products.value];

  switch (sortOptions.value) {
    case "nameAsc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "nameDesc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "priceAsc":
      return sorted.sort((a, b) => a.price - b.price);
    case "priceDesc":
      return sorted.sort((a, b) => b.price - a.price);
    case "ratingDesc":
      return sorted.sort((a, b) => b.rating.rate - a.rating.rate);
    case "ratingAsc":
      return sorted.sort((a, b) => a.rating.rate - b.rating.rate);
    default:
      return products.value;
  }
});

onMounted(() => {
  prodcutStore.fetchProducts();
});

defineExpose({
  handleSort,
  sortedProducts,
});
</script>

<style scoped lang="scss">
.productPage {
  &__Grid {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
  }
}
</style>
