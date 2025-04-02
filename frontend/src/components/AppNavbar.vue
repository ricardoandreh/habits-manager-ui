<template>
  <v-app-bar
    color="white"
    density="compact"
    class="pa-4"
    elevation="0"
  >
    <v-app-bar-title class="font-weight-regular new-font">
      <v-icon
        size="26"
        class="mr-1 pb-2"
        color="black"
      >
        mdi-circle-outline
      </v-icon>
      HabitManager
    </v-app-bar-title>

    <template #append>
      <v-tooltip
        location="bottom"
        text="Configurações"
      >
        <template #activator="{ props }">
          <v-icon
            class="mr-3 cursor-pointer"
            size="30"
            color="grey"
            v-bind="props"
            @click="isSettingsModalOpen = true"
          >
            mdi-cog
          </v-icon>
        </template>
      </v-tooltip>
      <app-modal-settings
        :is-open="isSettingsModalOpen"
        title="Configurações"
        @confirm="handleSettingsConfirm"
        @cancel="handleSettingsCancel"
      >
        <p>Configurações do sistema</p>
      </app-modal-settings>

      <v-tooltip
        location="bottom"
        text="Perfil"
      >
        <template #activator="{ props }">
          <v-icon
            class="mr-2 cursor-pointer"
            size="32"
            color="black"
            v-bind="props"
          >
            mdi-account-circle
          </v-icon>
        </template>
      </v-tooltip>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isSettingsModalOpen = ref(false);

const handleSettingsConfirm = () => {
  isSettingsModalOpen.value = false;
};

const handleSettingsCancel = () => {
  isSettingsModalOpen.value = false;
};
</script>

<style scoped></style>
