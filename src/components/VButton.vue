<script setup>
  const props = defineProps(['handler', 'value', 'colorStyle']);

</script>

<template>
  <input
    type="button"
    :value="value"
    @click="handler"
    :class="colorStyle"
  />
</template>

<style lang="scss" scoped>
  
  input[type='button'] {
    font-size: 16px;
    line-height: 19px;
    border-radius: 30px;
    border: 0;
    text-transform: uppercase;
    width: 278px;
    height: 48px;
    font-weight: bold;
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05,1.05);
    }
  }

  .white-blue {
    background: #008DCD;
    color: #FFFFFF;
  }

  .blue-yellow {
    background: #ffcc00;
    color: black;
  }



</style>