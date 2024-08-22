import { defineStore } from 'pinia';

export const useTachesStore = defineStore('taches', {
  state: () => ({
    taches: [],
  }),
  actions: {
    addTache(tache) {
      this.taches.push(tache);
    },
    updateTache(index, updatedTache) {
      this.taches[index] = updatedTache;
    },
    removeTache(index) {
      this.taches.splice(index, 1);
    },
  },
});
