<script setup>
  import VButton from './VButton.vue';
</script>

<template>
  <div class="info padding-site">
    <img src="../assets/img/robot.png" alt="robot"/>
    <h1>Мы – агрегатор служб доставки</h1>
    <p>
      С нами удобно вам, вашим клиентам и курьерским службам. Для вас наши
      услуги бесплатны, так как мы получаем бонусы от служб доставок за
      предоставленный объем заказов, а вы получаете надежный сервис в подарок!
    </p>
    <form action="#">
      <v-button value="Отправить посылку" />
    </form>
  </div>
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
}
</style>
