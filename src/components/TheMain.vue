<script setup>
import VButton from './VButton.vue';
import FeedbackForm from './FeedbackForm.vue';
import VCarousel from './VCarousel.vue';
import { Slide } from 'vue3-carousel';

const steps = [
  {
    image: 'step1',
    title: 'Шаг 1',
    text: 'Придумайте, что и кому отправить',
  },
  {
    image: 'step2',
    title: 'Шаг 2',
    text: 'Создайте заявку на сайте SendIt - Ваш персональный менеджер позвонит и подтвердит запрос, уточнит все необходимые данные',
  },
  {
    image: 'step3',
    title: 'Шаг 3',
    text: 'К Вам приезжает курьер, забирает посылку, Вы подписываете один документ',
  },
  {
    image: 'step4',
    title: 'Шаг 4',
    text: 'Вы ждёте подтверждения доставки, слова радости и благодарности от адресата :)',
  },
];

const feedbacks = [
  {
    id: 'feedback00001',
    image: 'feedback1',
    name: 'Дарья',
    company: 'La Intuicion',
    package: 'товары',
    departure: 'Москва',
    destination: 'Нижневартовск',
    text: 'Отличный и качественный сервис. Долго искали курьерскую службу для доставки наших товаров. Решили попробовать и были приятно удивлены, что помимо удобного сайта, компания предоставляет доступ в личный кабинет, где реализованы многие наши потребности (ведение адресной базы, выбор и вызов курьера в пару кликов).',
  },
  {
    id: 'feedback00002',
    image: 'feedback2',
    name: 'Елена',
    company: 'Global Logic',
    package: 'товары',
    departure: 'Москва',
    destination: 'Калининград',
    text: 'Мне нравится работать с SendIt, потому что это удобно: моментальный расчет стоимости доставки, удобный сайт, выборка среди основных надёжных логистических компаний и самый значимый фактор – всё это можно оперативно организовать и не волноваться. И ещё хочу сказать отдельное спасибо менеджеру за отзывчивость.',
  },
];

const feedbackCarouselBreakpoints = {
  320: {
    itemsToShow: 1,
  },
  768: {
    itemsToShow: 2,
  },
};

const guaranteesCarouselBreakpoints = {
  320: {
    itemsToShow: 1,
  },
};

const advantages = [
  {
    image: 'advantage1',
    text: 'Бесплатный сервис',
  },
  {
    image: 'advantage2',
    text: 'Огромный выбор вариантов доставки',
  },
  {
    image: 'advantage3',
    text: '4 параметра лучшего предложения',
  },
  {
    image: 'advantage4',
    text: 'Удобство заказа',
  },
  {
    image: 'advantage5',
    text: 'Online-поддержка',
  },
  {
    image: 'advantage6',
    text: 'Единый номер отслеживания',
  },
];

const guarantees = [
  {
    image: 'guarantee1',
    title: 'Страховка отправлений',
    text: 'Контроль работы курьеров в онлайн режиме. Страхование по запросу клиента. Каждый куръер находится под пристальным вниманием менеджеров SendIt',
  },
  {
    image: 'guarantee2',
    title: 'Прозрачность расчётов',
    text: 'Чтобы узнать точную стоимость отправления вам не нужно связываться с каждой курьерской службой в отдельности и сравнивать полученные предложения, просто воспользуйтесь нашим сервисом',
  },
  {
    image: 'guarantee3',
    title: 'Лучшие поставщики',
    text: 'Мы работаем с самыми надежными и известными операторами доставки. Проверка надежности курьерской компании, экспертная оценка качества предоставляемых услуг',
  },
];
</script>

<template>
  <main>
    <section class="info padding-site">
      <img src="../assets/img/robot.png" alt="robot" />
      <h2>Мы – агрегатор служб доставки</h2>
      <p>
        С нами удобно вам, вашим клиентам и курьерским службам. Для вас наши
        услуги бесплатны, так как мы получаем бонусы от служб доставок за
        предоставленный объем заказов, а вы получаете надежный сервис в подарок!
      </p>
      <form action="#">
        <v-button colorStyle="white-blue" value="Отправить посылку" />
      </form>
    </section>
    <section class="step__box padding-site">
      <div class="step" v-for="(step, ind) of steps" :key="ind">
        <img :src="`src/assets/img/${step.image}.png`" :alt="step.image" />
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </section>
    <section class="offer padding-site">
      <h2>Мы берём все заботы по доставке на себя!</h2>
      <form action="#">
        <v-button colorStyle="white-blue" value="Отправить посылку" />
      </form>
    </section>
    <section class="callback padding-site">
      <div>
        <h2>хотите мы вам перезвоним?</h2>
        <p>Закажите звонок, и менеджер вам всё расскажет и объяснит</p>
      </div>
      <feedback-form direction="column" color-style="blue-yellow" />
    </section>
    <section class="feedback__box padding-site">
      <h2>ОТЗЫВЫ</h2>
      <v-carousel :breakpoints="feedbackCarouselBreakpoints">
        <slide v-for="feedback of feedbacks" :key="feedback.id">
          <div class="feedback">
            <div>
              <img
                :src="`src/assets/img/${feedback.image}.png`"
                :alt="feedback.image"
              />
              <h5 class="feedback__name">{{ feedback.name }}</h5>
              <h6 class="feedback__company">{{ feedback.company }}</h6>
              <p class="feedback__desc">Посылка: {{ feedback.package }}</p>
              <p class="feedback__desc">Откуда: {{ feedback.departure }}</p>
              <p class="feedback__desc">Куда: {{ feedback.destination }}</p>
            </div>
            <p class="feedback__text">{{ feedback.text }}</p>
          </div>
        </slide>
      </v-carousel>
    </section>
    <section class="advantage__box padding-site">
      <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div class="advantage__wrapper">
        <div
          v-for="(advantage, ind) in advantages"
          :key="ind"
          class="advantage"
        >
          <div class="advantage__imageBackground">
            <img
              :src="`src/assets/img/${advantage.image}.png`"
              :alt="advantage.image"
            />
          </div>
          <p>{{ advantage.text }}</p>
        </div>
      </div>
    </section>
    <section class="guarantee__box margin-site">
      <h2>НАШИ ГАРАНТИИ</h2>
      <div class="guarantee__s">
        <v-carousel :breakpoints="guaranteesCarouselBreakpoints">
          <slide v-for="(guarantee, ind) of guarantees" :key="ind">
            <div class="guarantee">
              <div class="guarantee__card">
                <div class="guarantee__circle">
                  <img
                    :src="`src/assets/img/${guarantee.image}.png`"
                    :alt="guarantee.image"
                  />
                </div>
                <h4>{{ guarantee.title }}</h4>
              </div>
              <p>{{ guarantee.text }}</p>
              <button class="button guarantee__button">Подробнее</button>
            </div>
          </slide>
        </v-carousel>
      </div>
      <div class="guarantee__ml">
        <div
          v-for="(guarantee, ind) of guarantees"
          :key="ind"
          class="guarantee"
        >
          <div class="guarantee__circle">
            <img
              :src="`src/assets/img/${guarantee.image}.png`"
              :alt="guarantee.image"
            />
          </div>
          <h4>{{ guarantee.title }}</h4>
          <p>{{ guarantee.text }}</p>
          <button class="button guarantee__button">Подробнее</button>
        </div>
      </div>
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

.callback {
  background: #008dcd;
  display: flex;
  justify-content: space-between;
  h2 {
    text-transform: uppercase;
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
}

.feedback {
  img {
    float: left;
  }
}
.advantage {
  &__box {
    background: #f7f7f7;
    h2 {
      width: 85%;
    }
  }
  &__wrapper {
      display: flex;
      flex-wrap: wrap;
    }
  &__imageBackground {
    border-radius: 50%;
    background-color: white;
    display: flex;
  }
  img {
    margin: auto;
  }
  p {
    text-align: center;
    width: 80px;
  }
}

.guarantee {
  text-align: left;
  &__circle {
    background: #f7f7f7;
    border-radius: 50%;
    display: flex;
    img {
      margin: auto;
    }
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
    h2 {
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
    h2 {
      display: block;
      padding-top: 23px;
      font-size: 24px;
      line-height: 29px;
    }
    form {
      margin-top: 23px;
    }
  }

  .callback {
    padding-top: 23px;
    padding-bottom: 8px;
    flex-direction: column;
    h2 {
      font-size: 28px;
      line-height: 34px;
    }
    p {
      margin-top: 14px;
      font-size: 14px;
      line-height: 13px;
      margin-bottom: 14px;
    }
  }

  .feedback {
    text-align: left;
    padding: 0 25px;
    max-width: 500px;
    &__box {
      padding-top: 21px;
      padding-bottom: 21px;
      h2 {
        font-size: 28px;
        margin-bottom: 20px;
      }
    }

    img {
      width: 100px;
      margin-right: 20px;
    }
    &__name {
      margin-top: -4px;
      font-size: 26px;
    }
    &__company {
      margin: 10px 0;
      font-size: 18px;
    }
    &__desc {
      font-size: 10px;
      margin-bottom: 5px;
    }
    &__text {
      margin-top: 10px;
      font-size: 12px;
      line-height: 14px;
    }
  }
  .advantage {
    margin: 0 5px;
    &__box {
      padding-top: 21px;
      padding-bottom: 21px;
      h2 {
        font-size: 28px;
        line-height: 34px;
        top: 23px;
        margin-bottom: 20px;
      }
    }
    &__wrapper {
      margin-left: -5px;
      margin-right: -5px;
    }
    &__imageBackground {
      height: 86px;
      width: 86px;
      img {
      width: 40px;
    }
    }
    p {
      margin-top: 10px;
      font-size: 10px;
      line-height: 12px;
      width: 80px;
    }
  }

  .guarantee {
    padding: 0 25px;
    &__ml {
      display: none;
    }
    &__box {
      padding-top: 27px;
      padding-bottom: 27px;
      h2 {
        font-size: 28px;
        margin-bottom: 15px;
      }
    }
    &__card {
      display: flex;
      align-items: center;
    }
    &__circle {
      height: 62px;
      width: 62px;
      margin-right: 10px;
      img {
        width: 28px;
      }
    }
    h4 {
      font-size: 16px;
      line-height: 19px;
    }
    p {
      margin-top: 15px;
      margin-bottom: 25px;
      font-size: 12px;
      line-height: 14px;
      min-height: 55px;
    }
    &__button {
      width: 228px;
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
    h2 {
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
    h2 {
      display: block;
      padding-top: 0;
      font-size: 28px;
      line-height: 34px;
    }
    form {
      margin: 0;
    }
  }

  .callback {
    padding-top: 32px;
    padding-bottom: 14px;
    flex-direction: row;
    h2,
    p {
      margin-right: 130px;
    }
  }

  .feedback {
    padding: 0 36px;
    max-width: 500px;
    &__box {
      padding-top: 52px;
      padding-bottom: 52px;
      h2 {
        font-size: 36px;
        margin-bottom: 30px;
      }
    }

    &__text {
      font-size: 14px;
      line-height: 17px;
    }
  }

  .advantage {
    margin: 0;
    &__box {
      padding-top: 52px;
      padding-bottom: 52px;
      h2 {
        font-size: 36px;
        line-height: 43px;
        top: 37px;
        margin-bottom: 30px;
      }
    }
    &__wrapper {
      margin: 0;
      justify-content: space-between;
    }
    &__imageBackground {
      height: 100px;
      width: 100px;
    }
    img {
      width: 45px;
    }
    p {
      margin-top: 16px;
      font-size: 12px;
      line-height: 14px;
      width: 95px;
    }
  }

  .guarantee {
    padding: 0;
    width: 217px;
    &__s {
      display: none;
    }
    &__ml {
      display: flex;
      justify-content: space-between;
      margin-top: 15px;
    }
    &__box {
      padding: 45px 5% 0 5%;
      height: 435px;
      margin: 0;
      h2 {
        font-size: 36px;
      }
    }
    &__circle {
      height: 100px;
      width: 100px;
      margin: 0;
      img {
        width: 45px;
      }
    }
    h4 {
      margin-top: 18px;
      font-size: 20px;
      line-height: 24px;
    }
    p {
      margin-top: 15px;
      min-height: 95px;
    }
    &__button {
      width: 217px;
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
    h2 {
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
    h2 {
      font-size: 36px;
      line-height: 43px;
    }
  }

  .callback {
    height: 167px;
    padding-top: 73px;
    h2,
    p {
      margin-right: 60px;
    }
    h2 {
      font-size: 48px;
      line-height: 58px;
    }
    p {
      font-size: 24px;
      line-height: 23px;
    }
  }

  .feedback {
    padding: 0 100px;
    max-width: 800px;
    &__box {
      padding-top: 69px;
      padding-bottom: 69px;
    }

    &__text {
      font-size: 14px;
      line-height: 17px;
    }
    img {
      width: 150px;
      margin-right: 30px;
    }
    &__name {
      margin-top: -4px;
      font-size: 36px;
    }
    &__company {
      margin: 15px 0;
      font-size: 24px;
    }
    &__desc {
      font-size: 16px;
      margin-bottom: 5px;
    }
    &__text {
      margin-top: 30px;
      font-size: 16px;
      line-height: 19px;
    }
  }

  .advantage {
    &__box {
      padding-top: 69px;
      padding-bottom: 69px;
      h2 {
        top: 101px;
      }
    }
    &__imageBackground {
      height: 160px;
      width: 160px;
    }
    img {
      width: 80px;
    }
    p {
      margin-top: 34px;
      font-size: 18px;
      line-height: 22px;
      width: 150px;
    }
  }

  .guarantee {
    width: 360px;
    &__ml {
      margin-top: 40px;
    }
    &__box {
      padding: 80px 10% 0 10%;
      margin: 0;
      height: 612px;
    }
    &__circle {
      height: 160px;
      width: 160px;
      img {
        width: 75px;
      }
    }
    h4 {
      margin-top: 32px;
      font-size: 30px;
      line-height: 36px;
    }
    p {
      margin-top: 15px;
      font-size: 16px;
      line-height: 19px;
      min-height: 115px;
    }
    &__button {
      width: 360px;
    }
  }
}
</style>
