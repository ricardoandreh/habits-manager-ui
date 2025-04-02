<template>
  <v-app-bar
    color="transparent"
    density="compact"
    class="pa-4"
    elevation="0"
  >
    <v-app-bar-title class="font-weight-regular">
      <v-icon
        size="28"
        class="mr-1 pb-1"
        color="black"
      >
        mdi-circle-outline
      </v-icon>HabitManager
    </v-app-bar-title>

    <template #append>
      <v-icon
        class="mr-2"
        size="32"
        color="black"
      >
        mdi-account-circle
      </v-icon>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup></script>

<style scoped></style>
