import React from "react";
import { GET_GENRES } from "../../../graphql/queries";
import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { genreF } from "../../../features/filters/filtersSlice";
import { closeGenre } from "../../../features/close/closeSlice";

const GenreFilter = () => {
  const { data } = useQuery(GET_GENRES);
  const state = useSelector((state) => state.close.genre);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(genreF(item));
    dispatch(closeGenre(false)), e.stopPropagation();
  };

  return (
    <>
      <div
        className={`${
          state
            ? "scale-100 opacity-100 visible"
            : "scale-50 opacity-0 invisible"
        } hidden lg:flex duration-100 z-10 centering flex-col items-start overflow-y-auto absolute top-[60px] shadow-lg right-0 rounded-md bg-box h-72 w-44 pt-20`}
      >
        {data &&
          data.genres.map((genre) => (
            <div
              onClick={dispatchHandler}
              key={genre.name}
              className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            >
              {genre.name}
            </div>
          ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[424px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {data &&
          data.genres.map((item) => (
            <div
              className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
              key={item.name}
              onClick={dispatchHandler}
            >
              {item.name}
            </div>
          ))}
      </div>
    </>
  );
};

export default GenreFilter;
