import { createRouter, createWebHistory } from 'vue-router';
// import Taches from './views/Taches.vue';
// import Projets from './views/Projets.vue';
import projets from '../components/Projects.vue'
import taches from '../components/Taches.vue'
import ListeProjets from '@/components/ListeProjets.vue';
import ProjetItem from '@/components/ProjetItem.vue'
import FormProjet from '@/components/FormProjet.vue'
import LoginForm from '../components/LoginForm.vue';
import PageAcceuil from '@/components/PageAcceuil.vue';
import ContactForm from '@/components/ContactForm.vue';


const routes = [
  // { path: '/', name: 'Taches', component: Taches },
  { path: '/projets',
     name: 'Projets',
      component: projets },
      { path: '/ListProjets',
        name: 'ListProjets',
         component: ListeProjets},
          { path: '/FormProjet',
        name: 'FormProjet',
         component: FormProjet},
         { path: '/ProjetItem',
          name: 'ProjetItem',
           component: ProjetItem },
      { path: '/taches',
        name: 'taches',
         component: taches },
         { path: '/LoginForm',
          name: 'LoginForm',
           component: LoginForm},
           { path: '/PageAcceuil',
            name: 'PageAcceuil',
             component: PageAcceuil},
             { path: '/ContactForm',
              name: 'ContactForm',
               component: ContactForm},
             
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Utilisez import.meta.env.BASE_URL
  routes,
});

export default router;
