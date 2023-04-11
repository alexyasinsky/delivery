<script setup>
import VButton from './VButton.vue';

const steps = [
  {
    image: 'step1',
    highline: 'Шаг 1',
    text: 'Придумайте, что и кому отправить',
  },
  {
    image: 'step2',
    highline: 'Шаг 2',
    text: 'Создайте заявку на сайте SendIt - Ваш персональный менеджер позвонит и подтвердит запрос, уточнит все необходимые данные',
  },
  {
    image: 'step3',
    highline: 'Шаг 3',
    text: 'К Вам приезжает курьер, забирает посылку, Вы подписываете один документ',
  },
  {
    image: 'step4',
    highline: 'Шаг 4',
    text: 'Вы ждёте подтверждения доставки, слова радости и благодарности от адресата :)',
  },
];
</script>

<template>
  <main>
    <section class="info padding-site">
      <img src="../assets/img/robot.png" alt="robot" />
      <h1>Мы – агрегатор служб доставки</h1>
      <p>
        С нами удобно вам, вашим клиентам и курьерским службам. Для вас наши
        услуги бесплатны, так как мы получаем бонусы от служб доставок за
        предоставленный объем заказов, а вы получаете надежный сервис в подарок!
      </p>
      <form action="#">
        <v-button value="Отправить посылку" />
      </form>
    </section>
    <section class="step__box padding-site">
      <div class="step" v-for="(step, ind) in steps" :key="ind">
        <img :src="`src/assets/img/${step.image}.png`" :alt="step.image" />
        <h3>{{ step.highline }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </section>
    <section class="offer padding-site">
      <h1>Мы берём все заботы по доставке на себя!</h1>
      <form action="#">
        <v-button value="Отправить посылку" />
      </form>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.info {
  background-color: #f7f7f7;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 278px;
  }
}

.step {
  &__box {
    display: flex;
    flex-direction: column;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.offer {
  background-color: #f7f7f7;
}

@media (min-width: 320px) {
  .info {
    margin-top: 227px;
    padding-top: 17px;
    height: 354px;
    img {
      width: 278px;
    }
    h1 {
      margin-top: 26px;
      font-size: 18px;
      line-height: 22px;
    }
    p {
      margin-top: 8px;
      font-size: 12px;
      line-height: 14px;
      margin-bottom: 21px;
    }
  }

  .step {
    margin: 25px 0;
    img {
      width: 278px;
    }
    h3 {
      margin-top: 27px;
      font-size: 26px;
      line-height: 31px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      line-height: 17px;
    }
  }

  .offer {
    padding-bottom: 23px;
    h1 {
      display: block;
      padding-top: 23px;
      font-size: 24px;
      line-height: 29px;
    }
    form {
      margin-top: 23px;
    }
  }
}

@media (min-width: 513px) {
  .info {
    margin-top: 195px;
  }
}

@media (min-width: 768px) {
  .info {
    margin-top: 0;
    position: relative;
    padding-top: 84px;
    height: 230px;
    img {
      float: right;
      width: 398px;
      margin-top: -10px;
    }
    h1 {
      margin-top: 0;
      position: absolute;
      top: 25px;
      font-size: 36px;
      line-height: 43px;
    }
    p {
      font-size: 14px;
      line-height: 17px;
      margin-bottom: 36px;
    }
  }

  .step {
    padding-bottom: 0;
    margin: 25px 33px;
    width: 278px;
    &__box {
      padding-top: 12px;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    h3 {
      margin-top: 27px;
    }
    p {
      margin-top: 10px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .offer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 124px;
    padding-bottom: 0;
    h1 {
      display: block;
      padding-top: 0;
      font-size: 28px;
      line-height: 34px;
    }
    form {
      margin: 0;
    }
  }
}

@media (min-width: 1440px) {
  .info {
    padding-top: 95px;
    height: 362px;
    position: unset;
    img {
      width: 660px;
      margin-left: 62px;
    }
    h1 {
      position: unset;
    }
    p {
      margin-top: 30px;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 40px;
    }
  }

  .step {
    margin: 40px 0;
    width: 462px;
    &__box {
      padding-top: 18px;
    }
    img {
      width: 462px;
    }
    h3 {
      margin-top: 45px;
      font-size: 30px;
      line-height: 36px;
    }
    p {
      margin-top: 20px;
      font-size: 20px;
      line-height: 24px;
    }
  }

  .offer {
    height: 180px;
    h1 {
      font-size: 36px;
      line-height: 43px;
    }
  }
}
</style>
