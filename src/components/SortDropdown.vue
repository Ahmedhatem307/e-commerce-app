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

<script lang="ts">
export default {
  data() {
    return {
      selectedSort: "default",
    };
  },
  methods: {
    emitSort() {
      this.$emit("sort", this.selectedSort);
    },
  },
};
</script>

<style scoped lang="scss"></style>
