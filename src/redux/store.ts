import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistedReducer from './rootReducer';
import axios from './middlewares/axios';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';

const middleware: Middleware[] = [axios, errorHandlerMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}
const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store = createStore(persistedReducer, enhancer);
export const configurateStore = () => {
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
