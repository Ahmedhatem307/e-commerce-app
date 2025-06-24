<template>
  <div class="productPage">
    <h1>Products Page</h1>
    <div class="productGrid">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id"
      ></ProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import { mapActions, mapState } from "vuex";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState("products", ["products", "loading", "error"]),
  },
  methods: {
    ...mapActions("products", ["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style scoped lang="scss">
.productGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}
</style>
