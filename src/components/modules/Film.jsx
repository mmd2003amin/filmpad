import React from "react";
import shortenStory from "../../helper/shortenStory";
import { CiStar } from "react-icons/ci";
import { TiMicrophoneOutline } from "react-icons/ti";
import { PiSubtitlesLight, PiPlayCircleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Film = ({ data }) => {
  const { poster, slug,  imdbScore, title, background, double, subtitle, story } = data;

  return (
    <div className="w-full bg-box2 rounded-lg centering flex-col items-start relative text-text">
      <img
        src={background}
        alt={title}
        className="rounded-t-lg h-[152px] w-full"
      />

      <img
        src={poster}
        alt={title}
        className="h-36 w- m-2 rounded-sm absolute top-0 right-0 z-10"
      />

      <div className="back-poster"></div>
      <div className="back-poster2"></div>

      <h1 className="font-semibold p-2">{title}</h1>

      <p className="text-sm px-2 pt-1 font-light">{shortenStory(data)}</p>

      <div className="centering justify-start w-4/6 pr-2 my-8 items-cart-film text-sm">
        <div className="centering flex-col w-10 mx-3">
          <CiStar className="bg-star" />
          <p>{imdbScore}</p>
        </div>

        <div className={`centering flex-col w-10 mx-3 ${!double && "hidden"}`}>
          <TiMicrophoneOutline className="bg-double" />
          <p>دوبله</p>
        </div>

        <div
          className={`centering flex-col w-10 mx-3 ${!subtitle && "hidden"}`}
        >
          <PiSubtitlesLight className="bg-subtitle" />
          <p>زیرنویس</p>
        </div>

        <div className="centering flex-col w-10 mx-3">
          <PiPlayCircleLight className="bg-play" />
          <p>پخش‌آنلاین</p>
        </div>
      </div>

      <Link to={`/${slug}`} className="bg-primary hover:bg-[#00ff3b] transition-all rounded-md mx-auto mb-2 p-2.5 w-[96%] text-center text-black text-sm font-semibold">
        دانلود و تماشا فیلم
      </Link>
    </div>
  );
};

export default Film;
