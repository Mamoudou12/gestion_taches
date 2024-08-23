<template>
    <div class="home-page bg-light">
      <!-- Header -->
      <header class="bg-primary text-white text-center py-5 shadow-sm">
        <h1 class="display-3 fw-bold mb-3">Bienvenue à Gestion des Projets</h1>
        <p class="lead">Organisez, planifiez et réalisez vos projets avec élégance et efficacité</p>
      </header>
  
      <!-- Features Section -->
      <section class="container my-5">
        <div class="row text-center">
          <div class="col-lg-4 mb-4">
            <div class="card shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon mb-3 text-primary">
                  <!-- Icône de gestion -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-clipboard-data" viewBox="0 0 16 16">
                    <path d="M10 6a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 10 6zm2 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5zM8 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1A.5.5 0 0 0 8 8z"/>
                    <path d="M4.5 9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
                    <path d="M14 4.5V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4.5h12zm0-1H2a1 1 0 0 0-1 1V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4.5a1 1 0 0 0-1-1z"/>
                    <path d="M8 1.5A1.5 1.5 0 0 1 9.5 3h1A1.5 1.5 0 0 1 12 4.5v1A1.5 1.5 0 0 1 10.5 7h-5A1.5 1.5 0 0 1 4 5.5v-1A1.5 1.5 0 0 1 5.5 3h1A1.5 1.5 0 0 1 8 1.5z"/>
                  </svg>
                </div>
                <h5 class="card-title fw-bold">Gestion Efficace</h5>
                <p class="card-text">Planifiez et suivez l'avancement de vos projets de manière optimale.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon mb-3 text-primary">
                  <!-- Icône de collaboration -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                    <path d="M7 6c0 1.654-1.346 3-3 3S1 7.654 1 6s1.346-3 3-3 3 1.346 3 3zM13 6c0 1.654-1.346 3-3 3S7 7.654 7 6s1.346-3 3-3 3 1.346 3 3zM8.5 8.5c-.41 0-.82.074-1.214.217-.713.256-1.356.617-1.934 1.074a5.745 5.745 0 0 0-1.352 1.572C3.454 12.03 3 13.106 3 14.25c0 .414.336.75.75.75h9.5c.414 0 .75-.336.75-.75 0-1.144-.454-2.22-1-2.887a5.75 5.75 0 0 0-1.352-1.572c-.578-.457-1.22-.818-1.933-1.074A3.482 3.482 0 0 0 8.5 8.5z"/>
                  </svg>
                </div>
                <h5 class="card-title fw-bold">Collaboration Simplifiée</h5>
                <p class="card-text">Travaillez en équipe de manière fluide et harmonieuse.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mb-4">
            <div class="card shadow-sm border-0 h-100">
              <div class="card-body">
                <div class="icon mb-3 text-primary">
                  <!-- Icône de résultats -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-bar-chart-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5A.5.5 0 0 1 11.5 2v12a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 .5-.5zm-4 3A.5.5 0 0 1 7.5 5v9a.5.5 0 0 1-1 0v-9a.5.5 0 0 1 .5-.5zm-4 3A.5.5 0 0 1 3.5 8v6a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5z"/>
                  </svg>
                </div>
                <h5 class="card-title fw-bold">Résultats Garantis</h5>
                <p class="card-text">Atteignez vos objectifs avec des outils performants et intuitifs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Call to Action Section -->
      <section class="bg-primary text-white text-center py-5">
        <div class="container">
          <h2 class="display-5 fw-bold mb-4">Commencez à gérer vos projets dès aujourd'hui</h2>
          <RouterLink to="/projets" class="btn btn-outline-light btn-lg">Découvrir mes Projets</RouterLink>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-light py-4 mt-5">
        <div class="container text-center">
          <p class="mb-0 text-secondary">&copy; 2024 Gestion des Projets. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  </script>
  
  <style scoped>
  /* Aucun style CSS personnalisé, tout basé sur Bootstrap */
  </style>
  