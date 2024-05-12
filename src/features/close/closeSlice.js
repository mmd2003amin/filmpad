import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: false,
  moreFilter: false,
  subMenu: "",
  country: false,
  showWith: false,
  ages: false,
  IMDb: false,
  ofTheYear: false,
  untilTheYear: false,
  type: false,
};

const closeSlice = createSlice({
  name: "close",
  initialState,
  reducers: {
    closeGenre: (state, action) => {
      state.genre = action.payload;
    },
    closeMoreFilter: (state, action) => {
      state.moreFilter = action.payload;
    },
    closeSubmenu: (state, action) => {
      state.subMenu = action.payload;
    },
    closeCountry: (state, action) => {
      state.country = action.payload;
    },
    closeShowWith: (state, action) => {
      state.showWith = action.payload;
    },
    closeAges: (state, action) => {
      state.ages = action.payload;
    },
    closeIMDb: (state, action) => {
      state.IMDb = action.payload;
    },
    closeOfTheYear: (state, action) => {
      state.ofTheYear = action.payload;
    },
    closeUntilTheYear: (state, action) => {
      state.untilTheYear = action.payload;
    },
    closeType: (state, action) => {
      state.type = action.payload;
    },
  },
});

export default closeSlice.reducer;
export const {
  closeGenre,
  closeMoreFilter,
  closeSubmenu,
  closeCountry,
  closeShowWith,
  closeAges,
  closeIMDb,
  closeOfTheYear,
  closeUntilTheYear,
  closeType,
} = closeSlice.actions;
