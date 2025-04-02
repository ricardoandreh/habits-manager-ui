<template>
  <v-dialog
    v-model="localIsOpen"
    max-width="500"
  >
    <v-card>
      <v-card-title>
        <span class="text-h6">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <slot />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          color="grey"
          variant="text"
          @click="onCancel"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="blue"
          variant="tonal"
          @click="onConfirm"
        >
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
  
<script lang="ts" setup>
  import { ref, watch } from 'vue';
  
  const props = defineProps<{
    isOpen: boolean;
    title: string;
  }>();
  
  const emit = defineEmits<{
    (e: 'update:isOpen', value: boolean): void;
    (e: 'confirm'): void;
    (e: 'cancel'): void;
  }>();
  
  const localIsOpen = ref(props.isOpen);
  
  watch(() => props.isOpen, (newValue) => {
    localIsOpen.value = newValue;
  });
  
  watch(localIsOpen, (newValue) => {
    emit('update:isOpen', newValue);
  });
  
  const onConfirm = () => {
    emit('confirm');
    emit('update:isOpen', false);
  };
  
  const onCancel = () => {
    emit('cancel');
    emit('update:isOpen', false);
  };
</script>

<style scoped></style>
