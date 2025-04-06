<template>
  <v-footer
    height="70"
    class="bg-transparent mt-16 mb-6"
  >
    <div class="d-flex flex-column align-center justify-center w-100">
      <div class="text-caption text-grey-darken-2 font-weight-medium">
        Projeto Frontend - DEVOPS
      </div>
      <v-tooltip location="top" text="Melhor Equipe">
        <template #activator="{ props }">
          <span
            class="d-block text-caption text-grey pt-1"
            v-bind="props"
            style="cursor: pointer"
          >
            Albano, Ricardo, Gomes e Paulão
          </span>
        </template>
      </v-tooltip>
    </div>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped>
</style>
