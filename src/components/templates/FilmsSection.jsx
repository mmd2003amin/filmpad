import React from "react";
import { GET_FILMS, GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Film from "../modules/Film";
import Pagination from "../modules/Pagination";
import { useSelector } from "react-redux";
import Empty from "../modules/Empty";

const FilmsSection = () => {
  const { data } = useQuery(GET_FILMS);
  const genreName = useSelector((state) => state.genre.genre);
  const genres = useQuery(GET_GENRES);

  const filterData =
    genres.data &&
    genres.data.genres.filter((genre) => genre.name === genreName);

  return (
    <div className="centering flex-col items-start w-full md:w-[68%] ml-1.5 text-text">
      {genreName && filterData.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-1 sm:mx-0">
          {filterData[0].films.map((film) => (
            <Film key={film.title} data={film} />
          ))}
        </div>
      ) : genreName && !filterData.length ? (
        <div className="w-full centering">
          <Empty
            name="فیلمی با مشخصات شما یافت نشد!"
            explanation="دوباره تلاش کنید!"
            img="/movie.png"
          />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-1 sm:mx-0">
          {data &&
            data.films.map((film) => <Film key={film.title} data={film} />)}
        </div>
      )}
      <Pagination />
    </div>
  );
};

export default FilmsSection;
