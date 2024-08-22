import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(router); // Assurez-vous que le router est utilisé ici
app.use(createPinia());
app.mount('#app');
