<template>
    <v-app>
      <v-main class="d-flex align-center justify-center">
        <v-container fluid class="text-center pa-4">
          <!-- Logo -->
          <v-img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-blue.png"
            max-width="60"
            class="mx-auto mb-6"
          ></v-img>
  
          <!-- Título -->
          <h2 class="text-h5 font-weight-bold mb-6">Welcome Back</h2>
  
          <!-- Card -->
          <v-card
            class="mx-auto px-6 py-8 elevation-3"
            max-width="420"
            rounded="xl"
          >
            <v-form @submit.prevent="login">
              <!-- Email -->
              <v-text-field
                v-model="email"
                label="Email"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                hide-details
                required
              ></v-text-field>
  
              <!-- Password -->
              <v-text-field
                v-model="password"
                label="Password"
                prepend-inner-icon="mdi-lock-outline"
                type="password"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                hide-details
                required
              ></v-text-field>
  
              <!-- Remember + Forgot -->
              <div class="d-flex justify-space-between align-center mb-5">
                <v-checkbox
                  v-model="remember"
                  label="Remember me"
                  hide-details
                  density="compact"
                  class="ma-0"
                ></v-checkbox>
                <a href="#" class="text-caption font-weight-medium text-blue">Forgot password?</a>
              </div>
  
              <!-- Botão -->
              <v-btn
                type="submit"
                block
                color="blue-darken-2"
                size="large"
                rounded="xl"
                elevation="1"
              >
                Log In
              </v-btn>
            </v-form>
  
            <!-- Sign up -->
            <div class="mt-6 text-caption">
              Don't have an account?
              <a href="#" class="font-weight-medium text-blue">Sign up</a>
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
    console.log('Login:', {
      email: email.value,
      password: password.value,
      remember: remember.value,
    })
  }
  </script>
  
  <style scoped>
  .v-main {
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa, #e4ecf7);
  }
  a {
    text-decoration: none;
  }
  </style>
  