import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ofTheYear } from "../../../features/filters/filtersSlice";
import yearProduction from "../../../constant/yearProduction";
import { closeOfTheYear } from "../../../features/close/closeSlice";

const OfTheYearSub = () => {
  const state = useSelector((state) => state.close.ofTheYear);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(ofTheYear(item));
    dispatch(closeOfTheYear(false)),
     e.stopPropagation();
  };

  return (
    <>
      <div
        className={`submenu-moreFilter right-[68%] pt-[250px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {yearProduction.map((item) => (
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
        className={`submenu-moreFilter-mobile top-[136px] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {yearProduction.map((item) => (
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

export default OfTheYearSub;
