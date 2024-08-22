<template>
    <div>
      <h1>Projets</h1>
      <form @submit.prevent="addProjet">
        <input v-model="newProjet.nom" placeholder="Nom du projet" required />
        <input v-model="newProjet.dateDebut" type="date" required />
        <input v-model="newProjet.dateFin" type="date" required />
        <button type="submit">Ajouter</button>
      </form>
  
      <ul>
        <li v-for="(projet, index) in projets" :key="index">
          {{ projet.nom }} - {{ projet.dateDebut }} au {{ projet.dateFin }}
          <button @click="editProjet(index)">Modifier</button>
          <button @click="deleteProjet(index)">Supprimer</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useProjetsStore } from '../stores/projets';
  
  const projetsStore = useProjetsStore();
  const newProjet = ref({
    nom: '',
    dateDebut: '',
    dateFin: '',
  });
  
  const projets = projetsStore.$state.projets;
  
  const addProjet = () => {
    projetsStore.addProjet({ ...newProjet.value });
    newProjet.value = { nom: '', dateDebut: '', dateFin: '' };
  };
  
  const editProjet = (index) => {
    // Vous pouvez ajouter ici une logique pour éditer un projet
  };
  
  const deleteProjet = (index) => {
    projetsStore.removeProjet(index);
  };
  </script>
  