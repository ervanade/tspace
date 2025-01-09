import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "id", // Default language
};

export const langSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload; // Hanya ubah state Redux
    },
  },
});

export default langSlice.reducer;
export const { setLang } = langSlice.actions;
