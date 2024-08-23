<template>
    <li class="list-group-item d-flex justify-content-between align-items-center border-0 bg-transparent">
      <div class="text-dark">
        <strong>{{ projet.nom }}</strong> - {{ projet.dateDebut }} au {{ projet.dateFin }}
      </div>
      <div>
        <button @click="$emit('editProjet')" class="btn btn-sm btn-outline-warning me-2">✏️ Modifier</button>
        <button @click="$emit('deleteProjet')" class="btn btn-sm btn-outline-danger">🗑️ Supprimer</button>
      </div>
    </li>
  </template>
  
  <script setup>
  const props = defineProps({
    projet: Object,
  });
  </script>
  
  <style scoped>
  /* Aucun style CSS personnalisé */
  </style>
  