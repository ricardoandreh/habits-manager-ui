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
          <h2 class="text-h5 font-weight-bold mb-6">Create Your Account</h2>
  
          <!-- Card com sombra -->
          <v-card
            class="form-card mx-auto px-6 py-8 elevation-6"
            max-width="460"
            rounded="xl"
          >
            <v-form @submit.prevent="register">
              <!-- Nome e Sobrenome -->
              <v-row dense class="mb-4">
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="firstName"
                    label="First Name"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    prepend-inner-icon="mdi-account"
                    variant="outlined"
                    density="comfortable"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
  
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
  
              <!-- Senha -->
              <v-text-field
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                label="Password"
                prepend-inner-icon="mdi-lock-outline"
                :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showPassword = !showPassword"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                hide-details
                required
              ></v-text-field>
  
              <!-- Confirmar Senha -->
              <v-text-field
                v-model="confirmPassword"
                :type="showConfirmPassword ? 'text' : 'password'"
                label="Confirm Password"
                prepend-inner-icon="mdi-lock-check-outline"
                :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append-inner="showConfirmPassword = !showConfirmPassword"
                variant="outlined"
                density="comfortable"
                class="mb-4"
                hide-details
                required
              ></v-text-field>
  
              <!-- Botão -->
              <v-btn
                type="submit"
                block
                color="blue-darken-2"
                size="large"
                rounded="xl"
                elevation="1"
              >
                Create Account
              </v-btn>
            </v-form>
  
            <!-- Login -->
            <div class="mt-6 text-caption">
              Already have an account?
              <router-link to="/login" class="font-weight-medium text-blue">
                Log in
              </router-link>
            </div>
          </v-card>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const firstName = ref('')
  const lastName = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
  
  const router = useRouter()
  
  const register = () => {
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match!")
      return
    }
  
    console.log('User created:', {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      password: password.value
    })
  
    router.push('/login')
  }
  </script>
  
  <style scoped>
  .v-main {
    min-height: 100vh;
    background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
  }
  
  a {
    text-decoration: none;
  }
  
  /* Sombra personalizada no card */
  .form-card {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  </style>
  