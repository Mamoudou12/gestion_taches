<template>
  <div class="container mt-4">
    <h1 class="mb-4">Projets</h1>
    <form @submit.prevent="addProjet" class="mb-4">
      <div class="row g-3">
        <div class="col-md-4">
          <input v-model="newProjet.nom" class="form-control" placeholder="Nom du projet" required />
        </div>
        <div class="col-md-3">
          <input v-model="newProjet.dateDebut" type="date" class="form-control" required />
        </div>
        <div class="col-md-3">
          <input v-model="newProjet.dateFin" type="date" class="form-control" required />
        </div>
        <div class="col-md-2">
          <button type="submit" class="btn btn-primary w-100">
            {{ editIndex !== null ? 'Mettre à jour' : 'Ajouter' }}
          </button>
        </div>
      </div>
    </form>

    <ul class="list-group">
      <li
        v-for="(projet, index) in projets"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <strong>{{ projet.nom }}</strong> - {{ projet.dateDebut }} au {{ projet.dateFin }}
        </div>
        <div>
          <button @click="startEdit(index)" class="btn btn-sm btn-warning me-2">Modifier</button>
          <button @click="deleteProjet(index)" class="btn btn-sm btn-danger">Supprimer</button>
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
