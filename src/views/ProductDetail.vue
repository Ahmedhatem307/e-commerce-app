<template>
  <div class="productCard">
    <h1>Products ID Page</h1>
    <h2>{{ getSelectedProduct.title }}</h2>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions("selectedProduct", ["fetchProductById"]),
  },
  computed: {
    ...mapGetters("selectedProduct", ["getSelectedProduct"]),
  },
};
</script>
