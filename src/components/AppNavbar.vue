<template>
  <v-app-bar
    :color="isDark ? 'grey-darken-4' : 'white'"
    density="compact"
    class="pa-4"
    elevation="0"
  >
    <v-app-bar-title class="font-weight-regular new-font">
      <v-icon
        size="26"
        class="mr-1 pb-2"
        :color="isDark ? 'white' : 'black'"
      >
        mdi-circle-outline
      </v-icon>
      <span :class="isDark ? 'text-white' : 'text-black'">HabitManager</span>
    </v-app-bar-title>

    <template #append>
      <!-- 🌗 Switch para Dark Mode -->
      <v-switch
        v-model="isDark"
        hide-details
        inset
        density="compact"
        class="mr-2"
        :color="isDark ? 'white' : 'black'"
        :label="isDark ? '🌙' : '☀️'"
      />

      <v-tooltip location="bottom" text="Configurações">
        <template #activator="{ props }">
          <v-icon
            class="mr-3 cursor-pointer"
            size="30"
            :color="isDark ? 'grey-lighten-2' : 'grey'"
            v-bind="props"
            @click="isSettingsModalOpen = true"
          >
            mdi-cog
          </v-icon>
        </template>
      </v-tooltip>

      <v-tooltip location="bottom" text="Perfil">
        <template #activator="{ props }">
          <v-icon
            class="mr-2 cursor-pointer"
            size="32"
            :color="isDark ? 'white' : 'black'"
            v-bind="props"
          >
            mdi-account-circle
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
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const isSettingsModalOpen = ref(false)

const handleSettingsCancel = ($event: boolean) => {
  isSettingsModalOpen.value = $event
}

// 🌙 Dark Mode Toggle
const theme = useTheme()
const isDark = ref(theme.global.current.value.dark)

watch(isDark, (val) => {
  theme.global.name.value = val ? 'dark' : 'light'
})
</script>

<style scoped></style>
