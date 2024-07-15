// path: src/redux/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import trialReducer from './trial.reducer';

const rootReducer = combineReducers({
  trial: trialReducer
});

const rootStore = configureStore({
  reducer: rootReducer
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export default rootStore;
