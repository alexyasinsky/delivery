<script setup>
  import VButton from './VButton.vue';

  import {inject} from "vue";

  const setModalWindowCase = inject('setModalWindowCase');

  function openModalWindow() {
    setModalWindowCase('request');
  }
</script>

<template>
  <div class="leading padding-site">
    <slot></slot>
    <h1>Придумайте, что отправить</h1>
    <p>А посылка доедет сама</p>
    <form action="#">
      <v-button color-style="white-blue" value="Отправить посылку" :handler="openModalWindow"/>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.leading {
  padding-top: 27px;
  background-image: url('../assets/img/back-sm.png');
  h1 {
    text-transform: uppercase;
  }
  p {
    font-weight: bold;
  }
}

@media (min-width: 320px) {
  .leading {
    background-position: right;
    background-size: cover;
    background-repeat: no-repeat;
    height: 277px;
    h1 {
      margin-top: 262px;
      font-size: 32px;
      color: #000000;
    }
    p {
      margin-top: 12px;
      font-size: 24px;
      color: #000000;
      margin-bottom: 21px;
    }
  }
}

@media (min-width: 768px) {
  .leading {
    background-position: right;
    background-size: cover;
    height: 415px;
    margin-bottom: 0;
    h1 {
      margin-top: 55px;
      font-size: 44px;
      line-height: 53px;
      color: #ffffff;
      width: 60%;
    }
    p {
      margin-top: 20px;
      font-size: 28px;
      color: #ffffff;
      margin-bottom: 36px;
    }
  }
}

@media (min-width: 1440px) {
  .leading {
    background-image: url('../assets/img/back-b.png');
    height: 525px;
    h1 {
      margin-top: 88px;
    }
    p {
      margin-top: 36px;
      margin-bottom: 40px;
    }
  }
}
</style>
