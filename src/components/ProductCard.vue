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
    <p>{{ product.price }} $</p>
    <div class="productCard__addItem">
      <button class="productCard__addItem--btn" @click="addToCart">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { Product } from "../types/product";
import { useCartItemStore } from "../stores/cartItemsStore";
import { useSelectedProductStore } from "../stores/selectedProductStore";

const props = defineProps<{
  product: Product;
}>();

const cart = useCartItemStore();
const selectedProduct = useSelectedProductStore();
const router = useRouter();

function addToCart() {
  cart.ADD_ITEM(props.product);
}

function goToProductDetail() {
  selectedProduct.setSelectedProduct(props.product);
  router.push({
    name: "ProductDetail",
    params: { id: props.product.id },
  });
}
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
