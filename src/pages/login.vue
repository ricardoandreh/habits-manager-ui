<template>
    <v-app>
      <v-main class="d-flex align-center justify-center">
        <v-container fluid class="text-center">
          <!-- Logo -->
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-blue.png"
            max-width="50"
            class="mx-auto mb-4"
          ></v-img>
  
          <!-- Título -->
          <h2 class="font-weight-bold mb-6">Log into your account</h2>
  
          <v-card class="mx-auto px-4 py-6" max-width="400" flat>
  
            <v-form @submit.prevent="login">
              <!-- Email -->
              <v-text-field
                v-model="email"
                label="Email"
                variant="outlined"
                density="comfortable"
                class="mb-3"
                hide-details
                required
              ></v-text-field>
  
              <!-- Password -->
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                variant="outlined"
                density="comfortable"
                class="mb-3"
                hide-details
                required
              ></v-text-field>
  
              <!-- Remember + Forgot -->
              <div class="d-flex justify-space-between align-center mb-4">
                <v-checkbox
                  v-model="remember"
                  label="Remember me"
                  hide-details
                  density="compact"
                ></v-checkbox>
                <a href="#" class="text-caption font-weight-medium">Forgot password?</a>
              </div>
  
              <!-- Botão -->
              <v-btn type="submit" block color="blue-darken-2" size="large" rounded>
                Log In
              </v-btn>
            </v-form>
  
            <!-- Sign up -->
            <div class="mt-6 text-caption">
              Don't have an account?
              <a href="#" class="font-weight-medium">Sign up</a>
            </div>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const email = ref('')
  const password = ref('')
  const remember = ref(false)
  
  const login = () => {
    console.log('Login:', { email: email.value, password: password.value, remember: remember.value })
    // Aqui você pode redirecionar ou chamar uma API
  }
  </script>
  
  <style scoped>
  .v-main {
    min-height: 100vh;
    background-color: #fff;
  }
  </style>
  