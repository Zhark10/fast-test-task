import { generateActionTypes } from '../../actionTypesGenerator';

const moduleName = 'tasks';

enum actionTypes {
  REMOVE_TASK,
  CHANGE_TIMER_STATUS,
  REFRESH_TIME_BY_TASK,
  ADD_TASK,
}

export const TASKS_ACTION_TYPES = generateActionTypes<typeof actionTypes>(actionTypes, moduleName);
