<template>
  <div class="productCard">
    <h3>{{ product?.title }}</h3>
    <img
      :src="product?.image"
      alt="Product image"
      class="product-card__image"
    />
    <p>{{ product?.description }}</p>
    <p>{{ product?.price }} $</p>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { Product } from "../store/modules/products";

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
};
</script>

<style scoped lang="scss">
.productCard {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 200px;
}

.product-card__image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
</style>
