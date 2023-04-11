<script setup>
import { computed } from 'vue';

const props = defineProps(['size', 'img']);

const getClass = computed(() => {
  return `logo logo_${props.size}`;
});
</script>

<template>
  <a href="index.html"
    ><img :src="`src/assets/img/${props.img}.png`" :class="getClass" alt="logo"
  /></a>
</template>

<style lang="scss" scoped>
.logo {
  transition: all 0.5s;
  &:hover {
    transform: scale(1.05, 1.05);
  }
  &_standard {
    width: 100px;
  }
  &_big {
    width: 160px;
  }
}

@media (min-width: 1440px) {
  .logo {
    &_standard {
      width: 160px;
    }
  }
}
</style>
