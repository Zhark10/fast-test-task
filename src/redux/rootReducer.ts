import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';
import * as Reducers from './modules';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['tasks'],
};

const tasksPersistConfig = {
  key: 'tasks',
  storage: AsyncStorage,
  blacklist: ['isLoading'],
};


const rootReducer = combineReducers({
  ...Reducers,
  tasks: persistReducer(tasksPersistConfig, Reducers.tasks),
});


export default persistReducer(rootPersistConfig, rootReducer);
