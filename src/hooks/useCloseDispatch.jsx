import {
  closeAges,
  closeCountry,
  closeIMDb,
  closeOfTheYear,
  closeShowWith,
  closeUntilTheYear,
  closeGenre,
  closeType,
} from "../features/close/closeSlice";

const useCloseDispatch = (id, dispatch) => {
  if (id === "کشور سازنده") {
    dispatch(closeCountry(true));
    dispatch(closeShowWith(false));
    dispatch(closeAges(false));
    dispatch(closeIMDb(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeUntilTheYear(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
  } else if (id === "نمایش بر اساس") {
    dispatch(closeShowWith(true));
    dispatch(closeCountry(false));
    dispatch(closeAges(false));
    dispatch(closeIMDb(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeUntilTheYear(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
    dispatch(closeType(false));
  } else if (id === "رده سنی") {
    dispatch(closeAges(true));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeIMDb(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeUntilTheYear(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
  } else if (id === "امتیاز IMDb") {
    dispatch(closeIMDb(true));
    dispatch(closeAges(false));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeUntilTheYear(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
  } else if (id === "از سال") {
    dispatch(closeOfTheYear(true));
    dispatch(closeIMDb(false));
    dispatch(closeAges(false));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeUntilTheYear(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
  } else if (id === "تا سال") {
    dispatch(closeUntilTheYear(true));
    dispatch(closeOfTheYear(false));
    dispatch(closeIMDb(false));
    dispatch(closeAges(false));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeGenre(false));
    dispatch(closeType(false));
  } else if (id === "ژانر") {
    dispatch(closeGenre(true));
    dispatch(closeUntilTheYear(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeIMDb(false));
    dispatch(closeAges(false));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeType(false));
  } else if (id === "نوع") {
    dispatch(closeType(true));
    dispatch(closeUntilTheYear(false));
    dispatch(closeOfTheYear(false));
    dispatch(closeIMDb(false));
    dispatch(closeAges(false));
    dispatch(closeShowWith(false));
    dispatch(closeCountry(false));
    dispatch(closeGenre(false));
  }
};

export const useCloseDispatchAll = (e, dispatch) => {
  e.stopPropagation();
  dispatch(closeUntilTheYear(false));
  dispatch(closeOfTheYear(false));
  dispatch(closeIMDb(false));
  dispatch(closeAges(false));
  dispatch(closeShowWith(false));
  dispatch(closeCountry(false));
  dispatch(closeGenre(false));
  dispatch(closeType(false));
};

export default useCloseDispatch;
