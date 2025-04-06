<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-container
        fluid
        class="text-center pa-4"
      >
        <div class="d-flex align-center justify-center mb-8">
          <v-icon
            size="26"
            class="mr-1 d-block pb-9"
          >
            mdi-circle-outline
          </v-icon>
          <h2 class="font-weight-regular new-font">
            HabitManager
          </h2>
        </div>
  
        <v-card
          class="form-card mx-auto px-6 py-8 elevation-0"
          max-width="460"
          rounded="xl"
        >
          <v-form @submit.prevent="register">
            <v-row
              dense
              class="mb-4"
            >
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="firstName"
                  label="Primeiro Nome"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  required
                />
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  v-model="lastName"
                  label="Ultimo Nome"
                  prepend-inner-icon="mdi-account"
                  variant="outlined"
                  density="comfortable"
                  hide-details
                  required
                />
              </v-col>
            </v-row>
  
            <v-text-field
              v-model="email"
              label="Email"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              density="comfortable"
              class="mb-4"
              hide-details
              required
            />
  
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="Senha"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              variant="outlined"
              density="comfortable"
              class="mb-4"
              hide-details
              required
              @click:append-inner="showPassword = !showPassword"
            />
  
            <v-text-field
              v-model="confirmPassword"
              :type="showConfirmPassword ? 'text' : 'password'"
              label="Confirmar Senha"
              prepend-inner-icon="mdi-lock-check-outline"
              :append-inner-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
              variant="outlined"
              density="comfortable"
              class="mb-4"
              hide-details
              required
              @click:append-inner="showConfirmPassword = !showConfirmPassword"
            />
  
            <v-btn
              type="submit"
              block
              color="blue-darken-2"
              size="large"
              rounded="xl"
              elevation="1"
            >
              Criar Conta
            </v-btn>
          </v-form>
  
          <div class="mt-6 text-caption">
            Já tem uma conta?
            <router-link
              to="/login"
              class="font-weight-medium text-blue"
            >
              Login
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
  