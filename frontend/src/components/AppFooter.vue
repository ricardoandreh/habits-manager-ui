<template>
  <v-footer
    height="60"
    app
    class="bg-transparent"
  >
    <div
      class="d-flex justify-end ga-2 pa-4"
      style="position: absolute; right: 16px"
    >
      <v-tooltip
        location="top"
        text="Tarefas Pendentes"
      >
        <template #activator="{ props }">
          <div v-bind="props" class="d-flex align-center ga-2">
            <v-icon
              color="blue"
              size="32"
              icon="mdi-circle-outline"
            />
            <span class="text-h5 text-blue">
              {{ taskStore.incompletedTasks.length }}
            </span>
          </div>
        </template>
      </v-tooltip>
      <v-tooltip
        location="top"
        text="Tarefas Concluídas"
      >
        <template #activator="{ props }">
          <div v-bind="props" class="d-flex align-center ga-2">
            <v-icon
              color="green"
              size="32"
              icon="mdi-check-circle-outline"
            />
            <span class="text-h5 text-green">
              {{ taskStore.completedTasks.length }}
            </span>
          </div>
        </template>
      </v-tooltip>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
</script>

<style scoped lang="css"></style>
