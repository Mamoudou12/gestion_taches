<template>
  <div class="container mt-4">
    <h1 class="mb-4">Tâches</h1>
    <form @submit.prevent="addTache" class="mb-4">
      <div class="row g-3">
        <div class="col-md-3">
          <input v-model="newTache.nom" class="form-control" placeholder="Nom de la tâche" required />
        </div>
        <div class="col-md-4">
          <input v-model="newTache.description" class="form-control" placeholder="Description" required />
        </div>
        <div class="col-md-2">
          <input v-model="newTache.dateDebut" type="date" class="form-control" required />
        </div>
        <div class="col-md-2">
          <input v-model="newTache.dateFin" type="date" class="form-control" required />
        </div>
        <div class="col-md-3">
          <select v-model="newTache.projet" class="form-select">
            <option value="" disabled>Sélectionnez un projet</option>
            <option v-for="projet in projets" :key="projet.nom" :value="projet.nom">
              {{ projet.nom }}
            </option>
          </select>
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
        v-for="(tache, index) in taches"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div>
          <strong>{{ tache.nom }}</strong> - {{ tache.description }}
        </div>
        <div>
          <button @click="startEdit(index)" class="btn btn-sm btn-warning me-2">Modifier</button>
          <button @click="deleteTache(index)" class="btn btn-sm btn-danger">Supprimer</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useTachesStore } from '../stores/taches';
import { useProjetsStore } from '../stores/projets';

const tachesStore = useTachesStore();
const projetsStore = useProjetsStore();
const newTache = ref({
  nom: '',
  description: '',
  dateDebut: '',
  dateFin: '',
  projet: '',
});

const taches = tachesStore.$state.taches;
const projets = projetsStore.$state.projets;
const editIndex = ref(null);

const addTache = () => {
  if (editIndex.value !== null) {
    tachesStore.updateTache(editIndex.value, { ...newTache.value });
    editIndex.value = null;
  } else {
    tachesStore.addTache({ ...newTache.value });
  }
  newTache.value = { nom: '', description: '', dateDebut: '', dateFin: '', projet: '' };
};

const startEdit = (index) => {
  const tacheToEdit = taches[index];
  newTache.value = { ...tacheToEdit };
  editIndex.value = index;
};

const deleteTache = (index) => {
  tachesStore.removeTache(index);
};

onMounted(() => {
  // Charger les projets ou d'autres données nécessaires
});
</script>
