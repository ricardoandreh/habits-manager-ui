<template>
  <v-container
    fluid
    class="pa-0 pr-8 pt-2"
  >
    <v-card class="pa-4 text-center w-100 d-flex align-center justify-start" elevation="0">
      
      <v-progress-circular
        :model-value="85"
        size="80"
        width="6"
        color="black"
      >
        85%
      </v-progress-circular>
      <p class="pl-8 text-black">
        Vamos lá, você consegue!
      </p>
    </v-card>
  </v-container>
</template>
    
<script setup lang="ts"></script>

<style scoped>
</style>
    