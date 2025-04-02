<template>
  <v-footer
    height="60"
    class="bg-transparent mt-4"
  >
    <div
      class="d-flex flex-column align-center justify-center w-100"
    >
      <div
        class="text-caption-2"
        v-bind="props"
      >
        Projeto Frontend - DEVOPS
      </div>
      <v-tooltip
        location="top"
        text="Melhor Equipe"
      >
        <template #activator="{ props }">
          <span
            class="d-block text-caption text-disabled pt-1"
            v-bind="props"
          >
            Albano, Ricardo, Gomes e Paulão
          </span>
        </template>
      </v-tooltip>
    </div>
  </v-footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="css"></style>
