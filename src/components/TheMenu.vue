<script setup>
  import FeedbackForm from './FeedbackForm.vue';
  import SocialMedia from './SocialMedia.vue';
  import VLogo from './VLogo.vue';

  const menu = [
    'Главная',
    'Отзывы',
    'Гарантии',
    'Описание',
    'Партнеры',
    'Преимущества',
    'FAQ',
  ];

  function showMenu() {
    return (document.querySelector('.menu_s').style.left = 0);
  }

  function hideMenu() {
    return (document.querySelector('.menu_s').style.left = '100%');
  }
</script>

<template>
  <button class="menu__button menu__button_open" @click="showMenu">
    <font-awesome-icon :icon="['fas', 'bars']" />
  </button>
  <nav class="menu_s">
    <button class="menu__button menu__button_close" @click="hideMenu">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
    <v-logo size="big" img="logo" />
    <div class="menu__item" v-for="(item, ind) in menu" :key="ind">
      <input
        type="radio"
        name="menu"
        :value="item"
        :id="`menu-s-${item}`"
        :checked="ind === 0"
      />
      <label :for="`menu-s-${item}`">{{ item }}</label>
    </div>
    <feedback-form/>
    <social-media/>
  </nav>
  <nav class="menu_mb">
    <div class="menu__item" v-for="(item, ind) in menu" :key="ind">
      <input
        type="radio"
        name="menu"
        :value="item"
        :id="`menu-ml-${item}`"
        :checked="ind === 0"
      />
      <label :for="`menu-ml-${item}`">{{ item }}</label>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &_s {
    z-index: 1;
    position: fixed;
    top: 0;
    left: 100%;
    background-color: #ffffff;
    width: calc(100% - 42px);
    padding: 13px 21px;
    height: 100vh;
    transition: left 0.5s;
    label {
      font-size: 18px;
      color: #000000;
      line-height: 45px;
    }
  }
  &_mb {
    display: flex;
    label {
      color: #ffffff;
    }
  }
  &__button {
    background: 0;
    font-size: 36px;
    &_open {
      color: #ffffff;
    }
    &_close {
      color: #000000;
      float: right;
      line-height: 50px;
    }
  }
  &__item {
    transition: all 0.5s;

    input[type='radio'] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }

    input[type='radio']:checked + label {
      color: #008dcd;
    }

    label:hover {
      color: #008dcd;
    }
  }
}

@media (min-width: 320px) {
  .menu {
    &_mb {
      display: none;
    }
  }
}

@media (min-width: 768px) {
  .menu {
    &_s {
      display: none;
    }
    &_mb {
      display: flex;
    }
    &__item {
      label {
        margin-left: 10px;
        margin-right: 10px;
        font-size: 14px;
        line-height: 28px;
      }
    }
    &__button {
      display: none;
    }
  }
}
@media (min-width: 1440px) {
  .menu {
    &__item {
      label {
        margin-left: 25px;
        margin-right: 25px;
        font-size: 18px;
        line-height: 28px;
      }
    }
  }
}
</style>
