<script setup>

</script>

<template>
    <div class="leading padding-site">
      <slot></slot>
      <h1 class="leading__h1">Придумайте, что отправить</h1>
      <h2 class="leading__h2">А посылка доедет сама</h2>
      <form action="#">
          <input type="button" class="button leading__button modal__button" value="Отправить посылку">
      </form>
      </div>
</template>

<style lang="scss" scoped>
  .leading {
      padding-top: 27px;
      background-image: url("../assets/img/back-sm.png");
      &__h1 {
          text-transform: uppercase;
          font-weight: bold;
      }
      &__h2 {
          font-weight: bold;
      }
  }

  @media (min-width: 320px) {
    .leading {
        background-position: right;
        background-size: cover;
        background-repeat: no-repeat;
        height: 277px;
        &__h1 {
            margin-top: 262px;
            font-size: 32px;
            color: #000000;
        }
        &__h2 {
            margin-top: 12px;
            font-size: 24px;
            color: #000000;
        }
        &__button {
            margin-top: 21px;
        }
    }
  }

  @media (min-width: 768px) {
    .leading {
        background-position: right;
        background-size: cover;
        height: 415px;
        margin-bottom: 0;
        &__h1 {
            margin-top: 55px;
            font-size: 44px;
            line-height: 53px;
            color: #FFFFFF;
            width: 60%;
        }
        &__h2 {
            margin-top: 20px;
            font-size: 28px;
            color: #FFFFFF;
        }
        &__button {
            margin-top: 36px;
        }
    }
  }

  @media (min-width: 1440px) {
    .leading {
        background-image: url("../assets/img/back-b.png");
        height: 525px;
        &__h1 {
            margin-top: 88px;
        }
        &__h2 {
            margin-top: 36px;
        }
        &__button {
            margin-top: 40px;
        }
    }
  }
</style>