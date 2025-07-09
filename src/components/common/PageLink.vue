<template>
  <router-link :to="to" class="pageLink"><slot></slot></router-link>
</template>

<script setup lang="ts">
defineProps<{
  to: string | Record<string, any>;
}>();
</script>

<style>
.pageLink {
  text-decoration: none;
  color: #d1cfc9;
  font-weight: bold;
}
.pageLink:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}
</style>
