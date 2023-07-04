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

const partnersCarouselBreakpoints = {
  320: {
    itemsToShow: 2,
  },
  768: {
    itemsToShow: 4,
  },
  1440: {
    itemsToShow: 8,
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

const doubts = [
  {
    text: 'На бумажную волокиту уйдет много времени, а мне нужно доставить срочно!',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolor dolorem doloremque ea eius enim, expedita fuga impedit iusto laborum laudantium libero officia perferendis quis quisquam ratione veritatis vero?',
  },
  {
    text: 'Мне необходимо совершить доставку по нескольким адресам, нужно много чего заполнять',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolor dolorem doloremque ea eius enim, expedita fuga impedit iusto laborum laudantium libero officia perferendis quis quisquam ratione veritatis vero?',
  },
  {
    text: 'Вы не сможете доставить посылку за границу',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolor dolorem doloremque ea eius enim, expedita fuga impedit iusto laborum laudantium libero officia perferendis quis quisquam ratione veritatis vero?',
  },
  {
    text: 'Вы не занимаетесь такими простыми грузами, как мебель',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolor dolorem doloremque ea eius enim, expedita fuga impedit iusto laborum laudantium libero officia perferendis quis quisquam ratione veritatis vero?',
  },
  {
    text: 'Я отправляю вместе с коллегами, мы можем легко запутаться, где чье',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate dolor dolorem doloremque ea eius enim, expedita fuga impedit iusto laborum laudantium libero officia perferendis quis quisquam ratione veritatis vero?',
  },
  {
    text: 'Нужно заполнять кучу документов',
    answer:
      'Это не так. Вам нужно заполнить и подписать всего один документ, который распространяется на все службы доставки, которые будут доставлять Вашу посылку',
  },
];

const partners = [
  'bringo',
  'cdek',
  'city_express',
  'dpd',
  'pony',
  'spsr',
  'tnt',
  'ups',
];
</script>

<template>
  <main>
    <section class="info info__section padding-site">
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
    <section class="step__section padding-site">
      <div class="step" v-for="(step, ind) of steps" :key="ind">
        <img :src="`src/assets/img/${step.image}.png`" :alt="step.image" />
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </section>
    <section class="offer offer__section padding-site">
      <h2>Мы берём все заботы по доставке на себя!</h2>
      <form action="#">
        <v-button colorStyle="white-blue" value="Отправить посылку" />
      </form>
    </section>
    <section class="callback callback__section padding-site">
      <div>
        <h2>хотите мы вам перезвоним?</h2>
        <p>Закажите звонок, и менеджер вам всё расскажет и объяснит</p>
      </div>
      <feedback-form direction="column" color-style="blue-yellow" />
    </section>
    <section class="feedback__section padding-site">
      <h2>ОТЗЫВЫ</h2>
      <v-carousel :breakpoints="feedbackCarouselBreakpoints">
        <slide v-for="feedback of feedbacks" :key="feedback.id">
          <div class="feedback">
            <div class="feedback__box">
              <img
                :src="`src/assets/img/${feedback.image}.png`"
                :alt="feedback.image"
              />
              <h3 class="feedback__name">{{ feedback.name }}</h3>
              <h4 class="feedback__company">{{ feedback.company }}</h4>
              <p class="feedback__attribute">Посылка: {{ feedback.package }}</p>
              <p class="feedback__attribute">
                Откуда: {{ feedback.departure }}
              </p>
              <p class="feedback__attribute">
                Куда: {{ feedback.destination }}
              </p>
            </div>
            <p class="feedback__text">{{ feedback.text }}</p>
          </div>
        </slide>
      </v-carousel>
    </section>
    <section class="advantage__section padding-site">
      <h2>НАШИ ПРЕИМУЩЕСТВА</h2>
      <div class="advantage__list">
        <div
          v-for="(advantage, ind) in advantages"
          :key="ind"
          class="advantage"
        >
          <div class="advantage__image">
            <img
              :src="`src/assets/img/${advantage.image}.png`"
              :alt="advantage.image"
            />
          </div>
          <p>{{ advantage.text }}</p>
        </div>
      </div>
    </section>
    <section class="guarantee__section margin-site">
      <h2>НАШИ ГАРАНТИИ</h2>
      <div class="guarantee__s">
        <v-carousel :breakpoints="guaranteesCarouselBreakpoints">
          <slide v-for="(guarantee, ind) of guarantees" :key="ind">
            <div class="guarantee">
              <div class="guarantee__box">
                <div class="guarantee__image">
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
          <div class="guarantee__image">
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
    <section class="doubt__section padding-site">
      <h2>Остались сомнения?</h2>
      <div class="doubt__list">
        <div v-for="(doubt, ind) of doubts" :key="ind">
          <details class="doubt">
            <summary>{{ doubt.text }}</summary>
            <p>{{ doubt.answer }}</p>
          </details>
        </div>
      </div>
    </section>
    <section class="partner__section padding-site">
      <v-carousel :breakpoints="partnersCarouselBreakpoints">
        <slide v-for="(partner, ind) of partners" :key="ind">
          <a href="#"
            ><img :src="`/src/assets/img/${partner}.png`" :alt="partner"
          /></a>
        </slide>
      </v-carousel>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.info {
  &__section {
    background-color: #f7f7f7;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 278px;
  }
}

.step {
  &__section {
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
  &__section {
    background-color: #f7f7f7;
  }
}

.callback {
  &__section {
    background: #008dcd;
    display: flex;
    justify-content: space-between;
  }
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
  &__section {
    background: #f7f7f7;
    h2 {
      width: 85%;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
  }
  &__image {
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
  &__image {
    background: #f7f7f7;
    border-radius: 50%;
    display: flex;
    img {
      margin: auto;
    }
  }
}

.doubt {
  &__section {
    background: #d2ecf7;
    h2 {
      text-transform: uppercase;
    }
  }
  summary {
    border: 0;
    border-radius: 32px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::-webkit-details-marker {
      display: none;
    }
    &::after {
      content: '\f078';
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      color: #008dcd;
    }
  }
  &[open] summary {
    &::after {
      content: '\f077';
      font-family: 'Font Awesome 6 Free';
      font-weight: 900;
      color: #008dcd;
    }
  }
  p {
    background: #f7f7f7;
    border: 0;
  }
}

@media (min-width: 320px) {
  .info {
    &__section {
      margin-top: 227px;
      padding-top: 17px;
      height: 354px;
    }
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
    &__section {
      padding-bottom: 23px;
    }
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
    &__section {
      padding-top: 23px;
      padding-bottom: 8px;
      flex-direction: column;
    }
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
    &__section {
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
    &__attribute {
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
    &__section {
      padding-top: 21px;
      padding-bottom: 21px;
      h2 {
        font-size: 28px;
        line-height: 34px;
        top: 23px;
        margin-bottom: 20px;
      }
    }
    &__list {
      margin-left: -5px;
      margin-right: -5px;
      height: 290px;
    }
    &__image {
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
    &__section {
      padding-top: 27px;
      padding-bottom: 27px;
      h2 {
        font-size: 28px;
        margin-bottom: 15px;
      }
    }
    &__box {
      display: flex;
      align-items: center;
    }
    &__image {
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

  .doubt {
    width: 100%;
    padding-bottom: 10px;
    &__section {
      padding-top: 25px;
      padding-bottom: 25px;
      h2 {
        font-size: 28px;
        line-height: 34px;
        margin-bottom: 25px;
      }
    }
    summary {
      padding: 0 24px;
      font-size: 14px;
      line-height: 17px;
      height: 80px;
      &::after {
        margin-left: 10px;
      }
    }
    &[open] summary {
      border-radius: 32px 32px 0 0;
      &::after {
        margin-left: 10px;
      }
    }
    p {
      font-size: 14px;
      line-height: 17px;
      border-radius: 0 0 32px 32px;
      padding: 20px 24px;
      margin-top: -10px;
    }
  }

  .partner {
    &__section {
      padding-top: 20px;
      padding-bottom: 20px;
    }
  }
}

@media (min-width: 513px) {
  .info {
    &__section {
      margin-top: 195px;
    }
  }
}

@media (min-width: 768px) {
  .info {
    &__section {
      margin-top: 0;
      position: relative;
      padding-top: 84px;
      height: 230px;
    }
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
    &__section {
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
    &__section {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 124px;
      padding-bottom: 0;
    }
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
    &__section {
      padding-top: 32px;
      padding-bottom: 14px;
      flex-direction: row;
    }
    h2,
    p {
      margin-right: 130px;
    }
  }

  .feedback {
    padding: 0 36px;
    max-width: 500px;
    &__section {
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
    &__section {
      padding-top: 52px;
      padding-bottom: 52px;
      h2 {
        font-size: 36px;
        line-height: 43px;
        top: 37px;
        margin-bottom: 30px;
      }
    }
    &__list {
      margin: 0;
      justify-content: space-between;
      height: fit-content;
    }
    &__image {
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
    &__section {
      padding: 45px 5% 0 5%;
      height: 435px;
      margin: 0;
      h2 {
        font-size: 36px;
      }
    }
    &__image {
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

  .doubt {
    &__section {
      padding-top: 40px;
      padding-bottom: 40px;
      h2 {
        font-size: 36px;
        line-height: 43px;
        margin-bottom: 25px;
      }
    }
    summary {
      padding: 0 30px;
      font-size: 16px;
      line-height: 19px;
      height: 48px;
      &::after {
        margin-left: unset;
      }
    }
    &[open] summary {
      &::after {
        margin-left: unset;
      }
    }
    p {
      font-size: 16px;
      line-height: 19px;
      padding: 20px 30px;
      margin-top: -10px;
    }
  }

  .partner {
    &__section {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
}

@media (min-width: 1440px) {
  .info {
    &__section {
      padding-top: 95px;
      height: 362px;
      position: unset;
    }
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
    &__section {
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
    &__section {
      height: 180px;
    }
    h2 {
      font-size: 36px;
      line-height: 43px;
    }
  }

  .callback {
    &__section {
      height: 167px;
      padding-top: 73px;
    }
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
    &__section {
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
    &__attribute {
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
    &__section {
      padding-top: 69px;
      padding-bottom: 69px;
      h2 {
        top: 101px;
      }
    }
    &__image {
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
    &__section {
      padding: 80px 10% 0 10%;
      margin: 0;
      height: 612px;
    }
    &__image {
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

  .doubt {
    width: 560px;
    &__section {
      padding-top: 64px;
      h2 {
        margin-bottom: 40px;
      }
    }
    &__list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
    summary {
      height: 64px;
    }
    p {
      padding: 30px;
      margin-top: -10px;
    }
  }

  .partner {
    &__section {
      padding-top: 60px;
      padding-bottom: 60px;
    }
  }
}
</style>
