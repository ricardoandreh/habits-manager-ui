<template>
  <v-app-bar
    :color="authStore.isDarkMode ? 'grey-darken-4' : 'white'"
    density="compact"
    class="pa-4"
    elevation="0"
  >
    <v-app-bar-title class="font-weight-regular new-font logo">
      <v-icon
        size="26"
        class="mr-1 pb-2"
        :color="authStore.isDarkMode ? 'white' : 'black'"
      >
        mdi-circle-outline
      </v-icon>
      <span :class="authStore.isDarkMode ? 'text-white' : 'text-black'">HabitManager</span>
    </v-app-bar-title>

    <template #append>
      <v-icon
        size="26"
        class="mr-2"
        :color="authStore.isDarkMode ? 'yellow' : 'orange'"
      >
        {{ authStore.isDarkMode ? 'mdi-moon-waning-crescent' : 'mdi-white-balance-sunny' }}
      </v-icon>
      <v-switch
        :model-value="authStore.isDarkMode"
        hide-details
        inset
        density="compact"
        class="mr-2"
        :color="authStore.isDarkMode ? 'white' : 'black'"
        @update:model-value="authStore.toggleDarkMode"
      />

      <v-tooltip
        location="bottom"
        text="Configurações"
      >
        <template #activator="{ props }">
          <v-icon
            class="mr-3 cursor-pointer"
            size="30"
            :color="authStore.isDarkMode ? 'grey-lighten-2' : 'grey'"
            v-bind="props"
            @click="isSettingsModalOpen = true"
          >
            mdi-cog
          </v-icon>
        </template>
      </v-tooltip>

      <v-tooltip
        location="bottom"
        text="Logout"
      >
        <template #activator="{ props }">
          <v-icon
            class="mr-2 cursor-pointer"
            size="32"
            :color="authStore.isDarkMode ? 'red' : 'red'"
            v-bind="props"
          >
            mdi-logout
          </v-icon>
        </template>
      </v-tooltip>
    </template>

    <app-modal-settings
      :is-open="isSettingsModalOpen"
      title="Configurações"
      @update="handleSettingsCancel"
    />
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/authStore'

const authStore = useAuthStore()
const isSettingsModalOpen = ref(false)

const handleSettingsCancel = ($event: boolean) => {
  isSettingsModalOpen.value = $event
}
</script>

<style scoped>

.logo {
  display: none !important;
}

@media screen and (min-width: 600px) {
  .logo {
    display: flex !important;
  }
}

</style>
