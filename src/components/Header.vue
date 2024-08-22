<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div class="container">
        <!-- Logo et Titre -->
        <a class="navbar-brand d-flex align-items-center" href="/">
          <span class="ms-2 fs-4">Mon Application</span>
        </a>
        
        <!-- Bouton de menu pour petits écrans -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        
        <!-- Menu de navigation -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" to="/taches" exact-active-class="active">Tâches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/projets" exact-active-class="active">Projets</router-link>
            </li>
            <!-- Ajoutez d'autres liens ici si nécessaire -->
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  // Aucune logique particulière nécessaire ici pour le header
  </script>
  
  <style scoped>
  header {
    margin-bottom: 1rem;
  }
  
  .navbar {
    background-color: #007bff; /* Couleur bleu personnalisé */
  }
  
  .navbar-brand img {
    border-radius: 50%;
  }
  
  .nav-link {
    font-weight: 500;
    color: #ffffff !important; /* Texte blanc pour les liens */
  }
  
  .nav-link.active {
    font-weight: 700;
    color: #ffeb3b !important; /* Couleur jaune pour le lien actif */
  }
  
  .navbar-toggler-icon {
    filter: invert(100%);
  }
  </style>
  