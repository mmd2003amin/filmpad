import React from "react";

const CardFilmDashboard = ({ film }) => {
  return (
    <div
      key={film.title}
      className="rounded-[15px] w-52 400:w-40 relative mx-auto text-black mb-6 hover:scale-110 duration-300 cursor-pointer"
    >
      <img
        src={film.poster}
        alt={film.title}
        className="size-full rounded-[15px]"
      />

      <div className="absolute centering bottom-4 right-0 left-0 flex-col">
        <div className="centering font-semibold text-[11px] bg-primary rounded-[50px] py-1 px-1.5">
          {film.genres.map((genre) => (
            <p className="ml-0.5" key={genre.name}>
              {genre.name}
            </p>
          ))}
        </div>

        <div className="centering bg-[#ffffff38] font-semibold text-[11px] mt-2 rounded-[50px] py-1 px-1.5">
          <p className="ml-1">امتیاز</p>
          <p>{film.imdbScore}</p>
        </div>

        <p className="text-sm font-bold my-2.5 text-center text-white">
          {film.title}
        </p>
      </div>
    </div>
  );
};

export default CardFilmDashboard;
