import React from "react";
import agesList from "../../../constant/agesList";
import { useDispatch, useSelector } from "react-redux";
import { ages } from "../../../features/filters/filtersSlice";
import { closeAges } from "../../../features/close/closeSlice";

const Ages = () => {
  const state = useSelector((state) => state.close.ages);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(ages(item));
    dispatch(closeAges(false));
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`submenu-moreFilter right-[36%] pt-[180px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {agesList.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item.id}
            onClick={dispatchHandler}
          >
            {item.name}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[640px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {agesList.map((item) => (
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

export default Ages;
