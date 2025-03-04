//main.js
import { createApp } from 'vue';
import App from './App.vue';
import Router from './Router';

createApp(App)
  .use(Router)   
  .mount('#display'); 
