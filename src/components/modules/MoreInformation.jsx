import React from "react";
import { LuPencil } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";

const MoreInformation = ({ data }) => {
  const { writer, actors } = data;
  return (
    <div className="footer-width mx-auto text-text my-7">
      <h1 className="text-[17px] font-bold">جزئیات و توضیحات</h1>

      <div className="centering max-w-80 bg-box2 rounded-[50px] text-[15px] font-normal py-[15px] px-[6] my-5">
        <LuPencil className="text-lg text-primary ml-2" />
        <p className="text-[15px] font-bold ml-1">نویسنده :</p>
        <p className="text-sm opacity-90 font-bold">{writer}</p>
      </div>

      <div className="mb-5 text-[17px] font-bold centering justify-start">
        <FaRegStar className="text-primary ml-0.5 text-[20px]" />
        <h2>ستارگان</h2>
      </div>

      <div className="centering justify-start flex-wrap">
        {actors.split("-").map((actor) => (
          <div key={actor} className="w-32 centering flex-col mt-6">
            <img src="/actor.png" alt={actor} className="w-28 rounded-full" />
            <p className="text-sm mt-5 text-center">{actor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreInformation;
