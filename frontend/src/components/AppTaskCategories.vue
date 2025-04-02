

<template>
  <v-container
    fluid
    class="pa-0 pr-8"
  >
    <v-card class="pa-2" elevation="0">
      <v-list>
        <v-list-item
          v-for="(progress, index) in progressData"
          :key="index"
        >
          <v-list-item-title class="pb-2">{{ progress.title }}</v-list-item-title>
          <v-progress-linear
            :model-value="progress.value"
            :color="progress.color"
            height="6"
            rounded
          />
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
    
  <script lang="ts" setup>
import { ref } from 'vue';
  
  interface Progress {
    title: string;
    value: number;
    color: string;
  }
  
  const progressData = ref<Progress[]>([
    { title: "Movimento e Vitalidade", value: 70, color: "indigo" },
    { title: "Mente Ativa e Criativa", value: 85, color: "amber" },
    { title: "Recarga e Renovação", value: 60, color: "black" },
  ]);</script>
  
  <style scoped></style>
    