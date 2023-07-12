<script setup>

import FeedbackForm from "./FeedbackForm.vue";
const props = defineProps(['caseName']);

import {inject} from "vue";

const setModalWindowCase = inject('setModalWindowCase');

function closeModalWindow() {
  setModalWindowCase('');
}


const cases = {
  request: {
    highlight: 'Оставьте заявку, и мы Вам перезвоним!'
  }
}

const settings = cases[props.caseName];

</script>

<template>
  <div class="modal__box">
    <div class="modal__back" @click="closeModalWindow"></div>
    <div class="modal">
      <h3>{{ settings.highlight }}</h3>
      <feedback-form
          direction="column"
          color-style="white-blue"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .modal {
    position: sticky;
    background-color: white;
    top: 35vh;
    border-radius: 30px;
    box-sizing: border-box;
    z-index: 3;
    h3 {
      font-size: 20px;
      margin-bottom: 20px;
    }
    &__box {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
    }
    &__back {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: 2;
      background: rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(10px);
    }
  }

@media (min-width: 320px) {

  .modal {
    padding: 20px;
    width: 320px;
    left: calc(50vw - 160px);
  }
}

  @media (min-width: 768px) {

    .modal {
      padding: 40px;
      width: 450px;
      left: calc(50vw - 225px);
    }
  }





</style>