<template>
  <app-navbar />
  <div
    class="ma-4 pa-4 width-container"
  >
    <app-welcome />
    <v-row
      class="mt-4"
      align="start"
      justify="space-between"
      cols="12"
      md="12"
    >
      <v-col
        class="d-flex flex-column"
        cols="12"
        md="7"
      >
        <app-task-list />
      </v-col>
      <v-col
        class="d-flex flex-column align-start justify-start"
        cols="12"
        md="5"
      >
        <app-content-ia />
        <app-task-categories />
        <app-task-progress />
      </v-col>
    </v-row>
  </div>
  <app-footer />
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
