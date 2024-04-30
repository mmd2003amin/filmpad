import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
  name: "genre",
  initialState: { genre: "" },
  reducers: {
    genre: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export default genreSlice.reducer;
export const { genre } = genreSlice.actions;
