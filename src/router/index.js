import { createRouter, createWebHistory } from 'vue-router';
// import Taches from './views/Taches.vue';
// import Projets from './views/Projets.vue';
import projets from '../components/Projects.vue'
import taches from '../components/Taches.vue'

const routes = [
  // { path: '/', name: 'Taches', component: Taches },
  { path: '/projets',
     name: 'Projets',
      component: projets },
      { path: '/taches',
        name: 'taches',
         component: taches },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilisez import.meta.env.BASE_URL
  routes,
});

export default router;
