import { defineStore } from 'pinia';

export const useProjetsStore = defineStore('projets', {
  state: () => ({
    projets: [],
  }),
  actions: {
    addProjet(projet) {
      this.projets.push(projet);
    },
    updateProjet(index, updatedProjet) {
      this.projets[index] = updatedProjet;
    },
    removeProjet(index) {
      this.projets.splice(index, 1);
    },
  },
});
