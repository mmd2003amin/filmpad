import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { Switch } from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import MovieFilter from "../modules/MovieFilter";
import GenreFilter from "../modules/GenreFilter";
import filtersSwitch from "../../constant/filtersSwitch";
import MoreFilters from "../modules/MoreFilters";

const Filters = ({
  genre,
  setGenre,
  moreFilters,
  setMoreFilters,
  subMenu,
  setSubMenu,
}) => {
  const [movieFilter, setMovieFilter] = useState("همه");

  const genreHandler = (e) => {
    setGenre((prevState) => !prevState), e.stopPropagation();
  };

  const moreFiltersHandler = (e) => {
    setMoreFilters((prevState) => !prevState), e.stopPropagation();
  };

  return (
    <>
      <div className="hidden lg:flex relative footer-width text-text bg-box2 -mt-[72px] p-2.5 rounded-[30px] text-sm centering justify-between mx-auto z-20">
        <MovieFilter
          movieFilter={movieFilter}
          setMovieFilter={setMovieFilter}
        />

        <div
          onClick={genreHandler}
          className="bg-box h-14 rounded-[20px] centering w-1/12 relative cursor-pointer"
        >
          <p className="ml-1">ژانر</p>
          <MdKeyboardArrowDown
            className={`${genre && "rotate-180"} duration-200 text-lg`}
          />
          <GenreFilter genre={genre} />
        </div>

        {filtersSwitch.map((item) => (
          <div key={item.id} dir="ltr" className="w-1/12 centering">
            <Switch shape="fill" color="warning" className="text-xl mt-7" />
            <p className="ml-2">{item.name}</p>
          </div>
        ))}

        <div
          onClick={moreFiltersHandler}
          className="bg-box centering h-14 rounded-[20px] w-[14%] cursor-pointer"
        >
          <p className="ml-1">فیلتر های بیشتر</p>
          <IoFilterSharp />
        </div>

        <div className="centering h-14 rounded-[20px] bg-primary text-black w-[14%] transition-all hover:bg-[#00ff3b] cursor-pointer">
          جستجو
        </div>

        <MoreFilters
          moreFilters={moreFilters}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
        />
      </div>
    </>
  );
};

export default Filters;
