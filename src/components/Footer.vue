<template>
  <footer>
    <div class="primaryContainer">
      <div>left</div>
      <div>rights</div>
    </div>

    <div class="secondaryContainer">links</div>
  </footer>
</template>

<style scoped>
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: gray;
  text-align: center;
}

.primaryContainer {
  display: flex;
  justify-content: space-around;
}
</style>
