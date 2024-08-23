<template>
  <header class="bg-light shadow-lg p-3 mb-4">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand fw-bold text-warning">Gestion des Projets</RouterLink>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/PageAcceuil" class="nav-link text-warning">Accueil</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/projets" class="nav-link text-warning">Mes Projets</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/taches" class="nav-link text-warning">Mes Tâches</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/profil" class="nav-link d-flex align-items-center text-warning">
                <!-- Icône SVG profil stylisée -->
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="me-2" viewBox="0 0 16 16">
                  <path d="M8 7a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"/>
                </svg>
                Profil
              </RouterLink>
            </li>
          </ul>
          <!-- Bouton pour se déconnecter -->
          <RouterLink to="/LoginForm" class="btn btn-outline-warning ms-3">Se Déconnecter</RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>
