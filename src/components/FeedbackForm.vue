<script setup>
import VButton from './VButton.vue';

const props = defineProps(['direction', 'colorStyle']);
import {inject} from "vue";

const setModalWindowCase = inject('setModalWindowCase');

function openModalWindow() {
  setModalWindowCase('request');
}

</script>

<template>
  <form action="#" :class="colorStyle">
    <div :class="direction">
      <input type="tel" placeholder="Ваш телефон" id="tel" />
      <v-button :colorStyle="colorStyle" value="заказать звонок" :handler="openModalWindow"/>
    </div>
    <div class="agreement">
      <input type="checkbox" id="personal-data" />
      <label for="personal-data"
        >Я согласен на обработку персональных данных</label
      >
    </div>
  </form>
</template>

<style lang="scss" scoped>
form {
  input[type='tel'] {
    border-width: 1px;
    border-style: solid;
    box-sizing: border-box;
    border-radius: 30px;
    width: 278px;
    height: 48px;
    padding-left: 23px;
    margin-bottom: 10px;
    background-color: inherit;
    &::placeholder {
      font-size: 16px;
      line-height: 19px;
    }
  }
  .agreement {
    margin-top: 10px;
    margin-bottom: 24px;
    display: flex;
    label {
      font-size: 10px;
      line-height: 12px;
      color: #9e9e9e;
      display: block;
      margin-left: 10px;
    }
  }
}

.row {
  display: flex;
  flex-direction: row;
}

.column {
  display: flex;
  flex-direction: column;
}

.blue-yellow {
  input[type='tel'] {
    border-color: #ffffff;
    &::placeholder {
      color: #ffffff;
    }
  }
  .agreement label {
    color: #ffffff;
  }
}

.white-blue {
  input[type='tel'] {
    border-color: black;
    &::placeholder {
      color: black;
    }
  }
  .agreement label {
    color: #9e9e9e;
  }
}
@media (min-width: 768px) {
  .row {
    input[type='tel'] {
      margin-right: 20px;
    }
  }
}

@media (min-width: 1440px) {
  .row {
    input[type='tel'] {
      margin-right: 30px;
    }
  }
}
</style>
