import { combineReducers } from '@reduxjs/toolkit';
import { app, todos } from '../features';

const rootReducer = combineReducers({
  app,
  todos,
});

export default rootReducer;
