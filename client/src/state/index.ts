import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IInitialState {
  isSidebarCollapsed: boolean;
  isDarkMode: boolean;
}

const initialState: IInitialState = {
  isSidebarCollapsed: false,
  isDarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    isSidebarCollapsed: (state, actiion: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = actiion.payload;
    },

    isisDarkMode: (state, actiion: PayloadAction<boolean>) => {
      state.isDarkMode = actiion.payload;
    },
  },
});

export const { isSidebarCollapsed, isisDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
