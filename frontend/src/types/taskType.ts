export interface ITask {
  id: number;
  content: string;
  completed: boolean;
}

export interface ITaskState {
  loading: boolean;
  tasks: Array<ITask>;
  selectedTask: ITask | null;
  error: unknown;
};