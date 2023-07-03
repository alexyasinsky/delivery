<script setup>

</script>

<template>
  <footer>
    <div class="question">
      <h1>Остались вопросы?</h1>
      <form action="#" class="question__form">
        <input type="tel" placeholder="Ваш телефон" id="tel" class="question__tel">
        <input type="button" class="button question__button" value="Заказать звонок">
        <div class="question__agree">
          <input type="checkbox" id="q_personal-data">
          <label for="q_personal-data">Я согласен на обработку персональных данных</label>
        </div>
      </form>
    </div>
    <hr>
    <div class="footer padding-site">
      <a href="index.html"><img src="img/logo.png" class="footer__logo" alt="logo_w"></a>
      <input type="checkbox" id="menu" class="footer__menu_checkbox">
      <label for="menu" class="footer__menu_open"><i class="fas fa-bars"></i></label>
      <nav class="footer__menu-mb">
        <ul>
          <li><a href="#" class="footer__menu_link">Главная</a></li>
          <li><a href="#" class="footer__menu_link">Отзывы</a></li>
          <li><a href="#" class="footer__menu_link">Гарантии</a></li>
          <li><a href="#" class="footer__menu_link">Описание</a></li>
          <li><a href="#" class="footer__menu_link">Партнеры</a></li>
          <li><a href="#" class="footer__menu_link">Преимущества</a></li>
          <li><a href="#" class="footer__menu_link">FAQ</a></li>
        </ul>
      </nav>
    </div>
    <hr>
    <div class="copyright padding-site">
      <p>© Сами копипастим и вам разрешаем</p>
      <div class="copyright__socialmedia">
        <a href="#" class="copyright__socialmedia-icons"><i class="fab fa-vk"></i></a>
        <a href="#" class="copyright__socialmedia-icons"><i class="fab fa-instagram"></i></a>
        <a href="#" class="copyright__socialmedia-icons"><i class="fab fa-facebook-f"></i></a>
      </div>
      <p>2019</p>
      <p>Задизайнено мной</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: #E9E9E9;
  hr {
    border: 1px solid #C4C4C4;
  }
}

.question {
  h1 {
    text-transform: uppercase;
  }
  &__form {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__tel {
    border: 1px solid black;
    box-sizing: border-box;
    border-radius: 30px;
  }
  &__button {
    background: #008DCD;
    color: white;
  }
  &__agree {
    display: flex;
    label {
      margin-left: 10px;
      font-size: 10px;
      color: #9E9E9E;
      width: 265px;
    }
  }
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__menu {
    &_checkbox {
      visibility: hidden;
      position: absolute;
      left: -99999px;
    }
    &-mb {
      ul {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

.copyright {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &__socialmedia {
    &-icons {
      border-radius: 50%;
      background: #008DCD;
      color: #FFFFFF;
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
    padding: 15px;
    h1 {
      font-size: 18px;
    }
    &__form {
      margin-top: 15px;
    }
    &__tel {
      padding-left: 23px;
      margin-bottom: 9px;
      width: 290px;
      height: 40px;
      &::placeholder {
        font-size: 14px;
      }
    }
    &__button {
      margin-bottom: 6px;
      width: 290px;
      height: 40px;
    }
  }

  .footer {
    height: 85px;
    &__logo {
      width: 100px;
      transition: all 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(1.05,1.05);
      }
    }
    &__menu {
      &_open {
        font-size: 36px;
      }
      ul {
        margin-top: 10px;
      }
      &_link {
        font-size: 18px;
        color: #000000;
        line-height: 45px;
      }
      &_checkbox:checked ~ .header__menu {
        left: 0;
      }
      &-mb {
        display: none;
      }
    }
  }

  .copyright {
    height: 40px;
    p {
      font-size: 9px;
    }
    &__socialmedia {
      display: none;
      width: 70px;
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
    display: flex;
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 32px;
    height: 75px;
    h1 {
      margin-top: 12px;
      font-size: 20px;
    }
    &__form {
      width: 460px;
      margin-top: 0;
    }
    &__tel {
      padding-left: 18px;
      margin-bottom: 9px;
      width: 220px;
      height: 48px;
    }
    &__button {
      margin-bottom: 0;
      width: 220px;
      height: 48px;
    }
  }

  .footer {
    height: 79px;
    &__menu {
      &_open {
        display: none;
      }
      &-mb {
        display: block;
        width: 580px;
      }
      &_link {
        font-size: 14px;
        line-height: 28px;
      }
    }
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

  .modal {
    width: 360px;
    padding: 0 40px;
    left: calc(50vw - 220px);
    top: calc(50vh - 165px);
    h1 {
      margin-top: 30px;
      margin-bottom: 29px;
    }
    &__input {
      padding-left: 21px;
      width: 360px;
      height: 48px;
      margin-bottom: 13px;
      &::placeholder {
        font-size: 16px;
        line-height: 19px;
      }
    }
    input[type=button] {
      margin-bottom: 13px;
      width: 360px;
    }
    &__agree {
      margin-bottom: 47px;
      label {
        margin-left: 7px;
        font-size: 12px;
      }
    }
    &__close {
      left: 350px;
      top: 15px;
      i {
        font-size: 14px;
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
    padding-left: 10%;
    padding-right: 10%;
    h1 {
      font-size: 30px;
    }
    &__form {
      width: 755px;
    }
    &__tel {
      padding-left: 30px;
      margin-bottom: 9px;
      width: 362px;
      height: 50px;
      &::placeholder {
        font-size: 14px;
      }
    }
    &__button {
      width: 362px;
      height: 50px;
    }
  }

  .footer {
    height: 93px;
    &__logo {
      width: 160px;
      transition: all 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(1.05,1.05);
      }
    }
    &__menu {
      &-mb {
        width: 859px;
      }
      &_link {
        font-size: 18px;
        line-height: 28px;
      }
    }
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