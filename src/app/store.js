import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "../features/genre/genreSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
  },
});

export default store;
