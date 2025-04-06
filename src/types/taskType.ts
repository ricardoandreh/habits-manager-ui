export interface ITask {
  id?: number;
  title: string;
  date: string;
  location: string;
  icon: {
    label: string,
    value: string, 
  }
  description: string;
  color: string;
  completed: boolean;
  type: 'Movement' | 'ActiveMind' | 'Recharge' | ''
}

interface IProgress {
  title: string;
  type: 'Movement' | 'ActiveMind' | 'Recharge' | ''
  value: number;
  color: string;
}

export interface ITaskState {
  loading: boolean;
  tasks: Array<ITask>;
  progress: Array<IProgress>;
  icons: Array<{ label: string; value: string }>;
  error: unknown;
};