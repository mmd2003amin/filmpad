import React from "react";

const MovieFilter = ({ movieFilter, setMovieFilter }) => {
  return (
    <div className="bg-box p-2.5 rounded-[20px] h-14 centering justify-around w-3/12">
      <button
        onClick={(e) => setMovieFilter(e.target.innerText)}
        className={`${movieFilter == "همه" && "movie-filter"} w-2/6`}
      >
        همه
      </button>
      <button
        onClick={(e) => setMovieFilter(e.target.innerText)}
        className={`${movieFilter == "سریال" && "movie-filter"} w-2/6`}
      >
        سریال
      </button>
      <button
        onClick={(e) => setMovieFilter(e.target.innerText)}
        className={`${movieFilter == "فیلم" && "movie-filter"} w-2/6`}
      >
        فیلم
      </button>
    </div>
  );
};

export default MovieFilter;
