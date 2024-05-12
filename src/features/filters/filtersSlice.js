import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doubleF: false,
  subtitleF: false,
  ofTheYear: "",
  untilTheYear: "",
  type: "همه",
  genreF: "",
  country: "",
  showWith: "",
  ages: "",
  IMDb: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    type: (state, action) => {
      state.type = action.payload;
    },
    genreF: (state, action) => {
      state.genreF = action.payload;
    },
    doubleF: (state, action) => {
      state.doubleF = action.payload;
    },
    subtitleF: (state, action) => {
      state.subtitleF = action.payload;
    },
    country: (state, action) => {
      state.country = action.payload;
    },
    showWith: (state, action) => {
      state.showWith = action.payload;
    },
    ages: (state, action) => {
      state.ages = action.payload;
    },
    IMDb: (state, action) => {
      state.IMDb = action.payload;
    },
    ofTheYear: (state, action) => {
      state.ofTheYear = action.payload;
    },
    untilTheYear: (state, action) => {
      state.untilTheYear = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const {
  type,
  genreF,
  doubleF,
  subtitleF,
  country,
  ofTheYear,
  untilTheYear,
  IMDb,
  ages,
  showWith,
} = filtersSlice.actions;
