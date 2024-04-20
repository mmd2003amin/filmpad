import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FILMS } from "../../graphql/queries";
import { FiFilm } from "react-icons/fi";

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
            <div
              key={item.title}
              className="rounded-[15px] w-40 relative ml-6 text-black mb-6 hover:scale-110 duration-300 cursor-pointer"
            >
              <img
                src={item.poster}
                alt={item.title}
                className="size-full rounded-[15px]"
              />

              <div className="absolute centering bottom-4 right-0 left-0 flex-col">
                <div className="centering font-semibold text-[11px] bg-primary rounded-[50px] py-1 px-1.5">
                  {item.genres.map((genre) => (
                    <p className="ml-0.5" key={genre.name}>
                      {genre.name}
                    </p>
                  ))}
                </div>

                <div className="centering bg-[#ffffff38] font-semibold text-[11px] mt-2 rounded-[50px] py-1 px-1.5">
                  <p className="ml-1">امتیاز</p>
                  <p>{item.imdbScore}</p>
                </div>

                <p className="text-sm font-bold my-2.5 text-center text-white">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SimilarDetails;
