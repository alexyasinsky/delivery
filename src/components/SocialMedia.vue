<script setup>
  const socialMediaIcons = ['vk', 'instagram', 'facebook-f'];
</script>

<template>
  <div class="socialMedia">
      <a
        v-for="(icon, ind) in socialMediaIcons"
        :key="ind"
        href="#"
        class="socialMedia__icon"
      >
        <font-awesome-icon :icon="['fab', icon]" />
      </a>
    </div>
</template>

<style lang="scss" scoped>
  .socialMedia {
      display: flex;
      justify-content: space-between;
      &__icon {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        background: #008dcd;
        color: #ffffff;
        text-align: center;
        line-height: 38px;
        font-size: 22px;
      }
    }
</style>