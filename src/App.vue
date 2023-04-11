<script setup>
import TheHeader from './components/TheHeader.vue';
import TheLeading from './components/TheLeading.vue';
import TheMain from './components/TheMain.vue';
</script>

<template>
  <div class="wrapper">
    <the-leading>
      <the-header></the-header>
    </the-leading>
    <the-main />
  </div>
</template>

<style scoped>
.wrapper {
  flex-grow: 1;
}
</style>
