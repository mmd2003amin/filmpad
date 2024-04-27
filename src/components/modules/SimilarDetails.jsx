import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FILMS } from "../../graphql/queries";
import { FiFilm } from "react-icons/fi";
import CardFilmDashboard from "./cardFilmDashboard";

const SimilarDetails = ({ film }) => {
  const { data } = useQuery(GET_FILMS);
  const filter = data.films.filter(
    (item) => item.subtitle === film.subtitle && item.title !== film.title
  );
  const showData = filter && filter.length >= 6 ? filter.slice(0, 5) : filter;

  return (
    <div className="footer-width mx-auto">
      <div className="centering justify-center xs:justify-start mt-20 text-text text-lg font-bold">
        <FiFilm className="ml-1" />
        <h1>موارد مشابه</h1>
      </div>

      <div className="centering flex-wrap justify-center lg:justify-start mt-4 mx-auto">
        {showData &&
          showData.map((item) => (
            <CardFilmDashboard key={item.name} film={item} />
          ))}
      </div>
    </div>
  );
};

export default SimilarDetails;
