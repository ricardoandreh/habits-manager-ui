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
import { onMounted } from 'vue'
import { useAuthStore } from '@/stores/authStore'
import { useRouter } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()

onMounted(() => {
  if (authStore.checkUserLoggedIn()) {
    router.push('/')
  } else {
    router.push('/login')
  }
})
</script>

<style scoped>

</style>
