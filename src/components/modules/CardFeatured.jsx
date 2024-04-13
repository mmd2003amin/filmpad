import React from "react";
import { BiLike } from "react-icons/bi";
import shortenStory from "../../helper/shortenStory";

const CardFeatured = ({ data }) => {
  const { poster, title, imdbScore } = data;
  
  return (
    <div>
      <img src={poster} alt={title} className="size-64 rounded-[9px]" />

      <div className="hover-featured-card p-3 text-sm">
        <div className="centering justify-between">
          <p className="centering">
            <BiLike className="ml-0.5" />
            <span>100%</span>
          </p>
          <div className="text-primary border border-primary py-[5px] px-[7px] rounded-md">
            IMDb {imdbScore}
          </div>
        </div>

        <h1 className="my-5 font-bold">{title}</h1>
        <p className="text-justify">{shortenStory(data)} ...</p>
      </div>
    </div>
  );
};

export default CardFeatured;
