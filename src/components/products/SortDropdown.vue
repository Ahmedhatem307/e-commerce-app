<template>
  <select name="sort" id="sort" v-model="selectedSort">
    <option value="default">Default</option>
    <option value="nameAsc">Name (A-Z)</option>
    <option value="nameDesc">Name (Z-A)</option>
    <option value="priceAsc">Price: low to high</option>
    <option value="priceDesc">Price: high to low</option>
    <option value="ratingDesc">Rating: high to low</option>
    <option value="ratingAsc">Rating: low to high</option>
  </select>
  <button @click="emitSort">Sort</button>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  (e: "sort", value: string): void;
}>();

const selectedSort = ref("default");

function emitSort() {
  emit("sort", selectedSort.value);
}
</script>

<style scoped lang="scss"></style>
