import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { ITask, ITaskState } from "@/types/taskType";
import { TaskService } from "@/services/taskService";
import { useAuthStore } from "./authStore";

export const useTaskStore = defineStore("task", () => {
  const taskService = new TaskService();
  const authStore = useAuthStore();
  const userId = authStore.userId;

  const state: ITaskState = reactive({
    loading: false,
    tasks: [{
      id: 0,
      title: "Caminhar",
      date: "2023-10-01",
      location: "Parque",
      icon: { label: "Caminhada", value: "mdi-walk" },
      color: "light-green",
      completed: false,
      type: "Movement",
      description: "Caminhar no parque por 30 minutos",
    }],
    progress: [
      { title: "Movimento e Vitalidade", value: 20,type: 'Movement', color: "light-green" },
      { title: "Mente Ativa e Criativa", value: 0,type: 'ActiveMind', color: "light-blue-lighten-3" },
      { title: "Recarga e Renovação", value: 0,type: 'Recharge', color: "deep-purple-accent-1" },
    ],
    icons: [
      { label: "Caminhada", value: "mdi-walk" },
      { label: "Academia", value: "mdi-dumbbell" },
      { label: "Trabalho", value: "mdi-briefcase" },
      { label: "Ler", value: "mdi-book-open" },
      { label: "Beber água", value: "mdi-water" },
      { label: "Meditar", value: "mdi-yoga" },
      { label: "Dormir", value: "mdi-sleep" },
      { label: "Circulo", value: "mdi-circle" },
    ],
    error: null,
  });

  const isLoading = computed(() => state.loading);
  const tasks = computed(() => state.tasks);
  const error = computed(() => state.error);
  const completedTasks = computed(() =>
    state.tasks.filter((task) => task.completed)
  );
  const incompletedTasks = computed(() =>
    state.tasks.filter((task) => !task.completed)
  );
  const icons = computed(() => state.icons);
  const progress = computed(() => {
    return state.progress.map((progressItem) => {
      const completedTasks = state.tasks.filter(
        (task) => task.completed && task.type === progressItem.type
      ).length;
      const totalTasks = state.tasks.filter(
        (task) => task.type === progressItem.type
      ).length;
      const value = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
      return { ...progressItem, value };
    });
  });

  const setLoading = (loading: boolean) => {
    state.loading = loading;
  };

  const getTasks = async () => {
    setLoading(true);
    try {
      const response = await taskService.getTasks(userId as number);
      state.tasks = response;
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const createTask = async (newTask: Omit<ITask, "id">) => {
    setLoading(true);
    try {
      const response = await taskService.createTask(newTask);
      state.tasks.push(response);
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (task: ITask) => {
    setLoading(true);
    try {
      if (task.id !== undefined) {
        const response = await taskService.deleteTask(task.id.toString());
        state.tasks = response;
      } else {
        throw new Error("Task ID is undefined");
      }
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const updateTask = async (oldTask: ITask, updatedTask: ITask) => {
    setLoading(true);
    try {
      const response = await taskService.updateTask(
        oldTask.id ? oldTask.id.toString() : "",
        updatedTask
      );
      const index = state.tasks.findIndex((task) => task.id === oldTask.id);
      if (index !== -1) {
        state.tasks[index] = response;
      }
    } catch (err) {
      state.error = err;
    } finally {
      setLoading(false);
    }
  };

  const getProgress = computed(() => {
    const totalTasks = state.tasks.length;
    const completedTasks = state.tasks.filter((task) => task.completed).length;
    return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  });

  return {
    isLoading,
    tasks,
    error,
    icons,
    progress,
    completedTasks,
    incompletedTasks,
    setLoading,
    getTasks,
    createTask,
    updateTask,
    deleteTask,
    getProgress,
  };
});
