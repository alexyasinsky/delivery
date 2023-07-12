<script setup>
import TheHeader from './components/TheHeader.vue';
import TheLeading from './components/TheLeading.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from "./components/TheFooter.vue";
import VModalWindow from "./components/VModalWindow.vue"

import {provide, ref} from 'vue'

const modalWindowCase = ref('');

function setModalWindowCase(caseName) {
  modalWindowCase.value = caseName;
}

provide('setModalWindowCase', setModalWindowCase);


</script>

<template>
  <div class="wrapper">
    <v-modal-window
        v-if="modalWindowCase"
        :case-name="modalWindowCase"
    />
    <the-leading>
      <the-header></the-header>
    </the-leading>
    <the-main />
    <the-footer/>
  </div>
</template>

<style scoped>
.wrapper {
  flex-grow: 1;
  position: relative;
}

</style>
