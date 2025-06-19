<template>
  <router-link :to="to" class="navBar__leftSide--link"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: "PageLink",
  props: {
    to: {
      type: [String, Object],
    },
  },
};
</script>

<style>
.navBar__leftSide--link {
  text-decoration: none;
  color: #d1cfc9;
  font-weight: bold;
}
</style>
