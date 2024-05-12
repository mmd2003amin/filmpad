import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMDb } from "../../../features/filters/filtersSlice";
import IMDbScores from "../../../constant/IMDbScores";
import { closeIMDb } from "../../../features/close/closeSlice";

const IMDbSub = () => {
  const state = useSelector((state) => state.close.IMDb);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(IMDb(item));
    dispatch(closeIMDb(false))
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`submenu-moreFilter h-fit right-[52%] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {IMDbScores.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item.name}
            onClick={dispatchHandler}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[712px] h-fit ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {IMDbScores.map((item) => (
            <div
              className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
              key={item.id}
              onClick={dispatchHandler}
            >
              {item.name}
            </div>
          ))}
      </div>
    </>
  );
};

export default IMDbSub;
