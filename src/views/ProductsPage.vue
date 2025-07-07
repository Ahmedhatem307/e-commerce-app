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

<script lang="ts">
import { mapActions, mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";
import SortDropdown from "../components/SortDropdown.vue";
export default {
  components: {
    ProductCard,
    SortDropdown,
  },
  data() {
    return {
      sortOptions: "default",
    };
  },
  computed: {
    ...mapState("products", ["products", "loading", "error"]),
    sortedProducts() {
      let sorted = [...this.products];

      switch (this.sortOptions) {
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
          return this.products;
      }

      return sorted;
    },
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
    handleSort(option: string) {
      this.sortOptions = option;
    },
  },
  mounted() {
    this.fetchProducts();
  },
};
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
