import React, { useState } from "react";
import { IoPlayOutline } from "react-icons/io5";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import shortenStory from "../../helper/shortenStory";
import ModalTrailer from "./ModalTrailer";

const AboutDetails = ({ data }) => {
  const {
    title,
    production,
    genres,
    time,
    country,
    imdbScore,
    actors,
    director,
    trailer,
    background,
  } = data;

  const [open, setOpen] = useState(false);

  return (
    <div className="md:w-1/2 footer-width">
      <div className="text-[1.4rem] font-semibold mb-4 centering justify-start">
        <h1>{title}</h1>
        <p className="mr-1 text-[12px]">({production})</p>
      </div>

      <div className="centering justify-start">
        {genres.map((genre) => (
          <div
            className="py-1 px-2.5 rounded-[5px] bg-[#9e9e9e54] hover:bg-[#9e9e9eba] transition-all cursor-pointer text-sm font-medium mr-1"
            key={genre.name}
          >
            {genre.name}
          </div>
        ))}
      </div>

      <div className="my-2.5 centering justify-start text-[13px] font-medium">
        <div className="centering ml-3">
          <MdOutlineWatchLater className="text-[18px]" />
          <p>مدت زمان : {time}</p>
        </div>
        <div>کشور : {country}</div>
      </div>

      <p className="text-sm font-semibold mt-5">{shortenStory(data)} ...</p>

      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer my-5 centering bg-trailer py-[14px] px-5 rounded-[10px] overflow-hidden w-36 group text-sm font-semibold"
      >
        <IoPlayOutline className="ml-2.5 size-7 rounded-full bg-[#f5f5f54a] text-[12px] p-1.5 group-hover:rotate-[360deg] group-hover:scale-[50] group-hover:opacity-0 duration-1000" />
        <p>پخش تریلر</p>
      </div>

      <div className="centering justify-start">
        <div className="centering text-[18px] ml-5 cursor-pointer">
          <AiOutlineLike className="bg-white text-black size-[30px] p-[5px] rounded-full ml-1" />
          <AiOutlineDislike className="bg-white text-black size-[30px] p-[5px] rounded-full" />
        </div>
        <div className="centering">
          <div className="bg-primary rounded-[7px] px-3 py-0.5 max-w-[70px] font-bold text-black">
            IMDb
          </div>
          <p className="font-bold text-primary mr-1">{imdbScore}</p>
        </div>
      </div>

      <div className="text-sm font-medium 1400:centering justify-start mt-5">
        <h2>بازیگران :</h2>
        <p className="opacity-70">{actors}</p>
      </div>

      <div className="text-sm font-medium centering justify-start my-2.5">
        <h2>کارگردان :</h2>
        <p className="opacity-70">{director}</p>
      </div>

      <ModalTrailer
        open={open}
        setOpen={setOpen}
        src={trailer}
        poster={background}
      />
    </div>
  );
};

export default AboutDetails;
