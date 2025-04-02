<template>
  <div
    class="ma-4 pa-4 w-100"
  >
    <app-welcome />
    <!-- crie uma grid de 2 colunas, e na segunda coluna 3 linhas -->
    <v-row
      class="mt-4"
      align="center"
      justify="space-between"
      cols="12"
      md="12"
    >
      <v-col
        class="d-flex flex-column"
        cols="12"
        md="6"
      >
        <app-task-list />
      </v-col>
      <v-col
        class="d-flex flex-column"
        cols="12"
        md="6"
      >
        <v-row
          class="mt-4"
          align="center"
          justify="space-between"
          cols="12"
          md="12"
        >
          <v-col
            class="d-flex flex-column"
            cols="12"
            md="6"
          />
          <v-col
            class="d-flex flex-column"
            cols="12"
            md="6"
          />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
