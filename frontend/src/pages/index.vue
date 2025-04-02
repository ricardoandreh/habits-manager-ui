<template>
  <v-container
    :style="{ maxWidth: '100%', width: '800px' }"
    class="mx-auto"
  >
    <v-card-title class="text-h4 pl-0">
      Lista de Tarefas
    </v-card-title>
    <v-card-subtitle class="text-caption-2 pl-0 pt-1">
      Adicione suas tarefas e marque-as como concluídas
    </v-card-subtitle>

    <v-divider class="my-4" />

    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <v-text-field
          v-bind="props"
          v-model="newTask"
          label="Nova Tarefa"
          append-inner-icon="mdi-plus"
          variant="outlined"
          @keyup.enter="addTask"
          @click:append-inner="addTask"
        />
      </template>
      <span>Digite uma nova tarefa e pressione Enter ou clique no ícone para adicionar</span>
    </v-tooltip>
        
    <v-list>
      <v-list-item
        v-for="(task, index) in tasks"
        :key="index"
        class="pa-0"
      >
        <template #default>
          <div
            class="d-flex align-start justify-start py-0"
            style="align-items: center"
          >
            <v-checkbox
              v-model="task.completed"
              :class="{ 'text-disabled': task.completed }"
              :label="task.content"
              @change="updateTask(task)"
            />
            <v-tooltip location="bottom">
              <template #activator="{ props }">
                <v-btn
                  v-bind="props"
                  icon="mdi-delete"
                  color="red"
                  variant="text"
                  class="ml-auto d-block"
                  :class="{ 'text-red-100': task.completed }"
                  @click="removeTask(task)"
                />
              </template>
              <span>Remover esta tarefa</span>
            </v-tooltip>
          </div>
        </template>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import type { ITask } from "@/types/taskType";

const taskStore = useTaskStore();

const newTask = ref("");
const tasks = ref(taskStore.tasks);

const addTask = () => {
  if (newTask.value.trim() === "") return;
  taskStore.createTask({
    content: newTask.value,
    completed: false,
  })
  newTask.value = "";
};

const removeTask = (task: ITask) => {
  taskStore.deleteTask(task);
};

const updateTask = (task: ITask) => {
  taskStore.updateTask(task, {
    ...task,
    completed: !task.completed,
  });
};
</script>

<style scoped>
.v-container {
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

.text-red-100 {
  color: rgba(255, 0, 0, 0.39) !important;
}
</style>
