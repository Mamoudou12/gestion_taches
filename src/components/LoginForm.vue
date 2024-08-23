<template>
    <div class="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-md-10 col-sm-12">
          <div class="card shadow-lg border-0">
            <div class="card-body p-5">
              <h3 class="card-title text-center mb-4 text-primary fw-bold">Bienvenue !</h3>
              <form @submit.prevent="handleSubmit">
                <div class="mb-4">
                  <label for="email" class="form-label fs-5">Email</label>
                  <input type="email" id="email" class="form-control form-control-lg rounded-pill border-primary" v-model="email" required />
                </div>
                <div class="mb-4">
                  <label for="password" class="form-label fs-5">Mot de passe</label>
                  <input type="password" id="password" class="form-control form-control-lg rounded-pill border-primary" v-model="password" required />
                </div>
                <button type="submit" class="btn btn-primary btn-lg w-100 rounded-pill">Se connecter</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  const handleSubmit = () => {
    console.log('Email:', email.value);
    console.log('Mot de passe:', password.value);
  };
  </script>
  
  <style scoped>
  /* Utilisation de Bootstrap uniquement */
  .card {
    border-radius: 1rem;
    background-color: #f9f9f9; /* Couleur de fond plus douce pour l'esthétique */
  }
  </style>
  