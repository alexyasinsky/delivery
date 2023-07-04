<script setup>
const props = defineProps(['icon', 'href', 'size']);

const socialMediaIcons = ['vk', 'instagram', 'facebook-f'];
</script>

<template>
  <a :class="`icon icon__${size}`" href="#">
    <font-awesome-icon :icon="['fab', icon]" />
  </a>
</template>

<style lang="scss" scoped>
.icon {
  display: block;
  border-radius: 50%;
  background: #008dcd;
  color: #ffffff;
  text-align: center;
  &__large {
    width: 38px;
    height: 38px;
    line-height: 38px;
    font-size: 22px;
  }
}

@media (min-width: 768px) {
  .icon {
    &__small {
      width: 12px;
      height: 12px;
      line-height: 12px;
      font-size: 6px;
    }
  }
}

@media (min-width: 1440px) {
  .icon {
    &__small {
      width: 19px;
      height: 19px;
      line-height: 19px;
      font-size: 10px;
    }
  }
}
</style>
