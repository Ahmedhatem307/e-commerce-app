<template>
  <div class="hamburger" @click="$emit('toggle')">☰</div>
</template>

<style scoped lang="scss">
.hamburger {
  display: none;
  font-size: 2rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
}
</style>
