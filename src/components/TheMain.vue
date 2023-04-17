<script setup>
import VButton from './VButton.vue';
import FeedbackForm from './FeedbackForm.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import { ref } from 'vue';

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

const feedbackCarousel = ref(null);

function nextFeedbackSlide() {
  return feedbackCarousel.value.next();
}

function previousFeedBackSlide() {
  return feedbackCarousel.value.prev();
}

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
        <v-button colorStyle="white-blue" value="Отправить посылку" />
      </form>
    </section>
    <section class="step__box padding-site">
      <div class="step" v-for="(step, ind) in steps" :key="ind">
        <img :src="`src/assets/img/${step.image}.png`" :alt="step.image" />
        <h3>{{ step.title }}</h3>
        <p>{{ step.text }}</p>
      </div>
    </section>
    <section class="offer padding-site">
      <h1>Мы берём все заботы по доставке на себя!</h1>
      <form action="#">
        <v-button colorStyle="white-blue" value="Отправить посылку" />
      </form>
    </section>
    <section class="callback padding-site">
      <div>
        <h1>хотите мы вам перезвоним?</h1>
        <p>Закажите звонок, и менеджер вам всё расскажет и объяснит</p>
      </div>
      <feedback-form direction="column" color-style="blue-yellow" />
    </section>
    <section class="feedback__box padding-site">
      <h1>ОТЗЫВЫ</h1>
      <div class="feedback__carousel">
        <button
          class="carousel__button carousel__button_left"
          @click="nextFeedbackSlide"
        >
          ❮
        </button>
        <button
          class="carousel__button carousel__button_right"
          @click="previousFeedBackSlide"
        >
          ❯
        </button>
        <carousel
          :wrap-around="true"
          snapAlign="start"
          :breakpoints="feedbackCarouselBreakpoints"
          ref="feedbackCarousel"
        >
          <slide v-for="feedback in feedbacks" :key="feedback.id">
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
        </carousel>
      </div>
    </section>
    <section class="advantage__box padding-site">
      <h1>НАШИ ПРЕИМУЩЕСТВА</h1>
      <div v-for="(advantage, ind) in advantages" :key="ind" class="advantage">
        <div class="advantage__imageBackground">
          <img
            :src="`src/assets/img/${advantage.image}.png`"
            :alt="advantage.image"
          />
        </div>
        <p>{{ advantage.text }}</p>
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
  h1 {
    text-transform: uppercase;
    color: #ffffff;
  }
  p {
    color: #ffffff;
  }
}

.feedback {
  &__carousel {
    position: relative;
  }

  img {
    float: left;
  }
}

.carousel__button {
    position: absolute;
    color: #b3b3b3;
    z-index: 3;
    background: 0;
    &_left {
      left: 0;
    }
    &_right {
      right: 0;
    }
  }

.advantage {
  &__box {
    background: #f7f7f7;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    h1 {
      position: absolute;
      width: 85%;
    }
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

  .callback {
    padding-top: 23px;
    padding-bottom: 8px;
    flex-direction: column;
    h1 {
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
      h1 {
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

  .carousel__button {
      &_left,
      &_right {
        top: 100px;
        font-size: 30px;
      }
    }

  .advantage {
    margin-bottom: 30px;
    &__box {
      padding-top: 103px;
      h1 {
        font-size: 28px;
        line-height: 34px;
        top: 23px;
      }
    }
    &__imageBackground {
      height: 86px;
      width: 86px;
    }
    img {
      width: 40px;
    }
    p {
      margin-top: 10px;
      font-size: 10px;
      line-height: 12px;
      width: 80px;
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

  .callback {
    padding-top: 32px;
    padding-bottom: 14px;
    flex-direction: row;
    h1,
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
      h1 {
        font-size: 36px;
        margin-bottom: 30px;
      }
    }

    &__text {
      font-size: 14px;
      line-height: 17px;
    }
  }

  .carousel__button {
      &_left,
      &__right {
        font-size: 30px;
      }
    }

  .advantage {
    margin-bottom: 50px;
    &__box {
      h1 {
        font-size: 36px;
        line-height: 43px;
        top: 37px;
      }
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

  .callback {
    height: 167px;
    padding-top: 73px;
    h1,
    p {
      margin-right: 60px;
    }
    h1 {
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
    transition: left 1s, visibility 0.4s;
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

  .carousel__button {
      &_left,
      &_right {
        top: 130px;
        font-size: 50px;
      }
    }

  .advantage {
    margin-bottom: 70px;
    &__box {
      padding-top: 169px;
      h1 {
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
}
</style>
