<template>
    <v-app>
      <v-main class="d-flex align-center justify-center">
        <v-container fluid class="text-center py-10">
          <!-- Logo -->
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-blue.png"
            max-width="60"
            class="mx-auto mb-6"
          ></v-img>
  
          <!-- Título -->
          <h2 class="font-weight-bold text-h5 mb-6">Log into your account</h2>
  
          <!-- Card -->
          <v-card
            class="mx-auto px-6 py-8 rounded-xl elevation-10"
            max-width="420"
            color="white"
          >
            <v-form @submit.prevent="login">
              <!-- Email -->
              <v-text-field
                v-model="email"
                label="Email"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                color="primary"
                required
              ></v-text-field>
  
              <!-- Password com botão de visualização -->
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                color="primary"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                required
              ></v-text-field>
  
              <!-- Remember + Forgot -->
              <div class="d-flex justify-space-between align-center mb-6">
                <v-checkbox
                  v-model="remember"
                  label="Remember me"
                  hide-details
                  density="compact"
                ></v-checkbox>
                <a
                  href="#"
                  class="text-caption font-weight-medium text-blue-darken-2"
                >
                  Forgot password?
                </a>
              </div>
  
              <!-- Botão -->
              <v-btn
                type="submit"
                block
                color="primary"
                size="large"
                rounded="xl"
                class="mb-4"
              >
                Log In
              </v-btn>
            </v-form>
  
            <!-- Sign up -->
            <div class="mt-4 text-caption">
              Don't have an account?
              <router-link
                to="/user"
                class="font-weight-medium text-blue-darken-2"
              >
                Sign up
              </router-link>
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
  const showPassword = ref(false)
  
  const login = () => {
    console.log('Login:', {
      email: email.value,
      password: password.value,
      remember: remember.value
    })
    // Aqui você pode redirecionar ou chamar uma API
  }
  </script>
  
  <style scoped>
  .v-main {
    min-height: 100vh;
    background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
  }
  
  .v-card {
    transition: box-shadow 0.3s ease;
  }
  </style>
  