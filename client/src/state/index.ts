import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IInitialState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: IInitialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, actiion: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = actiion.payload;
    },

    setIsDarkMode: (state, actiion: PayloadAction<boolean>) => {
      state.isDarkMode = actiion.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
