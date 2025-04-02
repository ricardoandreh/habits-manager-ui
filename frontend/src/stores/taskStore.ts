import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { ITask, ITaskState, IProgress } from "@/types/taskType";
import { TaskService } from "@/services/taskService";

export const useTaskStore = defineStore("task", () => {
  const taskService = new TaskService();

  const state: ITaskState = reactive({
    loading: false,
    tasks: [
      {
        id: "1",
        title: "Corrida matinal",
        time: "7:00",
        location: "Parque",
        duration: "45min",
        icon: "mdi-run",
        color: "yellow",
        completed: true,
        type: "Movement",
      },
      {
        id: "2",
        title: "1,5L de água por dia",
        time: "O dia todo",
        location: "",
        duration: "",
        icon: "mdi-water",
        color: "cyan-darken-1",
        completed: true,
        type: "Movement",
      },
      {
        id: "3",
        title: "Trabalho",
        time: "8:30",
        location: "Escritório",
        duration: "8h",
        icon: "mdi-briefcase",
        color: "blue",
        completed: false,
        type: "ActiveMind",
      },
      {
        id: "4",
        title: "Sessão na academia",
        time: "18:00",
        location: "Academia",
        duration: "1h",
        icon: "mdi-dumbbell",
        color: "red",
        completed: false,
        type: "Movement",
      },
      {
        id: "5",
        title: "Jantar com a família",
        time: "20:00",
        location: "Casa",
        duration: "",
        icon: "mdi-home-variant-outline",
        color: "purple",
        completed: false,
        type: "Recharge",
      },
    ],
    progress: [
      { title: "Movimento e Vitalidade", value: 20,type: 'Movement', color: "light-green" },
      { title: "Mente Ativa e Criativa", value: 0,type: 'ActiveMind', color: "light-blue-lighten-3" },
      { title: "Recarga e Renovação", value: 0,type: 'Recharge', color: "deep-purple-accent-1" },
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
      const response = await taskService.getTasks();
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
      const response = await taskService.deleteTask(task.id.toString());
      state.tasks = response;
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
        oldTask.id.toString(),
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
