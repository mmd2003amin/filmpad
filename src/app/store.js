import { configureStore } from "@reduxjs/toolkit";
import genreSlice from "../features/genre/genreSlice";
import filtersSlice from "../features/filters/filtersSlice";
import closeSlice from "../features/close/closeSlice";
import productsSlice from "../features/products/productsSlice";

const store = configureStore({
  reducer: {
    genre: genreSlice,
    filter: filtersSlice,
    close: closeSlice,
    products: productsSlice,
  },
});

export default store;
