import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { AppState } from './types';

const initialState: AppState = {
  pageLanguage: 'en',
  senderCountry: 'united kingdom',
  senderCountryIso: 'GB'
}

const app = createSlice({
  name: '@@app',
  initialState,
  reducers: {},
  extraReducers: {}
});

export const selectAppState = (state: RootState) => state.app;

export default app.reducer;