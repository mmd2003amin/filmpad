import { useSelector } from "react-redux";

const listMoreFilters = () => {
  const state = useSelector((state) => state.filter);
  const { type, genreF, country, showWith, ages, IMDb } = state;

  return [
    { id: 1, name: type ? type : "همه", dataset: "نوع" },
    { id: 2, name: genreF ? genreF : "ژانر", dataset: "ژانر" },
    { id: 6, name: country ? country : "کشور سازنده", dataset: "کشور سازنده" },
    {
      id: 7,
      name: showWith ? showWith : "نمایش بر اساس",
      dataset: "نمایش بر اساس",
    },
    { id: 8, name: ages ? ages : "رده سنی", dataset: "رده سنی" },
    { id: 9, name: IMDb ? IMDb : "امتیاز IMDb", dataset: "امتیاز IMDb" },
  ];
};

export default listMoreFilters;
