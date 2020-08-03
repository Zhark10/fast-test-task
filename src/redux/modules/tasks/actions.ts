import { TASKS_ACTION_TYPES } from './actionTypes';
import { ITask } from './types';

const addTask = (task: ITask) => ({
  type: TASKS_ACTION_TYPES.ADD_TASK,
  payload: task
});

const removeTask = (task: ITask) => ({
  type: TASKS_ACTION_TYPES.REMOVE_TASK,
  payload: task
});

const changeTimerStatus = (task: ITask) => ({
  type: TASKS_ACTION_TYPES.CHANGE_TIMER_STATUS,
  payload: task
});

export const TasksActions = {
  addTask,
  removeTask,
  changeTimerStatus,
};
