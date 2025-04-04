<template>
  <section class="px-3 pb-6 mx-2">
    <p class="text-center text-h5 font-weight-regular my-8">Preview da lista de hábitos</p>
    <v-divider class="mt-3 mb-1" />
    <v-data-table
      :items="taskStore.tasks"
      :headers="headers"
      hide-default-header
      items-per-page="-1"
      hide-default-footer
    >
      <template #item="{ item, index }">
        <tr>
          <td>
            <v-btn
              icon
              variant="flat"
              :color="item.color"
              size="extra-small"
            >
              <v-icon class="pa-5">
                {{ item.icon.value }}
              </v-icon>
            </v-btn>
          </td>
          <td class="font-weight-bold">
            {{ item.title }}
          </td>
          <td>
            <span v-if="item.time">
              <v-icon
                size="16"
                class="text-blue-grey"
              >mdi-clock</v-icon>
              {{ item.time }}
            </span>
            <span v-else>
              --
            </span>
          </td>
          <td>
            <span v-if="item.location">
              <v-icon
                size="16"
                class="text-orange"
              >mdi-map-marker</v-icon>
              {{ item.location }}
            </span>
            <span v-else>
              --
            </span>
          </td>
          <td>
            <span v-if="item.duration">
              <v-icon
                size="16"
                class="text-success"
              >mdi-timer</v-icon>
              {{ item.duration }}
            </span>
            <span v-else>
              --
            </span>
          </td>
          <td class="d-flex justify-end align-center">
            <v-tooltip bottom>
              <template #activator="{ props }">
                <v-btn
                  icon
                  size="small"
                  class="mr-2"
                  color="red"
                  variant="tonal"
                  v-bind="props"
                  @click="removeTask(index)"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </template>
              <span>Excluir Tarefa</span>
            </v-tooltip>
          </td>
        </tr>
      </template>
    </v-data-table>
  </section>
</template>

<script setup lang="ts">
import { useTaskStore } from "@/stores/taskStore";

const taskStore = useTaskStore();

const removeTask = (index: number) => {
  taskStore.tasks.splice(index, 1);
};

const headers = [
  { title: "", value: "icon" },
  { title: "", value: "title" },
  { title: "", value: "time" },
  { title: "", value: "location" },
  { title: "", value: "duration" },
  { title: "", value: "actions" },
]
</script>
