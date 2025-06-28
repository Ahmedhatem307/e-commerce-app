<template>
  <div class="productCard">
    <h1>Product's Detail</h1>
    <h2>{{ product.title }}</h2>
    <h3>{{ product.category }}</h3>
    <div class="rating">
      <p>{{ product.rating.rate }} out of 5 stars</p>
      <small>({{ product.rating.count }} reviews)</small>
    </div>
    <img :src="product?.image" alt="Product image" class="image" />
    <p>{{ product.description }}</p>
    <p>{{ product.price }} $</p>
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";

export default {
  data() {
    return {
      product: null,
    };
  },
  methods: {
    ...mapActions("selectedProduct", ["fetchProductById"]),
  },
  async created() {
    //fetch the product form the fake store api every time the page
    //refresh using the id
    const id = this.$route.params.id;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      this.product = await res.json();
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  },
};
</script>

<style lang="scss">
.rating {
  align-items: center;
  margin-bottom: 10px;
}

.image {
  max-width: 300px;
  height: 300px;
  object-fit: contain;
}
</style>
