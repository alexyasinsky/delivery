<script setup>

import VButton from "./VButton.vue";
const props = defineProps(['caseName']);

const cases = {
  hello: {
    message: 'hello'
  }
}

const settings = cases[props.caseName];

</script>

<template>
  <div class="newmodal">
    {{settings.message}}
    <v-button
      color-style="white-blue"
    />
  </div>
</template>

<style lang="scss" scoped>
  .newmodal {
    background-color: red;
    height: 300px;
    width: 300px;
  }
</style>