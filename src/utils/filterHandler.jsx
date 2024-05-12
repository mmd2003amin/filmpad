const FilterFilms = () => {
  return <></>;
};

export const filterHandler = (props) => {
  const {
    type,
    genreF,
    doubleF,
    subtitleF,
    country,
    ofTheYear,
    untilTheYear,
    IMDb,
    showWith,
  } = props.filters;

  const films = props.films && props.films.films;

  const filterType = type === "سریال" ? [] : films;

  const filterGenre = genreF
    ? films.filter((film) => film.genres.find((i) => i.name === genreF))
    : filterType;

  const filterSubtitle = subtitleF
    ? filterGenre.filter((film) => film.subtitle === true)
    : filterGenre;

  const filterDouble = doubleF
    ? filterSubtitle.filter((film) => film.double === true)
    : filterSubtitle;

  const filterCountry = country
    ? filterDouble.filter((film) => film.country === country)
    : filterDouble;

  const filterOfTheYear =
    ofTheYear && !untilTheYear
      ? filterCountry.filter((film) => +film.production >= +ofTheYear)
      : filterCountry;

  const filterUntilTheYear =
    !ofTheYear && untilTheYear
      ? filterOfTheYear.filter((film) => +film.production <= +untilTheYear)
      : filterOfTheYear;

  const filterBetweenYear =
    ofTheYear && untilTheYear
      ? filterUntilTheYear.filter(
          (film) =>
            +film.production <= +untilTheYear && +film.production >= +ofTheYear
        )
      : filterUntilTheYear;

  const filterIMDb = IMDb
    ? IMDb.includes("بالای")
      ? filterBetweenYear.filter((film) => +film.imdbScore >= 7)
      : filterBetweenYear.filter(
          (film) =>
            +film.imdbScore >= +IMDb.split(" ")[0] &&
            +film.imdbScore < +IMDb.split(" ")[2]
        )
    : filterBetweenYear;

  const filterShowWith = showWith
    ? showWith === "جدید ترین ها"
      ? [...filterIMDb].sort((a, b) => (+a.production < +b.production ? 1 : -1))
      : [...filterIMDb].sort((a, b) => (+a.production > +b.production ? 1 : -1))
    : filterIMDb;

  return filterShowWith;
};

export default FilterFilms;
