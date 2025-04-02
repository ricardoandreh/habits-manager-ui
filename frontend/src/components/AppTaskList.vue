<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-card
      class="pa-4"
      elevation="0"
    >
      <v-list class="pa-0">
        <v-list-item
          v-for="(task, index) in tasks"
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
            <v-icon
              size="16"
              class="text-blue-grey"
            >
              mdi-clock
            </v-icon> {{ task.time }}
            <v-icon
              size="16"
              class="ml-2 text-orange"
            >
              mdi-map-marker
            </v-icon> {{ task.location }}
            <v-icon
              size="16"
              class="ml-2"
              :class="task.duration ? 'text-success' : 'text-blue'"
            >
              mdi-timer
            </v-icon> 
            <span v-if="task.duration">
              {{ task.duration }}
            </span>
            <span v-else>
              Sem duração
            </span>
          </v-list-item-subtitle>
    
          <template #append>
            <v-checkbox v-model="task.completed" />
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </v-container>
</template>
    
<script setup lang="ts">
    import { ref } from 'vue';
    
    interface Task {
      title: string;
      time: string;
      location: string;
      duration: string;
      icon: string;
      color: string;
      completed: boolean;
    }
    
    const tasks = ref<Task[]>([
      { title: "Morning run", time: "07:00 am", location: "Park", duration: "45min", icon: "mdi-run", color: "yellow", completed: true },
      { title: "1,5L of water daily", time: "All day", location: "Park", duration: "", icon: "mdi-water", color: "cyan-darken-1", completed: true },
      { title: "Lunch with friends", time: "12:00 pm", location: "Restaurant", duration: "1h", icon: "mdi-food-fork-drink", color: "green", completed: false },
      { title: "Gym session", time: "06:00 pm", location: "Gym", duration: "1h", icon: "mdi-dumbbell", color: "red", completed: false },
      { title: "Dinner with family", time: "08:00 pm", location: "Home", duration: "", icon: "mdi-home-variant-outline", color: "purple", completed: false },
    ]);
</script>

<style scoped>
</style>
