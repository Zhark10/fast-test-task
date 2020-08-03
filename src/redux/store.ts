import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import persistedReducer from './rootReducer';

const middleware: Middleware[] = [];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger);
}
const composeEnhancers = typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
) : compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const store: any = createStore(persistedReducer, enhancer);
export const configurateStore = () => {
  const persistor = persistStore(store);

  return {
    store,
    persistor,
  };
};
