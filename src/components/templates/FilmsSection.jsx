import React, { useEffect } from "react";
import { GET_FILMS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import Film from "../modules/Film";
import Pagination from "../modules/Pagination";
import { useDispatch, useSelector } from "react-redux";
import Empty from "../modules/Empty";
import { allMovies } from "../../features/products/productsSlice";

const FilmsSection = () => {
  const { data, loading } = useQuery(GET_FILMS);
  const films = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => dispatch(allMovies(data.films)), 1000);
  }, [loading]);

  return (
    <div className="centering flex-col items-start w-full md:w-[68%] ml-1.5 text-text">
      {films !== undefined && films.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-1 sm:mx-0">
          {films.map((film) => (
            <Film key={film.title} data={film} />
          ))}
        </div>
      ) : (
        <div className="w-full centering">
          <Empty
            name="فیلمی با مشخصات شما یافت نشد!"
            explanation="دوباره تلاش کنید!"
            img="/movie.png"
          />
        </div>
      )}

      <Pagination />
    </div>
  );
};

export default FilmsSection;
