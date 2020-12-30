import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof import('./rootReducer').default>;

export default store;
