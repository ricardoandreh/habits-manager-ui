<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="pa-4"
      elevation="0"
      color="light-blue-lighten-5" 
      rounded="xl"
    >
      <v-list class="pa-0 bg-transparent">
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="index"
          class="px-0"
        >
          <template #prepend>
            <v-avatar
              :color="task.color"
              size="40"
            >
              <v-icon>{{ task.icon }}</v-icon>
            </v-avatar>
          </template>
          <v-list-item-title class="pb-1">
            {{ task.title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            <span v-if="task.time">
              <v-icon
                size="16"
                class="text-blue-grey"
              >mdi-clock</v-icon>
              {{ task.time }}
            </span>
            <span v-if="task.location">
              <v-icon
                size="16"
                class="ml-2 text-orange"
              >mdi-map-marker</v-icon>
              {{ task.location }}
            </span>
            <span v-if="task.duration">
              <v-icon
                size="16"
                class="ml-2 text-success"
              >mdi-timer</v-icon>
              {{ task.duration }}
            </span>
            <span v-else>
              <v-icon
                size="16"
                class="ml-2 text-blue"
              >mdi-timer</v-icon>
              Sem duração
            </span>
          </v-list-item-subtitle>
    
          <template #append>
            <v-tooltip
              location="bottom"
              text="Marcar como concluído"
            >
              <template #activator="{ props }">
                <v-checkbox
                  v-bind="props"
                  v-model="task.completed"
                />
              </template>
            </v-tooltip>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
    
<script setup lang="ts">
  import { useTaskStore } from '@/stores/taskStore';

  const taskStore = useTaskStore();
</script>

<style scoped>
</style>
