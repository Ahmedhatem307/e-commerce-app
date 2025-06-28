<template>
  <div class="productCard">
    <h3>{{ product.title }}</h3>
    <h4>{{ product.category }}</h4>
    <div class="productCard__rating">
      <p>{{ product.rating.rate }} out of 5 stars</p>
      <small>({{ product.rating.count }} reviews)</small>
    </div>
    <img
      :src="product?.image"
      alt="Product image"
      class="productCard__image"
      @click="goToProductDetail"
    />
    <p>{{ product.description }}</p>
    <p>{{ product.price }} $</p>
    <div class="productCard__addItem">
      <button class="productCard__addItem--btn" @click="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { Product } from "../types/product";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  methods: {
    ...mapMutations("cartItems", ["ADD_ITEM"]),
    addToCart() {
      this.ADD_ITEM(this.product);
    },
    ...mapActions("selectedProduct", ["selectProduct"]),
    goToProductDetail() {
      // this.$store.dispatch("selectedProduct/selectProduct", this.product);
      // this.$router.push({ name: "ProductDetail" });
      this.selectProduct(this.product);
      this.$router.push({
        name: "ProductDetail",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.productCard {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;

  &__rating {
    align-items: center;
    margin-bottom: 10px;
  }

  &__image {
    max-width: 300px;
    height: 300px;
    object-fit: contain;
  }
}
</style>
