import { GET_COUNTRIES, GET_GENRES } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import ages from "../constant/ages";
import IMDbScores from "../constant/IMDbScores";
import yearProduction from "../constant/yearProduction";

const useSubmenu = (name) => {
  const countries = useQuery(GET_COUNTRIES, GET_GENRES);
  const genres = useQuery(GET_GENRES);

  if (name === "کشور سازنده") {
    return countries.data && countries.data.countries;
  } else if (name === "نمایش بر اساس") {
    return [
      { id: 1, name: "جدید ترین ها" },
      { id: 2, name: "قدیمی ترین ها" },
    ];
  } else if (name === "رده سنی") {
    return ages;
  } else if (name === "از سال") {
    return yearProduction;
  } else if (name === "تا سال") {
    return yearProduction;
  } else if (name === "امتیاز IMDb") {
    return IMDbScores;
  } else if (name === "ژانر") {
    return genres.data && genres.data.genres;
  } else if (name === "همه") {
    return [
      { id: 1, name: "فیلم" },
      { id: 2, name: "سریال" },
    ];
  }
};

export default useSubmenu;
