<template>
  <section>
    <v-card-title class="text-h6 mt-2 mx-2 d-flex justify-space-between align-center">
      Configurações
      <v-btn
        icon
        variant="text"
        @click="$emit('cancel')"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-divider class="my-2" />
    <div style="overflow-y: auto;">
      <v-form
        class="px-4 pt-4 mx-2 minW"
        @submit.prevent="addTask"
      >
        <p class="text-subtitle-1 pb-4">
          Adicionar uma nova tarefa
        </p>
        <v-row no-gutters>
          <v-col
            cols="12"
            md="1"
            class="d-flex justify-center pr-3"
          >
            <v-tooltip bottom>
              <template #activator="{ props }">
                <v-btn
                  :color="newTask.color"
                  size="55"
                  block
                  variant="flat"
                  class="cursor-pointer"
                  v-bind="props"
                  @click="colorDialog = true"
                >
                  <v-icon
                    size="20"
                    class="white--text"
                  >
                    mdi-palette
                  </v-icon>
                </v-btn>
              </template>
              <span>Escolher cor</span>
            </v-tooltip>
          </v-col>
          <v-dialog
            v-model="colorDialog"
            max-width="400"
            scrollable
          >
            <v-card>
              <v-card-text>
                <v-color-picker
                  v-model="newTask.color"
                  hide-inputs
                  show-swatches
                  mode="rgba"
                />
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-col
            cols="11"
            class="pr-4"
            md="7"
          >
            <v-text-field
              v-model="newTask.title"
              variant="outlined"
              label="Título"
              required
              :rules="[(v) => !!v || 'Campo obrigatório']"
            />
          </v-col>
          <v-col
            cols="6"
            class="pr-4"
            md="1"
          >
            <v-select
              v-model="newTask.icon"
              variant="outlined"
              label="Ícone"
              :items="iconOptions"
              item-title="label"
              item-value="value"
              return-object
              :rules="[(v) => !!v || 'Campo obrigatório']"
              required
            >
              <template #selection="{ item }">
                <v-icon class="mr-3">
                  {{ item.value }}
                </v-icon>
              </template>
              <template #item="{ props, item }">
                <v-list-item v-bind="props">
                  <template #prepend>
                    <v-icon>{{ item.value }}</v-icon>
                  </template>
                  {{ item.props.label }}
                </v-list-item>
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="6"
            md="3"
            class="pr-4"
          >
            <v-select
              v-model="newTask.type"
              variant="outlined"
              label="Tipo"
              :items="taskStore.progress"
              item-title="title"
              item-value="type"
              :rules="[(v) => !!v || 'Campo obrigatório']"
              required
            >
              <template #selection="{ item }">
                <span>{{ item.title }}</span>
              </template>
            </v-select>
          </v-col>
          <v-col
            cols="12"
            class="pr-4"
            md="5"
          >
            <v-text-field
              v-model="newTask.date"
              variant="outlined"
              label="Data"
              type="date"
              placeholder="Ex: 08:00"
              :min="today"
              :rules="[(v) => !!v || 'Campo obrigatório']"
            />
          </v-col>
          <v-col
            cols="12"
            class="pr-2"
            md="3"
          >
            <v-text-field
              v-model="newTask.location"
              variant="outlined"
              label="Local"
              placeholder="Ex: Parque"
              helper-text="Opcional"
            />
          </v-col>
          <v-col
            cols="12"
            class="pr-2"
            md="3"
          >
            <v-text-field
              v-model="newTask.description"
              variant="outlined"
              label="Observação"
              placeholder="Ex: Reunião"
              helper-text="Opcional"
            />
          </v-col>
        </v-row>
        <v-btn
          type="submit"
          color="primary"
          block
          variant="tonal"
          class="pa-4"
        >
          Adicionar Tarefa
        </v-btn>
      </v-form>
    </div>
    <app-settings-list />
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTaskStore } from "@/stores/taskStore";
import type { ITask } from "@/types/taskType";
import { NEW_OBJECTS } from "@/constants/newObjects";

defineEmits(["cancel"]);

const taskStore = useTaskStore();

const iconOptions: { label: string; value: string }[] = taskStore.icons;

const newTask = ref<ITask>({
  ...NEW_OBJECTS.TASK,
});

const addTask = () => {
  if (newTask.value.title && newTask.value.icon) {
    taskStore.createTask({ ...newTask.value });
    resetForm();
  }
};

const resetForm = () => {
  newTask.value = { ...NEW_OBJECTS.TASK };
};


const colorDialog = ref(false);

const today = new Date().toISOString().split("T")[0]

</script>

<style>
.settings-modal {
  width: 100vw;
  display: block;
  background: white;
  padding: 2em !important;
}
</style>
