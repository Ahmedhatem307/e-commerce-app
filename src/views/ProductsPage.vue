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
import { useStore } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import SortDropdown from "../components/SortDropdown.vue";
import type { Product } from "../types/product";

const store = useStore();

const sortOptions = ref("default");
const products = computed<Product[]>(() => store.state.products.products);

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
  store.dispatch("products/fetchProducts");
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
