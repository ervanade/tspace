import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: 'id', // Default language is 'id'
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
      localStorage.setItem("lang", action.payload); // Save language to localStorage
    },
  },
});

export default langSlice.reducer;
export const { setLang } = langSlice.actions;
