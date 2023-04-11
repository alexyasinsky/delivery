<script setup>

</script>

<template>

  <form action="#">
      <h3>ОСТАЛИСЬ ВОПРОСЫ?</h3>
      <input type="tel" placeholder="Ваш телефон" id="tel"/>
      <input type="button" value="Заказать звонок" class="button" />
      <div class="agreement">
        <input type="checkbox" id="personal-data" />
        <label for="personal-data">Я согласен на обработку персональных данных</label>
      </div>
    </form>
</template>

<style lang="scss" scoped>
  form {
    h3 {
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 18px;
    }
    input[type='tel'] {
      border: 1px solid #363636;
      box-sizing: border-box;
      border-radius: 30px;
      width: 278px;
      height: 48px;
      padding-left: 23px;
      margin-bottom: 10px;
      &::placeholder {
        color: #000000;
      }
    }
    .agreement {
      margin-top: 10px;
      margin-bottom: 24px;
      display: flex;
      label {
        font-size: 10px;
        line-height: 12px;
        color: #9e9e9e;
        display: block;
        margin-left: 10px;
      }
    }
  }
</style>