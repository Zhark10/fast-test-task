import { generateActionTypes } from '../../actionTypesGenerator';

const moduleName = 'tasks';

enum actionTypes {
  REMOVE_TASK,
  START_TIMER,
  STOP_TIMER,
  ADD_TASK,
}

export const TASKS_ACTION_TYPES = generateActionTypes<typeof actionTypes>(actionTypes, moduleName);
