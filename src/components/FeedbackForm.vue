<script setup>
import { computed } from 'vue';
import VButton from './VButton.vue';

const props = defineProps(['direction', 'colorStyle']);

const formStyle = computed(() => {
  return `${props.direction} ${props.colorStyle}`;
});
</script>

<template>
  <form action="#" :class="formStyle">
    <input type="tel" placeholder="Ваш телефон" id="tel" />
    <v-button :colorStyle="colorStyle" value="заказать звонок" />
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
  display: flex;
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
  flex-direction: row;
}

.column {
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
</style>
