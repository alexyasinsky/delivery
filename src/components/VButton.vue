<script setup>
  const props = defineProps(['handler', 'value'])
</script>

<template>
  <input
    type="button"
    :value="value"
    @click="handler"
  />
</template>

<style lang="scss" scoped>
  
  input[type='button'] {
    font-size: 16px;
    line-height: 19px;
    background: #008DCD;
    border-radius: 30px;
    border: 0;
    text-transform: uppercase;
    color: #FFFFFF;
    width: 278px;
    height: 48px;
    font-weight: bold;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05,1.05);
    }
    
  }
</style>