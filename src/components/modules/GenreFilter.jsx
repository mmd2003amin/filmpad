import React from "react";
import { GET_GENRES } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

const GenreFilter = ({ genre }) => {
  const { data } = useQuery(GET_GENRES);

  return (
    <div
      className={`${
        genre ? "scale-100 opacity-100 visible" : "scale-50 opacity-0 invisible"
      } duration-100 z-10 centering flex-col items-start overflow-y-auto absolute top-[60px] shadow-lg right-0 rounded-md bg-box h-72 w-44`}
    >
      {data &&
        data.genres.map((genre) => (
          <div
            key={genre.name}
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
          >
            {genre.name}
          </div>
        ))}
    </div>
  );
};

export default GenreFilter;
