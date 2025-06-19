<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<template>
  <div>
    <Header />
    <main>
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
  flex: 1;
  background: #f5f5f5;
  padding: 1rem;

  min-height: 60vh;
  text-align: center;
}
</style>
