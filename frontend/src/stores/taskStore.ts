import { defineStore } from "pinia";
import { computed, reactive } from "vue";
import type { ITask, ITaskState } from "@/types/taskType";
import { TaskService }  from "@/services/taskService";

export const useTaskStore = defineStore("task",
  () => {
    const taskService = new TaskService();

    const state: ITaskState = reactive({
      loading: false,
      tasks: [{
        id: 0,
        content: "teste 1",
        completed: false,
      }],
      selectedTask: null,
      error: null,
    });

    const isLoading = computed(() => state.loading);
    const tasks = computed(() => state.tasks);
    const selectedTask = computed(() => state.selectedTask);
    const error = computed(() => state.error);
    const completedTasks = computed(() => state.tasks.filter(task => task.completed));
    const incompletedTasks = computed(() => state.tasks.filter(task => !task.completed));
    
    const setLoading = (loading: boolean) => {
      state.loading = loading;
    }
    
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
    }

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
    }

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
    }
    
    const updateTask = async (oldTask: ITask, updatedTask: ITask) => {
      setLoading(true);
      try {
        const response = await taskService.updateTask(oldTask.id.toString(), updatedTask);
        const index = state.tasks.findIndex(task => task.id === oldTask.id);
        if (index !== -1) {
          state.tasks[index] = response;
        }
      } catch (err) {
        state.error = err;
      }
      finally {
        setLoading(false);
      }
    }

    return {
      isLoading,
      tasks,
      selectedTask,
      error,
      completedTasks,
      incompletedTasks,
      setLoading,
      getTasks,
      createTask,
      updateTask,
      deleteTask,
    };
  }
)