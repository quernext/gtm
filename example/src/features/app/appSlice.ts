import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type AppState = {
  pageLanguage: string;
  senderCountry: string;
  senderCountryIso: string;
}

const initialState: AppState = {
  pageLanguage: 'en',
  senderCountry: 'united kingdom',
  senderCountryIso: 'GB'
}

const app = createSlice({
  name: '@@app',
  initialState,
  reducers: {},
});

export const selectAppState = (state: RootState) => state.app;

export default app.reducer;