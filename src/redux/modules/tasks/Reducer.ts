import {TASKS_ACTION_TYPES} from './actionTypes';
import {TTasks} from './types';
import {IAction} from 'src/redux/types/types';

export const initialValue: TTasks = {
  tasks: [],
};

export default (state = initialValue, action: IAction): TTasks => {
  switch (action.type) {
    case TASKS_ACTION_TYPES.ADD_TASK:
      return {
        tasks: [...state.tasks, action.payload],
      };

    case TASKS_ACTION_TYPES.REMOVE_TASK:
      return {
        tasks: state.tasks.filter((elem) => elem.name !== action.payload.name),
      };

    case TASKS_ACTION_TYPES.CHANGE_TIMER_STATUS:
      return {
        tasks: state.tasks.map((elem) => {
          if (elem.name === action.payload.name) {
            elem.isStarted = !elem.isStarted;
          }
          return elem;
        }),
      };

    case TASKS_ACTION_TYPES.REFRESH_TIME_BY_TASK:
      return {
        tasks: state.tasks.map((elem) => {
          if (elem.name === action.payload.name) {
            elem.time = action.payload.time;
          }
          return elem;
        }),
      };
    default: {
      return state;
    }
  }
};
