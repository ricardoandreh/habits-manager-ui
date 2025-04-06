<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="pa-6"
      elevation="0"
      :color="authStore.isDarkMode ? 'blue-lighten-4' : 'light-blue-lighten-5'"
      rounded="xl"
    >
      <v-list
        v-if="taskStore.tasks.length > 0"
        class="bg-transparent"
      >
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="index"
          class="px-0 mb-4 rounded-lg"
        >
          <template #prepend>
            <v-avatar
              :color="task.color"
              size="44"
              class="me-4"
            >
              <v-icon size="24">
                {{ task.icon.value }}
              </v-icon>
            </v-avatar>
          </template>

          <v-list-item-content>
            <v-list-item-title class="text-body-1 font-weight-medium mb-1">
              {{ task.title }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-medium-emphasis text-sm">
              <span
                v-if="task.date"
                :class="authStore.isDarkMode ? 'text-black' : 'text-blue-grey'"
              >
                <v-icon
                  size="18"
                  class="mr-1 text-blue"
                >mdi-calendar</v-icon>
                {{ task.date }}
              </span>
              <span
                v-if="task.location"
                :class="authStore.isDarkMode ? 'text-black' : 'text-blue-grey'"
              >
                <v-icon
                  size="18"
                  class="ml-4 mr-1 text-orange"
                >mdi-map-marker</v-icon>
                {{ task.location }}
              </span>
              <span
                v-if="task.description"
                :class="authStore.isDarkMode ? 'text-black' : 'text-blue-grey'"
              >
                <v-icon
                  size="18"
                  class="ml-4 mr-1 text-blue-grey"
                >mdi-comment-text-outline</v-icon>
                {{ task.description }}
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <template #append>
            <v-tooltip
              location="bottom"
              text="Marcar como concluído"
            >
              <template #activator="{ props }">
                <v-checkbox
                  v-bind="props"
                  v-model="task.completed"
                  density="compact"
                  hide-details
                  class="ml-2"
                />
              </template>
            </v-tooltip>
          </template>
        </v-list-item>
      </v-list>

      <div
        v-else
        class="d-flex flex-column justify-center align-center text-center text-body-1 text-medium-emphasis"
        style="min-height: 400px;"
      >
        <v-icon
          size="56"
          class="mb-2 text-brown-lighten-2"
        >
          mdi-package-variant
        </v-icon>
        <div class="text-brown">
          Nenhum hábito cadastrado.<br>
          Toque no botão de configurações para adicionar seus hábitos.
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { useAuthStore } from '@/stores/authStore';

const taskStore = useTaskStore()
const authStore = useAuthStore()
</script>

<style scoped>
</style>
