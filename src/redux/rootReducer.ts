import { combineReducers } from 'redux';
import * as Reducers from './modules';

const rootReducer = combineReducers({
  ...Reducers,
});

export default rootReducer;
