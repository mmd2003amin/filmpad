import React from "react";
import shortenStory from "../../helper/shortenStory";
import { Link } from "react-router-dom";

const CardSearch = ({ data, setOpenSearch }) => {
  const { poster, title, production, genres, story, time, slug } = data;
  return (
    <Link
      to={`/${slug}`}
      onClick={() => setOpenSearch(false)}
      className="flex items-start justify-start p-[20px] rounded-[10px] hover:bg-[#363636f5] duration-200 cursor-pointer"
    >
      <img src={poster} alt={title} className="w-36 xs:w-44 rounded-md ml-5" />

      <div>
        <div className="text-[15px] font-bold flex items-center">
          <h1 className="ml-2">{title}</h1>
          <p>{production}</p>
        </div>

        <div className="flex items-center text-sm font-medium my-4">
          <p className="ml-1">{production}</p> | <p className="mr-1">{time}</p>
        </div>

        <div className="centering justify-start my-4 text-sm">
          {genres.map((genre) => (
            <p className="ml-2" key={genre.name}>
              {genre.name}
            </p>
          ))}
        </div>

        <p className="text-[13px] hidden xs:flex">{story.text}</p>
        <p className="text-[13px] xs:hidden">{shortenStory(data)}</p>
      </div>
    </Link>
  );
};

export default CardSearch;
