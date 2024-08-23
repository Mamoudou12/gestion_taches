<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 display-4 text-primary fw-bold">
      🌟 Gestion des Projets 🌟
    </h1>
    
    <form @submit.prevent="addProjet" class="p-4 rounded shadow-sm bg-light">
      <div class="row g-3">
        <div class="col-md-4">
          <input
            v-model="newProjet.nom"
            class="form-control form-control-lg border-primary"
            placeholder="Nom du projet"
            required
          />
        </div>
        <div class="col-md-3">
          <input
            v-model="newProjet.dateDebut"
            type="date"
            class="form-control form-control-lg border-primary"
            required
          />
        </div>
        <div class="col-md-3">
          <input
            v-model="newProjet.dateFin"
            type="date"
            class="form-control form-control-lg border-primary"
            required
          />
        </div>
        <div class="col-md-2">
          <button
            type="submit"
            class="btn btn-success w-100 btn-lg"
          >
            {{ editIndex !== null ? '⚡️ Mettre à jour ⚡️' : '🚀 Ajouter 🚀' }}
          </button>
        </div>
      </div>
    </form>

    <ul class="list-group mt-4">
      <li
        v-for="(projet, index) in projets"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center border-0 bg-transparent"
      >
        <div class="text-dark">
          <strong>{{ projet.nom }}</strong> - {{ projet.dateDebut }} au {{ projet.dateFin }}
        </div>
        <div>
          <button @click="startEdit(index)" class="btn btn-sm btn-outline-warning me-2">✏️ Modifier</button>
          <button @click="deleteProjet(index)" class="btn btn-sm btn-outline-danger">🗑️ Supprimer</button>
        </div>
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
const editIndex = ref(null);

const addProjet = () => {
  if (editIndex.value !== null) {
    projetsStore.updateProjet(editIndex.value, { ...newProjet.value });
    editIndex.value = null;
  } else {
    projetsStore.addProjet({ ...newProjet.value });
  }
  newProjet.value = { nom: '', dateDebut: '', dateFin: '' };
};

const startEdit = (index) => {
  const projetToEdit = projets[index];
  newProjet.value = { ...projetToEdit };
  editIndex.value = index;
};

const deleteProjet = (index) => {
  projetsStore.removeProjet(index);
};
</script>

<style scoped>
/* Aucun style CSS personnalisé */
</style>
