<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 display-4 text-primary fw-bold">
      📝 Gestion des Tâches 📝
    </h1>
    
    <form @submit.prevent="addTache" class="p-4 rounded shadow-sm bg-light">
      <div class="row g-3">
        <div class="col-md-4">
          <input
            v-model="newTache.nom"
            class="form-control form-control-lg border-primary"
            placeholder="Nom de la tâche"
            required
          />
        </div>
        <div class="col-md-4">
          <input
            v-model="newTache.description"
            class="form-control form-control-lg border-primary"
            placeholder="Description"
            required
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="newTache.dateDebut"
            type="date"
            class="form-control form-control-lg border-primary"
            required
          />
        </div>
        <div class="col-md-2">
          <input
            v-model="newTache.dateFin"
            type="date"
            class="form-control form-control-lg border-primary"
            required
          />
        </div>
        <div class="col-md-4">
          <select
            v-model="newTache.projet"
            class="form-select form-select-lg border-primary"
            required
          >
            <option value="" disabled selected>Choisir un projet</option>
            <option v-for="projet in projets" :key="projet.nom" :value="projet.nom">
              {{ projet.nom }}
            </option>
          </select>
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
        v-for="(tache, index) in taches"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center border-0 bg-transparent"
      >
        <div class="text-dark">
          <strong>{{ tache.nom }}</strong> - {{ tache.description }} ({{ tache.dateDebut }} - {{ tache.dateFin }})
        </div>
        <div>
          <button @click="startEdit(index)" class="btn btn-sm btn-outline-warning me-2">✏️ Modifier</button>
          <button @click="deleteTache(index)" class="btn btn-sm btn-outline-danger">🗑️ Supprimer</button>
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
    // Mise à jour d'une tâche existante
    tachesStore.updateTache(editIndex.value, { ...newTache.value });
    editIndex.value = null;
  } else {
    // Ajout d'une nouvelle tâche
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

<style scoped>
/* Aucun style CSS personnalisé */
</style>
