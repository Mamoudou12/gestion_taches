<template>
    <ul class="list-group mt-4">
      <ProjetItem
        v-for="(projet, index) in projets"
        :key="index"
        :projet="projet"
        @editProjet="() => $emit('editProjet', index)"
        @deleteProjet="() => $emit('deleteProjet', index)"
      />
    </ul>
  </template>
  
  <script setup>
  import ProjetItem from './ProjetItem.vue';
  
  const props = defineProps({
    projets: Array,
  });
  
  const emit = defineEmits(['editProjet', 'deleteProjet']);
  </script>
  
  <style scoped>
  /* Aucun style CSS personnalisé */
  </style>
  