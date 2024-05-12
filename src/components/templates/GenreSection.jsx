import React from "react";
import { FaMasksTheater } from "react-icons/fa6";
import listGenreSection from "../../constant/listGenreSection";
import { useDispatch } from "react-redux";
import { genre } from "../../features/genre/genreSlice";

const GenreSection = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full md:w-[32%] text-text bg-box2 h-fit rounded-lg py-3 md:mr-1.5 centering flex-col">
      <div className="centering w-full border-b border-[#14253e] pb-3">
        <FaMasksTheater className="ml-2.5 text-[20px]" />
        <h1 className="text-[16px] font-medium">ژانر ها</h1>
      </div>

      <div className="grid grid-cols-2 gap-2 w-full p-2 mt-4">
        {listGenreSection.map((item) => (
          <div
            onClick={() => dispatch(genre(item))}
            className="w-full bg-[#14253e] rounded-md p-2.5 text-[13px] font-medium cursor-pointer"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreSection;
