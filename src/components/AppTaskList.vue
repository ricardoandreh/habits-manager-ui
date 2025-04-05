<template>
  <v-container fluid class="pa-0">
    <v-card
      class="pa-6"
      elevation="1"
      color="light-blue-lighten-5"
      rounded="xl"
    >
      <v-list v-if="taskStore.tasks.length > 0" class="bg-transparent">
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="index"
          class="px-0 mb-4 rounded-lg"
        >
          <!-- Avatar -->
          <template #prepend>
            <v-avatar :color="task.color" size="44" class="me-4">
              <v-icon size="24">{{ task.icon.value }}</v-icon>
            </v-avatar>
          </template>

          <!-- Title and Info -->
          <v-list-item-content>
            <v-list-item-title class="text-body-1 font-weight-medium mb-1">
              {{ task.title }}
            </v-list-item-title>

            <v-list-item-subtitle class="text-medium-emphasis text-sm">
              <span v-if="task.time">
                <v-icon size="18" class="mr-1 text-blue-grey">mdi-clock</v-icon>
                {{ task.time }}
              </span>
              <span v-if="task.location">
                <v-icon size="18" class="ml-4 mr-1 text-orange">mdi-map-marker</v-icon>
                {{ task.location }}
              </span>
              <span v-if="task.duration">
                <v-icon size="18" class="ml-4 mr-1 text-success">mdi-timer</v-icon>
                {{ task.duration }}
              </span>
              <span v-else>
                <v-icon size="18" class="ml-4 mr-1 text-blue">mdi-timer</v-icon>
                Sem duração
              </span>
            </v-list-item-subtitle>
          </v-list-item-content>

          <!-- Checkbox -->
          <template #append>
            <v-tooltip location="bottom" text="Marcar como concluído">
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

      <!-- Empty State -->
      <div
        v-else
        class="d-flex flex-column justify-center align-center text-center text-body-1 text-medium-emphasis"
        style="min-height: 400px;"
      >
        <v-icon size="56" class="mb-2 text-brown-lighten-2">mdi-package-variant</v-icon>
        <div>
          Nenhum hábito cadastrado.<br />
          Toque no botão de configurações para adicionar seus hábitos.
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'

const taskStore = useTaskStore()
</script>

<style scoped>
</style>
