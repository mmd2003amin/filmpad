import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { showWith } from "../../../features/filters/filtersSlice";
import { closeShowWith } from "../../../features/close/closeSlice";

const data = ["جدید ترین ها", "قدیمی ترین ها"];

const ShowWith = () => {
  const state = useSelector((state) => state.close.showWith);
  const dispatch = useDispatch();

  const dispatchHandler = (e) => {
    const item = e.target.innerText;
    dispatch(showWith(item));
    dispatch(closeShowWith(false));
    e.stopPropagation();
  };

  return (
    <>
      <div
        className={`submenu-moreFilter h-fit right-[20%] ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item}
            onClick={dispatchHandler}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        className={`submenu-moreFilter-mobile top-[568px] h-fit ${
          state
            ? "opacity-100 visible scale-100"
            : "opacity-0 invisible scale-50"
        }`}
      >
        {data.map((item) => (
          <div
            className="p-2 cursor-pointer hover:bg-box2 transition-all w-full"
            key={item}
            onClick={dispatchHandler}
          >
            {item}
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowWith;
