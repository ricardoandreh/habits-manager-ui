<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-container
        fluid
        class="text-center"
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
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="email"
              label="Email"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              hide-details
              required
            />

            <v-text-field
              v-model="password"
              label="Senha"
              type="password"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              hide-details
              required
            />

            <div class="d-flex justify-space-between align-center mb-4">
              <v-checkbox
                v-model="remember"
                label="Lembrar de mim"
                color="blue-darken-2"
                hide-details
                density="compact"
              />
            </div>

            <v-btn
              type="submit"
              block
              color="blue-darken-2"
              size="large"
              rounded
            >
              Entrar
            </v-btn>
          </v-form>

          <div class="mt-6 text-caption">
            Não tem uma conta?
            <a
              href="#"
              class="font-weight-medium"
            >Criar conta</a>
          </div>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const email = ref("");
const password = ref("");
const remember = ref(false);

const login = () => {
  console.log("Login:", {
    email: email.value,
    password: password.value,
    remember: remember.value,
  });
};
</script>

<style scoped>
.v-main {
    min-height: 100vh;
    background: linear-gradient(135deg, #E3F2FD, #BBDEFB);
  }
</style>
