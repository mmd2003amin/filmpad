import React from "react";
import { GET_FILMS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Film from "../modules/Film";
import Pagination from "../modules/Pagination";

const FilmsSection = () => {
  const { data } = useQuery(GET_FILMS);

  return (
    <div className="centering flex-col items-start w-full md:w-[68%] ml-1.5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-1 sm:mx-0">
        {data && data.films.map((film) => <Film key={film.id} data={film} />)}
      </div>
      <Pagination />
    </div>
  );
};

export default FilmsSection;
