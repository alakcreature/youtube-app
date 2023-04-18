import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    suggestions: [],
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, action) => {
      state.isMenuOpen = false;
    },
    addSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const { toggleMenu, closeMenu, addSuggestions } = appSlice.actions;
export default appSlice.reducer;
