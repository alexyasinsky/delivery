<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel } from 'vue3-carousel';
import { ref } from 'vue';

const myCarousel = ref(null);

const props = defineProps(['breakpoints']);

function nextSlide() {
  return myCarousel.value.next();
}

function previousSlide() {
  return myCarousel.value.prev();
}
</script>

<template>
  <div class="carousel">
    <button class="carousel__button carousel__button_left" @click="nextSlide">
      ❮
    </button>
    <button
      class="carousel__button carousel__button_right"
      @click="previousSlide"
    >
      ❯
    </button>
    <div class="carousel__wrapper">
      <carousel
      :wrap-around="true"
      snapAlign="start"
      :breakpoints="props.breakpoints"
      ref="myCarousel"
    >
      <slot></slot>
    </carousel>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  &__button {
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
  &__wrapper {
    padding-left: 20px;
    padding-right: 20px;
  }
}

@media (min-width: 320px) {
  .carousel__button {
    &_left,
    &_right {
      top: 30%;
      font-size: 30px;
    }
  }
}

@media (min-width: 768px) {
  .carousel__button {
    &_left,
    &__right {
      font-size: 30px;
    }
  }
}

@media (min-width: 1440px) {
  .carousel__button {
    &_left,
    &_right {
      font-size: 50px;
    }
  }
}
</style>
