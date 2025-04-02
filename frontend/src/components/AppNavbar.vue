<template>
  <nav class="app-navbar">
    <div class="navbar-content">
      <div class="d-flex align-center">
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <v-icon
              v-bind="props"
              color="blue"
              size="44"
              icon="mdi-account-circle"
              @click="toggleDropdown"
            />
          </template>
          <span>Ir para conta do usuário</span>
        </v-tooltip>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const dropdownOpen = ref(false);

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};
</script>

<style scoped>
.app-navbar {
  display: flex;
  justify-content: flex-end;
  padding: 2em;
  background-color: transparent;
}
</style>
