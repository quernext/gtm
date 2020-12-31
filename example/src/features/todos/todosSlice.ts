import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Todo, TodosState } from './types';

export const loadTodos = createAsyncThunk<Todo[]>(
  '@@todos/loadTodos',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const json = response.json();
    return json;
  }
);

const initialState: TodosState = {
  items: [],
  isPending: false,
  isSucceeded: false,
  isErrored: false,
};

const todos = createSlice({
  name: '@@todos',
  initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(loadTodos.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isPending = false;
        state.isSucceeded = true;
      })
      .addCase(loadTodos.rejected, state => {
        state.items = [];
        state.isPending = false;
        state.isErrored = true;
      })
      .addCase(loadTodos.pending, state => {
        state.isPending = true;
        state.isErrored = false;
        state.isSucceeded = false;
      }),
});

export const selectTodosItems = (state: RootState) => state.todos.items;
export const selectSucceededState = (state: RootState) =>
  state.todos.isSucceeded;
export const selectErroredState = (state: RootState) => state.todos.isErrored;
export const selectPendingState = (state: RootState) => state.todos.isPending;
export const selectIsCompletedState = (state: RootState) =>
  state.todos.isSucceeded || state.todos.isErrored;

export default todos.reducer;
