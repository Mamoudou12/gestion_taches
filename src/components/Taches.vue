<template>
  <div>
    <h1>Tâches</h1>
    <form @submit.prevent="addTache">
      <input v-model="newTache.nom" placeholder="Nom de la tâche" required />
      <input v-model="newTache.description" placeholder="Description" required />
      <input v-model="newTache.dateDebut" type="date" required />
      <input v-model="newTache.dateFin" type="date" required />
      <select v-model="newTache.projet">
        <option v-for="projet in projets" :key="projet.nom" :value="projet.nom">
          {{ projet.nom }}
        </option>
      </select>
      <button type="submit">{{ editIndex !== null ? 'Mettre à jour' : 'Ajouter' }}</button>
    </form>

    <ul>
      <li v-for="(tache, index) in taches" :key="index">
        {{ tache.nom }} - {{ tache.description }}
        <button @click="startEdit(index)">Modifier</button>
        <button @click="deleteTache(index)">Supprimer</button>
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
