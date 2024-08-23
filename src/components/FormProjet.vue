<template>
    <form @submit.prevent="submitProjet" class="p-4 rounded shadow-sm bg-light">
      <div class="row g-3">
        <div class="col-md-4">
          <input
            v-model="projet.nom"
            class="form-control form-control-lg border-primary"
            placeholder="Nom du projet"
            required
          />
        </div>
        <div class="col-md-3">
          <input
            v-model="projet.dateDebut"
            type="date"
            class="form-control form-control-lg border-primary"
            required
          />
        </div>
        <div class="col-md-3">
          <input
            v-model="projet.dateFin"
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
            {{ isEdit ? '⚡️ Mettre à jour ⚡️' : '🚀 Ajouter 🚀' }}
          </button>
        </div>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps({
    projet: Object,
    isEdit: Boolean,
  });
  
  const emit = defineEmits(['submitProjet']);
  const projet = ref({ ...props.projet });
  
  watch(() => props.projet, (newProjet) => {
    projet.value = { ...newProjet };
  });
  
  const submitProjet = () => {
    emit('submitProjet', { ...projet.value });
  };
  </script>
  
  <style scoped>
  /* Aucun style CSS personnalisé */
  </style>
  