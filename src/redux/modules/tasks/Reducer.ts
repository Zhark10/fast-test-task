import {TASKS_ACTION_TYPES} from './actionTypes';
import {TTasks} from './types';
import {IAction} from 'src/redux/types/types';

export const initialValue: TTasks = {
  tasks: [],
};

export default (state = initialValue, action: IAction): TTasks => {
  switch (action.type) {
    case TASKS_ACTION_TYPES.ADD_TASK: {
      return {
        tasks: [...state.tasks, action.payload]
      };
    }
    default: {
      return state;
    }
  }
};
