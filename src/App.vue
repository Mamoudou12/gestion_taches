
<script setup>
// Supprimez cette ligne si vous n'utilisez pas RouterLink
import { RouterLink, RouterView } from 'vue-router';

// import FormProjet from "./components/FormProjet.vue";
// import ListeProjets from "./components/ListeProjets.vue";
// import ProjetItem from "./components/ProjetItem.vue";
import Taches from "./components/Taches.vue";
import Projects from "./components/Projects.vue";
import BarNav from "./components/BarNav.vue";
import LoginForm from './components/LoginForm.vue';

</script>


<template>
  <BarNav/>
  <RouterView />
  

  
  
  

  
    
<!-- <FormProjet/>
<listeProjets/>
<ProjetItem/> -->

<!-- <Taches/>
<Projects/> -->
<!-- <ContactForm/> -->


 <div class="container-fluid bg-light py-5">
    <div class="container text-center">
      <!-- En-tête Principal -->
      <h1 class="display-3 fw-bold mb-4 text-primary">Bienvenue dans notre Application de Gestion de Projets !</h1>
      <p class="lead mb-4 text-muted">Organisez, collaborez et réussissez avec élégance et efficacité.</p>
      
      <!-- Section d'Introduction -->
      <div class="row mb-5">
        <div class="col-md-4 mb-4">
          <div class="card border-primary shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title text-primary">Organisez</h5>
              <p class="card-text">Planifiez vos projets avec une interface intuitive. Suivez les étapes et atteignez vos objectifs.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card border-primary shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title text-primary">Collaborez</h5>
              <p class="card-text">Travaillez en équipe et partagez des informations importantes. Facilitez la communication et le travail collectif.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card border-primary shadow-sm">
            <div class="card-body text-center">
              <h5 class="card-title text-primary">Réussissez</h5>
              <p class="card-text">Surveillez vos progrès et atteignez vos objectifs avec des outils de suivi avancés et des rapports détaillés.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mb-5">
        <a href="/projets" class="btn btn-primary btn-lg me-3">Voir Mes Projets</a>
        <a href="/taches" class="btn btn-secondary btn-lg">Voir Mes Tâches</a>
      </div>

      <!-- Section de Contact -->
      <div class="mt-5">
    <p class="lead text-muted">Vous avez des questions ? 
      <RouterLink to="/ContactForm" class="btn btn-outline-primary">Contactez-nous</RouterLink>
    </p>
  </div>
    </div>
  </div>
  
 
  
</template>

<style scoped>


</style>
