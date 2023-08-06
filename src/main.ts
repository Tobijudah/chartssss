import './assets/main.css';
import App from './App.vue';
import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
app.use(VueQueryPlugin);
app.mount('#app');
