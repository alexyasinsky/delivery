<script setup>
  import TheHeader from './components/TheHeader.vue';
  import TheLeading from './components/TheLeading.vue';
</script>

<template>
  <div class="wrapper">
    <the-leading>
      <the-header></the-header>
    </the-leading>
  </div>
</template>

<style scoped>
  .wrapper {
      flex-grow: 1;
  }
</style>
