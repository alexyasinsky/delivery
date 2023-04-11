<script setup>
import TheMenu from './TheMenu.vue';
import VLogo from './VLogo.vue';

</script>

<template>
  <header>
    <v-logo
      size="standard"
      img="logo_w"
    />
    <the-menu/>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}

</style>