import React from "react";
import { IoFilterSharp } from "react-icons/io5";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import GenreFilter from "../modules/subMenuMoreFilter/GenreFilter";
import MoreFilters from "../modules/MoreFilters";
import { useDispatch, useSelector } from "react-redux";
import { doubleF, subtitleF } from "../../features/filters/filtersSlice";
import { closeGenre, closeMoreFilter } from "../../features/close/closeSlice";
import Type from "../modules/subMenuMoreFilter/Type";
import { filterHandler } from "../../utils/filterHandler";
import { GET_FILMS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import { allMovies } from "../../features/products/productsSlice";

const Filters = () => {
  const { data } = useQuery(GET_FILMS);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.filter);

  const genreHandler = (e) => {
    dispatch(closeGenre(true));
    e.stopPropagation();
  };

  const moreFiltersHandler = (e) => {
    dispatch(closeMoreFilter(true));
    e.stopPropagation();
  };

  const searchHandler = () => {
    const filter = filterHandler({ films: data, filters: state });
    dispatch(allMovies(filter));
  };

  return (
    <>
      <div className="hidden lg:flex relative footer-width text-text bg-box2 -mt-[85px] p-2.5 rounded-[30px] text-sm centering justify-between mx-auto z-20">
        <Type />

        <div
          onClick={genreHandler}
          className="bg-box h-14 rounded-[20px] centering w-1/12 relative cursor-pointer"
        >
          <p className="ml-1">{state.genreF ? state.genreF : "ژانر"}</p>

          <GenreFilter />
        </div>

        <div dir="ltr" className="w-1/12 centering">
          <Switch
            shape="fill"
            color="warning"
            className="text-xl mt-7"
            onClick={() => dispatch(doubleF(!state.doubleF))}
          />
          <p className="ml-2">دوبله</p>
        </div>

        <div dir="ltr" className="w-1/12 centering">
          <Switch
            shape="fill"
            color="warning"
            className="text-xl mt-7"
            onClick={() => dispatch(subtitleF(!state.subtitleF))}
          />
          <p className="ml-2">زیرنویس</p>
        </div>

        <div
          onClick={moreFiltersHandler}
          className="bg-box centering h-14 rounded-[20px] w-[14%] cursor-pointer"
        >
          <p className="ml-1">فیلتر های بیشتر</p>
          <IoFilterSharp />
        </div>

        <div
          onClick={searchHandler}
          className="centering h-14 rounded-[20px] bg-primary text-black w-[14%] transition-all hover:bg-[#00ff3b] cursor-pointer"
        >
          جستجو
        </div>

        <MoreFilters />
      </div>
    </>
  );
};

export default Filters;
