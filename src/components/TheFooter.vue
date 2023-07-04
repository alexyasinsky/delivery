<script setup>
import FeedbackForm from './FeedbackForm.vue';
import TheMenu from './TheMenu.vue';
import VLogo from './VLogo.vue';
import SocialMedia from './SocialMedia.vue';

const socialMediaIcons = ['vk', 'instagram', 'facebook-f'];

</script>

<template>
  <footer>
    <div class="question padding-site">
      <h3>Остались вопросы?</h3>
      <div class="question__s">
        <feedback-form color-style="white-blue" direction="column" />
      </div>
      <div class="question__ml">
        <feedback-form color-style="white-blue" direction="row" />
      </div>
    </div>
    <hr />
    <div class="bottom-navi padding-site">
      <v-logo
      size="standard"
      img="logo"
    />
    <the-menu
      controls-theme="dark"
    />
    </div>
    <hr />
    <div class="copyright padding-site">
      <p>© Сами копипастим и вам разрешаем</p>
      <div class="copyright__socialmedia">
        <div v-for="(icon, ind) in socialMediaIcons" :key="ind">
        <social-media :icon="icon" size="small" />
      </div>
      </div>
      <p>2023</p>
      <p>Задизайнено мной</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #e9e9e9;
  hr {
    border: 1px solid #c4c4c4;
  }
}

.question {
  h3 {
    text-transform: uppercase;
    margin-bottom: 15px;
  }
}

.bottom-navi {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__socialmedia {
    &-icons {
      border-radius: 50%;
      background: #008dcd;
      color: #ffffff;
      text-align: center;
    }
  }
}

@media (min-width: 320px) {
  footer {
    hr {
      margin: 0 6%;
    }
  }

  .question {
    padding-top: 21px;
    &__ml {
      display: none;
    }
    h3 {
      font-size: 18px;
    }
  }

  .bottom-navi {
    height: 85px;
  }

  .copyright {
    height: 40px;
    p {
      font-size: 9px;
    }
    &__socialmedia {
      display: none;
    }
  }
}

@media (min-width: 768px) {
  footer {
    hr {
      margin: 0 5%;
    }
  }

  .question {
    padding-top: 32px;
    height: 135px;
    &__s {
      display: none;
    }
    &__ml {
      display: block;
    }
    h3 {
      font-size: 20px;
    }
  }

  .bottom-navi {
    height: 79px;
  }

  .copyright {
    height: 44px;
    p {
      font-size: 12px;
    }
    &__socialmedia {
      display: flex;
      justify-content: space-between;
      width: 70px;
      &-icons {
        width: 12px;
        height: 12px;
        line-height: 12px;
        font-size: 6px;
      }
    }
  }
}

@media (min-width: 1440px) {
  footer {
    hr {
      margin: 0 10%;
    }
  }

  .question {
    display: flex;
    justify-content: space-between;
    h3 {
      font-size: 30px;
    }
  }

  .bottom-navi {
    height: 93px;
  }

  .copyright {
    height: 62px;
    p {
      font-size: 16px;
    }
    &__socialmedia {
      width: 120px;
      &-icons {
        width: 19px;
        height: 19px;
        line-height: 19px;
        font-size: 10px;
      }
    }
  }
}
</style>
