// https://www.figma.com/file/ewYmVOeLu0Wq9q2cyBmhVb/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-(Copy)?node-id=0-1


import { createApp } from 'vue';
import './styles/main.scss';
import App from './App.vue';
import FontAwesomeIcon from "./services/fontawesome.js";


createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
