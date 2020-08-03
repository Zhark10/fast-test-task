import { TASKS_ACTION_TYPES } from './actionTypes';
import { ITask } from './types';

const addTask = (task: ITask) => ({
  type: TASKS_ACTION_TYPES.ADD_TASK,
  payload: task
});

const removeTask = (task: ITask) => ({
  type: TASKS_ACTION_TYPES.REMOVE_TASK,
  payload: task.name
});

export const TasksActions = {
  addTask,
  removeTask
};
