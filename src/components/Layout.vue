<script setup lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import HomeScreen from "./HomeScreen.vue";
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div>
    <Header />
    <main>
      <div v-if="route.path === '/'" class="homeScreen">
        <HomeScreen></HomeScreen>
      </div>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: "Playfair Display";
}
body {
  display: flex;
  flex-direction: column;
}
main {
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: #f5f5f5;
  padding: 1rem;
  min-height: 60vh;
  text-align: center;
}
.homeScreen {
  display: flex;
}
</style>
