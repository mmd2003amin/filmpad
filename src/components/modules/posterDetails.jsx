import React from "react";
import { TiMicrophoneOutline } from "react-icons/ti";
import { PiSubtitlesLight } from "react-icons/pi";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const PosterDetails = ({ data }) => {
  const { poster, title, double, subtitle } = data;
  
  return (
    <div className="w-[50%] md:w-[25%] lg:mr-10 1200:mr-0 1200:w-[21%] relative md:ml-12 mb-10 md:mb-0">
      <img className="w-full rounded-[10px]" src={poster} alt={title} />

      <div className="absolute top-1 right-1 centering details-item-poster">
        <PiSubtitlesLight className={`${!double && "hidden"} bg-[#27ae60]`} />
        <TiMicrophoneOutline
          className={`${!subtitle && "hidden"} bg-[#ff5252]`}
        />
      </div>

      <div className="absolute -bottom-6 right-0 left-0 text-[20px] centering details-item-bottom-poster">
        <div className="group">
          <p className="right-8 group-hover:opacity-100">
            افزودن به لیست تماشا
          </p>
          <IoBookmarkOutline className="size-[50px] rounded-full bg-primary ml-2 p-3 cursor-pointer" />
        </div>
        <div className="group">
          <p className="right-[106px] group-hover:opacity-100">
            فعال سازی اعلان
          </p>
          <FaRegBell className="size-[50px] rounded-full bg-box2 p-3 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PosterDetails;
