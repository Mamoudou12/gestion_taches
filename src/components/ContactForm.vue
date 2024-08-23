<!-- src/views/ContactForm.vue -->
<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Contactez-nous</h2>
      <form class="p-4 rounded shadow-sm bg-light">
        <!-- Champ Question -->
        <div class="mb-3">
          <label for="question" class="form-label">Posez votre question</label>
          <textarea id="question" class="form-control" rows="4" placeholder="Posez votre question ici..." required></textarea>
        </div>
  
        <!-- Champ Suggestion -->
        <div class="mb-3">
          <label for="suggestion" class="form-label">Faites une suggestion</label>
          <textarea id="suggestion" class="form-control" rows="4" placeholder="Votre suggestion ici..." required></textarea>
        </div>
  
        <!-- Champ Commentaire -->
        <div class="mb-3">
          <label for="commentaire" class="form-label">Laissez un commentaire</label>
          <textarea id="commentaire" class="form-control" rows="4" placeholder="Votre commentaire ici..." required></textarea>
        </div>
  
        <!-- Champ Appréciation -->
        <div class="mb-3">
          <label for="appreciation" class="form-label">Donnez-nous votre appréciation</label>
          <select id="appreciation" class="form-select" required>
            <option value="" disabled selected>Choisissez une option</option>
            <option value="excellent">Excellent</option>
            <option value="bon">Bon</option>
            <option value="moyen">Moyen</option>
            <option value="mauvais">Mauvais</option>
          </select>
        </div>
  
        <!-- Bouton de Soumission -->
        <div class="text-center">
          <button type="submit" class="btn btn-primary btn-lg">Envoyer</button>
        </div>
      </form>
    </div>
  </template>
  