import { TASKS_BASE } from '@/constants/apiRoutes';
import { BaseService } from '@/services/index';
import type { ITask } from '@/types/taskType';

export class TaskService extends BaseService {
    async getTasks(userId: number): Promise<ITask[]> {
        const { results } = await this.get<{ results: ITask[] }>(`${TASKS_BASE}/${userId}/`);
        return results;
    }

    async createTask(newTask: Omit<ITask, 'id'>): Promise<ITask> {
        return await this.post<ITask>(`${TASKS_BASE}/`, newTask);
    }

    async deleteTask(id: string): Promise<ITask[]> {
        const { results } = await this.delete<{ results: ITask[] }>(`${TASKS_BASE}/${id}/`);
        return results;
    }

    async updateTask(id: string, updatedTask: Partial<ITask>): Promise<ITask> {
        return await this.patch<ITask>(`${TASKS_BASE}/${id}/`, updatedTask);
    }
}
